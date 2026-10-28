# Planning wave: shared brief

[README](../../../README.md) · Draft · 27 Oct 2026 · Eight planning sessions run in parallel, each writing only its own file in this folder. The main session (the coordinator) merges them into [../README.md](../README.md) and the build chat files, then asks Rez one combined list. Nothing is built in this wave.

## 1. Who does what

| Track | Session | Writes only | Scope |
|---|---|---|---|
| Figma A | figma-a | `figma-a-design-system.md` | Design system page `114:13313`: variables, styles, components, states, icons |
| Figma B | figma-b | `figma-b-desktop-pages.md` | Page ↳ V4a · Pages `10:3`: Core pages `82:8362`, Service pages `82:9011` (with the LinkedIn invite), Other pages and states `82:9285` |
| Figma C | figma-c | `figma-c-cases-assets.md` | Case pages `82:8638`, New case pages `172:17339`, asset sections `170:7048`, `172:7108`, `173:7560`, `212:8330`, Share images and icons `170:7174` |
| Figma D | figma-d | `figma-d-responsive-handoff.md` | Mobile `148:4804`, Tablet `150:16627`, the Handoff page `114:13314`, file structure, the archive and legacy pages, the node ids the docs use |
| SEO | seo | `seo-aeo-geo.md`, `seo-page-map.md` | Search, answer engines, the ~100 pages, conversion and measurement |
| Security | security | `security.md` | Threats, dependencies, secrets, auth, forms, headers, Cloudflare, content and AI tool safety, GitHub, when checks run |
| Operations | operations | `operations.md` | Posting later (Claude, Antigravity, MCP, CMS), the check gate, GitHub and deploys, staging, rollback, monitoring, upkeep |
| Best practices | practices | `best-practices.md` | Senior grade repo structure and developer docs, accessibility, privacy and legal, code standards, testing, error monitoring, design QA, second language readiness |

**Topic owners**, so two tracks never decide the same thing. Others add notes under "For other tracks" in their own file.

| Topic | Owner | Notes from |
|---|---|---|
| Content model fields, page families, URLs, schema types, internal links, sitemap, robots, llms.txt | SEO | Operations (workflow), Security (MDX safety) |
| Analytics and measurement tools | SEO | Practices (consent, privacy), Security (third party scripts) |
| Contact form fields and CTAs | SEO | Security (abuse), Practices (accessibility) |
| Publishing workflow, tools and the check gate's steps | Operations | SEO (quality criteria), Security (permissions) |
| CI, deploys, GitHub setup | Operations | Security (secrets, permissions) |
| Headers, CSP, secrets, auth, rate limits, dependency policy | Security | — |
| Accessibility, privacy page, cookie consent, code conventions, testing | Practices | — |
| Repo structure, code organization, developer docs (README, architecture, how to add content, runbooks, decision records, changelog) | Practices | Operations (workflow and deploy runbooks), Security (security notes) |
| Figma file quality | Figma A to D, by area | — |

## 2. Rules for every planning session

