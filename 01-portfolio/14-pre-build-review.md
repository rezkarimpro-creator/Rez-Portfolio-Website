# Final review before the V4a build

[README](../README.md) · Draft · 27 Oct 2026 · The last check before the V4a build starts: the stack, what still blocks, what to fix first, and the next steps. Read only: nothing in `site/`, Figma or the other docs changed during the review.

## 1. Verdict

The plan is ready. Figma, the docs and Rez's answers agree, apart from two small gaps in package P5's prompt (§4, items 1 and 2). Three things stand between now and wave 0, all Rez's (§3).

| Area checked on 27 Oct | Result |
|---|---|
| Docs | CLAUDE.md, the spec, 07 (speed notes), 08 build plan, 09 checklist, 10 confirmations, 12 handoff. They agree with each other and with the 22 Oct answers |
| Figma, live page ↳ V4a · Pages (`10:3`) | 4,298 visible texts scanned. No em or en dashes, no semicolons, no Taste Labs, no "raised", no Monthly Design Team, no "Rez Karim", no Client or Concept tags (the "Client" row label in My role cards stays, as planned), no Dhaka, no year on any case (only the footer ©). All 14 new case pages and their share images exist |
| `site/` | Next.js 16.4.2, live as a test since 21 Oct. Git holds only the create-next-app commit; 45 changed or new paths are uncommitted. `08-build-reports/` doesn't exist yet, so no package has started |
| This PC | Node 22.15.0, npm 10.9.2, ffmpeg 9.0.1, Python 3.13.3. BrowserOS is connected; `browseros-neo` refused the connection (the build doesn't need it) |

## 2. Stack

Keep it. It is built, tested and live, and it fits Rez's constraints (vibe coded, Awwwards feel, very fast, Cloudflare free plan).

| Layer | Pick | Now | For the build |
|---|---|---|---|
| Framework | Next.js 16 App Router (Rez's pick, row 62) | 16.4.2 | 16.4.3 |
| UI | React 19 | 19.3.0 | 19.3.1 |
| Styling | Tailwind v4, tokens named after the Figma variables | 4.3.3 | Same, latest |
| Motion | Motion, with `LazyMotion` and `m` components | 14.4.0 | 14.7.1 |
| Smooth scroll | Lenis, desktop mice only | 1.3.27 | Same, latest |
| Booking | Cal.com embed inside the site's Modal | 1.5.3 | Same, latest |
| Hosting | Cloudflare Workers, free plan, through OpenNext | OpenNext 1.20.12, Wrangler 4.151.3 | OpenNext 1.20.13 (supports Next 16.4.1 and up), Wrangler 4.153.0 |
| Storage | D1 for visits, messages and attempts (row 91), local D1 in dev | KV | D1 |
| Images | Static WebP at fixed widths from a sharp script, custom loader (package I) | `/_next/image` on the Worker | Static files, cached for a year |
| Share images | Figma exports, plus a satori template for pages without a frame | None | P7 |
| Tests | P1's auth tests (`node --test`), Lighthouse 12, 09 in full by R | Manual checks | As planned |

Two changes, applied by package F if Rez says yes:

1. **Version bumps** in F's one install step, to the last column. Patch and minor updates only; R's full pass catches any break.
2. **One build mode.** Cache Components is on for localhost and off for the Cloudflare build, because it hangs on Workers and OpenNext's fix is still open (07 §5). So seven packages would test a mode the live site never runs. Turn it off everywhere. The site loses nothing: nothing revalidates, and no page reads cookies on the server.

Considered and dropped: Astro (a full rewrite, and the form, passwords and counter still need a Worker), Framer (Rez wants it vibe coded), Vercel or Netlify (the Cloudflare free plan is the constraint, and the test site already runs there).

## 3. What blocks the build

| # | Blocker | Who | How |
|---|---|---|---|
| 1 | Figma review and yes (row 45) | Rez | Figma, start on ↳ V4a · Handoff |
| 2 | Commit `site/` as it is (row 75), so R reviews one clean diff | Rez | A terminal in `01-portfolio/site` |
| 3 | Where the build runs. The plan says a friend's PC (rows 83 to 87); "build it right now" points to this PC | Rez | His answer in chat |

## 4. Findings

| # | Finding | Fix | Weight |
|---|---|---|---|
| 1 | SyncGrid's My role card (`82:8844`) shows Studio · DashBloom with no To confirm mark. Row 5 and 08 §12 keep that studio hidden, but P5's prompt doesn't say so, and P5 copies frames word for word | One line in P5: hide SyncGrid's studio row | Must fix |
| 2 | 08 §3.5 and P5 still say five cases "are coming". All five are designed: LYFT `177:18171`, IsHamn `177:18489`, Samā `177:18636`, CortexAI `178:8398`, Livio `179:8514`, each with a share image | Add the ids to 08 §3.5 and P5's inputs | Must fix |
| 3 | Two designer notes aren't named as notes, so a word for word copy could ship them: "To confirm: which case goes behind the password." (Case · Unlocked `146:4195`) and "Content: the Cal.com month view, dark theme" (Mobile booking sheet `150:6388`) | Tell P1 and P2 to skip them | Small |
| 4 | Nike Mind's brief says "micro check-ins", a hyphen in visible copy (08 §5 rule 10) | "check ins" in the build, unless Rez keeps it | Small |
| 5 | Figma has a page ↳ Copy V4a · Pages Archive (`196:12120`): a full copy of the live page with the same frame names, plus the Services bento proposal Rez dropped on 22 Oct | Builds read Figma only by the node ids in 08 (live page `10:3`) | Small |
| 6 | The country still shows through award and school names on Career and About: "Bangladesh" as the National Hackathon's org line, BASIS's full name, and Rajshahi University of Engineering & Technology. Row 50 removed only the city lines | Keep them as facts, or shorten to BASIS and RUET | Rez's call |
| 7 | Rez's global rule keeps `.env` files out of `.gitignore`, while row 89 and 12-handoff §8 keep `.env.local` out of the friend's zip. The zip carries `site/.git`, so a commit that includes the `.env` files carries them too | Matters only if the build goes to the friend. Rez decides what the commit holds | Rule conflict |
| 8 | 07 §5.1 says Cloudflare dropped the 3 MiB gzip Worker limit on 4 Sep 2026; the website-build skill still says 3 MiB. The bundle is 1.8 MB gzip, so it passes either way | Update the skill later (outside this folder) | Small |
| 9 | For the friend's PC only: Figma limits MCP calls on free and view seats, and P5 and P7 read a lot of Figma | Check his seat before the zip goes out | Small |
| 10 | `01-portfolio-rezwebsite/` at the root still holds only a `.git` | Archive it, or leave it out of any zip | Small |

## 5. Size

From 08 §1 and §4: 10 sessions (F and I, then P1 to P7, then R), about 10 to 14 hours elapsed, 27 to 41 session hours and 4.9 to 7.5 million tokens. Rough. Pairing (P1 with P2, P3 with P4, P5 with P6) means fewer sessions, less repeated reading and fewer clashes on the shared dev server, but a longer wait.

## 6. Next steps

| # | Step | Who | Needs |
|---|---|---|---|
| 1 | Figma review and yes | Rez | ↳ V4a · Handoff |
| 2 | Commit `site/` by hand | Rez | §3 item 2 |
| 3 | Apply §4 items 1 to 4 and the stack changes to 08 (the F, P1, P2 and P5 prompts); if the build runs here, mark the friend's PC rows as not used | Claude | Rez's yes |
| 4 | Wave 0: F and I in parallel, from 08 §6 | Two sessions | Steps 1 to 3 |
| 5 | Wave 1: P1 to P7 once F's report says done | Seven sessions, or four paired | F's report |
| 6 | R: joins, security, the full 09 pass, the You check list | One session | Every report |
| 7 | Deploy steps in 08 §10: D1, `AUTH_SECRET`, `npm run deploy` | Rez | R's report |
| 8 | Launch, gate G1: credit lines, CV lines, rezkarim.com, profile fixes (row 77) | Rez | The deploy |
