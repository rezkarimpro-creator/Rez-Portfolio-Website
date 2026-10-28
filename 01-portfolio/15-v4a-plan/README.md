# V4a plan: Figma, build, SEO pages, launch

[README](../../README.md) · Approved 27 Oct 2026 (Rez accepted every recommended answer in [for-rez.md](for-rez.md)) · The plan from now to launch. It replaces the session split in [08-build-plan.md](../08-build-plan.md) (§1, §2, §4, §6) and keeps 08's package details, which the chats follow. The research behind it is in [planning/](planning/README.md). The build starts on Rez's go, after his steps in for-rez.md §1.

## 1. Goal

| Item | Plan |
|---|---|
| Site | `site/` matches Figma V4a on every page and state at 1440 and 390, tablets as the desktop column (decision 35), with all 21 cases |
| Content | One file per case, guide or SEO page, checked by script, put live only after Rez's OK (decisions 16, 19, 20; [operations](planning/operations.md) §2) |
| SEO pages | Only pages with real proof (decision 5): 20 at launch from the [page map](planning/seo-page-map.md), then 10 every 2 weeks led by Search Console (decision 6). Families: Hire (hub and 4 roles), Industries, Deliverables, Guides at `/guides/` ([seo](planning/seo-aeo-geo.md) §3) |
| SEO, AEO, GEO | [07-search-and-speed-plan.md](../07-search-and-speed-plan.md), extended by [seo](planning/seo-aeo-geo.md): content model, schema per family, the quality gate, measurement without GA4 or Clarity, the RezBloom name fix |
| Code standard | Senior developer grade: `site/` is the repo, folders by kind, kebab-case names, Prettier, ls-lint, a full docs set, decision records and an onboarding test ([best-practices](planning/best-practices.md)) |
| Security | Live secrets only as Worker secrets, signed tokens with an expiry, limits at the edge and in code, headers and CSP, content files that can't carry code, checks at fixed points ([security](planning/security.md) §8) |
| Where | Rez's PC, in this project. Rez commits and deploys; no session commits, pushes or deploys |
| Done | 09 passes in full, plus the checks in [review.md](review.md) and [e2e.md](e2e.md); the onboarding test passes; the test site runs on rezkarim.dashbloom.design as the new Worker `rezkarim-site`, noindex (the 21 Oct site stays on rezz.dashbloom.design, untouched). Launch waits only on rezkarim.com (gate G1) |

## 2. Steps