1. Plan only. No code, installs, edits to `site/`, Figma edits, deploys, commits, sign ins, account connections or paid tools.
2. Read anything in the project. Write only your own file(s) in this folder. Never edit a CLAUDE.md, a README, the numbered docs or another track's file.
3. Read first: [../../CLAUDE.md](../../CLAUDE.md) (site rules and Where things stand, plus the root rules it loads), [../README.md](../README.md) (the draft plan), [../../14-pre-build-review.md](../../14-pre-build-review.md), this file, then the sources in your brief (§5).
4. Sources of truth, in order: Rez's decisions in §3, [../../10-confirmations.md](../../10-confirmations.md), [../../01-portfolio-spec.md](../../01-portfolio-spec.md), then the rest. Facts come from [../../00-facts.md](../../00-facts.md). Never invent clients, numbers, quotes, results, search volumes or difficulty.
5. `portfolio_seo_aeo_geo_inbound_master_plan.md` at the project root comes from another AI tool. Mine it for ideas, challenge it, and name where it clashes with Rez's locked decisions (for example its UI/UX first positioning, prices on pages, GA4 and Clarity).
6. Browse only with BrowserOS (`mcp__browseros__*`), in your own background tab, closed when done, reading pages as text. Never sign in. If BrowserOS isn't connected, say so in your file and work without it.
7. Figma (`2PZQVIX9UJO8NqnXNqiNDe`): read the figma-use skill (`get_figma_skill`, `skill://figma/figma-use/SKILL.md`) and call `create_session` before any `use_figma`. Read only. Return compact results (ids, names, counts), never dumps. `findAll` from a page or frame misses texts inside instances, so walk `.children` recursively. Switch pages at most once per call. On a rate limit, wait a minute and retry.
8. Don't ask Rez in your session unless you are blocked. Put questions under "Rez decides", each with 2 to 4 options and the recommended one first. The coordinator asks them all in one round.
9. Anything for another track goes under "For other tracks" in your own file, never into theirs.
10. Lean: tables and short lines. Label facts, estimates and opinions. Give links and dates for anything researched. At most 3 agents, only for parallel research.
11. Copy you propose follows the site's voice rules (root CLAUDE.md, 00-facts §5): no em dash, colon, semicolon or hyphen in visible copy, claims word for word, never Taste Labs, no city.

**Your file's shape**

```
# <Track>
Status: done · 27 Oct 2026 · <one line verdict>
## Summary            (5 lines)
## Findings or plan   (tables)
## Rez decides        (questions, options, recommended first)
## For other tracks
## For the build chats (what F, B, C, D, E, W and R must do, by chat; see ../README.md §6)
## Sources            (research tracks: links and dates)
```

End your turn with a two line summary once the file says `Status: done`.

## 3. Rez's decisions so far (27 Oct)

- The build runs on Rez's PC in this project. No zip; the friend's PC rows (10-confirmations 83 to 87) and 12-handoff are set aside.
- The portfolio targets the person (hire a designer, jobs, guides by Rez); the agency site, in its own project, targets the studio and white label work.
- About 100 SEO pages for jobs, clients and other openings. The SEO track recommends the rollout: all before launch, or a first batch then batches led by data.
- Posting later is done by Claude or Antigravity, maybe through an MCP server, and always passes a check before anything goes live.
- Claude reviews Figma, asks Rez only what needs him, then makes Figma fully ready.
- Every page is built for SEO, AEO and GEO; [../../07-search-and-speed-plan.md](../../07-search-and-speed-plan.md) is the base.
- Built to a senior developer's standard: clean, well organized and documented, so a new developer or another AI tool can set up, change and upgrade the site from the repo alone. Every track plans with this in mind.
- Nothing gets built until Rez approves the merged plan.

## 4. Facts from the review (27 Oct)

- `site/`: Next.js 16.4.2, React 19.3.0, OpenNext 1.20.12, Wrangler 4.151.3, Tailwind 4.3.3, Motion 14.4.0, Lenis 1.3.27, Cal.com embed 1.5.3. Live as a test at rezkarim.dashbloom.design, noindex. Cache Components is on locally and off on Cloudflare. Visits and messages sit in KV today; D1 is decided (row 91).
- `site/` git: one create-next-app commit, 45 uncommitted paths, no remote. `01-portfolio-rezwebsite/` at the root is a clone of `github.com/rezkarimpro-creator/01-portfolio-rezwebsite`, holding one initial commit.
- All 754 packages in `site/package-lock.json` resolve from registry.npmjs.org; none come from git. The `gh` CLI isn't installed.
- This PC: Node 22.15.0, ffmpeg 9.0.1, Python 3.13.3. BrowserOS is connected; browseros-neo is down.
- Figma copy scan of `10:3` (4,298 visible texts): clean apart from the items in 14-pre-build-review §4.

## 5. Track briefs

### Figma A · Design system

