# Handoff: building V4a on a friend's PC

[README](../README.md) · **Set aside 27 Oct 2026:** the build runs on Rez's PC ([15-v4a-plan/](15-v4a-plan/README.md)), so no zip goes out; kept for reference · Draft · 22 Oct 2026 · How the V4a build runs on a friend's PC from a zip of this project, with nothing from Rez's PC, chats or memory ([10-confirmations.md](10-confirmations.md) rows 83 to 90).

## 1. What this is

Rez's personal portfolio: a Next.js site in `01-portfolio/site/`, live as a test at rezz.dashbloom.design and later at rezkarim.com. The design is V4a in the Figma file rez-website (`2PZQVIX9UJO8NqnXNqiNDe`). The job is to rebuild `site/` to match V4a, following the build plan, then hand the finished project back. Rez deploys it himself.

Rez is a designer on this site: never founder, owner or "we" for a studio. The rules for every session are in [../CLAUDE.md](../CLAUDE.md); the section "On the build PC" holds Rez's personal rules set for this PC.

## 2. What you need (all free)

| Item | Note |
|---|---|
| Node.js | 22 LTS or newer. Rez builds on 22.15; `site/package.json` sets no engine. The test runner needs `--experimental-strip-types`, so 22.6 at least |
| Claude Code | Desktop app or CLI |
| Figma connector | With access to rez-website (`2PZQVIX9UJO8NqnXNqiNDe`). Rez shares the file with you (row 87). The build only reads it; ask Rez for edit access only if view access isn't enough for the connector |
| BrowserOS | For every browser check, localhost included ([../CLAUDE.md](../CLAUDE.md), "On the build PC") |
| ffmpeg | For the audio step in package P7 ([08-build-plan.md](08-build-plan.md) §13.4) |
| Chrome | For Lighthouse (`npx lighthouse@12`) |
| Python 3 | Only if fonttools is needed |

## 3. Setup

| Step | How |
|---|---|
| 1 | Unzip the project anywhere |
| 2 | In `01-portfolio/site/`, run `npm install` |
| 3 | Copy `site/.env.example` to `site/.env.local` and set your own test passwords for `STATS_PASSWORD`, `RECRUITER_PASSWORD` and `AUTH_SECRET` (64 hex characters). Never the live ones (row 89) |
| 4 | In `site/`, run `npm run dev`. The site opens on http://localhost:3000. From a Claude session at the project root, preview_start "portfolio-site" starts the same server (`.claude/launch.json`) |
| 5 | Check the baseline: `npx tsc --noEmit` and `npm run build` pass ([08-build-plan.md](08-build-plan.md) §2) |

## 4. Where to start

1. Open a Claude session in `01-portfolio/`.
2. It reads [CLAUDE.md](CLAUDE.md) (this site's rules and where things stand), then [08-build-plan.md](08-build-plan.md) (packages and kickoff prompts), [09-functional-checklist.md](09-functional-checklist.md) (what must pass) and [10-confirmations.md](10-confirmations.md) (Rez's answers, which win over every other file).
3. Facts from Rez's outside files are in [00-facts.md](00-facts.md). Tokens and components are in [06-design-system.md](06-design-system.md); search and speed in [07-search-and-speed-plan.md](07-search-and-speed-plan.md).
4. The build starts only after Rez has reviewed Figma and said yes (row 45).

## 5. Never

| Never | Why |
|---|---|
| Commits or pushes by Claude, or Claude attribution in any commit | Rez's rule. The person at the PC commits by hand |
| Deploys, or any Wrangler command that touches Cloudflare | Rez deploys from his PC (row 84) |
| Sign ins, new accounts, payment details | Rez's accounts stay his (hard rule 5) |
| The live KV or D1, or the live passwords | Local test data only |
| Taste Labs, in any form | Hard rule 3 |

## 6. Hand back

When the build passes 09 in full and package R has written its "You check" list, zip the project the same way (section 8) and send it to Rez. He brings `site/` into his folder, checks the diff, commits and deploys from his PC ([08-build-plan.md](08-build-plan.md) §10).

## 7. Paths

Absolute paths that start with `F:\🚩 CLAUDE\Rez Portfolio Website\` mean this project folder, wherever it is unzipped. Any other `F:\` or `G:\` path is on Rez's PC only; the facts the build needs from those are in [00-facts.md](00-facts.md).

## 8. The zip

Made only after Rez has reviewed Figma and committed `site/` by hand (rows 45, 75). Claude makes it on his word, or he zips it himself.

**In it:** the whole project folder, including `site/.git` and `site/.env.example`.

**Left out:**

| Path | Why |
|---|---|
| `site/node_modules` | Rebuilt by `npm install` |
| `site/.next` | Build output |
| `site/.open-next` | Cloudflare build output |
| `site/.wrangler` | Local Worker state |
| `site/.data` | Local visit counts and test messages |
| Every `.env*.local`, including `site/.env.local` and `site/.env.production.local` | Secrets and Rez's own settings (row 89) |

On 22 Oct the four build folders came to about 1.3 GB (`node_modules` 734 MB, `.next` 505 MB, `.open-next` 60 MB, `.wrangler` 42 MB), so leaving them out keeps the zip small.
