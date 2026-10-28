# Website Plan

**Status** Draft 1, 18 Oct 2026. Phase 0, waiting on your picks and answers. Nothing gets built until you approve.

Your facts are in `profile.md` and your projects in `portfolio.md`. This file is the plan for the site. The visual picker for designs is `inspiration-board.html`.

## 1. Goal

One fast, modern site that replaces the Behance link in every application.

| Goal | What the site does |
|---|---|
| One link instead of Behance | A clean link per job type that opens fast on any phone |
| Show your own work in full | Your case studies, credited to you, plus work not on Behance yet |
| Freelance clients | Services, proof and a clear Book a call |
| Full time roles | Role fit in 30 seconds. Case studies with your role and outcome. Resume download |
| White label for agencies | A short For agencies block. Process, time zone, NDA friendly |

## 2. Who visits and what they need in 30 seconds

| Visitor | Needs | We show |
|---|---|---|
| Recruiter or hiring manager | Level, role fit, proof, resume | Lane page, case study summary box, resume PDF |
| Founder or client | Can you do my thing, results, how to start | Selected work, YC W25 and £200K proof, services, Book a call |
| Agency | Range, reliability, speed, NDA | Work across lanes, process, GMT+6 with US and UK overlap |

## 3. Site map

| Page | URL | Purpose |
|---|---|---|
| Home | `/` | Who you are, best work, proof, services, contact |
| Work | `/work` | Every project. Filter by Pitch decks, Brand, Product, Web |
| Case study | `/work/earworm-pitch-deck` | One page per project |
| Lane pages | `/decks` `/brand` `/product` `/web` | One link per proposal template. That lane's best work first, its resume, its services |
| About | `/about` | Story, experience, skills, awards, resumes |
| Contact | `/contact` | Cal.com booking, email, Telegram, LinkedIn |
| Resumes | `/resume/product.pdf` and two more | Public resume links. Replaces the Behance stand in |
| 404 | | Friendly, links back to work |

**Lane pages replace the Behance links in your proposals**

| Proposal template | Today | After launch |
|---|---|---|
| 1 Pitch deck | D1, D2 on Behance | yourdomain/decks, or a case study link |
| 2 Brand identity | D1, W1, B1 | yourdomain/brand |
| 3 Product and UI UX | A1 or A2, B2 | yourdomain/product |
| 4 Web and Framer | W1, D1, B1 | yourdomain/web |

**Home, top to bottom**

1. Hero. Name, one line positioning, one proof line, Book a call and See work, availability badge
2. Proof strip. YC W25, £200K pre seed, 6 years, US and UK clients
3. Selected work. 6 projects across lanes. Earworm and Real Estate Website sit above SolVita, same as your link rule
4. What I do. Pitch decks, Brand identity, Product design, Web. Each card opens its lane page
5. How I work. 4 short steps. Fast delivery and clear updates, the same promise as your proposals
6. Kind words. Client quotes, if you have them
7. For agencies. White label, NDA, time zone overlap
8. Last call to action, then footer links. LinkedIn, Behance, Dribbble, Telegram, email

**Case study page**

1. Hero visual and a one line outcome
2. Summary box. Client, year, your role, scope, tools, outcome, and a Client work or Concept label
3. The problem in 2 or 3 sentences
4. Process highlights. Research, directions, the system
5. Final work. Large visuals sliced from Figma
6. Results. Real numbers only
7. Next project and Book a call

## 4. Content

**Launch set.** A proposal. 8 to 10 of the strongest, the rest after launch.

| Project | Code | Lane | Status |
|---|---|---|---|
| Earworm investor deck | D1 | Pitch deck | Client 🟢 |
| Delineate (YC W25). Product, site and deck as one system | new | Product | Needs your OK on what can be shown |
| Real Estate Website | W1 | Web | 🟡 client or concept? |
| Real Estate Mobile App | A1 | Product | 🟡 |
| Omega Health Care brand guidelines | B7 | Brand | Client 🟢, in Figma |
| SolVita brand and website | B1 | Brand, web | Client 🟢 |
| SyncGrid HR SaaS identity | B2 | Brand | Concept 🔵 |
| Nike Mind deck | D2 | Pitch deck | Concept 🔵 |
| ALPHA skincare identity and packaging | B4 | Brand | 🟡 |
| Astra wellness tourism brand and site | new | Brand, web | Needs files |