Sources: [13-figma-handoff.md](../../13-figma-handoff.md) §4 to §7, §12 (icons) and §13 (focus and labels on components); [06-design-system.md](../../06-design-system.md).

Check the collections and modes (Theme, Responsive, Typography, Radius, Legacy); token names against 06 §4's CSS names; scopes; unbound values inside components; text style coverage; effect styles; every interactive component's states and sizes; mobile variants; descriptions; icons on one grid with bound colour; AA contrast of the text tokens.

Output: findings (node id, issue, 13 §, must, should or nice, fix, owner Claude or Rez), what is solid, Rez decides.

### Figma B · Desktop pages and flows

Sources: 13 §2, §3, §8, §10, §11, §13, §14; [09-functional-checklist.md](../../09-functional-checklist.md) §1 to §5; 10-confirmations; [08-build-plan.md](../../08-build-plan.md) §3.

Check naming, auto layout, detached instances, unbound fills and text styles on the frames, whether every 09 line has its frame or state, whether each flow is complete (Stats sign in, recruiter case, contact form, booking, cookies, email copied, LinkedIn invite), links and behaviour notes, motion notes, heading order per page, and the copy rules (14 review §4 items 3 and 4 included).

Output: as A, plus a table of any 09 line with no frame.

### Figma C · Cases and assets

Sources: 13 §11 and §12; spec §4 and §6; 10-confirmations rows 1 to 26 and 78 to 82; 00-facts; 14 review §4 items 1, 3 and 4.

Check that all 21 case frames (7 plus 14 new) follow the case template; that My role rows match rows 1 to 24 (SyncGrid's studio hidden, SolVita's role line, To confirm values marked); no labels and no years; claims word for word; images at their final ratio, quality and source in the asset sections; export settings; a 1200 by 630 share image for every route and case in `170:7174`, without tags or years; alt text notes; the Next case order.

Output: as A, plus a table per case (case, frame id, share image id, status, issues).

### Figma D · Responsive, structure and handoff

Sources: 13 §1, §9, §15, §16; 08 §3 and §13.1 (the node ids it uses); 06.

Check the page order and whether a Cover page exists; the archive copy page `196:12120` and the legacy pages; Mobile 390 and Tablet 768 coverage per template (which pages lack a frame, and whether the template covers them); touch targets; sticky and sheet states; the Handoff page (page index, and whether it lists the 14 new cases; flows map; build checklist; open questions; changelog; token table); whether every node id named in 08, 06 and 09 still exists with the same name; Ready for dev marks; named versions.

Output: as A, plus a list of ids in the docs that moved or broke.

### SEO, AEO, GEO, conversion and measurement

Sources: [07-search-and-speed-plan.md](../../07-search-and-speed-plan.md) (all), the master plan file, spec §1 to §5, 00-facts, 14 review, ../README.md §3 and §4.

1. Challenge 07, the draft plan's §3 and the master plan: what is weak, missing or risky for this site.
2. Research with free tools in BrowserOS: Google and Bing suggestions and "People also ask" for about 30 seed queries across hiring (jobs), services and guides; the page types that rank; 10 to 15 designer portfolios or freelancers that rank, and the pages they use. Free tools rarely show volumes; say so rather than guess.
3. Architecture: page families, URL patterns, the content model fields per family (what each content file holds), schema per family, internal link rules, the quality gate's criteria, and the person versus studio split.
4. `seo-page-map.md`: about 100 rows with URL, family, audience (job, client, agency, other), main question, evidence seen, proof case from 00-facts, launch batch or later, priority. A row with no real proof is marked "drop", never filled with invented proof.
5. The rollout (first batch size and why), the measurement plan (Search Console, Bing, Cloudflare Web Analytics, /stats with AI referrers, and whether GA4 or Clarity earn their cost in speed and consent), conversion (form fields such as budget and timeline, CTAs per family, lead alerts), and a short risk register.

### Security

Sources: the `site/` code (read only), `package.json`, `package-lock.json`, `wrangler.jsonc`, `next.config.ts`, 08 §3.7 and package P1, 07 §5.9, the master plan §8, the root CLAUDE.md rules.

