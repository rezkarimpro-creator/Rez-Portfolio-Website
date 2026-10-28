# Rez's websites: shared rules for every session

Updated 22 Oct 2026. This folder holds Rez's portfolio and the plan both his websites share. The agency site moved to its own project, `F:\🚩 CLAUDE\rez-agency-website\`, on 22 Oct 2026. These rules load in every session, whether it is opened here or in a site folder. Each site folder adds its own rules in its own CLAUDE.md.

## Folder map

| Folder | What it holds | Open a session here for |
|---|---|---|
| `01-portfolio/` | Rez's personal portfolio (rezkarim.com, bought later). Claude builds it | Anything on the portfolio |
| `F:\🚩 CLAUDE\rez-agency-website\` | The agency site, in its own project since 22 Oct 2026. The old `02-agency/` folder is in `09-archive/2026-10-22-02-agency/` | Nothing here. Open agency sessions in that project |
| `03-shared-plan/` | Strategy, funnel, roadmap, lead magnets and templates: the plan both sites serve | Work that spans both sites (open the root folder) |
| `09-archive/` | Old drafts and stale copies | Nothing. Never use it as a source |
| `README.md` | Start here: the plan in one screen, the locked decisions, what Rez needs to do | — |

In a root session, when Rez says "build the portfolio", read `01-portfolio/CLAUDE.md` first and follow it. Agency work belongs in the agency project.

## Start of every session

1. Read the site folder's CLAUDE.md. Its "Where things stand" section says what is done, what is next and what is waiting on Rez. Then read the spec it points to.
2. Trust the files over memory and old chats. If something you need isn't written down, ask.
3. Say in one line what you are about to do before you do it.

## Sources of truth

When sources disagree, this order wins: (1) Rez in the current chat, (2) the site's answers file and locked spec (for the portfolio, `01-portfolio/10-confirmations.md`, then the spec), (3) `03-shared-plan/` and `README.md`, (4) the facts in [01-portfolio/00-facts.md](01-portfolio/00-facts.md), copied from the outside sources below. Between two files, the newer dated one wins. Tell Rez about any conflict instead of choosing silently.

**In-project facts.** [01-portfolio/00-facts.md](01-portfolio/00-facts.md) holds every fact the build needs from the outside sources below (Rez's call, 22 Oct 2026), each with its source and the date read. Use it first. It is the only copy allowed in this folder; when Rez changes an outside file, update 00-facts.md with the new date.

Outside sources, **on Rez's PC only**. Read only: never edit them. On any other PC they don't exist: use 00-facts.md and ask Rez for anything missing.

| File (Rez's PC only) | Use it for |
|---|---|
| `F:\###Cursor\Rez Assesment_05_Sep_2026\CONTEXT.md` | Rez's working rules, Taste Labs rules, paths |
| `F:\###Cursor\Rez Assesment_05_Sep_2026\01-profile.md` | Facts, proof, wording rules (§1, §5) |
| `F:\🚩 CLAUDE\Behance Dribble Contra Linkedin Apply\portfolio.md` | Case codes (D1, B1, W1 and the rest), Behance links, the ordering rule |
| `F:\🚩 CLAUDE\Behance Dribble Contra Linkedin Apply\PLAN.md` §8 | Writing rules and voice for all copy |
| `G:\REZ Resume\Rez Resume (15 Aug_2026)_Cursor 3X Resume\🟢 Resume_Studio` | Fonts and colors for the portfolio |

## No guessing

- Every fact, name, number, price, date, quote, client and result comes from a source above. If it isn't there, ask Rez or write "to confirm". Never fill a gap with something that merely sounds right.
- Use claims word for word, as in hard rule 4.
- Check before you say something is done, live, sent or approved.
- Don't assume the state of anything outside this folder (domains, accounts, the friend's CMS or agreement, the plan repo). Read "Where things stand" or ask.

## Hard rules

