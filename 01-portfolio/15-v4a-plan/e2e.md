# End to end flows (chat R)

[README](README.md) · Approved 27 Oct 2026 · Run on `cf:preview` with the test values in `site/.dev.vars` (never printed), at 375, 768 and 1440 unless a row says otherwise, in BrowserOS. Record pass or fail for every row in R's report.

| # | Flow | Start | Steps | Expected |
|---|---|---|---|---|
| 1 | The full checklist | — | [09-functional-checklist.md](../09-functional-checklist.md) §1 to §8, line by line | Every line passes |
| 2 | Hire to CV | `/hire` | Open a role page, press "Ask for my CV" | Contact opens with Recruiter and the role prefilled; the message lands in Stats with its source |
| 3 | Guide to call | `/guides` | Open a guide, follow its related case, press "Book free strategy call" | The booking modal opens; `cta_call` and `cal_open` are counted |
| 4 | Industry to case | `/for/<a batch 1 industry>` | Open a proof case | The case's Related block links back |
| 5 | Deliverable to message | `/<service>/<deliverable>` | Press "Send a message" | Contact opens with the service preselected |
| 6 | Contact, new fields | `/contact` | Pick Founder or team, a timeline and a budget, then send | Sent state; Stats shows the timeline, budget and source |
| 7 | Calendar waits for a click | `/contact`, fresh browser | Open the page and don't click the calendar | The placeholder shows and nothing loads from cal.com until the click (decision 28) |
| 8 | Stats access | Any page | G then S; 8 wrong passwords; later the right one; Log out | Too many tries after 8; the right one signs in for 7 days with the Owner chip; Log out removes the chip |
| 9 | Stats data | `/stats` | After flows 2 to 7 | Events, referrer groups (with an AI referrer test visit), the qualified mark, cookie choices; empty states on a fresh local D1 |
| 10 | Recruiter case | `/work/private` | A wrong password, then the right one, then Lock again | Decision 31's line, then unlocked for 30 days, then locked |
| 11 | Draft and ready pages | A page set to `draft`, another to `ready` | Open both URLs | Both 404 in the production build; `ready` renders only with `CONTENT_STAGE=preview` |
| 12 | Consent | Fresh browser | Only essential, then Allow, then Only essential | `rk_vid` appears after Allow and is deleted after Only essential |
| 13 | Errors | A test only route that throws | Open it | The 500 page; one `client_error` event, capped per day |
| 14 | Accessibility page | Footer link | Open `/accessibility` | Loads, noindex, links work |
| 15 | Launch mode | Rebuild with `NEXT_PUBLIC_INDEXABLE=1` | Fetch robots.txt, sitemap.xml, llms.txt, the RSS feed and the head tags | They match 07 and seo §3.6; private and campaign routes stay noindex |
| 16 | Invite switch | Rebuild with `NEXT_PUBLIC_INVITE_LIVE=0` | Open `/linkedin/invite` | A real 404 |
| 17 | Mobile only | 390 and 320 | The dock, sheets, sticky CTA, swipe in the lightbox, the © long press | As the Mobile frames and the Breakpoints frame on Handoff say |
