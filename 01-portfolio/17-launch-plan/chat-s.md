# Chat S · Search and AI visibility

[README](README.md) · Draft · 28 Oct 2026 · Sonnet 5.5, high. Starts now; the live checks wait for wave 0's deploy.

## Scope

Make rezkarim.com measurable and findable by Google, Bing and AI answer engines. Dashboard and browser work only; no code.

## Read first

`01-portfolio/07-search-and-speed-plan.md` §3.8, §3.9, §4.6 and §5.10; `01-portfolio/15-v4a-plan/planning/seo-aeo-geo.md` §5 (measurement); `site/docs/seo.md`; `site/docs/runbooks/launch.md`; `01-portfolio/17-launch-plan/` reports of chat S's predecessor if any (the "Make site services work" session's `services-notes.md`).

## Owns

The Cloudflare dashboard settings for Web Analytics and bots on the rezkarim.com zone; Google Search Console; Bing Webmaster Tools; the IndexNow run. Not: DNS records other than the Search Console TXT, security rules, Email Routing (chat Z), any file in `site/`.

## Tasks, in order

1. **Cloudflare Web Analytics** for rezkarim.com (free, cookieless). Check whether the automatic setup works on the Worker's custom domain or needs the beacon; the CSP already allows `static.cloudflareinsights.com`. If a code change is needed, write it under Requests for chat Z.
2. **AI crawlers and bots** on the rezkarim.com zone, per row 59 (allowed, training included) and 07 §4.6: AI Crawl Control or "Block AI bots" off; Cloudflare's managed robots.txt off, so the site's own robots.txt is served; Bot Fight Mode off. Ask Rez before each save.
3. **Google Search Console**: a Domain property for rezkarim.com; add the TXT record in Cloudflare DNS (with Rez's OK); Rez clicks Verify. Then submit `https://rezkarim.com/sitemap.xml` and request indexing for Home, /work, /about, /hire and the Earworm case.
4. **Bing Webmaster Tools**: import from Search Console (Rez signs in); confirm the sitemap.
5. **IndexNow**, after the deploy: `npm run indexnow -- --dry-run`, show Rez the list, then `npm run indexnow` with his OK.
6. **Live checks**, after the deploy: robots.txt allows all with the sitemap line; sitemap lists every live page on rezkarim.com; llms.txt answers; JSON-LD on Home, a case, a guide and /about passes the Schema Markup Validator and the Rich Results Test (now possible, the site is public); a curl with GPTBot, ClaudeBot and PerplexityBot user agents gets 200; rezkarim.dashbloom.design answers 301 to rezkarim.com if wave 0 kept it as a redirect host.

## Done when

Web Analytics shows the first visits; Search Console and Bing are verified with the sitemap submitted; AI crawlers get 200; the live checks pass or the report says why.
