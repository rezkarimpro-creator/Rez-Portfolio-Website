# Facts from Rez's outside files

[README](../README.md) · Draft · 22 Oct 2026 · The in-project home for every fact the portfolio build needs from Rez's outside files (Rez chose this file on 22 Oct, [10-confirmations.md](10-confirmations.md) row 90). The outside files live only on Rez's PC; a build on another PC works from this file. Rez's answers in 10-confirmations.md win over anything here.

## How to read this

- Each line names its source and the date it was read. Every source was read on 22 Oct 2026, read only.
- Sources, all on Rez's PC only:

| Short name | File |
|---|---|
| CONTEXT | `F:\###Cursor\Rez Assesment_05_Sep_2026\CONTEXT.md` |
| profile | `F:\###Cursor\Rez Assesment_05_Sep_2026\01-profile.md` |
| portfolio | `F:\🚩 CLAUDE\Behance Dribble Contra Linkedin Apply\portfolio.md` |
| PLAN | `F:\🚩 CLAUDE\Behance Dribble Contra Linkedin Apply\PLAN.md` |
| Resume_Studio | `G:\REZ Resume\Rez Resume (15 Aug_2026)_Cursor 3X Resume\🟢 Resume_Studio\styles.css` and `index.html` |
| root CLAUDE.md | [../CLAUDE.md](../CLAUDE.md), hard rules (in this project) |

- Left out on purpose: anything about Taste Labs (hard rule 3), money, private business facts, phone numbers and home addresses.
- A fact that isn't here or in the project docs is "to confirm". Ask Rez; never fill the gap.

## 1. Identity

| Fact | Value | Source |
|---|---|---|
| Name on the site | Rezaul Karim, everywhere except the email (Rez, 21 Oct) | profile §1, 22 Oct; Rez's call in [CLAUDE.md](CLAUDE.md) |
| Short name and handle | "Rez" · @RezBloom everywhere | profile §1, 22 Oct |
| Public email | rezkarim.pro@gmail.com | profile §1, 22 Oct |
| Booking | https://cal.com/rezkarim/deck-call · 20 minutes · Sunday to Thursday. The event title becomes "Strategy call"; the link stays (row 43) | profile §1, 22 Oct; CONTEXT Status, 22 Oct |
| Location on the site | "Remote" only. No city or country ([10-confirmations.md](10-confirmations.md) row 50 and "Settled earlier"; Rez, 22 Oct). The source gives a city; the site never shows it | profile §1, 22 Oct |
| Works with | US and UK teams, remote | profile §1, 22 Oct |
| Education | RUET, Bachelor's in Industrial Engineering, 2016 to 2021. The 07 Oct CVs and the site say "Industrial & Production Engineering, Rajshahi University of Engineering & Technology (RUET)" | profile §1, 22 Oct |
| Languages | Bengali (native), English (professional) | profile §1, 22 Oct |
| Path | Self-taught: photo editing, then branding, pitch decks and UI/UX | profile §1, 22 Oct |
| Years of experience | 6 years ("I've spent 6 years designing products, brands and pitch decks for startups.") | PLAN §8 sample, 22 Oct |
| Awards | BASIS Innovative Project Award (2020) · National Hackathon on Frontier Technologies winner (2020) | profile §3, 22 Oct |
| Mentoring | Startup Pitching Coach, bdapps, Sep to Oct 2022 (Mentor, BdApps National Hackathon 2022) | profile §3, 22 Oct |
| Profiles | behance.net/RezBloom · dribbble.com/RezBloom · instagram.com/rezbloom. LinkedIn is linkedin.com/in/rezbloom (from [07-search-and-speed-plan.md](07-search-and-speed-plan.md) §4.7) | portfolio §7, 22 Oct |

Career roles and dates on the site come from the 07 Oct CVs and live in `site/src/data/career.ts`, with two changes from Rez on 22 Oct: Taste Labs is removed from the whole site (row 61), and DashBloom reads Product Designer, Jan 2024 to Sep 2026, a past role, so no role is current (row 78).

