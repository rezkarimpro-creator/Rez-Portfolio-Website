# Search and speed plan

[README](../README.md) · Draft · 22 Oct 2026, with Rez's answers from [10-confirmations.md](10-confirmations.md) applied · How the portfolio gets found by Google and Bing (SEO), quoted by answer engines and AI chat (AEO and GEO), and stays fast. Ready to execute: the build starts without another approval round, its packages and kickoff prompts are in [08-build-plan.md](08-build-plan.md), and every open decision has a default in 08 §12.

## 1. In one screen

| Area | Today (live test site, 22 Oct) | Plan |
|---|---|---|
| Indexing | The whole test site is noindex and robots.txt blocks everything. Correct for a test site | One switch flips it at launch on rezkarim.com. Private and campaign pages stay noindex forever (§3.1) |
| Titles and share cards | Titles exist; descriptions are generic; one share image (the headshot) for every page; case pages lose the site name in their cards | A title, description, canonical and share image per page (§3.2 to §3.4). Share images are being designed in Figma now (section `170:7174`) |
| Structured data | None | Person, WebSite, ProfilePage, BreadcrumbList, CreativeWork per case, Service per service page, FAQPage on Contact (§4.3) |
| AI answers | Nothing for AI engines; facts spread over pages | One quotable bio, the same facts everywhere, llms.txt, a crawler policy, matching profiles (§4) |
| Speed, mobile lab | Score 64 to 77, LCP 5.8 to 9.7s, 3 to 5 MB per page | Score 90 or more, LCP 2.5s or less, about 600 KB first view (§5.2) |
| Biggest speed levers | Measured in §5.1 | 1 the ambient sound downloads 2.3 to 2.5 MB on every page; 2 Cal.com loads at once on Contact; 3 first view cards wait for JavaScript; 4 an unused italic font (147 KB) is preloaded; 5 static files are not cached by browsers (§5.3) |

## 2. Rules this plan follows

- Copy in Rez's voice ("I", a designer, never "we" for a studio). No em dash, colon, semicolon or hyphen in visible copy, except inside names and locked claims ("pre-seed", "10-Slide", "21-Day", "72-Hour").
- Claims word for word: "Designed the investor deck used in Earworm's £200K pre-seed" (never "raised"), "Delineate (YC W25)" as a past client with no $500K, "300+ client reviews" without naming Fiverr. Never Taste Labs in any form, not even the title, in copy, structured data, llms.txt or share images (row 61).
- Prices only on /work-with-me (08 §12 item 5 covers the LinkedIn invite packages).
- Free tools only. Rez does every account, DNS and dashboard step.
- Every fact sits in the server HTML. Most AI crawlers do not run JavaScript, so text that only appears after a click or a script is invisible to them.

## 3. SEO

### 3.1 Index map

| Route | Test site now | At launch | In sitemap | Notes |
|---|---|---|---|---|
| `/` | noindex | index | Yes | |
| `/work` | noindex | index | Yes | |
| `/work/<case>` (7 now, plus the new cases) | noindex | index | Yes, with images | Locked cases (Coming soon, NDA) have no page |
| `/brand`, `/product`, `/decks`, `/social`, `/linkedin` | noindex | index | Yes | |
| `/career`, `/about`, `/contact` | noindex | index | Yes | |
| `/free` | noindex | noindex until a template is live, then index (08 §12 item 13) | Once indexed | Two "Coming soon" cards make a thin page |
| `/privacy` | noindex | index | Yes | Low value, but honest and harmless |
| `/work-with-me`, `/agencies` | noindex | noindex, follow | No | Footer and outreach only (spec §3) |
| `/linkedin/invite` | noindex | noindex, follow | No | Campaign page, shared in messages |
| `/work/private`, `/stats` | noindex | noindex, nofollow | No | Neither goes in robots.txt: noindex only, since a robots line tells everyone the page exists (Rez, 22 Oct, [10-confirmations.md](10-confirmations.md) row 58) |
| 404 and unknown cases | noindex | noindex | No | Real 404 status (already true) |
| `/api/*` | blocked | Disallow in robots.txt | No | |

### 3.2 Titles and descriptions

Titles use the existing template "Page · Rezaul Karim". Google sets no length limit but cuts titles to the screen width and rewrites vague or repeated ones, so each title here is unique, descriptive and 60 characters or less. Descriptions are 120 to 155 characters, answer first, in first person. Counts below include the suffix. The Open Graph and X title is the page title without the suffix; the site name travels in `og:site_name` and the WebSite structured data.

