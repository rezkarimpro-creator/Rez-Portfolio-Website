# Chat C · Cases and images

[README](README.md) · Approved 27 Oct 2026 · Opus 5.5, Extra high · Wave 1.

## Start condition

`08-build-reports/f.md` starts with "done".

## Read first

[common.md](common.md); [08](../08-build-plan.md) packages I and P5 in §6, §3.4 (Cases row), §3.5 and §3.8; [07](../07-search-and-speed-plan.md) §3.2, §3.7, §4.2, §5.4 and §5.9; [09](../09-functional-checklist.md) §3 (Case pages); [figma C](planning/figma-c-cases-assets.md) (the Cases table, Assets, "Fixes applied" and "Round 2"); [seo](planning/seo-aeo-geo.md) §3.4 and §3.5 (case tags, reverse Related); the C rows under "For the build chats" in security, best-practices and operations; F's report (path map, the case schema).

## Owns

`scripts/images.mjs`, `src/lib/image-loader.ts` (after F's stub), `src/lib/img.ts`, `src/data/images.json`, `assets/images/**`, `public/images/**`, `content/work/**`, the case route and its components (case hero, gallery, next case), `src/styles/cases.css` (new paths per F's map), and the cases part of `docs/content.md`.

## Tasks, in order

1. **08 package I**: static WebP at fixed widths from the masters, the custom loader, the manifest. sharp drops metadata (never `withMetadata`); `backdrop.jpg` and `rez/headshot.jpg` are saved without metadata too.
2. **08 package P5's template**: "3 design decisions", "Proof", the Next case loop over all 21 in figma C's order, the lightbox caption "Case name · n of N", swipe on phones, the hero as the LCP image.
3. **All 21 cases as content files**, copy word for word from the frames in figma C's Cases table (by node id, page `10:3` only). Masters from the original image bytes at 1400px, no upscaling (decision 42). CargoShift gains cs-08 to cs-10. Alt text for every image (07 §3.7): the 14 new cases and the 3 new CargoShift images need new lines. Descriptions of 155 characters or less; slugs from 08 §3.5. To confirm values stay hidden (decision 40); designer notes never ship; Nike Mind uses the clean cover and "micro check ins" (decision 33).
4. **Case tags** `industries` and `deliverables`, confirmed ones only (Rez's answers to for-rez.md §3, F3), and the reverse Related block (up to 3 live pages).
5. **Static file count** per build against the free limit of 20,000 (operations §5.2).

## Checks

`npm run images` twice with the same output; every case at 375, 768 and 1440, three spot checked against their frames; unknown slugs give a real 404; no `/_next/image` requests; Lighthouse mobile on /work/earworm and /work/pulse; `cf:build` and `cf:preview` on Home, Work, a case and About; `npm run check`.

## Done when

All 21 cases are live as content files with images, alt text and a description; the template matches its frames; 09 §3 Case pages passes for every case.

## Report

Filled by chat C in `08-build-reports/c.md`.
