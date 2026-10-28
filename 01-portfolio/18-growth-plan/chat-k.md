# Chat K · Speed

[README](README.md) · Draft · 29 Oct 2026, revised the same day · Opus 5.5, Extra high. Wave 1.

## Scope

A phone visit is fast enough that speed never costs a booking or a ranking: mobile Lighthouse 90 or more on Home, /work, a case, /contact and a guide; for real visitors LCP under 2.5 s, INP under 200 ms and CLS under 0.1.

## Read first

`01-portfolio/08-build-reports/r.md` "Speed" (scores 81 to 90; observed LCP 0.58 s; the simulated LCP is mostly JavaScript before the first paint; `inlineCss` tried and reverted), `01-portfolio/08-build-reports/e.md`, `01-portfolio/07-search-and-speed-plan.md` §5, `site/docs/performance.md`. Live on 29 Oct: the server answers in about 50 ms from this PC and HTTP/3 is on.

## Owns

`site/src/components/providers/`, `site/src/lib/motion-features.ts`, `site/src/lib/sound.ts`, `site/src/app/layout.tsx`, `site/src/styles/motion.css`, `site/src/styles/base.css`, speed scripts under `site/scripts/`, `site/docs/performance.md`, and the Cloudflare speed settings for rezkarim.com (each save with Rez's OK).

Not: chat C's files (pages, sections, the layout components such as the dock, ui), chat G's files, `next.config.ts` (ask the coordinator), content files. A speed change in a C file goes under Requests.

## Tasks, in order

1. **Measure first**: PageSpeed Insights in BrowserOS (pagespeed.web.dev; the anonymous API was over its daily quota on 29 Oct), mobile and desktop, on https://rezkarim.com, /work, /work/earworm, /contact and /guides/pre-seed-pitch-deck. Then Lighthouse 12 on `cf:preview` (your own port) for the same pages, 3 runs each, the median. Note any field data Google shows.
2. **Cut JavaScript before the first paint**: find what loads on every page (React, Next, Motion, the providers: sound, smooth scroll, consent, tracker, toast, reveal observer) and defer what the first view doesn't need (dynamic imports after idle, Motion features on demand, the sound engine on the first click). Keep every behaviour as it is.
3. **The largest image**: the case hero and the Home portrait load first where they're the LCP (priority and preload), at the right width for 390.
4. **Fonts**: 156 KB against a 120 KB budget; subset to the characters the site uses or drop unused weights, keeping the look identical (`next/font` options).
5. **CSS**: 17 KB against 15; remove dead rules if any.
6. **Responsiveness (INP)**: the click and hover sounds, the dock and the Book buttons answer within 200 ms on a slow phone profile; nothing long runs on a tap.
7. **Cloudflare settings** (BrowserOS: read first, then ask Rez before each save): Early Hints, Speed Brain if it doesn't double Next's own prefetch, Brotli. Never Rocket Loader (it breaks React) and nothing paid.
8. **Real visitors**: Cloudflare Web Analytics, Core Web Vitals (LCP, INP, CLS per page), once a week of visits exists; put the numbers in the report, or the steps for Rez if there are too few visits yet.
9. Measure again with the same method; keep only changes that improve the numbers. Update `docs/performance.md` with before and after.
10. `npm run check`, `npm run worker:size`, a CHANGELOG line.

## Done when

The before and after table shows the gain; nothing looks or behaves differently; `npm run check` passes.

## Report

Done, 29 Oct 2026: [reports/k.md](reports/k.md). Fonts 156 KB to 83 KB per page and Motion's features lazy through a `next.config.ts` alias (Home's first load JavaScript 260.5 KB to 232.3 KB gzip), both built, nothing looks different.