| Route | Title | Description |
|---|---|---|
| `/` | Rezaul Karim · Brand & website designer for startups (absolute, 52) | I design brand systems, websites and pitch decks for startups and B2B teams. I designed the investor deck used in Earworm's £200K pre-seed. |
| `/work` | Brand, website and pitch deck work · Rezaul Karim (49) | Brand identities, websites, pitch decks and social. Some cases open on request. (The Work intro and its share image in Figma; Rez OK'd it, 22 Oct) |
| `/brand` | Brand identity designer for startups · Rezaul Karim (51) | I design logo systems, brand guidelines and the assets to use them, for startups and B2B teams that need a brand people remember and trust. |
| `/product` | Website and UI/UX designer for startups · Rezaul Karim (54) | I design websites, landing pages, apps and Framer builds, so the product and the story match. Real client work, with my role on each. |
| `/decks` | Pitch deck designer for startups · Rezaul Karim (47) | I design investor decks, sales decks and company profiles. I designed the investor deck used in Earworm's £200K pre-seed. |
| `/social` | Social media post and carousel design · Rezaul Karim (52) | I design social posts, carousels and ad creatives that look like your brand on every post, plus templates your team can reuse. |
| `/linkedin` | LinkedIn profile design · Rezaul Karim (38) | I design LinkedIn profile photos, banners and Featured sections that read like your best pitch, for founders and B2B teams. |
| `/career` | Career and experience · Rezaul Karim (36) | 6 years across brand, product and pitch decks. My roles, highlights, awards and education, filtered by the track that matters to you. |
| `/about` | About Rezaul Karim · Brand & website designer (absolute, 45) | I'm a brand and website designer working remotely with US and UK teams. I studied engineering at RUET and taught myself design. |
| `/contact` | Book a free strategy call · Rezaul Karim (40) | Book a free 20 minute call and leave with 3 fixes for your brand, site or deck, or send a message. I reply the same day. |
| `/free` | Free pitch deck and LinkedIn templates · Rezaul Karim (53) | Two free templates. A 10-Slide Story Deck for founders starting from a blank page, and a LinkedIn Profile Kit for Canva. |
| `/privacy` | Privacy · Rezaul Karim (22) | What this site counts and why. Page views without cookies, one optional cookie for return visits, no ads and nothing sold. |
| `/work-with-me` | Work with me · Rezaul Karim (27) | Named offers with starting prices. Every project starts with a free call and a fixed proposal the same day. |
| `/agencies` | For agencies · Rezaul Karim (27) | Overflow design and development, under your brand. NDA first, replies the same day, and a pilot where you pay only if you use the work. |
| `/linkedin/invite` | Your LinkedIn, designed around you · Rezaul Karim (49) | A new banner, profile photo and Featured section, built around what you want to be known for. Your first look is free. |
| `/work/private` | Full case for recruiters · Rezaul Karim (39) | This case is password protected. The password comes with my CV. |
| 404 | Page not found · Rezaul Karim | none |
| `/work/earworm` | Earworm investor deck · Rezaul Karim (36) | I designed the investor deck used in Earworm's £200K pre-seed. One clear investment story and a visual system for a Bristol video podcast agency. |
| `/work/real-estate-website` | Real estate website · Rezaul Karim (34) | Website UI and UX for a real estate brand. A calm layout that lets premium properties lead, with listings, cities and articles a click apart. |
| `/work/solvita` | SolVita brand identity and website · Rezaul Karim (49) | Brand identity and website for SolVita, outpatient infusion therapy clinics. A mark rooted in care, warm type and a site built in Framer. |
| `/work/nike-mind` | Nike Mind investor deck · Rezaul Karim (38) | An unofficial investor deck for a mental fitness toolkit inside Nike Training Club. Not affiliated with Nike. |
| `/work/syncgrid` | SyncGrid brand identity · Rezaul Karim (38) | Brand identity for an HR SaaS platform. One mark of intersecting streams, Neue Montreal type and an orange and black palette. |
| `/work/cargoshift` | CargoShift brand identity · Rezaul Karim (40) | Brand identity for a logistics platform. A mark built from boxes in motion, Aeonik type and Cargo Orange with Harbor Navy. |
| `/work/pulse` | Pulse eSIM brand identity · Rezaul Karim (40) | Brand identity for a global eSIM. A pulse of bars in the mark, Neue Montreal type and a volt on midnight palette. |

New cases follow one pattern, written by P5 into each case's `description`: the outcome or scope first, then the client when confirmed, and the one idea that carries the work. 155 characters at most, same punctuation rules, no client name that is still "to confirm". No Client or Concept label and no year in any title, description or share image (Rez, 22 Oct, [10-confirmations.md](10-confirmations.md) row 81); Nike Mind keeps "Not affiliated with Nike".

### 3.3 Canonicals and the launch switch

- One helper (`pageMeta`, `caseMeta` in `src/lib/seo.ts`) returns the whole metadata object for a page: title, description, `alternates.canonical`, the full `openGraph` (type, url, site name, title, description, image with width, height and alt, locale `en_US`), `twitter` (`summary_large_image`, title, description, image) and `robots`. Next merges metadata shallowly, so every page sets the full object.
- Canonical is the absolute clean URL (no trailing slash, no query), built from `NEXT_PUBLIC_SITE_URL` through `metadataBase`.
- Indexable pages at launch get `index, follow, max-image-preview:large` so search can show large previews of the work.
- `NEXT_PUBLIC_INDEXABLE` (new) is the one switch. At 0 (now): robots.txt blocks all, every page says noindex, and the site wide `X-Robots-Tag: noindex, nofollow` header stays. At 1 (launch): the launch robots.txt, page level robots as in §3.1, and the `X-Robots-Tag` header only on the private and campaign routes.
- Settings per environment are in 08 §12.3.

### 3.4 Share images

| Item | Plan |
|---|---|
| Design | Designed in Figma by the og-images session, section "V4a · Share images and icons" (`170:7174`), with its own notes frame (`174:18077`): one frame per route ("OG · /", "OG · /work/earworm" and so on; 15 pages and every case, the last one "OG · /work/livio" `209:8328`, on 22 Oct), two templates ("OG · Template" for pages, "OG · Template · Case" for cases, 60px safe area) and the icon set. Glass card over the blurred portrait, avatar and name, the title in Newsreader (no Client, Concept or To confirm tag and no year, row 81), the outcome line, "rezkarim.com", and the case cover on the right. No frames for /stats, /work/private and the 404, on purpose |
| Size and file | 1200×630 JPEG, quality about 80, 200 KB or less, saved as `public/og/<key>.jpg` (key = the route, `home` for `/`, `work-earworm` for `/work/earworm`) |
| Export | Read only through the Figma connector. Each frame carries a PNG 1x export setting; take it with `get_screenshot` at 1200 wide (or Rez exports the section), then sharp to JPEG |
| Pages without a frame | Any later page or case uses `scripts/og.mjs`, which mirrors the matching template with satori (layout to SVG with the real fonts) and sharp (SVG to JPEG). It runs on the build PC at build time. Nothing renders on the Worker: `next/og` in a route would add about 734 KB gzip of image renderer to the Worker for no gain |
| Tags | `og:title`, `og:description`, `og:url`, `og:type` (website, article on cases), `og:site_name` "Rezaul Karim", `og:image` with width, height and alt, `twitter:card` summary_large_image, `twitter:title`, `twitter:description`, `twitter:image` |
| Alt text | The page title, for example "Earworm investor deck, a case study by Rezaul Karim" |
| Noindex pages | Still get share images: /linkedin/invite, /work-with-me and /agencies are shared in messages |
| Icons | From the Figma icon frames: `src/app/icon.png` (512, also maskable), `src/app/apple-icon.png` (180), `src/app/favicon.ico` built from the 48, 32 and 16 frames, and `src/app/manifest.ts` listing the 192 and 512 icons. The current `icon.svg` goes, unless Rez prefers to keep it |
| Check | Curl the head of each route. X shows the large card only with `twitter:card` set; it falls back to the `og:` fields for the rest. LinkedIn wants 1200×627 or larger and caches previews for about 48 hours; after launch Rez refreshes them with LinkedIn's Post Inspector (it needs his sign in) |

### 3.5 Sitemap and robots

robots.txt now (keep until launch):

```txt
User-agent: *
Disallow: /
```

robots.txt at launch (allows every crawler, AI included, per §4.6). No `/stats` line: /stats is noindex only (row 58):

```txt
User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://rezkarim.com/sitemap.xml
```

Rez chose to allow every AI crawler, training included (row 59), so this group is not used. It stays on record in case he ever blocks training; it would go above the first group:

```txt
User-agent: GPTBot
User-agent: ClaudeBot
User-agent: Google-Extended
User-agent: Applebot-Extended
User-agent: CCBot
User-agent: meta-externalagent
User-agent: Bytespider
Disallow: /
```

Sitemap rules:
- Only the indexable routes in §3.1, absolute URLs on the launch domain.
- `lastModified` from a real date per route kept in `src/data/seo.ts` (cases use their own date), never the build time; search engines ignore a lastmod that changes on every build.
- `images` on each case: the cover and every gallery image (Next's sitemap supports image entries).
- No `changefreq` or `priority`; Google ignores both.

### 3.6 Internal links

- Every indexable page is 2 clicks or less from Home. The dock covers Home, Work, Free templates, About and Contact; Home links each service page and the selected cases.
- The Services accordion keeps its "See [service]" links in the HTML even when a row is closed, so crawlers find all five service pages.
- Each case links to its service page (a small line such as "More brand identity work", or the tag row; P5 picks what fits the frame) and to the next case.
- Archive tiles link to a case once that case has a page.
- Optional, needs a design OK: a Services column in the footer with the five service pages (today "Services" points to `/#services`).
- Descriptive link text ("Earworm investor deck", "Brand identity"), never "click here". Links to Rez's own profiles stay followed; they confirm who he is.

### 3.7 Images and alt text

| Image | Alt text |
|---|---|
| Case cover in a card | "[Case] cover" (the Figma rule) |
| Case gallery image | What it shows: "Earworm deck, market slide" |
| Headshot | "Rezaul Karim" |
| Archive tile | Its label: "ALPHA · Skincare brand" |
| LinkedIn before and after | "LinkedIn profile before, with the default banner" and "LinkedIn profile after, with the new banner and Featured cards" |
| Next case thumb, decorative tiles, flags, backdrop | Empty (`alt=""`) |

- Claims and key facts are never only inside an image; the page text says them too.
- File names describe the work (`earworm-investor-deck-01`), set by the image script (§5.4).
- Case images go into the sitemap (§3.5), which helps image search, where designers get found.

### 3.8 404, redirects and the domain move

- 404: real 404 status for any unknown route and unknown case (already true through `src/proxy.ts`), noindex, links to Home, See all work and Contact.
- Trailing slashes: Next already redirects `/about/` to `/about`.
- A case that changes its slug gets a permanent redirect in `next.config.ts`; old case URLs never 404.
- Launch, in order:
  1. Rez buys rezkarim.com and adds it to Cloudflare.
  2. `wrangler.jsonc` adds `rezkarim.com` and `www.rezkarim.com` as custom domains of the Worker.
  3. `src/proxy.ts` sends a 301 from any host that is not `rezkarim.com` (`www.rezkarim.com`, `rezkarim.dashbloom.design`) to `https://rezkarim.com` with the same path and query. Static files on the old host still load, which is fine. `wrangler.jsonc` sets `"workers_dev": false` and `"preview_urls": false`, so no `workers.dev` copy of the site can be crawled as a duplicate.
  4. `.env.production.local` gets `NEXT_PUBLIC_SITE_URL=https://rezkarim.com` and `NEXT_PUBLIC_INDEXABLE=1`; Rez deploys.
  5. Check with curl: no noindex on public pages, noindex on private ones, robots.txt and sitemap on the new domain, canonicals and share tags pointing to rezkarim.com.
  6. Keep the old host redirecting for at least a year. Cloudflare "Always Use HTTPS" on.

### 3.9 Search Console and Bing (Rez's steps after launch)

| # | Action | Where and how |
|---|---|---|
| 1 | Add rezkarim.com as a Domain property | search.google.com/search-console, Add property, Domain. Copy the TXT record, add it in Cloudflare DNS (Type TXT, name @), then Verify |
| 2 | Submit the sitemap | Search Console, Sitemaps, `https://rezkarim.com/sitemap.xml` |
| 3 | Ask for the first crawl | URL Inspection on Home, /work, /about, /brand, /product, /decks and /work/earworm, then Request indexing (a few a day) |
| 4 | Check after 1 to 2 weeks | Indexing, Pages: public pages indexed; /work-with-me, /agencies, /linkedin/invite, /work/private and /stats under "Excluded by noindex tag". Enhancements: Breadcrumbs and Profile page with no errors |
| 5 | Add Bing | bing.com/webmasters, Import from Google Search Console, pick rezkarim.com, confirm the sitemap |
| 6 | Turn on IndexNow | Cloudflare, rezkarim.com, Caching, Configuration, Crawler Hints on. It works from Cloudflare's cache, which Worker pages skip, so it may send little; P7 also adds a key file and `npm run indexnow`, which sends the sitemap's URLs to IndexNow (Bing and others, not Google) after each deploy |
| 7 | Leave Google's AI features on | Search Console, Settings, "Search generative AI": keep the default (included in AI Overviews and AI Mode) |
| 8 | Watch weekly for the first month | Search Console Performance and its generative AI report (queries with "Rezaul Karim" and design terms); Bing Webmaster Tools, AI Performance (citations in Copilot and Bing's AI answers) |

Never add the test domain to either tool.

## 4. AEO and GEO

### 4.1 What actually works

- Google's own word (AI features page, Dec 2025; optimization guide, May to Jul 2026): AI Overviews and AI Mode draw on the normal index, with no extra requirements, no special markup and no "AI text files". A page must be indexed and allowed to show a snippet. Optimizing for AI answers "is still SEO".
- Many AI Overview citations come from pages that already rank in the top 10 (Ahrefs, 2025; later counts vary), so the SEO work in §3 is also the AEO work.
- Bing's guidelines now name GEO (as reported by Search Engine Journal): state facts plainly, keep entity names consistent, one topic per URL, and use IndexNow for freshness. Copilot searches Bing for its answers, so Bing matters as much as Google here.
- Research on generative engines (Princeton, KDD 2024) found quotations, statistics and cited sources raised a page's visibility inside AI answers by about 30 to 40%, and keyword stuffing did not. A 2026 survey of 45 studies adds that these gains only apply once a page is already among the sources an engine reads; no trick works across every engine.
- Structured data helps engines read facts correctly, but it is not a citation lever (Ahrefs, May 2026). Keep it for accuracy.
- Consistent facts across the site, LinkedIn, Behance and Dribbble, tied together with `sameAs`, are the clearest signal a personal site can send about who someone is.
- Most AI crawlers read the HTML without running scripts. This site prerenders every page, so the rule is simply: nothing important only after a click or a script.
- llms.txt: Google says it "will neither harm nor help"; no other major engine says it reads the file, and in a May 2026 study of 137,210 sites, 97% of llms.txt files got no requests at all. It stays a 15 minute extra, done last (§4.5).

### 4.2 Entity facts and the bio

One set of facts, used word for word on the site, in JSON-LD, in llms.txt and on every profile.

| Fact | Exact text |
|---|---|
| Name | Rezaul Karim (the email stays rezkarim.pro@gmail.com) |
| Role | Brand & website designer |
| Headline | Brand & website designer for startups and B2B teams. |
| What he designs | Brand systems, websites and pitch decks, plus social and LinkedIn design. |
| Proof | Designed the investor deck used in Earworm's £200K pre-seed · Delineate (YC W25), past client · 300+ client reviews · SolVita brand and website |
| Works with | US and UK teams, remote |
| Education | Industrial & Production Engineering, Rajshahi University of Engineering & Technology (RUET), 2016 to 2021 |
| Awards | BASIS Innovative Project Award (2020) · Winner, National Hackathon on Frontier Technologies (2020) |
| Booking | Book free strategy call, https://cal.com/rezkarim/deck-call |
| Location | Left out. The site says "Remote" only, with no city or country (Rez, 22 Oct, [10-confirmations.md](10-confirmations.md) row 50). RUET above is the university's name and stays |
| Never | "raised", founder, CEO, owner, "my agency", "my studio", "we" for a studio, Fiverr, $500K, Taste Labs in any form (row 61), a city, Client or Concept labels, years on cases (row 81) |

The bio for AI engines and structured data (third person, so it can be quoted as is):

> Rezaul Karim is a brand and website designer for startups and B2B teams. He designs brand systems, websites and pitch decks, plus social and LinkedIn design, and works remotely with US and UK teams. He designed the investor deck used in Earworm's £200K pre-seed, and his past clients include Delineate (YC W25).

The same in first person, for About and the opening of LinkedIn's About section:

> I'm a brand and website designer for startups and B2B teams. I design brand systems, websites and pitch decks, plus social and LinkedIn design, and work remotely with US and UK teams. I designed the investor deck used in Earworm's £200K pre-seed.

### 4.3 Structured data

JSON-LD in a native `<script type="application/ld+json">`, with every `<` in the JSON replaced by its Unicode escape (backslash u003c), as the Next.js JSON-LD guide shows. One Person node with a fixed `@id`, referenced everywhere. Everything must match what the page shows.

| Page type | Types | Key fields |
|---|---|---|
| Every page (root layout) | `WebSite`, `Person` | Site name "Rezaul Karim", url, `inLanguage` en; Person as below |
| `/about` | `ProfilePage` with `mainEntity` the Person | Required: `mainEntity` and its `name`. Recommended: `dateCreated`, `dateModified`, and on the Person `image`, `sameAs`, `description` |
| `/work` | `CollectionPage`, `BreadcrumbList` | `hasPart` lists each case URL |
| Case pages | `CreativeWork`, `BreadcrumbList` (Home, Work, case), `ImageObject` per gallery image | name, description, image (cover and gallery), `creator` the Person, `genre` (Investor deck, Brand identity, Website), `about` the client only when the client is confirmed. No `dateCreated` and no Client or Concept wording, since the page shows neither (row 81). Never name a brand as the client when the work is unofficial (Nike Mind says "Not affiliated with Nike"). Each `ImageObject` has `contentUrl` and `creator` (the Person), which Google Images uses for credit; no `license` or `copyrightNotice`, since client work may belong to the client |
| Service pages | `Service`, `BreadcrumbList` | `serviceType`, `provider` the Person, `areaServed` Worldwide, description. No prices |
| `/career` | `WebPage` about the Person, `BreadcrumbList` | |
| `/contact` | `ContactPage`, `FAQPage`, `BreadcrumbList` | The 3 visible questions and answers, word for word |
| `/free` (once live) | `CollectionPage` | Each template as `CreativeWork` with `isAccessibleForFree` and its Gumroad URL |
| Noindex pages, 404 | None | |

Google retired the FAQ rich result for every site in May 2026, and Breadcrumb rich results now show on desktop only. FAQPage stays on Contact anyway: it costs nothing, matches the visible FAQ, and other engines still parse it. Google shows no rich result for Person on its own; Person counts through ProfilePage and the case pages.

The site wide graph (values for launch):

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://rezkarim.com/#website",
      "url": "https://rezkarim.com/",
      "name": "Rezaul Karim",
      "inLanguage": "en",
      "publisher": { "@id": "https://rezkarim.com/#person" }
    },
    {
      "@type": "Person",
      "@id": "https://rezkarim.com/#person",
      "name": "Rezaul Karim",
      "url": "https://rezkarim.com/",
      "image": "https://rezkarim.com/images/rez/headshot.jpg",
      "jobTitle": "Brand & website designer",
      "description": "Rezaul Karim is a brand and website designer for startups and B2B teams. He designs brand systems, websites and pitch decks, plus social and LinkedIn design, and works remotely with US and UK teams. He designed the investor deck used in Earworm's £200K pre-seed, and his past clients include Delineate (YC W25).",
      "knowsAbout": ["Brand identity design", "Logo design", "Website design", "UI/UX design", "Framer", "Pitch deck design", "Social media design", "LinkedIn profile design"],
      "alumniOf": { "@type": "CollegeOrUniversity", "name": "Rajshahi University of Engineering & Technology" },
      "award": ["BASIS Innovative Project Award (2020)", "Winner, National Hackathon on Frontier Technologies (2020)"],
      "sameAs": [
        "https://www.linkedin.com/in/rezbloom",
        "https://www.behance.net/rezbloom",
        "https://dribbble.com/RezBloom",
        "https://www.instagram.com/rezbloom"
      ]
    }
  ]
}
```

A case page (Earworm):

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CreativeWork",
      "@id": "https://rezkarim.com/work/earworm#work",
      "name": "Earworm investor deck",
      "description": "Designed the investor deck used in Earworm's £200K pre-seed. One clear investment story and a visual system for a Bristol video podcast agency.",
      "url": "https://rezkarim.com/work/earworm",
      "image": ["https://rezkarim.com/og/work-earworm.jpg"],
      "creator": { "@id": "https://rezkarim.com/#person" },
      "genre": "Investor deck",
      "about": { "@type": "Organization", "name": "Earworm" },
      "isPartOf": { "@id": "https://rezkarim.com/#website" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rezkarim.com/" },
        { "@type": "ListItem", "position": 2, "name": "Work", "item": "https://rezkarim.com/work" },
        { "@type": "ListItem", "position": 3, "name": "Earworm investor deck" }
      ]
    }
  ]
}
```

