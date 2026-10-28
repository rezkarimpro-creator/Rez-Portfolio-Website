done

# Chat C · Cases and images report

[README](../15-v4a-plan/README.md) · Done · 28 Oct 2026 · Opus 5.5, Extra high. Wave 1. Brief: [chat-c.md](../15-v4a-plan/chat-c.md).

## In one screen

- **Images (08 package I).** Every master now lives in `site/assets/images/`. `npm run images` turns each into static WebP files at 64, 128, 240, 480, 750, 1080 and 1400 with a content hash in the name, plus `src/data/images.json`. A custom loader adds the width, so no request goes through `/_next/image`. sharp writes no metadata; `backdrop.jpg` and `rez/headshot.jpg` are re-saved as plain files without it. Running it twice, with a full re-encode in between, gives byte-identical files and manifest.
- **Cases (08 package P5).** All 21 cases are MDX content files in `site/content/work/` at status `ready`, copy word for word from the V4a frames on page `10:3` (read by node id on 28 Oct). The 7 earlier cases moved out of `work.ts`; the 14 new ones are YumYum, ALPHA, Taif, Gravix, Azora, Nexus, Bristo, Orion, ReSpace, LYFT, IsHamn, Samā, CortexAI and Livio. 104 new masters came from the original image bytes in Figma (matched by SHA1, which is Figma's image hash) at 1400px with no upscaling: the 14 new cases, CargoShift cs-08 to cs-10, the SyncGrid cover `172:7109` and the clean Nike Mind cover `212:8331`.
- **Template.** The cover fills the hero at every width as the LCP image (eager, high priority); My role with Client on its own line and no labels or years; To confirm lines hidden live and amber in previews with the credit note; "3 design decisions"; Proof; the approved Earworm quote; Related links back from the pages that cite the case; the Next case loop over all 21; the lightbox captioned "Case · n of N" with arrows, keys, swipe and focus that returns.
- **Status.** A chat never sets `live` (common.md rule 17), so a production build (stage live) shows no case until Rez says OK and they flip; `next dev` and `cf:preview` show all 21. See "Rez decides later".

## Files changed

| File | What |
|---|---|
| `site/scripts/images.mjs` | New. The pipeline: widths, hash, blur, plain copies, sweep of stale files, case named file names (`yumyum-03.<hash>.750.webp`, 07 §3.7) |
| `site/src/lib/image-loader.ts` | Replaces F's stub: `${src}.${width}.webp`; paths with an extension pass through |
| `site/src/lib/img.ts` | `img()` as before, plus `isImgKey()` and `imgFile(key, width)` for plain URLs (metadata, JSON-LD) |
| `site/src/data/images.json` | Generated: 188 keys (the 77 old ones, 104 new case masters, chat D's 7 invite masters) |
| `site/assets/images/**` | Masters: the old `public/images` JPEGs and PNG moved here (`mv`), plus the 104 new ones |
| `site/public/images/**` | Generated WebP files (1,316) and the two plain JPEGs; the old JPEGs are gone from here (moved, not deleted) |
| `site/content/work/*.mdx` | New: the 21 cases |
| `site/src/data/work.ts` | Cases from the content index in `caseOrder` (figma C's loop); `caseCopy`; `homeOrder` earworm, real-estate-website, syncgrid, yumyum (08 §3.8); `workOrder` all cases; `onRequest` Omega, Astra, GHX Summit, recruiters (no NDA card, row 60); archive tiles gain `slug` where a case page exists (not Orvion, row 23); "Nike Mind · Unofficial deck". Same export names and shapes for chat D |
| `site/src/data/lightbox.ts` | New. Lightbox words, client safe |
| `site/src/app/work/[slug]/page.tsx` | The template; `dynamicParams = false`, so unknown slugs are a real 404 |
| `site/src/components/work/gallery.tsx` | Lightbox, ZoomImage and HeroImage on `m` components; pointer swipe (domAnimation has no drag); arrows on every width; focus trap and return; `<Lightbox images>` and `<ZoomImage index image>` keep their old signatures for D's /social |
| `site/src/components/work/case-hero.tsx`, `next-case.tsx` | New |
| `site/src/styles/cases.css` | The case, gallery and lightbox styles; tokens and logical properties only |
| `site/docs/content.md` | The cases part: fields, images, "Add a case from a Figma frame" |
| `site/CHANGELOG.md` | One line under Unreleased |
| `01-portfolio/08-build-reports/c-shots/` | Screenshot pairs |
| `09-archive/2026-10-28-old-case-covers/` (project root) | The replaced Nike Mind and SyncGrid covers, with a line in `09-archive/README.md` |

**Minimal changes in files other chats own**, needed by the move:

| File (owner) | Change | Why |
|---|---|---|
| `site/scripts/lib/checks.ts` (F) | Dropped the import of `cases` from `work.ts`; case existence and liveness now come from the case files; new check that every image key in a case file is in `images.json` | `work.ts` now reads the content index through `@/` aliases, which plain Node can't load, so `content:check` would have crashed. The image check is the "images exist" step of the gate (operations §2.2 G4) |
| `site/src/lib/routes.ts` (F) | `allRoutes` = static routes plus `contentRoutes()` | `contentRoutes()` already lists the case pages; adding `cases` again listed every case twice |

## Checks

| Check | Result |
|---|---|
| `npm run images` twice | Same output: after deleting every generated file and re-encoding all 1,316, the files' checksums and `images.json` are byte-identical to the first run (and a plain second run encodes 0) |
| Image sizes, before and after | Before: 77 JPEG and PNG masters served from `public/images` (9.1 MB) through `/_next/image`. After: 188 masters in `assets/images` (25 MB, not served) and 1,316 WebP files in `public/images` (22.3 MB, all widths). A page loads one width per image, about 3 to 7 times smaller than the JPEG: Earworm cover 250 KB master, 34 KB at 750, 85 KB at 1400; Pulse pl-03 376 KB, 61 KB, 141 KB |
| Metadata | 0 of 1,318 outputs carry EXIF, XMP or IPTC (sharp metadata read); `backdrop.jpg` and `rez/headshot.jpg` re-saved without it |
| Static file count (operations §5.2) | 1,662 files in `public/` (1,327 images), 1,709 in the Worker build's assets, against the free limit of 20,000; the largest image is 190 KB (limit 25 MiB) |
| `content:check`, `content:lint`, `content:gate --fast` on the case files | Pass, 0 problems in `content/work` |
| `npm run check` | Stops at `format:check` on 4 files other chats own (Open issues). Its other steps, run one by one: lint, typecheck, content:check, content:lint, agents:check, check:deps, test (41 of 41), build (stage live: `/work/[slug]` builds with no cases, since none is live yet), check:secrets: all exit 0 |
| Prettier, ESLint, typecheck on my files | Clean |
| Every case at 375, 768 and 1440 (BrowserOS, next dev) | All 21: right title, no sideways scroll, no broken image, hero 343 by 600 at 375 and 700 by 600 at 768 and 1440, title inside the hero; gallery counts match the frames (CargoShift 10, ReSpace and CortexAI 5, the rest 4 to 7); Next case runs the figma C loop and Livio returns to Earworm |
| Three cases against their frames | Earworm 1440 (`82:8639`), YumYum 1440 (`172:17340`), Samā 375 with the phone template (`149:15858`) and lightbox (`150:6502`); two fixes made, see Screenshots |
| Lightbox (09 §3) | Opens from every image; caption "Earworm investor deck · 2 of 6", no counter; arrow keys and buttons step and wrap; swipe left and right steps (pointer events at 375); Esc closes; focus goes to Close and returns to the image; scroll unlocks |
| Unknown slugs | `/work/nope` 404 on next dev and on the Worker (`dynamicParams = false`) |
| No `/_next/image` | 0 requests and 0 references on next dev and the Worker; srcsets list only real files |
| To confirm hidden live | On the Worker (`.env.production.local`, notes off): SyncGrid shows Scope only, Real estate website Scope and Studio, no "To confirm" and no credit note; next dev with notes on shows them amber |
| `cf:build` (stage preview) | Pass, `check:secrets: ok` (69 client files scanned) |
| `cf:preview` | My own preview start lost a race with another chat's rebuild of `.open-next`, so I checked on that chat's preview, built after my last code change: `/`, `/work`, `/work/earworm`, `/work/pulse`, `/work/livio`, `/about`, `/work/private` 200; images 200 `image/webp` with their cache header |
| Mobile speed on the Worker (not Lighthouse; Open issues) | 412 px phone, 4x CPU, about 1.6 Mbps and 150 ms: `/work/earworm` LCP 2.2 s (cold 0.6 s first response), CLS 0.004; `/work/pulse` LCP 1.2 s, CLS 0. The LCP element is the hero WebP at 750 on both. Noisy while other chats build (common.md rule 13); R's Lighthouse counts |
| 09 §3 Case pages | Back to /work; My role without Client or Concept labels or years; Nike Mind "Not affiliated with Nike"; To confirm hidden live; the Earworm quote is row 80's sentence; lightbox as above; Next case loops; call card. Pass on all 21 |

## Screenshots

In [c-shots/](c-shots/), build (BrowserOS, own background tab, closed) beside the frame:

| Build | Figma |
|---|---|
| `build-earworm-1440-hero.jpg` | `figma-earworm-82-8639-top.png` (`82:8639`) |
| `build-earworm-1440-proof-quote.jpg` | `figma-earworm-82-8639-end.png` (`82:8639`) |
| `build-yumyum-1440-role-brief.jpg` | `figma-yumyum-172-17340-top.png` (`172:17340`) |
| `build-sama-375-hero.jpg` | `figma-case-phone-149-15858-top.png` (phone case `149:15858`, the template the 20 others use) |
| `build-sama-375-lightbox.jpg` | `figma-lightbox-phone-150-6502.png` (`150:6502`); desktop `figma-lightbox-82-9884.png` (`82:9884`) |

Compared by eye and by computed sizes: the hero is 700 by 600 at 1440 and 768 and 343 by 600 at 375 (Figma 700 by 600, 358 by 598 at 390); text styles read from the frame (Label/L text/secondary for card labels, Label/M text/primary for My role values, Body/L text/primary for the brief, Label/Eyebrow for the cell labels). Two fixes came out of the comparison: the hero title now runs the full width, so "Earworm investor deck" sits on one line as drawn; and the labels and values took the styles above. The 768 view is the desktop column, centred (decision 35).

## Open issues

| For | Issue |
|---|---|
| Everyone | `npm run build` (its `prebuild`) rewrites `.generated/content-index.json` at the live stage, and the shared `next dev` reads the same file. Twice today (07:22 and 07:24) other chats' builds left the dev server with no cases and no content pages (all 404) until `npm run content:index -- --stage draft` ran. Noted in the shared notes; Request 2 |
| E | `caseMeta` in `src/lib/seo/index.ts` uses `img(c.cover).src` for Open Graph. That is now a base path with no extension, so it 404s; use `imgFile(c.cover, 1400)` or the case's share image. Sitemap and JSON-LD go through the loader and resolve to real files |
| E | `_headers`: every file in `/images/work/*` is now hashed, so a year with `immutable` is safe there. `/images/backdrop.jpg`, `/images/rez/headshot.jpg` and D's plain `/images/invite/*.webp` are not hashed and should keep the week |
| D | `work/case-card.tsx` aria-label says "<title>, Client case" or "Concept case" (row 81). `label` stays in the `Case` type only so the file compiles; drop it from the label, then from the type |
| D | `archive[].slug` names a case page; link a tile only when `caseBySlug(slug)` exists in this build. `services.ts` decides which new cases show on each service page (each case file has its `services`) |
| D | Archive tiles "Fitness app UI" and "Furniture ecommerce website" may be LYFT and ReSpace, but nothing confirms it, so they stay unlinked |
| B, E | `format:check` fails on `docs/performance.md`, `package.json`, `src/components/forms/form-meta.tsx` and `src/components/stats/message-list.tsx`, so `npm run check` stops there; I ran its other steps one by one |
| R | Lighthouse isn't installed and common.md rule 5 forbids installs, so the brief's Lighthouse runs on /work/earworm and /work/pulse are R's. My own numbers (below) come from the browser's performance entries |

## Requests

1. **Coordinator or R: `scripts/lib/checks.ts`, the "a live case still has a My role line to confirm" error.** It stops Real estate website, SyncGrid, CargoShift and Pulse from going live, but decision 40 says launch with those values hidden (the template hides them). Make it a warning, or allow it when the line is `toConfirm`, before the cases flip to live.
2. **Coordinator or R: one content index per stage.** Let `content-index.ts` write `.generated/content-index.<stage>.json` (or have `next dev` re-run the draft index on change), so a build never empties the shared dev server.
3. **E:** the `caseMeta` Open Graph image and the `/images/work/*` cache rule (Open issues).
4. **D:** the case card aria-label and the archive links (Open issues).

## Rez decides later

| Item | Default taken | Why |
|---|---|---|
| The 21 cases go live (operations §2 G7, G8) | All `ready`. After your OK, set `status: live` in each `content/work/*.mdx` and re-run `npm run content:gate`. Until then a production build shows no cases (`cf:preview` shows all 21). Needs Request 1 first for the 4 cases with a hidden line | common.md rule 17; decision 20 |
| The 14 new case descriptions (155 characters or less) | Written from each frame's own lines: the scope first, then the one idea | 07 §3.2's pattern; no new claims |
| Alt text for 88 new images (14 cases, CargoShift's 3) | Written from the images: what each shows | 07 §3.7 |
| Industry tags | Only from each case's own words: Earworm and SyncGrid `saas`; Real estate website, Taif and Azora `real-estate`; SolVita `healthcare`; YumYum and Bristo `restaurants-and-cafes`; Gravix `fintech`; Orion `fintech`, `saas`; CortexAI `ai-startups`, `saas`; ReSpace and IsHamn `ecommerce` (their scope says "Ecommerce website"). LYFT, Livio and Pulse have none (for-rez.md F3) | seo §3.5, "confirmed ones only" |
| Deliverable tags | From each scope: `saas-pitch-deck` and `presentation-design` (Earworm, Nike Mind, as the page map does), `logo-design`, `packaging-design`, `dashboard-ui-design`, `mobile-app-design`, `framer-website-design` (SolVita) | seo page map rows 26 to 41 |
| Internal `kind` for the 12 cases whose label is still To confirm (rows 10 to 21) | `concept`. Never shown; it only feeds the copy lint's concept check | The safe side of hard rule 4 |
| CargoShift's internal code B3 | Left out of the file | Row 68 is still open |
| YumYum in the Social filter | Yes: its scope says "menu and social" | figma B left it to chat C |
| Lightbox arrows on phones | Shown beside the caption, which Figma `150:6502` doesn't draw | WCAG 2.5.7, best-practices §5.1: swipe needs a non drag path |
| The lightbox count | Gallery images only, so Earworm reads "2 of 6"; the Figma sample caption says "2 of 7" | The hero is not a gallery image and doesn't open the lightbox in the frames |
| The hero image's alt | Empty, since the title on it names it; Work cards and the sitemap keep "[Case] cover" | 07 §3.7 |
| Images under 1400px (IsHamn, Livio, ReSpace rs-06, CortexAI cx-04; Orion, ReSpace and LYFT at 1390 to 1395) | Shipped at their own size, no upscaling | Decision 42 |

## For P7 and E: which image paths are immutable

Every `/images/<folder>/<name>.<hash8>.<width>.webp` file is immutable: a changed master or setting gets a new hash. Not hashed: `/images/backdrop.jpg`, `/images/rez/headshot.jpg` (plain copies) and D's `/images/invite/*.webp`.

## Suggested commit message

```text
feat: move cases to content files and serve static WebP images

Add the image pipeline: masters in assets/images become static WebP files
at fixed widths with hashed names and a manifest, served through a custom
next/image loader with no metadata. Move the seven cases from work.ts to
content/work and add the fourteen new cases from the V4a frames, with alt
text, descriptions and tags. Rebuild the case template: full bleed hero as
the LCP image, My role with hidden To confirm lines, 3 design decisions,
Proof, the approved Earworm quote, Related links, the Next case loop and a
captioned lightbox with keys, arrows and swipe.
```
