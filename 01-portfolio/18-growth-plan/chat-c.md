# Chat C · Conversion

[README](README.md) · Draft · 29 Oct 2026, revised the same day · Opus 5.5, High. Wave 1. Rez's call: audit first, he picks the fixes, then build ([README §5](README.md)).

## Scope

More of the visitors who arrive book a call, send a message or ask for the CV, and Rez can see which channel and page brings them. Visible changes only where Rez picked them.

## Read first

`01-portfolio/15-v4a-plan/planning/seo-aeo-geo.md` §5 and §6 (measurement, calls to action per page family), `site/docs/privacy-data.md`, `site/src/data/stats.ts`, `site/src/lib/db/`, `site/src/app/api/track/route.ts`, `site/src/lib/lead-source.ts`, `01-portfolio/08-build-reports/r.md` and `d.md`, `01-portfolio/00-facts.md`, `site/content/claims.ts`.

## Owns

`site/src/app/**/page.tsx` and `site/src/app/api/track/`; the components in `sections/`, `work/`, `forms/`, `booking/`, `stats/`, `templates/`, `layout/` (dock, top bar, footer), `ui/` and a new `proof/`; `site/src/data/` except `site.ts` and `seo.ts`; `site/src/lib/db/`, `forms.ts`, `booking.ts`, `links.ts`, `lead-source.ts`; `01-portfolio/18-growth-plan/marketing/links.md`.

Not: chat K's files (providers, `motion-features.ts`, `sound.ts`, `src/app/layout.tsx`, `motion.css`, `base.css`), chat G's files (`content/**`, `src/lib/seo/`, `src/lib/content/`, `src/components/seo/`, `seo.ts`, the sitemap, robots, llms.txt and feed routes), `site.ts`, `next.config.ts`, `wrangler.jsonc`, migrations.

## Contracts used

- Events: `cta_call` (a Book button), `cal_open` (calendar shown), `cal_booked` (Cal.com booking), `form_sent`, `cv_request`. Keep the names; add one only if a picked fix needs it, and list it in the report.
- `faqPage()` in `src/lib/seo/graph.ts` (G's file: call it, don't edit it) for any FAQ block Rez picks; the JSON-LD must match the visible questions word for word.
- `rememberLead()` and `readLead()` in `src/lib/lead-source.ts` for the first touch source.

## Phase 1 · Audit (no code)

1. On the live site, in BrowserOS at 1440 and 390, follow every route to a booked call, a message and a CV request from: Home, /work, a client case (Earworm), a concept case (Atlas), a service page (/brand), a Hire role, an Industry page, a Deliverable, a guide, /about, /free, /career and /contact. Don't send forms or book (common.md rule 2): stop at the step before.
2. Note for each: clicks to each goal, whether a Book button shows in the first screen on a phone, dead ends, proof near the buttons, anything slow or broken on a phone (booking modal, form, dock).
3. Judge these candidates alongside your own findings (ideas, not orders): an FAQ block on the 5 service pages (it answers doubts next to the button and gives AI answers a FAQPage); a call card after each case's proof; a link from each service page to the packages on /work-with-me; a call to action in the middle of long guides; proof ("300+ client reviews", Delineate, the Earworm quote) next to the main buttons; the length of the Contact form; the CV path from /career and /about; Microsoft Clarity (free heatmaps and session recordings, loaded only after Allow, with privacy page lines and CSP hosts; Rez signs up; it overlaps nothing installed).
4. Write `reports/c-funnel.md`: a ranked table (#, page, problem, fix, goal it helps, visible change yes or no, new copy word for word, effort S, M or L).
5. Ask Rez with the picker which fixes to build: top ranked first, four per round, multi select, each round with "All of these" and "None". Stop until he answers.

## Phase 2 · Build

6. Build only the picked fixes, in the V4a look (existing tokens and components; a new style only if a pick needs one). Figma isn't updated unless Rez asks. The trust line under the main buttons is saved for the next update: don't add it.
7. Always build the three hidden helpers:
   - **Proof block**: a `ProofQuotes` component in `src/components/proof/` and `src/data/quotes.ts` (name, role, company, quote, `approved`). It shows only approved quotes, after Proof on Home, on the matching service page and on the matching case. With only the Earworm quote today it shows that one where it fits and nothing elsewhere. When Rez sends quotes, the coordinator passes them to you.
   - **Channel links**: `marketing/links.md`, a table of tagged links for LinkedIn, Behance, Dribbble, Instagram, Contra, Himalayas, the email signature, the CV, job applications and directories (`?utm_source=<channel>&utm_medium=<profile|email|cv|outreach|directory>`). Check that `/api/track` and Stats group each under its own source; fix the grouping if not.
   - **Conversion view in Stats**: per page and per source, visits next to Book clicks, calendar opens, bookings, messages and CV requests, for 14 and 30 days, from the existing tables (no new tables), with the existing Stats components.
8. Check on your own port: each pick at 1440 and 390; the events fire once per action against local D1; the Stats view with local rows; `npm run check`; a CHANGELOG line.

## Phase 3 · After Rez's redeploy

9. On the live site, open each pick at 1440 and 390 (no sends). Ask Rez to look at /stats after his test message and booking.

## Done when

`c-funnel.md` exists; Rez's picks and the three helpers are built and checked locally; `npm run check` passes; the report says which conversion each change helps.

## Report

(filled by chat C)