No Taste Labs, DashBloom or employer nodes in the graph, and no `worksFor`: DashBloom shows only as "Studio: DashBloom" on cases and as a past employer in About (Product Designer, Jan 2024 to Sep 2026, row 78; no role is current), and the agency gets its own name later. Validate with the Schema Markup Validator and Google's Rich Results Test (both free, no sign in).

### 4.4 Answer first copy and FAQs

| Page | The question it answers first | Where the answer sits | FAQ |
|---|---|---|---|
| Home | Who is Rezaul Karim and what does he design? | The headline and the line under it, then the proof card | No |
| Service pages | What do I get, and who is it for? | The lead line, then "What I design" | Later, once facts like turnaround are confirmed |
| Case pages | What was it, what did he do, what came of it? | Outcome line, the My role list, Proof | No |
| About | Who is he, what did he study, what has he won? | The 3 bio lines and the facts list | No |
| Career | What has he done, by track? | Highlights and roles | No |
| Contact | How do I start, and what does it cost? | Lead line and the FAQ | FAQPage |
| Free | What is free, and how do I get it? | Lead and the two cards | No |

Rules for every indexable page:
1. The first sentence answers the page's main question in plain words. No teaser lines before it.
2. Facts are text in the server HTML: never only in an image, never only after a click, never loaded by a script. FAQ answers stay in the HTML when the "+" row is closed.
3. One fact per sentence, numbers as digits, the same names everywhere (Rezaul Karim, Earworm, Delineate (YC W25), SolVita).
4. Every case states the client where named, its scope, and its role or "Studio: DashBloom" in the My role list, an HTML description list, as today. No Client or Concept label and no year (row 81).
5. FAQ answers say the answer in the first sentence and add one detail after it. Questions read the way people ask them.

