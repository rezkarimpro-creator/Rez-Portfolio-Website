# Portfolio site: build spec

[README](../README.md) · Locked 19 Oct 2026, updated 22 Oct 2026 with Rez's answers in [10-confirmations.md](10-confirmations.md) (rows 49 to 51, 60 to 67, 78, 81; Rez OK'd these spec changes) · Replaces `briefs/2026-10-18_portfolio-site.md` in the plan repo once Rez OKs that change there. New since that brief: the broader position, /social, /linkedin, the free templates, more client cases, and building in Rez's own folder before the domain is bought.

## 1. Job

Replace Behance as the main link in job applications, outreach and agency pitches, and turn those visits into calls, CV downloads and replies. Behance stays for reach and for forms that ask for it.

| Visitor | From | Must see in 30 seconds | Path |
|---|---|---|---|
| Recruiter or hiring manager | A job application or message | The track that matches the CV, strong cases, "My role", the CV | Track page → CV |
| Founder, B2B team or MNC team | Warm messages, outreach, LinkedIn, Behance | Proof, the closest case, the call | Home or a service page → call |
| Agency | Agency outreach | You work under their brand; hours, formats, the pilot | /agencies → reply |

## 2. Position and proof (exact wording)

- **Headline:** "Brand & website designer for startups and B2B teams." Under it: "Brand systems, websites and pitch decks, plus social and LinkedIn design."
- **On /decks only (optional):** "AI can make slides. It can't make investors believe."
- **Proof bar:** "Designed the investor deck used in Earworm's £200K pre-seed" (never "raised") · Delineate (YC W25) as a past client, with no case and no $500K figure (NDA) · "300+ client reviews" (Fiverr not named) · SolVita brand and website.
- **Contact:** Remote (no city or country on the site, Rez 22 Oct) · rezkarim.pro@gmail.com · "Book free strategy call" → https://cal.com/rezkarim/deck-call.

## 3. Sitemap

| Page | Job | Linked from |
|---|---|---|
| / | Headline, proof bar, selected cases, career highlights, services, how I work, archive, free templates, CTA (the V4a order, §5) | — |
| /brand | Brand identity: logo systems, guidelines | Menu |
| /product | Web & UI/UX: websites, landing pages, apps, Framer builds | Menu |
| /decks | Pitch decks, company profiles, sales decks, documents | Menu |
| /social | Social media posts, carousels, ad creatives | Menu |
| /linkedin | LinkedIn profile design: photo, banner, Featured | Menu |
| /work/{case} | Case pages | Service pages |
| /about | Bio, experience, awards, "For recruiters" box with the one "Ask for my CV" path | Menu |
| /contact | Cal.com and email | Menu button |
| /work-with-me | Named offers and starting prices | Footer and outreach only · noindex |
| /agencies | White-label terms and the pilot | Footer and agency outreach only · noindex |
| /free | Free templates #6 and #7, linking to Gumroad | Footer and posts |
| /scorecard | Lead magnet #5, the Cold-Read Scorecard | Added last |
| 404, sitemap.xml, robots.txt | — | — |

/brand, /product and /decks mirror the 3 CV tracks (Brand, Product, PitchDeck), so each application links to its match. The CVs themselves never appear on the site: recruiters get one "Ask for my CV" path to the Recruiter form on /contact (row 63).

## 4. Cases

Codes from the apply project's portfolio.md, copied into [00-facts.md](00-facts.md). **Ordering rule:** wherever SolVita appears with other cases, Earworm (D1) and the Real Estate website (W1) sit above it.

The Label column is internal, for ordering and honesty checks only. The site shows no Client, Concept or To confirm tag and no year on any case, anywhere: Work cards, case pages, Home and share images (row 81). Nike Mind keeps "Not affiliated with Nike".

| # | Code | Case | Page | Label (internal) | Images from |
|---|---|---|---|---|---|
| 1 | D1 | Earworm investor deck | /decks | Client | Behance |
| 2 | W1 | Real estate website | /product | Client | Behance |
| 3 | A1 | Real estate app | /product | Client | Behance |
| 4 | B7 | Omega Health Care brand guidelines | /brand | Client | Figma |
| 5 | B1 | SolVita brand identity + website (built in Framer) | /brand and /product | Client | Behance |
| 6 | — | Astra | To decide | Client | Rez sends files |
| 7 | — | GHX Summit | To decide | Client | Rez sends files |
| 8 | D2 | Nike Mind deck | /decks | Concept | Behance |
| 9 | B2 | SyncGrid brand identity | /brand | Concept | Behance |
| 10 | B3 | Shipping & Logistics brand identity | /brand | Concept | Behance |
| 11 | B4 | ALPHA skincare brand | /brand | Concept | Behance |

