# Build plan: V4a into the live site

[README](../README.md) · Draft · 22 Oct 2026, with Rez's answers from [10-confirmations.md](10-confirmations.md) applied · How to build the V4a design into `site/` with several sessions working in parallel on one shared folder. Each package below is a ready to paste kickoff prompt. Search, AI answers and speed details live in [07-search-and-speed-plan.md](07-search-and-speed-plan.md); tokens, components and flows in [06-design-system.md](06-design-system.md).

**27 Oct 2026:** the build now runs on Rez's PC. The session split and the friend's PC in §1, §2, §4 and §6 are being replaced by [15-v4a-plan/](15-v4a-plan/README.md); the package details here (§3, §5, §7 to §14) stay, and the new chats follow them.

## 1. In one screen

| Item | Plan |
|---|---|
| Goal | The site matches Figma V4a (every page and state, phones at 390, tablets at 768), adds the new case pages, and meets the search and speed plan, ready for launch on rezkarim.com |
| When | Starts once Rez has reviewed Figma and said yes ([10-confirmations.md](10-confirmations.md) row 45, the one item that still blocks). Every other decision is answered in 10 or has a default in §12 |
| Where | On a friend's PC, from a zip of this project folder (rows 83 to 87, [12-handoff.md](12-handoff.md)). One shared checkout, `01-portfolio/site`. No worktrees, no branches |
| Git and deploys | No session commits, pushes or deploys. The person at the PC commits by hand. The friend hands the finished project back and Rez deploys from his own PC with his own login (row 84) |
| Shape | Wave 0: F (foundation) and I (image pipeline) in parallel. Wave 1: P1 to P7 in parallel, each owning its own files. Wave 2: R (review and end to end tests) |
| Elapsed time | About 10 to 14 hours: wave 0 about 3 to 4, wave 1 about 4 to 6, R about 3 to 4 |
| Session time and tokens | About 27 to 41 session hours and 4.9 to 7.5 million tokens across 10 sessions. Rough |
| Acceptance | [09-functional-checklist.md](09-functional-checklist.md) is the list Rez wants met. Each package's "Done when" names its sections there, and R runs it in full as the final test pass |
| Rez's answers | [10-confirmations.md](10-confirmations.md), answered 22 Oct. Its answers win over every other file; where an item is Default, the build uses the default written there. Facts from Rez's outside files are in [00-facts.md](00-facts.md) |
| Done | Every line of 09 passes on localhost and on the Cloudflare preview, the checks in §8 pass, the budgets in 07 §5.2 are met, and R hands back a short "You check" list for Rez and the deploy steps (§10) |

Rez asked for several parallel sessions (22 Oct), so this plan uses 9 build packages and 1 review, within the 10 session limit of the planning rules.

## 2. Before wave 0

| # | Item | Who |
|---|---|---|
| 1 | Rez has reviewed Figma and said yes (10-confirmations row 45) | Rez |
| 2 | Rez commits `site/` by hand as it is now, before the zip, so R can review one clean diff (row 75). The zip keeps `site/.git` | Rez |
| 3 | `site/.env.local` is not in the zip (row 89). Copy `site/.env.example` to `site/.env.local` and set test values for `STATS_PASSWORD`, `RECRUITER_PASSWORD` and `AUTH_SECRET`, never the live ones | The person at the PC, F checks |

Baseline on 22 Oct on Rez's PC (checked by the main session): `tsc --noEmit` passes, `npm run build` passes (all routes prerender; /stats and /work/private are dynamic), `eslint src` is clean. `npx eslint .` fails only inside the generated `.open-next/` folder.

## 3. Work map: Figma to code

Every item of the Handoff build checklist (`157:7053`, including "Added 22 Oct (Rez)") and every flow (`156:2`), with the package that owns it. Frame names are on the Pages page; component rules are in each component's description on the Design system page.

### 3.1 Tokens and responsive (F)

| Figma | Code work |
|---|---|
| Theme, Responsive and Typography collections | Move the CSS tokens to the names in each variable's Web code syntax (the full list is in 06 §4). Components use semantic tokens only |
| New tokens | `--glass-hover`, `--surface-subtle`, `--scrim`, `--note-bg`, `--danger-bg`, `--success-bg`, `--border-hover`, `--border-focus`, `--focus-ring`, `--color-danger`, `--color-success`, `--color-cta-pressed`, `--chart-bar`, `--chart-bar-current`, `--chart-grid`, `--chart-meter` |
| text/tertiary | `--color-ink-3` goes from #6B7280 to #7D8592 (AA at 13px on glass) |
| Responsive modes | Desktop and Tablet share values; one `@media (max-width: 639px)` block sets the Mobile values (06 §3 and §4), including 40px chips |
| Effects and type | The effect styles (06 §6) as shared classes; the 15 text styles as the `.t-*` classes (06 §5) |
| Naming clash | `--glow` is a colour in Figma and an RGB triplet in code today. Keep the Figma name for the colour and make alpha versions with `color-mix()` |
| CSS split | `globals.css` imports `src/styles/tokens.css`, `base.css`, `components.css` (F) and one file per package (`stats.css`, `contact.css`, `home-work.css`, `pages.css`, `cases.css`, `invite.css`, `motion.css`), which F creates empty |

### 3.2 Components

| Component | What changes | Package |
|---|---|---|
| Action pill | Pressed fill, focus ring 2px with a 3px offset, disabled at 40% without glow, loading with a spinner and `aria-busy`, no rim stroke at rest | F |
| Glass pill | L 64px (56 on phones) with an 18px label (17 on phones), S 48px with 16px; all states; arrow right inside the site, External icon outside | F |
| Icon tile | Decorative and Button kinds (Button: black 50% plus blur, hover, focus, `aria-label`) | F |
| Tag, Filter chip, Template row, Call card, Card | Kinds and states from the Design system | F |
| Field, Select, Alert, Toast, Tooltip, Modal, Skeleton, Empty state, FAQ item | New shared components with their states and `aria` rules (06 §7) | F |
| Icons | Every icon on the Design system page (07 · Icons) in `Icon.tsx` | F |
| Top bar and Footer | Clock in Label/S; footer eyebrows in text/muted; "Remote"; slots for the Owner chip and the © press | F (look), P1 (owner parts) |
| Dock | Active item per page, Tooltip after 300ms, `aria-current` | P3 |
| Cookie banner | Equal buttons, above the dock on phones, `role="dialog"`, focus on Allow | P2 |
| Work card, Archive card, Pause tile | Covers, locked states, the archive rows (§3.8) | P3 |
| Stat tile, Meter row, Message row, Owner chip | Stats parts | P1 |
| Next case, Media, Meta cell, Decision row, Proof item | Case parts | P5 |
| Accordion pill, Track switch, Highlight row, Timeline item, Offer card | Inner page parts | P4 |
| Package card, Perk level, LinkedIn before and after, Profile sample tile | LinkedIn invite parts | P6 |

### 3.3 Flows

| Flow | Figma frames | Code work | Package |
|---|---|---|---|
| Owner access to Stats | Stats · Sign in `144:14107`, Checking `144:14352`, Wrong password `144:14385`, Too many tries `144:14417`, Signed out `144:14457`, Dashboard (owner) `82:9702`, Mobile `149:18053`, `149:18212` | Sign in states, G then S (ignored while typing), a 1 second press on the footer © line, Owner chip from a browser readable flag cookie (no page reads cookies on the server), Log out, the dashboard in the new parts | P1 |
| Recruiter case | Case · Locked `82:8992`, Wrong password `146:4098`, Too many tries `146:4144`, Unlocked `146:4195`, Mobile `149:16081` | Designed states over the new auth | P1 |
| Send a message | Contact `82:9286`, Dropdown open `96:3448`, Recruiter picked `82:9826`, Agency picked `82:9840`, Errors `146:4240`, Sending `146:4366`, Too many messages `146:4441`, Sent `82:9855`, Sent (recruiter) `146:4517` | One form with role and needs selects, helper lines per field, the button and note per role, spam guards, messages on Stats | P2 |
| Book a call | Booking modal `82:9890`, Booking loading `147:14408`, Booking fallback `147:14515`, Mobile booking sheet `150:6388` | Our Modal hosts the Cal.com embed: skeleton, fallback after `linkFailed` or 8 seconds, phone sheet, warm up on intent (07 §5.8) | P2 |
| Cookies | Cookie banner `82:9866`, Mobile `150:6429` | Look and logic | P2 |
| Email copied | `147:14638` | Toast | P2 |
| Lightbox | Lightbox `82:9884`, Mobile `150:6502` | Caption "Case name · 2 of 7", swipe on phones | P5 |
| LinkedIn invite | Desktop `92:2862`, Mobile `93:3126`, Form thanks `93:3111` | The page and its form UI | P6 (page), P2 (form action) |

### 3.4 Copy

Exact wording comes from the frames.