### 4.5 llms.txt

Served at `/llms.txt` by a static route built from the site's data, so it never drifts. Plain Markdown in the llmstxt.org format (the colon after each link is part of the format). Only indexable pages; never the noindex ones.

```md
# Rezaul Karim

> Brand and website designer for startups and B2B teams. Designs brand systems, websites and pitch decks, plus social and LinkedIn design. Works remotely with US and UK teams.

Rezaul Karim designed the investor deck used in Earworm's £200K pre-seed. Past clients include Delineate (YC W25). 300+ client reviews. Book a free 20 minute strategy call at https://cal.com/rezkarim/deck-call.

## Work

- [Earworm investor deck](https://rezkarim.com/work/earworm): Designed the investor deck used in Earworm's £200K pre-seed.
- [Real estate website](https://rezkarim.com/work/real-estate-website): Website UI and UX.
- [SolVita](https://rezkarim.com/work/solvita): Brand identity and website, built in Framer.
- [Nike Mind](https://rezkarim.com/work/nike-mind): Unofficial investor deck, not affiliated with Nike.
- [SyncGrid](https://rezkarim.com/work/syncgrid): Brand identity for an HR SaaS platform.
- [CargoShift](https://rezkarim.com/work/cargoshift): Logistics brand identity.
- [Pulse](https://rezkarim.com/work/pulse): eSIM brand identity.

## Services

- [Brand identity](https://rezkarim.com/brand): Logo systems, brand guidelines and brand assets.
- [Web & UI/UX](https://rezkarim.com/product): Websites, landing pages, apps and Framer builds.
- [Pitch decks](https://rezkarim.com/decks): Investor decks, sales decks, company profiles and documents.
- [Social](https://rezkarim.com/social): Social posts, carousels and ad creatives.
- [LinkedIn](https://rezkarim.com/linkedin): Profile photo, banner and Featured section.

## About

- [About](https://rezkarim.com/about): Background, education and awards.
- [Career](https://rezkarim.com/career): Roles and highlights by track.
- [Contact](https://rezkarim.com/contact): Book a call or send a message.

## Optional

- [Privacy](https://rezkarim.com/privacy)
```