| # | Step | Who | Starts after | Time, rough |
|---|---|---|---|---|
| 0 | Rez's steps in [for-rez.md](for-rez.md) §1: answer the Operations session, new Stats password and sign in key, the baseline commit, the himalayas profile, the Cal.com title | Rez | Now | 15 min |
| 1 | Figma round 1: the fixes that needed no answer | Sessions figma-a to figma-d, once Rez approves in each | Now | 1 to 2 h |
| 2 | Figma round 2: what Rez's answers unlocked (states, copy, form chips, template components) | The same sessions | Round 1 | 1 to 2 h |
| 3 | Figma round 3: the new templates (Hire, Industry, Deliverable, Guide, Guides index, hubs) at 1440 and 390; Rez looks at them | figma-b (desktop) and figma-d (phones), from figma-a's components | figma-a's components | 2 to 3 h |
| 4 | Foundation: chat F | One session | The baseline (Rez's commit, or the tree in [baseline.md](baseline.md)), and figma-a's token changes | Done 28 Oct, 66 min |
| 5 | Wave 1: B, C, D, E and W, all at once | 5 child sessions of the build coordinator | F's report says done | 1.5 to 3 h |
| 6 | Review and end to end: R, run by the coordinator itself, area by area as reports land, then the whole site | The coordinator, at Max | Each wave 1 report; the final pass after the last | About 1 h after the last report |
| 7 | Onboarding test: O, as a fresh subagent of the coordinator on a copy of `site/` | The coordinator | R | 30 min |
| 8 | Review pack in [for-rez.md](for-rez.md) §6 | The coordinator | O | — |
| 9 | Rez reviews localhost and the pack, gives his input; the coordinator applies it in one pass | Rez, then Claude | Step 8 | His pace |
| 10 | Rez sets the secrets, commits, deploys to rezkarim.dashbloom.design, checks Worker CPU a day later | Rez, a session reading along | Step 9 | 30 min |
| 11 | Launch, gate G1: rezkarim.com, Cloudflare settings, Search Console, Bing, UptimeRobot, the first 20 pages live | Rez | His call | 1 to 2 h |
| 12 | Batches of 10 pages every 2 weeks, and the monthly upkeep | Claude, on Rez's word | Launch plus 4 weeks | Ongoing |

**28 Oct, the one go plan (Rez):** a fresh build coordinator session runs steps 5 to 8 without stopping, with 5 build chats as its children; anything that needs Rez waits for step 9. F took 66 minutes against a 5 to 6 hour guess, so steps 5 to 8 take about 3 to 4 hours; a usage limit pause can add to that (auto continue resumes after the reset). Instead of Rez's commits between steps, R records git trees as rollback points ([baseline.md](baseline.md)).

## 3. Chats

The build coordinator starts each chat as its child at the project root (`F:\🚩 CLAUDE\Rez Portfolio Website`) on Opus 5.5 at the effort shown (Rez, 27 Oct: Extra high by default, Max where the work needs it). It runs R itself and O as a fresh subagent, because a session can't start new sessions while Rez is away. F moves the files to the new layout first and publishes the path map in its report; every later chat uses that map instead of the old paths in 08 §7 and §11. Every chat also follows [common.md](common.md).

| Chat | Brief | Effort | Owns | Starts after |
|---|---|---|---|---|
| F · Foundation | [chat-f.md](chat-f.md) | Extra high | Shared files, tooling, content schemas, `migrations/0001`, the docs skeleton | The baseline (commit or [baseline.md](baseline.md)); figma-a's token changes |
| B · App and data | [chat-b.md](chat-b.md) | Max (sign in, data, security) | Stats, auth, forms, booking, cookies, tracking, the D1 code | F |
| C · Cases and images | [chat-c.md](chat-c.md) | Extra high | The image pipeline, the case template, the 21 case files | F |
| D · Pages | [chat-d.md](chat-d.md) | Extra high | Home, Work, dock, archive rows, inner pages, LinkedIn invite, Privacy, Accessibility | F |
| E · Search and templates | [chat-e.md](chat-e.md) | Extra high | Metadata, JSON-LD, sitemap, robots, llms.txt, RSS, share images, speed, the new templates | F; templates after Figma round 3 |
| W · Content | [chat-w.md](chat-w.md) | Extra high | The 20 batch 1 rows in `content/pages/` and `content/guides/` | F |
| R · Review and end to end | [review.md](review.md), [e2e.md](e2e.md) | Max (the final gate) | Any file, fixes only; the Figma QA page | Run by the coordinator, area by area, then the whole site |
| O · Onboarding test | [chat-o.md](chat-o.md) | Extra high | Its report, and doc fixes in `site/` | R; a subagent on a copy of `site/` |

## 4. Kickoff prompts

The coordinator starts each chat with its line. To start one by hand, open a session at the project root at the effort in §3 and paste its line.

| Chat | Prompt |
|---|---|
| F | You are chat F. Read 01-portfolio/15-v4a-plan/common.md and 01-portfolio/15-v4a-plan/chat-f.md and do it. |
| B | You are chat B. Read 01-portfolio/15-v4a-plan/common.md and 01-portfolio/15-v4a-plan/chat-b.md and do it. |
| C | You are chat C. Read 01-portfolio/15-v4a-plan/common.md and 01-portfolio/15-v4a-plan/chat-c.md and do it. |
| D | You are chat D. Read 01-portfolio/15-v4a-plan/common.md and 01-portfolio/15-v4a-plan/chat-d.md and do it. |
| E | You are chat E. Read 01-portfolio/15-v4a-plan/common.md and 01-portfolio/15-v4a-plan/chat-e.md and do it. |
| W | You are chat W. Read 01-portfolio/15-v4a-plan/common.md and 01-portfolio/15-v4a-plan/chat-w.md and do all 20 rows. |
| R | You are chat R. Read 01-portfolio/15-v4a-plan/common.md, 01-portfolio/15-v4a-plan/review.md and 01-portfolio/15-v4a-plan/e2e.md and do them. |
| O | You are chat O. Read 01-portfolio/15-v4a-plan/chat-o.md and do it. |

## 5. Stack (decision 1)

| Part | Choice |
|---|---|
| Framework | Next.js 16.4.3 and React 19.3.1, Cache Components off everywhere |
| Hosting | Cloudflare Workers, free plan, through OpenNext 1.20.13 and Wrangler 4.153.0 (or a newer patch at least 7 days old) |
| Data | D1: views, events, messages, attempts (row 91) |
| Content | One file per item with a typed schema; MDX for guides through `@next/mdx`; `content/claims.ts` and `content/rules.json` drive the checks |
| Styling and motion | Tailwind v4 tokens named after the Figma variables, Motion 14.7.1 under LazyMotion, Lenis on desktop |
| Images | Static WebP at fixed widths from masters, cached for a year; satori share images at build |
| Measurement | Search Console, Bing Webmaster Tools, Cloudflare Web Analytics and /stats; no GA4 or Clarity (decision 11) |
| Posting | Claude or Antigravity edit content files behind `content:gate` and Rez's OK; an MCP wrapper later if wanted (decision 16) |

Everything is free; nothing has a paid plan or a usage cap.

## 6. What Rez does, in order

| Action | Where and how |
|---|---|
| The steps in for-rez.md §1 | Terminal, Cloudflare, Cal.com, the himalayas profile |
| Approve the four Figma sessions | Each Figma review session: "Rez: go ahead with the coordinator's Figma fixes, rounds 1 and 2." |
| Answer for-rez.md §3 (tools, industries, profiles, Figma seat, test address) | This chat |
| Look at the new templates after Figma round 3 | Figma, the new templates section on ↳ V4a · Pages |
| Say go for the build | This chat; the coordinator starts F |
| Answer Requests from the chats (new packages, copy to confirm) | This chat |
| Commit the build after R | Terminal in `site/` |
| Deploy to the test site | [08-build-plan.md](../08-build-plan.md) §10 and [security](planning/security.md) §8 rows 7 and 8 |
| Launch | [07-search-and-speed-plan.md](../07-search-and-speed-plan.md) §3.8 and §3.9, security §5.5, for-rez.md §4 |
