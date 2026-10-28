# Common rules for the launch chats

[README](README.md) · Draft · 28 Oct 2026 · Read with your chat file. Rez in chat wins over this file; this file wins over older plans.

## Start

1. You run at the project root, `F:\🚩 CLAUDE\Rez Portfolio Website`. Read `01-portfolio/CLAUDE.md` ("Where things stand"), this file and your chat file. For work in `01-portfolio/site/`, its `AGENTS.md` rules apply.
2. Facts come from `01-portfolio/00-facts.md`, `site/content/claims.ts` and Rez in chat. Never invent a client, number, quote or result.

## Rez's firm rules

3. No git command that writes. Rez commits. No AI attribution anywhere.
4. No deploys and no Wrangler commands that touch Cloudflare (`deploy`, `secret`, `d1 ... --remote`, `versions`, `rollback`): the deny list blocks them. Give Rez the command in its own bash block.
5. Never sign in, create accounts, type passwords or enter payment details. If a page asks for a login while Rez says he's signed in, stop and tell him which page.
6. Cloudflare dashboard, Google, Bing and profile changes: read the form back, then ask Rez before each save or publish. Public posts and profile edits go out only after his OK on the exact text.
7. Browser: BrowserOS only (`mcp__browseros__*`), in your own background tab, closed when done; never Rez's other tabs; never the built-in browser pane. CAPTCHA or 2FA: ask Rez. Work through the tools, not pictures (Rez, 28 Oct): `snapshot` for refs, `read` and `grep` for text, `act` by ref and read the diff it returns as the check, `evaluate` or `run` only for values the tree doesn't show (a dashboard switch's `aria-checked`). No screenshots unless Rez asks.
8. Free tools only. Questions only through the AskUserQuestion picker, 2 to 4 options, the recommended one first and marked (Recommended). Short replies with tables.
9. Voice for any copy: "I", Rez as a designer; never "we" as a studio, founder, CEO or "my agency". No em dash, colon, semicolon or hyphen in visible copy, except names and locked claims. Claims word for word. No city or country for Rez. Taste Labs never appears.

## Working

10. Work directly; no agents. Touch only the files your chat owns. Need a change elsewhere: write it under Requests in your report and tell the coordinator.
11. Code changes (chat Z, chat P's `sameAs`): run the checks for your files, then `npm run check` once at the end. Never run a build while another chat builds: if `npm run build` or `cf:build` fails on `.generated/`, wait and retry. Never stop the dev server on port 3000. Every code change reaches the live site only through Rez's one redeploy after wave 1.
12. Live site: https://rezkarim.com once wave 0's deploy is done. Check it with curl and BrowserOS, read only.

## Finish

13. Report in `01-portfolio/17-launch-plan/reports/<chat>.md`: first line "done" or "blocked: <why>"; what you set (with where), what you checked and the result, what Rez still clicks, open issues, Requests. Then one dated line in "Where things stand" in `01-portfolio/CLAUDE.md`.
