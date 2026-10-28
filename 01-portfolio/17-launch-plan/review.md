# Chat V · Final live check

[README](README.md) · Draft · 28 Oct 2026 · Sonnet 5.5, high. Starts after every wave 1 report says done and Rez's redeploy of chat Z's and chat P's code changes.

## Scope

Check the whole launch on the live site in one pass, fix what fits, and end with Rez's "You check" table.

## Read first

Every report in `01-portfolio/17-launch-plan/reports/`; `site/docs/runbooks/deploy.md` "After every deploy"; `01-portfolio/15-v4a-plan/e2e.md`.

## Owns

Any file, fixes only. Code fixes need Rez's redeploy: batch them into one.

## Checks on https://rezkarim.com

| # | Check | Expected |
|---|---|---|
| 1 | `curl -I` on Home, a case, /stats, /linkedin/invite | 200; HSTS, nosniff, Referrer-Policy, Permissions-Policy, COOP, X-Frame-Options; the enforced CSP; `index, follow` on public pages, noindex on /stats, /work/private, /free, /work-with-me, /agencies, /accessibility |
| 2 | No CSP violation | 0 on Home, a case, /contact with the calendar open, /social lightbox (BrowserOS listener) |
| 3 | Cookies and counting | Banner, Allow and Only essential, `rk_vid` only after Allow; a view shows on /stats (Rez signs in) |
| 4 | Contact form | A test message as Founder or team lands on /stats, and the lead alert reaches hello@rezkarim.com, then Rez's Gmail |
| 5 | Mail | A mail to hello@rezkarim.com reaches Gmail; SPF, DMARC and MX records read back with `nslookup` |
| 6 | Redirects | www.rezkarim.com and rezkarim.dashbloom.design answer 301 to https://rezkarim.com, same path |
| 7 | Search | robots.txt, sitemap.xml, llms.txt and the feed live; Search Console and Bing show the sitemap; Rich Results Test on Home, a case and a guide |
| 8 | AI crawlers | curl with GPTBot, ClaudeBot, PerplexityBot and Google-Extended user agents gets 200 |
| 9 | Analytics | Cloudflare Web Analytics shows visits |
| 10 | Speed | PageSpeed Insights mobile and desktop on Home, /work, Earworm, a guide; record against 07 §5.2 |
| 11 | Profiles | Each profile Rez OK'd links to rezkarim.com; `sameAs` in the live JSON-LD matches |
| 12 | Security | A wrong /stats password shows the error; junk to /api/track gets 400; the workers.dev address doesn't serve |

## Done when

Every row passes or the report says why; the report ends with a "You check" table (Worker CPU a day later, Search Console coverage in a week, the batch 2 publish date).
