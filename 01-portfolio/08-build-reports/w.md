done

# Chat W · Content, batch 1 report

[README](../15-v4a-plan/README.md) · Done · 28 Oct 2026 · Opus 5.5, Extra high. All 20 batch 1 rows from the page map are written, at `status: ready`, with `content:check` and `content:lint` green. Nothing is `live`; Rez reads, then a tool flips each page after his OK.

## Files

20 new content files in `site/content/`, each scaffolded with `npm run content:new`, then written. No image masters added (case covers are reused by key). Plus one line in `site/CHANGELOG.md` and two preview shots in [w-shots/](w-shots/).

| Family | Files |
|---|---|
| Hire | `pages/hire/index.mdx`, `brand-designer.mdx`, `presentation-designer.mdx`, `web-designer.mdx` |
| Industry | `pages/for/index.mdx`, `saas.mdx`, `real-estate.mdx` |
| Deliverable | `pages/decks/saas-pitch-deck.mdx`, `pages/brand/logo-design.mdx`, `pages/product/dashboard-ui-design.mdx`, `pages/linkedin/banner-design.mdx` |
| Guide | `guides/index.mdx`, `pre-seed-pitch-deck.mdx`, `pitch-deck-slides.mdx`, `10-20-30-rule.mdx`, `pitch-deck-designer-cost.mdx`, `brand-designer-cost.mdx`, `how-long-brand-identity-takes.mdx`, `brand-identity-process.mdx`, `how-to-brief-a-designer.mdx` |

How they were written:

- Facts only from `00-facts.md`, `content/claims.ts`, the site data already approved (`services.ts` formats and design lists, `offers.ts` offer names and How I work steps, `site.ts`), and the case briefs. The 7 new case briefs (YumYum, Taif, Gravix, Azora, Orion, ReSpace, CortexAI) were read from their Figma frames on page `10:3` (read only), then matched against C's case files once they landed.
- Claims by key in `proofClaims`. The only claim text typed by hand is the Delineate scope line, word for word, once (the first FAQ on `/for/saas`). No £200K or 300+ figure is typed anywhere.
- Hire, Industry and Deliverable pages carry no MDX body: their Figma templates are built from front matter blocks. Each guide has a body with 2 or more `##` sections, one service or deliverable link and one case link (seo §3.4).
- Outside facts in the deck guides have dated sources (date = the day read in BrowserOS): Guy Kawasaki's 10/20/30 post, Aaron Harris's YC seed deck template, Kevin Hale's YC deck design post.
- No prices. Cost guides explain what drives the price and link `/work-with-me` (decision 15).
- Every case cited is shown as work, never as a client: C marks all 14 new cases as concepts, so no page says "client", "for <brand>" or a result next to them. Nike Mind always carries "not affiliated with Nike" where it is named.

## Agency overlap check (seo §3.1)

`content/agency-intent-keys.json` doesn't exist yet, so I checked every row by hand against the agency project's `data/pages.csv` (101 rows, read only). No clash of question; three near neighbours, split the way seo §3.1 says:

| Portfolio page | Agency page | Why both can stand |
|---|---|---|
| `/guides/pitch-deck-designer-cost`, `/guides/brand-designer-cost` | G01 pitch deck design cost, G02 brand identity cost | Portfolio: "how much does a X designer cost", no prices. Agency: "X design cost" with its price table |
| `/guides/pitch-deck-slides` | G04 pitch deck structure (Investor Question Order) | Portfolio answers which slides investors expect and what each proves; the agency guide teaches its named method. Rez may want them to cross link later |
| `/linkedin/banner-design` | S10 LinkedIn design service, G11 founder banner guide | Portfolio is the person ("LinkedIn banner designer"); agency owns "service" phrasing and the guide (batch 2 row 79 here waits anyway) |

## Batch report (operations §2.4)

Gate result for every row: `content:check` pass and `content:lint` pass (`npm run content:gate -- <20 files> --fast`). The three warnings are noted in the row. The full gate's typecheck step fails only in other chats' files (see Checks).

