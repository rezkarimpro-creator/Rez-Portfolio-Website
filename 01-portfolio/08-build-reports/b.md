done

# Chat B · App and data report

[README](../15-v4a-plan/README.md) · Done · 28 Oct 2026 · Opus 5.5, Max. Tasks 1 to 10 of [chat-b.md](../15-v4a-plan/chat-b.md), on F's contracts. Nothing committed, nothing deployed, local data only.

## What B did

1. **D1 (08 P1, §3.7 rows 1, 2, 14).** `src/lib/db/index.ts` keeps F's contract and now runs on D1; the SQL lives in `src/lib/db/d1.ts` (no imports, so tests run it on SQLite). New migration `0002_visits_and_counters` (add only): `views.entry`, `views.revisit`, and a `daily` counter table (day, kind) that caps views at 20,000, events at 5,000 and client errors at 200 per UTC day without a COUNT over the views. Each view is one D1 call; /stats reads everything in one batch (sums in SQL, one of the 50 queries per call). The 21 Oct `store.ts`, `stats.ts` and `faq-thread.tsx` moved to `09-archive/2026-10-28-chat-b-replaced-code/` (row in its README); the KV binding stays for rollback.
2. **Auth (security §5.1).** `src/lib/auth/token.ts` (pure): `v1.<scope>.<expiry>.<HMAC>` tokens checked for format, scope, expiry, then in constant time; passwords compared through an HMAC; attempt keys = scope plus an HMAC of the IP with a key derived from `AUTH_SECRET`. `src/lib/auth/index.ts` fails closed without a secret (normal wrong password line, one log line). Lockout 8 tries in 10 minutes in D1 (memory fallback if D1 fails). Cookies: `rk_stats` 7 days, `rk_case` 30 days, `rk_owner` and `rk_owner_ui` a year, HttpOnly except `rk_owner_ui`, Lax, Secure in production. Log out clears the three and shows Signed out.
3. **Stats (09 §5).** Sign in with Checking, Wrong password ("Wrong password. Try again."), Too many tries (field and button locked, focus on the alert), Signed out; the dashboard: 6 tiles, the 14 day chart (today brightest, day of month labels, tooltip "20 Oct · 31 views" on hover and arrow keys, one tab stop), Show as table, lists with share bars (Top pages, Where visits come from with AI assistants grouped, Countries with flags, Devices, Cookie choices with No choice yet, Actions, Qualified leads by page type), Messages (plain text, mail link, Rez's time zone, needs, timeline, budget, link, job role, the 4 preview answers, lead source line, a Qualified or Not qualified mark saved by a server action that checks the Stats token), empty states from `290:11037`. Retention runs on each sign in.
4. **Owner access (09 §1).** Owner chip (`254:12208`, 32px with a 44px hit area, icon only under 400px so the phone top bar stays on one line) with an unread count from `GET /api/owner` (Stats token only) since Rez last opened /stats; G then S (ignored in fields and with modifiers); a 1 second press on the footer © line (a tap or scroll does nothing).
5. **Recruiter case.** Locked, Wrong password ("That password didn't work. Try again, or ask for my CV."), Too many tries, Unlocked with Lock again, the Password tag and Back tile from `82:8992`; the To confirm note stays preview only.
6. **Contact (09 §4, seo §6.1, best-practices §5.1).** One form: "I'm reaching out as" (listbox), "What do you need?" (real checkboxes), Timeline and Budget chips (radio groups, a second click clears) and an optional link for Founder or team and Something else, Name, Email, Company · optional, Message; the button and placeholder follow the role; errors under each field with `aria-describedby`, focus moves to the first; values kept; Sending; Too many messages (6 an hour) and a failed save show an Alert with the email address; Sent per role with Send another and See all work. `#recruiter` picks Recruiter with "CV for a role", `#agency` picks Agency with "Overflow work", `?kind=recruiter&role=<slug>` also fills the job role (hidden field plus a helper line). Hidden fields: honeypot, start time, landing, source, page (`components/forms/form-meta.tsx`). "+" FAQs replace the chat thread.
7. **Actions and limits (security §5.2).** `sendMessage` and `requestPreview` (the invite form's action, with the errors from `291:10997`): bot guards (fake Sent), field checks, Turnstile when on, `RL_FORMS`, 6 an hour in D1, a twin within a minute stores nothing, the save, `form_sent` and `cv_request` events, the lead alert. `/api/track`: same site only (403), 2 KB (413), junk (400), bots and Rez's browser count nothing; views with family, referrer host and group (AI first, `utm_source=chatgpt.com` counts as AI), device, country from the time zone, entry and revisit; consent; client events (`cta_call`, `cal_open`, `cal_booked`, `email_copy`, `outbound`); `client_error` with its cap. `RL_TRACK` is used when bound (Request 1).
8. **Booking (07 §5.8, figma D).** Every Book button opens our Modal (`components/booking/`) with the Cal.com month view: a calendar skeleton, then the embed; the fallback (Book on Cal.com, Email me) after `linkFailed` or 8 seconds; a sheet below 640px, min(880px, 100vw minus 48px) above (F's Modal); Esc and the scrim close it and focus returns. Hover, focus or touch on a Book button preconnects and preloads Cal.com. The Contact calendar is a still placeholder that loads on a click (decision 28): no request to cal.com before it. Email copied shows the toast. Bookings count from `bookingSuccessfulV2`.
9. **Cookies and privacy (best-practices §6).** The banner from `82:9866` and `150:6429` with equal buttons; Allow sets `rk_vid` (HttpOnly, a year); Only essential deletes it at once; Cookie settings reopens it. Lead source in sessionStorage (`rk_lead`), never a cookie. Retention: messages 24 months after the person's last message (decision 27), visitor hash 90 days, views and events 25 months, attempts at the end of their window.
10. **Switches, scripts and docs.** Turnstile (`lib/turnstile.ts`, `forms/turnstile.tsx`) and lead alerts (`lib/alerts.ts`, Cloudflare `send_email` binding) are built and off. `scripts/smoke-auth.mjs` for R; `scripts/kv-to-d1.mjs` for Rez (live KV messages into D1, idempotent, prints counts only). `docs/security.md`, `docs/privacy-data.md`, `docs/runbooks/d1-backup-restore.md`. Copy lives in `src/data/contact.ts` and `src/data/stats.ts`.

## Files changed

| Kind | Files (`site/`) |
|---|---|
| New | `src/lib/auth/token.ts`, `src/lib/db/d1.ts`, `src/lib/guards.ts`, `src/lib/limits.ts`, `src/lib/alerts.ts`, `src/lib/turnstile.ts`, `src/lib/lead-source.ts`, `src/app/actions/stats.ts`, `src/app/api/owner/route.ts`, `src/components/booking/{booking-host,booking-modal,calendar-frame,calendar-skeleton}.tsx`, `src/components/forms/{chip-group,form-meta,turnstile}.tsx`, `src/components/stats/{stat-tiles,meter-list,message-list,qualified-toggle,seen-marker}.tsx`, `src/components/owner/stats-shortcut.tsx`, `src/data/contact.ts`, `src/data/stats.ts`, `migrations/0002_visits_and_counters.sql`, `tests/auth.test.ts`, `tests/auth-guards.test.ts`, `tests/auth-db.test.ts`, `scripts/smoke-auth.mjs`, `scripts/kv-to-d1.mjs` |
| Rewritten | `src/lib/auth/index.ts`, `src/lib/db/index.ts`, `src/lib/booking.ts`, `src/app/actions/{auth,contact,preview,shared}.ts`, `src/app/api/track/route.ts`, `src/app/stats/page.tsx`, `src/app/work/private/page.tsx`, `src/app/contact/page.tsx`, `src/app/contact/_components/{cal-embed,copy-email}.tsx`, `src/components/forms/{contact-form,password-form}.tsx`, `src/components/stats/daily-chart.tsx`, `src/components/providers/{tracker,consent-provider}.tsx`, `src/components/layout/{owner-chip,footer-copyright}.tsx`, `src/styles/{stats,contact}.css`, `docs/security.md`, `docs/privacy-data.md`, `docs/runbooks/d1-backup-restore.md`, `CHANGELOG.md` |
| Moved | `src/lib/db/store.ts`, `src/lib/db/stats.ts`, `src/app/contact/_components/faq-thread.tsx` → `09-archive/2026-10-28-chat-b-replaced-code/` (a row added to `09-archive/README.md`; deleting was refused by the auto mode check) |
| Local data | Migration 0002 applied to local D1. Test messages left in local D1 for R: Jordan Test, 4 Limit Test, and D's Test Person. The attempts table was cleared after the tests |

## Checks

| Check | Result |
|---|---|
| `npm test` (security §8 row 4) | Pass, 41 of 41 (B's 27: `tests/auth.test.ts` 11 on tokens good, tampered, expired, wrong scope, other secret, junk, no secret, passwords, attempt keys, cookie flags; `tests/auth-guards.test.ts` 6 on the timer, same site posts, the 2 KB cap, bots, host and path clean up; `tests/auth-db.test.ts` 10 on the real migrations in SQLite: 8 tries then locked until the window ends, per scope and visitor, a right password clears it, 6 messages an hour, the view and client error caps, messages with lead source and the qualified mark, the one minute twin, retention, the Stats sums with AI grouped, an empty database) |
| `npm run check` | Stops at `format:check` on `package.json` (not a B file). Run step by step: names pass, Prettier passes on every other file, lint pass, typecheck pass, content:check pass (3 warnings, not B's), content:lint pass, agents:check pass, check:deps pass, test pass, build pass (`/stats` and `/work/private` dynamic), check:secrets pass (72 client files scanned, no `.dev.vars` value) |
| Own files as I went | Prettier, ESLint and `tsc` clean on every B file; `content:lint -- --data` clean for `contact.ts` and `stats.ts` |
| `scripts/smoke-auth.mjs` on next dev (localhost:3000) | 35 of 35 pass: both sign ins (wrong and empty refused, right sets the cookie, HttpOnly, Lax, Path /, 7 and 30 days, v1 format, a tampered cookie shows the form again), `rk_owner` HttpOnly and `rk_owner_ui` readable, the dashboard opens, Log out clears all three and lands on Signed out, Lock again clears `rk_case`, `/api/track` 403 without Origin, 403 cross site, 413 over 2 KB, 400 junk, 204 same site, then both lockouts (the right password refused after 8 wrong tries; another visitor unaffected) |
| A message and a preview request in local D1 | Contact as Founder or team: role, needs, timeline, budget, link, landing `/contact`, source `direct`, page `/contact`, and a `form_sent` event. A preview request from chat D's invite form landed as `linkedin_preview` with its LinkedIn URL and answers. Both show on /stats |
| `/api/track` by curl | 403 no Origin, 403 cross site, 403 other Origin, 413 oversized, 400 junk, 400 unknown type, 400 a server only event, 204 bot (nothing stored), 204 view stored with family, `linkedin.com` → social, phone, GB from `Europe/London`; consent all sets `rk_vid` HttpOnly Lax a year; an error stored as `client_error` |
| BrowserOS, own background tab, closed | 1440: Stats wrong password, lockout (field and button locked, focus on the alert), sign in by paste (paste works in the password field; the test password never shown), dashboard, tooltip, table, qualified mark saved, Log out → Signed out with the chip gone; recruiter wrong, unlock, Lock again; booking modal with Cal.com, Esc closes and focus returns to the Book button; Contact errors with focus on the first, kept values and chips, a real send, Sent; recruiter prefill from `?kind=recruiter&role=presentation-designer#message`. 375: booking sheet with skeleton then fallback (cal.com blocked), cookie banner, Allow sets `rk_vid`, Only essential deletes it, Cookie settings reopens; Email copied toast; no cal.com request before the click; Contact errors; 6 an hour then Too many messages with the button off; phone dashboard and the Owner chip (32px, 44px hit area). 768: Agency picked from `#agency`. G then S opens /stats, typing "gs" in a field doesn't, a short © press doesn't, a 1 second one does. No sideways scroll on /contact, /stats and /work/private at 375, 768 and 1440 |
| `kv-to-d1.mjs` | A dry run from a fixture of 3 records into local D1: 2 copied (quotes kept), 1 unreadable skipped, a second run added nothing; the fixture rows were then removed |
| Lighthouse mobile on /contact | Not run (see Open issues) |

## Screenshots

In [b-shots/](b-shots/), named `<state>-<width>_<Figma frame id>`: Stats too many tries `144:14417`, chart with tooltip `82:9702`/`144:3943`, table view `290:10933`, messages `82:9702`, signed out `144:14457`, phone dashboard with the Owner chip `149:18212`; recruiter case sending and unlocked `146:4098`, `146:4195` (taken before the Password tag width fix; the tag now hugs its text); booking modal `82:9890`; booking fallback as a phone sheet `147:14515`, `150:6388`; cookie banner phone `150:6429`; Contact phone `149:16493`, errors `146:4240`, too many messages `146:4441`; Agency picked at 768 `82:9840`. Compared by eye with the Figma frames (read through the Figma connector): layout, copy, states and colours match; the phone Owner chip is icon only (below).

## Open issues

| For | Issue |
|---|---|
| R | Run `node scripts/smoke-auth.mjs` on `cf:preview` (B ran it on next dev only, 35 of 35). Lighthouse mobile on /contact (07 §5.10, TBT 200 ms): not run by B, since Lighthouse isn't in the project and an `npx lighthouse` download counts as an install. The biggest fix is in: nothing loads from cal.com before a click |
| R, Rez | A real Cal.com booking adding one to Calls booked (`bookingSuccessfulV2` → `cal_booked`) is wired but not exercised: it needs a real booking, then a cancel |
| R | A failed D1 write showing "That didn't send. Email me at …" is wired (the save throws without a database) but was not forced on the Worker |
| D | `src/components/invite/preview-form.tsx` posts to `requestPreview` without the lead source: render `<FormMeta />` inside it (it brings `website`, `t`, `landing`, `source`, `page` and Turnstile when on) in place of its own honeypot and start time. Its client check accepts any `linkedin.com/` link; the action wants `/in/` or `/company/` and answers with the same line |
| All | `npm run format:check` fails on `package.json` (not a B change), so `npm run check` stops there; the other steps were run one by one (above) |
| R | Dev logs show hydration mismatches from the case lightbox images (`loading` lazy vs eager), chat C's area |

## Requests

1. **`wrangler.jsonc` (E or the coordinator):** add `{ "name": "RL_TRACK", "namespace_id": "1003", "simple": { "limit": 60, "period": 60 } }` to `ratelimits` in the main and `previews` blocks, then `npm run cf:typegen`. `/api/track` uses it when present (security §5.2 asks for 60 a minute).
2. **When Turnstile is switched on (Rez decides):** `https://challenges.cloudflare.com` in the CSP `script-src` and `frame-src` (`next.config.ts`), `NEXT_PUBLIC_TURNSTILE_SITE_KEY=` in `.env.example` and `.env.production.local`, the Worker secret `TURNSTILE_SECRET_KEY`, and a line on /privacy.
3. **Lead alerts, after rezkarim.com is on Cloudflare (seo §6.3):** a `send_email` binding `LEAD_EMAIL` with `destination_address` set to Rez's verified address, and vars `LEAD_ALERTS = "1"`, `LEAD_ALERT_FROM = "alerts@rezkarim.com"`.
4. **D (privacy page):** take the cookie and storage table from `docs/privacy-data.md` (adds `rk_lead` in sessionStorage, `rk_seen` for Rez, and the Cal.com warm up note).
5. **Coordinator:** run `npx prettier --write package.json` (or the chat that changed it).
6. **Rez, before the first deploy:** `docs/runbooks/d1-backup-restore.md` "Before the first deploy" (create the database, apply both migrations, run `kv-to-d1.mjs`).

## Rez decides later

| Item | Default taken | Why |
|---|---|---|
| Stats sign in note "You stay signed in for 30 days" (Figma) | "7 days" | Decision 26 |
| New copy, marked `new` in `src/data/contact.ts` and `src/data/stats.ts` | Written in the site's voice: the Link field ("Link · optional", "Your site or deck link"), the privacy line under the button ("I use these details only to reply. Privacy"), "For the <role> role", "Add a line about the role." and "Add a line about the brief.", "That didn't send. Email me at … instead.", "That check didn't pass. Try again, or email me at …", "Show the calendar" and "It loads from Cal.com when you click.", the Actions and Qualified leads lists and their row names, the lead source line ("From … · Landed on … · Sent from …"), the preview answer labels, "Qualified" and "Not qualified" | No frame holds these; each is short and plain |
| Owner chip on phones under 400px | Icon only (aria label kept), with the count as a corner badge | At 375px the name, the "Stats" chip and the clock don't fit on one line; Figma's phone is 390 |
| Cal.com warm up on hover, focus or touch of a Book button | On, as 07 §5.8 asks | It may set Cal.com's own cookies before the click; the alternative is to warm up only after Allow |
| Daily view cap | 20,000 per UTC day, as planned | With the counter, a capped day writes about 80,000 rows (4 per view) of the free 100,000, not the 60,000 the plan estimated; 15,000 would keep the estimate |
| Retention of views, events and the visitor hash | 25 months and 90 days (best-practices §6.1 opinion) | Messages follow decision 27 |
| "I'm reaching out as" options | Founder or team, Recruiter, Agency, Something else (F's contract) | The Role menu frame `289:11026` shows the first three |
| Turnstile and lead alerts | Built, both off | Decision 24; seo §6.3 waits for the domain |

## Suggested commit message

```text
feat: move counting, messages and sign in to D1 and build the app flows

Put the storage contract on Cloudflare D1 with a second migration for
visit flags and daily counters, and give sign in tokens a signed
expiry, a fail closed path and a D1 lockout keyed by an HMAC of the IP.
Build the Stats sign in states and dashboard with the Owner chip, G then
S and the footer press; the recruiter case states; the one Contact form
with role, needs, timeline, budget, link, lead source and its states;
the booking modal with skeleton, fallback and phone sheet; the cookie
banner logic; and same site, size capped, daily capped counting. Add
Turnstile and lead alerts behind switches, the auth tests, the smoke
and KV copy scripts, and the security, privacy and D1 backup docs.
```