New cases join the Work list automatically. `/free` joins once it is indexed. No `llms-full.txt` and no Markdown copies of pages for now: no engine has documented using them, and they would be a second copy of every page to keep right. If a major engine later says it reads them, the route can add them from the same data.

### 4.6 AI crawler policy

Decided: allow every AI crawler, training included (Rez, 22 Oct, row 59). The site exists to make Rez known and quoted; nothing on it is private, and the case images are already public on Behance. Blocking training bots would mostly remove him from what models know about designers. The block group stays on record only (§3.5).

| Crawler (robots.txt token) | Company | What it does | Obeys robots.txt | At launch |
|---|---|---|---|---|
| Googlebot | Google | Search, including AI Overviews and AI Mode | Yes | Allow |
| Google-Extended | Google | A token only, not a crawler: Gemini training and grounding. Blocking it does not affect Search, AI Overviews or AI Mode | Yes | Allow |
| Bingbot | Microsoft | Bing, and through it Copilot (no separate Copilot crawler) | Yes | Allow |
| OAI-SearchBot | OpenAI | ChatGPT search index | Yes | Allow |
| ChatGPT-User | OpenAI | Fetches a page when a ChatGPT user asks | May not | Allow |
| GPTBot | OpenAI | Training | Yes | Allow (block option) |
| Claude-SearchBot | Anthropic | Claude search | Yes | Allow |
| Claude-User | Anthropic | Fetches when a Claude user asks | Yes | Allow |
| ClaudeBot | Anthropic | Training | Yes | Allow (block option) |
| PerplexityBot | Perplexity | Perplexity's search index, not training | Yes | Allow |
| Perplexity-User | Perplexity | Fetches when a user asks | Generally not | Allow |
| Applebot | Apple | Siri, Spotlight and Safari search | Yes | Allow |
| Applebot-Extended | Apple | A token only: Apple's model training | Yes | Allow (block option) |
| DuckAssistBot | DuckDuckGo | Live AI answers, not training | Yes | Allow |
| CCBot | Common Crawl | Open crawl that many model makers train on | Yes | Allow (block option) |
| meta-externalagent | Meta | AI training and indexing (meta-webindexer serves Meta AI search) | Yes | Allow (block option) |
| Amazonbot | Amazon | Alexa and Amazon AI, may train | Yes | Allow |
| Bytespider | ByteDance | Training; compliance disputed | Disputed | Allow (block option) |

Cloudflare settings that must match the policy (Rez, on the rezkarim.com zone, all free):
- AI bot policies (Security, Settings, "Configure AI bot policies"): since 15 Sep 2026 new domains block training and agent bots only on pages that show ads. This site shows no ads, but check that nothing is blocked.
- Never block the "Training" category in Cloudflare. Cloudflare's own docs say a training block also hits crawlers with mixed purposes, Googlebot, Bingbot and Applebot among them. If Rez ever blocks training, it happens in robots.txt only (§3.5).
- AI Crawl Control: every crawler on Allow.
- Managed robots.txt: off. When on, Cloudflare adds "Content-signal: search=yes, ai-train=no" and Disallow lines for GPTBot, ClaudeBot, Google-Extended, CCBot and others, which contradicts this policy.
- Bot Fight Mode: off. On the free plan no rule can skip it, and its docs do not promise that Googlebot and Bingbot get through. If it is ever turned on, check Security Events for those two.
- After launch, open `https://rezkarim.com/robots.txt` once and check it shows only the file in §3.5.

### 4.7 Profiles that must match

| Profile | Set this |
|---|---|
| LinkedIn (`/in/rezbloom`) | Name Rezaul Karim. Headline "Brand & website designer for startups and B2B teams". Website button and Featured to rezkarim.com. About opens with the first person bio (§4.2) |
| Behance (`/rezbloom`) | Display name Rezaul Karim, occupation "Brand & website designer", website link. Fix at the source: the Earworm cover that says "funding raised" and the real estate board re-05 that carries a dental clinic's text |
| Dribbble (`/RezBloom`) | Name, the headline, website link |
| Instagram (`/rezbloom`) | Name, the headline, link |
| Cal.com (`/rezkarim`) | Name, the event title "Strategy call" (keep the link), link back to the site |
| Gumroad (when the templates go live) | Seller name Rezaul Karim, link to rezkarim.com |
| X, Facebook, email signature, the 3 CVs | Link to rezkarim.com (spec §11) |

Same name, same role line, same proof lines word for word, the same headshot, and a link back to rezkarim.com on each. Every profile in the footer's "Elsewhere" list is also in the Person `sameAs`.

## 5. Speed

### 5.1 Today's numbers and the speed log

Measured 22 Oct 2026 on the live test site with Lighthouse 12 (mobile: emulated mid-range phone, 4x slower CPU, slow 4G), one run each. Google's free PageSpeed API was over its daily quota, so the CLI ran locally instead.