- Work under NDA stays off, with no anonymous NDA card (row 60).
- Ship what's ready. Astra and GHX Summit join once you send the files and confirm they aren't under NDA.
- /social uses 6–9 of your own 120+ posts in Figma, shown without labels (row 81).
- /linkedin shows Sam's refresh (he agreed, row 27).
- Home "Selected work" shows, in order: Earworm investor deck (D1), Real estate website (W1), SyncGrid (B2), YumYum (B6) (row 65). Omega Health Care and SolVita stay on Work.
- The 14 new cases designed in Figma from 22 Oct (YumYum, ALPHA, Taif, Gravix, Azora, Nexus, Bristo, Orion, ReSpace, LYFT, IsHamn, Samā, CortexAI, Livio) join Work with the slugs in rows 23 and 24.

## 5. Page by page

**Home** (the V4a order, work before services, row 64; Figma wins on details)
1. Hero: headline, one line on what clients get, "Book free strategy call", second link "See work".
2. Proof bar.
3. Selected work (the four cases in §4).
4. Career highlights, with a track switch.
5. Services: Brand · Web & UI/UX · Decks · Social · LinkedIn.
6. How I work: a call with 3 fixes → a fixed proposal the same day → delivery with notes.
7. Archive rows.
8. The free templates, then the call card.

Recommendations from past clients stay hidden until at least 2 exist.

**Service pages (/brand, /product, /decks, /social, /linkedin)**
- Who it's for and what they get, in 2–3 lines.
- The cases.
- What I design here, and in which formats.
- CTA. No CV files on any page; recruiters use the one "Ask for my CV" path (row 63).

**Case page**
- Title and a one-line outcome. No Client or Concept label and no year (row 81).
- "My role" box: the client where named, scope, and role or "Studio: DashBloom" where true, collaborators only if you confirm them.
- Problem → story → 3 design decisions → selected work (full width) → documented result → the client's recommendation, with their OK → next case → CTA.

**About**
- Short bio: RUET, Industrial Engineering; self-taught, from photo editing to brand, web and decks. No city (row 50).
- Experience as on the CVs, without Taste Labs (row 61). DashBloom is a past role, Jan 2024 to Sep 2026, so no role is current (row 78).
- Awards: BASIS Innovative Project Award (2020) · National Hackathon on Frontier Technologies winner (2020). Also pitching coach and mentor at the bdapps National Hackathon (2022).
- **For recruiters:** open to remote full-time and contract roles; the one "Ask for my CV" path to the Recruiter form (row 63). No city (row 50).

**Contact:** the Cal.com booking (20 minutes, Sun–Thu) and email.

**/work-with-me** (noindex)
- The named offers with starting prices: 21-Day Brand & Website Launch from $3k · 72-Hour Deck Rescue $750–1.5k · Brand identity from $1.5k · LinkedIn Profile Kit from $300 · Monthly design support $800–3,000 a month (renamed from Monthly Design Team, row 49).
- How it works: the call, a proposal the same day, 50% upfront, delivery with notes.
- FAQ: formats, timeline, revisions, NDA, payment. No time zone answer (22 Oct).
- CTA.

**/agencies** (noindex)
- "Overflow design and development, under your brand."
- NDA first. Your brand, your client; no contact with your client unless you ask; work happens in your templates.
- What I take on, with production support: brand identity, websites (design and build), decks, social and LinkedIn assets.
- Turnaround (you confirm): decks in 3–5 days, brand in 2–3 weeks, websites in 2–4 weeks.
- Hours: "My evenings overlap US mornings and UK afternoons." Replies the same day. No city (row 50).
- **The pilot:** one real brief, and you pay only if you use the work. Then a monthly overflow plan, or per project.
- Samples on request, under NDA.

