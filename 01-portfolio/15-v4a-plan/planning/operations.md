# Operations (future management)

Status: done · 27 Oct 2026, checked live the same day (§4.1), Q9 settled 28 Oct · Post through content files that Claude or Antigravity write, behind one scripted check gate and Rez's OK; one AGENTS.md for both tools; Rez commits and deploys by hand at launch; Worker rollback and D1 Time Travel cover mistakes; all free.

## Summary

1. **Posting:** option (a), Claude or Antigravity edit one content file per item and run repo scripts. No CMS, no Notion. A small MCP server is a later add on that only wraps the same scripts, never deploys (§1).
2. **Gate:** draft → scripted checks (`content:gate`) → preview → Rez's OK in chat → Rez commits and deploys → smoke check. Drafts never render live, the build fails on a bad live file, and a git hook plus CI repeat the checks because GitHub Free has no branch protection on private repos (§2).
3. **One set of rules:** `site/AGENTS.md` is the single source. Antigravity reads it natively; Claude Code does not while a CLAUDE.md sits above it, so `site/CLAUDE.md` holds one line, `@AGENTS.md`. One publish runbook, with two thin skill wrappers (§3).
4. **Git and deploys:** `site/` pushes to the existing GitHub repo; Rez deploys with `npm run deploy` at launch and may switch to Workers Builds later. Staging is `cf:preview` locally plus Worker Previews on rezz.dashbloom.design after launch; rollback is `wrangler rollback`, content revert or D1 Time Travel (7 days free). Checked live: the test site moved to rezz.dashbloom.design, but `wrangler.jsonc` still names the old host and the next deploy would swap it back; and only one code version exists to roll back to (§4.1).
5. **Upkeep:** UptimeRobot free, a weekly 10 minute and monthly 45 minute routine, free plan guardrails with numbers, 12 runbooks to write (§5, §6).

## 1. Posting later: four ways compared

Setup times are estimates for a session on top of what chat F already builds (content layer, `content:check`, `content:lint`).

| | (a) Claude or Antigravity edit content files | (b) MCP server in the repo | (c) Keystatic | (d) Notion sync |
|---|---|---|---|---|
| How it works | Rez asks in chat. The tool runs `npm run content:new`, fills the file, adds images, runs `npm run content:gate`, shows a preview | Same files, but the AI calls tools (`add_case`, `add_post`, `check`, `preview`) on a local stdio server instead of running npm scripts | A form at `/keystatic` on localhost writes the same files; Keystatic config repeats the schema | Rez writes in a Notion database; a script pulls pages into content files |
| Setup on top of F | 2 to 3 h (scaffold script, gate script, runbook, two skill wrappers) | +3 to 5 h after (a) | +4 to 6 h (config per collection, MDX field, image paths, admin route disabled in prod) | +6 to 10 h (API client, block to MDX conversion, image download, sync state) |
| What Rez does | Asks, reads the preview and report, says OK, commits, deploys | Same | Fills a form himself, or still asks AI; then the same gate | Writes in Notion, runs sync, then the same gate |
| How the check works | Scripts in the repo; the AI must show their output in its report | Tools call the same scripts and return structured results, so the AI can't skip a step it calls | Keystatic validates its own fields only; the copy rules and proof checks still need the scripts | Only after sync; errors come back as file paths Rez didn't write |
| Works in Claude and Antigravity | Yes, both run shell commands and read AGENTS.md | Yes, two config files (`.mcp.json`, `.agents/mcp_config.json`) for one server | Tool independent | Needs a Notion token on the PC |
| New dependencies | None | `@modelcontextprotocol/sdk` (1.32.2 on npm, 23 Oct 2026) | `@keystatic/core` 0.6.9 (pre 1.0), `@keystatic/next`, react-aria, `@keystar/ui` | Notion SDK, an MDX converter |
| Risks | The AI skips a step: covered by prebuild, hook and CI (§2.3) | A second interface to keep in step with the scripts; a `publish` or `deploy` tool would bypass Rez's click, so none is allowed | Pre 1.0 churn; admin routes must never ship to the Worker; two schemas drift; MDX component blocks need extra config | Two homes for every post; Notion file links expire, so images must be copied at sync; a token to guard; sync conflicts |
| Verdict | **Recommend** | Later, only if Rez wants posting from claude.ai or the phone without a repo checkout, or the AI skips steps in practice | Only if Rez wants to post without any AI. Not now | Drop |

**Why (a):** both tools already read files, edit them and run commands, so the scripts are the real interface. An MCP layer adds no check the scripts lack. Rez's brief says "maybe through MCP": the plan keeps that door open by making every gate step a script with JSON output (`--json`), so a later MCP server is a thin wrapper of about 150 lines with tools `content_new`, `content_check`, `content_preview` and nothing that commits, pushes or deploys (Security sets the allowlist).