| Where | Change | Package |
|---|---|---|
| `site.ts` (used everywhere) | "Remote" for location; steps say "A free call with 3 fixes" and "You leave with 3 fixes."; the 3 Contact FAQs without the time zone one; templates; footer columns | F |
| Everywhere | The button is always "Book free strategy call"; the call card title is "Need a brand, website or deck that wins clients?" under the line "Free 20 minute call · Sunday to Thursday" (Rez, 22 Oct); numbers as digits; one work link "See all work" with an arrow right; arrow up right only for other sites; track labels All, Brand, Web & UI/UX, Pitch decks | Each package on its own pages |
| Home | Archive line "More brand, web and deck work."; "Free templates for your pitch and profile"; template rows say Coming soon until the Gumroad links exist; no "Show 3 more" under Career highlights | P3 |
| Work | No Back tile; "Case study on the way" everywhere; filter "Pitch decks"; no NDA card; On request is a 2 by 2 grid (Omega Health Care, Astra, GHX Summit, Full case for recruiters; Coming soon has no link, Password goes to /work/private) under "Cases still in progress, or kept for recruiters." (row 60); intro "Brand identities, websites, pitch decks and social. Some cases open on request." (row 81; Rez OK'd both lines, 22 Oct); Nike Mind card meta "Investor deck, not affiliated with Nike", archive label "Nike Mind · Unofficial deck"; no Client, Concept or To confirm tags and no years on the cards (row 81) | P3 |
| Cases | "3 design decisions" on every case; Nike Mind brief without a colon; Earworm "Result" becomes "Proof"; the credit note on every My role card (preview only); no Client, Concept or To confirm tags and no year in the meta (row 81), Nike Mind keeps "Not affiliated with Nike"; the Earworm quote is its last sentence only, by Ben Farley, Founder & CEO (rows 25, 80); Samā's hero "A flight booking app for premium travel, in English and Arabic." and overview "Samā is an app for exploring and booking premium flights." (row 19, Rez OK'd, 22 Oct); My role cards show Client where named, Scope, and Role or Studio, with no Type or Year row; SolVita is Rez's own client, so no studio line and the Role "Designer, brand identity and website" (row 3); Nike Mind's hero, cards, Next case thumb and share image use the clean cover (Figma component `212:8331`, no header, footer or year texts) | P5 |
| Career | Earworm detail keeps the exact claim; recognition newest first; "Startup pitching coach and mentor"; highlight tags "Pitch decks" and "Web & UI/UX"; no Taste Labs at all, title and line included (row 61); DashBloom "Jan 2024 to Sep 2026", so no role is current (row 78) | P4 |
| About | No city: the lead is "I'm a brand and website designer working remotely with US and UK teams." and the facts are Works with and Experience, with no Based fact (row 50, Rez OK'd, 22 Oct); no Taste Labs (61); DashBloom as a past role (78) | P4 |
| Contact | The Recruiter note drops "Dhaka" (row 50); no "Prefer a call?" line; "Times show in your own time zone." under the calendar; selects start empty (Pick one, Pick all that apply); "+" FAQs | P2 |
| Work with me | "Monthly design support", never "Monthly Design Team" (row 49); the "need your OK" notes go (rows 33, 36); revisions, guarantee terms and payment methods stay hidden (34); "$800 to $3k a month"; step 01 "A free call with 3 fixes"; first question open; "+" FAQs | P4 |
| For agencies | The hours row reads "My evenings overlap US mornings and UK afternoons." (row 50, Rez OK'd, 22 Oct); closing card (Try it on one real brief, Ask about the pilot); Brand, Websites, Decks order; static tags; "Each comes with production support." | P4 |
| Privacy | Lines for the LinkedIn preview form and Gumroad | P4 |
| 404 | "It may have moved. The work and the contact page are one click away." with Go home, See all work, Contact | P4 |

### 3.5 Pages and case data

| Item | Code work | Package |
|---|---|---|
| Chrome on the invite page | `ChromeGate` hides the dock on /linkedin/invite and marks the route so the footer can hide on phones (the desktop frame shows the top bar and footer, the mobile frame shows no footer). No route groups, no moved files | F |
| Case type v2 | `description`, `year`, `services`; `next` worked out from the order, never typed by hand. `year` stays in the data only and is never rendered (row 81) | F (type), P5 (data) |
| Existing cases | Copy fixes; SyncGrid's new cover (frame `172:7109` in section `172:7108`); CargoShift's added images (cs-08 to cs-10, `170:7163` inside `170:7049`) | P5 |
| New case pages | From "V4a · New case pages (22 Oct)" (`172:17339`): YumYum `172:17340`, ALPHA `172:17487`, Taif `172:17657`, Gravix `173:7413`, Azora `173:7572`, Nexus `173:17801`, Bristo `174:17930`, Orion `174:18325`, ReSpace `176:7948`, LYFT `177:18171`, IsHamn `177:18489`, Samā `177:18636`, CortexAI `178:8398`, Livio `179:8514` (all 14 designed; ids checked 27 Oct). Images from "Assets · New cases (22 Oct)" (`170:7049`, in section `170:7048`). Slugs `yumyum`, `alpha`, `taif`, `gravix`, `azora`, `nexus`, `bristo`, `orion`, `respace`, `lyft`, `ishamn`, `sama`, `cortexai`, `livio` | P5 |
| Work page lists | Omega Health Care and SolVita stay on Work; Omega moves to On request; new cases join the grid and filters; archive tiles link to cases that have a page | P5 (data), P3 (page) |

### 3.6 Search and speed (from 07)

| Item | 07 section | Package |
|---|---|---|
| Titles, descriptions, canonicals, the metadata helper | §3.2, §3.3 | P7 (F puts one line in every page) |
| Share images (Figma section `170:7174`) and icons | §3.4 | P7 |
| Sitemap, robots, the launch switch, llms.txt, AI crawler policy | §3.5, §4.5, §4.6 | P7 |
| JSON-LD per page type | §4.3 | P7 (F puts one line in every page) |
| Internal links and alt text | §3.6, §3.7 | P3, P4, P5, P6 on their own pages |
| 404 handling, host redirect, IndexNow | §3.8, §3.9 | P7 |
| Image pipeline | §5.4 | I |
| Fonts, Motion setup | §5.5, §5.6 | F |
| Motion in each component | §5.6 | Each package converts its own files to `m` components |
| First view reveals, sound, Lenis, cache headers | §5.6, §5.7, §5.9 | P7 |
| Cal.com loading | §5.8 | P2 |
| Measuring and budgets | §5.10 | P7 measures, R signs off |

### 3.7 Fixes found while planning

| # | Found | Fix | Package |
|---|---|---|---|
| 1 | Every page view rewrites one KV value; the free plan allows 1,000 KV writes a day and 1 write a second per key, so counts break past about 1,000 views a day | D1 (free, 100,000 rows written a day), one row per event (schema in §13.2) | F (schema, binding), P1 |
| 2 | Password lockout and the message limit live in Worker memory, which is not shared and resets | Attempts stored in D1, keyed by a hash of `cf-connecting-ip` and the scope; no IP stored | P1, P2 |
| 3 | Sign in tokens never expire on the server, and `AUTH_SECRET` falls back to a fixed string | Signed expiry in each token; no sign in at all in production without the secret | P1 |
| 4 | The ambient loop (2.3 to 2.5 MB) downloads 1.5 seconds after every page load | Download after the first click only, smaller files (07 §5.7) | P7 |
| 5 | Newsreader italic (147 KB) is preloaded on every page, never used | Drop italic | F |
| 6 | First view cards stay invisible until the reveal script runs (mobile LCP 5.8s) | First view cards visible without scripts (07 §5.6) | P7 |
| 7 | On /work the first cover is lazy loaded and is the LCP | First two covers eager with high priority | P3 |
| 8 | On /contact Cal.com loads at once (about 2 MB, LCP 9.7s) | Load on a click on its placeholder (decision 28, 27 Oct) | P2 |
| 9 | Static files carry `max-age=0`; `/_next/image` runs the Worker and Cloudflare Images on every hit | Static WebP files through a custom loader (§6 I), `public/_headers` | I, P7 |
| 10 | The image manifest script is not in the repo | `scripts/images.mjs` | I |
| 11 | A page's `openGraph` replaces the site level one (shallow merge) | One metadata helper | P7 |
| 12 | No `typecheck` script; `eslint .` trips on generated folders | `typecheck`, `check`, and `.open-next/**`, `.wrangler/**` in the eslint ignores | F |
| 13 | The Worker also answers on `workers.dev` and preview URLs | `"workers_dev": false`, `"preview_urls": false`, host redirect | P7 |
| 14 | Free Workers allow 100,000 requests a day and 10 ms CPU each | Static images, light Stats (sums in SQL), check errors 1102 and 1027 after each deploy | I, P1, R |

### 3.8 Added 22 Oct by Rez

| Item | Code work | Package |
|---|---|---|
| Archive rows on Home and Work | Images in original colour at rest (no grey, no darkening). A black fade on both edges only. Two rows auto slide in opposite directions, pause on hover and with the Pause tile. Press and drag a row to slide it by hand (pointer and touch), with a little inertia, then the auto slide carries on from where it was left. Cursor shows grab, then grabbing. A click without a drag still shows the name. Reduced motion: no auto slide, dragging still works. Keep it to transform only, so it stays smooth | P3 |
| Home "Selected work" | Exactly four cases, in this order: Earworm investor deck, Real estate website, SyncGrid (branding), YumYum (branding). Omega Health Care and SolVita stay on the Work page | P5 sets `homeOrder`; P3 makes the grid skip a slug that has no data yet |

## 4. Packages, order and estimates

| Package | What | Model and effort | Starts after | Time | Tokens |
|---|---|---|---|---|---|
| F | Foundation: tokens, shared components, layout and chrome, contracts, `site.ts` copy | Opus 5.5 · High | §2 | 3 to 4 h | 0.5 to 0.8M |
| I | Image pipeline: static WebP files, custom loader, manifest | Opus 5.5 · High | §2, alongside F | 1 to 2 h | 0.2 to 0.4M |
| P1 | Stats and auth (critical) | Opus 5.5 · Extra high | F | 3 to 4 h | 0.5 to 0.8M |
| P2 | Contact, booking, cookies, both form actions | Opus 5.5 · High | F | 3 to 4 h | 0.5 to 0.8M |
| P3 | Home, Work, dock and the archive rows | Opus 5.5 · High | F | 2 to 4 h | 0.4 to 0.6M |
| P4 | Inner pages: services, Career, About, Free, Work with me, For agencies, Privacy, 404 | Opus 5.5 · High | F | 3 to 5 h | 0.5 to 0.8M |
| P5 | Case pages and the new cases | Opus 5.5 · High | F (image steps after I) | 4 to 6 h | 0.8 to 1.2M |
| P6 | LinkedIn invite page | Opus 5.5 · High | F (image steps after I) | 2 to 4 h | 0.4 to 0.6M |
| P7 | Search and speed | Opus 5.5 · High | F | 3 to 4 h | 0.5 to 0.8M |
| R | Review and end to end tests | Opus 5.5 · Extra high | All reports | 3 to 4 h | 0.6 to 0.9M |

A package "starts after F" when `01-portfolio/08-build-reports/f-foundation.md` exists and says done. If fewer sessions are free, pair them: P1 with P2, P3 with P4, P5 with P6, P7 alone.

## 5. Rules for every package

1. Open the session in `01-portfolio`. Read `CLAUDE.md`, this section, §7 and your package in §6, then 06, the 07 sections your package names, your sections of `09-functional-checklist.md`, and `10-confirmations.md` if it exists. Rez's answers in 10 win over §12's defaults; for anything he hasn't answered, use the default. Say in one line what you are about to do.
2. Your work is done only when every 09 line your package names passes. If a 09 line and a Figma frame disagree, follow 10-confirmations.md if it settles it, otherwise the frame, and note it in your report.
3. Work directly. No agents.
4. No git commands that write (commit, stash, reset, checkout, switch, branch). No deploys. No `wrangler` command that touches Cloudflare (`deploy`, `d1 create`, `secret`, anything with `--remote`). Rez does those by hand.
5. Edit only the files your package owns (§6 and §7). Need a change elsewhere? Add it under Requests in your report and carry on.
6. No installs in wave 1. F installs every planned dependency; if you truly need another, ask under Requests.
7. One `next dev` per folder (Next 16 locks it). Check `http://localhost:3000` first: if it answers, use it; if not, start the dev server with preview_start "portfolio-site" (`.claude/launch.json` at the project root) and look at pages in BrowserOS (rule 11). Never stop the dev server while others work. Run `npm run build` only at the end; if it says another build is running, wait and retry. Only F, I and R run `cf:build` and `cf:preview`.
8. Local data only (`.wrangler/state`, `site/.data`); never the live KV or D1. Never print passwords or secrets.
9. Typecheck and lint cover the whole project. Ignore errors in files other packages own; retry later if they block you.
10. Copy rules: no em dash, colon, semicolon or hyphen in visible copy, except in names and locked claims. Claims word for word (CLAUDE.md hard rule 4, [00-facts.md](00-facts.md)). Never Taste Labs in any form (row 61). No Client or Concept tags and no years on cases (row 81). No city (row 50).
11. Every browser check uses BrowserOS, localhost included, in the session's own background tab, closed when done (row 71). Screenshots need the focus and screencast step in the root CLAUDE.md. Never the built-in preview pane or Claude in Chrome.
12. Motion: convert the components you own from `motion.` to `m.` (F sets up `LazyMotion`).
13. Images: put masters in `site/assets/images/<area>/` and run `npm run images` (after I is done). If two runs overlap, run it again; it rebuilds everything from the masters.
14. Figma is read only. Load the figma-use skill before any `use_figma` call.
15. When done: write `01-portfolio/08-build-reports/<package>.md` (done, files, checks with results, open issues, requests) and add one dated line to "Where things stand" in `01-portfolio/CLAUDE.md` with the Edit tool. Never rewrite either file.

## 6. Packages (each block is the kickoff prompt)

Paste one block per session, opened in `F:\🚩 CLAUDE\Rez Portfolio Website\01-portfolio`, with the model in §4.

### F · Foundation

```text
You are package F (Foundation) of the V4a build of Rezaul Karim's portfolio. Several sessions build it at the same time in one shared folder, 01-portfolio/site. Package I (image pipeline) runs next to you; P1 to P7 start when your report says done.

Goal. Lay the shared ground fast so seven packages can build in parallel. Tokens, shared components, layout and chrome, contracts, and the site wide copy. Keep every page working.

Read first. 01-portfolio/CLAUDE.md, 08-build-plan.md §3, §5, §7 and §13, 06-design-system.md (all), 07-search-and-speed-plan.md §5.5 and §5.6, 09-functional-checklist.md §1 and §8, and 10-confirmations.md if it exists (its answers win over the defaults in 08 §12).

You own (until your report says done). site/package.json, package-lock.json, eslint.config.mjs, tsconfig.json, next.config.ts, wrangler.jsonc, .env.example, src/app/globals.css, src/styles/** (create), src/app/layout.tsx, src/components/ui.tsx, ActionPill.tsx, Icon.tsx, Providers.tsx, VisitorClock.tsx, chrome.tsx, new shared components (Field, Select, Alert, Toast, Tooltip, Modal, Skeleton, EmptyState, FaqItem, ChromeGate, one file each in src/components/), src/lib/seo.ts and src/components/JsonLd.tsx (stubs), src/lib/forms.ts, src/lib/db.ts, src/app/actions/** (split from src/app/actions.ts, which you delete), src/data/site.ts, src/data/work.ts (type only), src/lib/routes.ts, migrations/0001_init.sql, and one line each in every page file (the metadata line and the JsonLd line). Don't touch Nav.tsx, Consent.tsx or any page content.

Inputs. Figma file 2PZQVIX9UJO8NqnXNqiNDe, read only. Variables (one call, §13.1). Design system page 114:13313 (component descriptions). Handoff checklist 157:7053. Home 82:8363 and Contact 82:9286 for the site.ts copy.

Do, in order.
1. In your first ten minutes, so I is never blocked: add .open-next/** and .wrangler/** to the eslint ignores; in next.config.ts add images { loader: "custom", loaderFile: "./src/lib/image-loader.ts", deviceSizes: [480, 750, 1080, 1400], imageSizes: [64, 128, 240] } and create src/lib/image-loader.ts as a stub that returns src unchanged (I owns that file from then on).
2. npm i -D sharp satori schema-dts. Scripts: typecheck (next typegen && tsc --noEmit), check (lint, typecheck, build), images (node scripts/images.mjs), og (node scripts/og.mjs), indexnow (node scripts/indexnow.mjs), test (node --test --experimental-strip-types tests/).
3. Tokens and the CSS split (§3.1). Create the empty package CSS files and import them all from globals.css.
4. Shared components (§3.2, rows marked F), each with the states and aria rules in its Figma description. Every icon from the Design system icon section in Icon.tsx.
5. Layout and chrome: drop Newsreader italic; LazyMotion with features loaded after hydration in Providers, plus the Toast provider; ChromeGate (dock hidden on /linkedin/invite, a data attribute on the footer wrapper so P6 can hide it on phones); top bar clock in Label/S with an empty Owner chip slot; footer eyebrows, "Remote", and the © line in a small client component P1 will fill. Convert ActionPill to m components.
6. Contracts (§7 table "Contracts"), written as types and working stubs: seo.ts returns today's titles and descriptions; JsonLd renders nothing; forms.ts holds field names, roles, needs per role and FormState with per field errors; actions split into actions/auth.ts, contact.ts and preview.ts with today's logic, preview.ts returning success; db.ts as the storage interface over today's store; migrations/0001_init.sql (§13.2); the D1 binding in wrangler.jsonc with a placeholder id and local bindings in next dev through OpenNext's dev setup; Case type v2 in work.ts, with the description of the 7 current cases copied from 07 §3.2 and next worked out from the order; /linkedin/invite in routes.ts; NEXT_PUBLIC_INDEXABLE and NEXT_PUBLIC_INVITE_LIVE in .env.example.
7. Put `export const metadata = pageMeta("<key>")` (cases: generateMetadata with caseMeta) and one `<JsonLd page="<key>" />` in every page file, and `<JsonLd page="site" />` in layout.tsx. Change nothing else in pages.
8. site.ts copy (§3.4 first row), word for word from the frames.

Checks. npm run check; npm run cf:build and npm run cf:preview, every route answers; page text of every route; screenshots of the shared components next to their Design system frames at 375 and 1440.

Done when. All checks pass, every route still renders, the top bar and footer rows of 09 §1 and the 09 §8 rows for lint, typecheck, build, focus ring and contrast pass, the contracts exist in code and are listed in your report, and the report says "done" in its first line so wave 1 can start.

Report. 01-portfolio/08-build-reports/f-foundation.md, plus one dated line in "Where things stand".
```

### I · Image pipeline

```text
You are package I (image pipeline) of the V4a build of Rezaul Karim's portfolio. Several sessions build it at the same time in one shared folder, 01-portfolio/site. Package F runs next to you.

Goal. Every image becomes a static WebP file at fixed widths, served without the Worker and cached for a year, with no change to any component.

Read first. 01-portfolio/CLAUDE.md, 08-build-plan.md §5 and §7, 07-search-and-speed-plan.md §5.4 and §5.9, 09-functional-checklist.md §8 (images and console rows), and 10-confirmations.md if it exists.

You own. scripts/images.mjs, src/lib/image-loader.ts (after F creates its stub in F's first ten minutes; until then work on the script), src/lib/img.ts, src/data/images.json, site/assets/images/** (masters), and the generated files in public/images/**.

Inputs. The current images in public/images (1400px wide masters) and src/data/images.json.

Do, in order.
1. Move the masters to site/assets/images/ (same subfolders). Keep public/images/backdrop.jpg and public/images/rez/headshot.jpg as plain files too; CSS and structured data use them directly.
2. scripts/images.mjs with sharp: for each master write public/images/<path>/<name>.<hash>.<width>.webp at 480, 750, 1080 and 1400 (64, 128 and 240 for thumbs and the avatar; never wider than the master), quality about 72, plus a 16px blur placeholder and the size in images.json. Same keys as today. It rebuilds everything from the masters, so it is safe to run again.
3. img() returns src as the hashed base path (for example /images/work/ew-01.3fa9c2); the loader returns `${src}.${width}.webp` for the nearest generated width at or above the one asked for.
4. Check every page that shows images: same look, no 404s, srcset only lists real files.
5. Tell P7 in your report which paths are now immutable.

Checks. npm run images twice (same output); npm run typecheck; npm run build; cf:build and cf:preview with a look at Home, Work, a case and About; curl a few image URLs for 200 and the size.

Done when. No request to /_next/image remains, every image loads from public/images, the 09 §8 images row passes with no console errors, and sizes are listed in your report (before and after).

Report. 01-portfolio/08-build-reports/i-images.md, plus one dated line in "Where things stand".
```

### P1 · Stats and auth

```text
You are package P1 (Stats and auth) of the V4a build of Rezaul Karim's portfolio. Several sessions build it at the same time in one shared folder, 01-portfolio/site. Start only when 01-portfolio/08-build-reports/f-foundation.md says done.

Goal. The private Stats sign in and dashboard, the recruiter case, and the storage and auth behind them, matching Figma and safe on Cloudflare Workers. This is critical code: test it properly.

Read first. 01-portfolio/CLAUDE.md, 08-build-plan.md §3.3, §3.7, §5, §7 and §13.2, 06-design-system.md §7 and §8, 07-search-and-speed-plan.md §5.2 (Worker limits), 09-functional-checklist.md §1 (Owner chip, G then S), §3 (/work/private), §5 and §6, and 10-confirmations.md if it exists.

You own. src/app/stats/**, src/app/work/private/**, src/app/actions/auth.ts, src/app/api/track/route.ts, src/lib/auth.ts, src/lib/stats.ts, src/lib/store.ts, the implementation inside src/lib/db.ts (keep its interface), src/components/Forms.tsx, DailyChart.tsx, Tracker.tsx, the Owner chip slot and the © press in chrome.tsx, new src/components/owner/** and src/components/stats/**, src/styles/stats.css, new files in migrations/, tests/**, scripts/smoke-auth.mjs, scripts/kv-to-d1.mjs.

Inputs. Figma file 2PZQVIX9UJO8NqnXNqiNDe, read only. Stats · Sign in 144:14107 and its states 144:14352, 144:14385, 144:14417, 144:14457; Stats · Dashboard (owner) 82:9702; Mobile 149:18053 and 149:18212; Case · Locked 82:8992 and states 146:4098, 146:4144, 146:4195; Mobile 149:16081; components Top bar 134:510, Owner chip 134:460, Stat tile 138:546, Meter row 138:549, Message row 138:553, Empty state 137:591; flows 156:2.

Do, in order.
1. db.ts on D1 (schema in §13.2; Rez chose D1 on 22 Oct, 10-confirmations row 91): views, events, messages, previews and attempts. No IP stored, visitor ids hashed per day, 90 day retention (prune on Stats sign in). Sums in SQL, so Stats stays light on CPU.
2. Auth: tokens carry a signed expiry checked on the server; no sign in at all in production without AUTH_SECRET; lockout of 8 tries in 10 minutes stored in D1, keyed by a hash of cf-connecting-ip and the scope; rk_stats and rk_case httpOnly, Secure, SameSite Lax, rk_stats for 7 days (decision 26, 27 Oct) and rk_case for 30 days; rk_owner (httpOnly, a year) keeps Rez's visits out of the counts and has a browser readable twin, rk_owner_ui, that shows the Owner chip; Log out clears rk_stats, rk_owner and rk_owner_ui, so the chip goes away (09 §1).
3. Stats: sign in page and states, Log out then Signed out, the dashboard with Stat tile, Meter row, Message row (including LinkedIn preview entries) and Empty state, the Owner chip on every page, G then S (ignored while typing in a field) and the 1 second © press, both only opening /stats.
4. Recruiter case: the designed states over the new auth.
5. scripts/kv-to-d1.mjs for Rez to run by hand once, copying real messages from the old KV store.
6. Convert your components to m components.

Checks. npm test (tokens good, tampered and expired; lockout; cookie flags); npm run typecheck; eslint on your files; every state clicked through on localhost at 375, 768 and 1440; scripts/smoke-auth.mjs ready for R to run on cf:preview (8 wrong tries then locked, the right one sets the cookie, Log out clears it, the same for the private case); npm run build at the end.

Done when. Every frame above behaves as designed, every line of 09 §5 and §6 and the P1 rows of 09 §1 and §3 pass, tests pass, and no secret or password reaches client code.

Report. 01-portfolio/08-build-reports/p1-stats-auth.md, plus one dated line in "Where things stand".
```

### P2 · Contact, booking and cookies

```text
You are package P2 (Contact, booking and cookies) of the V4a build of Rezaul Karim's portfolio. Several sessions build it at the same time in one shared folder, 01-portfolio/site. Start only when 01-portfolio/08-build-reports/f-foundation.md says done.

Goal. The one form Contact page with all its states, the booking modal with loading, fallback and phone sheet, the cookie banner, the email copied toast, and the two form actions (contact and LinkedIn preview).

Read first. 01-portfolio/CLAUDE.md, 08-build-plan.md §3.3, §3.4, §5 and §7, 06-design-system.md §7 and §8, 07-search-and-speed-plan.md §5.8, 09-functional-checklist.md §1 (cookie banner), §2, §3 (Contact) and §4, and 10-confirmations.md if it exists.

You own. src/app/contact/**, src/app/actions/contact.ts, src/app/actions/preview.ts, src/components/ContactForm.tsx, CalEmbed.tsx, CopyEmail.tsx, Consent.tsx, FaqThread.tsx (delete it once Contact uses FaqItem), src/lib/booking.ts, new src/components/BookingModal.tsx, src/styles/contact.css.

Inputs. Figma file 2PZQVIX9UJO8NqnXNqiNDe, read only. Contact 82:9286, Tablet 150:17116, Mobile 149:16493; form states 96:3448, 82:9826, 82:9840, 146:4240, 146:4366, 146:4441, 82:9855, 146:4517; Booking modal 82:9890, Booking loading 147:14408, Booking fallback 147:14515, Mobile booking sheet 150:6388; Email copied 147:14638; Cookie banner 82:9866, Mobile 150:6429; components Field 115:247, Select 88:458, Select option 88:352, Alert 137:573, Toast 137:590, Modal 138:586, Cookie banner 135:525, FAQ item 88:199; the LinkedIn invite form in 92:2862 for the preview fields.

Do, in order.
1. Contact: "I'm reaching out as" (single), "What do you need?" (multi, options per role from forms.ts), Name, Email, Company · optional, Message; helper lines per field; Sending, Errors, Too many messages with the email fallback, Sent per role; the button and note follow the role; /contact#recruiter picks Recruiter with "CV for a role" and #agency picks Agency (the Career, About and For agencies buttons rely on it); "+" FAQs; the copy in §3.4.
2. contact.ts: validation per role, honeypot and minimum time, a rate limit of 6 an hour stored through db.ts attempts (by a hash of cf-connecting-ip), the message saved through db.ts.
3. preview.ts: the 4 answers plus name, email and LinkedIn URL, the same guards, saved as a linkedin_preview message.
4. Booking: BookingModal (our Modal, Cal.com inline embed inside, skeleton, fallback after linkFailed or 8 seconds with Book on Cal.com and Email me, bottom sheet on phones); preconnect and Cal("preload") on hover, focus or touch of any Book button; the Contact calendar loads on a click on its placeholder (decision 28, 27 Oct); bookings counted.
5. Cookie banner look and logic; the Email copied toast.
6. Convert your components to m components.

Checks. npm run typecheck; eslint on your files; every form state, the booking modal (also with app.cal.com blocked) and the banner on localhost at 375, 768 and 1440; a message and a preview end up in the local store; Lighthouse mobile on /contact (07 §5.10, TBT 200ms or less); npm run build at the end.

Done when. Every frame above behaves as designed, every line of 09 §2 and §4 and the P2 rows of 09 §1 and §3 pass, and Contact meets its 07 targets or the gap is explained.

Report. 01-portfolio/08-build-reports/p2-contact-booking.md, plus one dated line in "Where things stand".
```

### P3 · Home, Work and the archive rows

```text
You are package P3 (Home, Work and the archive rows) of the V4a build of Rezaul Karim's portfolio. Several sessions build it at the same time in one shared folder, 01-portfolio/site. Start only when 01-portfolio/08-build-reports/f-foundation.md says done.

Goal. Home and Work match their desktop, tablet and mobile frames, the dock follows the page rules, and the archive rows work the new way Rez asked for.

Read first. 01-portfolio/CLAUDE.md, 08-build-plan.md §3.2, §3.4, §3.8, §5 and §7, 06-design-system.md §7 and §9, 07-search-and-speed-plan.md §3.6, §3.7 and §5.6, 09-functional-checklist.md §1 (dock) and §3 (Home, Archive, Work), and 10-confirmations.md if it exists.

You own. src/app/page.tsx, src/app/work/page.tsx, src/components/work.tsx (CaseCard, LockedCard, WorkGrid, Archive), WorkBrowser.tsx, Nav.tsx, src/styles/home-work.css.

Inputs. Figma file 2PZQVIX9UJO8NqnXNqiNDe, read only. Home 82:8363, Tablet 150:16628, Mobile 149:4630; Work 82:8477, Tablet 150:16826, Mobile 149:5035; components Work card 39:184, Archive card 40:171, Dock 133:667, Dock item 115:237, Tooltip 138:587, Filter chip 115:242; Handoff checklist 157:7053 ("Added 22 Oct (Rez)").

Do, in order.
1. Home and Work per the frames and the copy in §3.4. Selected work comes from homeOrder (P5 sets it); WorkGrid skips any slug that has no data yet.
2. Work: the first two covers load eagerly with high priority (they are the LCP); no Back tile; filters including "Pitch decks".
3. Dock: active item per page (06 §7), Tooltip after 300ms on hover and focus, aria-current.
4. Archive rows, exactly as §3.8: original colour at rest, edge fades only, opposite auto slide, pause on hover and with the Pause tile, press and drag with a little inertia (pointer and touch), the auto slide continues from where it was left, grab and grabbing cursors, a click without a drag shows the name, reduced motion means no auto slide but dragging still works. Transform only. Each tile links to its case when the case has a page.
5. Convert your components to m components; the dock bubble may move with CSS if it looks the same.

Checks. npm run typecheck; eslint on your files; Home and Work at 375, 768 and 1440 next to their frames; the archive with mouse, touch emulation, keyboard (Pause tile) and reduced motion; Lighthouse mobile on / and /work (07 §5.10); npm run build at the end.

Done when. Both pages match their frames, the Home, Archive and Work rows of 09 §3 and the dock row of 09 §1 pass, and the targets in 07 §5.10 are met or the gap is explained.

Report. 01-portfolio/08-build-reports/p3-home-work.md, plus one dated line in "Where things stand".
```

### P4 · Inner pages

```text
You are package P4 (inner pages) of the V4a build of Rezaul Karim's portfolio. Several sessions build it at the same time in one shared folder, 01-portfolio/site. Start only when 01-portfolio/08-build-reports/f-foundation.md says done.

Goal. The five service pages, Career, About, Free templates, Work with me, For agencies, Privacy and the 404 match their frames and copy.

Read first. 01-portfolio/CLAUDE.md, 08-build-plan.md §3.2, §3.4, §5 and §7, 06-design-system.md §7, 07-search-and-speed-plan.md §3.6, §3.7 and §4.4, 09-functional-checklist.md §3 (Service pages, Career, About, and Free, Work with me, For agencies, Privacy) and the 404 row of §1, and 10-confirmations.md if it exists.

You own. src/app/brand, product, decks, social and linkedin page.tsx files, src/app/career, about, free, work-with-me, agencies and privacy page.tsx files, src/app/not-found.tsx, src/components/ServicePage.tsx, ServicesAccordion.tsx, Career.tsx, extras.tsx, src/data/services.ts, offers.ts, career.ts, src/styles/pages.css.

Inputs. Figma file 2PZQVIX9UJO8NqnXNqiNDe, read only. Service pages 82:9012, 82:9068, 82:9121, 82:9176, 82:9231, Mobile 149:16257; Career 82:8552 and 82:8629, Mobile 149:5387; About 82:9439, Mobile 149:16821; Free 82:9522, Mobile 149:17063; Work with me 82:9560, Mobile 149:17268; For agencies 82:9612, Mobile 149:17529; Privacy 82:9658, Mobile 149:17740; 404 82:9687, Mobile 149:17902; components Accordion pill 115:256, Track switch 39:248, Highlight row 39:185, Timeline item 39:211, Offer card 40:178, FAQ item 88:199, Template row 136:523, Call card 137:529.

Do, in order.
1. Each page per its frames and the copy in §3.4, with the accordion links in the HTML even when closed.
2. Career highlights on Home use your Career.tsx: support the Home variant without "Show 3 more" (P3 only passes props).
3. Each service page lists its cases from work.ts (P5 adds the new ones); FAQs as "+" accordions on Work with me, first one open.
4. Alt text per 07 §3.7. Convert your components to m components.

Checks. npm run typecheck; eslint on your files; every page at 375, 768 and 1440 next to its frames; page text against the frames word for word; npm run build at the end.

Done when. Every page matches its frames and copy, and those 09 rows pass. "Ask for my CV" and "Ask about the pilot" link to /contact#recruiter and /contact#agency (P2 does the preselect).

Report. 01-portfolio/08-build-reports/p4-inner-pages.md, plus one dated line in "Where things stand".
```

### P5 · Case pages and new cases

```text
You are package P5 (case pages and new cases) of the V4a build of Rezaul Karim's portfolio. Several sessions build it at the same time in one shared folder, 01-portfolio/site. Start only when 01-portfolio/08-build-reports/f-foundation.md says done; start image work when i-images.md says done.

Goal. The case template matches its frames, every existing case is fixed, and the new cases go live as data with their images.

Read first. 01-portfolio/CLAUDE.md, 08-build-plan.md §3.3, §3.4, §3.5, §3.8, §5 and §7, 06-design-system.md §7, 07-search-and-speed-plan.md §3.2 (descriptions), §3.7 (alt text) and §4.2 (claims), 09-functional-checklist.md §3 (Case pages), and 10-confirmations.md if it exists (case names, slugs, labels and credit lines Rez confirmed).

You own. src/app/work/[slug]/**, src/components/Gallery.tsx, src/data/work.ts (data), site/assets/images/work/** and the files npm run images writes from them, src/styles/cases.css.

Inputs. Figma file 2PZQVIX9UJO8NqnXNqiNDe, read only. Case frames 82:8639 (Earworm), 82:8700, 82:8748, 82:8798, 82:8844, 82:8893, 82:8943; Tablet 150:16983; Mobile 149:15858; Lightbox 82:9884, Mobile 150:6502; new cases section 172:17339 (YumYum 172:17340, ALPHA 172:17487, Taif 172:17657, Gravix 173:7413, Azora 173:7572, Nexus 173:17801, Bristo 174:17930, Orion 174:18325, ReSpace 176:7948, LYFT 177:18171, IsHamn 177:18489, Samā 177:18636, CortexAI 178:8398, Livio 179:8514, and any added later); new case assets 170:7049 (section 170:7048; CargoShift's added images 170:7163; LYFT cover source 221:8398); SyncGrid cover 172:7109; components Media 40:164, Meta cell 40:156, Decision row 40:159, Next case 137:530, Proof item 115:266, Call card 137:529.

Do, in order.
1. Template: "3 design decisions", "Proof", the credit note (preview only), Next case (last links to first), lightbox caption "Case name · 2 of 7" and swipe on phones, the hero as the LCP image (eager, high priority).
2. Existing cases: copy fixes, the new SyncGrid cover, CargoShift's added images.
3. homeOrder: earworm, real-estate-website, syncgrid, yumyum (§3.8). Omega Health Care moves to On request on Work.
4. New cases, one at a time: copy word for word from its frame, meta without Client, Concept or To confirm tags and without a year (row 81; keep "To confirm" role lines marked so the live site hides them), no studio line (row 22), slug from §3.5, description of 155 characters or less (07 §3.2 rules), alt text for every image (07 §3.7), masters 1400px wide into assets/images/work/, then npm run images. Add each to its services and the Work filters; archive tiles that match a new case link to it.
5. Convert Gallery to m components.

Checks. npm run typecheck; eslint on your files; every case renders at 375, 768 and 1440 (spot check three against their frames); unknown slugs still give a real 404; Lighthouse mobile on /work/earworm and /work/pulse (07 §5.10); npm run build at the end.

Done when. Every designed case is live as data with images, alt text and a description, the template matches its frames, and the 09 §3 Case pages row passes for every case.

Report. 01-portfolio/08-build-reports/p5-cases.md, plus one dated line in "Where things stand".
```

### P6 · LinkedIn invite page

```text
You are package P6 (LinkedIn invite page) of the V4a build of Rezaul Karim's portfolio. Several sessions build it at the same time in one shared folder, 01-portfolio/site. Start only when 01-portfolio/08-build-reports/f-foundation.md says done; start image work when i-images.md says done.

Goal. The /linkedin/invite campaign page matches its desktop and mobile frames, its form works through the preview action, and the page stays switched off until Rez turns it on.

Read first. 01-portfolio/CLAUDE.md, 08-build-plan.md §3.3, §3.5, §5 and §7, 06-design-system.md §7, 07-search-and-speed-plan.md §3.4 and §3.7, 09-functional-checklist.md §3 (LinkedIn invite), and 10-confirmations.md if it exists.

You own. src/app/linkedin/invite/**, src/components/invite/**, site/assets/images/invite/** and the files npm run images writes from them, src/styles/invite.css.

Inputs. Figma file 2PZQVIX9UJO8NqnXNqiNDe, read only. LinkedIn invite 92:2862, Mobile 93:3126, Form thanks 93:3111; components LinkedIn before and after 176:8227 (the set; 90:206 is its Desktop variant) and the Profile sample tile 177:18155, Package card 89:210, Perk level 89:227, FAQ item 88:199, Case mini tile 91:206. The preview action contract in src/lib/forms.ts (P2 implements it; until then F's stub returns success).

Do, in order.
1. The page per its frames: no dock; top bar; footer on desktop only, as the frames show (hide it on phones through the footer's data attribute in invite.css); sticky "Claim your preview" on phones; the before and after with a 44px draggable handle that arrow keys also move; proof, what you get, recent work, how it works, packages, perks, FAQ, the 4 question form and the thanks state. The sticky button shows after the hero and hides near the form (09 §3).
2. The page answers 404 unless NEXT_PUBLIC_INVITE_LIVE=1, so it can ship before Sam Bendix says yes.
3. Alt text per 07 §3.7; nothing on the page depends on scripts to show its text.

Checks. npm run typecheck; eslint on your files; the page at 375, 768 and 1440 next to its frames; the form errors and thanks state; with the switch off the route gives a real 404; Lighthouse mobile (07 §5.10); npm run build at the end.

Done when. The page matches both frames, the form reaches the preview action, and the 09 §3 LinkedIn invite row passes.

Report. 01-portfolio/08-build-reports/p6-linkedin-invite.md, plus one dated line in "Where things stand".
```

### P7 · Search and speed

```text
You are package P7 (search and speed) of the V4a build of Rezaul Karim's portfolio. Several sessions build it at the same time in one shared folder, 01-portfolio/site. Start only when 01-portfolio/08-build-reports/f-foundation.md says done.

Goal. Everything in 07-search-and-speed-plan.md that is not owned by another package: metadata, structured data, share images and icons, robots, sitemap, llms.txt, the launch switch, sound, reveals, cache headers, and the measuring.

Read first. 01-portfolio/CLAUDE.md, 08-build-plan.md §3.6, §5 and §7, 07-search-and-speed-plan.md (all), 09-functional-checklist.md §1 (sound, reveals and motion, smooth scroll), §7 and §8 (speed row), and 10-confirmations.md if it exists.

You own. src/lib/seo.ts (implementation), src/data/seo.ts, src/components/JsonLd.tsx, src/app/robots.ts, sitemap.ts, llms.txt/route.ts, manifest.ts, icon.png, apple-icon.png, favicon.ico (icon.svg goes), public/og/**, public/_headers, the IndexNow key file in public/, public/audio/**, scripts/og.mjs, scripts/indexnow.mjs, scripts/fonts/**, next.config.ts and wrangler.jsonc (after F), src/proxy.ts, src/app/layout.tsx (after F, only the site JSON-LD line and the analytics snippet if needed), src/components/SoundProvider.tsx, src/lib/sound.ts, SmoothScroll.tsx, RevealObserver.tsx, src/styles/motion.css.

Inputs. 07 (all). Figma file 2PZQVIX9UJO8NqnXNqiNDe, read only: share images and icons section 170:7174 and its notes frame 174:18077.

Do, in order.
1. data/seo.ts with every title and description in 07 §3.2 and the facts in 07 §4.2; pageMeta and caseMeta per 07 §3.3 (cases read their description from work.ts).
2. JSON-LD per 07 §4.3, with the escaping the Next docs ask for.
3. robots.ts, sitemap.ts with images, llms.txt, all switched by NEXT_PUBLIC_INDEXABLE (07 §3.5, §4.5, §4.6); per route X-Robots-Tag in next.config.ts.
4. Share images: export every "OG · <route>" frame to public/og/<key>.jpg; scripts/og.mjs mirrors the two templates for anything without a frame. Icons and manifest.ts from the icon frames.
5. Speed: first view cards visible without scripts, sound per 07 §5.7 (on by default as 09 §1 says, re-encode with ffmpeg, download after the first click only), Lenis on desktop only, public/_headers (immutable paths from I's report), the inlineCss trial (keep it only if it builds on OpenNext and helps).
6. proxy.ts host redirect (off until the domain exists), "workers_dev": false and "preview_urls": false, scripts/indexnow.mjs.
7. Measure per 07 §5.10 and add rows to 07 §5.1 (you may edit only that table in 07).

Checks. Curl the head of every route with NEXT_PUBLIC_INDEXABLE at 0 and at 1; parse every JSON-LD block; robots.txt, sitemap.xml and llms.txt in both modes; Lighthouse mobile, 3 runs, median; npm run typecheck; npm run build at the end.

Done when. Every route has the right head tags and structured data in both modes, every route has a share image, every line of 09 §7 and the P7 rows of 09 §1 and §8 pass, and the budgets in 07 §5.2 are met or the gap is explained.

Report. 01-portfolio/08-build-reports/p7-search-speed.md, plus one dated line in "Where things stand".
```

### R · Review and end to end tests

```text
You are package R (review and end to end tests) of the V4a build of Rezaul Karim's portfolio, in 01-portfolio/site. Start only when the reports of F, I and P1 to P7 exist in 01-portfolio/08-build-reports/.

Goal. One careful pass over everything the packages built: joins, security, the full checks, every flow in a browser, the speed budgets, then a short list for Rez.

Read first. 01-portfolio/CLAUDE.md, 08-build-plan.md (all), the package reports, 06-design-system.md, 07-search-and-speed-plan.md, 09-functional-checklist.md (all, it is your test script) and 10-confirmations.md.

You own. Any file, for fixes that fit in this session. No commits, no deploys, no installs.

Do, in order.
1. Read the reports and their Requests; do the requests that are still open. Read the diff since Rez's baseline commit if he made one.
2. Joins between packages (contracts in §7), then security: tokens, cookies, lockout, secrets, action input checks, JSON-LD escaping, headers, nothing secret in client code.
3. npm run check, npm test, npm run cf:build, npm run cf:preview, scripts/smoke-auth.mjs against cf:preview.
4. The final test pass: run 09-functional-checklist.md in full, line by line, at 375, 768 and 1440, with page text and screenshots where the look matters, and record pass or fail for every line in your report. Then the extra checks in §9. The real test booking in 09 §2 books Rez's own calendar and sends emails: ask Rez in chat first, or leave it in the You check table.
5. Lighthouse per 07 §5.10 on cf:preview against the budgets in 07 §5.2.
6. Delete dead code (FaqThread.tsx and anything no longer imported).
7. Fix what fits here; for anything bigger write one fix brief with a paste ready prompt.
8. Refresh 01-portfolio/document_portfolio.md and "Where things stand". End with a "You check" table for Rez and the deploy steps in §10.

Done when. Every line of 09 passes (or the report says why it cannot yet, for example the booking that needs Rez), the extra checks in §9 pass, budgets are met or explained, and Rez has his list.

Report. 01-portfolio/08-build-reports/r-review.md.
```

## 7. Shared files and order

| File or area | Owner, in order |
|---|---|
| `package.json`, `package-lock.json`, `eslint.config.mjs`, `tsconfig.json` | F only. No installs after F |
| `src/app/globals.css`, `src/styles/tokens.css`, `base.css`, `components.css` | F; frozen after F |
| `src/styles/<package>.css` | One per package, created empty by F |
| `src/app/layout.tsx` | F, then P7 (site JSON-LD, analytics snippet) |
| `src/components/ui.tsx`, `ActionPill.tsx`, `Icon.tsx`, `Providers.tsx`, `VisitorClock.tsx`, the new shared components | F; frozen after F (needs go under Requests) |
| `src/components/chrome.tsx` | F (look), then P1 (Owner chip slot, © press) |
| `src/data/site.ts`, `src/lib/routes.ts`, `.env.example` | F; frozen after F |
| `src/data/work.ts` | F (type), then P5 |
| `next.config.ts`, `wrangler.jsonc` | F (first ten minutes: images block and loader stub; then D1), then P7 |
| `src/lib/image-loader.ts` | F creates the stub, then I |
| `src/lib/img.ts`, `src/data/images.json`, `public/images/**` | I; afterwards `npm run images` from P5 and P6 regenerates them (run again if two runs overlap) |
| Page files | F adds the metadata line and the JsonLd line; the page's owner never edits those two lines |
| `src/app/actions.ts` | F splits it into `actions/auth.ts` (P1), `contact.ts` and `preview.ts` (P2), then deletes it |
| `src/lib/db.ts` | F (interface over today's store), then P1 (D1 inside, same interface) |
| `07-search-and-speed-plan.md` | P7 may add rows to its §5.1 table only |

Contracts F writes, so wave 1 builds against them from minute one:

| Contract | Shape |
|---|---|
| `src/lib/seo.ts` | `type PageKey` (home, work, brand, product, decks, social, linkedin, career, about, contact, free, privacy, work-with-me, agencies, linkedin-invite, work-private, stats, not-found); `pageMeta(key): Metadata`; `caseMeta(slug): Metadata` |
| `src/components/JsonLd.tsx` | `<JsonLd page={PageKey \| "site" \| "case"} slug?={string} />` |
| `src/lib/forms.ts` | `type Role` (founder, recruiter, agency, other); `needsByRole`; field names for the contact form (`as`, `needs`, `name`, `email`, `company`, `message`, honeypot `website`, start time `t`) and the preview form (`q1` to `q4`, `name`, `email`, `linkedin`, `website`, `t`); `FormState` with `fieldErrors` |
| `src/app/actions/*` | `sendMessage(prev, data)`, `requestPreview(prev, data)`, `unlockCase`, `lockCase`, `statsLogin`, `statsLogout`, all returning `FormState` where they return state |
| `src/lib/db.ts` | `recordView`, `recordEvent`, `addMessage`, `listMessages`, `hitAttempt(key, limit, windowMs)`, `clearAttempts(key)`, `getStats(days)` |
| `src/data/work.ts` | `Case` with `description`, `year`, `services`; `caseOrder`, `nextCase(slug)`, `homeOrder` |
| Cookies | `rk_stats`, `rk_case`, `rk_owner` (httpOnly); `rk_owner_ui=1` (browser readable twin of `rk_owner`, drives the Owner chip). Log out clears `rk_stats`, `rk_owner` and `rk_owner_ui` |
| Environment | `NEXT_PUBLIC_INDEXABLE`, `NEXT_PUBLIC_INVITE_LIVE` (§13.3) |

## 8. Test routine

| When | What |
|---|---|
| Every package, at the end | `npm run typecheck`, eslint on its own files, `npm run build` |
| Every package, per feature | A quick run on localhost: page text for copy, a click through for flows, curl for headers and metadata |
| Every visual change | Screenshots at 375, 768 and 1440 next to the matching Figma frame |
| Critical code (P1) | `npm test` and the smoke script on `cf:preview` (R runs it) |
| F, I and R | `npm run cf:build`, `npm run cf:preview`, every route answers |
| P2, P3, P5, P6, P7, R | Lighthouse mobile on their pages (07 §5.10) |
| On failure | Fix and run only the failed checks again. After two failed attempts, stop and report |

No new test suites beyond P1's auth tests.

## 9. Final test pass (R)

Run on `cf:preview`, with the test passwords from `site/.env.local` (never printed).

**The test script is [09-functional-checklist.md](09-functional-checklist.md), in full.** R records pass or fail for every line in its report.

Which package answers for each part of 09:

| 09 section | Packages |
|---|---|
| §1 Every page | F (top bar, footer), P3 (dock), P7 (sound, reveals, smooth scroll), P2 (cookie banner), P4 and P7 (404), P1 (Owner chip, G then S, the © press) |
| §2 Booking | P2 |
| §3 Pages | P3 (Home, Archive, Work), P5 (Case pages), P1 (/work/private), P4 (Service pages, Career, About, Free, Work with me, For agencies, Privacy), P6 (LinkedIn invite), P2 (Contact, and the Recruiter and Agency preselect behind Career and For agencies) |
| §4 Contact form | P2 |
| §5 Stats | P1 (P7 for the robots.txt line) |
| §6 Counting and data | P1, P2 (consent) |
| §7 Search, answers and sharing | P7 |
| §8 Quality bars | Every package for its pages; F (lint, typecheck, focus ring, contrast), I (images), P7 (speed) |

Extra checks from this plan, on top of 09:

| Check | Expected |
|---|---|
| `/linkedin/invite` with `NEXT_PUBLIC_INVITE_LIVE=0` | Real 404 |
| Images | No `/_next/image` requests; WebP files from `/images` with a year long cache |
| Launch mode | Rebuild with `NEXT_PUBLIC_INDEXABLE=1`: robots.txt, sitemap.xml, llms.txt and the head tags match 07 for launch; private and campaign routes stay noindex |
| Auth smoke script | `scripts/smoke-auth.mjs` passes on `cf:preview` |
| Worker size | `npm run worker:size` (F's script; the project's deny list blocks `wrangler deploy`, even with `--dry-run`) stays well under 64 MiB uncompressed (07 §5.1) |
| Storage | D1 (10-confirmations.md row 91, Rez, 22 Oct) |

## 10. Deploy and launch (Rez, by hand)

The friend hands the finished project back ([12-handoff.md](12-handoff.md)). Rez runs these on his own PC with his own Wrangler login (rows 76, 84).

| Step | How |
|---|---|
| 0 | Bring the finished `site/` into his folder, keeping his own `.env.local`, `.env.production.local` and `.wrangler`; check the diff |
| 1 | Create the D1 database and apply the migration: `npx wrangler d1 create rezkarim-portfolio-db`, put its id in `wrangler.jsonc`, then `npx wrangler d1 migrations apply rezkarim-portfolio-db --remote` |
| 2 | Optional: copy old messages from KV with `node scripts/kv-to-d1.mjs` |
| 3 | Rotate the sign in secret (the token format changes): `npx wrangler secret put AUTH_SECRET` |
| 4 | Check `.env.production.local`: `NEXT_PUBLIC_INDEXABLE=0` (test site), `NEXT_PUBLIC_INVITE_LIVE=1` (Sam agreed, row 27) |
| 5 | Commit, then `npm run deploy` in `site/` |
| 6 | Ask any session for the live smoke check (every route, the flows, headers) and look at the Worker's metrics for errors 1102 and 1027 |
| 7 | Launch (gate G1): buy rezkarim.com, then 07 §3.8 and §3.9; run `npm run indexnow` after the launch deploy |

## 11. Who owns which file in wave 1

| Area | P1 | P2 | P3 | P4 | P5 | P6 | P7 |
|---|---|---|---|---|---|---|---|
| Pages | stats, work/private | contact | home, work | services, career, about, free, work with me, agencies, privacy, 404 | work/[slug] | linkedin/invite | none (metadata through seo.ts) |
| Components | Forms, DailyChart, Tracker, owner/**, stats/**, owner parts of chrome | ContactForm, CalEmbed, CopyEmail, Consent, FaqThread, BookingModal | work.tsx, WorkBrowser, Nav | ServicePage, ServicesAccordion, Career, extras | Gallery | invite/** | JsonLd, SoundProvider, SmoothScroll, RevealObserver |
| Data and lib | auth, stats, store, db (inside), actions/auth | booking, actions/contact, actions/preview | none | services, offers, career | work.ts | none | seo (lib and data), sound |
| Config, scripts, public | migrations, tests, smoke and KV scripts | none | none | none | assets/images/work | assets/images/invite | next.config, wrangler.jsonc, proxy, robots, sitemap, llms.txt, manifest, icons, `_headers`, og, audio, IndexNow, og and indexnow scripts |
| CSS | stats.css | contact.css | home-work.css | pages.css | cases.css | invite.css | motion.css |

## 12. Decisions and defaults

Nothing here blocks the build. Rez's answers in [10-confirmations.md](10-confirmations.md) (collected by the confirmations session) always win. Until he answers an item, the packages use its default, taken from 09 or the current design where they say something. If he answers later, the owning package or R switches it.

| # | Decision | Default the build uses now | Recommended | Blocks? |
|---|---|---|---|---|
| 1 | The 10 open questions on the Handoff page | Answered (rows 46 to 49, 60, 61, 5, 26, 28, 29, 39): Stats access as designed; Free templates stay in the dock; both "LinkedIn Profile Kit" names stay; "Monthly design support"; Taste Labs removed; no NDA card; SyncGrid's studio hidden; Pulse "2.3M" kept; Sam's banner on /linkedin; invite credits hidden except Sam; the five drafted FAQ answers | Done | No |
| 2 | New cases | Every case designed in section `172:17339`, meta as drawn without tags or years (row 81), "To confirm" role lines hidden on the live site, slugs from §3.5 (row 24). Orion and Orvion are two different cases; the Orvion archive tile does not link to Orion (row 23) | Answered | No |
| 3 | Visit counts and messages | D1, built and tested locally; Rez creates the database when he deploys (§10). Rez chose D1 on 22 Oct (10-confirmations.md row 91) | D1, since KV's free plan stops counting past about 1,000 views a day | No |
| 4 | Sound on by default | On (Rez, row 51), with the loop downloaded only after the first click | Answered | No |
| 5 | Prices on /linkedin/invite ($79, $199, $349) | Shown, as designed, next to "from $300" on /work-with-me (row 35) | Answered | No |
| 6 | AI crawlers | Allow all, training included (row 59). Never Cloudflare's training block | Answered | No |
| 7 | Facts for AI answers | The bio in 07 §4.2 with no location anywhere; About drops its city too (row 50) | Answered | No |
| 8 | /stats in robots.txt at launch | No line, noindex only (row 58) | Answered | No |
| 9 | Share images | The Figma frames in `170:7174`, the code template for anything without one; case images without tags or years (rows 56, 81) | Answered | No |
| 10 | Browser for localhost checks | BrowserOS for everything, localhost included (row 71, §5 rule 11) | Answered | No |
| 11 | Speed trials that change the look | Not applied; P7 prepares each behind a switch for Rez's side by side check (scroll driven reveals, no card blur on phones, Newsreader without optical sizes), plus the click to load calendar on /contact (rows 53, 54) | Answered | No |
| 12 | Email alerts for new messages | Not built. Later, with Cloudflare Email Routing (free) once rezkarim.com is on Cloudflare (row 73) | Answered | No |
| 13 | /free in search | Noindex until a template is live (row 57) | Answered | No |
| 14 | Sam Bendix on /linkedin/invite and /linkedin | Sam agreed (row 27): the page is on (`NEXT_PUBLIC_INVITE_LIVE=1`) and his tile and hero drop the To confirm notes | Answered | No |
| 15 | Footer on /linkedin/invite | As the frames show: on desktop, not on phones (row 52) | Answered | No |

Still open, needed for go-live rather than for the build: the Default rows in [10-confirmations.md](10-confirmations.md) marked "confirm at launch", and gate G1.

## 13. Ready to use

### 13.1 Reading Figma fast (read only)

Load the figma-use skill first. Each snippet is one `use_figma` call.

| Need | Snippet |
|---|---|
| Every token with its CSS name | `const v = await figma.variables.getLocalVariablesAsync(); const c = await figma.variables.getLocalVariableCollectionsAsync(); return c.filter(x => ["Theme","Responsive","Typography","Radius"].includes(x.name)).map(x => ({ name: x.name, modes: x.modes.map(m => m.name), vars: x.variableIds.map(id => { const k = v.find(y => y.id === id); return [k.name, k.codeSyntax.WEB, x.modes.map(m => k.valuesByMode[m.modeId])]; }) }));` |
| A frame's copy in reading order | `const p = await figma.getNodeByIdAsync("10:3"); await figma.setCurrentPageAsync(p); const f = await figma.getNodeByIdAsync("<frame id>"); const out = []; const walk = n => { if (n.visible === false) return; if (n.type === "TEXT") out.push([Math.round(n.absoluteBoundingBox.y), Math.round(n.absoluteBoundingBox.x), n.characters]); else if ("children" in n) n.children.forEach(walk); }; walk(f); return out.sort((a, b) => a[0] - b[0] \|\| a[1] - b[1]).map(r => r[2]);` (walks `.children`, since `findAll` from a frame misses texts inside instances; 27 Oct) |
| A component's developer notes | `description` on the component set, all on the Design system page `114:13313` |
| A frame as an image | `get_screenshot` with `maxDimension` at the frame's width, then download the URL and convert with sharp |

Frame ids used in this plan: Handoff checklist `157:7053`, flows `156:2`, page index `155:17`, open questions `157:7141`, new case pages `172:17339`, new case assets `170:7049`, SyncGrid assets `172:7108`, share images and icons `170:7174` (notes `174:18077`).

### 13.2 D1 schema

```sql
-- migrations/0001_init.sql
CREATE TABLE IF NOT EXISTS views (
  id INTEGER PRIMARY KEY,
  day TEXT NOT NULL,      -- UTC date, YYYY-MM-DD
  ts INTEGER NOT NULL,    -- epoch ms
  path TEXT NOT NULL,     -- known route or 'Other'
  ref TEXT,               -- referring host only
  device TEXT,            -- phone, tablet, desktop
  country TEXT,           -- ISO code from the time zone
  visitor TEXT            -- daily hash of rk_vid, only after Allow
);
CREATE INDEX IF NOT EXISTS views_day_path ON views(day, path);
CREATE TABLE IF NOT EXISTS events (
  id INTEGER PRIMARY KEY,
  day TEXT NOT NULL,
  ts INTEGER NOT NULL,
  kind TEXT NOT NULL,     -- consent_all, consent_essential, booking, visitor_new, visitor_return
  value TEXT
);
CREATE INDEX IF NOT EXISTS events_day_kind ON events(day, kind);
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY,
  ts INTEGER NOT NULL,
  kind TEXT NOT NULL,     -- founder, recruiter, agency, other, linkedin_preview
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  needs TEXT,             -- JSON array
  body TEXT,              -- the message, or the 4 answers as JSON
  extra TEXT              -- LinkedIn URL and similar
);
CREATE INDEX IF NOT EXISTS messages_ts ON messages(ts);
CREATE TABLE IF NOT EXISTS attempts (
  key TEXT PRIMARY KEY,   -- scope plus a hash of the IP
  n INTEGER NOT NULL,
  until INTEGER NOT NULL  -- epoch ms when the window ends
);
```

Each view writes 1 row plus its index entries, so the free 100,000 rows a day covers about 30,000 views a day.

### 13.3 Settings per environment

| Variable | Localhost | Test site (now) | Launch | Where |
|---|---|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | http://localhost:3000 | https://rezkarim.dashbloom.design | https://rezkarim.com | `.env.local`, `.env.production.local` |
| `NEXT_PUBLIC_INDEXABLE` (new) | 0 | 0 | 1 | same |
| `NEXT_PUBLIC_SHOW_NOTES` | 1 | 0 | 0 | same |
| `NEXT_PUBLIC_INVITE_LIVE` (new) | 1 | 1 (Sam agreed, row 27) | 1 | same |
| `NEXT_TARGET` | unset | cloudflare | cloudflare | `.env.production.local` |
| `STATS_PASSWORD`, `RECRUITER_PASSWORD`, `AUTH_SECRET` | test values | Worker secrets | Worker secrets, `AUTH_SECRET` rotated once | `wrangler secret put` (Rez) |

### 13.4 Tools the build needs (all free)

Rez's PC has these; the friend's PC needs the same ([12-handoff.md](12-handoff.md)): Node 22 LTS or newer (Rez runs 22.15; its test runner runs TypeScript with `--experimental-strip-types`), ffmpeg (audio, P7), Chrome (Lighthouse through `npx lighthouse@12`), and Python 3 only if fonttools is needed.

## 14. When things change

| If | Then |
|---|---|
| A Figma frame changes during the build | The frame wins over the tables here. The package reads it again and notes the change in its report |
| More new cases appear in Figma | P5 adds them while it runs; after P5 ends, a short Cases session runs P5's step 4 alone |
| Rez answers a decision in §12 differently | The owning package switches it; after the build, R or a short fix session does |
| Fewer sessions are free | Pair them: P1 with P2, P3 with P4, P5 with P6, P7 alone |
| F is late | P7 can start on its own files that need no contract (`data/seo.ts`, `og.mjs`, audio, `_headers`); the rest wait |
| A package needs a file it does not own | It writes the change under Requests; R applies it, or the owner does if still running |
| `npm run images` runs in two sessions at once | Run it again; it rebuilds from the masters |
| The dev server stops | Any package starts it again (preview "portfolio-site") |
| Cal.com still hurts /contact after the deferred load | P2 notes it; a click to load placeholder needs Rez's OK, since it changes the page |
| The Worker shows errors 1102 or 1027 after a deploy | R or a fix session finds the heavy route (Stats, forms) and cuts its CPU, or Rez weighs the paid Workers plan ($5 a month, his money rule) |
| A rule here clashes with Rez's newer word in chat | Rez wins; note it in the report and in "Where things stand" |
