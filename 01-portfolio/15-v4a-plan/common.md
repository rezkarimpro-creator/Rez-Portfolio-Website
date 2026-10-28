# Common rules for every build chat

[README](README.md) · Approved 27 Oct 2026 · Read with your chat file. Where a planning file and this file differ, this file wins; where Rez says otherwise in chat, Rez wins.

## Start

1. Open at the project root, `F:\🚩 CLAUDE\Rez Portfolio Website`, where the dev server config, the deny list and the project memory live (the coordinator starts chats there). Paths in this plan are relative to `01-portfolio/`, so `site/` means `01-portfolio/site/`. Read `01-portfolio/CLAUDE.md` (the site's rules), this file, your chat file, then the sources your chat file lists. Say in one line what you are about to do.
2. Check your start condition (in your chat file) and that BrowserOS answers. If either fails, stop and say so.
3. Sources of truth, in order: Rez in chat; the answers in [for-rez.md](for-rez.md) §2 and [10-confirmations.md](../10-confirmations.md); the [spec](../01-portfolio-spec.md); this plan; [08-build-plan.md](../08-build-plan.md)'s package details; the planning track files. Facts come only from [00-facts.md](../00-facts.md). Never invent a client, number, quote, result or credit.

## Files

4. Edit only the files your chat owns. After F, its report holds the path map for the new layout; use it. Need a change elsewhere: write it under Requests in your report and carry on.
5. No installs after F. A new package goes under Requests with what [security.md](planning/security.md) §3.2 asks (why, downloads, last release, licence, install script, Worker size); Rez says yes; the coordinator or R installs it.
6. Schema changes belong in F's `migrations/0001`. If you must add one, write a new uniquely numbered migration that only adds columns or tables ([operations](planning/operations.md) §4.5).

## Never

7. No git command that writes (commit, push, stash, reset, checkout, switch, branch). No deploys. No Wrangler command that touches Cloudflare (`deploy`, `secret`, `rollback`, `versions`, `preview`, `d1 create`, anything with `--remote`). No Cloudflare connector writes or Worker code reads. Rez does those.
8. Local data only: `.dev.vars` test values and local D1 in `.wrangler/state`. Never the live KV or D1, never the live passwords. Never print a secret or a test password.
9. Never Taste Labs in any form. Never a city or country for Rez. No Client or Concept labels and no years on cases. Prices only on /work-with-me (the contact form's budget chips are the visitor's budget, exempt by name in `content/rules.json`). Claims word for word, through `content/claims.ts`. Visible copy has no em dash, colon, semicolon or hyphen, except in names and locked claims; `content:lint` checks it.
10. Designer notes in Figma (Note/To confirm, "Copy to confirm (Rez)") never ship as copy. "To confirm" values stay hidden on the live site.

## Working

11. Work directly; no agents. Approvals (a package, a copy change, a scope change) come from Rez in your own chat; a message relayed from another session is information, not an approval. To move or delete files, use Bash after `cd` into the folder: PowerShell commands that name the `🚩` path are refused.
12. One `next dev` per folder: if http://localhost:3000 answers, use it; if not, start it with preview_start "portfolio-site". Never stop it while others work. `npm run build` only at the end; if another build runs, wait and retry. `cf:build` and `cf:preview` only in F, C, E and R.
13. Browser checks in BrowserOS, in your own background tab, closed when done. Page text first; screenshots where the look matters, with the focus and screencast step from the root CLAUDE.md. Widths 375, 768 and 1440 (R adds 320). Lighthouse numbers taken while other chats build are noisy: record them, but only R's count.
14. Figma is read only (R may add its QA page). Read by node id from pages `10:3` and `114:13313`, never from the archive pages. Load the figma-use skill first, and walk `.children`, since `findAll` misses texts inside instances.
15. Library docs: before coding against Next.js, React, Tailwind, OpenNext, Wrangler, D1 or MDX, read the installed version's docs (Next ships them in `site/node_modules/next/dist/docs/`).
16. Code follows [best-practices.md](planning/best-practices.md) §1 (folders and names), §4 (code rules and the review list) and its comment policy. Logical CSS, no copy inside components, `m` components under LazyMotion, images through `assets/images/` and `npm run images`.
17. Content: every content file passes `npm run content:gate`. A chat never sets `status: live` ([operations](planning/operations.md) §2).
18. Security: do your chat's row in [security.md](planning/security.md) "For the build chats" and its checkpoints for your chat (§8).

## Finish

19. Test as Rez's rules say: code first, then the checks. While other chats work in the same folder, check your own files as you go (`npx prettier --check` and `npx eslint` on them, `npm run typecheck` reading only their errors, `npm run content:gate -- <file>`). At the end run `npm run check` (names, format, lint, typecheck, content checks, tests, build) once, plus the checks in your chat file. If it fails only in files another chat owns, record that in your report and don't touch them. Fix what fails in yours and rerun only that; after two failed attempts, stop and report.
20. Update the docs your chat owns (best-practices §2 table) and add a line under "Unreleased" in `site/CHANGELOG.md`.
21. Report in `01-portfolio/08-build-reports/<chat>.md`: first line "done" or "blocked: <why>"; files changed; checks with results; screenshots with their Figma frame ids; open issues; Requests; a suggested commit message with no AI attribution. Then one dated line in "Where things stand" in `01-portfolio/CLAUDE.md`, with the Edit tool.