| Date | Page | Score | LCP | FCP | TBT | CLS | Weight | Biggest items |
|---|---|---|---|---|---|---|---|---|
| 22 Oct | Home, mobile | 76 | 5.8s | 1.8s | 140ms | 0.008 | 2,984 KB | audio 2,286 KB, fonts 301 KB, JS 255 KB, images 112 KB |
| 22 Oct | Work, mobile | 76 | 6.4s | 1.8s | 120ms | 0 | 3,319 KB | audio 2,479 KB, images 189 KB; LCP is a lazy loaded cover |
| 22 Oct | Earworm case, mobile | 77 | 5.8s | 1.8s | 120ms | 0 | 3,075 KB | audio, fonts 301 KB, images 200 KB; LCP is the hero image |
| 22 Oct | Contact, mobile | 64 | 9.7s | 1.9s | 340ms | 0.042 | 4,932 KB | Cal.com 2,061 KB third party, JS 1,656 KB, fonts 657 KB |
| 22 Oct | Home, desktop | 93 | 1.7s | 0.8s | 0ms | 0.002 | 3,288 KB | |
| 28 Oct | Home, mobile (chat E: local Worker `cf:preview`, 3 runs, median; others building at the same time) | 82 | 4.8s | 0.9s | 102ms | 0.008 | 626 KB | JS 249 KB, fonts 156 KB, images 126 KB, CSS 17 KB, audio 0, third party 0. LCP is the h1 |
| 28 Oct | Earworm case, mobile (same) | 82 | 4.8s | 0.9s | 90ms | 0 | 688 KB | JS 257 KB, images 187 KB, fonts 156 KB. LCP is the hero image |
| 28 Oct | Brand, mobile (same) | 84 | 4.5s | 1.0s | 73ms | 0.008 | 603 KB | JS 257 KB, fonts 156 KB, images 89 KB |
| 28 Oct | Hire hub, mobile (same) | 84 | 4.6s | 1.0s | 89ms | 0.004 | 650 KB | JS 249 KB, fonts 156 KB, images 152 KB |
| 28 Oct | Hire role, mobile (same) | 85 | 4.3s | 1.0s | 74ms | 0.004 | 590 KB | LCP is the h1 |
| 28 Oct | Industry, mobile (same) | 84 | 4.4s | 1.0s | 86ms | 0.008 | 594 KB | |
| 28 Oct | Deliverable, mobile (same) | 85 | 4.3s | 1.0s | 84ms | 0.008 | 598 KB | |
| 28 Oct | Guides index, mobile (same) | 87 | 4.0s | 1.0s | 116ms | 0.008 | 516 KB | LCP is the answer box |
| 28 Oct | Guide, mobile (same) | 85 | 4.3s | 1.0s | 82ms | 0 | 553 KB | |
| 28 Oct | Home, mobile, devtools throttling (real 4x CPU and slow 4G instead of the simulation) | 88 | 2.55s | 2.55s | 270ms | 0.008 | same | LCP paints with the first paint. The simulated LCP above adds the JavaScript run time on a fast local machine; this one shows when the h1 really paints |
| 28 Oct | Hire role, mobile, devtools throttling | 91 | 2.29s | 2.29s | 224ms | 0.005 | same | |
| 28 Oct | Guide, mobile, devtools throttling | 92 | 2.24s | 2.24s | 212ms | 0 | same | |

