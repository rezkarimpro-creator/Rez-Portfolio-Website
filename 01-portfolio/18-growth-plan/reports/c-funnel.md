# Chat C · Funnel audit

[README](../README.md) · Draft · 29 Oct 2026 · Phase 1 of [chat-c.md](../chat-c.md). Read on the live site (curl and BrowserOS at 1440 × 900 and 390 × 844), no forms sent, no bookings, tracking stubbed before the one Book click.

## 1. What a visitor meets today

Distance to the first button, in phone screens of 844 px (1 = the first screen). "End" means the closing call card only.

| Page | Book a call | Send a message | Ask for the CV | Proof near a button | Notes |
|---|---|---|---|---|---|
| Home | 1 | footer only | footer only | Proof right after the hero (300+, YC W25, £200K) | Good. No message option up top |
| /work | **13** (end) | footer only | footer only | none | 21 cases and the archive before any button |
| Case, client (Earworm) | **5.7** (end) | footer only | footer only | Proof and the Ben Farley quote at 56%, then Related, then the call card | The button sits after Related, past the proof |
| Case, concept (Atlas) | **4.1** (end) | footer only | footer only | none | |
| Service (/brand, same for the other 4) | 1 | footer only | footer only | **none** | No proof, no questions, no link to prices |
| Hire (/hire/presentation-designer) | 4.2 (end) | footer only | 1 | Proof (YC W25, £200K) | Good |
| Industry (/for/saas) | 1 | 1 | footer only | Proof (YC W25) | Good |
| Deliverable (/brand/logo-design) | 1 | 1 (need preselected) | footer only | Proof | Good |
| Guide (/guides/pitch-deck-designer-cost) | **4.6** (end) | footer only | footer only | Earworm case mid page | One inline link to /work-with-me |
| /about | 3.2 | footer only | **2.8** | YC W25, £200K | |
| /career | 4 | footer only | **3.6** | YC W25, £200K | |
| /free | 1.5 | footer only | footer only | none | Fine for a free page |
| /contact | 1.4 (inline calendar) | **2.5** | via the role chip | **none** | On a phone the form sits under a 1334 px calendar |
| /work-with-me | 3.2 (end) | footer only | footer only | none | Five offers with prices but no button beside them |

Checked and fine: no sideways scroll on any page at 390 or 1440; the dock never hides a button; the booking modal opens in under a second on a phone and the calendar fills about 2 seconds later (cold, without the hover warm-up); the Contact form is already short (name, email, message required; company optional; timeline, budget and link optional for founders), so no change there.

## 2. Ranked fixes

Goal: B = booked call (`cal_booked`), M = message (`form_sent`), CV = CV request (`cv_request`). Copy marked "existing" is already on the site; "new" needs Rez's OK word for word.

| # | Page | Problem | Fix | Goal | Visible | Copy | Effort |
|---|---|---|---|---|---|---|---|
| 1 | All 21 cases | The highest intent page has its only button after Related, 4 to 6 phone screens down, past the proof | Move the call card up: right after Proof (and the quote) on client cases, right after the 3 design decisions on concept cases; Related follows it | B | Yes | Existing: "Free 20 minute call · Sunday to Thursday", "Need a brand, website or deck that wins clients?", "Book free strategy call" | S |
| 2 | 5 service pages | No proof at all on the pages that sell each service | Add the existing Proof block (claim plus case tiles) after Cases. Claims word for word: /brand "300+ client reviews"; /product "At Delineate (YC W25) I designed the SaaS product, the website and the investor deck as one system"; /decks "Designed the investor deck used in Earworm's £200K pre-seed"; /social and /linkedin "300+ client reviews" | B, M | Yes | Existing claims and section label "Proof" | M |
| 3 | 5 service pages | No questions next to the button, and no FAQPage for AI answers | A "Questions" block before How it works, with FAQPage JSON-LD that matches word for word. Every answer is already approved on the site (list in §3) | B | Yes | Existing, reused (§3) | M |
| 4 | /work | 13 phone screens to the only Book button | Add "Book free strategy call" to the /work header, as service pages have | B | Yes | Existing | S |
| 5 | /contact | On a phone the message form starts 2.5 screens down, under the calendar; people who'd rather write may leave | Two pills in the header: "Book free strategy call" jumps to the calendar, "Send a message" jumps to the form | M | Yes | Existing: "Book free strategy call", "Send a message" | S |
| 6 | 14 guides | 4.6 phone screens to the button; readers who are convinced mid page find nothing | A compact call card after the "From a real project" proof (or halfway, when a guide has none) | B | Yes | Existing call card words | S |
| 7 | 5 service pages | Prices live only on /work-with-me and service pages don't link to it | A second pill in the header, next to "See all work": "Work with me" to /work-with-me | B | Yes | Existing: "Work with me". Option: "See prices" (new) | S |
| 8 | /work-with-me | Offers with prices but the button only after the questions | "Book free strategy call" in the header, under the lead | B | Yes | Existing | S |
| 9 | Home | Book and See all work in the hero, no way to write; a visitor who wants to write must find the footer | A second pill beside Book: "Send a message" to the founder form | M | Yes | Existing | S |
| 10 | /about, /career | Recruiters scroll 2.8 and 3.6 phone screens to "Ask for my CV" | Put "Ask for my CV" in the header of both pages (the one lower down stays) | CV | Yes | Existing | S |
| 11 | Site wide | No heatmaps or recordings to see where visitors stop | Microsoft Clarity behind Allow, masking on, privacy lines and CSP hosts; Rez signs up. My view: not yet. At today's traffic it shows little, and it adds a third party script while chat K fights for mobile speed. Revisit after 4 weeks of /stats | All | No (banner text changes) | Privacy lines (new) | M |
| 12 | /contact | Form length | No change: it is already short | M | No | | |

