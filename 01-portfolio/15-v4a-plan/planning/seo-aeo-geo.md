# SEO, AEO, GEO, conversion and measurement

Status: done · 27 Oct 2026 · Keep 07 as the base. 38 of the 100 candidate pages have real proof today (53 once a few facts arrive), so launch 20, grow in data led batches of 10, and fix the name collision first.

[README](../../../README.md) · Draft · 27 Oct 2026 · Planning track SEO ([README.md](README.md) §5). Page rows are in [seo-page-map.md](seo-page-map.md).

## Summary

1. [07-search-and-speed-plan.md](../../07-search-and-speed-plan.md) is sound and stays the base. What it lacks is the scale layer: a content model, a quality gate, families with their own schema, conversion events, and an entity fix. Found today, 27 Oct: a different "Rezaul Karim" ranks #1 for "Rezaul Karim designer" (byrezaulkarim.com), and Rez's own site is not in the top 9.
2. Research (free, BrowserOS, US Google and Bing, 27 Oct): "hire X designer" and "freelance X designer" results are owned by marketplaces (Upwork, Fiverr, Contra, Toptal, Behance, Dribbble, Twine). Individual designers rank with narrow "designer for X" pages, pricing pages and answer guides. Job queries ("remote brand designer jobs") show job boards only, so Hire pages serve applications and name searches, not job board rankings.
3. Of the 100 rows in the page map, 38 have evidence and real proof now (20 for launch, 18 for later batches), 15 wait on one fact from Rez, and 47 are dropped or merged. 100 pages with proof isn't possible today; the rest unlock as cases, templates and tool lists arrive. No volume or difficulty numbers exist in this file: free tools don't show them.
4. The portfolio owns "designer", "freelance" and "hire Rezaul Karim" searches and guides in Rez's first person; the agency site owns "agency", "studio", "services" and white label searches. This removes most of the overlap with the agency's 101 page list.
5. Measurement stays free and cookieless: Search Console, Bing Webmaster Tools, Cloudflare Web Analytics and /stats in D1 with AI referrers, events and lead source. No GA4 or Clarity at launch. The contact form gains a timeline and an optional budget.

## 1. Challenge

### 1.1 07 search and speed plan

| # | Finding | Weight | Fix |
|---|---|---|---|
| 1 | **Name collision, not in 07.** Google US, 27 Oct, "Rezaul Karim designer": #1 byrezaulkarim.com ("Rezaul Karim, Graphic, Brand & Digital Designer"), #2 behance.net/rezaul9 (another Rezaul Karim), then Rez's Dribbble. "Rez Karim designer" returns a different Rez Karim (an AI founder on X). Only "RezBloom" is clean: Instagram, Dribbble, Facebook, Behance and X are all Rez | Must | Person gets `alternateName` ["Rez", "RezBloom"]; About carries one visible line that ties the name to the handle (Rez decides, Q8); every profile uses the same name, headline and headshot (07 §4.7); `sameAs` adds the RezBloom Facebook and X profiles once Rez confirms they are his |
| 2 | An outside profile may leak the Taste title. Google shows himalayas.app/@rezaulkarim10 as "Rezaul Karim, Presentation Designer, AI Training". If it is Rez's, it ties his name to the role the site hides (hard rule 3) and feeds AI answers | Must, outside the site | Rez checks it and edits or deletes it. Not opened here |
| 3 | Behance's title reads "Pitch Deck & Brand Identity Designer", the site "Brand & website designer". Mixed role lines weaken the entity | Should | Already in 07 §4.7; make it a launch gate item |
| 4 | 07 plans only 17 routes plus cases. No content model, no family schema (Article, Service per deliverable), no "Related" logic, no gate for 50 to 100 new pages | Must | §3 below |
| 5 | Service page titles aim at head terms ("Pitch deck designer for startups") whose results are marketplaces and big agencies. Not wrong, but they won't rank soon | Note | Keep the titles; expect wins from long tail pages and the name; measure (§5) |
| 6 | No conversion events or lead source. /stats counts views and referrers only | Must | §5 and §6 |
| 7 | Sitemap `lastModified` comes from `src/data/seo.ts` by hand. At 100 pages a hand list drifts | Should | `updatedAt` from each content file, changed only when the text changes |
| 8 | FAQ only on Contact. Service and deliverable pages get none "until facts like turnaround are confirmed". Row 36 confirmed turnaround for agencies; spec §5 gives the How I work steps | Should | 3 to 5 FAQs per new page from confirmed facts only |
| 9 | Off site gaps: the "hire" results are marketplace profiles. Rez's folder already names Contra. A strong Contra profile and a Framer Experts listing (if he qualifies) reach buyers the site can't reach for a year | Opinion | Rez decides (Q9). Each profile links to rezkarim.com and joins `sameAs` |
| 10 | 07 stays right on: crawler policy, robots, launch switch, share images, speed budgets, llms.txt as a last 15 minute extra, FAQ schema kept for parsing only | Keep | No change |

### 1.2 Draft plan §3 and §4 ([../README.md](../README.md))