| URL | Main question | First sentence (answer) | Proof line (`proofClaims[0]`) | Gate |
|---|---|---|---|---|
| `/hire` | Is Rezaul Karim the right designer for my open role? | I'm a remote brand, presentation and web designer open to full time and contract roles, so if your opening is in one of those, start with the role page that matches it below. | 300+ client reviews | Pass |
| `/hire/brand-designer` | Can this remote brand designer do the role? | Yes, if the role is brand identity work, since I design logo systems, type and colour, guidelines and the everyday assets a team needs, and I work remotely on full time or contract terms. | I've spent 6 years designing products, brands and pitch decks for startups. | Pass |
| `/hire/presentation-designer` | Can I hire him as a remote presentation and pitch deck designer? | Yes, I work remotely as a presentation and pitch deck designer, on full time or contract terms, and I take a deck from story outline to speaker ready slides. | Designed the investor deck used in Earworm's £200K pre-seed | Pass |
| `/hire/web-designer` | Can he design our marketing site and build it in Framer? | Yes, I design marketing sites from sitemap to every page, and I build them in Framer when the team wants a live site it can edit itself. | 300+ client reviews | Pass |
| `/for` | Which industries has he designed for? | I design brands, websites and decks across many industries, and the pages below cover the two with the deepest proof, SaaS startups and real estate, each with its problems, cases and questions. | Delineate (YC W25), past client | Pass |
| `/for/saas` | Who can design the brand, website and deck for a SaaS startup? | I can, because I design SaaS brands, marketing sites, product UI and investor decks as one system, so a SaaS startup tells the same story to users and to investors. | At Delineate (YC W25) I designed the SaaS product, the website and the investor deck as one system | Pass |
| `/for/real-estate` | Who can design a real estate brand and website? | I can, since I design real estate brands and websites that let the property lead, with calm layouts, refined type and listings that sit a click apart. | 300+ client reviews | Pass |
| `/decks/saas-pitch-deck` | Who designs a SaaS investor deck? | I design SaaS investor decks that put the story in a clear order, from the problem and product to traction and the ask, with a visual system that matches your brand. | Designed the investor deck used in Earworm's £200K pre-seed | Pass |
| `/brand/logo-design` | Who designs a logo system for a startup? | I design startup logos as full systems, a mark, a wordmark and lockups that work from an app icon to a sign, with the type and colour that make them recognisable. | I've spent 6 years designing products, brands and pitch decks for startups. | Pass |
| `/product/dashboard-ui-design` | Who designs SaaS dashboards and product UI? | I design SaaS dashboards and product UI that turn dense data into calm, readable screens, with clear numbers, a steady grid and Figma components your developers can build from. | At Delineate (YC W25) I designed the SaaS product, the website and the investor deck as one system | Pass |
| `/linkedin/banner-design` | Who designs a LinkedIn banner for a founder? | I design LinkedIn banners for founders that say what you offer and show one line of proof at a glance, in the same look as your profile photo and Featured section. | 300+ client reviews | Pass |
| `/guides` | What does Rezaul Karim write about? | I write short, practical guides on pitch decks, brand identity, design costs and how to brief a designer, each one drawn from a real project and answered in its first lines. | I've spent 6 years designing products, brands and pitch decks for startups. | Pass |
| `/guides/pre-seed-pitch-deck` | What should be in a pre-seed pitch deck? | A pre-seed pitch deck should cover the problem, your solution, any early proof, why your team, the market and the ask, in roughly 10 slides with one idea each. | Designed the investor deck used in Earworm's £200K pre-seed | Pass |
| `/guides/pitch-deck-slides` | What slides do investors expect in a pitch deck? | Investors expect about 10 core slides, the problem, solution, traction, market, business model, competition, team and the ask, plus a title and a close, each proving one thing. | Designed the investor deck used in Earworm's £200K pre-seed | Pass |
| `/guides/10-20-30-rule` | What is the 10/20/30 rule for pitch decks? | The 10/20/30 rule, from Guy Kawasaki, says a pitch should have 10 slides, last no more than 20 minutes and use no font smaller than 30 points. | Designed the investor deck used in Earworm's £200K pre-seed | Pass |
| `/guides/pitch-deck-designer-cost` | How much does a pitch deck designer cost? | A pitch deck designer's cost depends on 4 things, how many slides, whether the story needs work, how much data needs charts and how fast you need it, so a fixed quote beats a rate card. | Designed the investor deck used in Earworm's £200K pre-seed | Pass, 1 warning (numbers 10 and 72 are Rez's own: slide counts, 72-Hour Deck Rescue) |
| `/guides/brand-designer-cost` | How much does it cost to hire a brand designer? | The cost of a brand designer depends on scope, from a logo alone at the low end to a full identity with guidelines and assets at the high end, with timeline and revisions setting the rest. | 300+ client reviews | Pass |
| `/guides/how-long-brand-identity-takes` | How long does a brand identity take? | A brand identity takes about 2 to 3 weeks with me, from the first call to final files, and a brand with a website fits in 21 days in the 21-Day Brand & Website Launch. | I've spent 6 years designing products, brands and pitch decks for startups. | Pass, 1 warning (21 is the offer's own number) |
| `/guides/brand-identity-process` | What happens in a brand identity project, step by step? | A brand identity project with me runs in 5 steps, a call, a fixed proposal, the mark, the type and colour system, then guidelines and assets delivered with notes on how to use them. | I've spent 6 years designing products, brands and pitch decks for startups. | Pass |
| `/guides/how-to-brief-a-designer` | How do I brief a designer? | Brief a designer with 6 short answers, what you need, who it's for, what it must do, what you like and dislike, the deadline, and who signs off, plus any files you already have. | 300+ client reviews | Pass, 1 warning (12 is an example slide count) |

