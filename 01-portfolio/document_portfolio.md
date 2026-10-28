# Portfolio site: the complete overview

[README](../README.md) · Draft · 21 Oct 2026

This document describes the portfolio site as built on localhost on 21 Oct 2026. It covers what the site is, how it works, every feature and setting, and the copy on every page, word for word. The code lives in `01-portfolio/site`. The design lives in Figma under the V4a sections on the ↳ V1 page of [rez-website](https://www.figma.com/design/2PZQVIX9UJO8NqnXNqiNDe/rez-website). Where the two differ, the code is the newer source.

**Stale since 22 Oct.** Rez's answers in [10-confirmations.md](10-confirmations.md) change several lines below in the V4a build, and those answers win: Taste Labs leaves the whole site (row 61); DashBloom reads Jan 2024 to Sep 2026, so no role is current (78); no city, so "Rajshahi" and "Dhaka" go from About, For agencies and the Recruiter note (50); no NDA card on Work (60); no Client, Concept or To confirm tags and no years on cases (81); "Monthly design support" replaces "Monthly Design Team" (49); the spec changes listed at the end are approved (62 to 67). Package R refreshes this file after the build ([08-build-plan.md](08-build-plan.md) §6 R).

## 1. In one screen

| Item | Where it stands |
|---|---|
| What it is | Rez's personal portfolio. A dark, glass design over a blurred warm portrait, built from the Figma V4a direction |
| Who it serves | Founders and B2B teams (book a call), recruiters (ask for the CV), agencies (the pilot) |
| Where it runs now | `http://localhost:3000` on Rez's PC. Start it with the `portfolio-site` launch entry, or `npm run dev` inside `01-portfolio/site` |
| Pages | 23 pages plus a 404: Home, Work, 7 case pages, a password case, 5 service pages, Career, About, Contact, Free templates, Work with me, For agencies, Privacy, Stats |
| Tested | Every route answers, the production build passes, lint and type checks are clean, and the main flows were clicked through in a browser (details in section 11) |
| Search engines | The whole test site is kept out of search (noindex everywhere, robots.txt blocks all) until launch |
| Waiting on Rez | Name on the site, credit lines, prices, the CV contact lines, Gumroad links, which case gets the password, hosting choice. Full list in section 14 |

## 2. Stack and why

| Part | Choice | Why |
|---|---|---|
| Framework | Next.js 16.4.2 (App Router, Turbopack) with React 19.3 | Rez preferred Next.js. It keeps the sound and the dock alive across page changes, and it runs the form, the password pages and the visit counter on the server |
| Rendering | Cache Components with Partial Prefetching | Pages are prebuilt as static HTML. Only the stats page and the password case read per request data (cookies). Case pages stream, so a click shows a skeleton at once |
| Styling | Tailwind CSS v4, with tokens named after the Figma variables | One set of colors, radii and glass effects shared by every component |
| Motion | Motion 14 (the Framer Motion library), plus CSS for the hero entrance, the glow and the archive rows | Spring animations for the dock, switches, accordions, filters and lightbox. CSS where it is cheaper |
| Smooth scroll | Lenis, on desktop mice only | Inertia scrolling on desktop. Phones and reduced motion keep native scrolling |
| Booking | Cal.com embed (`@calcom/embed-react`), link `rezkarim/deck-call` | Rez wrote "Calendly", but his link is Cal.com, so the embed uses Cal.com |
| Sound | Web Audio API. Interface sounds synthesized in the browser, the ambient bed from three recorded loops in `site/public/audio` | Natural, soft and small: about 2.3 MB for the one loop a visit plays |
| Fonts | Newsreader (headlines) and Plus Jakarta Sans (everything else), loaded with next/font | Matches the Figma type styles, served from the site itself |
| Data | JSON files in `site/.data` for visit counts and messages | Free and simple for the preview. On a host without a disk this moves to a small database (section 12) |
| New libraries | motion, lenis, @calcom/embed-react, flag-icons (SVG flags, copied into `public/flags`) | All free and open source (MIT) |

## 3. Look and design system

The site mirrors the V4a design in Figma. Tokens live at the top of `site/src/app/globals.css`.

| Token | Value |
|---|---|
| Page | Black, with the warm portrait blurred behind everything, fading to black at the edges, slow drift, fine grain |
| Column | One centered column, 700px wide, cards stacked 8px apart |
| Glass card | Black at 40%, 40px corners, inner white glow, 16px background blur, 48px padding (32px corners and 22px padding on phones) |
| Text | Primary #EEF0F3, secondary #9AA1AC, muted white at 50%, tertiary #6B7280 |
| Hairline | #1A1F27 |
| Primary button | Light pill #EEF0F3 with dark text #11141A, glass highlights, plus the glow described in section 5 |
| Glass pill | Black at 10% with a soft inner glow, 24px corners |
| Type | Titles Newsreader 60px (42px on phones), card titles Newsreader 36px, body Plus Jakarta Sans 18px, labels 16px, small text 13px |
| Notes | Amber "to confirm" chips appear only in the preview and disappear on the live site |

Figma components that match the code: Action pill (now with the glow), Glass pill, Icon tile, Work card, Highlight row, Timeline item, Track switch, Expand button, Meta cell, Decision row, Media, Archive card, Template row, Offer card, Footer, Field, Visitor switch, Chat bubble, Tag, Filter chip, plus the new Sound toggle, Glass nav · V4a, Visitor clock, Top bar · V4a and Cookie banner.

## 4. Site map

| Route | Page | In the dock | Search |
|---|---|---|---|
| `/` | Home | Home | noindex (test site) |
| `/work` | All work, filters, on request cases, archive | Work | noindex |
| `/work/earworm`, `/work/real-estate-website`, `/work/solvita`, `/work/nike-mind`, `/work/syncgrid`, `/work/cargoshift`, `/work/pulse` | Case pages | Work | noindex |
| `/work/private` | Full case for recruiters, password protected | Work | noindex always |
| `/brand`, `/product`, `/decks`, `/social`, `/linkedin` | Service pages | Work | noindex |
| `/career` | Highlights, experience, recognition, education | About | noindex |
| `/about` | Portrait, bio, experience, awards | About | noindex |
| `/contact` | Booking, form, FAQ | Contact | noindex |
| `/free` | Free templates | Free templates | noindex |
| `/work-with-me` | Offers and starting prices, linked from the footer and outreach only | Contact | noindex always |
| `/agencies` | White label terms and the pilot, linked from the footer and agency outreach only | Contact | noindex always |
| `/privacy` | What the site counts, cookies | none | noindex |
| `/stats` | Private visit counts and messages, password protected | none | noindex always |
| Anything else | 404 page with a real 404 status | none | noindex |
| `/robots.txt`, `/sitemap.xml` | Robots blocks everything for now. The sitemap lists the public pages | | |

Not built: `/scorecard` (spec §8 adds it last).

## 5. Features

### Visitor clock and flag
The top bar on every page shows "Rezaul Karim" on the left (links home) and, on the right, the visitor's own local time with their country flag and city. It works out the time zone in the visitor's browser, maps it to a country (544 time zones, including old names some browsers still report), and ticks every second. Nothing is sent anywhere for it. Phones show the flag and time without the city. Unknown zones show a small globe.

### Primary button with glow
"Book free strategy call" is the light pill from Figma with four effects: a soft warm halo that breathes every 4.2 seconds, a thin rim light that circles the edge every 5.5 seconds, a light sheen that sweeps across on hover (the hero and call cards also sweep once every 7 seconds), and a small magnetic pull toward the cursor. The arrow nudges on hover and the pill presses in on click. Visitors who prefer reduced motion get the static glow only.

### Booking
Every "Book free strategy call" button opens the live Cal.com calendar (`cal.com/rezkarim/deck-call`, month view, dark theme) as a modal over the current page. If Cal.com can't load, the button goes to the contact page instead. The contact page also embeds the same calendar inline, loading it just before it scrolls into view, with a calendar shaped placeholder until it is ready and a "Book on Cal.com" link as a fallback. A finished booking adds one to "Calls booked" in the stats.

### Sound
The dock ends with a sound switch (an equalizer icon, crossed out when off). Sound is on by default. Browsers keep a page silent until its first click, tap or key press, so the ambient bed fades in then. After one click, Chrome lets later refreshes start it on their own. The bed is one of three nature recordings, two minutes each, crossfaded so the loop point never shows: Beach waves, Morning garden (dawn birds by a garden over wind in the trees) and Forest stream (a brook with a blackbird). Each page load plays the next one in line, and the dock tooltip names it. It plays at 40% of the first level (Rez, 21 Oct). Recordings by Joseph Sardin on BigSoundBank, CC0, credited on /privacy. With sound on, the site adds soft interface sounds: a tick when the pointer moves onto a link or card, a tap on click, a swoosh when something opens or closes, a pop when a FAQ answer appears, a three note chime when a form sends, and a low double blip on a wrong password. The choice is remembered in the browser. Audio pauses when the tab is hidden. Interface sounds are synthesized in the browser and keep their level.

### Motion
| Where | What happens |
|---|---|
| Page load | The first card rises in with a short blur clear, line by line |
| Scrolling | Every other card fades up and unblurs as it enters the screen |
| Backdrop | The blurred portrait drifts very slowly |
| Dock | A glass bubble slides to the active page. Icons lift on hover, with a label above them |
| Work cards | The cover zooms slightly and a "View case" chip slides up on hover. Locked cards tilt their lock |
| Filters and tracks | A white bubble slides between options. Cards and rows fold in and out with a blur |
| Career glimpse | "Show 3 more" and "Show 3 earlier roles" expand the lists smoothly, and each role opens to show its detail |
| Services | Accordion pills open one at a time |
| Archive | Two rows of 16 projects slide in opposite directions, grey and dim until hovered, with the project name on hover. They pause on hover |
| Case pages | The hero image zooms gently as you scroll. Every image opens in a lightbox |
| FAQ | Each question lands, a typing indicator shows, then the answer appears |
| Forms | Fields glow on focus. Success shows a check that draws itself |

### Smooth scrolling
On desktop mice, scrolling has light inertia. Touch screens and reduced motion keep normal scrolling. The lightbox pauses page scrolling while it is open.

### Lightbox
Any case image opens full screen with its own blur placeholder. Arrow keys or the side buttons move between all images in the case, swipes work on touch, Escape or a click outside closes it, and a counter shows the position.

### Cookie consent and the visit counter
A small banner appears 1.4 seconds after the first visit. "Allow" adds one first party cookie (`rk_vid`, a random id kept a year) so returning visits can be counted. "Only essential" keeps counting cookieless. Page views are counted either way, without cookies and without storing any IP address. For each visit the site keeps the page, the referring site, a rough device size and the country from the time zone. Bots are skipped. The footer's "Cookie settings" reopens the banner. Rez's own browser stops counting once he logs into the stats page.

### Stats page
`/stats` asks for a password, then shows views today, views and visits over 7 days, returning visitors, calls booked, a 14 day chart with a table view, top pages, where visits come from, countries with flags, devices, cookie choices, and every message from the contact form. "Log out" ends the session.

### Contact form
A switch picks who is writing: Founder or team, Recruiter, or Agency. Each has its own fields and button. Links can open a specific tab (`/contact#recruiter`, `/contact#agency`). Messages are saved and shown on the stats page. The form blocks spam with a hidden field, a minimum time on the page, and a limit of 6 messages an hour per visitor. Errors keep what the visitor typed.

### One CV path
Per Rez's instruction, the three CVs never appear on the site. Recruiters see one row, "My CV, sent on request, matched to your role", with an "Ask for my CV" button that opens the Recruiter form. This also keeps the phone number on the CVs off the web.

### Password case
`/work/private` holds the "Full case for recruiters". The password comes with the CV. A right password unlocks it for 30 days in that browser. After eight wrong tries in ten minutes, the form stops accepting guesses for a while. "Lock again" locks it.

### Images
Every work image is served in modern formats at the right size for each screen, with a blurred placeholder while it loads. The headshot is a background-removed cutout of the warm portrait, framed head and shoulders (section 10).

### Responsive
Tested at 375px (phone), 768px (tablet) and 1440px (desktop) with no sideways scrolling. Phones get one column, stacked buttons, smaller titles and a slimmer dock. On phones the case cover keeps a 4:3 frame with the title below it, so wide covers are not cropped.

### Accessibility
A skip link, real headings, labels on every field, keyboard focus rings, keyboard control for the lightbox and switches, alt text on case and archive images, live regions for form results, and full support for reduced motion. Cards still show without JavaScript; the FAQ thread, the calendar and the forms need it.

## 6. Global copy

| Element | Copy |
|---|---|
| Top bar | Rezaul Karim · [flag] [visitor's local time] [city] |
| Dock | Home, Work, Free templates, About, Contact, then Sound on or Sound off |
| Call card (most pages) | 20 minutes, Sunday to Thursday · Book a free call · button Book free strategy call · LinkedIn, Behance and Email tiles |
| Call card on case pages | Want something like this? · Book a free call · Book free strategy call |
| Footer, Pages | Work, Services, Career, About, Contact |
| Footer, More | Free templates, Work with me, For agencies, Privacy |
| Footer, Elsewhere | LinkedIn, Behance, Dribbble, Instagram |
| Footer, bottom | © 2026 Rezaul Karim · Cookie settings · Bangladesh · Remote |
| Cookie banner | I count visits to make this site better. If you allow it, one cookie tells me when you come back. No ads, nothing sold. Privacy · buttons Allow and Only essential |
| Page titles | "Rezaul Karim · Brand & website designer" on Home, "[Page] · Rezaul Karim" elsewhere |

## 7. Page by page copy

### Home `/`
1. **Hero.** Rezaul Karim · Bangladesh · Remote. Headline: Brand & website designer for startups and B2B teams. Under it: Brand systems, websites and pitch decks, plus social and LinkedIn design. Buttons: Book free strategy call · See work.
2. **Proof.** £200K, Designed the investor deck used in Earworm's £200K pre-seed. YC W25, Delineate (YC W25), past client. 300+, 300+ client reviews. SolVita, SolVita brand and website.
3. **Selected work** (button All work). Earworm investor deck, Client, Designed the investor deck used in Earworm's £200K pre-seed. Real estate website, Client, Website UI and UX. Omega Health Care, Coming soon, Brand guidelines. Case on the way. SolVita, Client, Brand identity and website, built in Framer.
4. **Career highlights** (button Full career). Track switch All, Brand, Product & UX, Pitch decks. Shows 3 rows, then Show 3 more. Rows are listed under Career below. On Home, Delineate reads: Investor pitch, website and SaaS product in one visual system.
5. **Services.** Brand and websites lead. Decks, social and LinkedIn design come with them. Accordion: Brand identity (Logo systems and brand guidelines), Web & UI/UX (Websites, landing pages, apps and Framer builds), Pitch decks (Pitch decks, company profiles, sales decks and documents), Social (Social media posts, carousels and ad creatives), LinkedIn (Profile photo, banner and Featured section). Each opens to "See [service]".
6. **How I work.** 01 A free call with 3 fixes, 20 minutes on your brand, site or deck. You leave with three fixes. 02 A fixed proposal the same day, Scope, timeline and price in writing on the day of the call. 03 Delivery with notes, Final files and sources, with short notes on how to use them.
7. **Archive.** More brand, web and deck work. The rows slide slowly and pause on hover. Labels: ALPHA · Skincare brand, Azora · Real estate branding, Bristo · Coffee branding, CargoShift · Logistics identity, Fitness app UI, Furniture ecommerce website, Gravix · Fintech branding, Grocery ecommerce website, Nike Mind · Concept deck, Orvion · SaaS branding, Pulse · eSIM branding, Real estate website, Solar energy website, SyncGrid · HR SaaS identity, Taif · Proptech branding, YumYum · Restaurant branding.
8. **Free templates for your next pitch.** 10-Slide Story Deck, Free on Gumroad. LinkedIn Profile Kit, Free on Gumroad. Buttons read "Coming soon" until the Gumroad links exist, then "Get it free".
9. **Call card**, footer, dock.

### Work `/work`
- Header: Work. Client work first. Concepts are marked. Some cases open on request. Filters: All, Brand, Web & UI/UX, Decks, Social.
- Grid: Earworm investor deck (Client), Real estate website (Client), Omega Health Care (Coming soon), SolVita (Client), Nike Mind (Concept, Concept investor deck, unofficial), SyncGrid (Concept, Brand identity for an HR SaaS platform), CargoShift (Concept, Logistics brand identity), Pulse (Concept, eSIM brand identity), Social posts (Concept, Posts and carousels for the Pulse brand, opens /social).
- On request: Cases still in progress, under NDA, or kept for recruiters. Astra (Coming soon, Case study on the way). GHX Summit (Coming soon, Case study on the way). Client under NDA (Under NDA, Details on a call, opens Contact). Full case for recruiters (Password, Password comes with my CV, opens /work/private).
- Archive, call card.

### Case pages `/work/[case]`
Every case has: a hero (cover, back button, Client or Concept tag, title, one line outcome), a "My role" card, "The brief", images, a decisions card, the next case, and the call card. Cards marked "To confirm" show in amber in the preview only, and "To confirm" fields are hidden on the live site.

| Case | Tag | Outcome line | My role | Next |
|---|---|---|---|---|
| Earworm investor deck | Client | Designed the investor deck used in Earworm's £200K pre-seed | Client Earworm, UK · Year 2023 · Scope Investor deck · Role Designer, pitch deck and web | Real estate website |
| Real estate website | Client | Premium properties, a clean layout and smooth navigation. | Client to confirm · Year to confirm · Scope Website UI and UX · Studio DashBloom | SolVita |
| SolVita | Client | A healthcare brand and website for infusion therapy clinics. | Client SolVita · Year to confirm · Scope Brand identity and website, built in Framer · Studio DashBloom | Nike Mind |
| Nike Mind | Concept | A concept investor deck for a mental fitness toolkit inside Nike Training Club. | Type Concept, unofficial · Year 2025 · Scope Investor deck · Note Not affiliated with Nike | SyncGrid |
| SyncGrid | Concept | One mark for a platform that brings teams and workflows together. | Type Concept · Year 2025 · Scope Brand identity for an HR SaaS platform · Studio DashBloom | CargoShift |
| CargoShift | Concept | A logistics identity built from boxes in motion. | Type Concept · Year 2026 · Scope Logistics brand identity · Role to confirm | Pulse |
| Pulse | Concept | An eSIM brand that keeps travellers connected, anywhere. | Type Concept · Year 2026 · Scope eSIM brand identity · Role to confirm | Earworm investor deck |

**Earworm.** Brief: Earworm is a Bristol based video podcast agency. It was raising a pre-seed round to grow and expand into the US. The deck had to fit a wide business into a few slides, put the story in a clear order, and still feel like Earworm. Images: ew-02, ew-01, ew-03, then the decisions, then ew-04, ew-05, ew-06. 3 design decisions: Establishing the story (Restructured the content around one investment story, from the proposition to the growth opportunity.) Building the visual system (A distinctive system that gave the deck personality and kept it polished, consistent and easy to follow.) Creating impact (Bold type, focused layouts and clear emphasis on the moments that carry the pitch.) Result: £200K, Designed the investor deck used in Earworm's £200K pre-seed. Client words (preview only until Ben Farley says yes): "They took a complex business story and turned it into a clear, confident and compelling investment deck." Ben Farley, Founder & CEO, Earworm. The hero uses the new Cover thumbnail from the PodPilot file. The other thumbnail says "Funding raised", which hard rule 4 rules out.

**Real estate website.** Brief: A real estate website focused on simplicity, elegance and user experience. It highlights premium properties so people can find their ideal home with less effort. Images re-03, re-04, then What mattered, then re-06, re-08, re-09, re-10. What mattered: Simplicity and elegance (A calm layout that lets the properties lead.) Smooth navigation (Listings, featured cities and articles sit a click apart.) Engaging presentation (Large imagery and clear type on desktop and phone.)

**SolVita.** Brief: SolVita runs outpatient infusion therapy clinics and wants care that fits the patient, not the other way around. The brand and the website had to feel clinical and warm at once. Images sv-02, sv-03, decisions, sv-04, sv-01, sv-05, sv-06, sv-07. 3 design decisions: A logo rooted in care (Sun, revive and energy meet waves, blood, motion and flow in one mark.) A typeface with warmth (Bricolage Grotesque, for its mix of structure and warmth, clinical and human at once.) A palette for trust (Dark green #15594C, bright yellow #FFC34F and deep red #B74137.)

**Nike Mind.** Brief: Gen Z and early career athletes face rising stress, disrupted sleep and scattered attention. Wellness apps feel passive, not like training. The concept is an athlete first toolkit with micro check-ins, 2 to 5 minute mental drills and team challenges. Images nk-01, nk-02, decisions, nk-03, nk-04. How the story runs: The problem (Athletes need short, actionable rituals that fit into workouts and daily routines.) Why now (Performance culture now includes mental recovery, and Gen Z prefers short, social tools.) Go to market (Launch inside Nike Training Club, with athlete ambassadors and campus club partnerships.)

**SyncGrid.** Brief: SyncGrid is a cloud platform for team collaboration and workflow automation. The identity had to show people and technology working in step, and scale from an app icon to a stage screen. Images sg-01, sg-02, decisions, sg-03 to sg-07. 3 design decisions: A mark of streams (Intersecting arcs stand for data streams coming together, the way the platform unifies teams.) Neue Montreal (A grotesque with display weight, tight kerning and eight styles for every size.) Orange and black (A bold pair, with gradients that add depth and movement.)

**CargoShift.** Brief: CargoShift is a logistics platform that makes global shipping simple and reliable, from booking to final delivery. The identity mixes functional design with a refined finish, so it builds trust on a truck, a box or a screen. Images cs-02, cs-01, decisions, cs-03 to cs-07. 3 design decisions: Modular squares (The logo is built from clean squares, each one a box in motion.) Aeonik (Balanced and contemporary, with geometric precision across weights.) Cargo orange (Cargo Orange #F33C12 with Harbor Navy #0C2840 and Atlas Blue #033E66.)

**Pulse.** Brief: Pulse is a global eSIM. Travellers skip swapping SIM cards and roaming fees, and get connected in minutes. The identity was built with one goal, to make staying connected feel simple, fast and easy to trust. Images pl-01, pl-02, decisions, pl-03 to pl-06. 3 design decisions: A pulse in the mark (A wave of bars beside a bold wordmark, readable at app icon size.) Neue Montreal (A modern sans for clarity and digital first use.) Volt on midnight (Midnight #142634, Pine #053F41 and Volt #D9FC62, with a light sky blue.)

### Full case for recruiters `/work/private`
Header: Full case for recruiters. This case is password protected. The password comes with my CV. Locked card: Password field (placeholder The password from my CV), button Unlock case, then No password yet? with Ask for my CV. Unlocked card: Unlocked. Thanks for reading. The full case sits here once it is chosen. Button Lock again. Errors: That password does not match. Too many tries. Ask for my CV and the password comes with it.

### Service pages
Every service page has: a header with the service icon, title and lead, buttons Book free strategy call and See all work, a cases card, "What I design" with formats, "How it works" (the same three steps as Home), and the call card. No CV buttons.

| Page | Title | Lead | Cases | What I design | Formats |
|---|---|---|---|---|---|
| `/brand` | Brand identity | For startups and B2B teams that need a brand people remember and trust. You get a logo system, guidelines and the assets to use them. | SolVita, SyncGrid, CargoShift, Pulse | Logo system (Mark, wordmark and lockups for every size) · Brand guidelines (How to use the brand, written down) · Type and colour (A system your team can repeat) · Stationery and merch (Cards, letterheads, signage and apparel) · Brand assets (Ready for web, decks and social) | Figma, Illustrator, PDF guidelines |
| `/product` | Web & UI/UX | Websites, landing pages, apps and Framer builds, designed so the product and the story match. | Real estate website, SolVita (Website built in Framer) | Websites (From sitemap to every page) · Landing pages (One page, one job) · App UI (Flows, screens and prototypes) · Design systems (Figma components developers can build from) · Framer builds (Live sites you can edit yourself) | Figma, Framer, Developer handoff |
| `/decks` | Pitch decks | Pitch decks, company profiles, sales decks and documents, from story outline to speaker ready slides. | Earworm investor deck, Nike Mind | Investor decks (Story, structure and the ask) · Sales decks (For meetings and demos) · Company profiles (Who you are, in a few pages) · Documents and reports (Long reads that stay readable) · Slide systems (Reusable masters so later decks ship faster) | PowerPoint, Google Slides, Figma |
| `/social` | Social | Social media posts, carousels and ad creatives that look like your brand on every post. | Samples, Pulse brand (Concept), six posts that open in the lightbox | Posts (Single posts for launches and news) · Carousels (Stories told across slides) · Ad creatives (Sized for each placement) · Templates (Layouts your team can reuse) | Figma, Canva |
| `/linkedin` | LinkedIn | LinkedIn profile design. A profile photo, banner and Featured section that read like your best pitch. | A profile mock (banner, photo, Rezaul Karim, Brand & website designer for startups and B2B teams, Featured tiles), then Start with the free kit (LinkedIn Profile Kit) | Profile photo (Edited for a clean, consistent look) · Banner (Your offer and proof, at a glance) · Featured section (Cards that link to your best work) | Figma, PNG |

`/decks` also has a statement card: AI can make slides. It can't make investors believe.

### Career `/career`
- Header: Career. 6 years across brand, product and pitch decks. Pick your track to see what matters to you. Track switch All, Brand, Product & UX, Pitch decks.
- Highlights (4 shown, then Show more):

| Who | All | Brand | Product & UX | Pitch decks |
|---|---|---|---|---|
| Earworm | Designed the investor deck used in Earworm's £200K pre-seed | | | same line |
| Delineate (YC W25) | SaaS dashboards for an FDA regulated clinical workflow, plus the website and pitch | One brand system across pitch, website and SaaS | SaaS dashboards for an FDA regulated clinical workflow, plus the website and pitch | Investor pitch, website and SaaS product in one visual system |
| SolVita | Healthcare brand and website | Healthcare brand and website | Healthcare website, built in Framer | |
| Yerbae | Identity, packaging and campaign assets for a US natural beverage brand | same line | | |
| Qubitech Solutions | UI across concurrent client projects, shipped on schedule every quarter | | same line | |
| BdApps National Hackathon 2022 | Startup pitching coach and mentor | | | same line |

- Experience (4 shown, then Show 3 earlier roles; each opens to its detail):

| Years | Role | Company | Detail |
|---|---|---|---|
| Aug 2026 to Present | Presentation Designer, AI Training | Taste Labs, USA · Remote contract | AI company. Expert design work used to train and evaluate AI models. Details under NDA. |
| Jan 2024 to Present | Product Designer | DashBloom, design studio · Remote | Design brand identities, websites and pitch decks for client projects, and carry each identity into decks, sites and product UI. |
| Oct 2024 to Dec 2024 | Product Designer | Delineate (YC W25) · Remote contract | Designed the UI for the SaaS product, with dashboards for researchers and biostatisticians. Designed the company website and the investor pitch deck on the same visual system. |
| Sep 2023 to Nov 2023 | Designer, Pitch Deck and Web | Earworm, UK · Freelance | Designed the investor deck used in their £200K pre-seed, and the website in Figma. |
| Apr 2021 to Jun 2023 | UI UX Designer | Qubitech Solutions, Bangladesh · Full time | Designed interfaces and workflows across concurrent projects. Shipped on schedule while keeping interaction quality consistent. |
| May 2021 to Feb 2022 | Visual Designer | Gaskon, USA · Remote freelance | Designed branded interfaces and visual systems for enterprise clients, plus infographics for dense technical material. |
| Nov 2020 to Oct 2022 | Brand Designer | Yerbae, USA · Remote freelance | Designed brand identity, packaging and visual assets for a US natural beverage brand, across SKUs, product lines and campaigns. |

- Recognition and learning: 2022 Startup Pitching Coach (Mentor), BdApps National Hackathon 2022. 2020 Winner, National Hackathon on Frontier Technologies, Bangladesh. 2020 BASIS Innovative Project Award, Bangladesh Association of Software and Information Services. 2022 Foundations of User Experience (UX) Design, Google Career Certificates. 2022 Figma UI UX Design Essentials, Udemy, Daniel Scott.
- Education: Bachelor of Science, Industrial & Production Engineering. Rajshahi University of Engineering & Technology · 2016 to 2021.
- For recruiters: Open to remote full time and contract roles. My evenings in Dhaka overlap US mornings and UK afternoons. Row: My CV, Sent on request, matched to your role, button Ask for my CV.
- Call card.

### About `/about`
- Header: the transparent headshot on a warm spotlight, then About, then:
  - I'm a brand and website designer based in Rajshahi, Bangladesh, working remotely with US and UK teams.
  - I studied Industrial & Production Engineering at RUET, then taught myself design, from photo editing to branding, pitch decks and UI/UX.
  - Today I design brand systems, websites and pitch decks for startups and B2B teams. I designed the investor deck used in Earworm's £200K pre-seed.
  - Facts: Based, Rajshahi, Bangladesh. Works with, US and UK teams, remote. Experience, 6 years.
- Experience (button Full career): the four latest roles from Career.
- Awards and mentoring: the first three recognition items.
- For recruiters, call card.

### Contact `/contact`
- Header: Let's talk. Book a free 20 minute call below, or send a message. I reply the same day. The email rezkarim.pro@gmail.com as text, with a Copy button (shows Copied).
- Book a free call · 20 minutes, Sunday to Thursday. The live Cal.com calendar. Calendar not loading? Book on Cal.com.
- Send a message, with the switch Founder or team, Recruiter, Agency.

| Tab | Lead | Fields | Button | Under the button |
|---|---|---|---|---|
| Founder or team | none | Name, Email, What do you need? (Brand identity, Website, Pitch deck, Social, LinkedIn), Message | Send message | Prefer a call? Book free strategy call |
| Recruiter | Tell me about the role and I'll send the CV that fits it. | Name, Work email, Company (optional), Role, Anything else (optional) | Ask for my CV | Open to remote full time and contract roles. My evenings in Dhaka overlap US mornings and UK afternoons. |
| Agency | Overflow design and development, under your brand. NDA first. Your brand, your client. Replies the same day. | Agency, Email, Your name, Brief | Ask about the pilot | The pilot is one real brief, and you pay only if you use the work. |

  Success: Thanks, [first name]. Your message is in. I reply the same day. (Recruiters: Your request is in. I'll send the CV that fits your role, the same day.) Button Send another. Errors: Add your name, so I know who to reply to. Check the email address. Add a line about your project. Add the role you are hiring for. Add the agency name and the brief. Too many messages for now. Email me instead.
- Frequently asked questions, as a chat thread:
  - What does a project cost? You get a fixed price in writing on the same day as our call.
  - Do you work with agencies? Yes. I work under your brand, NDA first, and never contact your client unless you ask.
  - Are you open to full time roles? Yes, remote full time and contract roles. Pick Recruiter in the form above and I'll send the CV that fits your role.
  - Which time zone are you in? Bangladesh. My evenings overlap US mornings and UK afternoons, so replies come the same day.

### Free templates `/free`
Header: Free templates for your next pitch. Both are free. Book a call if you want a hand with yours. Cards: 10-Slide Story Deck, For founders starting a deck from a blank page. LinkedIn Profile Kit, A free Canva template for a LinkedIn profile that looks premium. Each card has "What's inside" (to confirm) and the Gumroad row (Coming soon until the link exists). Call card.

### Work with me `/work-with-me` (unlisted)
Header: Work with me. Named offers with starting prices. Every project starts with a free call and a fixed proposal the same day. Note: prices and terms need your OK.

| Offer | Price | Description |
|---|---|---|
| 21-Day Brand & Website Launch | from $3k | A brand and a website, launched in 21 days. Comes with a LinkedIn kit for the founder. |
| 72-Hour Deck Rescue | $750 to $1.5k | Your deck, rebuilt in 72 hours. On time, or it's free. |
| Brand identity | from $1.5k | A logo system, guidelines and the assets to use them. |
| LinkedIn Profile Kit | from $300 | Profile photo, banner and Featured section, plus a banner for your company page. |
| Monthly Design Team | $800 to $3,000 a month | Social content, website updates, decks, ads and LinkedIn. One review call a month, cancel any month. |

How it works: 01 The call (20 minutes on your brand, site or deck. You leave with three fixes.) 02 A proposal the same day (Scope, timeline and a fixed price in writing.) 03 50% upfront (The project starts once the first half is paid.) 04 Delivery with notes (Final files and sources, with short notes on how to use them.)

Questions: Which formats do I get? Figma for brand and web, PowerPoint or Google Slides for decks, Canva for social templates, plus PDF guidelines. How long does it take? The named offers carry their timeline in the name. Other projects get a timeline in the proposal. How many revisions? To confirm. Can we sign an NDA? Yes. NDA first, before any files change hands. Which time zone are you in? (as on Contact). How do I pay? 50% upfront and 50% on delivery. Payment methods to confirm. Call card.

### For agencies `/agencies` (unlisted)
Header: For agencies. Overflow design and development, under your brand. Buttons Ask about the pilot (opens the Agency tab) and Email me. How it works with your team: NDA first (Signed before any brief or file changes hands.) Your brand, your client (No contact with your client unless you ask. The work happens in your templates.) Replies the same day (Dhaka evenings overlap US mornings and UK afternoons.) What I take on: Brand identity, Websites, design and build, Pitch decks, Social assets, LinkedIn assets. With production support. Turnaround (to confirm): Decks 3 to 5 days, Brand 2 to 3 weeks, Websites 2 to 4 weeks. The pilot: One real brief, and you pay only if you use the work. Then a monthly overflow plan, or per project. Samples on request, under NDA.

### Privacy `/privacy`
Header: Privacy. Short version. I count visits to make this site better, and nothing is sold or used for ads. Button Cookie settings. Sections: What I count, Cookies, Booking and messages, Your clock and flag, Questions. The text matches section 5 and names Cal.com as the booking provider.

### Stats `/stats` (private)
Header: Stats. Private. Visits counted on this site, without third party trackers. Your own visits stop counting once you log in here. Then the dashboard from section 5.

### 404
404 · This page is not here. It may have moved. The work, the services and the booking are one click away. Buttons Go home, See work, Contact.

## 8. Settings and options

| Setting | Where | What it does |
|---|---|---|
| `STATS_PASSWORD` | `site/.env.local` | Password for /stats. A test value is set; change it before launch |
| `RECRUITER_PASSWORD` | `site/.env.local` | Password for /work/private. Put the same one on the CV |
| `AUTH_SECRET` | `site/.env.local` | Signs the login cookies. Generate a new one per host |
| `NEXT_PUBLIC_SITE_URL` | `site/.env.local` | The site's address, for share links and the sitemap |
| `NEXT_PUBLIC_SHOW_NOTES` | `site/.env.local` | 1 shows the amber "to confirm" notes and preview only content (the Earworm quote). Set 0 for the live site |
| Copy and facts | `site/src/data/` | `site.ts` (name, links, proof, FAQ, templates), `work.ts` (cases, archive), `career.ts`, `services.ts`, `offers.ts` |
| Gumroad links | `templates` in `site/src/data/site.ts` | Add each `href` and the button switches from Coming soon to Get it free |
| Booking link | `calLink` in `site/src/data/site.ts` | `rezkarim/deck-call` today |
| Name on the site | `name` in `site/src/data/site.ts` | Rezaul Karim (Rez, 21 Oct). The email stays rezkarim.pro@gmail.com |
| Images | `site/public/images` and `site/src/data/images.json` | The manifest holds sizes and blur placeholders. Regenerate it with the image script if images change |
| Visit data | `site/.data/stats.json`, `site/.data/messages.json` | Delete stats.json to reset the counts (the counts now include test visits) |
| `.env.example` | `site/.env.example` | The same keys with placeholder values, safe to commit |

Copy rules the site follows: no em dash, colon, semicolon or hyphen in visible copy, except inside names and the claim that must stay word for word ("pre-seed", "10-Slide", "21-Day", "72-Hour", "check-ins").

## 9. Data and privacy

| Cookie or storage | Kind | Set when | Holds | Lasts |
|---|---|---|---|---|
| `rk_consent` | Cookie | The visitor picks in the banner | all or essential | 1 year |
| `rk_vid` | Cookie, http only | Only after Allow | A random visitor id | 1 year |
| `rk_case` | Cookie, http only | Right recruiter password | A signed token | 30 days |
| `rk_stats`, `rk_owner` | Cookies, http only | Rez logs into /stats | A signed token, and a flag that stops his visits counting | 30 days, 1 year |
| `rk-sound` | Browser storage | The visitor toggles sound | on or off. No value means on | Until cleared |
| `rk-ambience` | Browser storage | Each page load | The loop played last, so the next load plays the next one | Until cleared |

No IP addresses are stored. Visitor ids are kept hashed, per day, for 90 days. Cal.com handles what people enter in the calendar.

## 10. Assets

| Asset | Where | Note |
|---|---|---|
| Headshot cutouts | `01-portfolio/04-headshots/` | Warm and cool versions: full cutout, transparent head and shoulders, clean square on a dark studio backdrop. Made locally with an open model (BiRefNet lite), so the photo never left the PC. The site uses the warm one |
| Site headshots | `site/public/images/rez/` | `avatar.jpg` (hero, LinkedIn mock), `portrait.png` (About, transparent with a soft fade), `headshot.jpg` (share image) |
| Backdrop | `site/public/images/backdrop.jpg` | The warm portrait, blurred and dimmed, 21 KB |
| Work images | `site/public/images/work/` | 71 images plus the new Earworm cover (`ew-thumb.jpg`) |
| Flags | `site/public/flags/` | 271 SVG flags from flag-icons (MIT) |
| Time zone map | `site/src/data/tz-country.json` | 544 zones to countries, built from the tz database |

## 11. What was tested on 21 Oct

| Check | Result |
|---|---|
| All 23 pages, robots.txt, sitemap.xml, the icon | Answer with 200; unknown pages and unknown cases return a real 404 |
| Production build | Passes; every page prerenders |
| Lint and types | Clean |
| Cookie banner | Allow and Only essential both work; Cookie settings reopens it |
| Visit counter | Counts views, visits, returning visitors, pages, referrers, countries, devices |
| Contact form | Founder message saved and shown on /stats; the Recruiter tab opens from `/contact#recruiter` |
| Cal.com | The inline calendar shows Rez's real slots; the Book button opens the modal |
| Passwords | Wrong password shows an error, the right one unlocks, Lock again locks |
| Lightbox | Opens above everything, arrow keys and wrap around, Escape closes |
| Sound | Switch turns on and off and is remembered |
| Clock | Shows the visitor's time and flag (tested from Dhaka, Bangladesh flag) |
| Phone, tablet, desktop | No sideways scroll; layouts as described in section 5 |
| Copy | No CV list anywhere, no "raised", no Fiverr, no $500K, Taste Labs only as title and generic line |

The test message was deleted after the check. Visit counts include the test visits.

## 12. Design in Figma

File: [rez-website](https://www.figma.com/design/2PZQVIX9UJO8NqnXNqiNDe/rez-website), page ↳ V1. V4 is untouched.

| Section | What changed on 21 Oct to match the build |
|---|---|
| V4a · Core pages, Case pages, Service pages | Every frame has the new top bar (name and visitor clock), the new dock with the sound switch and the right active item, the glowing primary button, the new headshot, and the new Earworm cover. The Earworm case adds ew-02 to its gallery. Case heroes are 600px tall. Career has one CV row instead of three, and the Pitch decks track frame has none. Brand, Web and Decks say "See all work" where the CV pill was. The footer adds Privacy and Cookie settings |
| V4a · Built pages (new) | Contact, About, Free templates, Work with me, For agencies, Privacy, 404, Stats (sample numbers), the Recruiter, Agency and Sent states of the form, the cookie banner, lightbox and booking modal over a page, and phone frames for Home and a case |
| Components page | New: Sound toggle (Off, On), Glass nav · V4a, Visitor clock, Top bar · V4a, Cookie banner, and the effect style Glass/Primary Glow. The Action pill now uses the glow, a rim light stroke and the arrow icon |

## 13. Going live (Rez's steps, not done yet)

1. Pick a host. The site needs a server for the form, the passwords and the counter, so a plain static host is not enough. Two free options: a Node host, or Cloudflare (spec §9) through its Next.js adapter, where the two JSON files move to Cloudflare's free key value storage. The second needs a small code change.
2. Decide how messages reach Rez. Today they wait on /stats. An email alert needs a mail service, which is a new tool and needs Rez's OK first.
3. Set new values for the passwords and the secret on the host, and set `NEXT_PUBLIC_SHOW_NOTES=0`.
4. Test on one of Rez's existing domains, still noindex (spec §8 step 5).
5. SEO basics (spec §8 step 6): share images per page, titles and descriptions check, speed and accessibility pass.
6. At launch: buy rezkarim.com, point it to the host, then lift noindex (robots.ts, the header in next.config.ts, and the robots metadata in layout.tsx), keeping /work-with-me, /agencies, /work/private and /stats out of search.

## 14. Waiting on Rez

| Item | Why it matters |
|---|---|
| Credit lines for every case | Go-live gate G1. Real estate client and year, SolVita year, CargoShift and Pulse role |
| Earworm quote | Shows on the live site only after Ben Farley's OK |
| CargoShift is B3? | The spec's B3 is "Shipping & Logistics brand identity" |
| Omega Health Care (B7) | Coming soon until the Figma file is shared |
| Which case gets the password | The private page waits for it |
| Phone and address on the CVs | Needed before any CV goes out by request |
| Prices and terms | /work-with-me, the 72-Hour guarantee terms, revisions, payment methods |
| Agency turnaround times | /agencies |
| Template contents and Gumroad links | /free and the template rows |
| Cal.com event title | "Strategy call" instead of "deck call" (keep the link) |
| Hosting and email alerts | Section 13 |
| Spec changes to approve | Next.js instead of Astro; the V4a order of Home (work before services); the single CV path instead of the three CVs on /brand, /product and /decks; the serif headline font; the NDA card |