| # | Draft says | Problem | Recommendation |
|---|---|---|---|
| 1 | Hire, 8 pages `/hire/<role>` | Job searches show job boards, not portfolios (Google, 27 Oct: Indeed, LinkedIn, ZipRecruiter, Wellfound). /brand, /product and /decks already mirror the 3 CV tracks (spec §3), so 8 role pages split one intent many ways | A `/hire` hub and 4 role pages (brand, presentation, web, product), each linked from applications. Plus two job description guides, which reach hiring managers while they write the post (Google and Bing both suggest "brand identity designer job description") |
| 2 | Industries, 12 pages `/for/<industry>` | Only 4 industries have 2 or more cases with confirmed industry (SaaS, real estate, ecommerce, food). Most are concepts; a page about "fintech brands" built on one concept reads as client work. The agency plans `/industries/` and 38 service by industry pages | 4 now, 3 later as cases arrive, 5 dropped. Titles say "designer", never "agency" |
| 3 | Deliverables, 25 pages | Several have no case (sales deck, company profile, landing page, rebrand, ads). Some repeat their hub (investor deck = /decks, startup branding = /brand) | 7 kept, 4 waiting, 16 dropped or merged |
| 4 | Guides 40 plus comparisons 5 at `/blog/` | 40 guides need 40 distinct questions with proof. 20 survive now and 5 wait; questions for other designers (portfolio examples, how to become) bring no buyers | 20 guides and comparisons now, 5 waiting, at `/guides/` (Q7) |
| 5 | Other openings 5 to 10 | Only mentoring has proof (bdapps, 2022), and no search demand showed for it. Accelerator partner and speaking have none | The two free template pages and /scorecard once live; mentoring stays a line on About; the rest dropped |
| 6 | "40 at launch" | Proof backed pages today: 38. 40 at launch leaves almost nothing for data led batches and puts 40 first time pages on a domain with no links | 20 at launch (§4) |
| 7 | Rule 2: "3 blocks for that page alone, 1 image, 1 proof line" | Good, but no test for intent overlap and no claim registry, so 50 writers' sessions can drift | Add the gate in §3.7: one `intentKey` per page, claims by key from a registry, sources dated |
| 8 | §4 content layer: one file per item | Good. Missing fields: `intentKey`, `primaryQuery`, `answer`, `proofClaims`, `sources`, `reviewedBy`, `indexable` | §3.5 |
| 9 | "The guide explains what drives cost, without his numbers" | Cost results are full of agencies quoting ranges; a guide with no numbers is weaker. Rule stands (spec §6) | Explain the drivers, link the noindex /work-with-me ("See my offers"), and cite one dated public source for ranges only if Rez agrees (Q11) |

### 1.3 The master plan (`portfolio_seo_aeo_geo_inbound_master_plan.md`, another AI tool)

| Its idea | Verdict | Why |
|---|---|---|
| Positioning UI/UX, SaaS/MVP product design first | Clash | Locked positioning: brand and websites lead, decks, social and LinkedIn follow (root CLAUDE.md hard rule 2, spec §2) |
| "Pricing information where appropriate" on pages | Clash | Prices only on /work-with-me (spec §6, 07 §2) |
| GA4 and Microsoft Clarity | Clash for now | Cookies mean a consent banner for UK and EU visitors, more JavaScript against 07's 180 KB budget, and they repeat what Search Console, Cloudflare and /stats already show at this traffic. §5.3 |
| A paid Ahrefs or Semrush if justified | Not now | No research question here needs volumes before launch; Search Console gives real queries free after launch (hard rule 6) |
| 1,000 pages as a future scale | Agree with its own caution | Proof caps the page count, not ambition. Scale only patterns that get indexed and clicked |
| Keyword spreadsheet with volume and difficulty columns | Partly | The page map keeps evidence, intent and proof. Volume and difficulty stay empty until Search Console has data |
| Lead qualification fields (service, scope, budget, company, timeline) | Partly | Timeline yes, budget optional, company only for recruiters and agencies (§6) |
| CRM ready records and revenue by source | Partly | Source and landing page saved on every message in D1. Revenue lives in Rez's own log, not on the site |
| Brave and DuckDuckGo checks | Later | Both draw on Bing's index in part; Bing Webmaster Tools covers it. Spot check after launch |
| Quality gate before publishing, no auto publishing of AI content | Agree | §3.7. Operations owns the steps |
| Validate, cite, label facts and estimates | Agree | This file follows it |

## 2. Research findings (27 Oct 2026)

Method: Google autocomplete for about 100 seeds and Bing autocomplete for 20 (Google `hl=en&gl=us`, Bing `en-us`), 29 Google result pages and 3 Bing result pages read as text in a BrowserOS background tab (closed after), no sign in, then the home pages of 10 ranking designers and studios. One run, one location, one day: results move, so treat them as a snapshot.

**Limits.** Free tools show what people type and what ranks, never how many search it. No row in either file has a volume or difficulty number, and none was estimated.

### 2.1 What ranks, by query type

