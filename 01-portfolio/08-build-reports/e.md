done

# Chat E · Search, speed and templates report

[README](../15-v4a-plan/README.md) · Done · 28 Oct 2026 · Opus 5.5, Extra high. 08 package P7 in full, then the new templates from the Figma round 3 frames. Not done here: the `inlineCss` trial (07 §5.3 item 9), left for R once builds are quiet, since every Worker build in the shared folder took two tries.

## Files changed

All in `01-portfolio/site/`.

| Area | Files |
|---|---|
| Metadata | `src/lib/seo/index.ts` (`pageMeta`, `caseMeta`, `contentMeta` return the whole head; `robotsFor`, `shareImagePath`, `siteUrl`, `indexable`), `src/data/seo.ts` (titles, descriptions, `indexing` per page, dates, `ogFrames`, `hosts`, `locales`, Person facts, llms.txt lines, share image words) |
| Structured data | `src/lib/seo/graph.ts` (new, pure builders and `jsonLdString`), `src/components/seo/json-ld.tsx`, `src/lib/seo/trail.ts` (new: breadcrumb trail and page names) |
| Crawl files | `src/app/robots.ts`, `src/app/sitemap.ts`, `src/app/llms.txt/route.ts` (new), `src/app/guides/feed.xml/route.ts`, `src/app/manifest.ts` (new) |
| Headers, proxy | `next.config.ts` (per route `X-Robots-Tag` at launch, F's security headers kept), `src/proxy.ts` (launch redirect, Preview noindex, case 404 kept), `public/_headers` (cache rules, `nosniff` kept) |
| Share images, icons | `scripts/og.mjs` (new), `public/og/*.jpg` (36 from Figma), `public/og/gen/` (renders), `assets/og/` (plates), `scripts/fonts/` (static Newsreader and Plus Jakarta Sans cuts, OFL), `src/app/icon.svg` (replaced), `icon.png`, `apple-icon.png`, `favicon.ico`, `public/icons/` |
| Speed | `src/components/providers/sound-provider.tsx`, `src/lib/sound.ts` (comment), `scripts/audio.mjs` (new), `src/data/audio.json` (new), `public/audio/*.<hash>.mp3`, masters moved to `assets/audio/`, `src/components/providers/smooth-scroll.tsx`, `src/styles/motion.css` |
| Templates | `src/components/templates/` (`content-page`, `hub-page`, `content-header`, `answer-box`, `byline`, `post-card`, `proof-block`, `includes-list`, `related-links`, `table-of-contents`; `deliverable-route` now renders the template; `content-placeholder` removed as planned), `src/mdx-components.tsx`, `src/lib/mdx.ts` (new), `src/data/page-blocks.ts` (new), `src/styles/templates.css`, the route files under `src/app/hire`, `src/app/for`, `src/app/guides` |
| IndexNow | `scripts/indexnow.mjs` (new), `public/315e117ec78dfdbf39f3781578287dd7.txt` (the public key file) |
| Tests | `tests/json-ld.test.ts` (new), `tests/fixtures/content/` (one file per family and a README) |
| Docs | `docs/seo.md`, `docs/performance.md`, the pages and guides part of `docs/content.md`, `CHANGELOG.md` |
| Shared files, minimal | `package.json` (`og` in `prebuild`, `og` and `audio` scripts), `.ls-lint.yml` (allows the `llms.txt` route folder) |

## Checks

| Check | Result |
|---|---|
| `npm run check` | Names pass (after the `llms.txt` line in `.ls-lint.yml`). The chain stops at `format:check` on other chats' files (`src/data/work.ts` C, then `src/components/forms/form-meta.tsx` and `src/components/stats/message-list.tsx` B, as they were at the time); every file I touched passes Prettier. So the rest ran one by one: lint pass, typecheck pass, `content:check` ok (3 warnings on W's guides: numbers without a source), `content:lint` ok, `agents:check` pass, `check:deps` pass, `npm test` 41 pass (8 new in `tests/json-ld.test.ts`), `npm run build` pass (35 routes at stage live), `check:secrets` ok |
| `npm run cf:build`, `cf:preview` | Pass. The first try failed when another chat's build rewrote `.generated/` mid build (Open issues); retried when the folder was quiet |
| `worker:size` | 9.17 MiB of the 64 MiB limit (1.97 MiB gzipped) |
| Heads, switch at 0 (local Worker, preview stage: 20 pages, 21 cases) | All 61 routes (fixed pages, 20 content pages, 21 cases, 404s): `noindex, nofollow` meta and `X-Robots-Tag`, titles 60 characters or less, canonicals on the test host, `summary_large_image` with an `og:image` that answers 200 on every page that should have one (none on /stats and /work/private) |
| Heads, switch at 1 (launch build: `NEXT_PUBLIC_INDEXABLE=1`, `NEXT_PUBLIC_SITE_URL=https://rezkarim.com`, served by `next start`) | All 61 routes: `index, follow, max-image-preview:large` and no `X-Robots-Tag` on public pages; `noindex, follow` on /free, /accessibility, /work-with-me, /agencies, /linkedin/invite; `noindex, nofollow` on /stats and /work/private, also on `/api/*`; canonicals and share images on rezkarim.com |
| JSON-LD | Every block on all 61 routes parses in both modes. Site graph everywhere; CollectionPage on /work and the hubs (+ FAQPage on /hire); Service on the 5 service pages, industries and deliverables (+ FAQPage); ProfilePage on /about; ContactPage + FAQPage on /contact; WebPage on /career and hire roles; Article + FAQPage on the 8 guides; CreativeWork on the 21 cases; BreadcrumbList on every page below Home; none on noindex pages |
| robots.txt, sitemap, llms.txt, RSS | At 0: `Disallow: /`; sitemap 52 URLs with 152 image entries and real dates; llms.txt and the feed (8 items) build. At 1: allow all, `Disallow: /api/`, the sitemap line; 52 URLs all on rezkarim.com; llms.txt with 7 groups and 47 links |
| Launch redirect | In the launch build the local Worker (which presents the configured host rezkarim.dashbloom.design) answers 301 to `https://rezkarim.com` with the same path and query. With the switch at 0 the same host serves 200 everywhere. Preview noindex (`SITE_STAGE=preview`) not run: only a Worker Preview sets it |
| Static headers (local Worker) | `/og/*` a day, `/audio/*` a year immutable, `nosniff` and F's headers kept on every file |
| Share images | 36 exported from Figma (`170:7174`), 77 KB at most; 21 rendered at build (preview stage) in `public/og/gen/`; side by side with the Figma templates below |
| Lighthouse mobile, 3 runs, median (local Worker, other chats building) | Simulated: Home 82, Earworm 82, Brand 84, Hire hub 84, Hire role 85, Industry 84, Deliverable 85, Guides index 87, Guide 85; LCP 4.0 to 4.8 s, FCP 0.9 to 1.0 s, TBT 73 to 116 ms, CLS 0.008 or less; audio 0 KB and third party 0 KB before a click. Real (devtools) throttling: Home 88 (LCP 2.55 s), Hire role 91 (2.29 s), Guide 92 (2.24 s). Rows in 07 §5.1 |
| 07 §5.2 budgets | Met: CLS, audio 0 before a click, third party, HTML (13 to 23 KB), images, total weight (516 to 688 KB), template LCP with real throttling (2.2 to 2.3 s). Not met, with the reason: simulated LCP (Lighthouse's simulation on a fast local machine adds the JavaScript run time; the real throttled LCP equals the first paint), JavaScript about 250 KB (budget 180; React, Next and Motion are most of it), fonts 156 KB (budget 120; the optical size trial needs Rez's look), CSS 17 KB (budget 15), Home 2.55 s against its 2.0 s target, TBT 210 to 270 ms under real throttling |
| First view without JavaScript | On /work the cards after the header now render at full opacity from CSS (checked in BrowserOS by computed style: the first two revealing cards visible, the next one waiting for the scroll reveal); the LCP element is now the h1, answer box or case hero instead of the cookie banner |
| Templates in BrowserOS (own tab, closed after) | Hire role and Guide at 1440, Hire hub and Industry at 375: one h1, the block order of the frames, breadcrumb, table of contents ids match the headings, no sideways scroll at 375. 768 not checked (R adds it) |
| Security §8 row 5 | A title holding `</script>` stays inert (test); F's content check still rejects a planted `import`, `{ }` and `<iframe>` (its tests pass) |
| Sound | Code path only: nothing downloads before a click (Lighthouse shows 0 KB of media), never with Save Data or 2G and 3G. Not listened to (Rez, below) |