**After launch.** B3, B5, B6, W2 to W7, A2, Yerbae packaging, Taif, Lexor, Prime Properties.

**Not shown.** Taste Labs stays under NDA. At most one line of text on About, if allowed.

**Gaps the site can close** (from `portfolio.md` section 5)

| Gap | Fix on the site |
|---|---|
| No SaaS or dashboard case study | A Delineate case study, if the client allows |
| Only one client pitch deck | Earworm as a deep case study. Add any other real decks you have |
| No packaging project | Yerbae, if you have the files |
| 9 projects not marked client or concept | You tell me, I label them |

## 5. Tech stack. My recommendation

| Part | Pick | Why |
|---|---|---|
| Framework | Astro | Sends almost no JavaScript, so pages open fast on any phone. Cloudflare bought Astro in Jan 2026, so it runs best on Cloudflare |
| Styling | Tailwind CSS with your own design tokens | Fast to build, consistent spacing and type |
| Motion | GSAP with ScrollTrigger and SplitText, plus Lenis smooth scroll | Behind most Awwwards sites. Free for commercial use, all plugins included |
| Page transitions | Native View Transitions | A project thumbnail grows into the case study hero. Built into the browser |
| Components | React islands with Motion (Framer Motion) where needed | Your Framer Motion idea still works, only where a part needs it |
| Images | Astro image pipeline | Figma exports become AVIF and WebP in the right sizes automatically |
| Case studies | One MDX file plus an image folder per project | Adding a project later is quick |

**Why not Next.js.** It works, and I can build it there if you prefer. For a portfolio it ships more JavaScript, and on free static hosting its image optimizer and page transitions need extra setup. Next.js shines for apps with logins and dashboards, which this site does not need.

## 6. Hosting and services. All free

| Need | Service |
|---|---|
| Hosting | Cloudflare free plan as a static site. Static files are served free with no traffic cap |
| Deploys | Code on GitHub. Every push goes live automatically, and each change gets a preview link first |
| Domain | DNS moves to Cloudflare. HTTPS is automatic |
| Analytics | Cloudflare Web Analytics. No cookies, so no cookie banner |
| Booking | `cal.com/rezkarim/deck-call` in buttons and on Contact |
| Email | Optional. hello@yourdomain forwarded to Gmail with Cloudflare Email Routing |
| Large videos | Cloudflare R2 free tier, or YouTube and Vimeo embeds |

## 7. Speed and smoothness targets

| Target | Number |
|---|---|
| Lighthouse on mobile | 95 or more on every page |
| Main content visible (LCP) | Under 2 s on a mid range phone, under 1 s on desktop |
| Layout shift (CLS) | Close to 0 |
| JavaScript on Home | Under about 100 KB compressed |
| Animation | 60 fps, transform and opacity only, respects Reduce Motion |
| Intro loader | None, or under 1 s and only on the first visit |

Rules
- Heavy 3D only on desktop, loaded after the page is usable, and kept off case study pages
- Every image sits in a fixed size box, so nothing jumps while loading
- Fonts are self hosted, trimmed to the characters used, and preloaded
- Keyboard friendly, good contrast, alt text on every image

## 8. Motion plan

A starting set. Final after your picks.

| Where | Effect |
|---|---|
| Whole site | Lenis smooth scroll and soft reveals on scroll |
| Headlines | Line by line text reveal |
| Work list | Image preview that follows the cursor on hover, desktop only |
| Work grid to case study | Thumbnail grows into the hero |
| Buttons and links | Magnetic hover and underline sweeps |
| Brand section | A logo wall of your marks (board pick 27) |
| Optional wow | One 3D project gallery on desktop (board picks 8 and 30) |

## 9. Figma to site

1. You send a Figma link per project, or one page named Portfolio export
2. I pull the frames through the Figma connection in this workspace (tested in phase 1). Or you export PNG at 2x into one folder per project
3. The build turns them into AVIF and WebP at the right sizes
4. Long Behance style boards get sliced into sections, so they load fast and resize well on phones
5. Your Behance text is the first draft of each case study. I rewrite it in your voice and you approve