| Query type | Examples read | Who ranks (top 9) | AI Overview | People also ask (verbatim) |
|---|---|---|---|---|
| Hire, service | hire pitch deck designer · freelance brand designer · framer website designer for hire · hire a brand designer for a startup | Upwork, Fiverr, Contra, Toptal, Twine, Behance hire, Dribbble, Framer Experts, Reddit threads; 1 or 2 individuals (koad.com, jessicajonesdesign.com) | On 4 of 6 | "How much does it cost to design a pitch deck?" · "Can you hire someone to create a pitch deck?" · "What is a pitch deck designer?" · "How to hire a freelance designer?" · "How much do brand designers charge?" |
| Designer for an industry | brand designer for saas startups · fintech brand identity designer · real estate website designer freelance | Agencies' "best X agencies" lists, Dribbble and Behance tags, marketplaces; one individual: lalitbahel.com/brand-identity-designer-saas/ | On all 3 | "What does a brand identity designer do?" · "How much do brand identity designers charge?" |
| Cost and time | how much does a pitch deck design cost · how much does a brand identity cost for a startup · how long does a brand identity take | Agency and freelancer blog posts with ranges, Reddit; individuals: callthedesignguy.com/post/startup-branding-cost, jessicajonesdesign.com pricing page | On all 3 | "What is the 3-7-27 rule in branding?" (in 4 of 10 result pages) · "Is rebranding risky?" · "What are the 7 stages of the branding process?" |
| Deck how to | pre seed pitch deck structure · what slides do investors expect in a pitch deck · saas pitch deck examples | Antler, DocSend, YC Library, Guy Kawasaki, Carta, J.P. Morgan, example libraries | On 2 of 3 | "What is the 10/20/30 rule for pitch decks?" (in 5 result pages) · "What should be in a pre-seed pitch deck?" · "What do investors look for in a pitch deck?" |
| Comparison | freelance designer vs agency for startup branding · framer vs webflow for startup website | Studio and freelancer blogs, Zapier, Mercury, Framer's own page, Reddit | On both | "Is Webflow better than Framer?" · "Is Framer good for building websites?" · "What is the difference between a freelancer and an agency?" |
| Jobs | remote brand designer jobs · presentation designer jobs remote | Job boards only (Indeed, LinkedIn Jobs, ZipRecruiter, Wellfound, Glassdoor) with Google's jobs box | No | "How to become a presentation designer?" |
| LinkedIn | linkedin banner design for founders | Canva, Figma Community and other template galleries, LinkedIn posts | Yes | none |
| Name | Rezaul Karim designer · Rez Karim designer · RezBloom | Other people for the first two; only Rez for "RezBloom" | No | none |

Bing (3 queries): the same marketplaces, plus ads; no People also ask block was found.

### 2.2 Suggestions worth a page (Google unless marked B)

- Hiring: "hire brand identity designer", "hiring brand designer remote", "remote senior brand designer", "presentation designer portfolio", "pitch deck designer portfolio", "hire framer website designer", "framer website designer for hire", "social media designer for hire", "brand identity designer job description" (G and B), "presentation designer job description".
- Cost and time: "pitch deck designer cost", "how much does a pitch deck designer cost", "how much does a full brand identity cost", "how much do brand guidelines cost", "framer website design cost", "how long does it take to design a brand identity".
- Decks: "pre seed pitch deck structure", "pre seed pitch deck slides", "saas pitch deck design service", "saas investor deck", "pitch deck designer ai", B "seed stage investor pitch deck", B "investor deck structure".
- Brand: "brand identity design process", "brand guidelines process", "what does a brand identity designer do", "logo design services for startups", "startup brand designer", B "startup brand identity".
- Web: "saas website design services", "ai startup website design", "real estate website design services".
- LinkedIn and social: "linkedin cover designer", "linkedin banner design size", "linkedin banner design ideas", "linkedin profile design services", "social media post design freelance".
- Briefs: "how to brief a graphic designer", "how to write a brief for a graphic designer", B "design brief template".
- Empty in Google: "freelance web designer for startups", "hire designer for startup", "design partner for startups" (no suggestions, so little typed demand for those exact phrases).

### 2.3 Designers and studios that rank, and the pages they use