**What a request looks like** (goes into the publish runbook and 05-guide §3):

| Rez says | The tool does |
|---|---|
| "Add a blog post about what investors expect in a pre-seed deck" | Checks the page map for an overlapping question, scaffolds `content/blog/<slug>.mdx` as draft, writes it from proof in the facts file, runs the gate, starts preview, sends the report |
| "Add a case from this Figma frame: <link>" | Reads the frame, exports images through the image script, scaffolds `content/work/<slug>`, fills My role only from confirmed lines (anything else stays "to confirm" and blocks the gate) |
| "Write SEO batch 3 from the page map" | 10 files from the approved rows, gate on each, one batch report |
| "Unpublish /blog/<slug>" | Sets status draft, adds a redirect if the URL had traffic (SEO's rule), runs the gate, report |

## 2. The check gate

### 2.1 States

Every content file carries `status: draft | ready | live` (field owned by SEO's content model).

| State | Renders on | Who sets it |
|---|---|---|
| draft | `npm run dev` only | The tool, at scaffold |
| ready | dev, `cf:preview` and Worker Previews (an env flag `CONTENT_STAGE=preview`) | The tool, once `content:gate` passes |
| live | Production | The tool, only after Rez says OK in chat, in the same change Rez commits |

Production builds drop draft and ready files from routes, the sitemap, RSS, llms.txt and internal links. So a draft committed by mistake never goes live.

### 2.2 Steps

| # | Step | Who | How | Fails when |
|---|---|---|---|---|
| G0 | Brief | Rez | One chat message with the source (topic, Figma link, notes) | — |
| G1 | Proof and overlap check | Tool | Look up the page map row and the facts file. No real proof, no page | Proof missing, or another page answers the same question |
| G2 | Scaffold | Tool | `npm run content:new -- --type <case\|post\|page> --slug <slug>` creates the file from a template with status draft | Slug taken |
| G3 | Write | Tool | Follows the content rules doc and the template | — |
| G4 | Scripted checks | Tool | `npm run content:gate -- <file>` runs, in order: `content:check` (schema), `content:lint` (copy rules, banned words and punctuation, claims word for word, "to confirm" left in), duplicate and overlap check (same main question, near duplicate titles), internal links resolve to live or same batch pages, images exist with alt text and the right ratio, MDX uses only allowed components (Security's list), then `npm run typecheck`, `npm run lint` and `npm run build` | Any error. Warnings are listed in the report |
| G5 | Preview | Tool | `npm run dev` checked in BrowserOS at 390 and 1440, or `npm run cf:preview` for Worker parity; a Worker Preview URL when Rez wants it on his phone (§4.4) | Page fails to render, layout breaks, console errors |
| G6 | Report | Tool | One message: what changed (files), gate output, proof lines used word for word, preview link, anything "to confirm" | — |
| G7 | Rez's OK | Rez | Reads the report and preview, replies OK or edits. Batches: see §2.4 | No OK, nothing moves |
| G8 | Flip to live | Tool | Sets `status: live` and the date, reruns `content:gate` | — |
| G9 | Commit and deploy | Rez | Commits by hand, then `npm run deploy` in `site/` (or push, if Workers Builds is on, §4.3) | Build fails on a bad live file (§2.3) |
| G10 | After deploy | Tool, Rez | Tool: curl the URL (200, canonical, no noindex), sitemap lists it, `npm run indexnow`. Rez: Search Console URL inspection for important pages (07 §3.9) | Smoke check fails → rollback runbook |
| G11 | Log | Tool | A line in `site/CHANGELOG.md` (format owned by Practices) | — |

### 2.3 How the gate is enforced without branch protection

GitHub's rulesets and branch protection work on private repos only with Pro, Team or Enterprise; on GitHub Free they cover public repos only (GitHub Docs, read 27 Oct 2026). So the gate cannot rely on GitHub blocking a merge. Three layers instead, all free:

| Layer | What | Catches |
|---|---|---|
| Build | `prebuild` runs `content:check` and `content:lint` on every live file; `npm run deploy` runs the build | A bad live file can't deploy, from any PC or tool |
| Git hook | `.githooks/pre-commit` runs `content:gate --staged` on staged content files; `npm install` sets `core.hooksPath` through a `prepare` script (no new package) | Mistakes before they're committed. Rez can see the output in his terminal |
| CI | GitHub Actions on push: `npm ci`, lint, typecheck, `content:check`, `content:lint`, `next build`. Reports only; never deploys | Anything committed from another PC or tool without the hook |

### 2.4 Batches (the ~100 SEO pages)

- 10 files per batch, the gate on each, one batch report: a table of URL, main question, first sentence, proof line, gate result.
- Rez reads every row of the table and 2 pages in full, picked by the tool at random and named in the report (Rez decides, Q5).
- Any "drop" row in the page map is never written.

## 3. One set of rules for Claude and Antigravity

### 3.1 What each tool reads (docs read 27 Oct 2026)

| | Antigravity | Claude Code |
|---|---|---|
| Project rules | `AGENTS.md` or `GEMINI.md`, `.agents/AGENTS.md`, `.agents/rules/*.md` (frontmatter `trigger` required). Walks up from the edited file to the **workspace root** and loads each level. Never reads CLAUDE.md | `CLAUDE.md`, walking up from the working directory past the project. Reads `AGENTS.md` only when no CLAUDE.md exists in the working directory or above, or when a CLAUDE.md imports it (`@AGENTS.md`), or with the `claude-md-and-agents-md` setting |
| Global rules | `~/.gemini/AGENTS.md` or `~/.gemini/GEMINI.md`; modular `~/.gemini/config/rules/*.md` | `~/.claude/CLAUDE.md` |
| Includes | `@[label](path)` inlines a file; `~/` works | `@path` imports |
| Skills | `<workspace-root>/.agents/skills/<name>/SKILL.md`; global `~/.gemini/config/skills/` | `.claude/skills/<name>/SKILL.md` |
| MCP config | `mcp_config.json` (workspace `.agents/mcp_config.json`) | `.mcp.json` |
| Limits | 24 KB per rule file after includes; 20,000 tokens for all always on rules | Long files load but follow worse; keep short |

**Finding:** `site/AGENTS.md` exists today (Next's managed block only), but this project's root `CLAUDE.md` sits above `site/`, so Claude Code ignores that AGENTS.md by default. And Antigravity, opened at the project root, never sees the root CLAUDE.md rules.

### 3.2 Plan

| File | Holds | Read by |
|---|---|---|
| `site/AGENTS.md` | The single source: what the repo is, commands, folder map, the content workflow and gate (short, linking the runbook), hard rules that apply to code and content (never commit, push or deploy; Rez's role and claims rules; no Taste Labs; prices only on /work-with-me; voice rules link), where facts live. Keeps Next's managed block at the top. Under 8 KB | Antigravity natively; Claude through the import |
| `site/CLAUDE.md` | One line: `@AGENTS.md`. Claude only notes go below it, if ever | Claude Code |
| `site/docs/runbooks/publish-content.md` | The full posting steps and the gate (§2) | Both, through the skills |
| `site/.claude/skills/publish-content/SKILL.md` and `site/.agents/skills/publish-content/SKILL.md` | Frontmatter plus 3 lines: "Read and follow docs/runbooks/publish-content.md" | One each |
| `site/docs/content-rules.md` | Voice and copy rules plus the claims list that `content:lint` reads (Practices and SEO decide the exact home; see Q3) | Both, and the lint script |
| `~/.gemini/AGENTS.md` (Rez's PC, outside the repo) | One include: `@[Rez global rules](~/.claude/CLAUDE.md)`, so Antigravity follows the same global rules (no commits, BrowserOS, questions as options). Test once that the include resolves outside the workspace | Antigravity, every project |

Rules for posting sessions: open the workspace at `site/` in Antigravity (so its walk up stops at the repo and finds AGENTS.md); Claude may open at `site/` or above, since it reads both. A short `npm run agents:check` script confirms `site/CLAUDE.md` still imports AGENTS.md and both skill wrappers point to the same runbook (nice to have, F).

## 4. Git, GitHub, deploys, staging, rollback

### 4.1 Where things stand (checked live, 27 Oct)

| Item | Found | So |
|---|---|---|
| Test site | `https://rezz.dashbloom.design` answers 200 with the portfolio, `X-Robots-Tag: noindex, nofollow` and a robots meta noindex. /work, /stats, /sitemap.xml and /robots.txt answer 200; an unknown path answers 404. `rezkarim.dashbloom.design` no longer resolves | The test host is rezz.dashbloom.design. The planning README §4, the site CLAUDE.md, 05-guide, 07 §3.8 and 08 §13.3 still name the old host (coordinator) |
| `wrangler.jsonc` | Its custom domain is still `rezkarim.dashbloom.design` | **Risk.** Wrangler 4.151.3 replaces a Worker's whole set of custom domains with the config's list on every deploy (its code posts `domains/changeset?replace_state=true` and publishes with `override_scope: true`). The next `npm run deploy` would drop rezz.dashbloom.design and bring back the old host. Change the pattern to `rezz.dashbloom.design` before any deploy |
| Worker | `rezkarim-portfolio` (the account also holds an older `3d-website-realestate-01`). `wrangler versions list` shows 2 versions, both from 21 Oct 00:20: the upload and a secret change | Only one code version exists to roll back to, the 21 Oct build that reads KV (§4.5) |
| workers.dev | Wrangler's code turns `workers_dev` off by default when a route exists, and the config has one | No workers.dev copy of the site today. 07 §3.8's explicit `workers_dev: false` keeps it that way |
| Wrangler login | `wrangler whoami` works with Rez's OAuth token on this PC. The CLI reports 4.154.0 is out | Deploys from this PC work as they are |
| `site/` git | One create-next-app commit, 45 uncommitted paths, no remote. `.gitignore` keeps `.env*` tracked (Rez's rule) and ignores `.open-next/`, `.wrangler/`, `.data/` | Rez commits first (row 75) |
| GitHub | `01-portfolio-rezwebsite/` at the root clones `github.com/rezkarimpro-creator/01-portfolio-rezwebsite` (one commit, `.gitattributes` only). The repo page answers 404 to a signed out visitor | Private, or deleted. BrowserOS isn't signed in to GitHub, and I didn't sign in. `gh` isn't installed; plain `git` is enough |

### 4.2 Plan

| Item | Plan |
|---|---|
| Repo | `site/` is the repo (Practices owns the final boundary, Q3). Rez checks the GitHub repo above still exists (it answers 404 when signed out), adds it as `origin` and pushes once after the baseline commit; the repo's lone `.gitattributes` commit is either merged or the remote reset by Rez. Then `01-portfolio-rezwebsite/` moves to `09-archive/` |
| Visibility | Private (Rez's rule on `.env` files depends on it) |
| Branches | `main` is what's live. Content goes straight to `main` behind the gate (drafts are safe there). Code work longer than one sitting uses a short branch `feat/<name>` or `fix/<name>`, merged by Rez. No release branches |
| Who commits and pushes | Rez only, by hand. Claude and Antigravity leave changes uncommitted and list them. No Claude attribution lines |
| CI | `.github/workflows/ci.yml`, on push and pull request, read only permissions, Node 22, `npm ci` then lint, typecheck, content checks, `next build`. No secrets in GitHub |
| Dependabot | Alerts on (free). Version update PRs off at first; the monthly routine handles updates (§5). Security owns the policy |

### 4.3 Deploys

| Option | How | Pros | Cons | Verdict |
|---|---|---|---|---|
| Manual (today) | Rez runs `npm run deploy` in `site/` with his Wrangler login | His click is the last gate; no token anywhere; already works | Needs his PC | **Launch and the first month at least** |
| Workers Builds | Cloudflare connects to the GitHub repo; a push to `main` builds and deploys; other branches can build previews. Free plan: 3,000 build minutes a month, 1 build at a time, 20 minute timeout | No API token in GitHub; deploy from any PC by pushing; build logs in Cloudflare | Push becomes deploy, so Rez's push is the gate | Later, if Rez wants to post from another PC |
| GitHub Actions with wrangler | A workflow deploys with a Cloudflare API token stored as a GitHub secret | Full control | A live token in GitHub; more to secure | Drop |

Every deploy, whatever the option: the custom domain in `wrangler.jsonc` matches the live host (§4.1), gate passed, `cf:preview` smoke on the touched pages, then the deploy, then the after deploy check (G10). 08 §10 holds the one time D1 and secret steps.

Workers Builds settings, from OpenNext's docs (read 27 Oct): build command `npx @opennextjs/cloudflare build`, deploy command `npx @opennextjs/cloudflare deploy` (or `upload` for gradual rollouts). OpenNext prefers a build service over local builds because local `.dev.vars` and `.env` files can change the result. Here the `.env` files are committed, so both read the same values; the manual deploy stays the launch choice.

### 4.4 Staging and previews

Checked in the installed Wrangler CLI and Cloudflare's Previews docs (27 Oct):

- `wrangler preview` exists in the installed 4.151.3 (it needs 4.135 or later), marked open beta, with `delete`, `secret` and `base-config` subcommands and `--name`, `--secrets-file` and `--json` flags. Free plan: 100 Previews per Worker.
- **Name clash.** `opennextjs-cloudflare preview`, today's `npm run cf:preview`, is a local Wrangler dev server. `wrangler preview` uploads a remote Preview. Scripts keep them apart: `cf:preview` stays local, `preview:remote` builds and uploads.
- The config needs a `previews` block, which may be empty. `assets` stays at the top level and uploads with each Preview. D1 and KV bindings need entries in `previews`, pointed at preview resources (the free plan allows 10 D1 databases). `images` goes in `previews` if the code reads it. Service bindings, such as OpenNext's `WORKER_SELF_REFERENCE`, call the production Worker from a Preview, so a Preview can mix in live responses.
- A Preview needs a host. workers.dev Preview URLs use the same `preview_urls` setting as Version URLs, which 07 §3.8 turns off; Version URLs run on the live bindings. A custom domain route with `previews_enabled: true` and `enabled: false` serves Previews only, at `<name>.<host>`. Cloudflare makes the wildcard DNS record and certificate for a host one level under the zone, such as `rezz.dashbloom.design`; deeper hosts may need Advanced Certificate Manager, which is paid.
- Cloudflare adds `X-Robots-Tag: noindex` on workers.dev Preview URLs only. A custom domain Preview must send noindex itself, or sit behind Cloudflare Access.

| Option | What | Verdict |
|---|---|---|
| Local Worker | `npm run cf:preview` runs the real Worker build on localhost | **Every change** |
| Previews on rezz.dashbloom.design | At launch the host turns Preview only. `previews.vars` sets `SITE_STAGE=preview`, so the proxy sends noindex and skips the domain redirect; a preview D1; `workers_dev` and `preview_urls` stay false as 07 wants | **Recommended** when Rez wants a change on his phone or a link to share |
| workers.dev Preview URLs | `preview_urls: true`; noindex is automatic | Second choice: it turns Version URLs back on, and they run on live data |
| Staging Worker behind Cloudflare Access | A second Worker and D1 | Only if Previews fail the live test |

Not yet tested: one real `wrangler preview` upload of the OpenNext build. Previews are in beta and OpenNext's docs don't mention them. Decision 25 keeps the test with Rez: after launch he switches on a Preview host (a Worker setting) and runs `preview:remote` from the staging runbook (for-rez.md A1).

### 4.5 Rollback

| What broke | Fastest fix | Then |
|---|---|---|
| A deploy (code or content) | `npx wrangler rollback` (pick the last good version; the last 100 versions are kept) or the dashboard: Worker, Deployments, three dots, Rollback. About 1 minute | Find the cause on localhost, fix, gate, redeploy |
| One page that shouldn't be live | Set it to draft (or `git revert` the commit), gate, deploy | Add a redirect if the URL had traffic |
| D1 data (bad migration, wrong delete) | `npx wrangler d1 time-travel restore <db> --timestamp=<unix>`; any minute in the last **7 days** on the free plan (30 on paid); the command prints a bookmark to undo the restore | Monthly export as the long term copy (§5) |
| A migration a rollback can't undo | Prevent it: migrations only add (expand then contract), so the previous Worker version still runs on the new schema | — |

Two limits from Cloudflare's docs: a rollback doesn't touch bound resources (D1 data stays as is), and it's refused if a bound KV namespace or R2 bucket was deleted since. Today only one code version exists (§4.1), so the first V4a deploy can roll back only to the 21 Oct build, which reads KV. Keep the KV namespace and its binding until the V4a build has a good successor version.

## 5. Upkeep

### 5.1 Tools (all free)

| Need | Tool | Setup |
|---|---|---|
| Uptime | UptimeRobot free: 50 monitors, 5 minute checks, email alerts, 3 months of history (pricing page, 27 Oct 2026). Monitors: Home and /contact on rezkarim.com, plus a keyword check for "Rezaul Karim" on Home (free). Its terms allow any use, commercial included (27 Oct) | Rez signs up and adds the monitors (his click) |
| Worker errors and CPU | Cloudflare Workers metrics and logs (observability is on in `wrangler.jsonc`) | None |
| Search | Search Console and Bing Webmaster Tools (07 §3.9) | Rez, at launch |
| Visitors and AI referrers | /stats (chat B), Cloudflare Web Analytics | Built |
| Updates | `npm outdated`, Dependabot alerts | §4.2 |
| Data copy | D1 Time Travel (automatic, 7 days) plus `npx wrangler d1 export <db> --remote --output <file>` monthly, saved outside the repo (it holds messages, so personal data; Practices sets retention) | Runbook |

### 5.2 Free plan guardrails (Cloudflare docs, 27 Oct 2026)

| Limit (free) | Value | Watch for | If hit |
|---|---|---|---|
| Worker requests | 100,000 a day | Bot spikes; prefetch on many links | Daily limit routes fail open or closed (1027). Check Security's bot settings; Rez weighs Workers Paid ($5 a month, his money rule) |
| CPU per request | 10 ms | /stats, form actions, satori at request time (keep satori at build) | Error 1102; 08 §14 row on heavy routes |
| D1 queries per Worker call | 50 (a `batch()` counts as one) | /stats queries | Batch them |
| D1 rows read and written | 5 million read, 100,000 written a day; 5 GB storage | Visit counter writes | Counter writes one row per view; fine far past current traffic |
| D1 Time Travel | 7 days | — | Monthly export |
| Static asset files | 20,000 per Worker version; 25 MiB each | Images at many widths × 21 cases × ~100 pages | Chat C counts files per build; drop a width if near 15,000 |
| `_headers` rules / `_redirects` | 100 / 2,100 | Slug changes | Prefer redirects in `next.config.ts` (07 §3.8) |
| Worker size | 64 MiB uncompressed now; the 3 MiB gzip note in the website-build skill is out of date (14 review item 8) | Bundle growth | Monthly dry run |
| Cron Triggers | 5 per account | Only if a cron Worker is added later | — |
| Workers Builds | 3,000 minutes a month | Only if §4.3 switches | — |

### 5.3 Routine

| When | Who | What | Time |
|---|---|---|---|
| After every deploy | Tool | G10 smoke check; a line in the 07 §5.1 speed log for touched pages | 5 min |
| Weekly, first month after launch | Rez | Search Console Performance and Pages, Bing AI Performance, /stats, UptimeRobot email if any | 10 min |
| Monthly | Tool, then Rez | `npm outdated` and `npm audit`; patch and minor updates in one session with the full checks, `cf:preview` and Lighthouse on the 07 §5.10 pages; Worker errors 1102 and 1027; Worker size dry run; static file count; D1 export; links check (`content:links --external`); a list of pages with impressions but few clicks for the next batch | 45 min, 10 of them Rez's |
| Quarterly | Tool, then Rez | Merge or drop overlapping pages, refresh facts that changed (00-facts date), check every credit line still holds, rotate `AUTH_SECRET` if anyone else had access | 1 h |
| Major upgrades (Next 17, React 20, OpenNext 2) | A planned session | Read the upgrade guide, branch, full 09 pass | Its own plan |

## Rez decides

| # | Question | Options, recommended first |
|---|---|---|
| Q1 | How do you post later? | **Ask Claude or Antigravity; they edit content files and run the gate (Recommended)** · Same, plus a small MCP server now · Keystatic form on localhost · Notion database with a sync |
| Q2 | How do changes go live? | **You run `npm run deploy` by hand (Recommended)** · Push to GitHub and Cloudflare Workers Builds deploys · GitHub Actions deploys with a Cloudflare token |
| Q3 | What does the GitHub repo hold? (shared with Practices) | **`site/` only, with the posting rules, content rules and the facts posting needs moved into `site/docs/` so each fact keeps one home (Recommended)** · All of `01-portfolio/` · The whole project folder |
| Q4 | Staging after launch | **`cf:preview` on your PC, plus Previews on rezz.dashbloom.design, which turns Preview only at launch (Recommended)** · Previews on workers.dev (turns Version URLs back on) · A staging Worker behind Cloudflare Access · Local only |
| Q5 | How deep do you review each batch of 10 SEO pages? | **Every row of the batch table plus 2 pages in full (Recommended)** · All 10 in full · Titles only |
| Q6 | Who flips a page to live? | **Claude or Antigravity, right after your OK in chat; you commit (Recommended)** · You edit the status line yourself |
| Q7 | Uptime alerts | **UptimeRobot free, email (Recommended)** · None, check /stats and the dashboard · A Cloudflare cron Worker that emails you (more to build) |
| Q8 | Antigravity's global rules | **`~/.gemini/AGENTS.md` includes your `~/.claude/CLAUDE.md`, one source (Recommended)** · Keep a separate copy for Antigravity · No global rules there |
| Q9 | One live Preview test of the OpenNext build, before F starts? | **Settled by decision 25: not now.** Chat F writes `preview:remote` and never runs it; Rez runs the test after launch from the staging runbook (for-rez.md A1). The 28 Oct attempt stopped at the deny list: nothing was uploaded and no Cloudflare setting changed |

## For other tracks

**SEO (owns the content model)**
- Fields the gate needs: `status` (draft, ready, live), `publishedAt`, `updatedAt`, `mainQuestion`, proof as ids into the claims list (not free text), `related`, `redirectFrom` for slug changes.
- Sitemap, RSS, llms.txt and internal links list live files only; ready files render only when `CONTENT_STAGE=preview`.
- Give the quality criteria as checks a script can run (first sentence answers the question, FAQ count, length bands, overlap rule), so `content:lint` and the overlap check enforce them.
- 07 §3.8 step 3 redirects every host that isn't rezkarim.com. That would bounce every Preview URL to production. Redirect an explicit list (www.rezkarim.com and the bare test host) or skip when `SITE_STAGE=preview`.
- Keep `workers_dev: false` and `preview_urls: false`; Previews run on rezz.dashbloom.design (§4.4). The noindex switch for Previews must work at runtime (`SITE_STAGE`), because `NEXT_PUBLIC_INDEXABLE` is baked in at build.

**Coordinator**
- The test host is now rezz.dashbloom.design; `rezkarim.dashbloom.design` no longer resolves (§4.1). Update planning README §4, the site CLAUDE.md, 05-guide, 07 §3.8 and 08 §10 and §13.3. Before any deploy, `wrangler.jsonc` needs the new host, or the deploy swaps the domains back.

**Security**
- MDX allowed components list for `content:gate`; no imports, exports, scripts or raw iframes in content files.
- If an MCP server is added: local stdio only, tools limited to scaffold, check and preview, writes limited to `content/` and the content image folder, no shell passthrough, no git, no wrangler, no network.
- Tool permissions: deny `git commit`, `git push`, `wrangler deploy`, `wrangler rollback`, `wrangler secret`, `wrangler d1 ... --remote` writes in `site/.claude/settings.json` and in Antigravity's permissions. Rez runs those.
- The Cloudflare plugin (`cloudflare/skills`, offered in the plugin directory) bundles a `cloudflare` MCP server that can call the whole Cloudflare API. It isn't installed (28 Oct). If it ever is, add its tools to the decision 25 deny list; the Cloudflare connector already covers reads.
- GitHub Free private repos have no branch protection or rulesets (GitHub Docs, 27 Oct 2026); check what secret scanning and push protection Free private repos get, and say whether the local hook is enough.
- CI uses `permissions: contents: read` and no secrets. If Workers Builds is chosen later, its tokens live in Cloudflare.

**Best practices (owns repo structure and docs)**
- Runbooks to write, in `site/docs/runbooks/` (the content comes from this file):

| Runbook | From | Written by |
|---|---|---|
| `publish-content.md` (single, batch, unpublish) | §1, §2 | F, with E for the templates |
| `ai-tools.md` (AGENTS.md, CLAUDE.md import, skills, MCP if any, Antigravity workspace at `site/`) | §3 | F |
| `github-setup.md` (one time: remote, first push, CI, Dependabot alerts) | §4.2 | F |
| `deploy.md` (checks, deploy, after deploy smoke) | §4.3, 08 §10 | R |
| `staging-preview.md` (`cf:preview`, Worker Previews, preview D1) | §4.4 | F |
| `rollback.md` (Worker, content, D1) | §4.5 | R |
| `d1-backup-restore.md` (Time Travel, monthly export, where the file goes) | §4.5, §5.1 | B |
| `launch.md` (domain move, Search Console, Bing, IndexNow) | 07 §3.8, §3.9 | R |
| `monthly-upkeep.md` (the routine and the guardrail table) | §5 | R |
| `dependency-update.md` | §5.3 | R |
| `incident.md` (site down, Worker errors 1102 or 1027, form spam spike, a free limit hit, a wrong claim found live) | §4.5, §5.2 | R |
| `uptime.md` (UptimeRobot monitors, what an alert means) | §5.1 | R |

- Q3's repo boundary decides where `content-rules.md` and the facts the lint reads live. Today 00-facts.md is the only allowed copy; if the repo is `site/` only, the facts move in and 00-facts becomes a pointer.
- `CHANGELOG.md`: one line per content batch and per deploy.
- D1 exports hold messages, so they stay out of git; set retention.

**Figma A to D:** nothing.

## For the build chats

Under decision 25 (for-rez.md), AI sessions run no Wrangler command that touches Cloudflare: no deploys, Previews, rollbacks, secrets or `d1 ... --remote` commands, exports included. Every such step in this file, and in the runbooks it feeds, is Rez's.

| Chat | Must do |
|---|---|
| F | First, the custom domain in `wrangler.jsonc` becomes `rezz.dashbloom.design` (§4.1). Then `content:new` (templates per type), `content:gate` (runs every G4 check, `--staged` and `--json` modes), `content:links`; status filtering with `CONTENT_STAGE`; `prebuild` running the checks; `.githooks/pre-commit` plus a `prepare` script setting `core.hooksPath`; `.github/workflows/ci.yml` (read only, no deploy); rewrite `site/AGENTS.md` (keep Next's block) and add `site/CLAUDE.md` with `@AGENTS.md`; the two skill wrappers; `agents:check`; a `previews` block (preview D1, `SITE_STAGE=preview`) and a `preview:remote` script (build, then `wrangler preview`), written but never run (decision 25); runbooks `publish-content`, `ai-tools`, `github-setup`, `staging-preview` (first drafts) |
| B | Migrations that only add (expand then contract) so rollbacks stay safe; keep /stats inside 50 D1 queries per call (batch); `d1-backup-restore` runbook; don't delete the KV namespace in this build |
| C | Every case file passes `content:gate`; My role lines not in 10-confirmations stay "to confirm", which blocks live; count static asset files per build against the 20,000 limit |
| D | Nothing beyond the gate on any content it touches |
| E | Templates read `status`; sitemap, RSS, llms.txt and related links list live files only; satori share images at build, never per request |
| W1, W2 | Follow `publish-content.md` in batch mode: 10 files, gate on each, one batch report in the shape of §2.4; leave every file at ready until Rez's OK |
| R | Seed one bad file and prove the hook, `prebuild` and CI each catch it, then remove it; check draft and ready files are absent from the production build, sitemap and RSS; a rollback rehearsal on the test site that Rez runs from the `rollback` runbook (decision 25); write `deploy`, `rollback`, `launch`, `monthly-upkeep`, `dependency-update`, `incident`, `uptime`; add the 05-guide prompts from §1 |

## Sources

| Source | Read |
|---|---|
| Antigravity Rules: https://antigravity.google/docs/rules (AGENTS.md, GEMINI.md, `.agents/rules`, walk up to workspace root, includes, 24 KB and 20,000 token limits) | 27 Oct 2026, BrowserOS |
| Antigravity Agent skills: https://antigravity.google/docs/skills (`.agents/skills`, `~/.gemini/config/skills`) | 27 Oct 2026 |
| Antigravity MCP: https://antigravity.google/docs/mcp (`mcp_config.json`, `.agents/mcp_config.json`, enabledTools allowlist) | 27 Oct 2026 |
| Claude Code memory: https://code.claude.com/docs/en/memory (when AGENTS.md loads, `@AGENTS.md` import, `claude-md-and-agents-md`) | 27 Oct 2026 |
| Cloudflare Rollbacks: https://developers.cloudflare.com/workers/versions-and-deployments/rollbacks/ (100 versions, bindings caveat; updated 15 Jul 2026) | 27 Oct 2026 |
| Cloudflare Version URLs: https://developers.cloudflare.com/workers/versions-and-deployments/version-urls/ | 27 Oct 2026 |
| Cloudflare Previews: https://developers.cloudflare.com/workers/previews/ (Wrangler 4.135+, isolated bindings, noindex on workers.dev, 100 per Worker free); /configuration/ (the `previews` block, service bindings call production); /custom-domains/ (`previews_enabled`, wildcard certificate, `preview_urls`; updated 24 Sep 2026); /get-started/ | 27 Oct 2026 |
| OpenNext, Develop and deploy: https://opennext.js.org/cloudflare/howtos/dev-deploy (Workers Builds commands; updated 20 May 2026) | 27 Oct 2026 |
| GitHub Actions billing: https://docs.github.com/en/billing/concepts/product-billing/github-actions (GitHub Free, 2,000 minutes a month for private repos) | 27 Oct 2026 |
| UptimeRobot terms: https://uptimerobot.com/terms/ (any use, commercial included); keyword monitoring: https://uptimerobot.com/keyword-monitoring/ (free) | 27 Oct 2026 |
| Live checks: curl of rezz.dashbloom.design and rezkarim.dashbloom.design; the Cloudflare connector's Worker list; `wrangler whoami`, `wrangler versions list`, `wrangler deployments list`, `wrangler preview --help`, `opennextjs-cloudflare --help`; Wrangler 4.151.3's own code (`publishCustomDomains`, `getSubdomainValues`) | 27 Oct 2026, read only |
| Workers Builds limits: https://developers.cloudflare.com/workers/ci-cd/builds/limits-and-pricing/ | 27 Oct 2026 |
| Workers limits: https://developers.cloudflare.com/workers/platform/limits/ | 27 Oct 2026 |
| D1 Time Travel: https://developers.cloudflare.com/d1/reference/time-travel/ ; D1 limits: https://developers.cloudflare.com/d1/platform/limits/ ; D1 pricing: https://developers.cloudflare.com/d1/platform/pricing/ | 27 Oct 2026 |
| GitHub rulesets availability: https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets | 27 Oct 2026 |
| Keystatic with Next.js: https://keystatic.com/docs/installation-next-js ; npm `@keystatic/core` 0.6.9, `@keystatic/next` 5.0.5 | 27 Oct 2026 |
| npm `@modelcontextprotocol/sdk` 1.32.2 (modified 23 Oct 2026) | 27 Oct 2026 |
| UptimeRobot pricing: https://uptimerobot.com/pricing/ | 27 Oct 2026 |
| In project: ../README.md §4 to §6, 05-guide.md, 07 §3.8, §3.9, §5.9, §5.10, 08 §10, §13.3, §14, 10-confirmations rows 73 to 91, 14-pre-build-review.md, `site/` git, `package.json`, `wrangler.jsonc`, `.gitignore`, `site/AGENTS.md`, the GitHub clone at the root, the website-build skill's cloudflare-deploy.md, the master plan §9 to §12 | 27 Oct 2026 |

Checked on Rez's ask the same day: GitHub Free gives 2,000 Actions minutes a month for private repos (CI here takes a few minutes per push); UptimeRobot allows any use and its keyword checks are free; OpenNext documents Workers Builds; Previews and workers.dev behave as §4.4 says; the test host and domain risk in §4.1. Not run: the Preview upload of the OpenNext build. On 28 Oct the attempt stopped at the decision 25 deny list before any upload, and no Cloudflare setting changed; Rez runs the test after launch (for-rez.md A1).

**Master plan, compared:** §11's gate (8 checks) maps onto G1 and G4 here, and its "AI content must not automatically go live" holds through G7. §11's "preview deployments and safe rollback" is §4.4 and §4.5. Its §9 tools (GA4, Clarity) are SEO's call. No clash with Rez's decisions in this track.
