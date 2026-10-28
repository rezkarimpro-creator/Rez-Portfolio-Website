# Chat R · Review

[README](README.md) · Approved 27 Oct 2026 · Opus 5.5, Max (the final gate) · After every wave 1 report. R runs this file and [e2e.md](e2e.md) in one session. **28 Oct:** the build coordinator runs R itself, at Max, so no new session has to start while Rez is away.

## Start condition

The reports of F, B, C, D, E and W exist in `08-build-reports/`. R may start on an area (B's security, C's cases) as soon as its report says done, and keeps the whole-site checks and e2e for after the last report.

## Added 28 Oct

- **Snapshots, no commits.** After wave 1 and again after R, record a git tree of `site/` with a temporary index, as in [baseline.md](baseline.md) and f.md's R row, and add each tree id to baseline.md. These are rollback points until Rez commits.
- **Version updates** that are 7 days old when R runs (OpenNext 1.20.13 from 28 Oct 13:24 UTC; Next, eslint-config-next and @next/mdx 16.4.3 from 30 Oct), with `npm i -E`, then `npm run check`. Wrangler 4.153.0 (2 Nov) and Motion 14.7.1 (3 Nov) go on Rez's list.
- **Host and Worker.** The test site is rezkarim.dashbloom.design as a new Worker `rezkarim-site`; the 21 Oct site stays on rezz.dashbloom.design under `rezkarim-portfolio` and is never touched. Run `npm run cf:typegen` once. If nothing uses the KV binding after B's D1 work, remove it, so the new Worker never shares the old site's data.
- **Limits.** `npm run worker:size` against 64 MiB uncompressed. The deploy runbook adds: after the first day live, Rez checks Workers > Metrics for "Exceeded CPU" (the free plan allows 10 ms per request); if it shows, the fix list is caching the page or Workers Paid.
- **Review pack.** Fill §6 of [for-rez.md](for-rez.md): every route with its localhost link and Figma frame id, what to look at, every "Rez decides later" default from the reports, the To confirm items, and the ready commands for secrets, commit and deploy.

## Read first

[common.md](common.md); every report in `08-build-reports/`; [08](../08-build-plan.md) (all); [09](../09-functional-checklist.md) (all); [07](../07-search-and-speed-plan.md); [for-rez.md](for-rez.md); the R rows under "For the build chats" in every planning file.

## Owns

Any file, for fixes that fit in this session; the Figma QA page (decision 29) and nothing else in Figma. No installs, commits or deploys.

## Tasks, in order

1. **Requests**: do the open ones that fit; list what needs Rez or the coordinator (CLAUDE.md files, his steps).
2. **Joins and security**: the contracts (08 §7 plus F's additions); the `security-review` skill on the diff since the baseline (Rez's commit if he made one, otherwise the tree in [baseline.md](baseline.md)); every row of [security](planning/security.md) §5; `npm run check`, `npm test`, `cf:build`, `cf:preview`, `scripts/smoke-auth.mjs` on `cf:preview`; `curl -I` on every route; no CSP report on any route; `npm audit --omit=dev` with 0 high; `check:secrets` on the Cloudflare build. A Security section in the report, pass or fail per line.
3. **The gate** ([operations](planning/operations.md)): a planted bad file is caught by the hook, `prebuild` and CI, then removed; draft and ready files are absent from the production build, sitemap, RSS and llms.txt.
4. **SEO** ([seo](planning/seo-aeo-geo.md) R row): Rich Results Test and Schema Validator on one page per family (if W hasn't run yet, use E's fixtures, and leave e2e flows 2 to 5 for the content pass); no duplicate titles, descriptions or intent keys; no orphans; noindex only where planned.
5. **Accessibility** ([best-practices](planning/best-practices.md) §5.3): `npm run a11y` on `cf:preview`; a keyboard pass on every template; NVDA on each template; 320px reflow and 200 and 400% zoom; reduced motion; forced colours; contrast sampled over the backdrop at 1440, 768 and 390 ([figma A](planning/figma-a-design-system.md) C1; if anything fails, darken the card glass only as much as needed, decision 38). Then make the /accessibility page's "How I check it" and "Known gaps" match what this review actually tested and found.
6. **Design QA** (decision 29): a Figma page "QA · Build vs design" with each build screenshot beside its frame; a table per template (frame id, route, difference, weight, fixed or not). Search the built HTML for "Add a line about your project", "Prefer a call", "your call", "To confirm" and "Copy to confirm".
7. **[e2e.md](e2e.md)** in full.
8. **Speed**: Lighthouse per 07 §5.10 on `cf:preview` against 07 §5.2.
9. **Close out**: delete dead code; write the runbooks `deploy`, `rollback`, `launch`, `monthly-upkeep`, `dependency-update`, `incident` and `uptime`; `docs/testing.md`; refresh the README; add the posting prompts to 05-guide §3; list the old docs to archive (best-practices §2) for Rez's OK. In the deploy runbook, the Worker metrics check (security §8 row 8) is Rez's, in the Cloudflare dashboard: AI sessions are blocked from production reads.
10. **Fix** what fits; for anything bigger, one fix brief with a paste ready prompt.

## Done when

Every line of 09 and e2e.md passes or the report says why it can't yet; the security, SEO and accessibility sections pass; budgets are met or explained; the report ends with a "You check" table for Rez and the deploy steps (08 §10 plus security §8 rows 7 and 8).

## Report

Filled by chat R in `08-build-reports/r.md`.
