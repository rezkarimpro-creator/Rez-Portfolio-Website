# Growth plan: more clients from rezkarim.com

[README](../../README.md) · Draft · 29 Oct 2026, revised the same day with Rez's answers · Planned by the build coordinator on Rez's ask ("make sure through this website I get the max client, and we optimize everything for that"). Chats never edit this file.

## 1. Goal

Turn rezkarim.com into Rez's best source of clients: more of the right visitors arrive (search, AI answers, profiles, directories), more of them book a call or send a message, and Rez sees every week which channel and page brings leads. Everything free. The work runs biggest client lever first (§3).

## 2. Rez's decisions (29 Oct, in chat)

| Item | Decision |
|---|---|
| Profiles (item 7) | Apply the set: LinkedIn name without the sparkle (Rez re-verifies on Behance), LinkedIn contact email hello@rezkarim.com, phone stays (connections only); Himalayas salary range hidden; Dribbble DashBloom team untouched until the agency's launch |
| Contra | Chat R removes every Fiverr mention now. Fiverr is never named or linked anywhere: site, profiles, posts, directories. Importing all cases into Contra from their Behance links comes later |
| sameAs (the hidden list that tells Google and AI assistants which profiles are Rez's) | LinkedIn and Behance, plus Dribbble, Instagram, and Contra once it's fixed |
| Chat C | Audit first, Rez picks the fixes in a quiz, then C builds only those (§5) |
| Chat G | The full search and AI answers set across every engine, not only Google and Bing (§4). No new pages: batch 3 is skipped; batch 2 still goes live on 11 Nov with Rez's OK |
| Models | Rez's guide: K on Opus 5.5 Extra high; C, G and V on Opus 5.5 High; R on Sonnet 5.5 High |
| Client proof | Rez sends 3 to 5 quotes with name, role, company and his OK to publish; chat R drafts the request he sends to past clients |
| Free templates | Stay as they are; designed later; nudged (§8) |
| Trust line under the main buttons | Saved for the next update |
| Launch posts, Instagram link | Skipped for now |
| Email | hello@rezkarim.com with Rez's photo as the sender picture (`04-headshots/rez-email-avatar-800.jpg`) |
| Figma | Default, not asked: C's visible changes go straight to code and Figma isn't updated unless Rez asks (as with the deck cases, 28 Oct) |

## 3. Where things stand and what's still worth doing

Checked on the live site and in Bing Webmaster on 29 Oct, and from the build reports.

| Priority | Area | Already done | Still worth doing | Who |
|---|---|---|---|---|
| P0 | Lead handling | hello@ receives (tested), lead alert emails, Cal.com booking on every main button | Send mail as hello@, a signature, reply templates, a test message and a test booking | Rez, R |
| P0 | Proof | The Earworm quote, the claims word for word | 3 to 5 named client quotes and a proof block that shows them | Rez, R, C |
| P1 | Conversion | A call to action on every page, one form, the booking modal | Every route to a booking, a message or a CV request tried and the weak spots fixed; a bookings by page and source view in /stats; a tagged link per channel | C |
| P1 | Reach | Every profile has the same headline and links to the site | Contra cleaned; hire signals on LinkedIn, Dribbble and Behance; each Behance project and Dribbble shot links to its case page; LinkedIn Featured; free directories | R |
| P2 | SEO | 56 URLs in the sitemap with dates (Bing: success, 56 found), titles, canonicals, JSON-LD on every page type, Search Console and Bing verified, IndexNow sends only changed URLs | Rich results validated, indexing gaps found and requested, internal links, batch 2 live on 11 Nov | G |
| P2 | AEO (pages that answer questions) | Guides have an answer box, FAQ with FAQPage, byline, dates and contents; Hire, Industry and Contact have FAQPage; About is a ProfilePage | Answer first openings where missing, `dateModified` on every content page, FAQ blocks on the 5 service pages if Rez picks them in C's quiz | G, C |
| P2 | GEO (named in AI answers) | robots.txt allows every AI crawler and Cloudflare blocks none; llms.txt (7.7 KB) with the claims; sameAs LinkedIn and Behance | sameAs plus three profiles; a baseline of what ChatGPT, Perplexity, Google AI, Copilot, Gemini, Claude and Brave answer to buyer questions today, re-run monthly; Bing's AI Performance report; mentions on other sites (R) | G, R |
| P2 | Speed | The server answers in about 50 ms (from this PC), HTTP/3 on, first paint 0.58 s measured; simulated mobile Lighthouse 81 to 90 (LCP 3.6 to 5.0 s simulated, mostly JavaScript before paint) | Mobile 90+, real LCP under 2.5 s, fonts and CSS within budget, Cloudflare speed settings, real visitor Core Web Vitals | K |
| P3 | Other engines | IndexNow pings Yandex, Seznam, Naver and Yep on every send | Optional webmaster accounts (§4) | G, Rez |

## 4. Every search engine and AI assistant (Rez: "why only Google and Bing")

Most engines and assistants answer from Google's or Bing's index, so those two plus open crawling reach nearly everyone. The rest have no form to fill or already get IndexNow pings.

| Engine or assistant | Where its answers come from | What we do | Priority |
|---|---|---|---|
| Google Search, AI Overviews, AI Mode, Gemini | Google's index | Search Console (set up): G checks Pages, validates rich results, requests indexing | P1 |
| Bing, Copilot, DuckDuckGo, Yahoo, Ecosia, Qwant | Bing's index | Bing Webmaster (set up, sitemap success): G checks indexing and reads the AI Performance report | P1 |
| ChatGPT search | Bing plus OpenAI's crawler (allowed) | G records whether it names Rez today, then monthly | P1 |
| Perplexity | Its own crawler (allowed) plus other indexes | Same | P1 |
| Claude | Brave's index plus Claude's crawlers (allowed) | Same; Brave finds sites through links, which R's profiles and directories add | P2 |
| Brave Search | Its own index | No submission form exists: links and visits | P2 |
| Meta AI, Apple (Siri, Spotlight, Safari) | Their own crawlers (allowed) plus search partners | Nothing to submit | P3 |
| Yandex, Naver, Seznam, Yep | Their own indexes | IndexNow already pings them; optional Yandex Webmaster and Naver Search Advisor if Rez signs up (5 minutes each), G verifies with a file | P3 |
| Common Crawl | Open web archive many AI models learn from | Its crawler is allowed | Done |
| Baidu | Its own index | Skip: it needs a Chinese phone number and has no audience for Rez | Skip |

## 5. How chat C works (Rez asked)

1. **Try it like a client.** C opens the live site on a phone and a desktop and follows every route to the three goals (book a call, send a message, ask for the CV) from each kind of page: Home, Work, a case, a service page, a Hire role, an Industry page, a Deliverable, a guide, About, Free. It counts the clicks and notes dead ends, weak or missing buttons, missing proof and anything that breaks on a phone. No code yet.
2. **A ranked list.** `reports/c-funnel.md`: each problem with its fix, the goal it helps, whether visitors would see a change, any new words (marked "new") and the effort.
3. **You pick.** C asks in a quiz which fixes to make. Pick all, some or none; new words are shown word for word for your OK.
4. **It builds only your picks**, plus three helpers visitors don't see: a tagged link per channel (so /stats shows which channel sends leads), a bookings and messages by page and source view in /stats, and the quotes block, which stays empty until you send quotes.
5. **You look on localhost**, then redeploy once with K's and G's work.
6. **It pays off in the weekly review**: two weeks later /stats shows whether bookings per page and source went up. No A/B tests: too few visits for them to mean anything yet.

## 6. Waves and run order

| Wave | Who | Starts after |
|---|---|---|
| 0 | The coordinator: finished sessions closed, hello@ checked, the email photo, the nudges, this plan | Done |
| 1 | C (audit, Rez's picks, build), K, G and R in parallel | Rez's go |
| 2 | Rez redeploys C's, K's and G's code in one go | C, K and G report done |
| 3 | V, review and end to end check | The redeploy |
| 11 Nov | Batch 2 goes live: Rez's OK, a small redeploy, IndexNow | The nudge |

## 7. Chats

All at the project root, under [common.md](common.md). Reports go to `18-growth-plan/reports/<chat>.md`, first line "done" or "blocked: <why>".

| Chat | Model, effort | Brief | Owns | Starts after |
|---|---|---|---|---|
| C · Conversion | Opus 5.5, High | [chat-c.md](chat-c.md) | Pages, the sections, work, forms, booking, stats, templates, layout (dock, footer) and ui components, a new `proof/`, data files except `site.ts` and `seo.ts`, the Stats reads, `/api/track`, `marketing/links.md` | Wave 1 |
| K · Speed | Opus 5.5, Extra high | [chat-k.md](chat-k.md) | Providers, `motion-features.ts`, `sound.ts`, the root `layout.tsx`, `motion.css`, `base.css`, speed scripts, `docs/performance.md`, Cloudflare speed settings (each with Rez's OK) | Wave 1 |
| G · Search and AI answers | Opus 5.5, High | [chat-g.md](chat-g.md) | `content/**`, `src/lib/seo/`, `src/lib/content/`, `src/components/seo/`, `seo.ts`, the sitemap, robots, llms.txt and feed routes, `scripts/indexnow.mjs`, verification files, `publish-content.md`, `marketing/geo-baseline.md` | Wave 1 |
| R · Reach | Sonnet 5.5, High | [chat-r.md](chat-r.md) | Rez's profiles, directory submissions, Gmail and Cal.com settings (each with his OK), `marketing/reach.md`, `quote-request.md`, `replies.md`. No code | Wave 1 |
| V · Review and end to end | Opus 5.5, High | [review.md](review.md), [e2e.md](e2e.md) | Any file, fixes only | The redeploy |

## 8. Nudges and the next update

| When | Nudge or item | Set |
|---|---|---|
| 4 Nov 2026 | Free templates: design the 10-Slide Story Deck and the LinkedIn Profile Kit; client quotes if not sent | Scheduled in the app |
| 5 Nov 2026 | Search Console first look: Pages and Performance | Scheduled in the app |
| 11 Nov 2026 | SEO batch 2 goes live (Rez reads `17-launch-plan/reports/w2.md` first) | Here only: the permission check blocked the schedule |
| 12 Nov 2026 | DMARC: read two weeks of reports. Stay at p=none while Rez sends as hello@ through Gmail's SMTP, because Gmail signs those mails as gmail.com and they can't pass DMARC for rezkarim.com; p=quarantine would send his replies to spam | Here only |
| Every Monday | The weekly growth review in [weekly-review.md](weekly-review.md); the first Monday of each month adds the AI answers re-check | Here only: blocked |
| Next update | Trust line under the main buttons ("Open for new projects. Replies within a day.", Rez to confirm the wording); free templates live on Gumroad | |

## 9. Kickoff prompts

| Chat | Prompt |
|---|---|
| C | You are chat C. Read 01-portfolio/18-growth-plan/common.md and 01-portfolio/18-growth-plan/chat-c.md and do it. |
| K | You are chat K. Read 01-portfolio/18-growth-plan/common.md and 01-portfolio/18-growth-plan/chat-k.md and do it. |
| G | You are chat G. Read 01-portfolio/18-growth-plan/common.md and 01-portfolio/18-growth-plan/chat-g.md and do it. |
| R | You are chat R. Read 01-portfolio/18-growth-plan/common.md and 01-portfolio/18-growth-plan/chat-r.md and do it. |
| V | You are chat V. Read 01-portfolio/18-growth-plan/common.md, 01-portfolio/18-growth-plan/review.md and 01-portfolio/18-growth-plan/e2e.md and do it. |

## 10. What only Rez does, by priority

| Priority | Action | Where |
|---|---|---|
| P0 | Send mail as hello@rezkarim.com (Google app password) | Gmail, Settings, Accounts |
| P0 | Create a free Google account for hello@rezkarim.com and upload the photo | accounts.google.com, "Use your existing email" |
| P0 | Send a test form message, a test mail in and out, and book one real test slot | rezkarim.com/contact, Gmail |
| P0 | Send the quote request (R drafts it) and pass 3 to 5 quotes back | Your email or LinkedIn, then the coordinator's chat |
| P1 | The go for wave 1 | The coordinator's chat |
| P1 | Answer C's pick quiz; OK each profile save, Gmail or Cal.com setting and directory submission | In chats C and R |
| P1 | One redeploy after C, K and G | Terminal in `site/` |
| P2 | UptimeRobot (free) | `site/docs/runbooks/uptime.md` |
| P2 | Re-verify LinkedIn on Behance after the name change | Behance |
| P3 | Optional: Yandex Webmaster and Naver Search Advisor sign up | When G asks |
| Later | Contra case import from Behance links, free templates, trust line, launch posts, the Instagram link, retiring the old test site rezz.dashbloom.design | |