| Site (read 27 Oct) | Who | Ranked for | Page types that matter for Rez |
|---|---|---|---|
| koad.com | Kristian Olson, freelance presentation designer | hire pitch deck designer (#5) | One landing page per audience (startups, sales teams, executives, speakers, agencies), pricing page, samples, FAQ, an NDA page, `/lp/pitch-deck-designer` |
| lalitbahel.com | Brand identity and packaging designer | brand designer for saas startups (#1) | "Designer for X" pages: brand identity designer SaaS, graphic designer for startups, personal branding designer for founders and CEOs, healthcare graphic designer, designer for pitch decks |
| jessicajonesdesign.com | Brand designer | freelance brand designer, startup brand cost | Service hub with children: process, pricing, FAQ, portfolio, branding for startups, small business branding; testimonials page; "tools I use" |
| callthedesignguy.com | Freelance designer | startup branding cost | Blog led: cost posts, "what is a fractional designer", "when does a startup need a design system" |
| newtondesign.co | Freelance designer | pitch deck designer for startups | Service pages (pitch deck designer, document design, logos), process, FAQ, testimonials |
| typennerdesign.com | Freelance designer | freelance vs agency | Local city pages (not for Rez: no city, row 50) |
| whatifdesign.co | Studio | how long brand identity takes | Service pages, sector pages, design glossary, resources |
| artone.studio | Studio | brand cost for startups, Framer vs Webflow | Articles, FAQ, and "/ask/chatgpt", "/ask/claude" links that open an AI chat about the studio (a GEO gimmick; not recommended, no evidence it helps) |
| scocreative.com | Studio | how to choose a brand designer | Pricing, process, "founders hub", portfolio by niche |
| noland.studio, bobbymacdesign.com | Studios | freelance vs agency | Comparison posts written from the studio side |

Pattern (opinion from the above): the individuals who rank have 10 to 40 pages, not 100. Each wins with a few narrow "designer for X" pages, one pricing or cost answer, a process page and a FAQ, all backed by named work.

## 3. Architecture

### 3.1 Person versus studio

| Search pattern | Portfolio (Rez, "I") | Agency site ("we") |
|---|---|---|
| Name, handle, "hire Rezaul Karim" | Owns | Never |
| "X designer", "freelance X designer", "X designer for Y" | Owns | Avoids in titles and H1 |
| "X agency", "X studio", "X services", "X company" | Avoids in titles and H1 | Owns |
| Jobs, roles, job descriptions | Owns | Never |
| White label, overflow for agencies | Never indexed (/agencies stays noindex) | Owns |
| Guides | Rez's first person view, his cases, "what to expect from a designer" | Studio process, packages, team, "what to expect from an agency" |
| Cost guides | "How much does a X designer cost" | "X design cost", packages and ranges |
| Freelancer versus agency | One owner only (Q4) | |

When both sites could answer one question, the agency's spec §8 list and this map are checked against each other before a page is written (W chats). Two pages by the same person answering one question the opposite way would hurt both.

### 3.2 Families and URLs

| Family | URL | Hub | Count (kept) | Audience | Template (Figma) |
|---|---|---|---|---|---|
| Core | as today (07 §3.1) | Home | 17 routes | All | Exists |
| Case | `/work/<slug>` | /work | 21 | Client, job | Exists |
| Hire | `/hire`, `/hire/<role>` | /hire | 5 | Job | New: Hire |
| Industry | `/for/<industry>` | `/for` | 4 + 3 later + hub | Client | New: Industry |
| Deliverable | `/<service>/<deliverable>` under brand, product, decks, social, linkedin | The service page | 7 + 4 waiting | Client | New: Deliverable |
| Guide and comparison | `/guides/<slug>` | `/guides` | 20 + 5 waiting + hub | Client, job, AI answers | New: Guide, Guides index |
| Other | `/free/<template>`, `/scorecard` | /free | 3, waiting | Other | Later |

URL rules: lowercase, words joined by single hyphens in the slug (URLs are exempt from the punctuation rule, 00-facts §5), no dates, no years, no city or country, no trailing slash, at most 3 words after the family where possible. A slug never changes after launch; if it must, a 301 in the redirect map (07 §3.8).

### 3.3 Schema per family

All JSON-LD built from the content file, `<` escaped (07 §4.3), one `@graph` per page that references the site wide Person `@id`.

| Family | Types | Key fields | Not used |
|---|---|---|---|
| Hire hub and roles | `WebPage` with `about` and `mainEntity` the Person, `BreadcrumbList`, `FAQPage` when FAQs show | `name`, `description`, the Person's `knowsAbout` for that role | No `JobPosting` (that is for employers), no second `ProfilePage` (About keeps it) |
| Industry | `Service` (`serviceType`, `provider` Person, `audience` `BusinessAudience` with the industry, `areaServed` Worldwide), `BreadcrumbList`, `FAQPage` | `hasOfferCatalog` no; `isRelatedTo` the case `CreativeWork` ids | No prices, no `Organization` for Rez |
| Deliverable | `Service` as above with `serviceType` the deliverable, `BreadcrumbList` (Home, service, deliverable), `FAQPage` | Cases as `CreativeWork` references | No `Product`, no `Offer` |
| Guide | `Article` (`headline`, `author` the Person with `url`, `datePublished`, `dateModified`, `image`, `about`), `BreadcrumbList`, `FAQPage` when FAQs show | `citation` for each cited source | No `HowTo` (Google dropped its rich result in 2023), no `Review` |
| Hubs (`/hire`, `/for`, `/guides`) | `CollectionPage` with `ItemList` of live children, `BreadcrumbList` | Live children only | |
| Person (site wide, from 07 §4.3) | add `alternateName` ["Rez", "RezBloom"], `sameAs` plus the confirmed RezBloom Facebook, X and Contra profiles | | No `worksFor` (07) |

### 3.4 Internal links

| Rule | Detail |
|---|---|
| Depth | Every indexable page 3 clicks or less from Home: Home → hub → page. Footer gets "Hire" and "Guides" (a design OK, Figma B) |
| Up | Every page links its hub in a visible breadcrumb that matches the BreadcrumbList |
| Down | Every page links 2 or 3 cases from its `proofCases` |
| Across | 2 or 3 related pages chosen in the file (`related`), never more than 5 |
| Back from cases | Each case shows up to 3 "Related" links, built automatically from the pages that cite it (reverse `proofCases`), live pages only |
| Guides | Each guide links 1 service or deliverable page and 1 case in its body, plus the CTA |
| Anchors | The target's main phrase or its title, varied; never "click here" (07 §3.6) |
| No orphans | `content:check` fails a live page with no inbound link from a hub or another live page |

### 3.5 Content model

One file per page in `site/content/pages/<family>/<slug>.mdx` (guides `site/content/guides/<slug>.mdx`), typed frontmatter validated by `content:check`. Cases keep `site/content/work/<slug>` (chat C) and gain the tags marked "case" below.

| Field | Families | What it holds |
|---|---|---|
| `slug`, `family`, `hub` | All | URL parts; `hub` is the parent route |
| `status` | All | `draft`, `ready` (passed checks, waiting for Rez), `live`. Only `live` builds a route, a sitemap line, an llms.txt line and RSS |
| `indexable` | All | true by default; false keeps the page live but noindex |
| `title`, `h1`, `description` | All | Title 60 characters or less with the " · Rezaul Karim" suffix, description 120 to 155, both unique across the site |
| `intentKey` | All | One short key for the question the page answers (`cost:pitch-deck-designer`). Must be unique across the site; also checked against a list exported from the agency's `pages.csv` |
| `primaryQuery`, `queries` | All | The searches from the page map's evidence column, for the writer, never stuffed into copy |
| `answer` | All | The first sentence, 25 to 40 words, that answers `mainQuestion` in plain words (07 §4.4 rule 1) |
| `mainQuestion` | All | The question in the page map |
| `audience` | All | job, client, agency, other |
| `proofCases` | All | 1 to 3 case slugs; at least 1 must exist and be live |
| `proofClaims` | All | Keys into `site/content/claims.ts`, the registry that copies 00-facts §3 word for word (earworm, delineate, reviews, solvita, years, awards, bdapps). Pages never type a claim by hand |
| `faqs` | All but hubs | 3 to 5 `{ q, a }`; each `a` answers in its first sentence |
| `related` | All | 2 to 5 slugs |
| `cta` | All | `call`, `cv`, `message`, `template`; sets the buttons (§6.2) |
| `sources` | Guides | `{ title, url, date }` for every outside fact or number |
| `publishedAt`, `updatedAt` | All | Real dates; `updatedAt` feeds sitemap `lastModified` and `dateModified` |
| `reviewedBy` | All | `{ who: "Rez", date }`; required to go `live` |
| `ogImage` | All | Optional; otherwise the satori template (07 §3.4) |
| `role`, `jobTitles`, `tools`, `availability` | Hire | Role name, the job titles it covers, tools Rez confirmed (Q, §9 of ../README), "Open to remote full time and contract roles" |
| `service`, `deliverable`, `includes`, `formats` | Deliverable | Hub service, the deliverable, what Rez makes, file formats |
| `industry`, `problems` | Industry | The industry and 3 problems from the cases' briefs |
| `kind` | Guides | guide or comparison |
| `industries`, `deliverables` | Case | Tags for reverse links (chat C fills, Rez confirms any industry not in the brief) |

### 3.6 Sitemap, robots, llms.txt and RSS

- Sitemap: generated from content files with `status: live` and `indexable: true`, plus core routes and cases (07 §3.5). One sitemap; Google allows 50,000 URLs, so no index file is needed below that.
- robots.txt: unchanged from 07 §3.5. No family is blocked; drafts never build.
- llms.txt: adds "## Hire", "## Industries", "## Guides" groups from live files, one line each from `answer` (07 §4.5).
- RSS at `/guides/feed.xml` for guides only (Bing and some AI tools read feeds; cheap from the same data). Opinion: low value, 30 minutes.
- IndexNow after each deploy with the changed URLs only (07 §3.9 step 6).

### 3.7 Quality gate: SEO criteria (Operations owns the steps)

| # | Criterion | Checked by |
|---|---|---|
| 1 | Answers one question no other live page answers: unique `intentKey`, not on the agency list | `content:check` |
| 2 | First sentence answers `mainQuestion`; 25 to 40 words | `content:check` (length), Rez (sense) |
| 3 | At least 1 live proof case and 1 registry claim; the claim text equals the registry | `content:check` |
| 4 | No concept presented as client work: no "client", "for [brand]" or result wording next to a case that 00-facts lists as concept; Nike Mind always carries "Not affiliated with Nike" | `content:lint` word list plus Rez |
| 5 | At least 3 blocks written for this page alone; no paragraph over 40% similar to another page (shingle check) | `content:check` |
| 6 | Copy rules: no em dash, colon, semicolon or hyphen in visible copy except locked claims; no "raised", founder, CEO, owner, "my agency", "my studio", "we", Fiverr, $500K, Taste Labs, city or country, Client or Concept labels, years on cases | `content:lint` |
| 7 | No prices outside /work-with-me (no "$" or "£" followed by a number, except the £200K claim) | `content:lint` |
| 8 | Every outside fact has a dated source; numbers are digits | `content:check` (sources present when the body has digits that aren't claims), Rez |
| 9 | Title, description, H1 unique; title 60 characters or less; one H1 | `content:check` |
| 10 | Links: hub, 2 or 3 cases, 2 to 5 related, all resolving to live pages; at least one inbound link | `content:check` |
| 11 | Structured data parses and matches visible text (FAQ answers word for word) | Build test (chat E), Rich Results Test per family (R) |
| 12 | Lighthouse mobile inside 07 §5.2 for the template (once per template, not per page) | R, then per batch on one page |
| 13 | SolVita never alone: any page that shows it also shows Earworm and the Real estate website above it (00-facts §4) | `content:check` |
| 14 | Rez read it and set `reviewedBy` | Rez |

## 4. Rollout

| Phase | Pages | Gate to start |
|---|---|---|
| Launch (G1) | Core, 21 cases, and **batch 1: 20 new pages** (page map "1") | Every batch 1 page passes §3.7 and Rez OKs it |
| Batch 2 | 10 pages, from "2" rows, ordered by what Search Console shows | 4 weeks after launch, and at least 70% of batch 1 indexed (Search Console, Pages) |
| Batch 3 onward | 10 every 2 weeks | The previous batch at 70% indexed within 4 weeks; no growing "Crawled, currently not indexed" list; Rez OK |
| Waiting rows ("wait") | As each fact or case arrives | Rez's answer (tool list, Omega case, Webflow experience, templates live) |
| Refresh | Monthly, before writing new pages | Pages with impressions and low CTR get a new title and answer; pages with no impressions after 12 weeks are improved, merged or set to noindex |

Why 20, not 40 or all (opinion, from the research and Google's scaled content policy): the 21 cases and core pages already give a new domain 38 URLs; 20 more is the strongest half of the 38 that have proof; each needs Rez's read, which is the real bottleneck; and the later batches then follow real queries instead of guesses. The 70% threshold is a working rule, not a Google number.

Batch 1 is chosen for proof strength and buyer intent: the Hire hub and 3 roles, 2 industry pages and their hub, 4 deliverables, the Guides hub and 8 guides.

## 5. Measurement

### 5.1 Tools

| Tool | Free | What it answers | Setup (who) |
|---|---|---|---|
| Google Search Console | Yes | Indexing per family, queries, impressions, CTR, AI features traffic (counted inside Web search, not split out) | Rez, 07 §3.9 |
| Bing Webmaster Tools | Yes | Bing and Copilot queries, AI Performance report (citations in Copilot and Bing answers), IndexNow status | Rez, import from Search Console |
| Cloudflare Web Analytics | Yes, cookieless | Visits, top pages, referrers, Core Web Vitals per page | Rez turns it on; P7 checks the beacon (07 §5.9) |
| /stats (D1) | Yes | Views per page and family, referrer groups including AI, events, messages with their source | Chat B |
| GA4, Microsoft Clarity | Free, but cost consent and speed | See §5.3 | Not at launch |

### 5.2 /stats additions (chat B)

| Item | Detail |
|---|---|
| Referrer groups | Search (google, bing, duckduckgo, yahoo, ecosia, brave), AI (chatgpt.com, chat.openai.com, perplexity.ai, copilot.microsoft.com, gemini.google.com, claude.ai, you.com, chat.deepseek.com, meta.ai), Social (linkedin, x, t.co, facebook, instagram), Portfolios (behance, dribbble, contra), Direct, Other. ChatGPT search links are reported to carry `utm_source=chatgpt.com`; count that as AI too. Check each host at build time |
| Family | Each view tagged by family from the route (core, case, hire, industry, deliverable, guide) |
| Events, counted server side, no cookies | `cta_call` (any Book button, with page), `cal_open`, `cal_booked` (Cal.com embed booking event; check the event name in Cal.com's embed docs at build), `form_sent` by kind, `cv_request` (recruiter form), `email_copy`, `outbound` (Behance, LinkedIn, Dribbble) |
| Lead source | The first landing path and referrer group of the visit, kept in `sessionStorage` (not a cookie) and sent with the form as hidden fields; saved on the message in D1 |
| Qualified mark | Rez marks a message qualified or not in /stats, so "qualified leads by family" is one count |
| AI crawler hits | Optional: count requests whose user agent names GPTBot, OAI-SearchBot, ClaudeBot, Claude-SearchBot, PerplexityBot, Bingbot, Googlebot, per page, in the Worker. Cheap and shows which pages AI tools fetch |

### 5.3 GA4 and Clarity

Recommended: neither at launch (opinion). Both set cookies, so UK and EU visitors need a consent banner (Practices owns consent), both add third party JavaScript against 07's budget of only the 10 KB analytics beacon before a click, and at a new site's traffic they answer little that Search Console, Cloudflare and /stats don't. Revisit Clarity only for a named UX question (for example "why do Contact visitors not book") once the site has steady traffic, behind consent, with masking on, for a 2 week trial. Q6.

### 5.4 KPIs and routine

| KPI | Source | Look at |
|---|---|---|
| Indexed pages per family, percentage of submitted | Search Console Pages | Weekly for 2 months, then monthly |
| Impressions, clicks, CTR per family and top 20 queries | Search Console, Bing | Weekly, 10 minutes |
| AI referrals and Copilot citations | /stats AI group, Bing AI Performance | Monthly |
| Calls booked, messages by kind, CV requests, per family and source | /stats | Weekly |
| Qualified leads per family | /stats qualified mark | Monthly; decides which family grows next |
| Brand searches ("Rezaul Karim", "RezBloom") | Search Console queries | Monthly; the entity fix working shows here |
| Core Web Vitals per template | Cloudflare, Search Console | Monthly (07 §5.10) |

The monthly review writes one line per family into Rez's log (outside this folder): indexed, clicks, leads, next action.

## 6. Conversion

### 6.1 Form fields (founder or team)

| Field | Today | Proposed | Why |
|---|---|---|---|
| Name, Email | Required | Same | |
| What you need (chips) | Exists | Same; preselected from the page's `service` | Fewer taps from a deliverable page |
| Timeline | None | Optional chips: "Within 2 weeks", "This month", "In 1 to 3 months", "Just exploring" | Lets Rez reply first to the urgent; no date picker needed |
| Budget | None | Optional chips in USD ranges, Q5 | Qualifies without a call; the ranges are the visitor's, not Rez's prices |
| Link | None | Optional "Your site or deck link" | Rez can bring the 3 fixes to the call |
| Message | Required | Same | |
| Hidden | kind, t, needs, honeypot | Add `landing`, `source`, `page` | Lead source (§5.2) |

Recruiter: unchanged, plus `role` prefilled from the Hire page (`/contact?kind=recruiter&role=presentation-designer#message`). Agency: unchanged.

### 6.2 CTAs per family

| Family | Primary | Secondary |
|---|---|---|
| Hire | "Ask for my CV" (recruiter form, role prefilled) | "See the work" (the role's cases) |
| Industry, deliverable | "Book free strategy call" | "Send a message" (service preselected) |
| Guide | Inline: the related case and service page | End: "Book free strategy call"; on deck guides the free 10-Slide Story Deck once live |
| Hubs | The child pages | "Book free strategy call" |

Button text is the site's existing CTA copy; no new wording beyond what Figma holds.

### 6.3 Lead alerts

Row 73: after rezkarim.com is on Cloudflare, the Worker sends Rez an email per new message through Cloudflare Email Routing's send email binding to his verified address (free). Until then the /stats Owner chip shows a count of unread messages. Security reviews the binding; B builds it behind a switch.

## 7. Risks

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Name collision keeps another Rezaul Karim first for the name | High | High: recruiters and AI tools describe the wrong person | §1.1 item 1; watch brand queries monthly |
| Pages judged scaled or thin, left unindexed | Medium | High | 20 then 10 at a time, gate §3.7, the 70% rule, merge or noindex what stays unindexed |
| The two sites compete for the same searches | Medium | Medium | §3.1 split, `intentKey` checked against the agency list |
| A concept read as client work | Medium | High (trust, hard rule 4) | Gate items 3 and 4; industry pages need a confirmed industry |
| Taste title surfaces through an outside profile | Unknown | High | §1.1 item 2, Rez checks |
| Prices or "raised" slip into a guide | Low | Medium | `content:lint` |
| AI written pages go live without Rez | Low | High | `reviewedBy` required for `live` |
| Organic leads stay low for months: marketplaces own "hire" results | High | Medium | The site converts traffic Rez already sends (applications, outreach, LinkedIn); off site profiles (Q9); long tail and guides for slow growth |
| Cloudflare bot settings block Google or AI crawlers | Low | High | 07 §4.6 settings, curl after launch |
| Nike trademark on the Nike Mind page | Low | Medium | "Not affiliated with Nike" kept; never in a title as a client |
| Facts drift as cases change | Medium | Medium | Claims registry, one home per fact |

## Rez decides

| # | Question | Options, recommended first |
|---|---|---|
| Q1 | How the new pages roll out | **20 at launch, then 10 every 2 weeks led by Search Console (Recommended)** · 40 at launch · All 38 proof backed pages at launch |
| Q2 | Hire pages | **A hub and 4 roles: brand, presentation, web, product (Recommended)** · Hub only · 8 roles as drafted |
| Q3 | The 100 page goal | **Publish what has proof (38 today, 53 once the waiting facts arrive) and add pages as cases, templates and tool lists arrive (Recommended)** · Fill to 100 now with thinner pages |
| Q4 | Guides both sites could write (cost, freelancer versus agency) | **Split by wording: the portfolio writes "X designer" questions, the agency "agency and services" ones; the comparison lives on the portfolio (Recommended)** · The portfolio owns all such guides · The agency owns them |
| Q5 | Contact form | **Add timeline chips and optional budget ranges (Recommended)** · Timeline only · No change |
| Q6 | GA4 and Clarity | **Neither; free cookieless tools and /stats (Recommended)** · A 2 week Clarity trial after launch, behind consent · GA4 |
| Q7 | Guide URLs | **`/guides/<slug>` (Recommended)** · `/blog/<slug>` |
| Q8 | The name collision | **Add RezBloom as an alternate name in the data and one About line that links name and handle (Recommended)** · Data only · Leave as is |
| Q9 | Off site profiles that rank for "hire" searches | **Update Contra and apply to Framer Experts if eligible, each linking to rezkarim.com (Recommended)** · Contra only · Not now |
| Q10 | Delineate on deck and SaaS pages | **Use the scope line from 00-facts: "At Delineate (YC W25) I designed the SaaS product, the website and the investor deck as one system" (Recommended)** · Name only ("Delineate (YC W25), past client") |
| Q11 | Numbers in the cost guides | **Explain what drives the cost and link my offers page, with no ranges on the guide (Recommended)** · Also quote one dated public range with its source |

Inputs only Rez has (no options): the tools he uses (Figma, Framer, PowerPoint, Keynote, Google Slides and others) for Hire and deck pages; whether he has Webflow work; the industries of LYFT, Livio, ReSpace and IsHamn if the case briefs don't say; whether the RezBloom Facebook and X profiles and the himalayas.app profile are his.

## For other tracks

| Track | Note |
|---|---|
| Operations | The gate's criteria are §3.7; you own the steps and who runs them. Batches of 10 every 2 weeks need a "next batch" prompt and the monthly refresh in the upkeep checklist. `intentKey` list from the agency's `data/pages.csv` should be exported into the repo once and refreshed when the agency list changes |
| Security | New hidden form fields (`landing`, `source`, `page`) and the budget, timeline and link fields need length limits and allow lists. `sessionStorage` lead source holds a path and a referrer group only, never a full referrer URL with query. MDX for guides: frontmatter plus a fixed set of components (FAQ, Proof, CaseCard, Figure, Callout), no raw HTML or imports. The send email binding for alerts. The optional AI crawler counter reads user agents only |
| Practices | Privacy page lists the lead source fields saved with messages and the cookieless counts. If Q6 stays "neither", no consent banner is needed for analytics. FAQ answers stay in the HTML when closed (07 §4.4). Timeline and budget are chips, not native selects or date pickers. Visible breadcrumbs on the new templates |
| Figma A, B | New templates: Hire, Industry, Deliverable, Guide, Guides index, Hub list, at 1440, 768 and 390, with blocks Answer, Proof, Cases, Includes, FAQ, Related, CTA, visible breadcrumb; a share image template for guides; footer links Hire and Guides; form chips for timeline and budget |
| Figma C | Confirm each case's industry and deliverables for the tags in §3.5, especially LYFT, Livio, ReSpace, IsHamn, Pulse (telecom or travel) |

## For the build chats

| Chat | Must do |
|---|---|
| F | Content schemas with every field in §3.5; `site/content/claims.ts` from 00-facts §3; routes for `/hire`, `/for`, `/<service>/<deliverable>`, `/guides`; `content:check` and `content:lint` with the §3.7 rules; sitemap, llms.txt and RSS from live files; Person `alternateName`; `pageMeta` handles the new families; a `redirects.ts` map |
| B | §5.2 referrer groups, family tags, events, lead source, qualified mark; §6.1 form fields with validation; recruiter role prefill from the query; alerts behind a switch until the domain |
| C | Case files carry `industries` and `deliverables` tags (only confirmed ones) and the reverse "Related" block (max 3, live pages) |
| D | Footer links (Hire, Guides) once Figma has them; About's For recruiters box links `/hire`; Home links the hubs where Figma allows |
| E | Templates for Hire, Industry, Deliverable, Guide and hubs; JSON-LD per §3.3; satori share images for every new page; 3 sample pages per family taken from batch 1; a test that parses every page's JSON-LD; IndexNow sends changed URLs only |
| W1, W2 | Write batch 1 (20) from the page map, then later batches. Per page: answer first, proof by registry key, 3 to 5 FAQs, dated sources, related links, no prices. Check the agency list before each guide. Both checks pass, status `ready`; Rez sets `live` |
| R | Rich Results Test and Schema Validator on one page per family; duplicate titles, descriptions and intent keys; orphan pages; noindex only where planned; sitemap and llms.txt list live pages only; Lighthouse on one page per new template |

## Sources

Read 27 Oct 2026 in BrowserOS, own background tab, no sign in.

- Google autocomplete (`google.com/complete/search`, `hl=en&gl=us`) and Bing autocomplete (`api.bing.com/osjson.aspx`, `en-us`) for about 100 seeds (Bing 20); the full lists are in §2.2 and the page map's evidence column.
- Google result pages (`hl=en&gl=us`, top 9 to 10 organic, People also ask, AI Overview present or not) for 29 queries, and Bing result pages for 3, all listed in §2.1 and the page map.
- Home pages and navigation of koad.com, lalitbahel.com, jessicajonesdesign.com, callthedesignguy.com, newtondesign.co, typennerdesign.com, whatifdesign.co, artone.studio, scocreative.com, startupdesignpro.com.
- Name queries: "Rezaul Karim designer", "Rez Karim designer", "RezBloom" on Google.
- The agency site's page list, read only: `F:\🚩 CLAUDE\rez-agency-website\data\pages.csv` and `docs\01-spec.md` §6 to §8.
- Google spam policies (scaled content abuse): https://developers.google.com/search/docs/essentials/spam-policies · Sitemaps limits: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap · HowTo rich result removal: https://developers.google.com/search/blog/2023/08/howto-faq-changes (cited from memory of the policy, not re-read today; check at build). Everything else on Google, Bing, Cloudflare and crawlers is cited in 07 §7 and still applies.
