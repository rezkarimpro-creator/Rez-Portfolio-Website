# For Rez: everything that needs you

[README](../../README.md) · Open · 27 Oct 2026 · The one file with every action and decision only Rez can take, gathered from the final review and the eight planning tracks in [planning/](planning/README.md). Everything else Claude fixes without asking (§5).

**28 Oct, build done:** the review pack is in §6; start there. **Answered 27 Oct:** Rez accepted every recommended answer in §2. **28 Oct, one go build:** nothing here blocks the build. The chats take the recommended default for every open item and log it; Rez answers everything in the review phase, from §6.

## 1. Do now (your clicks)

| # | Action | Why | Where and how | Time |
|---|---|---|---|---|
| A0 | Open BrowserOS | It was closed on 28 Oct, and every build chat needs it for page checks; chats connect when they start | Start the BrowserOS app before the build | 1 min |
| A1 | Answer the question waiting in the session "Plan posting and site operations" | It asks to upload one Preview test to your Cloudflare account. Answer "Not now": decision 25 keeps every Cloudflare action yours, so chat F only writes the script, and after launch you run the test yourself from the staging runbook | That session, in your sidebar | 1 min |
| A2 | Give the live Stats password and sign in key new values | **Left for later (28 Oct); do it before your first commit or deploy.** The 21 Oct deploy packed `site/.env.local` into the live Worker, and your commit would hold the same values. New values make the old ones useless. It doesn't redeploy the code or touch the domain | Terminal, the two commands below. Type the new Stats password from your password manager when asked; nobody needs to know the sign in key | 2 min |
| A3 | Commit `site/` as it is | One clean starting point for the build's review (row 75). **Left for later (28 Oct):** Rez said build without waiting, so the starting point is recorded as a git tree in [baseline.md](baseline.md); commit the finished build after R instead | Terminal, the command below, after A2 | 1 min |
| A4 | Check the profile at himalayas.app/@rezaulkarim10 | Google shows it as "Rezaul Karim, Presentation Designer, AI Training". If it's yours, it ties your name to the role the site hides (hard rule 3) | Edit or delete it there | 5 min |
| A5 | Rename the Cal.com event to "Strategy call" | Row 43, still open | Cal.com event settings; the link stays | 2 min |
| A6 | Test address | Done 28 Oct (Rez): the build deploys to **rezkarim.dashbloom.design** as a new Worker `rezkarim-site`. The 21 Oct site stays on rezz.dashbloom.design under its old Worker `rezkarim-portfolio`, untouched. The A2 commands run against the new Worker at the first deploy (the deploy runbook has the order) | — | — |
| A7 | Approve the four Figma sessions | Done 28 Oct: every Figma round is finished | — | — |
| A8 | Choose how the build runs | Done 28 Oct: one go, from a fresh build coordinator session with 5 build chats as its children; R and O run inside the coordinator. Rez's plan has 5x Pro limits; if the wave reaches the cap, sessions wait for the reset and carry on | — | — |

```bash
cd "F:/🚩 CLAUDE/Rez Portfolio Website/01-portfolio/site" && npx wrangler secret put STATS_PASSWORD
```

```bash
cd "F:/🚩 CLAUDE/Rez Portfolio Website/01-portfolio/site" && node -e "process.stdout.write(require('crypto').randomBytes(32).toString('base64url'))" | npx wrangler secret put AUTH_SECRET
```

```bash
cd "F:/🚩 CLAUDE/Rez Portfolio Website/01-portfolio/site" && git add -A && git commit -m "Site as live on 21 Oct, before the V4a build"
```

## 2. Decisions

Recommended answers are in **bold**; other options follow. "From" names the planning file with the detail.

### 2.1 Plan, stack and sessions