**Read in full (picked at random with `shuf`):** [`content/pages/hire/brand-designer.mdx`](../site/content/pages/hire/brand-designer.mdx) and [`content/guides/how-to-brief-a-designer.mdx`](../site/content/guides/how-to-brief-a-designer.mdx). Preview: http://localhost:3000/hire/brand-designer and http://localhost:3000/guides/how-to-brief-a-designer.

## Checks

| Check | Result |
|---|---|
| `content:gate -- <20 files> --fast` | Pass: content:check 0 errors, content:lint 0 errors, 3 warnings (Rez's own numbers in guides without outside sources) |
| `content:gate -- <20 files>` (full) | Content steps pass; stops at `typecheck`, which fails with 20 errors, all in other chats' files: `src/app/work/[slug]/page.tsx` (14, C), `src/components/seo/json-ld.tsx` (3, E), `src/app/sitemap.ts` (1, E), `src/proxy.ts` (1, E), `src/lib/booking.ts` (1, B). None in content files. Lint and build did not run behind it |
| `npm run content:check`, `content:lint` (repo wide) | Pass (0 errors), so my `ready` files don't block anyone's prebuild |
| `npm run check`, run step by step at the end | `content:check`, `content:lint`, `agents:check`, `test` pass. `names` fails on `src/app/llms.txt` (E's folder name); `format:check` warns on 22 files, none under `content/`; `lint` fails once in `src/components/forms/form-meta.tsx` (B, setState in an effect). `typecheck` as above, so `build` was not run (rule 19: recorded, not touched) |
| `npx prettier --check content/pages content/guides` | Pass |
| Similarity (shingle check, 40% limit) | Pass after one fix: the brief guide repeated an Earworm sentence from the SaaS deck page (61%); rewritten |
| Dev server, all 20 routes (`curl`, draft index) | 200, each with its own H1 |
| BrowserOS preview (own background tab, closed) | `/guides/pre-seed-pitch-deck` at 1440 and `/for/saas` at 390: text renders, H1s wrap cleanly, no sideways scroll. E's real templates were not in yet, so the Proof, Cases, FAQ, Related, includes and problems cards could not be seen. The 390 and 1440 check against E's templates is left for R |
| Sources | Each URL opened and read in BrowserOS on 28 Oct before citing |

## Screenshots

In [w-shots/](w-shots/), both on F's placeholder template, so not comparable to the Figma frames yet: `guide-pre-seed-1440-placeholder.jpg` (Guide, Figma `272:9641`) and `industry-saas-390-placeholder.jpg` (Industry phone, figma-d's 390 frame in `148:4804`; desktop `271:9078`).

## Open issues

| For | Issue |
|---|---|
| R | Preview the 20 pages on E's templates at 390 and 1440 (common.md rule 13; I could only see the placeholder). Check that the Related card resolves core routes such as `/career`, `/about`, `/decks` and `/contact`, since E's note says unknown paths are left out |
| R, E | After E's templates land, check that `problems` render as `Title. Text` rows (I wrote them that way per E's note) |
| B, C, E | The type, lint, names and format failures listed under Checks |
| Coordinator | 3 guides show the "numbers without sources" warning for Rez's own numbers (the 21-Day and 72-Hour offers, slide count examples). Harmless; listed so nobody adds fake sources |

