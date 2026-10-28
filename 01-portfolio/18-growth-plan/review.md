# Chat V · Review and end to end

[README](README.md) · Draft · 29 Oct 2026, revised the same day · Opus 5.5, High. After Rez's redeploy of chats C, K and G.

## Scope

One review of what wave 1 changed and one end to end pass ([e2e.md](e2e.md)), on the live site and on `cf:preview`, ending with Rez's "You check" table.

## Read first

Every report in `01-portfolio/18-growth-plan/reports/` and `01-portfolio/17-launch-plan/reports/`; the launch plan's [review.md](../17-launch-plan/review.md) (its 12 checks).

## Tasks

1. **Review**: read C's, K's and G's changes in `site/` (Rez's commit after wave 1, or `git diff` against the commit before it). Check the contracts (event names; `faqPage()` matches the visible questions; `quotes.ts` shows only approved quotes), no new public endpoint without a limit, the CSP still enforced with any new host listed (Clarity, if picked), claims word for word, no Fiverr anywhere, no Taste Labs.
2. **The 12 launch checks** in `../17-launch-plan/review.md` on https://rezkarim.com.
3. **Numbers**: PageSpeed Insights mobile on K's five pages against K's report; G's structured data still valid after the redeploy; the IndexNow send done.
4. **Links**: every profile link Rez OK'd in chat R answers 200 on rezkarim.com with its tag (curl, which runs no tracking).
5. `npm run check` once, then the flows in [e2e.md](e2e.md).
6. Fix what fits (one batched redeploy for Rez); for anything bigger, write one fix brief and a paste ready prompt.

## Done when

Every check and flow passes or the report says why; the report ends with a "You check" table.

## Report

(filled by chat V)