| # | Question | Options | From |
|---|---|---|---|
| 1 | The stack | **a. Keep Next.js 16 on Cloudflare Workers with D1, plus patch bumps (Next 16.4.3, React 19.3.1, OpenNext 1.20.13, Wrangler 4.153.0, Motion 14.7.1), Cache Components off everywhere so tests match the live site, and the content layer (one file per case, post or page)** · b. Bumps only · c. No changes | [14 review](../14-pre-build-review.md) §2, [README](README.md) §5 |
| 2 | Build sessions | **a. F first; then B, C, D, E and W1 together, W2 taking the place of the first to finish; then R. 10 sessions in all, never more than 5 at once. All on Opus 5.5 Extra high; B (sign in, data) and R (final review) on Max** · b. All on Extra high, none on Max · c. Fewer sessions, longer wait | [README](README.md) §6 |
| 3 | Where the site's rules live | **a. `site/` is the repo. The site rules move into `site/AGENTS.md`; Antigravity reads it directly, Claude through a one line `site/CLAUDE.md`, and the root CLAUDE.md links to it** · b. Rules stay in the root CLAUDE.md only · c. A copy in both | [best-practices](planning/best-practices.md) Q1, [operations](planning/operations.md) Q3 |
| 4 | Senior developer standard | **a. Yes: folders by kind, kebab-case names, Prettier, ls-lint, `.editorconfig`, a Node pin, error logging, a full docs set and decision records in `site/docs/`, and a one hour onboarding test after the build (adds 1 to 1.5 h to F)** · b. Lighter: README and runbooks only | [best-practices](planning/best-practices.md) §1 to §4 |

### 2.2 The SEO pages

| # | Question | Options | From |
|---|---|---|---|
| 5 | The 100 page goal. Research found real proof for 38 pages today, 53 once the facts in §3 arrive | **a. Publish only pages with proof, and add more as cases, templates and facts arrive** · b. Fill to 100 now with thinner pages (Google demotes sites that mass publish thin pages) | [seo](planning/seo-aeo-geo.md) Q3, [page map](planning/seo-page-map.md) |
| 6 | Rollout | **a. 20 new pages at launch, then 10 every 2 weeks, led by Search Console** · b. 40 at launch · c. All 38 at launch | seo Q1 |
| 7 | Hire pages for recruiters | **a. A /hire hub and 4 roles: brand, presentation, web, product** · b. Hub only · c. 8 roles | seo Q2 |
| 8 | Address for guides (your "blog") | **a. `/guides/<slug>`** · b. `/blog/<slug>`. Both work equally for search; "guides" reads as useful answers | seo Q7 |
| 9 | Guides both your sites could write | **a. The portfolio writes "X designer" questions, the agency site "agency" and "services" ones; the freelancer or agency comparison lives on the portfolio** · b. The portfolio owns them all · c. The agency owns them all | seo Q4 |
| 10 | Contact form | **a. Add timeline chips and optional budget ranges (Figma gets the new frames)** · b. Timeline only · c. No change | seo Q5 |
| 11 | GA4 and Microsoft Clarity | **a. Neither: Search Console, Bing, Cloudflare Web Analytics and /stats are free and cookieless** · b. A 2 week Clarity trial after launch, behind consent · c. GA4 | seo Q6 |
| 12 | Another Rezaul Karim ranks first for "Rezaul Karim designer" | **a. Add RezBloom as an alternate name in the site's data, plus one About line that ties your name to the handle** · b. Data only · c. Leave it | seo Q8 |
| 13 | Profiles that rank for "hire" searches | **a. Update Contra, and apply to Framer Experts if you qualify, each linking to rezkarim.com** · b. Contra only · c. Not now | seo Q9 |
| 14 | Delineate on deck and SaaS pages | **a. The scope line from 00-facts: "At Delineate (YC W25) I designed the SaaS product, the website and the investor deck as one system"** · b. The name only | seo Q10 |
| 15 | Numbers in cost guides | **a. Explain what drives the cost and link your offers page, with no price ranges (prices stay on /work-with-me)** · b. Also quote one dated public range with its source | seo Q11 |

### 2.3 Posting later and running the site

| # | Question | Options | From |
|---|---|---|---|
| 16 | How you post cases, guides and pages later | **a. Ask Claude or Antigravity. They write one content file, run the checks, show a preview and wait for your OK. MCP comes later only as a thin wrapper of the same checks** · b. Build the MCP server now (+3 to 5 h) · c. A Keystatic form · d. A Notion sync | operations Q1 |
| 17 | How changes go live | **a. You run `npm run deploy` by hand** · b. Push to GitHub and Cloudflare deploys · c. GitHub Actions with a Cloudflare token | operations Q2 |
| 18 | Staging after launch | **a. `cf:preview` on your PC, plus Previews on rezz.dashbloom.design** · b. Previews on workers.dev · c. A staging Worker behind Cloudflare Access · d. Local only | operations Q4 |
| 19 | How closely you review each batch of 10 pages | **a. Every row of the batch table plus 2 pages in full** · b. All 10 in full · c. Titles only | operations Q5 |
| 20 | Who switches a page to live | **a. Claude or Antigravity, right after your OK; you commit** · b. You edit the status line yourself | operations Q6 |
| 21 | Uptime alerts | **a. UptimeRobot free, by email** · b. None · c. A Cloudflare cron Worker that emails you | operations Q7 |
| 22 | Antigravity's global rules | **a. `~/.gemini/AGENTS.md` includes your `~/.claude/CLAUDE.md`, so one source** · b. A separate copy · c. None | operations Q8 |