What changed on 28 Oct (chat E): audio downloads only after a click (0 KB before, was 2.3 to 2.5 MB), the first view rises in with CSS instead of waiting for JavaScript, the entrances start at opacity 0.01 so the hero counts as LCP (at 0 Chrome skipped it and the cookie banner, shown after 1.4 s, became LCP), Lenis loads after idle on mice only, Newsreader italic is gone (chat F). Left over budget: JavaScript about 250 KB (budget 180), fonts 156 KB in 2 files (budget 120; the Newsreader optical size trial in §5.5 needs Rez's look check), CSS 17 KB (budget 15), Home LCP 2.55 s with real throttling (target 2.0 s), TBT 210 to 270 ms with real throttling. Contact and the LinkedIn invite are left to chats B and D, then R.

Other facts from the same day:
- Accessibility 100 everywhere except Work (98). Best practices 100, except Contact (79, Cal.com's third party cookie). SEO 58 everywhere, as expected while the test site is noindex.
- Home ships 9 JavaScript files, about 251 KB compressed: React DOM 72 KB, the Next.js runtime 49 KB, Motion 57 KB, the app about 70 KB.
- Three fonts are preloaded on every page, 306 KB: Newsreader italic 147 KB (never used), Newsreader 132 KB, Plus Jakarta Sans 27 KB.
- HTML is 17 KB compressed. CSS is 12 KB.
- `/_next/static`, `/images` and `/audio` are sent with `max-age=0`; optimized images (`/_next/image`) carry no cache header and are transformed again on every hit.
- The Worker bundle is 8.7 MB, 1.8 MB gzip. Cloudflare removed the compressed size limit on 4 Sep 2026; the limit is now 64 MiB uncompressed on every plan.

Each package adds rows here when it measures (date, page, numbers, what changed).

### 5.2 Budgets

Core Web Vitals, judged at the 75th percentile of real visits, with the lab numbers used before launch:

| Metric | Field goal (real visitors) | Lab budget (Lighthouse mobile) |
|---|---|---|
| LCP | under 2.5s | 2.5s or less on every public page, 2.0s on Home |
| INP | under 200ms | TBT 150ms or less as the lab stand in (Contact 200ms) |
| CLS | under 0.1 | 0.05 or less |
| Score | | 90 or more on mobile, 98 or more on desktop. 95 stays the stretch goal from build notes §4 |

Weight, first view on a phone, before any click:

| Item | Budget | Home today |
|---|---|---|
| HTML | 25 KB | 17 KB |
| CSS | 15 KB | 12 KB |
| JavaScript | 180 KB (framework about 125, app 55 or less) | 251 KB |
| Fonts | 120 KB, 2 files preloaded | 306 KB, 3 files |
| Images | 200 KB, the LCP image 120 KB or less | 112 KB |
| Audio before a click | 0 | 2,286 KB |
| Third party before a click | Only the analytics beacon (10 KB) | 10 KB (about 2 MB on Contact) |
| Total | 600 KB on Home, 700 KB on Work and cases | 2,984 KB |

Why 180 KB of JavaScript and not the 100 KB in build notes §4: React and the Next.js runtime alone come to about 120 KB compressed in this build, so 100 KB is out of reach without leaving Next.js. 180 KB keeps the site's own code under 55 KB.

Worker limits to watch on the free plan: 100,000 requests a day (every page view, prefetch, form post and `/_next/image` hit counts; static files do not), and 10 ms of CPU per request (Stats, forms and image transforms are the heaviest; check the Worker's metrics for error 1102 after each deploy).

### 5.3 Fixes, biggest first

| # | Fix | Saves | Package (08 §6) |
|---|---|---|---|
| 1 | Sound: no download before the first click, tap or key; 60 second loops at about 64 kbps (§5.7) | About 2.3 MB on every page view, and the network race with the page's own files | P7 |
| 2 | Contact: Cal.com loads on a click on its placeholder (§5.8, decision 28) | LCP from 9.7s toward 2.5s, about 2 MB and 300ms of blocking off the first view | P2 |
| 3 | First view cards visible without waiting for JavaScript (§5.6) | 2 to 3 seconds of mobile LCP on every page | P7 |
| 4 | Fonts: drop Newsreader italic, test without optical sizes (§5.5) | 147 KB for sure, up to about 90 KB more | F (italic), P7 (optical size trial) |
| 5 | Motion loaded lazily (§5.6) | 35 to 45 KB of JavaScript | F sets it up, each package converts its own files |
| 6 | Images as static WebP files with hashed names (§5.4); first two covers on Work and the case hero load first | LCP on image pages, repeat visits, Worker requests | I, P3, P5 |
| 7 | `public/_headers` with long cache rules (§5.9) | Repeat visits load from cache instead of asking again | P7 |
| 8 | Lenis only on desktop, loaded after idle | About 5 KB on phones | P7 |
| 9 | Inline CSS trial (`experimental.inlineCss`), kept only if it builds on OpenNext and the numbers improve | About 100ms of render blocking | P7 |
| 10 | Backdrop: no drift animation on phones or with reduced motion; try no card blur on phones (needs Rez's look check) | Smoother scrolling on mid-range phones | P7 |

### 5.4 Images

- Today every image goes through `/_next/image`, which runs the Worker and Cloudflare's Images binding on every hit, with no browser cache. The free plan allows 5,000 unique transformations a month (the site already uses about 777 image and width pairs), and new transformations fail past that.
- Plan: images become plain static files. Static files skip the Worker, are free and unlimited, and can be cached for a year.
- Masters (1400px wide JPEG or PNG) move to `site/assets/images/`, outside `public/`.
- `scripts/images.mjs` (sharp) writes `public/images/<path>/<name>.<hash>.<width>.webp` at widths 480, 750, 1080 and 1400 (64, 128 and 240 for thumbs and the avatar, never wider than the master), quality about 72, plus a 16px blur placeholder and the size into `src/data/images.json`.
- A custom `next/image` loader (`images.loader: "custom"` with `deviceSizes` 480, 750, 1080, 1400 and `imageSizes` 64, 128, 240) turns `img(key).src` (the hashed base path) into the right file, so no component changes. WebP only keeps it simple; AVIF can follow later through `getImageProps` and `<picture>` if the savings justify the work.
- Only the LCP image (case hero, About portrait, the first two covers on Work) gets `loading="eager"` and `fetchPriority="high"`; everything else stays lazy.
- `sizes`: case images `(max-width: 639px) 100vw, 700px`; grid covers `(max-width: 639px) 92vw, 340px`; adjust per frame.
- `backdrop.jpg` and `rez/headshot.jpg` stay as plain files too, since CSS and the structured data point at them directly.
- New case images go through the same script (P5, P6).

### 5.5 Fonts

- Keep `next/font` (self hosted at build, `display: swap`, fallback metrics so text does not jump).
- Newsreader: normal style only. Italic is never used and costs 147 KB on every page.
- Newsreader's optical size axis (`axes: ["opsz"]`): compare titles at 60, 36 and 22px with and without it. Keep it only if Rez sees the difference; without it the file shrinks a lot.
- If the optical sizes must stay and the file is still heavy: a static Newsreader cut (optical size 72, weight 400) made with fonttools (free, Python is installed) and loaded with `next/font/local`.
- Plus Jakarta Sans: latin subset, 27 KB, fine.
- Preload only the two fonts the first view uses.

### 5.6 Motion, reveals and the backdrop

- Motion: `LazyMotion` with `m` components and the features loaded after hydration. The dock, filter and track switch bubbles move with CSS transforms instead of `layoutId` where the look stays the same. Goal: 20 KB or less of Motion in the first load.
- Reveals: today `[data-reveal]` cards start invisible and wait for the reveal script, so mobile LCP waits for JavaScript. The first two cards of every page render visible from the server, with the CSS entrance (`.rise`) only; scroll reveals stay for the rest. On phones the reveal animates opacity and position only, not blur.
- Option for Rez (look check, 08 §12 item 11): scroll driven CSS reveals (`animation-timeline: view()`), which need no script at all and would let the reveal script go.
- Lenis: imported only on fine pointers, after idle; off with reduced motion (as now).
- Backdrop: the 48 second drift stops on phones and with reduced motion. Trial: no `backdrop-filter` on cards on phones, since the backdrop is already blurred; keep it only if Rez cannot tell.
- Reduced motion keeps working everywhere (`MotionConfig reducedMotion="user"` as now).

### 5.7 Sound

- Today: three MP3 loops, 120 seconds each, 48 kHz stereo at 153 kbps, 2.3 to 2.5 MB each. With sound on (the default), the loop downloads 1.5 seconds after every page load, before any click, then decodes fully into about 46 MB of memory.
- Default: on, as 09 §1 and the 21 Oct call say (08 §12 item 4). The Design system note says off; 10-confirmations.md settles it if Rez answers.
- Either way: download only after the first click, tap or key, never with Save Data on or on 2G or 3G connections.
- Re-encode with ffmpeg (free; on Rez's PC, and needed on the build PC, [12-handoff.md](12-handoff.md)): 60 second loops at about 64 kbps stereo, 44.1 kHz, about 0.5 MB each. Rez listens before and after; quality is his call.
- Hashed file names, cached for a year.
- Note: `/audio` answers range requests with the whole file. That is fine for the current fetch and decode, but an `<audio>` element on iPhones would need partial responses, so keep the current approach.

### 5.8 Cal.com

- The embed itself is small (`embed.js`, about 24 KB compressed); the booking iframe is the weight, about 1.35 MB compressed at first load.
- Modal: keep loading on click. On hover, focus or touch of any "Book free strategy call" button, add `preconnect` to app.cal.com and run `Cal("preload", { calLink })` (documented by Cal.com) so the modal opens almost at once.
- Inline on Contact (decision 28, 27 Oct, [15-v4a-plan/for-rez.md](15-v4a-plan/for-rez.md)): a click to load placeholder in the same skeleton. Nothing loads from cal.com until the visitor clicks, which also keeps its cookies away until then. The fallback stays.

### 5.9 Caching, Worker limits and Cloudflare settings

How this host serves the site: every page and prefetch runs the Worker, which answers prerendered pages from its build cache; real files (`/_next/static` and everything in `public/`) skip the Worker. `_headers` rules apply to those files only, and `next.config.ts` headers apply only to Worker responses.

`site/public/_headers`:

```txt
/_next/static/*
  Cache-Control: public, max-age=31536000, immutable
/images/*
  Cache-Control: public, max-age=31536000, immutable
/audio/*
  Cache-Control: public, max-age=31536000, immutable
/og/*
  Cache-Control: public, max-age=86400
/flags/*
  Cache-Control: public, max-age=2592000
```

Use `immutable` on `/images` and `/audio` only once the file names carry a content hash (§5.4, §5.7); until then use `public, max-age=604800`. Leave HTML as Next sends it.

Keep as they are:
- Cache Components stays off on the Cloudflare build. OpenNext's fix for the hang on Next 16.4 is still open (PR 1318 and issues 1450, 1225).
- `run_worker_first` stays off, so static files never cost a Worker request.

Cloudflare dashboard for rezkarim.com (Rez, free plan):

| Setting | Value | Where |
|---|---|---|
| Always Use HTTPS | On | SSL/TLS, Edge Certificates |
| HTTP/3 | On | Speed, Settings |
| Compression | Leave the default (Zstandard and gzip on the free plan) | Nothing to do |
| Rocket Loader | Off | Speed, Settings |
| Crawler Hints | On | Caching, Configuration |
| Web Analytics | On. The beacon already loads on the test domain in a real browser; if it does not appear on rezkarim.com, P7 adds the manual snippet | Analytics, Web Analytics |
| Bot Fight Mode, AI bot policies, AI Crawl Control, managed robots.txt | Per §4.6 (Bot Fight Mode off, nothing blocked, managed robots.txt off) | Security |
| Early Hints, Speed Brain, Workers Cache | Leave off. The site sends no Link headers yet; Speed Brain skips Worker routes; Workers Cache bills every request and the OpenNext team says it cannot replace its cache | Speed |

### 5.10 Measuring routine

| When | Who | How |
|---|---|---|
| Before every deploy | The chat that changed things | Lighthouse 12 mobile, 3 runs, median, on the pages it touched, against `npm run cf:preview`. Local numbers miss real network delay, so use them to catch regressions |
| After every deploy | Claude or Rez | PageSpeed Insights (pagespeed.web.dev, free) on the pages below, mobile and desktop. Add a row to §5.1 |
| Weekly for the first month after launch, then monthly | Rez, 2 minutes | Cloudflare Web Analytics, Core Web Vitals: LCP, INP and CLS at the 75th percentile per page |
| Monthly after launch | Claude | A full Lighthouse run, the Worker size from `npx wrangler deploy --dry-run --outdir <scratch folder>`, Worker errors (1102, 1027) in the dashboard |
| When there is enough traffic | Rez | Search Console, Core Web Vitals report |

Thresholds have not changed in 2025 or 2026 (LCP 2.5s, INP 200ms, CLS 0.1, 75th percentile). One thing to watch: Chrome's field data now measures client side page changes as an experiment (Oct 2026, planned to count from about May 2027). This site changes pages on the client, so keep page transitions light and the dock's moves on CSS.

Pages and lab targets (mobile):

| Page | LCP | TBT | CLS | Score |
|---|---|---|---|---|
| Home | 2.0s | 150ms | 0.05 | 90 |
| Work | 2.5s | 150ms | 0.05 | 90 |
| Earworm case (image hero) | 2.5s | 150ms | 0.05 | 90 |
| Pulse case (longest page) | 2.5s | 150ms | 0.05 | 90 |
| Brand (service template) | 2.5s | 150ms | 0.05 | 90 |
| Contact | 2.5s | 200ms | 0.05 | 85 |
| LinkedIn invite (campaign traffic) | 2.5s | 150ms | 0.05 | 90 |
| Home, desktop | 1.2s | 50ms | 0.05 | 98 |

## 6. Decisions for Rez

All answered on 22 Oct in [10-confirmations.md](10-confirmations.md), which wins over this file: sound on by default (row 51), both LinkedIn price sets kept (35), AI crawlers allowed, training included (59), no location in the bio (50), no /stats line in robots.txt (58), share images as described, without tags or years (56, 81), look trials and the click to load calendar behind a switch (53, 54), /free noindex until a template is live (57), no Taste Labs anywhere on the site (61), and the offer named "Monthly design support" (49).

## 7. Sources

Read 22 Oct 2026.

- Next.js 16.4 docs, installed with the site (`site/node_modules/next/dist/docs/`): metadata and share images, `generateMetadata` (merging), sitemap, robots, JSON-LD, `next/image` (`preload` replaces `priority` in 16), `next/font`, `inlineCss`, concurrent dev and build.
- OpenNext Cloudflare: [caching](https://opennext.js.org/cloudflare/caching), [images](https://opennext.js.org/cloudflare/howtos/image), [static assets](https://opennext.js.org/cloudflare/howtos/assets), [PR 1318](https://github.com/opennextjs/opennextjs-cloudflare/pull/1318), [issue 1376 (next/og size)](https://github.com/opennextjs/opennextjs-cloudflare/issues/1376).
- Cloudflare: [Workers limits](https://developers.cloudflare.com/workers/platform/limits/), [64 MiB Worker size, 4 Sep 2026](https://developers.cloudflare.com/changelog/post/2026-09-04-increased-worker-size-limit/), [KV limits](https://developers.cloudflare.com/kv/platform/limits/), [D1 and Workers pricing](https://developers.cloudflare.com/workers/platform/pricing/), [static asset headers](https://developers.cloudflare.com/workers/static-assets/headers/), [Images pricing](https://developers.cloudflare.com/images/pricing/), [compression](https://developers.cloudflare.com/speed/optimization/content/compression/), [Speed Brain](https://developers.cloudflare.com/speed/optimization/content/speed-brain/), [Web Analytics](https://developers.cloudflare.com/web-analytics/get-started/), [Core Web Vitals in Web Analytics](https://developers.cloudflare.com/web-analytics/data-metrics/core-web-vitals/).
- Cal.com: [embed instructions](https://cal.com/docs/core-features/embed/embed-instructions).
- Google Search Central: [AI features and your website](https://developers.google.com/search/docs/appearance/ai-features), [AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide), [Search generative AI setting](https://support.google.com/webmasters/answer/16908024), [ProfilePage](https://developers.google.com/search/docs/appearance/structured-data/profile-page), [Breadcrumb](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb), [image metadata](https://developers.google.com/search/docs/appearance/structured-data/image-license-metadata), [site names](https://developers.google.com/search/docs/appearance/site-names), [title links](https://developers.google.com/search/docs/appearance/title-link), [snippets](https://developers.google.com/search/docs/appearance/snippet), [search updates (FAQ retired)](https://developers.google.com/search/updates), [Core Web Vitals](https://developers.google.com/search/docs/appearance/core-web-vitals), [Google crawlers](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers).
- web.dev: [Core Web Vitals thresholds](https://web.dev/articles/defining-core-web-vitals-thresholds), [experimental soft navigation metrics](https://web.dev/blog/crux-experimental-soft-navs).
- Crawlers: [OpenAI](https://developers.openai.com/api/docs/bots), [Anthropic](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler), [Perplexity](https://docs.perplexity.ai/guides/bots), [Apple](https://support.apple.com/en-us/119829), [Common Crawl](https://commoncrawl.org/ccbot), [Meta](https://developers.facebook.com/docs/sharing/webmasters/web-crawlers), [Amazon](https://developer.amazon.com/amazonbot), [DuckDuckGo](https://duckduckgo.com/duckduckgo-help-pages/results/duckassistbot).
- Cloudflare bots: [AI bot policies](https://developers.cloudflare.com/bots/additional-configurations/block-ai-bots/), [managed robots.txt](https://developers.cloudflare.com/bots/additional-configurations/managed-robots-txt/), [AI Crawl Control](https://developers.cloudflare.com/ai-crawl-control/features/manage-ai-crawlers/), [Bot Fight Mode](https://developers.cloudflare.com/bots/get-started/bot-fight-mode/), [Crawler Hints](https://developers.cloudflare.com/cache/advanced-configuration/crawler-hints/).
- Bing: [import from Search Console](https://blogs.bing.com/webmaster/september-2019/Import-sites-from-Search-Console-to-Bing-Webmaster-Tools), [AI Performance report](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview), [IndexNow](https://www.indexnow.org/faq).
- llms.txt: [the proposal](https://llmstxt.org/), [Ahrefs study, May 2026](https://ahrefs.com/blog/llmstxt-study/).
- GEO research: [Princeton GEO paper, KDD 2024](https://arxiv.org/abs/2311.09735), [2026 survey of 45 studies](https://arxiv.org/abs/2607.14035), [Ahrefs on schema and AI citations](https://ahrefs.com/blog/schema-ai-citations/), [Ahrefs on rankings and AI citations](https://ahrefs.com/blog/search-rankings-ai-citations/).
- Share cards: [Open Graph](https://ogp.me/), [LinkedIn share preview](https://www.linkedin.com/help/linkedin/answer/a521928), [Meta image sizes](https://developers.facebook.com/docs/sharing/webmasters/images/).
- Lighthouse 12 runs on the live test site and curl checks of its headers, 22 Oct 2026 (raw files in the planning session's scratchpad).
