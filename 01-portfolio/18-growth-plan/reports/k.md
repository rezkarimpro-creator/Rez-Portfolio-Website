done

# Chat K report · Speed

[README](../README.md) · Draft · 29 Oct 2026 · Chat K (Opus 5.5). Read with [chat-k.md](../chat-k.md).

## Done

| Task | Result | Helps |
|---|---|---|
| 1 Measure first | PageSpeed Insights on the live site, mobile and desktop, 5 pages (table below). No field data on any page yet. Lighthouse 12, 3 runs each, median, on a local Worker built from a copy of the live commit `72e6f51` in my scratch folder, so the other chats' edits and builds never mixed in | All three |
| 2 JavaScript before the first paint | Found why Motion is heavy: Motion 14's `motion/react` entry does `import * as fm` and reads `fm.motion`, so the whole `motion` component and every feature (drag, layout projection, pan) ship on every page and `LazyMotion`'s lazy `domAnimation` does nothing. **Built, with the coordinator's OK:** one alias in `next.config.ts` (`motion/react` to `framer-motion`, commented, plus a recheck line in `docs/runbooks/dependency-update.md` step 6, since it holds only while motion pins framer-motion at its own version, 14.4.0 today). Measured in the copy: Home's first load JavaScript 306 KB to 266 KB compressed (`next analyze`), 249 KB to 235 KB transferred, and `domAnimation` (19 KB) loads after hydration as 07 §5.6 meant. In the shared tree: 260.5 KB gzip live to 232.3 KB. No behaviour change, checked on the local Worker: reveals, the Book pill's spring, Work filters, Career rows entering and leaving, the lightbox and the booking modal all animate, and with reduced motion the reveals, the spring and the lightbox behave exactly as on the live site. The sound engine stays as it is: 1.9 KB, and loading it on the first tap would call `AudioContext.resume()` after an await, which iOS Safari can refuse, so first tap sounds could break. Smooth scroll, Cal.com and the booking modal already load late | All three |
| 3 The largest image | Already right: the case hero is preloaded at high priority with `sizes` for phones (750w on a 412 px phone); Home's LCP is the h1, the portrait is a 64 px avatar. What costs time is in chat C's files: Requests 2 and 3 | `cal_booked`, `form_sent` |
| 4 Fonts | **Built.** Newsreader is now Google's own Latin file with the weight axis pinned at 400 (the only weight any serif text uses, checked on 28 live pages covering every template) and the optical size axis kept: 132 KB to 57 KB. Rendered next to the live font at 14, 18, 22, 30, 36, 48, 60, 72 and 96 px: identical pixels and widths. It loads through `next/font/local` and stays preloaded; the fallback face keeps next/font/google's sizes (the local loader's own guess was about 5% narrower than the titles). Fonts per page: 156 KB to 83 KB, under the 120 KB budget. Plus Jakarta Sans stays as it is: only 7.5 KB to gain and /work uses a Latin Extended letter (ā) its split files cover | All three |
| 5 CSS | 17 KB against 15. Dead rules are under 1 KB (`glass-label`, `elevation-overlay`, `is-focus` in `components.css`, chat C's). The real lever is that every page loads the Stats and invite styles: Request 5 | All three |
| 6 Responsiveness | Local Worker with the CPU slowed 4 times: services accordion 176 ms, archive arrows 104 ms, sound switch 96 to 136 ms, Book free strategy call 192 ms. All under 200 ms; most of each is the next paint (glass and blur), handlers take 1 to 7 ms (42 ms on the very first tap, which creates the audio context). Real visitors: INP 100% good | `cal_booked` |
| 7 Cloudflare settings | Read, nothing saved, so nothing to ask. HTTP/3, HTTP/2, TLS 1.3 on; Rocket Loader, Speed Brain, Early Hints, Cloudflare Fonts, 0-RTT off; pages and files go out with Zstandard (compression needs no switch). Early Hints only works from `Link` headers, which the Worker doesn't send; Speed Brain only serves pages from Cloudflare's cache, and these come from the Worker, while Next.js already prefetches links. Leave all off | None |
| 8 Real visitors | Too few visits for a week's view (40 visits in the first 24 hours). Early numbers: LCP 95% good, P75 413 ms (P90 1.6 s); INP 100% good; CLS 98% good. Rez's steps are below | All three |
| 9 Measure again | Table below. Kept both: the font change (better on 4 of 5 pages, same score and lower LCP on Home) and the alias (Contact 73 to 80, Home 82 to 83). `docs/performance.md` has the speed log and how to rebuild the font file | |
| 10 Checks | Below. CHANGELOG line added | |

### PageSpeed Insights, live, before (29 Oct)

| Page | Mobile | LCP | TBT | Desktop |
|---|---|---|---|---|
| Home | 89 | 3.8 s | 60 ms | 99 |
| Work | 85 | 4.1 s | 150 ms | 99 |
| Earworm case | 89 | 3.7 s | 70 ms | 100 |
| Contact | 69 | 3.2 s | 860 ms (Cal.com, 1.8 s of script) | 82 |
| Guide (pre-seed pitch deck) | 94 | 3.1 s | 40 ms | 100 |

### Lighthouse 12 mobile, local Worker, median of 3

| Page | Before | With the font change | Plus the Motion alias (both in the tree) | LCP before, after both |
|---|---|---|---|---|
| Home | 82 | 82 | 83 | 4.90 s, 4.65 s |
| Work | 80 | 81 | 81 | 5.33 s, 5.08 s |
| Earworm case | 81 | 83 | 83 | 4.91 s, 4.79 s |
| Contact | 71 | 73 | 80 | 14.7 s, 4.82 s |
| Guide | 83 | 86 | 85 | 4.41 s, 4.07 s |

Home weight 626 KB to 539 KB. Local scores run 5 to 10 points under PageSpeed's (Home 82 here, 89 there), so the mobile 90 target is judged on PageSpeed after Rez's redeploy (chat V). Nothing looks or behaves differently: the font renders the same pixels, and the alias keeps the same Motion exports and features (checked above).

Why the simulated LCP stays near 4 to 5 s locally: the h1 paints with the first paint (observed 0.63 s), but Lighthouse's slow 4G simulation charges everything requested before it, which is all the JavaScript (React and Next.js are about 190 KB of it), both fonts and any preloaded images. The levers left are in chat C's files (Requests 2 to 5).

## Files

| File | Change |
|---|---|
| `site/src/app/layout.tsx` | Newsreader through `next/font/local` from the pinned file, weight 400, preloaded, fallback "Newsreader Fallback" |
| `site/src/fonts/newsreader-400-latin.woff2` | New, 57 KB: Google's Latin Newsreader with the weight axis pinned at 400 (OFL, license in `scripts/fonts/ofl-newsreader.txt`) |
| `site/src/styles/base.css` | The "Newsreader Fallback" face with next/font/google's sizes |
| `site/docs/performance.md` | Fonts and Motion rows, the speed log (PageSpeed, Lighthouse before and after, responsiveness, real visitors, Cloudflare), how to rebuild the font file |
| `site/next.config.ts` | `turbopack.resolveAlias` for `motion/react`, with why and when to recheck |
| `site/docs/runbooks/dependency-update.md` | Step 6: recheck the alias on every motion update |
| `site/CHANGELOG.md` | One line under Unreleased |

Commit message for Rez: `Speed: pin Newsreader to weight 400 (57 KB, same look), load Motion features lazily through a framer-motion alias, add the speed log`

## Checks

| Check | Result |
|---|---|
| `npm run check` | Stops at Prettier on 3 files from other chats (`src/data/quotes.ts`, `src/lib/db/d1.ts`, `src/lib/db/index.ts`). Then each step on its own: names, lint, typecheck, content check and lint, agents check, deps, tests (42 of 42), build (78 pages), secrets: all pass. Prettier on my files: clean |
| Build output | The new font is preloaded on every page; `--font-newsreader` is `"newsreader", Newsreader Fallback`; the fallback face has 69.68%, 25.12%, 105.48% |
| `npm run worker:size` | 9.39 MiB of 64 MiB (2.01 MiB gzip), shared tree after `cf:build` |
| After the alias | `next build` (78 pages) and `cf:build` pass on the shared tree; typecheck and lint pass; no console errors on Home, /about, /work, /career, the Earworm case; the port 3000 dev server restarted after the config edit and answers 200 |
| Font look | Pixel compare in a browser, both fonts drawn at the same spot: identical at 9 sizes from 14 to 96 px; outlines equal within 0.5 font units on 3 rarely used glyphs (å, °, ©) |
| Lighthouse | 3 builds (before, fonts, fonts and alias), 15 runs each |
| Dev server on port 3000 | Untouched and still listening |

## Open issues

| For | Issue |
|---|---|
| Chat V | Run PageSpeed on the 5 pages after Rez's redeploy and compare with the table above |
| Chat C | With reduced motion on, the lightbox's next slide still scales in slightly (0.97 to 1), on the live site too, so it isn't from this change. `MotionConfig reducedMotion="user"` should skip it; worth a look in `gallery.tsx` |
| Rez | The cookie banner's text can become the LCP on a first visit when it is bigger than the page's hero text (it did on /contact before the alias; real visitors' P90 of 1.6 s fits). Changing that would change the banner's look or timing, so it stays |
| Next session | My PageSpeed tabs were closed by something else midway; tab 107 now shows another PageSpeed run that isn't mine, so I left it open |

## Requests

| For | Request | Gain | Helps |
|---|---|---|---|
| 2 Chat C, Home Selected work | Home preloads the Earworm and Real estate covers at high priority (64 KB at 750w), but Home's LCP is the h1 on phones. Drop `priority` there, or keep it only if PageSpeed desktop shows a cover as Home's LCP | Less before the first paint on Home | All three |
| 3 Chat C, /work covers | Besides the two preloaded covers, 8 lazy covers (250 KB) start before the first paint because they sit inside Chrome's lazy loading distance. Options: a 640 width step for phones (the cards are about 314 px wide), or AVIF later (07 §5.4) | /work LCP | All three |
| 4 Chat C, `archive-rows.tsx` | The archive rows' animation loop runs every frame even off screen (about 1.2 s of slowed CPU per Lighthouse run). Start the loop when the row comes into view and stop it when it leaves | Battery and responsiveness on phones | `cal_booked` |
| 5 Chat C, CSS | `stats.css` and `invite.css` load on every page; importing them only on /stats and /linkedin/invite (look check after) gets the CSS under its 15 KB budget. Dead rules: `glass-label`, `elevation-overlay`, `is-focus` in `components.css`. The track switch bubble animates `width`, which Lighthouse flags as not composited | CSS budget | All three |
| 6 Rez, /contact | Cal.com loads with the page (your call of 29 Oct) and costs about 2 MB and 1.8 s of script: PageSpeed mobile 69, TBT 860 ms. Loading it when the calendar scrolls near the screen would keep the look; the skeleton shows a moment longer for someone who scrolls fast. Your call, then chat C builds it | Contact toward 85 | `cal_booked`, `form_sent` |

## What Rez still clicks

| Action | Where / how |
|---|---|
| Redeploy once after chats C, K and G | `site/`, as before |
| Answer Request 6 if you want Contact faster | In chat C |
| Core Web Vitals once a week of visits exists (about 5 Nov) | Cloudflare dashboard, Analytics, Web analytics, rezkarim.com, Core Web Vitals. Read LCP, INP and CLS at P75, then the URL tab per page. Good: LCP under 2.5 s, INP under 200 ms, CLS under 0.1 |