### 2.4 Security

| # | Question | Options | From |
|---|---|---|---|
| 23 | When to replace the Stats password and sign in key | **a. Now, before your baseline commit (§1 A2)** · b. At the first deploy after the build | [security](planning/security.md) Q1 |
| 24 | Turnstile, Cloudflare's free human check, on the forms | **a. Built behind a switch, off until spam shows in /stats** · b. On from launch · c. Not built | security Q2 |
| 25 | Hard guard rails for AI sessions on your PC | **a. A deny list in the project's Claude settings: no deploys, no Wrangler commands that touch Cloudflare, no git commit or push, no Cloudflare connector writes** · b. Written rules only | security Q3 |
| 26 | How long a Stats sign in lasts | **a. 7 days** · b. 30 days | security Q4 |

### 2.5 Privacy and accessibility

| # | Question | Options | From |
|---|---|---|---|
| 27 | How long messages and preview requests are kept | **a. 24 months after the last contact, then deleted** · b. 12 months · c. Until you delete them | best-practices Q2 |
| 28 | The inline Cal.com calendar on /contact sets cookies before visitors choose | **a. Load it on a click on its placeholder (also the biggest speed fix there)** · b. Only after Allow · c. As now, named on the privacy page | best-practices Q3 |
| 29 | Where you review the build against the design | **a. A "QA · Build vs design" page in Figma, each build screenshot beside its frame** · b. A markdown report · c. Only on the test site | best-practices Q4 |
| 30 | Accessibility statement | **a. A short /accessibility page, linked in the footer, noindex** · b. A section in /privacy · c. None | best-practices Q5 |

### 2.6 Figma and design

| # | Question | Options | From |
|---|---|---|---|
| 31 | Wrong password lines (Figma shows a filler line today) | **a. Recruiter case: "That password didn't work. Try again, or ask for my CV." Stats: "Wrong password. Try again."** · b. One line for both: "Wrong password. Try again." · c. Your words | [figma B](planning/figma-b-desktop-pages.md) Q1, [figma C](planning/figma-c-cases-assets.md) Q4 |
| 32 | The 15 states with no frame (Work filter and empty, Stats tooltip, table and empty, role menu open, invite form errors and sending, three phone states) and a 500 page | **a. Claude draws them from existing components; new copy is marked for you** · b. Build them without frames | figma B Q4 |
| 33 | Nike Mind brief "micro check-ins" | **a. "micro check ins"** · b. Keep the hyphen | figma C Q5 |
| 34 | The archive copy page in Figma | **a. Keep it, renamed "Archive · V4a pages copy (22 Oct)", with a "not the live design" note** · b. Delete it (version history keeps it) · c. Leave it | [figma D](planning/figma-d-responsive-handoff.md) Q1 |
| 35 | Tablet frames | **a. Write the rule "tablet = the desktop column, centred", since every page is one 700px column** · b. Draw about 12 more tablet frames | figma D Q2 |
| 36 | Filter chips on phones | **a. 40px to the eye, 44px tap area in code** · b. 44px tall in Figma | figma D Q4 |
| 37 | Field edges are faint (1.3 to 1, the guideline is 3 to 1) | **a. Brighten field and select edges to about 40% white** · b. All edges · c. Keep them | [figma A](planning/figma-a-design-system.md) Q2 |
| 38 | If text fails contrast over a bright part of your photo (R measures it) | **a. Darken the card glass only as much as needed** · b. Darken the photo behind the cards · c. Accept the fails | figma A Q1 |
| 39 | Your country shows through award names on Career and About ("Bangladesh" as the hackathon's org line, BASIS's full name). RUET's full name stays (07 §4.2) | **a. Shorten to "BASIS" and drop the separate "Bangladesh" line** · b. Keep as is | [14 review](../14-pre-build-review.md) §4 item 6 |

### 2.7 Credits and content (gate G1, can wait)