## 3. Questions for the 5 service pages (fix 3)

Every line below is already live elsewhere on the site, copied word for word. Two shared answers from the Contact and Work with me questions, plus one or two from each service's own pages.

| Page | Question | Answer, word for word | From |
|---|---|---|---|
| All 5 | What does a project cost? | You get a fixed price in writing on the same day as our call. | Contact FAQ |
| All 5 | Can we sign an NDA? | Yes. NDA first, before any files change hands. | /work-with-me |
| /brand | How long does a logo system take? | A full brand identity runs 2 to 3 weeks, and the logo system is the first part I settle. | /brand/logo-design |
| /brand | Which formats do I get? | Figma for brand and web, PowerPoint or Google Slides for decks, Canva for social templates, plus PDF guidelines. | /work-with-me |
| /product | Will developers be able to build from your files? | Yes. I hand over Figma components and handoff notes, so the build matches the design without guesswork. | /product/dashboard-ui-design |
| /product | Do you design the brand as well as the app? | Yes. Livio, LYFT and Samā each pair the app with a brand, so the logo, type and colour carry from the app icon into every screen. | /product/mobile-app-design |
| /decks | How fast can you turn a deck around? | The 72-Hour Deck Rescue rebuilds an existing deck in 72 hours. A new deck gets its timeline in a fixed proposal the same day as the call. | /decks/saas-pitch-deck |
| /decks | Do you design only the slides, or the story too? | Both. On the Earworm deck I first restructured the content around one investment story, then built a visual system on top, so the story and the slides support each other. | /decks/presentation-design |
| /social | Which formats do I get? | Figma for brand and web, PowerPoint or Google Slides for decks, Canva for social templates, plus PDF guidelines. | /work-with-me |
| /linkedin | Can you design my profile photo and Featured section too? | Yes. The banner works best next to an edited profile photo and Featured cards that link to your best work, and the LinkedIn Profile Kit covers all three. | /linkedin/banner-design |

The same question on a service page and its child page is fine for visitors; for search, the child page keeps its own set and the service page uses the shared ones first.

## 4. Helpers built in any case (not visible)

| Helper | What I found | What gets built | Goal |
|---|---|---|---|
| Proof quotes | Only the Earworm quote exists (Ben Farley, Founder & CEO, Earworm), shown on its case | `ProofQuotes` and `src/data/quotes.ts` with an `approved` flag; shows after Proof on Home, on /decks and on the Earworm case; empty elsewhere until Rez sends quotes | B, M |
| Channel links | **Bug**: a tagged link (`?utm_source=linkedin`) is counted as Direct, in views and in messages. Only `utm_source=chatgpt.com` is grouped. So Stats can't tell LinkedIn from Behance from the CV today | Group `utm_source` by channel (linkedin to Social, behance to Portfolios and so on), keep the channel name as the source, and `marketing/links.md` with one tagged link per channel | All three |
| Conversion view | Events store the page but not the source, so bookings can't be split by channel | Send the visit's lead source with Book clicks, calendar opens and bookings (the existing `value` column, no personal data, no new table); a Stats table per page and per source: visits, Book clicks, calendar opens, bookings, messages, CV requests, 14 and 30 days | All three |

## 5. Rez picks

Asked in chat C with the picker, 29 Oct 2026, in three rounds (one question per fix, so each could be built or skipped).

| # | Rez's answer |
|---|---|
| 1 | Show it in Figma first: a demo screen before any code |
| 2 | Build, claims as proposed |
| 3 | Build, answers as in §3 |
| 4 | Build |
| 5 | Build |
| 6 | Build |
| 7 | Build, label "Work with me" |
| 8 | Build |
| 9 | Build, with Book as the primary pill and Send a message as the secondary |
| 10 | Skip |
| 11 | Not yet; revisit after 4 weeks of /stats |
| New | Career highlights on Home and /career: the role, company and details fill the card; the tags (Pitch deck, Web & UI/UX and the rest) move below each role instead of sitting on the right |

Rez checks everything on localhost himself before the redeploy.