## Requests

1. **`content/rules.json` `conceptCases`** lists 6 slugs, but C's files mark all 14 new cases as concepts too (yumyum and alpha are listed; azora, bristo, cortexai, gravix, ishamn, livio, lyft, nexus, orion, respace, sama, taif are not). The lint's "client next to a concept" warning misses them. Add them, or have the lint read `kind` from the case files (F's file). I checked my 20 files by hand: no "client" wording anywhere.
2. **`content/agency-intent-keys.json`** doesn't exist, so `content:check` can't test intent keys against the agency site. Export the agency's keys from `F:\🚩 CLAUDE\rez-agency-website\data\pages.csv` into it (coordinator or Rez; outside this project, read only for me).

## Rez decides later

| Item | Default taken | Why |
|---|---|---|
| `/linkedin/banner-design` has no LinkedIn case (the proof is Sam Bendix's refresh, which is not a case) | Proof cases Pulse and SyncGrid (brand systems), proof claim "300+ client reviews", and an FAQ that points to the before and after on `/linkedin`. Sam is not named | The schema needs a case. Option: hold the page until a LinkedIn case exists |
| Tools on Hire pages (for-rez F1) | `tools: []`, so the template hides the row | Not confirmed yet |
| Framer on `/hire/web-designer` | Says I build in Framer; the proof cases are the page map's (Real estate website, Orion, ReSpace). SolVita, the Framer build, is not cited by name | The SolVita rule needs Earworm and the Real estate website above it, and the page map left it out |
| The "2 to 3 weeks" brand timeline | Used on public guides and the logo page | It comes from the /agencies turnaround (row 36); the page map cites it |
| Steps in the process and timeline guides | Call, fixed proposal, the mark, then type and colour, then guidelines and assets, delivered with notes; "you review the mark before type and colour are built around it" | Built from How I work and the order of each case's 3 design decisions. Rez confirms it matches how he works |
| Deck range on `/hire/presentation-designer` | "Investor decks most of all, plus sales decks, company profiles and long reports" | From the /decks service list. Rez confirms |
| `mainQuestion` on `/hire/presentation-designer` | "Can I hire him as a remote presentation and pitch deck designer?" | The page map's wording ("Can we hire him") trips the "we" rule |
| Source dates | The date read (28 Oct 2026), not the publish date | One meaning for every row; Kawasaki's December 2005 date is in the FAQ |
| Eyebrow on the two cost guides | `kind: comparison` | for-rez §2.9 default |
| `/work-with-me` linked from both cost guides | Linked, with no prices on the guides | Decision 15 |
| Hire, Industry and Deliverable bodies | None; the page is built from front matter blocks | The Figma templates have no prose block there. E's template shows a body if one is added later |

## Suggested commit message

```text
content: add SEO batch 1 (20 pages, ready for review)

Hire hub and the brand, presentation and web roles; the Industries hub
with SaaS and Real estate; SaaS pitch deck, logo design, dashboard UI
and LinkedIn banner deliverables; the Guides hub and 8 guides on pitch
decks, design costs, brand timelines, process and briefs. Claims by key,
dated sources for outside facts, no prices. All at status ready.
```