## Screenshots

In [e-shots/](e-shots/). Taken before two small fixes (problem row titles lose their full stop; role rows 32 px apart).

| Build | Figma |
|---|---|
| `build-hire-role-1440.jpg` | `figma-hire-role-270-9148.png` (Hire role `270:9148`) |
| `build-guide-1440.jpg` | `figma-guide-272-9641.png` (Guide `272:9641`) |
| `build-hire-hub-375.jpg` | Hire hub phone `275:9688` |
| `build-industry-375.jpg` | Industry phone `276:10337` |
| `share-images-rendered-vs-figma.jpg` (rendered Hire role, Guide and Hire hub cards next to the Earworm frame `170:17561`) | Templates `267:8619`, `267:8598`, `170:7175` |
| `share-images-figma-exports.jpg` (Home `170:17276`, Earworm `170:17561`, OG · Template `170:7175`, Livio `209:8328`) | The exports themselves |

Compared by eye: card order, radii, type styles, the answer box, proof tiles, post cards, related rows and the table of contents match; the header's second button reads "See all work" where the sample said "See the work" (Rez decides later).

## Open issues

| For | Issue |
|---|---|
| All, R | `.generated/` (content index and bodies) is shared by every process in the folder. A build, `typecheck` or `next dev` in another chat rewrites it for its own stage while a build runs, and the build then fails ("No body for content/guides/index.mdx") or picks up the wrong stage. My first `cf:build` failed that way; retried when the folder was quiet, it passed. R should build when no other chat builds. A per stage folder in `scripts/content-index.ts` (F's) would end it |
| C | Case files hold no confirmed client name, so case `CreativeWork` has no `about` client node (07 §4.3 wants it only for confirmed clients). A `client` field set only when confirmed would let it in |
| C | `src/data/work.ts` fails `prettier --check` (C's file, in progress at the time of my check) |
| D | /accessibility has no description in `src/data/seo.ts` until its page copy settles (decision 30); it is noindex, so only share previews miss it |
| R | Lighthouse numbers here were taken while other chats built in the same folder; they are noisy and R's count |

## Requests

1. **Coordinator or F: `src/data/site.ts` `ambience[].src`** still names the old 2 minute files (`/audio/beach.mp3` and the rest), which are now masters in `assets/audio/`. The sound provider reads the encoded files from `src/data/audio.json` by `id` and only falls back to `src`. Drop `src` or point it at `audio.json` (site.ts is frozen for me).
2. **Coordinator or F: `.gitignore`** could list `public/og/gen/` (share images rendered at build; they change with the build stage) and `.indexnow-sent.json` stays tracked (it records what IndexNow was sent). Optional.
3. **F: `scripts/content-index.ts`** per stage output, see Open issues.
4. **R: the `inlineCss` trial** (07 §5.3 item 9): `experimental.inlineCss: true` in `next.config.ts`, then `cf:build`, Lighthouse on Home and a guide; keep it only if it builds on OpenNext and the numbers improve (CSS is 17 KB and render blocking for about 340 ms in the simulation).
5. **Rez, at launch:** the IndexNow key file ships at `/315e117ec78dfdbf39f3781578287dd7.txt`; after each deploy on rezkarim.com, `npm run indexnow -- --dry-run`, then `npm run indexnow`.

## Rez decides later

| Item | Default taken | Why |
|---|---|---|
| The new ambient loops | Each master cut to 60 seconds from 15 seconds in, 64 kbps stereo, 44.1 kHz, about 470 KB each (was 2.3 to 2.5 MB). Listen to `public/audio/*.mp3` against `assets/audio/*.mp3`; `npm run audio -- --start <seconds>` picks another cut | 07 §5.7: Rez listens before and after; quality is his call |
| Template card labels and buttons not in decision 46 | As drawn on the round 3 frames: Roles, Industries, Latest guides, The role, Job titles, Tools, Availability, Problems I solve, Proof, Cases, From a real project, Questions, Sources, Ask for my CV, Send a message, the eyebrows Role, Industry, Guide, Comparison. "What's included" for every deliverable (the frame said "What the deck includes" for a deck). Header buttons say "See all work" (the frames' sample said "See the work"; one name everywhere, 06 §9). All in `src/data/page-blocks.ts` | The frames are marked sample copy; these are interface words, not page copy |
| Guide share image meta line | "N minute read" from the body's word count (200 words a minute) | figma-c round 3: a read time or similar, never a date |
| `icon.svg` | The RK mark from Icon · 32 (its SVG export), on black | figma-c round 3 (28 Oct) names Icon · 32 for icon.svg, newer than the brief's "Icon · 512"; the 512 frame carries a photo texture that an SVG favicon would not show at 16 px |
| Trials needing a look check | Not run: no card blur on phones, scroll driven CSS reveals, Newsreader without optical sizes (07 §5.5, §5.6) | Each needs Rez's eye; the build keeps today's look |
| Hire hub proof claim and dock mapping | As the frames and decision 48 | Already approved |

## Suggested commit message

```text
feat: search, speed and the content templates

Give every page its full head from one helper (title, description,
canonical, hreflang, Open Graph, X card, robots) behind the
NEXT_PUBLIC_INDEXABLE switch, JSON-LD per page type around one Person,
robots.txt, a sitemap with case images, llms.txt and the guides feed,
per route X-Robots-Tag at launch, the launch redirect in the proxy and
noindex on Previews. Ship the 36 Figma share images, render the rest
with satori at build, and add the RK icons and manifest. Build the Hire,
Industry, Deliverable and Guide templates and the three hubs from the
round 3 frames. Cut the ambient loops to small hashed files that load
after a click, load Lenis after idle on mice only, show the first view
without JavaScript, stop the backdrop drift on phones, add cache rules
for static files, an IndexNow script and the JSON-LD test.
```