## 2. Public role wording

| Rule | Source |
|---|---|
| Rez is a designer. Never "Founder", "Co-founder", "CEO", "Owner", "my agency", "my studio" or "we" meaning a studio, anywhere public | profile §1, 22 Oct; root CLAUDE.md hard rule 1 |
| DashBloom may appear only as an employer or a studio credit, for example "Studio: DashBloom" on cases done there. On the site it is a past employer (row 78) | profile §1, 22 Oct |
| Sell as Rez, the person | profile §1, 22 Oct |
| Some Behance boards list co-owners for reach only; the work is Rez's. Credits on the site follow each case's My role lines, never the Behance owner list | profile §4 and §5, 22 Oct; CONTEXT "Rez in one screen", 22 Oct |

## 3. Proof and claims, word for word

| Claim | Exact wording and limits | Source |
|---|---|---|
| Earworm | "Designed the investor deck used in Earworm's £200K pre-seed". Never "raised" or "raised £200K". Earworm is a Bristol podcast studio; the deck reframed the story around their SaaS (PodPlanner); the £200K pre-seed was in April 2025. The client OK'd naming (3 Oct) | root CLAUDE.md hard rule 4; profile §5, 22 Oct |
| Earworm year | 2023 per LinkedIn (Designer, Earworm, contract, UK, Sep to Nov 2023). The site shows no years on cases (row 81) | profile §3, 22 Oct |
| Earworm website | Design only, in Figma, never built. Never say it was built | profile §5, 22 Oct |
| Earworm quote | Only "The final deck gave us a much stronger way to explain where Earworm is going and why the opportunity matters." Ben Farley, Founder & CEO (rows 25, 79, 80) | 10-confirmations, 22 Oct |
| Delineate | "Delineate (YC W25)" as a past client. Name the company and the batch, never "YC" as Rez's own. Never the $500K figure (it is YC's standard deal and under NDA). No Delineate case on the site | root CLAUDE.md hard rule 4; profile §5, 22 Oct; CONTEXT "CV rules", 22 Oct |
| Delineate scope | Product UI, website and pitch in one system ("At Delineate (YC W25) I designed the SaaS product, the website and the investor deck as one system") | profile §5, 22 Oct; PLAN §8 sample, 22 Oct |
| Reviews | "300+ client reviews". Never name Fiverr | root CLAUDE.md hard rule 4; profile §5, 22 Oct |
| SolVita | Healthcare brand identity and website, Rez's own client project (Rez, 22 Oct, row 3). The site shows no studio line, and the Role "Designer, brand identity and website" (confirm at launch). Some Behance credits name DashBloom; the site does not | profile §5, 22 Oct; Rez in chat, 22 Oct |
| Other work | SyncGrid, Pulse eSIM, ALPHA skincare, Taif PropTech, Prime Properties, Lexor, NeoWallet, HiNaia, Glaze Dental, Neatify, Logistics, YumYum: a mix of client and self-initiated work. On the site, no Client or Concept labels (row 81) | profile §5, 22 Oct |
| Headline | "Brand & website designer for startups and B2B teams." Under it: "Brand systems, websites and pitch decks, plus social and LinkedIn design." | [README](../README.md); [01-portfolio-spec.md](01-portfolio-spec.md) §2 |

## 4. Case codes, Behance links and the ordering rule

The Kind column is internal (client or concept, from the Behance pages). The site shows no Client or Concept labels and no years (row 81).

