# SEO page map

[README](../../../README.md) · Draft · 27 Oct 2026 · 100 candidate pages for the portfolio, beyond the 17 core routes and 21 cases. Rules, schema and rollout in [seo-aeo-geo.md](seo-aeo-geo.md). Rez approves or trims this list.

## How to read it

| Column | Meaning |
|---|---|
| Audience | job (recruiters, hiring managers), client (founders, B2B teams), other |
| Main question | The question the page answers in its first sentence. Not final copy |
| Evidence (27 Oct) | G = Google autocomplete, B = Bing autocomplete, P = Google "People also ask" (verbatim), S = what the Google results showed. Quotes are what people type; no volumes exist, none were estimated |
| Proof | Case slugs on the site, and claim keys from [00-facts.md](../../00-facts.md) §3: `earworm` ("Designed the investor deck used in Earworm's £200K pre-seed"), `delineate` ("Delineate (YC W25)", past client; `delineate-scope` is the 00-facts line on product, website and deck, Q10), `reviews` ("300+ client reviews"), `years` (6 years), `bdapps` (Startup Pitching Coach, 2022). Concepts are shown as work, never as clients |
| Batch | 1 = at launch · 2 = later batches, ordered by Search Console data · wait = waits on one named fact · drop = not built (merge names the page that covers it) |
| P | Priority inside its batch: P1 first |

**SolVita rule.** 00-facts §4: SolVita never shows alone, and wherever it shows, Earworm and the Real estate website sit above it. So no page below uses SolVita as proof unless both sit above it; the healthcare and Framer pages wait for a second case.

## Totals

| Batch | Rows |
|---|---|
| 1 (launch) | 20 |
| 2 (later, data led) | 18 |
| wait | 15 |
| drop or merge | 47 |
| **All** | **100** |

## Hire (job)

| # | URL | Audience | Main question | Evidence (27 Oct) | Proof | Batch | P |
|---|---|---|---|---|---|---|---|
| 1 | `/hire` | job | Is Rezaul Karim the right designer for my open role? | G "hiring brand designer remote", "remote presentation designer". S: job searches show job boards only, so this page serves applications and name searches | `earworm`, `delineate`, `reviews`, `years`; earworm, real-estate-website, syncgrid | 1 | P1 |
| 2 | `/hire/brand-designer` | job | Can this remote brand designer do the role? | G "remote brand designer", "remote senior brand designer", "hire brand identity designer". B "brand identity designer jobs remote" | `years`, `reviews`; syncgrid, yumyum, gravix (CV track Brand) | 1 | P1 |
| 3 | `/hire/presentation-designer` | job | Can we hire him as a presentation and pitch deck designer, remotely? | G "presentation designer portfolio", "pitch deck designer portfolio", "remote presentation designer", "presentation designer remote contracts". B "presentation designer remote" | `earworm`, `delineate-scope`; earworm, nike-mind (CV track PitchDeck) | 1 | P1 |
| 4 | `/hire/web-designer` | job | Can he design our marketing site and build it in Framer? | G "framer website designer jobs", "hire framer website designer". S framer.com Experts ranks for "framer website designer for hire" | `reviews`; real-estate-website, orion, respace (CV track Product) | 1 | P2 |
| 5 | `/hire/product-designer` | job | Has he designed SaaS and app interfaces? | G "freelance ux ui designers", "fractional product designer". B "freelance ui ux designer jobs" | `delineate-scope`; cortexai, orion, sama, livio | 2 | P2 |
| 6 | `/hire/social-media-designer` | job | | G "social media designer for hire" | Rez's posts only | drop | merge: `/social` and `/hire` |
| 7 | `/hire/visual-designer` | job | | None collected | Same as #2 | drop | merge: #2 |
| 8 | `/hire/contract-designer` | job | | B "contract freelance designer jobs" | — | drop | merge: #1 (availability line) |
| 9 | `/hire/marketing-designer` | job | | None collected | None distinct | drop | |
| 10 | `/hire/pitch-deck-designer` | job | | G "pitch deck designer jobs remote" | Same as #3 | drop | merge: #3 |
| 11 | `/hire/framer-designer` | job | | G "hire framer website designer" | Same as #4 | drop | merge: #4 |
| 12 | `/hire/ui-ux-designer` | job | | B "freelance ui ux designer" | Same as #5 | drop | merge: #5 |

## Industries (client)