1. Threat model: what is worth protecting (Stats, messages, passwords, the Worker, the domain, Rez's accounts) and from whom (spam bots, password guessing, the supply chain, a bad dependency, AI tools posting content, leaked secrets).
2. Supply chain: `npm audit` (read only), where packages come from, lockfile and install rules, how a new package gets approved, alerts for updates. Rez asked about "some repos in GitHub": explain what the build pulls from GitHub or npm, and what the GitHub repo in §4 is.
3. Secrets: where each one lives. Rez keeps `.env` files in git by choice (private repos), so don't argue that; make sure live secrets live only as Worker secrets and local values differ from the live ones.
4. The app: auth tokens, cookies, lockout, form abuse (rate limit, honeypot, Turnstile if free), input checks, JSON-LD escaping, headers and CSP for Next on Workers, Cloudflare's free security settings.
5. Content and AI tools: MDX runs as code at build, so what content files may contain; what an MCP posting tool may do; how Claude or Antigravity get limited permissions.
6. GitHub, if the site moves there: private repo, branch protection, secret scanning, Actions permissions, deploy credentials.
7. When security gets checked: a table of checkpoints (before installs, after F, B's tests, R, before each deploy, after a deploy, monthly), each with who and how.

### Operations (future management)

Sources: ../README.md §4, [05-guide.md](../../05-guide.md), 08 §10, `C:\Users\REZ\.claude\skills\website-build\references\cloudflare-deploy.md`, the master plan §9 to §12.

1. Posting later: compare (a) Claude or Antigravity editing content files, (b) a small MCP server in the repo with tools such as add case, add post, check, preview and publish, (c) Keystatic, (d) a Notion sync. For each: setup time, what Rez does, how the check works, risks. Recommend one.
2. The check gate: draft, checks (`content:check`, `content:lint`, links, preview), Rez's OK, live. Who runs what.
3. More than one AI tool: one source of rules for Claude and Antigravity (CLAUDE.md, AGENTS.md; check in Antigravity's docs which file it reads).
4. Git and GitHub: where the code lives (local `site/` git versus the GitHub repo in §4), branches, who commits (Rez), deploys (manual `npm run deploy` versus GitHub Actions to Cloudflare), staging after launch (the test subdomain), rollback (Worker versions).
5. Upkeep: free uptime checks, a Search Console and Bing routine, /stats, dependency updates, D1 backups, guardrails for the free plan's limits, a monthly checklist.

### Best practices

Sources: 09 §8, 07 §5, the master plan §8, Rez's conventions (lint, typecheck, format and test scripts, ls-lint, `.editorconfig`), 06.

1. Accessibility to WCAG 2.2 AA: what to test and how (axe, Lighthouse, keyboard, a screen reader), and what gets fixed in Figma versus code.
2. Privacy and legal: the privacy page for D1 data, messages and cookies; consent for UK and EU visitors; retention; the contact form's data.
3. Code standards: what `site/` lacks against Rez's conventions (format script, ls-lint, `.editorconfig`, typecheck script) and what F should add.
4. Testing within Rez's rules (code first, test at the end, no new suites except for critical code): what to test where.
5. Errors and monitoring on Workers (free), browser support, design QA (Rez checks the build against Figma), and readiness for a second language (Arabic) without building it.
6. The repo for a new developer (Rez, 27 Oct): the target folder structure for `site/` (app, components, content, lib, styles, scripts, tests, docs) and where each kind of change goes; naming; the documentation set (a README with setup and scripts, architecture, how to add a case, post or SEO page, the deploy and rollback runbook, decision records, CONTRIBUTING, CHANGELOG, a comment policy); where docs live so the repo carries what a developer needs while each fact keeps one home (the planning docs in `01-portfolio/` versus `site/docs/`); and an onboarding test: a new developer sets up, runs, changes one page and passes the checks within an hour, using only the repo's docs.