| Code | Project | Kind (internal) | Link | Source |
|---|---|---|---|---|
| D1 | Investor Pitch Deck, Earworm (Podcast SaaS) | Client, used in a £200K pre-seed | https://www.behance.net/gallery/255544227/Investor-Pitch-Deck-Design-Earworm-%28Podcast-SaaS%29 | portfolio §2, 22 Oct |
| D2 | Pitch Deck Concept, Nike Mind (Unofficial). The site keeps "Not affiliated with Nike" | Concept | https://www.behance.net/gallery/247925293/Pitch-Deck-Design-Concept-Nike-Mind-%28Unofficial%29 | portfolio §2, 22 Oct |
| B1 | SolVita, Healthcare Brand Identity & Website, the website built in Framer | Client | https://www.behance.net/gallery/234549375/SolVita-Healthcare-Brand-Identity-Website | portfolio §2, 22 Oct |
| B2 | SyncGrid, Brand Identity for HR SaaS | Concept | https://www.behance.net/gallery/243280055/SyncGrid-Logo-Brand-Identity-for-HR-SaaS-Platform | portfolio §2, 22 Oct |
| B3 | Shipping & Logistics Brand Identity. Whether CargoShift is B3 is to confirm (row 68) | Concept | https://www.behance.net/gallery/247350041/Shipping-Logistics-Brand-Identity | portfolio §2, 22 Oct |
| B4 | ALPHA, Skincare Brand Identity and Packaging | Not stated on Behance; the spec lists it as a concept | https://www.behance.net/gallery/245364761/Skincare-Brand-Identity-Logo-Design-ALPHA | portfolio §2, 22 Oct |
| B5 | Pulse, eSIM Brand Identity | Concept | https://www.behance.net/gallery/253234089/eSIM-Brand-Identity-Logo-Design-Pulse | portfolio §2, 22 Oct |
| B6 | YumYum, Japanese Restaurant Brand Identity | Concept | https://www.behance.net/gallery/254660533/YumYum-Japanese-Restaurant-Brand-Identity | portfolio §2, 22 Oct |
| B7 | Omega Health Care, Brand Guidelines, a multi page brand book in Figma. Read only with Rez's OK (row 30: Coming soon for now) | Client | https://www.figma.com/design/YHHkLKsY6kz9dI4fDoE5Kl/Omega-Health-Care-Branding-Guideline?node-id=1-2570 | portfolio §2, 22 Oct |
| W1 | Real Estate Website. Client name and year to confirm (row 2) | Not stated on Behance; the spec lists it as client work | https://www.behance.net/gallery/244757283/Real-Estate-Website-UIUX-Design | portfolio §2, 22 Oct |
| W2 | Shipping & Logistics Website | Not stated | https://www.behance.net/gallery/246849673/Shipping-Logistics-Website-Design | portfolio §2, 22 Oct |
| W3 | Solar & Renewable Energy Website | Not stated | https://www.behance.net/gallery/249757311/Solar-Renewable-Energy-Website-Design | portfolio §2, 22 Oct |
| W4 | Cleaning Service Landing Page | Not stated | https://www.behance.net/gallery/244410121/Cleaning-Service-Website-UIUX-Design | portfolio §2, 22 Oct |
| W5 | Furniture E-Commerce Website | Not stated | https://www.behance.net/gallery/250681265/Furniture-E-Commerce-Website-Design | portfolio §2, 22 Oct |
| W6 | Law Firm Website | Not stated | https://www.behance.net/gallery/245879463/Law-Firm-Website-Design-Legal-Services-UI-UX | portfolio §2, 22 Oct |
| W7 | Grocery E-Commerce Website | Not stated | https://www.behance.net/gallery/256758703/Grocery-E-Commerce-Website-UIUX-Design | portfolio §2, 22 Oct |
| A1 | Real Estate Mobile App. Joins after this build (row 69) | Not stated on Behance; the spec lists it as client work | https://www.behance.net/gallery/243517255/Real-Estate-Mobile-App-UIUX-Design | portfolio §2, 22 Oct |
| A2 | Fitness App, dark UI with data charts | Not stated | https://www.behance.net/gallery/254118309/Fitness-App-UiUx-Design | portfolio §2, 22 Oct |

