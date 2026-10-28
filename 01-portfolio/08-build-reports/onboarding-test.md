done

# Onboarding test (chat O)

[README](../../README.md) · Draft · 28 Oct 2026

A new developer's run of `15-v4a-plan/chat-o.md`, working from the repo alone (best-practices §3). The build isn't committed yet (the repo holds only the create-next-app commit), so the test used a copy of `site/` without `node_modules`, `.next`, `.open-next`, `.wrangler`, `.data` and `.generated`, with a fresh `.dev.vars` of random test values and `.env.local` from `.env.example`. Nothing was committed, pushed or deployed, and no Wrangler command touched Cloudflare.

## Result: pass

| Pass rule | Result |
|---|---|
| All 7 tasks within 60 minutes | Yes, 12 min 16 s (09:43:10 to 09:55:26) |
| No question that needs anything outside the repo | Yes, every question was answered from the repo |
| Every check green | Yes, `npm run check` exits 0 after one line ending fix the Prettier message points to |
| Draft invisible on the built site | Yes, on `next start` and on the real Worker (`cf:preview`) |

## Time per task

`npm ci` took 1 min 42 s, not slow, so it counts inside task 1.

| Task | Start | End | Time | Notes |
|---|---|---|---|---|
| 1. Set up and run `npm run dev` | 09:43:10 | 09:46:47 | 3 min 37 s | Copy, `.dev.vars`, `npm ci`, `db:migrate:local`, `npm run dev -- -p 3100` (3000 is the real project's). Home, /about, /work answer 200 |
| 2. `npm run check` green | 09:46:50 | 09:48:36 | 1 min 46 s | First run stopped at `format:check`: `next.config.ts` has CRLF line endings. `npx prettier --write next.config.ts`, then green (41 of 41 tests) |
| 3. One line of copy on /about | 09:48:40 | 09:49:03 | 23 s | Found by grep, not by the README. Shows on the dev server at once |
| 4. One FAQ on an SEO page | 09:49:05 | 09:51:04 | 2 min | Gate passed at 09:50:03, but the running dev server kept the old FAQs until a restart |
| 5. Draft guide that passes the gate, out of the sitemap | 09:51:10 | 09:55:26 | 4 min 16 s | Full gate passes. Checked on `next start` and on `cf:preview` at port 8790 (8787 was taken) |
| 6. Where the CTA colour is set | 09:53:19 | 09:53:28 | 9 s | Done while `cf:build` ran. `docs/design-system.md` names the token, README points to `tokens.css` |
| 7. Deploy and rollback, explained | 09:53:34 | 09:54:30 | about 1 min | `docs/runbooks/deploy.md` and `rollback.md` answer it in full |

After the tasks: doc fixes 09:56 to 09:58, rerun in a fresh copy 09:58:14 to 10:03:25 (2 min of it `npm ci`).

## What each task produced (in the copy only, never in the real site)

| Task | Change or answer |
|---|---|
| 3 | `src/data/pages.ts`, About bio line 1: "I'm a brand and website designer working remotely with US and UK teams." became "I'm a brand and website designer. I work remotely with US and UK teams." No new fact. `npm run content:lint -- --data` shows no warning for `pages.ts` |
| 4 | `content/pages/decks/saas-pitch-deck.mdx`, a 5th FAQ (the runbook allows 3 to 5): "Can my team edit the deck later?" with "Yes. You get a slide master your team can reuse, in the format you present and edit in." Both facts come from the page's own `includes` and `formats`. Gate: content:check, content:lint, typecheck, lint, build all pass |
| 5 | `npm run content:new -- --type post --slug deck-slide-master`, filled at `status: draft` with the Earworm case and claim by key, 3 FAQs, 2 related pages, 2 H2s, no outside facts. Full gate passes. Production build (`next start`): the guide answers 404, the sitemap's 11 URLs leave it out. Real Worker (`cf:preview`, ready and live content): the guide answers 404 while a ready guide answers 200, the sitemap lists 52 URLs and 9 guides without it, and /guides, `llms.txt`, `/guides/feed.xml` and the `.open-next` bundle hold no trace of it |
| 6 | `src/styles/tokens.css` line 25: `--color-cta: var(--ink-100)`, which is `#eef0f3` (line 65). Pressed: `--color-cta-pressed: var(--ink-200)` (`#d1d5db`). Text on it: `--color-cta-ink: var(--ink-900)` (`#11141a`). Used as `background: var(--color-cta)` in `src/styles/components.css` (the Action pill, line 168) and `base.css`, and as the Tailwind class `bg-cta` |
| 7 | See below |

### Task 7: deploy and roll back, without running anything

**Deploy (Rez only, from `site/`, with his own Wrangler login).**

1. Before every deploy: `wrangler.jsonc` names `rezkarim-site` and every route, with `workers_dev` and `preview_urls` false. `.env.production.local` holds the test site values (`NEXT_TARGET=cloudflare`, the site URL, `NEXT_PUBLIC_INDEXABLE=0`). Only files Rez OK'd are `status: live`, since a production build shows live files only. `npm run check` exits 0. `npx wrangler secret list` shows the three secret names. `npm run cf:build`, then `npm run worker:size` well under 64 MiB. `npm run cf:preview` shows the touched pages, plus `node scripts/smoke-auth.mjs` after sign in or form changes. Lighthouse within budget. Rez commits by hand.
2. `npm run deploy` (OpenNext build, then deploy).
3. After every deploy: curl Home, a case and /stats for 200 and the security headers (noindex on the test site), a wrong /stats password, junk to `/api/track` (400), workers.dev not serving; Rez checks Worker metrics.
4. A dated `CHANGELOG.md` entry with the Worker version id the deploy printed. After launch only, IndexNow and PageSpeed.
5. The first deploy adds one time steps before step 2: three `wrangler secret put`, `wrangler d1 create` with the id put in `wrangler.jsonc`, migrations with `--remote`, the KV to D1 copy, content flipped to live after Rez's OK, then the edge rate limit rule and a CPU check one day later.

**Roll back (Rez only).**

1. A bad deploy: dashboard, Workers, `rezkarim-site`, Deployments, Rollback on the last good version, or `npx wrangler versions list` then `npx wrangler rollback <version-id>` (the CHANGELOG names each version id). About a minute.
2. Check the site as after a deploy, and add a CHANGELOG line. The next `npm run deploy` replaces the rollback, so fix the cause on localhost first.
3. D1 data is untouched by a rollback (migrations only add, so old code runs on the newer schema); bad rows go back with D1 Time Travel.
4. One page: set `status: draft` or `git revert`, run the gate, commit, deploy, and add a redirect if the URL had traffic.
5. The first deploy has nothing to roll back to: fix and deploy again.

## Every question I had

| Question | Answered by | Gap? |
|---|---|---|
| Where does the /about copy live? | Grep for the bio text: `src/data/pages.ts`. README's "Where things go" lists `site.ts` and `ui.ts` only | Yes, fixed |
| Why does `format:check` fail on `next.config.ts`, a file I didn't touch? | `file` shows CRLF line endings; `.editorconfig` asks for LF and Prettier defaults to LF | Yes, fixed |
| Would a real clone hit the same thing? | Tested on this PC: Git for Windows sets `core.autocrlf=true`, so a default clone checks out every file as CRLF (`w/crlf`); `git clone -c core.autocrlf=false` gives LF | Yes, fixed |
| Why doesn't the dev server show my new FAQ or my new guide? | Rerunning `npm run content:index -- --stage draft` didn't help; restarting `npm run dev` did. The content index is read once at start | Yes, fixed |
| How do I run dev and `cf:preview` when 3000 and 8787 are taken? | `npm run dev -- -p 3100`; `opennextjs-cloudflare preview --help` shows `[args..]` go to Wrangler, so `npm run cf:preview -- --port 8790` | Yes, fixed |
| Does a draft guide need a live proof case? | The scaffold comment says "at least one live"; the runbook says one live only for a live page, and the gate passed a draft with none live | Small mismatch in `scripts/content-new.ts`, outside docs, for Rez |
| Which copy rules apply to `src/data/` edits? | `AGENTS.md` and `content:lint -- --data` (README scripts table) | No; now also in the new README row |
| Where is the CTA colour? | `docs/design-system.md` names `--color-cta`; README says tokens live in `src/styles/tokens.css` | No |
| How do I deploy and roll back? | `docs/runbooks/deploy.md`, `rollback.md` | No |

## Doc gaps fixed in the real `site/` (README and docs only)

| File | Fix |
|---|---|
| `README.md` | After setup: on Windows, clone with `git clone -c core.autocrlf=false <repo> site`, or `format:check` fails on every file |
| `README.md` | After setup: how to pass another port, `npm run dev -- -p 3100` and `npm run cf:preview -- --port 8790` |
| `README.md` | After setup and in the `dev` script row: restart `npm run dev` after adding a content file or changing its front matter |
| `README.md` | "Where things go": new row, copy on a fixed page (Home, About, Privacy) lives in `src/data/pages.ts`, then `npm run content:lint -- --data` |
| `docs/testing.md` | `format:check` row: a file you didn't change flagged there usually has CRLF endings; `npx prettier --write <file>` fixes it |
| `docs/content.md` | "Checking a page": restart `npm run dev` first if it was running, or a new file answers 404 and an edited one shows old front matter |
| `docs/runbooks/publish-content.md` | Step 6: restart `npm run dev` if it was running |

All four files pass `npx prettier --check` in the real project and keep LF endings.

## Rerun in a fresh copy

| Rerun | Result |
|---|---|
| Task 2 | Fresh copy, `npm ci`, `.dev.vars`, `db:migrate:local`. `npm run check` stopped at `next.config.ts` again (the real file is still CRLF); following the new `docs/testing.md` line, `npx prettier --write next.config.ts`, then green, 41 of 41 tests (10:01:07 to 10:02:28) |
| Tasks 4 and 5, the dev preview | With `npm run dev` running, added the FAQ and the draft guide: FAQ missing, guide 404. Restarted as the README now says: FAQ shows, guide 200 (10:02:39 to 10:03:25) |

The scratch copies were deleted at the end, and every server I started (ports 3100, 3101, 8790) was stopped. The real project's servers on 3000 and 8787 were not touched.

## For Rez (outside README and docs, so not changed here)

| Item | Why it matters | Suggested fix |
|---|---|---|
| The real `site/next.config.ts` has CRLF line endings (written 09:40 today) | `npm run check` fails at `format:check` in the real project right now | `npx prettier --write next.config.ts` in a build session |
| No `.gitattributes` | Every Windows clone with Git's default settings gets CRLF and fails `format:check` | A one line `.gitattributes`: `* text=auto eol=lf` (then the README clone flag becomes optional) |
| `scripts/content-new.ts` comment says proof cases need "at least one live" | It reads as a rule for drafts too; the runbook and the gate apply it to live pages only | Reword to "at least one live once this page is live" |
| `npm ci` reports 10 advisories (4 moderate, 6 high) | `check:deps` passes, so they are dev only; worth a look in the monthly upkeep | `docs/runbooks/dependency-update.md` |
| `CHANGELOG.md` | AGENTS.md asks for a line under Unreleased; this chat may edit README and docs only | "Docs: onboarding test fixes (Windows line endings, other ports, dev restart after content edits, page copy location)" |

Suggested commit message for Rez: `docs: onboarding test fixes for line endings, ports, dev restart and page copy`
