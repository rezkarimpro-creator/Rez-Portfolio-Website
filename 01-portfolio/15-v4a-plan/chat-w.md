# Chat W · Content, batch 1

[README](README.md) · Approved 27 Oct 2026 · Opus 5.5, Extra high · Wave 1. **28 Oct:** Rez chose 5 build chats, so one chat W writes all 20 rows (it was W1 and W2).

## Start condition

`08-build-reports/f.md` starts with "done" (schemas and `content:gate` exist). Previews wait for E's templates.

## Read first

[common.md](common.md); [seo-page-map.md](planning/seo-page-map.md) (the batch "1" rows); [seo](planning/seo-aeo-geo.md) §3.2 to §3.7 and §6.2; [operations](planning/operations.md) §1 and §2 (batch mode and the §2.4 report); [security](planning/security.md) §6.1; [00-facts.md](../00-facts.md); `site/content/claims.ts`, `site/content/rules.json`; `site/docs/runbooks/publish-content.md` once F writes it.

## Rows

The 20 rows marked "1" in the page map, in its order. Never a "drop" or "wait" row.

## Owns

The content files for your rows only, and an image master if a row truly needs a new one (rare; case covers are reused by key).

## Per page

1. Check the row's `intentKey` against the agency list and every live page; stop on a clash.
2. `npm run content:new`, then write it: the answer first (25 to 40 words); proof by claim key; 2 or 3 proof cases; 3 to 5 FAQs, each answered in its first sentence; dated sources for any outside fact; related pages; H2 and H3 in order; alt text; `locale: "en"`. No prices, and no concept presented as client work.
3. `npm run content:gate -- <file>` until it passes. Status `ready`, never `live`.
4. Preview at 390 and 1440 once E's templates exist.

## Batch report

In operations §2.4's shape (URL, main question, first sentence, proof line, gate result), plus 2 pages picked at random for Rez to read in full (decision 19).

## Done when

Your 20 files sit at `ready` with the gate green, and the batch report is in your report file.

## Report

Filled in `08-build-reports/w.md`.
