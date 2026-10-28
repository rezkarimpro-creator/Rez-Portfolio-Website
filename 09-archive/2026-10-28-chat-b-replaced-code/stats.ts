import { createHash } from "node:crypto";
import { OWNER_TIME_ZONE } from "@/data/site";
import tzCountry from "@/data/tz-country.json";
import { readJson, withLock, writeJson } from "@/lib/db/store";

// First party visit counts. Page views are cookieless. A visitor id exists only
// after the visitor allows the analytics cookie; it is stored hashed, per day.

type Day = { views: number; entries: number; visitors: number; bookings?: number; ids: string[] };

export type Stats = {
  since: string;
  views: number;
  entries: number;
  visitors: number;
  bookings?: number;
  days: Record<string, Day>;
  pages: Record<string, number>;
  refs: Record<string, number>;
  countries: Record<string, number>;
  devices: Record<string, number>;
  consent: { all: number; essential: number };
};

export type Message = {
  id: string;
  at: string;
  kind: "founder" | "recruiter" | "agency";
  name: string;
  email: string;
  company?: string;
  role?: string;
  needs?: string[];
  message?: string;
};

const FILE = "stats.json";
const tz = tzCountry as Record<string, string>;

export const dayKey = (d: Date) =>
  new Intl.DateTimeFormat("en-CA", {
    timeZone: OWNER_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(d);

const empty = (now: Date): Stats => ({
  since: dayKey(now),
  views: 0,
  entries: 0,
  visitors: 0,
  days: {},
  pages: {},
  refs: {},
  countries: {},
  devices: {},
  consent: { all: 0, essential: 0 },
});

const bump = (map: Record<string, number>, key: string, by = 1) => {
  map[key] = (map[key] ?? 0) + by;
};

const hashId = (id: string) => createHash("sha256").update(id).digest("hex").slice(0, 16);

export type ViewInput = {
  path: string;
  ref: string | null;
  tz: string | null;
  width: number;
  entry: boolean;
  visitorId: string | null;
  newVisitor: boolean;
  now: Date;
};

export function recordView(v: ViewInput) {
  return withLock(async () => {
    const s = await readJson<Stats>(FILE, empty(v.now));
    const key = dayKey(v.now);
    const day = (s.days[key] ??= { views: 0, entries: 0, visitors: 0, ids: [] });
    s.views += 1;
    day.views += 1;
    bump(s.pages, v.path);
    if (v.entry) {
      s.entries += 1;
      day.entries += 1;
      bump(s.refs, v.ref ?? "Direct");
      const cc = v.tz ? tz[v.tz] : undefined;
      bump(s.countries, cc ?? "Unknown");
      bump(s.devices, v.width < 768 ? "Mobile" : v.width < 1100 ? "Tablet" : "Desktop");
    }
    if (v.visitorId) {
      const h = hashId(v.visitorId);
      if (!day.ids.includes(h)) {
        day.ids.push(h);
        day.visitors += 1;
      }
      if (v.newVisitor) s.visitors += 1;
    }
    // Keep daily ids for 90 days only; the counts stay.
    const cutoff = dayKey(new Date(v.now.getTime() - 90 * 864e5));
    for (const [k, d] of Object.entries(s.days)) if (k < cutoff && d.ids.length) d.ids = [];
    await writeJson(FILE, s);
  });
}

export function recordConsent(choice: "all" | "essential", now: Date) {
  return withLock(async () => {
    const s = await readJson<Stats>(FILE, empty(now));
    s.consent[choice] += 1;
    await writeJson(FILE, s);
  });
}

/** A visitor who just allowed the cookie on this page counts for today right away. */
export function recordVisitor(visitorId: string, isNew: boolean, now: Date) {
  return withLock(async () => {
    const s = await readJson<Stats>(FILE, empty(now));
    const day = (s.days[dayKey(now)] ??= { views: 0, entries: 0, visitors: 0, ids: [] });
    const h = hashId(visitorId);
    if (!day.ids.includes(h)) {
      day.ids.push(h);
      day.visitors += 1;
    }
    if (isNew) s.visitors += 1;
    await writeJson(FILE, s);
  });
}

export function recordBooking(now: Date) {
  return withLock(async () => {
    const s = await readJson<Stats>(FILE, empty(now));
    const day = (s.days[dayKey(now)] ??= { views: 0, entries: 0, visitors: 0, ids: [] });
    s.bookings = (s.bookings ?? 0) + 1;
    day.bookings = (day.bookings ?? 0) + 1;
    await writeJson(FILE, s);
  });
}

export async function getStats(now: Date) {
  return readJson<Stats>(FILE, empty(now));
}

export async function getMessages() {
  return readJson<Message[]>("messages.json", []);
}

export function addMessage(m: Message) {
  return withLock(async () => {
    const list = await readJson<Message[]>("messages.json", []);
    list.unshift(m);
    await writeJson("messages.json", list.slice(0, 500));
  });
}