## 10. Phases. Nothing starts without your OK

| Phase | What happens | You approve |
|---|---|---|
| 0 Decide | You pick designs and answer the questions in section 13 | Picks, stack, design route |
| 1 Content | Final project list, site map, copy outline, assets gathered | Project list and copy outline |
| 2 Design | Moodboard from your picks, then Home, Work and one case study designed | The look, before the full build |
| 3 Build | Repo, tokens, components, every page, motion. Preview link on Cloudflare | Each page on the preview link |
| 4 Launch | Speed pass, SEO, link previews for LinkedIn and email, analytics, domain | Go live |
| 5 After | Proposal templates, resumes and LinkedIn point to the site | Updated templates |

## 11. Ground rules

- Templates and award sites are references for patterns. We build your own design and never copy a site 1:1. Designers who hire spot a cloned template fast
- Client work shows only what the client allows. NDA work stays text only, or is shared on request
- Concepts are labelled Concept, same as your Behance rule
- Site copy uses your proposal voice. Short, warm, direct, one real proof point per block. See writing rules in `F:\🚩 CLAUDE\Behance Dribble Contra Linkedin Apply\PLAN.md` section 8

## 12. Inspiration list

Thumbnails and Pick buttons are in `inspiration-board.html`. ★ marks my shortlist.

**Framer Marketplace templates**