| # | URL | Audience | Main question | Evidence (27 Oct) | Proof | Batch | P |
|---|---|---|---|---|---|---|---|
| 13 | `/for` | client | Which industries has he designed for? | S lalitbahel.com ranks #1 for "brand designer for saas startups" with "designer for X" pages | The live industry pages | 1 | P2 |
| 14 | `/for/saas` | client | Who can design the brand, website and deck for a SaaS startup? | G "saas website design services", "saas pitch deck design service", "saas dashboard design". S lalitbahel.com/brand-identity-designer-saas #1 | `delineate`, `earworm` (the PodPlanner SaaS story); syncgrid, cortexai, orion | 1 | P1 |
| 15 | `/for/real-estate` | client | Who can design a real estate brand and website? | G "real estate brand designer", "real estate website design services", "luxury real estate brand identity" | real-estate-website, azora, taif | 1 | P1 |
| 16 | `/for/ecommerce` | client | Who designs the store and brand for a new ecommerce business? | G "ecommerce website design services", "ecommerce website designer" | respace, ishamn (industry confirmed by Figma C or Rez) | 2 | P2 |
| 17 | `/for/restaurants-and-cafes` | client | Who designs restaurant and cafe brands? | G "restaurant brand identity design", "cafe brand identity design", "cafe branding design" | yumyum, bristo | 2 | P2 |
| 18 | `/for/healthcare` | client | Who designs healthcare brands and clinic websites? | G "healthcare brand designer", "medical brand identity design" | SolVita (rule above) plus Omega Health Care, Coming soon (row 30) | wait | Omega case live |
| 19 | `/for/fintech` | client | Who designs fintech brands? | G "fintech logo design", "fintech visual identity", "fintech brand identity" | gravix only | wait | A second fintech case |
| 20 | `/for/ai-startups` | client | Who designs brands and sites for AI startups? | G "ai startup brand identity", "ai startup website design" | cortexai only | wait | A second AI case, or Rez confirms Delineate is AI |
| 21 | `/for/travel` | client | | None collected | sama, pulse | drop | No demand seen |
| 22 | `/for/logistics` | client | | Agency list only | cargoshift (1 case) | drop | Agency site owns logistics |
| 23 | `/for/web3` | client | | G "web3 branding agency" (agency intent) | nexus (1 case) | drop | |
| 24 | `/for/beauty-skincare` | client | | Agency list only | alpha (1 case) | drop | |
| 25 | `/for/startups` | client | | G "startup brand designer" | — | drop | merge: Home and `/brand` own "for startups" |

## Deliverables (client), under the service pages

