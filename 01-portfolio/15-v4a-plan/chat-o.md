# Chat O · Onboarding test

[README](README.md) · Approved 27 Oct 2026 · Opus 5.5, Extra high · After R (28 Oct: run by the build coordinator as a fresh subagent on a copy of `site/`, since Rez commits after his review). Proves a newcomer can work from the repo alone ([best-practices](planning/best-practices.md) §3).

## Rules

You are a new developer. Use only the repo and this file: don't open anything else in `01-portfolio/`, don't use memory or other chats. Never commit, push or deploy.

## Setup

Clone the local repo into your scratchpad: `git clone "F:/🚩 CLAUDE/Rez Portfolio Website/01-portfolio/site" <scratchpad>/site`. If Rez hasn't committed the build yet, copy `site/` into the scratchpad instead, leaving out `node_modules`, `.next`, `.open-next`, `.wrangler` and `.data`. Make `.dev.vars` from `.dev.vars.example` with your own test values.

## Tasks, timed

1. Set up and run `npm run dev`.
2. Get `npm run check` green.
3. Change one line of copy on /about.
4. Add one FAQ to an existing SEO page file.
5. Add a draft guide that passes `content:gate` and stays out of the sitemap.
6. Find where the CTA colour is set.
7. Explain, without running it, how to deploy and how to roll back.

## Pass

All 7 within 60 minutes, no question that needs anything outside the repo, every check green, and the draft invisible on the built site.

## Output

`01-portfolio/08-build-reports/onboarding-test.md`: time per task, every question you had, every doc gap. Fix each doc gap in the real `site/` (README and `docs/` only), then rerun the failed task in a fresh clone. Delete the scratch clone at the end.
