# Functional checklist for the V4a build

[README](../README.md) · Draft · 22 Oct 2026, with Rez's answers from [10-confirmations.md](10-confirmations.md) applied, updated 28 Oct 2026 with the decisions in [15-v4a-plan/for-rez.md](15-v4a-plan/for-rez.md). Where a line here and 10 differ, 10 wins

Everything that must work in `site/` before the build counts as done. Each line is a pass or fail check, run at 375, 768 and 1440 px unless it says otherwise. The design is in Figma (↳ V4a · Pages, flows on ↳ V4a · Handoff); tokens and components are in [06-design-system.md](06-design-system.md).

## 1. Every page

| Must work | How to check |
|---|---|
| Top bar: the name links home; the clock shows the visitor's own time and flag and ticks every second; phones hide the city; unknown zones show the globe | Load any page, change the PC time zone |
| Dock: right item active per page (Home; Work for /work, cases, services, /for and the deliverable pages; Free templates; About for /about, /career and /hire; Contact for /contact, /work-with-me, /agencies; none on /privacy, /accessibility, /guides, /stats, 404; decision 48); tooltip on hover and keyboard focus; 48px items on phones | Visit each route, tab through the dock |
| Sound switch: the background loop is off by default, starts after the first click once switched on, remembered, pauses when the tab is hidden; click and hover sounds always play and ignore the switch | Toggle, reload, switch tabs |
| Reveals and motion: cards rise and unblur once; everything still shows without JavaScript; reduced motion turns movement off | Toggle reduced motion in the OS |
| Smooth scroll on desktop mice only; native on touch | Scroll with a mouse and on a phone |
| Footer: every link lands (Services goes to /#services; Hire, Guides and Accessibility included, decisions 7, 8, 30); Elsewhere opens new tabs; Cookie settings reopens the banner | Click every link |
| Cookie banner: appears once after 1.4 s; Allow and Only essential both work and close it; choice remembered (rk_consent); Allow adds rk_vid | Clear cookies, reload, choose each |
| 404: unknown routes return a real 404 status with the 404 page | Request /nope, check the status |
| Owner chip: shows in the top bar on every page only while rk_owner is set; links to /stats | Sign in to Stats, browse, sign out |
| G then S on a keyboard, and a 1 s press on the footer © line on phones, open /stats; nothing else happens for visitors | Try both |

## 2. Booking

| Must work | How to check |
|---|---|
| Every "Book free strategy call" opens the Cal.com month view in a modal (dark theme) | Click each one site wide |
| Loading skeleton while the embed loads; fallback with Book on Cal.com and Email me when it fails | Throttle or block cal.com |
| Close with X, Esc and a scrim click; focus stays inside and returns to the button | Keyboard only |
| Phones: bottom sheet, swipe down closes | Phone width |
| A finished booking adds one to Calls booked on Stats | Make a test booking, then cancel it |

## 3. Pages

| Page | Must work |
|---|---|
| Home | Hero buttons; Selected work shows Earworm investor deck, Real estate website, SyncGrid, Yum Yum in that order, each opening its case; Career highlights track switch filters (All, Brand, Web & UI/UX, Pitch decks), Full career link; services accordion opens one at a time with a See link; Free templates rows show Coming soon (disabled) until a Gumroad link exists, then Get it free opens it in a new tab; call card links |
| Archive (Home and Work) | Original colour images, black fade on both edges; two rows auto slide in opposite directions; pause on hover and with the Pause tile; press and drag (mouse and touch) slides a row with a little inertia, then auto slide carries on; a click without a drag shows the name; reduced motion stops the auto slide but drag still works |
| Work | Filters (All, Brand, Web & UI/UX, Pitch decks, Social) with a smooth change and an empty state; Earworm and the Real estate website above SolVita (spec §4 order); no Client, Concept or To confirm tag and no year on any card (row 81); hover zoom and View case chip; On request is a 2 by 2 grid (Omega Health Care, Astra, GHX Summit, Full case for recruiters): Coming soon cards have no link, Password goes to /work/private and stays hidden on the live site until Rez picks a case (row 40); no NDA card (row 60) |
| Case pages (all, including the new ones) | Back goes to /work; My role facts without a Client or Concept label and without a year (row 81), Nike Mind shows "Not affiliated with Nike", To confirm values hidden on the live site; the Earworm quote is its approved last sentence (row 80); every image opens the lightbox (arrows, keys, swipe, Esc, caption "Case · n of N"); Next case follows the Work order and loops; call card |
| /work/private | Masked password with show or hide; wrong password message; 8 wrong tries in 10 min locks it with the Ask for my CV path; right password unlocks for 30 days (rk_case); Lock again; noindex |
| Service pages | Primary and See all work buttons; their cases; format tags; steps; call card; LinkedIn page template row Coming soon; the /linkedin mock shows Sam Bendix's refresh (row 28) |
| LinkedIn invite | Before and after slider (drag the 44px handle, arrow keys); Recent work tiles; packages; perks; FAQ open and close; perks show the five playbook rewards (the Perk level "Reward" text) and "I take on 30 free previews a month." word for word (rows 37, 38, quoted in 10); the FAQ shows the five approved answers word for word (row 39); only Sam's Recent work tile shows until the others are confirmed (row 29); the form (4 questions then details) validates, sends and shows the thanks state; sticky Claim your preview on phones shows after the hero and hides near the form; no dock; footer on desktop, none on phones (row 52) |
| Career | Track switch filters highlights; Show more and Show less; roles expand; Ask for my CV opens Contact with Recruiter picked and CV for a role; no Taste Labs anywhere (row 61); DashBloom reads Jan 2024 to Sep 2026 and no role is current (row 78); awards read "BASIS", with no separate "Bangladesh" line (decision 39) |
| About | Portrait, facts, experience with Full career, awards ("BASIS", no separate "Bangladesh" line, decision 39), recruiter row linking /hire; the RezBloom line (decision 12); no city in the lead or the facts (row 50); no Taste Labs (row 61) |
| Contact | The calendar loads with the page, with its skeleton first (29 Oct, reversing decision 28), and fills its frame to the right edge; the time zone note and the fallback link; Copy email shows the Email copied toast; deep links /contact#recruiter and #agency preselect the role, and `?kind=recruiter&role=` from a Hire page prefills the role |
| Free, Work with me, For agencies, Privacy | Template rows; offers and FAQ (first open); Ask about the pilot opens Contact with Agency picked; Privacy's Cookie settings reopens the banner; Work with me says "Monthly design support" (row 49) and shows no "need your OK" notes; For agencies has no "Dhaka" (row 50); the last three stay noindex where planned |
| Hire, Industry, Deliverable and Guide pages (decisions 5 to 8) | Visible breadcrumb; one H1; the answer first; proof lines word for word from the claims list; 2 or 3 cases; FAQs that stay in the HTML when closed; related links; the family's buttons (Hire: Ask for my CV with the role prefilled; Industry and Deliverable: Book free strategy call and Send a message); a share image; draft and ready pages never build (decisions 19, 20) |
| /accessibility and the 500 page | The statement loads, noindex, linked in the footer (decision 30); a server error shows the 500 page in the site's look |

## 4. Contact form

| Must work | How to check |
|---|---|
| "I'm reaching out as" is single choice; "What do you need?" is multi and lists the options for the picked role (Founder or team: Brand identity, Website, Pitch deck, Social, LinkedIn, Something else; Recruiter: CV for a role; Agency: Overflow work, Brand identity, Website, Pitch deck) | Pick each role |
| Menus float over the form, 44px rows, Esc closes, arrows move, Enter picks | Keyboard only |
| Button and note follow the role (Send message, Ask for my CV, Ask about the pilot) | Pick each role |
| Founder or team also sees optional Timeline and Budget chips and a link field; the message keeps them with its landing page and source (decision 10) | Pick each, send, open Stats |
| Errors in place with the designed lines; typed values stay | Submit empty and wrong email |
| Sending state with a spinner; Sent state per role; Send another | Submit |
| Spam: hidden field, minimum time on page, 6 messages an hour per visitor with the Too many messages state | Submit fast and often |
| Every message lands on Stats, newest first | Send, then open Stats |

## 5. Stats (only Rez)

| Must work | How to check |
|---|---|
| Not linked anywhere; noindex; no robots.txt line (row 58) | Search the HTML, the headers and robots.txt |
| Sign in with STATS_PASSWORD: Checking, Wrong password, Too many tries (8 in 10 min), Signed out after Log out | Try each |
| Session lasts 7 days (rk_stats, decision 26); rk_owner keeps his visits out of the counts and shows the Owner chip | Sign in, browse, check counts |
| Dashboard: tiles, 14 day chart with day labels, hover tooltip and a table view, lists with share bars and flags, cookie choices, an AI assistants group in the sources, messages with mailto, their source and a qualified mark, empty states | Fresh data and real data |

## 6. Counting and data

| Must work | How to check |
|---|---|
| /api/track counts views cookieless; returning visits only after Allow; bots skipped; no IP stored; country from the time zone | Visit with and without Allow |
| Visits and messages in Cloudflare D1 in production (row 91, Rez's call); local data only on localhost and in the Worker preview, never the live store | Local and Worker preview |

## 7. Search, answers and sharing

| Must work | How to check |
|---|---|
| Titles, descriptions and canonicals per page, as in [07-search-and-speed-plan.md](07-search-and-speed-plan.md) | View source |
| One share image per page (exported from Figma section "V4a · Share images and icons"), favicon and app icons from the RK set | Share preview tools |
| JSON-LD (Person, WebSite, cases, FAQPage, breadcrumbs), sitemap, robots, llms.txt as planned | Rich results test, fetch the files |
| Test site stays noindex everywhere until launch; at launch only the planned pages lift it | robots and headers |

## 8. Quality bars

| Must work | How to check |
|---|---|
| No sideways scroll at 375, 768, 1440; layouts match the Mobile and Tablet frames | Resize, compare with Figma |
| LCP under 2.5 s on 4G, CLS under 0.1, INP under 200 ms; AVIF or WebP images at the right sizes | PageSpeed Insights or Lighthouse |
| Keyboard: visible focus ring everywhere, skip link, every icon button named, dialogs trap focus | Tab through each page |
| Contrast AA (tertiary text #7D8592), touch targets 44px on phones | Check against the tokens |
| `npm run lint` (with `.open-next` ignored), `tsc --noEmit` and `npm run build` pass; `npm run cf:build` fits the Worker free limit | Run them |
| No console errors on any page | Browser console |