| # | Question | Options | From |
|---|---|---|---|
| 40 | Open To confirm values: the Real estate client name, SyncGrid's studio, CargoShift's and Pulse's roles, DashBloom on any new case, whether CargoShift is B3 | **a. Launch with them hidden; answer later** · b. Answer them now | figma C Q1 |
| 41 | The 21 My role lines as drawn (the Cases table in figma C) | **a. Approve all as drawn** · b. Approve with the edits you list | figma C Q2 |
| 42 | Images under 1400px wide (IsHamn, Livio, ReSpace rs-05, CortexAI cx-04) | **a. Ship as is, no upscaling** · b. You send larger originals | figma C Q3 |
| 43 | The Earworm quote's name line says "Founder & CEO, Earworm"; row 80 says "Founder & CEO" | **a. Keep it; it adds the company** · b. Match row 80 exactly | figma C finding 15 |

### 2.8 New from the Figma fixes (28 Oct, answered: all recommended)

| # | Question | Options | From |
|---|---|---|---|
| 44 | The old image on the Figma Cover page is a screenshot of another designer's portfolio ("Hi, I am Dasha"), now labelled "Reference only" | **a. Move it to the Mobbin references page** · b. Delete it | figma D, 1.1 |
| 45 | Footer links | **a. Guides under Pages, Hire under More (beside Work with me and For agencies), as drawn** · b. Both in one column | figma A, round 2 |
| 46 | New interface words: "By", "Updated", "Related", "On this page", "Skip to content", "Timeline · optional", "Budget · optional", and the budget ranges "Under $1k", "$1k to $3k", "$3k to $10k", "$10k and up", "Not sure yet" | **a. Approve as drawn** · b. The edits you list | figma A, round 2 |
| 47 | The live lightbox shows a counter "1 / 6" beside the caption "Earworm investor deck · 2 of 7" | **a. Keep only the caption (09 §3 asks for "Case · n of N") and drop the counter** · b. Keep both, matched | figma A, round 2 |
| 48 | The dock on the new templates | **a. Hire under About, Industry and Deliverable under Work, Guides with none active** · b. Your mapping | figma A, round 3 |

### 2.9 Defaults used in the new templates (28 Oct; say so only if you want one changed)

| Item | Default |
|---|---|
| The breadcrumb label for `/for` | "Industries" |
| The proof line on the Hire hub | "300+ client reviews"; the role pages use the Earworm line |
| The eyebrow on cost and comparison guides | "Comparison" |
| "Problems I solve" on Industry pages | Written at build from the cases' own briefs; Figma shows placeholders, nothing invented |
| All copy on the 7 templates | Sample copy, marked as such; the live pages take their words from the content files you approve |

### 2.10 New copy to confirm (figma-b, 28 Oct)

Each line is marked "Copy to confirm (Rez)" in Figma. Recommended: **a. Approve all as drawn** · b. The edits you list.

| Where | Copy |
|---|---|
| About (decision 12) | "I'm Rezaul Karim, and online I go by RezBloom on LinkedIn, Behance, Dribbble and Instagram." |
| Work, empty filter | "No cases here yet" · "Try another filter, or see all my work." |
| Stats (private), empty and cookie labels | "No visits yet" · "Counts start with the first visit." · "No views yet" · "Nothing yet" · "Allow", "Only essential", "No choice yet" |
| LinkedIn invite form error | "Add your LinkedIn link, so I can design from it." |
| 500 page | "Something went wrong on my side." · "Try again in a minute. The work and the contact page are one click away." |
| /accessibility (decision 30) | Sections "What I aim for", "How I check it", "Known gaps", "Tell me about a problem"; read the body in Figma (frame `291:11249`) |
| LinkedIn invite, the four hidden tiles | Now an even grid instead of the old masonry |

## 3. Facts only you have

| # | I need | Used for |
|---|---|---|
| F1 | The tools you use: Figma, Framer, PowerPoint, Keynote, Google Slides, Illustrator, Photoshop, others | Hire and deck pages; only confirmed tools appear |
| F2 | Any Webflow work you can show? | One deliverable page waits on it |
| F3 | The industries of LYFT, Livio, ReSpace and IsHamn, and whether Pulse is telecom or travel | Industry pages and case tags |
| F4 | Are the RezBloom Facebook and X profiles yours? | Linking them to you in the site's data |
| F5 | Your Figma seat type | Likely fine: the Figma sessions made hundreds of calls without hitting a limit. Skip unless you know it's a free seat |
| F6 | The test address | Answered 28 Oct: rezkarim.dashbloom.design (§1 A6) |
| F7 | Optional: confirm the 4 invite tiles (Idriss Benbassou, RevPilot, The Venture GrowthHub, "Python developer") | Row 29; they stay hidden until then |