**/free:** the two templates (#6 10-Slide Story Deck, #7 LinkedIn Profile Kit), what's inside, "Get it free" → Gumroad, then the call.

**/scorecard** (added last): 12 yes/no checks across brand, website and deck, the score, the 3 most important fixes, and a CTA to the call or the matching offer.

## 6. Content rules

- Labels in §4 are internal; the site shows none and no years (row 81). Credits: Behance lists Ali Mortuja (and Rayhan Rahman on SolVita) as co-owners for reach only; you did the work. Every "My role" line is drafted as yours, and you confirm each one before go-live.
- DashBloom appears only as "Studio: DashBloom" on cases done there, and as a past employer in About (Product Designer, Jan 2024 to Sep 2026, row 78). Whether that changes to the new agency name is your call later.
- Never founder, owner, "my agency", "my studio" or "we" meaning a studio.
- Taste Labs never appears on the site, not even its title (row 61).
- Prices only on /work-with-me.

## 7. Assets and approvals

- **Behance images:** you approved (18 Oct) downloading your own project images from the Behance pages in the apply project's portfolio.md (links copied into [00-facts.md](00-facts.md) §4), about 50–150 MB. Read the public pages in BrowserOS (row 71); never sign in.
- **B7:** in Figma. You export the frames, or Claude reads them through the Figma connector with your OK.
- **Astra, GHX Summit, extra decks:** you send the files and confirm what isn't under NDA.
- **CVs:** the designed PDFs in `G:\REZ Resume\07 Oct 2026\` on Rez's PC (row 67). They never appear on the site; they go out by email on request, after the checks in [11-cv-updates.md](11-cv-updates.md). Never the 17 Aug set.
- **Visual identity:** fonts and colors from Resume_Studio, copied into [00-facts.md](00-facts.md), plus the Newsreader serif for headlines (row 66). The V4a tokens in [06-design-system.md](06-design-system.md) are what the build uses. Profile photo: the background removed warm headshot (21 Oct).

## 8. Build process (in your own folder)

1. Collect content: credit lines, labels, the Astra and GHX Summit files, CVs, photo.
2. Claude writes the copy.
3. Design 2–3 key pages in Figma (optional).
4. Build every page in §3 except /scorecard.
5. Test on one of your existing domains, kept out of search (noindex) until launch.
6. SEO basics: titles, descriptions, share images, sitemap, speed, accessibility.
7. Buy rezkarim.com and switch over; take noindex off the public pages.
8. Point every profile, application and message to it (§11).
9. Add /scorecard.

## 9. Tech

- Next.js 16 in `site/` (Rez's pick, 21 Oct, row 62), on Cloudflare Workers (free plan) through OpenNext. The contact form, the passwords and the visit counter run on the server, with storage on Cloudflare (D1, Rez's call, row 91). git from day one.
- First party visit counts on the private /stats page (cookieless views, one optional cookie for return visits), plus Cloudflare Web Analytics for Core Web Vitals.
- Mobile first and fast (main content visible in under 2.5 seconds on 4G), accessible (AA contrast, alt text), with an Open Graph image per page, a sitemap, a favicon and a 404 page.
- Responsive AVIF/WebP images, lazy-loaded below the fold.
- Sound on by default: the ambient loops start on the first click, with a switch in the dock (row 51).
- noindex on /work-with-me, /agencies, /linkedin/invite, /work/private and /stats, and on the whole test site. No robots.txt line for /stats (row 58).
- A portfolio PDF under 10 MB (application forms ask for one).
- This is a designer's portfolio: editorial, confident type, and cases that read like a good deck.

## 10. Done

A tested build on one of your domains with every page in §3 except /scorecard, ready for your review. Launch steps written down, waiting only on the domain. A final report with the open items.

**Go-live gate (G1):** you've confirmed every credit line, the CV contact lines are OK, and rezkarim.com is bought.

## 11. After go-live (outside this project)

Point these to the portfolio: the LinkedIn website button and Featured section, the Behance profile link, X, Instagram, Facebook, the Cal.com profile, your email signature, the 3 CVs (Resume_Studio, in its own session) and portfolio.md's link rules in the apply project.

## 12. Open items for you

All asked on 22 Oct; the answers are in [10-confirmations.md](10-confirmations.md).

1. A credit line for each case.
2. Astra and GHX Summit: what were they (brand, deck, event, website), and are they free to show?
3. A profile photo, or none.
4. Phone or address on the public CVs: keep or remove.
5. 3–5 more decks you may show.
6. Prices and payment terms on /work-with-me.
7. Turnaround times on /agencies.
8. The Cal.com event title: "Strategy call" instead of "deck call" (keep the link).