| # | URL | Audience | Main question | Evidence (27 Oct) | Proof | Batch | P |
|---|---|---|---|---|---|---|---|
| 26 | `/decks/saas-pitch-deck` | client | Who designs a SaaS investor deck? | G "saas pitch deck design service", "saas investor deck". S agencies dominate | `earworm`, `delineate-scope`; earworm, nike-mind | 1 | P1 |
| 27 | `/decks/investor-deck-design` | client | | G "investor deck design ideas" | Same as `/decks` | drop | merge: `/decks` |
| 28 | `/decks/pitch-deck-redesign` | client | Can a designer fix my existing deck fast? | S "pitch deck redesign service" (agencies) | earworm, if Rez confirms it began from an older deck; the 72-Hour Deck Rescue offer (price stays off the page) | wait | Rez confirms |
| 29 | `/decks/sales-deck-design` | client | | G "sales deck design examples" | No sales deck case | drop | |
| 30 | `/decks/company-profile-design` | client | | G "company profile design service" | No case | drop | |
| 31 | `/decks/presentation-design` | client | Who designs decks in PowerPoint, Keynote or Google Slides? | G "presentation designer", "presentation designer freelance" | earworm, nike-mind; tools to confirm | wait | Rez's tool list |
| 32 | `/decks/pre-seed-pitch-deck` | client | | G "pre seed pitch deck structure" (informational) | earworm | drop | merge: #54 |
| 33 | `/brand/logo-design` | client | Who designs a logo system for a startup? | G "logo design services for startups", "logo designer for startups", "logo vs visual identity" | syncgrid, cargoshift, pulse, gravix | 1 | P1 |
| 34 | `/brand/brand-guidelines` | client | Who makes brand guidelines my team will actually use? | G "brand guidelines designer", "how much do brand guidelines cost", "brand guidelines template" | Omega Health Care, Coming soon (row 30) | wait | Omega case live |
| 35 | `/brand/packaging-design` | client | Who designs packaging that matches the brand? | G "packaging designer freelancer", "food packaging designer freelance" | alpha, yumyum | 2 | P3 |
| 36 | `/brand/startup-branding` | client | | G "startup brand identity" | Same as `/brand` | drop | merge: `/brand` |
| 37 | `/brand/rebrand` | client | | P "Is rebranding risky?" | No rebrand case | drop | |
| 38 | `/brand/brand-strategy` | client | | None collected | taif only | drop | |
| 39 | `/product/dashboard-ui-design` | client | Who designs SaaS dashboards and product UI? | G "saas dashboard design", "dashboard ux designer", "dashboard ui design" | `delineate-scope`; orion, cortexai | 1 | P1 |
| 40 | `/product/mobile-app-design` | client | Who designs mobile apps for startups? | G "mobile app design freelancer" | sama, livio, lyft, respace | 2 | P2 |
| 41 | `/product/framer-website-design` | client | Who designs and builds startup sites in Framer? | G "framer website designer for hire", "framer website design cost". S Framer Experts ranks | SolVita only (rule above) | wait | A second Framer case |
| 42 | `/product/saas-website-design` | client | | G "saas website design services" | Same as #14 | drop | merge: #14 |
| 43 | `/product/ecommerce-website-design` | client | | G "ecommerce website design services" | Same as #16 | drop | merge: #16 |
| 44 | `/product/landing-page-design` | client | | G "startup page design", "launch website design" | No landing page case on the site | drop | |
| 45 | `/product/website-redesign` | client | | Empty suggestions | No case | drop | |
| 46 | `/product/real-estate-website` | client | | G "real estate website design services" | Same as #15 | drop | merge: #15 |
| 47 | `/product/shopify-website` | client | | G "shopify website designer freelancer" | No Shopify case | drop | |
| 48 | `/social/carousel-design` | client | Who designs LinkedIn and Instagram carousels? | G "carousel post design for linkedin", "instagram carousel design" | Rez's posts on `/social` (no labels, row 81); `reviews` | 2 | P3 |
| 49 | `/social/ad-creatives` | client | | None collected | Weak | drop | |
| 50 | `/linkedin/banner-design` | client | Who designs a LinkedIn banner for a founder? | G "linkedin banner designer", "linkedin cover designer". S "linkedin banner design for founders": template galleries rank | Sam Bendix's refresh (rows 27, 28) | 1 | P2 |
| 51 | `/linkedin/featured-section` | client | | G "linkedin featured section examples" | Same as `/linkedin` | drop | merge: `/linkedin` and #81 |
| 52 | `/linkedin/founder-profile` | client | | G "linkedin profile design services" | Same as `/linkedin` | drop | merge: `/linkedin` |

## Guides and comparisons, `/guides` (client, job, AI answers)

