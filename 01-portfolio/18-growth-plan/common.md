# Common rules for the growth chats

[README](README.md) · Draft · 29 Oct 2026, revised the same day · Read with your chat file. Rez in chat wins over this file.

1. Follow every rule in [../17-launch-plan/common.md](../17-launch-plan/common.md) (start, Rez's firm rules, BrowserOS through `snapshot`, `read`, `grep` and `act` with no screenshots unless Rez asks, working, finish). Where it says `17-launch-plan`, read `18-growth-plan`.
2. The site is live on https://rezkarim.com (indexable since 28 Oct). Read it with curl and BrowserOS; if this PC's DNS can't find it, use `curl --resolve rezkarim.com:443:104.21.51.180`. Never write live data: no form sends, bookings or sign ins on the live site (Rez does those), and check tagged links with curl, which runs no tracking. Lead data lives in Rez's live D1, which AI sessions can't read: ask Rez for /stats numbers.
3. Every change aims at one of three conversions: a booked call (`cal_booked`), a message (`form_sent`), a CV request (`cv_request`). Say in your report which one each change helps.
4. Copy: only words Rez already approved, interface words from the site, or new lines marked "new" for his OK in your chat. Claims word for word from `site/content/claims.ts`. Never invent a quote, number, result, client or availability. Never name or link Fiverr anywhere: site, profiles, posts, directories (Rez, 29 Oct); the claim stays "300+ client reviews".
5. Work directly, no agents. Edit only the files your chat file gives you. If you need a change in another chat's file, add it under Requests in your report and carry on.
6. Code chats (C, K, G): run `next dev` or `cf:preview` on your own port (C 3101 and 8791, K 3102 and 8792, G 3103 and 8793), never stop the dev server on port 3000, and use local data only. Run `npm run build` or `npm run check` only when no other chat is building; if a build fails on `.generated/`, wait and retry. Ignore errors in other chats' files.
7. Ask Rez with the AskUserQuestion picker before every visible change on the site, every new line of copy, every profile or dashboard save, every directory submission and every Gmail or Cal.com setting.
8. No chat commits or deploys: Rez commits and redeploys once after C, K and G.
9. Report in `01-portfolio/18-growth-plan/reports/<chat>.md`: first line "done" or "blocked: <why>", then Done, Files, Checks, Open issues, Requests, and what Rez still clicks.