## 4. Later (no answer needed now)

| Item | When |
|---|---|
| Buy rezkarim.com and add it to Cloudflare (row 72) | Launch |
| Cloudflare's free security settings: a rate limit rule, a scanner block rule, TLS 1.2 minimum, DNSSEC, SPF and DMARC ([security](planning/security.md) §5.5) | Launch |
| Sign ups: Search Console, Bing Webmaster Tools, Cloudflare Web Analytics, UptimeRobot | Launch |
| Profile fixes (row 77): LinkedIn, Behance, Dribbble and Instagram names and links, and the two Behance images | Before launch |
| Every credit line (G1) and the CV contact lines ([11-cv-updates.md](../11-cv-updates.md)) | Before launch |
| Behance's SolVita credits still name DashBloom, while the site calls SolVita your own client | Your call |
| `03-shared-plan` still says "Monthly Design Team" and offers a "client under NDA" label | Your call |
| CONTEXT.md in the plan repo says BrowserOS runs on port 9200; your config uses 9000 | Fix there |
| The empty GitHub clone `01-portfolio-rezwebsite/`: `site/` can be pushed to it (decision 3), then the folder archived | After the build |
| In the Figma app, since the API can't: set the Cover frame as the file thumbnail, set the dock and the invite's sticky CTA to Fixed position, mark the V4a sections Ready for dev, save a named version | After Figma round 3 |
| Create `~/.gemini/AGENTS.md` with the text chat F gives (decision 22) | Before you use Antigravity |
| Update Contra, and apply to Framer Experts if you qualify (decision 13) | When convenient |
| The held version updates: Wrangler 4.153.0 (from 2 Nov) and Motion 14.7.1 (from 3 Nov); R installs the ones already 7 days old | Ask Claude after those dates |
| The old 21 Oct site on rezz.dashbloom.design: keep, retire, or turn it into the Preview host after launch (decision 18) | After launch |
| One day after the first deploy: Workers > Metrics, look for "Exceeded CPU" (free plan, 10 ms per request) | After the first deploy |

## 6. Review pack (filled by the build coordinator, 28 Oct 2026)

Everything Rez needs for the review phase, in one place. The build is done and checked ([08-build-reports/r.md](../08-build-reports/r.md)); nothing is committed or deployed. The onboarding test (O) passed in 12 minutes ([onboarding-test.md](../08-build-reports/onboarding-test.md)). Work through 6.1 to 6.3, answer in the coordinator's chat, then run 6.4.

### 6.1 Pages to review