| # | URL | Audience | Main question | Evidence (27 Oct) | Proof | Batch | P |
|---|---|---|---|---|---|---|---|
| 53 | `/guides` | client | What does Rezaul Karim write about? | S individuals rank with answer guides (callthedesignguy.com, jessicajonesdesign.com) | The live guides | 1 | P1 |
| 54 | `/guides/pre-seed-pitch-deck` | client | What should be in a pre-seed pitch deck? | G "pre seed pitch deck structure", "pre seed pitch deck slides". P same question. B "seed stage investor pitch deck", "pitch deck for seed funding" | `earworm`; earworm | 1 | P1 |
| 55 | `/guides/pitch-deck-slides` | client | What slides do investors expect in a pitch deck? | P "What do investors look for in a pitch deck?", "What slides are needed in a pitch deck?". G "how many slides should be in a pitch deck". B "investor deck structure" | `earworm`; earworm, nike-mind | 1 | P1 |
| 56 | `/guides/10-20-30-rule` | client | What is the 10/20/30 rule for pitch decks? | P in 5 of the 29 result pages | `earworm`; earworm; the free 10-Slide Story Deck once live | 1 | P1 |
| 57 | `/guides/pitch-deck-designer-cost` | client | How much does a pitch deck designer cost? | G "pitch deck designer cost", "how much does a pitch deck designer cost". P "How much does it cost to design a pitch deck?" | `earworm`; earworm. No prices; links /work-with-me | 1 | P1 |
| 58 | `/guides/pitch-deck-designer` | client | What does a pitch deck designer do, and when should I hire one? | P "What is a pitch deck designer?", "Can you hire someone to create a pitch deck?". G "hire someone to make a pitch deck" | `earworm`; earworm | 2 | P2 |
| 59 | `/guides/ai-pitch-deck-vs-designer` | client | Can AI make my pitch deck, or do I need a designer? | G "pitch deck designer ai". P "Can Chatgpt do graphic design?", "Is AI replacing graphic designers?" | `earworm`; the /decks line (spec §2) | 2 | P2 |
| 60 | `/guides/seed-vs-pre-seed-deck` | client | | G "seed vs pre seed pitch deck" variants | earworm (pre-seed only) | drop | merge: #54 |
| 61 | `/guides/saas-pitch-deck-examples` | client | | G "saas pitch deck examples" | Example libraries own it; Rez can't show others' decks | drop | |
| 62 | `/guides/brand-designer-cost` | client | How much does it cost to hire a brand designer? | P "How much do brand designers charge?", "How much does it cost to hire a brand designer?". G "how much does a full brand identity cost" | `reviews`; syncgrid, yumyum. No prices | 1 | P1 |
| 63 | `/guides/how-long-brand-identity-takes` | client | How long does a brand identity take? | G "how long does it take to design a brand identity". P "What are the 7 stages of the branding process?" | Brand 2 to 3 weeks (row 36); the 21-Day Brand & Website Launch offer name; syncgrid | 1 | P1 |
| 64 | `/guides/brand-identity-process` | client | What happens in a brand identity project, step by step? | G "brand identity design process", "brand guidelines process". P "What are the 7 stages of the branding process?" | How I work (spec §5); syncgrid's 3 design decisions | 1 | P1 |
| 65 | `/guides/brand-guidelines` | client | What goes into brand guidelines? | P "What are examples of brand guidelines?". S result page "what is included in brand guidelines" | Omega Health Care, Coming soon | wait | Omega case live |
| 66 | `/guides/3-7-27-rule` | client | What is the 3 7 27 rule in branding? | P "What is the 3-7-27 rule in branding?" in 4 of the 29 result pages | syncgrid, pulse as examples. The rule's name needs a hyphen exception or the spaced form | 2 | P3 |
| 67 | `/guides/logo-vs-brand-identity` | client | Is a logo the same as a brand identity? | G "logo vs visual identity", "logo and brand identity" | syncgrid, cargoshift | 2 | P2 |
| 68 | `/guides/what-a-brand-identity-designer-does` | client | What does a brand identity designer do? | G "what does a brand identity designer do". P same, on the fintech result page | `years`; syncgrid, yumyum | 2 | P2 |
| 69 | `/guides/how-to-brief-a-designer` | client | How do I brief a designer? | G "how to brief a graphic designer", "how to write a brief for a graphic designer". B "design brief template", "design brief examples" | How I work (spec §5); earworm | 1 | P1 |
| 70 | `/guides/how-to-hire-a-freelance-designer` | client | How do I hire a freelance designer? | P "How to hire a freelance designer?" in 3 result pages | `reviews`; How I work | 2 | P2 |
| 71 | `/guides/how-to-choose-a-brand-designer` | client | | S scocreative.com, forbes.com rank | Same as #70 | drop | merge: #70 |
| 72 | `/guides/freelance-designer-vs-agency` | client | Should a startup hire a freelance designer or an agency? | P "What is the difference between a freelancer and an agency?". G "freelance vs design agency" | `reviews`. The agency list has the same guide (G09) | wait | Q4, which site owns it |
| 73 | `/guides/fractional-designer` | client | What is a fractional designer? | G "fractional designer meaning", "fractional product designer". S callthedesignguy.com ranks | The Monthly design support offer (no price) | 2 | P3 |
| 74 | `/guides/design-subscription-vs-freelancer` | client | | Empty suggestions | — | drop | Agency topic |
| 75 | `/guides/framer-vs-webflow` | client | Framer or Webflow for a startup website? | P "Is Webflow better than Framer?", "Is Framer good for building websites?". S Zapier, Mercury, Framer rank | SolVita (rule above); Webflow work to confirm | wait | Rez's Webflow experience and a second Framer case |
| 76 | `/guides/framer-website-cost` | client | How much does a Framer website cost? | G "framer website design cost", "framer website development cost". P "How much to charge for a Framer website?" | SolVita only (rule above) | wait | A second Framer case |
| 77 | `/guides/saas-website-must-haves` | client | What does a SaaS website need at launch? | G "saas website design examples", "saas website design ideas" | orion; `delineate` | 2 | P3 |
| 78 | `/guides/startup-website-checklist` | client | | G "startup website design ideas" | Same as #77 | drop | merge: #77 |
| 79 | `/guides/linkedin-banner-for-founders` | client | What should a founder put on a LinkedIn banner? | G "linkedin banner design ideas", "linkedin banner design size". S "linkedin banner design for founders" | Sam Bendix's refresh | 2 | P2 |
| 80 | `/guides/linkedin-banner-size` | client | | G "linkedin banner design size" | Same as #79 | drop | merge: #79 |
| 81 | `/guides/linkedin-featured-section` | client | What should go in the LinkedIn Featured section? | G "what to put in featured section on linkedin", "linkedin featured section examples" | Sam Bendix's Featured section | 2 | P2 |
| 82 | `/guides/linkedin-carousel-design` | client | | G "carousel design ideas for linkedin" | Same as #48 | drop | merge: #48 |
| 83 | `/guides/brand-designer-job-description` | job | What should a brand designer job description ask for? | G and B "brand identity designer job description" | `years`; syncgrid, yumyum | 2 | P2 |
| 84 | `/guides/presentation-designer-job-description` | job | What does a presentation designer do in a role, and what should the post ask for? | G "presentation designer job description", "presentation designer responsibilities" | `earworm`; earworm | 2 | P2 |
| 85 | `/guides/how-to-become-a-presentation-designer` | other | | P "How to become a presentation designer?" | — | drop | Readers are designers, not buyers |
| 86 | `/guides/brand-designer-portfolio-examples` | other | | G "brand designer portfolio examples" | — | drop | Readers are designers |
| 87 | `/guides/canva-vs-designer` | client | | G "is canva good for graphic design", "do designers use canva" | Weak | drop | |
| 88 | `/guides/pitch-deck-template-vs-designer` | client | Should I use a pitch deck template or hire a designer? | G "pre seed pitch deck template" and many template suggestions; the "vs" phrase itself is empty | The 10-Slide Story Deck | wait | Template live (rows 31, 32) |
| 89 | `/guides/marketplace-vs-direct` | client | | — | — | drop | Would name marketplaces (draft rule 7) |
| 90 | `/guides/how-many-slides` | client | | G "how many slides should be in a pitch deck" | Same as #55 | drop | merge: #55 |