| # | Name | Price | Live site | What to borrow |
|---|---|---|---|---|
| 1 ★ | Velia | Free | [velia-portfolio.framer.website](https://velia-portfolio.framer.website/) | One line positioning hero with proof numbers |
| 2 | Paul Michel | Free | [paul-michel.framer.website](https://paul-michel.framer.website/) | Big type and large project cards |
| 3 ★ | Mondragon 4 | Free | [mondragon4.framer.website](https://mondragon4.framer.website/) | Lane filters for decks, brand and product in one site |
| 4 | Owen Studio | Free | [owen.framer.media](https://owen.framer.media/) | Brand and packaging layouts |
| 5 | Tabfolio Pro | $69 | [tabfoliopro.framer.ai](https://tabfoliopro.framer.ai/) | Product case study cards |
| 6 | Jonas | $149 | [jonas-template.framer.website](https://jonas-template.framer.website/) | Calm one page flow for a senior product designer |
| 7 | Verris | $49 | [verris.framer.website](https://verris.framer.website/) | Bold name hero |
| 8 | TITARVL | $49 | [titarvl.framer.website](https://titarvl.framer.website/) | 3D project ring as a wow moment |
| 9 | Dashfolio Neo | $49 | [dashfolio-neo.framer.website](https://dashfolio-neo.framer.website/) | App like dashboard feel |
| 10 | PortfolioNine | Free | [portfolioone.framer.ai](https://portfolioone.framer.ai/) | Photo led personal brand hero |
| 11 | Athos | Free | [athos.framer.website](https://athos.framer.website/) | Services first freelance framing |
| 12 | Leporello | $39 | [leporello.framer.website](https://leporello.framer.website/) | Many UI screens without one long image |

**Webflow Marketplace templates.** Open the template page, then press Preview.

| # | Name | Price | Template page | What to borrow |
|---|---|---|---|---|
| 13 | Ethan.D | $79 | [ethand-website-template](https://webflow.com/templates/html/ethand-website-template) | Warm intro with work right under it |
| 14 | Max Pratt | $49 | [max-pratt-portfolio-website-template](https://webflow.com/templates/html/max-pratt-portfolio-website-template) | Quiet layout that lets the work speak |
| 15 | Max Bennet | $59 | [max-bennet-website-template](https://webflow.com/templates/html/max-bennet-website-template) | Strong typographic brand |
| 16 | Studio Verno | $79 | [studio-verno-website-template](https://webflow.com/templates/html/studio-verno-website-template) | Premium editorial feel for brand clients |
| 17 | Alture | $129 | [alture-website-template](https://webflow.com/templates/html/alture-website-template) | Services and trust sections |
| 18 | Williamss | $59 | [williamss-website-template](https://webflow.com/templates/html/williamss-website-template) | Personal intro with a one line promise |

**Awwwards Site of the Day winners**

| # | Name | Won | Live site | What to borrow |
|---|---|---|---|---|
| 19 ★ | Olha Lazarieva | 2 Oct 2025 | [olhalazarieva.com](https://www.olhalazarieva.com/) | Closest to your mix. Bold, personal, clear |
| 20 | Artiom Yakushev | 27 Dec 2025 | [art-yakushev.com](https://www.art-yakushev.com/) | Client facing positioning and transitions |
| 21 | Huy Phan Vol.2 | 14 Oct 2026 | [huyml.co](https://huyml.co/) | Personality that stays clear, agency friendly |
| 22 ★ | Gil Huybrecht | 21 Sep 2026 | [gilhuybrecht.com](https://gilhuybrecht.com/) | Scannable work index and an availability date |
| 23 ★ | Grégory Lallé | 30 Oct 2024 | [gregorylalle.com](https://gregorylalle.com) | Minimal works index and smooth transitions |
| 24 | Elliott Mangham | 2025 | [elliott.mangham.dev](https://elliott.mangham.dev) | Microinteractions |
| 25 | Maria Vasilyeva | 9 Oct 2026 | [mariavasilyeva.com](https://www.mariavasilyeva.com/) | Elegant serif pairing |
| 26 | Signal-A Studio | 18 Oct 2026 | [signal-a.studio](https://signal-a.studio) | How a product studio talks about its work |
| 27 ★ | Nick Ho | 11 Oct 2026 | [nickho-motorsports.nl](https://nickho-motorsports.nl/) | Logo wall for your brand marks |
| 28 ★ | Metalab | 24 Apr 2024 | [metalab.com](https://www.metalab.com/) | Product case study structure |
| 29 | RossMason | 27 Feb 2024 | [iamrossmason.com](https://iamrossmason.com/) | Personality in type |
| 30 | Jesper Landberg | 29 Sep 2026 | [jesperlandberg.com](http://jesperlandberg.com) | 3D gallery, motion reference only |
| 31 | Gianluca Gradogna | 23 Jan 2025 | [gianlucagradogna.com](https://gianlucagradogna.com/) | Storytelling layout for deck case studies |

**More places to browse.** [Awwwards Portfolio Honors](https://www.awwwards.com/websites/winner_category_portfolio/), [Framer Gallery Portfolio](https://www.framer.com/community/gallery/categories/portfolio/), [Bestfolios](https://www.bestfolios.com/portfolios), [Recent](https://recent.design) (Godly now redirects here), [Codrops](https://tympanus.net/codrops/).

**My suggested mix.** Layout and tone from 19 or 1. Work index from 22 or 23. Lane filters from 3. Brand logo wall from 27. Case study structure from 28.

## 13. Questions for you

1. **Picks.** Which 2 to 4 numbers? Say what you like in each. Layout, work list, motion or type
2. **Stack.** OK with Astro, or do you want Next.js?
3. **Domain.** What is it, and where is it registered?
4. **Design route.** (a) I design straight in code from your picks, fastest. (b) You design Home and one case study in Figma first, most control. (c) We start from one of your downloaded Framer or Figma templates. Send their names or file paths
5. **Name on the site.** Rez Karim, Md Rezaul Karim or RezBloom? Any logo, colors or fonts you already use?
6. **Home headline.** One line for everything, like pitch decks, brands and products for founders? Or lead with one lane?
7. **Projects.**
   - Client or concept for the 9 🟡 projects (B4, W1 to W7, A1, A2)?
   - Which DashBloom projects did you do in full (`portfolio.md` section 6)? Show them with a small "via DashBloom" line, or no line?
   - Delineate, Astra, Yerbae, Taif, Lexor, Prime Properties. Do you have the files, and can they be public?
   - Omega Health Care. OK to show publicly?
8. **Prices.** Show "from" prices like on Behance, or only Book a call?
9. **Theme.** Light, dark, or both with a toggle?
10. **Accounts.** Do you have GitHub and Cloudflare accounts?
11. **Testimonials.** Any client quotes we can use, with a name and role?
12. **Deadline.** A date you want it live by?

## 14. Decisions log

Empty. Filled as you approve.
