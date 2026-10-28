# Launch setup plan: rezkarim.com

[README](../../README.md) · Draft · 28 Oct 2026 · Planned by the build coordinator on Rez's ask ("set up everything side by side: analytics, SEO, AEO, GEO, Google, marketing"). Chats never edit this file.

## 1. Goal

rezkarim.com runs with everything a portfolio needs after the deploy: visitors measured, Google, Bing and AI answer engines able to find and cite it, the zone hardened, mail and uptime alerts working, every public profile pointing to it, the launch announced, and the next 10 SEO pages written. All free.

## 2. Rez's decisions (28 Oct, in chat)

| Item | Decision |
|---|---|
| Site email | hello@rezkarim.com, forwarded free to rezkarim.pro@gmail.com by Cloudflare Email Routing; he replies as hello@ from Gmail ("Send mail as"); DMARC starts at p=none so replies stay out of spam; lead alerts on. "Keep things smooth" |
| Launch posts | LinkedIn, Instagram and Behance |
| SEO batch 2 | The next 10 pages written now at `ready`, published 2 weeks after launch |
| Sessions | 4 parallel chats plus 1 final check, under the build coordinator |
| Already decided | No GA4 or Clarity (decision 11); AI crawlers allowed, training included (row 59); Bot Fight Mode off (07 §4.6) |

## 3. Waves and run order

| Wave | Chats | Starts after |
|---|---|---|
| 0 | Rez's deploy in the "Go live on Cloudflare" session (commit, `npm run deploy`, live checks) | Now |
| 1 | S, Z, P, W2 in parallel | Now. Z's code changes wait for wave 0's deploy to finish |
| 2 | V, the final live check | All wave 1 reports say done, and Rez's one redeploy of Z's code changes |

## 4. Chats

All on Sonnet 5.5 at high effort, at the project root, under [common.md](common.md).

| Chat | Brief | Owns | Starts after |
|---|---|---|---|
| S · Search and AI visibility | [chat-s.md](chat-s.md) | Cloudflare dashboard settings for analytics and bots on rezkarim.com; Google Search Console; Bing; IndexNow runs. No code | Now |
| Z · Zone, email and uptime | [chat-z.md](chat-z.md) | Cloudflare security, DNS and Email Routing on rezkarim.com; code: `site/wrangler.jsonc`, `site/next.config.ts` (CSP), `site/src/data/site.ts` (email), `site/.env*`, `site/docs/runbooks/` | Now; code after the wave 0 deploy |
| P · Profiles and marketing | [chat-p.md](chat-p.md) | `17-launch-plan/marketing/`; `site/src/data/seo.ts` `sameAs` only | Now |
| W2 · SEO batch 2 | [chat-w2.md](chat-w2.md) | New files in `site/content/pages/` and `site/content/guides/` only | Now |
| V · Final live check | [review.md](review.md) | Any file, fixes only | Wave 1 and Rez's redeploy |

Reports go to `17-launch-plan/reports/<chat>.md`, first line "done" or "blocked: <why>".

## 5. Kickoff prompts

| Chat | Prompt |
|---|---|
| S | You are chat S. Read 01-portfolio/17-launch-plan/common.md and 01-portfolio/17-launch-plan/chat-s.md and do it. |
| Z | You are chat Z. Read 01-portfolio/17-launch-plan/common.md and 01-portfolio/17-launch-plan/chat-z.md and do it. |
| P | You are chat P. Read 01-portfolio/17-launch-plan/common.md and 01-portfolio/17-launch-plan/chat-p.md and do it. |
| W2 | You are chat W2. Read 01-portfolio/17-launch-plan/common.md and 01-portfolio/17-launch-plan/chat-w2.md and do it. |
| V | You are chat V. Read 01-portfolio/17-launch-plan/common.md and 01-portfolio/17-launch-plan/review.md and do it. |

## 6. What only Rez does

| Action | Where |
|---|---|
| Commit and `npm run deploy` (wave 0), then one redeploy after wave 1 | Terminal in `site/` |
| Click Verify in Google Search Console and Bing; sign in where asked | Google, Bing |
| Confirm the Email Routing destination (a click in the mail Cloudflare sends to his Gmail) | Gmail |
| Create the free UptimeRobot account | uptimerobot.com |
| OK each Cloudflare dashboard save and each public profile edit or post | In the chat that asks |
| Read SEO batch 2 and say which pages go live in 2 weeks | Localhost, then the coordinator |