## Other openings

| # | URL | Audience | Main question | Evidence (27 Oct) | Proof | Batch | P |
|---|---|---|---|---|---|---|---|
| 91 | `/free/10-slide-story-deck` | client | Where can I get a free pre-seed pitch deck template? | G "pre seed pitch deck template", "pre seed pitch deck pdf" | The template | wait | Template live (rows 31, 32); `/free` noindex until then (row 57) |
| 92 | `/free/linkedin-profile-kit` | client | Is there a free LinkedIn banner kit for Canva? | G "linkedin banner design canva", "linkedin banner design template" | The template | wait | Template live |
| 93 | `/mentoring` | other | | G "pitch coaching for startups" empty; "pitch deck coach" shows templates | `bdapps` | drop | Keep as a line on About |
| 94 | `/scorecard` | client | How does my brand, website and deck read to a stranger? | Agency list G05 only | Spec §3 "added last" | wait | Spec: built last |
| 95 | `/tools` | job | | S jessicajonesdesign.com/tools-i-use | Tools to confirm | drop | merge: the Hire roles |
| 96 | `/speaking` | other | | — | None | drop | |
| 97 | `/for/accelerators` | other | | Empty "design partner for startups" | None | drop | |
| 98 | `/white-label` | agency | | S agency queries | — | drop | Agency site owns it; `/agencies` stays noindex |
| 99 | `/glossary/<term>` | client | | — | — | drop | Agency site plans a glossary |
| 100 | `/work/<service>` filtered views | client | | — | Same as the service pages | drop | Duplicate |

## Batch 1, at launch (20)

`/hire`, `/hire/brand-designer`, `/hire/presentation-designer`, `/hire/web-designer` · `/for`, `/for/saas`, `/for/real-estate` · `/decks/saas-pitch-deck`, `/brand/logo-design`, `/product/dashboard-ui-design`, `/linkedin/banner-design` · `/guides`, `/guides/pre-seed-pitch-deck`, `/guides/pitch-deck-slides`, `/guides/10-20-30-rule`, `/guides/pitch-deck-designer-cost`, `/guides/brand-designer-cost`, `/guides/how-long-brand-identity-takes`, `/guides/brand-identity-process`, `/guides/how-to-brief-a-designer`.

E's 3 sample pages per family come from this list.
