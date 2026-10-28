# Chat E · Search and templates

[README](README.md) · Approved 27 Oct 2026 · Opus 5.5, Extra high · Wave 1.

## Start condition

`08-build-reports/f.md` starts with "done". The new templates also wait for the Figma round 3 frames (the coordinator says when they exist); do the 08 P7 work first.

## Read first

[common.md](common.md); [08](../08-build-plan.md) package P7 in §6 and §3.6; [07](../07-search-and-speed-plan.md) (all); [09](../09-functional-checklist.md) §1 (sound, reveals, smooth scroll), §7 and §8 (speed); [seo](planning/seo-aeo-geo.md) §3 and §5.1; [security](planning/security.md) §5.3 and §5.4; the E rows under "For the build chats" in operations, security, best-practices and [figma C](planning/figma-c-cases-assets.md); F's report (path map, contracts, content schemas).

## Owns

The P7 files in 08 §11 at their new paths; the templates for `/hire`, `/for`, `/<service>/<deliverable>`, `/guides` and the hubs; the `src/lib/seo/` implementation; `scripts/og.mjs`, `scripts/indexnow.mjs`; `tests/json-ld.test.ts` and `tests/fixtures/content/`; `docs/seo.md`, `docs/performance.md`, and the pages and guides part of `docs/content.md`.

## Tasks, in order

1. **08 P7 in full** (metadata, JSON-LD, robots, sitemap, llms.txt, the launch switch, share images, icons, the speed items, the proxy, IndexNow, measuring), with: the proxy redirect listing hosts explicitly and skipping the Preview stage (`SITE_STAGE`, operations); `workers_dev` and `preview_urls` kept false; per route `X-Robots-Tag` without dropping F's security headers; share images exported from `170:7174` and converted to JPG in the script, and `icon.svg` from Icon · 512 (figma C); satori share images at build for every new page, never at request time.
2. **The new templates** from the Figma round 3 frames: Hire hub and role, Industry hub and page, Deliverable, Guide and the Guides index. One h1 each, fixed heading levels, visible breadcrumbs. JSON-LD per seo §3.3 (the Person `@id` with `alternateName`, no prices). The sitemap, the llms.txt groups and the RSS feed at `/guides/feed.xml` from live files only; reverse links with C.
3. **Test data**: one fixture per family under `tests/fixtures/content/` (never built) until W's batch 1 files land, then W's files.
4. **Ready for later**: `alternates.languages` in `seo.ts` (best-practices §10); `tests/json-ld.test.ts` proves a title with `</script>` stays inert.

## Checks

Curl the head of every route with `NEXT_PUBLIC_INDEXABLE` at 0 and at 1; parse every JSON-LD block; robots, sitemap, llms.txt and RSS in both modes; Lighthouse mobile, 3 runs, median, one page per template; `cf:build` and `cf:preview`; `npm run check`.

## Done when

Every route has the right head tags and structured data in both modes; every page has a share image; 09 §7 and the P7 rows of §1 and §8 pass; the 07 §5.2 budgets are met or the gap is explained.

## Report

Filled by chat E in `08-build-reports/e.md`.