Run the site with `npm run dev` in `site/` (http://localhost:3000, shows To confirm values in amber and the preview only items) or `npm run cf:preview` (http://localhost:8787, the Worker as it ships, notes hidden). The Figma page "QA · Build vs design" (`320:2`) shows each template beside its frame, with the differences that are left.

| Page | Localhost | Figma (desktop · phone) | Look at |
|---|---|---|---|
| Home | http://localhost:3000/ | `82:8363` · `149:4630` | Hero, Proof 2 by 2 on phones, Selected work order, the services accordion, archive rows, the darker card glass |
| Work | http://localhost:3000/work | `82:8477` · `149:5035` | Filters and empty state, SolVita across the row under Earworm and the Real estate website, On request 2 by 2 |
| A case (all 21 share the template) | http://localhost:3000/work/earworm | `82:8639` · `149:15858` | Hero, My role (no labels or years), lightbox, the Related card (not in the frame), Next case. Each case's own frame is on the Handoff page |
| The 21 cases | /work/earworm, /work/real-estate-website, /work/solvita, /work/nike-mind, /work/syncgrid, /work/cargoshift, /work/pulse, /work/yumyum, /work/alpha, /work/taif, /work/gravix, /work/azora, /work/nexus, /work/bristo, /work/orion, /work/respace, /work/lyft, /work/ishamn, /work/sama, /work/cortexai, /work/livio | Handoff page | Copy, alt text, the 14 new descriptions and search titles |
| Service pages | http://localhost:3000/brand, /product, /decks, /social, /linkedin | `82:9012`, `82:9068`, `82:9121`, `82:9176`, `82:9231` · `149:16257` | Cases (YumYum on /brand and Orion on /product replace SolVita), the new Related card to the deliverable pages |
| About | http://localhost:3000/about | `82:9439` · `149:16821` | The RezBloom line, the new portrait (centred on phones) |
| Career | http://localhost:3000/career | `82:8552` · `149:5387` | Highlights with tags on phones, BASIS, no Taste Labs |
| Contact | http://localhost:3000/contact | `82:9286` · `149:16493` | One form, the menus, Timeline and Budget after a role, the calendar placeholder |
| Free templates | http://localhost:3000/free | `82:9522` · `149:17063` | Template rows (Coming soon until Gumroad) |
| Work with me | http://localhost:3000/work-with-me | `82:9560` · `149:17268` | Offers and prices, the two hidden FAQs (preview only) |
| For agencies | http://localhost:3000/agencies | `82:9612` · `149:17529` | The new closing card "Try it on one real brief" |
| Privacy | http://localhost:3000/privacy | `82:9658` · `149:17740` | The new lines (session storage, Cal.com warm up, 24 months) |
| Accessibility | http://localhost:3000/accessibility | `291:11249` · `294:11525` | How I check it and Known gaps, rewritten to what was tested |
| 404 and 500 | http://localhost:3000/nope, http://localhost:3000/dev/throw | `82:9687` · `149:17902`, `291:11160` · `294:11372` | Copy and buttons |
| Stats (yours) | http://localhost:3000/stats | `144:14107` · `149:18053`, dashboard `82:9702` | Sign in with the test password in `site/.dev.vars`; dashboard, chart, messages from the tests |
| Recruiter case | http://localhost:3000/work/private | `82:8992` · `149:16081` | Locked, wrong password, unlocked |
| LinkedIn invite | http://localhost:3000/linkedin/invite | `92:2862` · `93:3126` | Slider, perks, FAQ, form, the four hidden tiles (preview only) |
| Hire hub and roles | http://localhost:3000/hire, /hire/brand-designer, /hire/presentation-designer, /hire/web-designer | `270:8779` · `275:9688`, `270:9148` · `276:9875` | Ask for my CV carries the role into Contact |
| Industries | http://localhost:3000/for, /for/saas, /for/real-estate | `270:9459` · `276:10145`, `271:9078` · `276:10337` | Problems, proof (concepts under the years claim) |
| Deliverables | http://localhost:3000/decks/saas-pitch-deck, /brand/logo-design, /product/dashboard-ui-design, /linkedin/banner-design | `271:9385` · `276:10623` | Send a message opens Contact with the service picked |
| Guides | http://localhost:3000/guides and the 8 guides: /guides/pre-seed-pitch-deck, pitch-deck-slides, 10-20-30-rule, pitch-deck-designer-cost, brand-designer-cost, how-long-brand-identity-takes, brand-identity-process, how-to-brief-a-designer | `272:9421` · `276:10906`, `272:9641` · `276:11113` | Answer first, sources, the related case and service |

W's batch table (main question, first sentence and proof line per page) is in [w.md](../08-build-reports/w.md). The cases and the 20 pages are at `ready`: a production build shows none of them until you say OK and a session flips them to `live` (decision 20).

### 6.2 Defaults the chats took

Change any by saying so in the coordinator's chat.

| Item | Default used | From |
|---|---|---|
| Card and dock glass (decision 38) | Card 74% black (was 40%), dock and cookie banner 78% (was 50%): the least that passes AA over the brightest photo spot. Lighter option: 58% with tertiary text at #9097a3 | R |
| G then S opens /stats for any keyboard (a level A accessibility rule) | Kept as built | R |
| SolVita on /brand and /product (ordering rule) | YumYum and Orion in its place | R |
| "300+ client reviews" over mixed client and concept tiles (/hire, /hire/web-designer, /for/real-estate) | Kept; the three all concept pages lead with the years claim | R |
| Case search titles for the 14 new cases | Name plus scope, e.g. "YumYum Japanese restaurant brand identity" | R |
| Case Related card (not in the frame) | Kept, below the quote | R |
| Timeline and Budget chips | Only after Founder or team or Something else is picked | B, R |
| Industry pages' Send a message | Contact with Founder or team picked | R |
| Stats sign in note | "7 days" (Figma said 30) | B |
| New interface copy in `src/data/contact.ts` and `stats.ts` (Link field, privacy line, role helper lines, send errors, "Show the calendar", list names, lead source line, Qualified marks) | Written in the site's voice | B |
| Owner chip under 400px | Icon only, count as a badge | B |
| Cal.com warm up on hover, focus or touch of a Book button | On (07 §5.8); now named on /privacy | B |
| Daily view cap | 20,000 a UTC day | B |
| Retention | Messages 24 months after the last one; views and events 25 months; the visitor hash 90 days | B |
| "I'm reaching out as" options | Founder or team, Recruiter, Agency, Something else | B |
| Turnstile and lead alerts | Built, both off | B |
| The 21 cases go live | All `ready` until your OK | C |
| The 14 new descriptions and 88 alt texts | Written from each frame's own lines and the images | C |
| Industry and deliverable tags on cases | Only from each case's own words; LYFT, Livio and Pulse have no industry (§3 F3) | C |
| Internal `kind` for the 12 To confirm cases | `concept` (never shown) | C |
| YumYum in the Social filter | Yes | C |
| Lightbox arrows on phones and the count | Arrows shown; the count is gallery images only ("2 of 6") | C |
| Images under 1400px | Shipped at their own size (decision 42) | C |
| RezBloom line on About | Shown as drawn | D |
| Archive Previous and Next tiles | Added (accessibility) | D |
| Work with me revisions and payment FAQs, the recruiter case card, the 4 invite tiles | Hidden live, shown on the preview with a note (rows 34, 40, 29) | D |
| Back tiles | Service pages to `/#services`, Career to `/about` | D |
| Career highlights | 4, then Show more | D |
| Ambient loops | 60 second cuts at 64 kbps (listen in `public/audio/` against `assets/audio/`) | E |
| Template interface words | As drawn on the round 3 frames; "See all work" everywhere | E |
| Guide share image line | "N minute read" | E |
| `icon.svg` | The RK mark from Icon · 32 | E |
| Speed trials needing your eye (no card blur on phones, scroll driven reveals, Newsreader without optical sizes) | Not run; today's look kept | E |
| /linkedin/banner-design proof | Pulse and SyncGrid, years claim; Sam not named | W |
| Tools on Hire pages | Hidden until §3 F1 | W |
| Framer on /hire/web-designer | Said; SolVita not cited | W |
| "2 to 3 weeks" brand timeline, the process steps, the deck range | From /agencies and How I work | W |
| Source dates in guides | The day read (28 Oct) | W |
| Next 16.4.3 and the other held updates | Wait for the 7 day rule (dates in r.md) | F |
| Rate Limiting bindings | Kept; remove if the first deploy refuses them | F |
| Old docs to archive | `document_portfolio.md`, `12-handoff.md`, most of `05-guide.md` (keep §3), the developer half of `06-design-system.md`; mark 08 §10 and 07 §5.2, §5.9 as moved; `01-portfolio-rezwebsite/` after the first push | R |

### 6.3 To confirm

| Item | Where | Status |
|---|---|---|
| Which case is the password case (row 40) | /work and /work/private, preview only | Open |
| Every credit line (gate G1), including the 21 My role lines (decision 41) | Each case page; To confirm lines show amber on `npm run dev` | Open |
| The RezBloom line on About (decision 12) | /about | Shown as drawn |
| The 500 copy | /dev/throw | Built as drawn |
| /accessibility body | /accessibility | Rewritten by R to what was tested |
| Empty Stats and cookie labels (§2.10) | /stats on a fresh database | Built as drawn |
| Work, empty filter; invite form error (§2.10) | /work, /linkedin/invite | Built as drawn |
| Free templates and Gumroad links (row 32) | /free, Home | Coming soon until the links exist |
| The 4 invite tiles (row 29, §3 F7) | /linkedin/invite | Hidden live |
| Work with me revisions and payment answers (row 34) | /work-with-me | Hidden live |
| The facts in §3 (tools, Webflow, industries of LYFT, Livio, ReSpace, IsHamn and Pulse, the RezBloom Facebook and X profiles) | Hire and Industry pages | Open |
| The Earworm quote's name line (decision 43) | /work/earworm | As drawn |

### 6.4 Ready commands

Run in this order, after your review. The runbook with the reasons is [site/docs/runbooks/deploy.md](../site/docs/runbooks/deploy.md).

1. New secrets for `rezkarim-site`. The first one asks to create the Worker: answer yes. Type the Stats password from your password manager; the recruiter password stays memorable.

```bash
cd "F:/🚩 CLAUDE/Rez Portfolio Website/01-portfolio/site" && npx wrangler secret put STATS_PASSWORD
```

```bash
cd "F:/🚩 CLAUDE/Rez Portfolio Website/01-portfolio/site" && npx wrangler secret put RECRUITER_PASSWORD
```

```bash
cd "F:/🚩 CLAUDE/Rez Portfolio Website/01-portfolio/site" && node -e "process.stdout.write(require('crypto').randomBytes(32).toString('base64url'))" | npx wrangler secret put AUTH_SECRET
```

2. The database: create it, put the printed `database_id` into `wrangler.jsonc` (the top level `d1_databases`), then apply both migrations.

```bash
cd "F:/🚩 CLAUDE/Rez Portfolio Website/01-portfolio/site" && npx wrangler d1 create rezkarim-portfolio
```

```bash
cd "F:/🚩 CLAUDE/Rez Portfolio Website/01-portfolio/site" && npx wrangler d1 migrations apply rezkarim-portfolio --remote
```

3. Copy the 21 Oct messages from the old KV: a dry run first, then the copy.

```bash
cd "F:/🚩 CLAUDE/Rez Portfolio Website/01-portfolio/site" && node scripts/kv-to-d1.mjs
```

```bash
cd "F:/🚩 CLAUDE/Rez Portfolio Website/01-portfolio/site" && node scripts/kv-to-d1.mjs --apply
```

4. Say in the coordinator's chat which cases and pages go live; a session flips them and runs the gate. Then check and commit (no AI attribution):

```bash
cd "F:/🚩 CLAUDE/Rez Portfolio Website/01-portfolio/site" && npm run check
```

```bash
cd "F:/🚩 CLAUDE/Rez Portfolio Website/01-portfolio/site" && git add -A && git commit -m "feat: build the V4a site" -m "Lay the foundation (kebab-case layout, tokens from Figma, shared components, contracts, the D1 schema, the checked content layer, security headers, tooling and docs). Build the app and data on D1 (Stats, sign in, forms, booking, cookies, counting), the 21 cases as content files with static WebP images, every page from the V4a frames, search, share images, the Hire, Industry, Deliverable and Guide templates and the first 20 SEO pages. Review the build end to end and fix what it found, with runbooks, testing and the README."
```

5. Deploy, then the checks after it.

```bash
cd "F:/🚩 CLAUDE/Rez Portfolio Website/01-portfolio/site" && npm run deploy
```

```bash
curl -I https://rezkarim.dashbloom.design/
```

```bash
curl -I https://rezkarim.dashbloom.design/stats
```

6. In the Cloudflare dashboard: the rate limiting rule on the test host (deploy.md step 7), and a day later Workers > `rezkarim-site` > Metrics for "Exceeded CPU" and errors 1102 and 1027.

If the first deploy refuses the `ratelimits` bindings or the placeholder preview database, deploy.md "If the first deploy is refused" has the fix.

### 6.5 You check

| What | Where |
|---|---|
| The darker card and dock glass, and whether you want the lighter option | Any page on localhost, beside Figma |
| Every page against its frame | Figma "QA · Build vs design" (`320:2`), then localhost (6.1) |
| The ambient loops' sound | `public/audio/*.mp3` against `assets/audio/*.mp3` |
| A real booking adds one to Calls booked | Book and cancel on /contact, then /stats |
| A real message reaches Stats on the live Worker | /contact on rezkarim.dashbloom.design after the deploy |
| An NVDA pass on each template (about 45 minutes) | Windows, NVDA |
| Worker metrics a day after the first deploy | Cloudflare dashboard |
| Cloudflare free settings at launch (security §5.5) | Cloudflare dashboard |

## 5. What Claude fixes without you (started 27 Oct)

| Who | What |
|---|---|
| Session figma-a | Old component descriptions, focus states on 13 components, article text styles for guides, token bindings, Read me and Foundations |
| Session figma-b | "Prefer a call?" removed, the invite tiles rebuilt and marked hidden, layer names, colour bindings, layout grids, prototype flows, annotations, Work's pause control |
| Session figma-c | Samā's and CortexAI's share images, SyncGrid's studio marked To confirm, designer notes turned into Notes, export settings, the recruiter case flow |
| Session figma-d | A Cover page, page order, the Handoff page with all 21 cases, a changelog, breakpoint and asset notes, the mobile invite frame moved |
| Main session | Done 27 Oct: docs (the new test address, the five newest case ids in 08, the Figma snippet in 08 §13.1), the merged plan and the build chat files, the deny list (decision 25) in `.claude/settings.json` at the root and in `01-portfolio`, and Figma rounds 2 and 3 queued for the four sessions |
