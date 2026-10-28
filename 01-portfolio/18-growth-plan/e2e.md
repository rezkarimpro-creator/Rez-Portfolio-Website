# End to end flows (chat V)

[README](README.md) · Draft · 29 Oct 2026 · Read with [review.md](review.md). Live means https://rezkarim.com after Rez's redeploy, read only (no sends, bookings or sign ins). Local means `cf:preview` on your own port with local D1; the Stats test password is in `site/.dev.vars` (never print it).

| # | Flow | Where | Steps | Expected |
|---|---|---|---|---|
| 1 | Book a call from Home | Live, 1440 and 390 | The main Book button | The booking modal (a sheet on 390) shows the Cal.com calendar within about 2 s with no inner scrollbar; Esc and close return focus |
| 2 | Calendar on Contact | Live, 1440 and 390 | Open /contact | The calendar loads with the page and fits its card at each width |
| 3 | Message from a case | Local | /work/earworm, Send a message, fill in, send | Contact opens with the service picked; the Sent state; one `form_sent` row and the message in local D1; the lead alert attempted (logged locally) |
| 4 | Message from a Hire role | Local | A Hire role page, its call to action, send | The role carries into the form; Sent; one row |
| 5 | CV request | Local | /career or /about, Ask for my CV, the recruiter form, send | The recruiter Sent state; one `cv_request` row |
| 6 | Tagged arrival | Local | Open `/?utm_source=linkedin&utm_medium=profile`, then send a message | Stats shows the visit and the message under the source linkedin |
| 7 | Conversion view | Local | Sign in to /stats, open the new view | Per page and per source rows for 14 and 30 days match flows 3 to 6 |
| 8 | Proof block | Live | Home, the matching service page and case | Only approved quotes (Earworm today), no empty block anywhere |
| 9 | Each of Rez's picks in `reports/c-funnel.md` | Live, 1440 and 390 | As the pick says | As the pick says |
| 10 | Cookie banner | Live, site data cleared | First visit | Allow is the filled button; Only essential works; the choice is remembered |
| 11 | Sound | Live | First visit, then the dock switch | Background sound off until switched on; click and hover sounds always on |
| 12 | Speed | Live | PageSpeed Insights mobile on K's five pages | 90 or more, or as K's report explains |
| 13 | Structured data | Live | Rich Results Test on Home, a case and a guide | Valid, no errors |
| 14 | Hosts and redirects | Live, curl | www.rezkarim.com and the test host with a path and a query | 301 to rezkarim.com with the path and query kept |
