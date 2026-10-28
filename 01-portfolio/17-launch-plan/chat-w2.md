# Chat W2 · SEO batch 2

[README](README.md) · Draft · 28 Oct 2026 · Sonnet 5.5, high. Starts now. Publish date: 2 weeks after launch (Rez, 28 Oct).

## Scope

Write the next 10 SEO pages, exactly as chat W wrote batch 1, at `status: ready`. Rez reads them; they go live 2 weeks after launch.

## Read first

`01-portfolio/08-build-reports/w.md` (how batch 1 was written, its rules and its batch table), `01-portfolio/15-v4a-plan/chat-w.md`, `01-portfolio/15-v4a-plan/planning/seo-page-map.md` (batch 2 rows), `01-portfolio/15-v4a-plan/planning/seo-aeo-geo.md` §3 and §6, `site/docs/content-rules.md`, `site/docs/runbooks/publish-content.md`, `01-portfolio/00-facts.md`, `site/content/claims.ts`.

## Owns

New files only, in `site/content/pages/` and `site/content/guides/`. Not: existing content files, templates, code, images.

## Tasks, in order

1. Pick the 10 highest priority batch 2 rows of the page map (P1 first) whose proof exists today, including the 4 new deck cases (Atlas, Azora investor deck, CargoShift investor deck, WorkLouder) and the new industry tags (Livio real estate, LYFT fitness) where they add proof. Skip any row that waits on a fact; list it.
2. For each: `npm run content:new`, write the file (answer first, claims by key, 3 to 5 FAQs, 2 to 5 related pages, dated sources for outside facts read in BrowserOS, no prices, concept cases never shown as client work), `npm run content:gate -- <file>` until it passes. Keep `status: ready`.
3. Check the agency overlap by hand against `F:\🚩 CLAUDE\rez-agency-website\data\pages.csv` (read only), as W did.
4. Preview all 10 on http://localhost:3000 at 1440 and 390 (restart is not yours: if the dev server doesn't show a new file, ask the coordinator).
5. Report with W's batch table (URL, main question, first sentence, proof line, gate) and the proposed publish date (launch day plus 14).

## Done when

10 files pass the full gate at `ready`; the batch table is in the report for Rez's read.