- **Ordering rule** (18 Oct 2026): never show SolVita (B1) alone. Wherever it appears with other cases, Earworm (D1) and the Real Estate Website (W1) sit above it, B1 last. Source: portfolio §3, 22 Oct.
- Behance resolves a project by its number, so `behance.net/gallery/255544227` opens D1. Source: portfolio §1, 22 Oct.
- Projects on Behance under the DashBloom profile without Rez as an owner are not his on record; never use them. Source: portfolio §6, 22 Oct.
- Two Behance images the site must never use: the Earworm cover that says "funding raised", and image re-05 on the Real Estate Website board (a dental clinic's text). Source: [10-confirmations.md](10-confirmations.md) row 77.

## 5. Voice and writing rules

From PLAN §8, read 22 Oct 2026, for all copy on the site and any client facing text.

- Human, direct, relevant, conversational.
- No em dash, colon, semicolon or hyphen. On the site the exceptions are names and locked claims ("pre-seed", "10-Slide", "21-Day", "72-Hour"), per [07-search-and-speed-plan.md](07-search-and-speed-plan.md) §2.
- Short. 2 to 4 sentences unless the form asks for more.
- One real proof point per answer. No filler, no buzzwords.
- Emails, links and file names are exempt from the punctuation rule.
- The reader should feel calm and comfortable: friendly, confident, professional, expert, warm.
- Say you deliver fast and keep the client informed.
- A skill gap is said briefly and kindly, as something new, not as a warning.
- On the site, "I", Rez as a designer (root CLAUDE.md hard rule 1).

## 6. Fonts and colors

From Resume_Studio `styles.css` and `index.html`, read 22 Oct 2026. The V4a design tokens in [06-design-system.md](06-design-system.md) are what the build uses; these are the roots they came from.

| Item | Value | Source |
|---|---|---|
| Body font | Plus Jakarta Sans, weights 400, 500, 600, 700, 800 (Fontsource files), fallback -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif | Resume_Studio styles.css, 22 Oct |
| Script font | Zeyada (Google Fonts), for the script greeting | Resume_Studio styles.css and index.html, 22 Oct |
| Headline serif | Newsreader, new on the site, headlines only (row 66). Not in Resume_Studio | [06-design-system.md](06-design-system.md) §4 |
| CV text colors | dark #11141a · body #2b2f38 · sub #4b515d · line #d1d5db | Resume_Studio styles.css `--res-*`, 22 Oct |
| Studio app colors | background #0c0f15 · raised #161b22 · border #21262d · accent #3b82f6 (hover #2563eb) · text #f0f6fc · muted #8b949e | Resume_Studio styles.css `:root`, 22 Oct |

## 7. To confirm

Not in any source, so the site hides them or leaves them out until Rez answers (each is a row in [10-confirmations.md](10-confirmations.md)):

- Real estate website client name (row 2), SyncGrid's studio line (row 5), CargoShift and Pulse roles (rows 6, 7), whether CargoShift is B3 (row 68).
- Every role line on the cases before launch (gate G1).

## Rez's answers, 28 Oct 2026 (review of the V4a build, in chat)

| Fact | Value | Used on |
|---|---|---|
| Tools he uses | Figma, Framer, Adobe Illustrator, Adobe Photoshop, PowerPoint, Keynote, Google Slides, Claude, GitHub, Slack, Notion, Loom, Canva | Hire role pages (for-rez.md §3 F1) |
| CargoShift and Pulse role | "Designer, brand identity" | Their My role cards |
| Industries | Livio: real estate. LYFT: fitness. ReSpace and IsHamn: ecommerce | Case tags, industry pages (§3 F3) |
| Still hidden, by his choice | The Real estate client name, SyncGrid's studio, the recruiter password case (row 40), the 4 invite tiles except Sam's (row 29), the revisions and payment FAQs (row 34), the Free "What's inside" list (row 31); Gumroad rows stay Coming soon (row 32) | — |
| Go live | All 21 cases and the 20 batch 1 SEO pages | `status: live`, `reviewedBy` Rez, 28 Oct |
