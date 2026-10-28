import { promises as fs } from "node:fs";
import path from "node:path";
import { getCloudflareContext } from "@opennextjs/cloudflare";

// A small JSON store for visit counts and contact messages. On Cloudflare it lives in the
// DATA KV namespace (wrangler.jsonc); on localhost, in files under site/.data.
// Writes go through one queue so parallel requests never clobber each other.

const DIR = path.join(process.cwd(), ".data");
let queue: Promise<unknown> = Promise.resolve();

type Kv = { get(key: string, type: "json"): Promise<unknown>; put(key: string, value: string): Promise<void> };

// Only the live Worker uses KV. next dev and next build keep reading site/.data.
const onWorkers = typeof navigator !== "undefined" && navigator.userAgent === "Cloudflare-Workers";

async function kv(): Promise<Kv | null> {
  if (!onWorkers) return null;
  const { env } = await getCloudflareContext({ async: true });
  return ((env as unknown as Record<string, unknown>).DATA as Kv | undefined) ?? null;
}

export function withLock<T>(fn: () => Promise<T>): Promise<T> {
  const run = queue.then(fn, fn);
  queue = run.catch(() => undefined);
  return run;
}

export async function readJson<T>(name: string, fallback: T): Promise<T> {
  try {
    const store = await kv();
    if (store) return ((await store.get(name, "json")) as T | null) ?? fallback;
    return JSON.parse(await fs.readFile(path.join(DIR, name), "utf8")) as T;
  } catch {
    return fallback;
  }
}

export async function writeJson(name: string, data: unknown) {
  const store = await kv();
  if (store) return store.put(name, JSON.stringify(data));
  await fs.mkdir(DIR, { recursive: true });
  const file = path.join(DIR, name);
  const tmp = `${file}.${process.pid}.tmp`;
  await fs.writeFile(tmp, JSON.stringify(data));
  try {
    await fs.rename(tmp, file);
  } catch {
    // Windows can refuse the rename while another process reads the file.
    await fs.writeFile(file, JSON.stringify(data));
    await fs.rm(tmp, { force: true });
  }
}
