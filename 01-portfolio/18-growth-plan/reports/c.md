blocked: fix 1 waits for Rez's OK on the Figma demo; everything else is built and checked locally

# Chat C report · Conversion

[README](../README.md) · Draft · 29 Oct 2026 · Opus 5.5, High. Audit in [c-funnel.md](c-funnel.md), Rez's picks in its §5.

## Done

| Change | Goal it helps | Visible |
|---|---|---|
| Audit of 14 page types on the live site at 1440 and 390, ranked list in `c-funnel.md` | All | No |
| Fix 1: call card after Proof and the quote on cases. **Figma demo only**, as Rez asked: section "C · Demo · Call card after proof (29 Oct)" on ↳ V4a · Pages, frames `346:11502` (1440) and `346:11632` (390). No code until he OKs it | `cal_booked` | Not yet |
| Fix 2: Proof card after Cases on the 5 service pages (`/brand`, `/social`, `/linkedin` "300+ client reviews"; `/product` the Delineate scope line; `/decks` the Earworm line), claims by key | `cal_booked`, `form_sent` | Yes |
| Fix 3: Questions card before How it works on the 5 service pages, answers word for word from Contact, Work with me and each service's own pages | `cal_booked` | Yes |
| Fix 4: Book in the /work header (first screen on a phone, was 13 screens down) | `cal_booked` | Yes |
| Fix 5: /contact header pills, Book jumps to the calendar, Send a message to the form | `form_sent` | Yes |
| Fix 6: call card after the "From a real project" card on guides | `cal_booked` | Yes |
| Fix 7: "Work with me" pill in each service page header, next to See all work | `cal_booked` | Yes |
| Fix 8: Book in the /work-with-me header, above the offers | `cal_booked` | Yes |
| Fix 9: Home hero is Book (primary) and Send a message (secondary); See all work left the hero, since Selected work right below has its own See all work pill | `form_sent` | Yes |
| Rez's extra: career highlights on Home and /career, the text fills the row and the track tag sits under each role | Trust | Yes |
| Helper 1: `ProofQuotes` (`src/components/proof/`) and `src/data/quotes.ts`, approved quotes only. Today the Earworm quote shows after Proof on Home and on /decks; the Earworm case keeps its own quote block, so it isn't shown twice | `cal_booked`, `form_sent` | Yes (the quote on Home and /decks) |
| Helper 2: tagged links counted under their channel (was a bug: every `utm_source` except chatgpt counted as Direct). `marketing/links.md` has a link per channel | All | No |
| Helper 3: "Conversions by page and source" in /stats, 14 or 30 days, by page or by source: views or visits, Book clicks, calendar opens, bookings, messages, CV requests. Existing tables, no migration | All | Stats only |
| Bug fix: the calendar's listeners stayed after the modal closed, so a second open in one visit counted `cal_open` and `cal_booked` twice. Now removed on close | `cal_booked` counts | No |
| Bug fix: a visit that starts on /contact (a tagged CV link, a Hire page link) sent its message with no landing page or source, because the form read the lead before the tracker saved it. The form now writes it when used | `form_sent`, `cv_request` counts | No |

Skipped by Rez: fix 10 (CV pill on /about and /career), fix 11 (Clarity, revisit after 4 weeks of /stats).

New events: none. Event values: `cta_call`, `cal_open` and `cal_booked` now carry the visit's channel in `value` (for example `linkedin`, `cv`, `direct`). Messages carry it in `extra.channel` (shown as "Channel" in Stats).

## Files

- Pages: `src/app/page.tsx`, `src/app/work/page.tsx`, `src/app/work/[slug]/page.tsx`, `src/app/contact/page.tsx`, `src/app/work-with-me/page.tsx`, `src/app/stats/page.tsx`
- Components: `src/components/sections/service-page.tsx`, `src/components/sections/career.tsx`, `src/components/templates/content-page.tsx`, `src/components/proof/proof-quotes.tsx` (new), `src/components/stats/conversion-view.tsx` (new), `src/components/booking/calendar-frame.tsx`, `src/components/forms/form-meta.tsx`
- Data: `src/data/services.ts`, `src/data/quotes.ts` (new), `src/data/stats.ts`
- Lib and API: `src/lib/db/index.ts`, `src/lib/db/d1.ts`, `src/lib/booking.ts`, `src/app/api/track/route.ts`
- Outside the brief's list, one line: `src/app/actions/shared.ts` (`leadSource` returns the channel). No other chat owns it
- Styles: `src/styles/pages.css` (highlight row), `src/styles/stats.css` (the conversion table)
- `CHANGELOG.md`, `18-growth-plan/marketing/links.md`, `18-growth-plan/reports/c-funnel.md`
- Figma: the demo section above (new nodes only, nothing existing changed)
- Local only: migrations applied to the local D1 (`wrangler d1 migrations apply DB --local`). The local database for the current id had no tables, so next dev counted nothing

## Checks

| Check | Result |
|---|---|
| Typecheck, ESLint on changed files, Prettier | Pass |
| `npm test` | 42 of 42 |
| `npm run check` | See the line below |
| Every pick on localhost at 390 and 1440 (BrowserOS, text and DOM, no screenshots) | Buttons in the first screen where planned, no sideways scroll, highlight text fills the row with the tag below |
| Tagged visit `/brand?utm_source=linkedin` | View `ref` linkedin, group social; one `cta_call` and one `cal_open`, both with value linkedin |
| Tagged visit `/work?utm_source=behance` after the calendar fix | One view (behance, portfolios), one `cta_call`, one `cal_open` |
| Local test CV request from `/contact?kind=recruiter&utm_source=cv` | Message saved with landing /contact, group other, `extra.channel` cv; one `form_sent`, one `cv_request` |
| The conversion queries on local D1 | Run and return the expected rows (json_extract works) |

The /stats view itself was not opened: it needs a sign in, which AI sessions don't do. Rez sees it on localhost.

## Open issues

- On /contact the calendar loads with the page (chat X, 29 Oct), so every /contact visit counts a "Calendar opened". In the conversion view, read /contact's calendar opens as visits, not intent.
- On a 1440 desktop the three pills on service pages wrap to two lines (Book and See all work, then Work with me). Works, but Rez may want it in one line in the localhost audit.
- Old live rows keep hosts (`linkedin.com`); new rows use channel names (`linkedin`). The conversion view folds both; the "Where visits come from" list shows both until the old rows age out.

## Requests

1. **Chat G**, `src/components/seo/json-ld.tsx`: add `faqPage(sv.faqs)` to the service page graph (brand, product, decks, social, linkedin), so the FAQPage matches the new visible questions. Note in the shared notes folder: `growth-c-for-g.md`.
2. **Coordinator or V**, `site/docs/privacy-data.md` and the /privacy page: the events row can add "with the channel the visit came from (for example LinkedIn or CV)", and messages "and its channel". No new data about a person.
3. **Chat R**: use the links in `marketing/links.md` on every profile, the email signature and the CVs.

## What Rez still clicks

| Action | Where |
|---|---|
| OK or change the fix 1 demo | Figma, ↳ V4a · Pages, section "C · Demo · Call card after proof (29 Oct)" |
| His localhost audit of every pick | http://localhost:3000 (/, /work, /brand, /decks, /contact, /work-with-me, /career, a guide), and /stats → Conversions by page and source |
| Redeploy with K's and G's work | Terminal in `site/` |
| After the redeploy, one test message and one booking, then /stats | rezkarim.com/contact, /stats |

Commit message for Rez: `Conversion picks: service proof and questions, header CTAs, guide call card, career highlights, channel tracking and the Stats conversion view`