1. **Public role.** Rez is a designer on his portfolio and Design Lead on the agency site. Never founder, co-founder, CEO, owner, "my agency" or "my studio", until he decides to go public (README). On the portfolio, never "we" meaning a studio. On the agency site, "we" is the studio speaking.
2. **Positioning.** Brand and websites lead; decks, social and LinkedIn follow. The headline is in the README.
3. **Taste Labs.** Never show Taste work, name Taste projects or describe Taste tasks. Taste briefs and files never go into an AI chat.
4. **Claims.** Provable only. "Designed the investor deck used in Earworm's £200K pre-seed", never "raised". Delineate (YC W25) as a past client, without the $500K. "300+ client reviews", without naming Fiverr. The README's client and concept labels are internal, for ordering: the portfolio shows no Client or Concept labels and no years on any case, and Nike Mind keeps "Not affiliated with Nike" (Rez, 22 Oct, `01-portfolio/10-confirmations.md` row 81). Rez confirms every credit line before go-live.
5. **Rez clicks.** Logins, domains, DNS, deploys, Search Console, payments. Never sign in, create accounts or enter payment details for him.
6. **No new paid tools** without Rez's OK. His money rule needs a log line first.
7. **Stay inside this folder.** Don't edit the plan repo or the apply project. Put items for Rez's plan or log in your final report.
8. **Leads** go to `F:\🚩 CLAUDE\Behance Dribble Contra Linkedin Apply\leads\`, never here.

## Working with Rez

- Plain English, or proper Bengali script with English terms left in English. Never romanized Bengali.
- Chat: ultra-concise, tables and bullets. Full prose only inside deliverable files.
- Questions as an AskUserQuestion quiz, recommended option first, only what changes the build.
- Plan, then Rez reviews, then execute. Lead with the biggest $ levers.
- **Approval gates.** Present the plan, the options and your questions first. Build nothing (no code, installs, site changes or file moves) until Rez approves that phase. Each step of a site's build process needs its own yes.
- **Writing.** Follow the rules in PLAN.md §8 (copied into [01-portfolio/00-facts.md](01-portfolio/00-facts.md) §5): human, direct and short, one real proof point, and no em dash, colon, semicolon or hyphen in messages and client-facing answers. Site copy uses the same voice.
- **Browsing.** Use BrowserOS (the `mcp__browseros__*` tools), Rez's own browser, in a new background tab. Never touch his open tabs (job applications and logged-in accounts), and close your tab when done. If BrowserOS isn't connected, tell Rez right away and stop. Don't switch to another browser or a web fetch. Read pages as text. Never sign in.
- **BrowserOS screenshots.** If its MCP tools didn't load, its endpoint is `http://127.0.0.1:9000/mcp`. A background tab doesn't draw animated sites, so screenshots come out blank. Through the `run` tool, call `browser.cdpJsonForPage` on your own page with `Emulation.setFocusEmulationEnabled` and `Page.startScreencast` to make it draw, and stop both when done.

## Files and folders

- **One home for each fact.** Facts from Rez's outside files live in [01-portfolio/00-facts.md](01-portfolio/00-facts.md), with source and date; link to it instead of copying them again. Anything both sites use belongs in `03-shared-plan/`, never in both site folders.
- **Names:** a two-digit order and a short lowercase name, such as `01-portfolio-spec.md`. Under each document's title, one line with a README link, its status (Locked or Draft) and its date.
- **New files** get a row in their folder's file table (the site CLAUDE.md, or the README for `03-shared-plan/`).
- **Deliverables** go in the matching site folder. Scratch work stays in the session's scratchpad, never here.
- **Out-of-date files** move to `09-archive/` with a line in its README. Delete nothing without Rez's OK.

## Build sessions

Since 27 Oct 2026 the V4a build runs on Rez's PC, in this project ([01-portfolio/15-v4a-plan/](01-portfolio/15-v4a-plan/README.md)). The friend's PC plan (`01-portfolio/10-confirmations.md` rows 83 to 87, [01-portfolio/12-handoff.md](01-portfolio/12-handoff.md)) is set aside. These rules, first written for that PC, hold for every build session, on top of every rule above.

| Rule | What it means |
|---|---|
| Git | Claude never commits, pushes or opens pull requests, and adds no Claude attribution (no Co-Authored-By line, no "Generated with" line). The person at the PC commits by hand |
| Deploys | Claude never deploys and never runs a Wrangler command that touches Cloudflare. The finished project goes back to Rez, who deploys from his PC (row 84) |
| Live data | Never the live KV or D1 and never the live passwords. Ask before anything that would change live data |
| Questions | Always through the AskUserQuestion picker, 2 to 4 options, the recommended one first and marked (Recommended) |
| Replies | Short, with tables and bullets. Longer only inside files |
| Testing | Code first, then lint, typecheck, build and one quick run of the feature. Fix what fails and rerun only that; after two failed attempts, stop and report. No new test suites beyond the build plan's |
| Library docs | Before coding against Next.js, React, Tailwind or Cloudflare (OpenNext, Wrangler, D1) APIs, check the installed version in `01-portfolio/site/package.json` and read that version's official docs. Next.js ships them in `site/node_modules/next/dist/docs/` |
| Names | Files and folders in lowercase kebab-case, unless the language or tool needs another form |
| Date and time fields | Never the browser's default picker (`type="date"`, `time`, `datetime-local`, `month`); a picker styled like the site |
| Agents | 5 to 10 at most per chat. No agent per task, no reviewer per task, no agents starting agents. The build plan's packages are separate sessions (`01-portfolio/08-build-plan.md` §4) |
| Browser | BrowserOS for every browser check, localhost included, in Claude's own background tab, closed when done (row 71). Never the built-in preview pane or Claude in Chrome. If BrowserOS isn't connected, say so and stop. Its port on that PC may differ from the one above |
| Tools | Free tools only. Anything with a paid plan or a usage cap needs Rez's OK first |
| Sign ins | Never sign in for anyone, never create accounts, never enter payment details |
| Taste Labs | Never on the site and never in a chat (hard rule 3) |
| Paths | Absolute paths that start with `F:\🚩 CLAUDE\Rez Portfolio Website\` mean this project folder, wherever it sits. Every other `F:\` or `G:\` path is on Rez's PC only |
| Code rules | For work inside `01-portfolio/site/`, the rules in `site/AGENTS.md` apply; Claude reads them through `site/CLAUDE.md`. Keep the two in step: business rules stay in these CLAUDE.md files, code and content rules live there (decision 3) |

## End of every session

- Update "Where things stand" in the site's CLAUDE.md: the date, what changed, what's next and what's waiting on Rez.
- List items for Rez's plan repo or log in your final report (hard rule 7).
