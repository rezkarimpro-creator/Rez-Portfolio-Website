# Chat G · Search and AI answers

[README](README.md) · Draft · 29 Oct 2026 · Opus 5.5, High. Wave 1. Rez's call: the full set across every engine, no new pages.

## Scope

Google, Bing and every AI assistant find rezkarim.com, understand who Rez is and what he does, and name him for the questions his clients ask: SEO (indexing and rich results), AEO (pages that answer questions plainly) and GEO (being named in AI answers). No new pages: batch 3 is skipped, and batch 2 goes live on 11 Nov only with Rez's OK.

## Read first

[README §3 and §4](README.md), `01-portfolio/07-search-and-speed-plan.md`, `01-portfolio/15-v4a-plan/planning/seo-aeo-geo.md`, `01-portfolio/17-launch-plan/reports/s.md` and `w2.md`, `site/docs/runbooks/publish-content.md`, `site/src/lib/seo/graph.ts`, `01-portfolio/00-facts.md`, `site/content/claims.ts`, `01-portfolio/17-launch-plan/marketing/profiles.md` (profile URLs).

## Owns

`site/content/**`, `site/src/lib/seo/`, `site/src/lib/content/`, `site/src/components/seo/`, `site/src/data/seo.ts`, the sitemap, robots, llms.txt and feed routes in `site/src/app/`, `site/scripts/indexnow.mjs`, search engine verification files in `site/public/`, `site/docs/runbooks/publish-content.md`, `01-portfolio/18-growth-plan/marketing/geo-baseline.md`.

Not: pages, templates, sections and data files (chat C), the root layout, providers and styles (chat K), `site.ts`, `next.config.ts`. A change there goes under Requests (to C for pages and templates).

## Contracts provided

- `faqPage()` stays as it is: chat C calls it for any FAQ block Rez picks.
- `sameAs` in `seo.ts` is the one list of Rez's profiles: LinkedIn, Behance, Dribbble, Instagram, then Contra.

## Tasks, in priority order

1. **Google** (Search Console in BrowserOS, Rez is signed in): the Pages report (indexed or not, and why), the sitemap status, the enhancement reports (breadcrumbs, FAQ, profile page). Ask Rez once, then request indexing for the key pages not yet indexed (services, cases, Hire, Industries, guides) within Google's daily cap.
2. **Bing** (Bing Webmaster): the sitemap shows success with 56 URLs (29 Oct). Check URL Inspection on the key pages, the IndexNow log, Site Scan, and AI Performance (how often Copilot cites the site). Bing's index also feeds DuckDuckGo, Yahoo, Ecosia, Qwant and ChatGPT search.
3. **Structured data**: the Rich Results Test and the Schema Markup Validator on Home, About, a client case, a concept case, a guide, a Hire role, an Industry page, a Deliverable, a service page and Contact. Fix errors and warnings in `src/lib/seo/`; keep `tests/json-ld.test.ts` green.
4. **Who Rez is**: `sameAs` adds Dribbble and Instagram now, and Contra when chat R reports its fix (URLs from `profiles.md`). Check that name, headline and site link match across the site, LinkedIn, Behance, Dribbble, Instagram, Contra and Himalayas, and list any mismatch for chat R. Person facts only from `00-facts.md`.
5. **Answers on live pages** (content only; each new line shown word for word for Rez's OK): a two sentence answer first opening where a Hire, Industry or Deliverable page lacks one; question shaped headings where natural; `dateModified` in every content page's JSON-LD; llms.txt lists every live page, the four deck cases included. FAQ blocks on the service pages come through chat C's quiz: if Rez picks them, write the questions and answers for C to place.
6. **Internal links**: from the built HTML, list pages with fewer than 3 internal links pointing at them, and check each case links to its service page and a related guide. Fix what lives in content files; send template or section fixes to C as Requests.
7. **AI answers baseline**: 8 questions a client would ask, written into `marketing/geo-baseline.md` (for example the best freelance pitch deck designer for a pre-seed startup, a brand identity designer for a SaaS startup, what a pitch deck designer costs, what goes in a pre-seed deck, a web designer for a real estate startup, and Rez's own name). Ask each in Perplexity, ChatGPT, Google (AI Overview or AI Mode), Copilot, Gemini, Claude and Brave's answer, in BrowserOS, only in accounts Rez is already signed into, never signing in. Use `grep` for his name and site and read only the sources list, to keep it light. Record per engine and question: is Rez named, which URL is cited, who is named instead. Date it, so a session can re-run it from the file on the first Monday of each month.
8. **Other engines** (P3): with curl, check that each crawler gets a 200 on Home and a case (Googlebot, Bingbot, OAI-SearchBot, GPTBot, ChatGPT-User, PerplexityBot, ClaudeBot, Claude-SearchBot, Applebot, YandexBot, CCBot, meta-externalagent, Amazonbot), and that Cloudflare's AI Crawl Control blocks none. After Rez's redeploy, one IndexNow send of the changed URLs (it reaches Bing, Yandex, Seznam, Naver and Yep). Optional, if Rez signs up: Yandex Webmaster and Naver Search Advisor, verified with a file in `public/`, sitemap submitted. Baidu: skip.
9. **Release flow**: `publish-content.md` lists, in order, how a page goes live (status, Rez's OK, redeploy, `npm run indexnow`, request indexing in Search Console), so batch 2 on 11 Nov is one short run.
10. Checks: `npm run check` (content gates and tests) and the validators again on the pages you changed; report what changed for which engine.

## Done when

Search Console and Bing show no unexplained gaps, or the report says why; structured data validates on all ten page types; sameAs is updated; the answer edits Rez OK'd are in; the AI baseline file exists with today's results; `npm run check` passes.

## Report

(filled by chat G)
