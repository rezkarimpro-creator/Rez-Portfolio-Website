# Portfolio guide

[README](../README.md) · Draft · 21 Oct 2026 · How the site was made, how to change it, how to repeat it for a new project, and what comes later.

## 1. Where everything lives

| What | Where |
|---|---|
| Live test site | https://rezz.dashbloom.design (kept out of Google until launch) |
| Code | `01-portfolio/site` (Next.js 16), its own git repo |
| Design | Figma [rez-website](https://www.figma.com/design/2PZQVIX9UJO8NqnXNqiNDe/rez-website), the V4a frames |
| Full overview of every page, feature and setting | [document_portfolio.md](document_portfolio.md) |
| Rules and status for each session | [CLAUDE.md](CLAUDE.md), "Where things stand" |
| Hosting | Cloudflare Workers, free plan. Worker `rezkarim-portfolio`, storage (KV) `rezkarim-portfolio-data` |
| Passwords for /stats and the recruiter box | `site/.env.local` on your computer, and as secrets on Cloudflare |

## 2. How it was built, step by step

1. **Rules and brief.** One folder, one CLAUDE.md with the rules (public role, claims, Taste Labs), and a locked spec (19 Oct) with the sitemap, cases and copy rules.
2. **Research.** An inspiration board of 31 reference sites (`03-inspiration-board.html`). Claude studied them through their code, not screenshots, and noted patterns to borrow, never to copy.
3. **Figma.** Three directions first: V1 dark editorial (close to jaberelferkh.com), V2 light editorial, V3 led by your photos. Then a Components page with color variables (light and dark), text styles and 18 components. Then V4 in the Selv glass card style, and V4a, the version you picked.
4. **Assets.** Case images from Behance and Figma, sliced and compressed. Headshots with the background removed on this computer. The Earworm cover from the PodPilot file.
5. **Build.** Next.js 16, Tailwind v4 tokens named after the Figma variables, Motion and Lenis for movement. Every spec page plus Career, Privacy and a private Stats page. Booking through Cal.com, a contact form with three visitor types, a recruiter password, a cookie banner, a visit counter, a live clock with the visitor's flag, and interface sounds.
6. **Testing.** Production build, lint and types, every route, the form, both passwords, the lightbox, cookies, the counter, booking, and 375, 768 and 1440 px screens.
7. **Figma sync.** V4a updated to match the code, plus a "V4a · Built pages" section. V4 untouched.
8. **Docs.** document_portfolio.md with the copy of every page and every feature.
9. **Polish (21 Oct).** The new Identity avatar from Figma, the name Rezaul Karim everywhere except the email, and three recorded nature sounds (Beach waves, Morning garden, Forest stream). A refresh plays the next one. Sound is on by default at a soft level and starts on the visitor's first click, which browsers require. After one click, refreshes start it on their own in Chrome.
10. **Live.** Cloudflare's Next.js adapter (OpenNext) turns the build into a Worker. Visits and messages live in Cloudflare KV storage. The site answers at rezz.dashbloom.design.

## 3. How to change this site

Open a session in the `01-portfolio` folder. Claude reads CLAUDE.md first, so it knows where things stand.

**How to ask well**

- Name the page and the section ("Home, the Proof card").
- Say the change and give the source: new text, a Figma link to the frame, or a file path.
- One topic per message. Claude shows it on localhost and you check. Claude never commits or deploys: you commit, then deploy with `site/docs/runbooks/deploy.md`.

| You want to | Say something like |
|---|---|
| Change copy | "On /about, replace the intro with this text: ..." |
| Change design | "Match this Figma frame on the Home hero: [link]" |
| Add a case | "Add a case for [client]. Images are in [folder or Figma link]. Role Brand designer. No Client or Concept label and no year (10-confirmations row 81)." |
| Add a page | "Add a /speaking page with these sections: ... Use the same cards as /about." |
| Swap a sound | "Replace the beach sound with [file or description], same loudness as the others." |
| Change name, email, links | "Update the email in site.ts to ..." |
| Fix something broken | "On mobile, the dock covers the form button on /contact. Screenshot attached." |
| Get ready to go live | "List what changed, run npm run check, and give me the commit message and the deploy steps." |

**Deploying yourself.** In the `site` folder run `npx wrangler login` once (you click Allow in the browser). Then, after any change, commit and follow `site/docs/runbooks/deploy.md`: the checks, `npm run deploy`, and the after deploy check. The first deploy of the new Worker has extra steps (secrets, D1), listed there too.

**Posting prompts (paste ready).** For a case, an SEO page or a guide, and for putting them live after your OK. Open the session in `01-portfolio/site` (Antigravity must open there; Claude Code can open there or at the project root). Fill in the parts in angle brackets. Every prompt ends with the content gate and a preview, and none commits or deploys: those stay yours. The full steps are in `site/docs/runbooks/publish-content.md`.

Add a case:

```text
In 01-portfolio/site, add a case for <name> from this Figma frame: <link>. Follow docs/runbooks/publish-content.md and "Add a case from a Figma frame" in docs/content.md. Copy the frame's text word for word. Any My role line I haven't confirmed stays toConfirm. No Client or Concept label and no year. Take the images from the frame's original bytes, run npm run images, and write alt text for every image. Then run npm run content:gate -- content/work/<slug>.mdx until it passes, set status ready, and show me the case on npm run cf:preview at 390 and 1440 in BrowserOS. Report the files, the gate output, the proof lines used and anything to confirm. Leave it at ready. Don't commit or deploy.
```

Add a guide:

```text
In 01-portfolio/site, add a guide that answers "<question>". Check the page map (01-portfolio/15-v4a-plan/planning/seo-page-map.md) for its row and for any page that already answers it, and use only proof from content/claims.ts and 00-facts.md. Follow docs/runbooks/publish-content.md: scaffold with npm run content:new -- --type post --slug <slug>, the answer first in 25 to 40 words, 2 or more ## sections, 3 to 5 FAQs, dated sources, one service link and one case link, no prices. Then run npm run content:gate -- content/guides/<slug>.mdx until it passes, set status ready, and show me the page on npm run cf:preview at 390 and 1440 in BrowserOS. Report the files, the gate output, the proof lines word for word and anything to confirm. Leave it at ready. Don't commit or deploy.
```

Add an SEO page (a Hire role, an Industry or a Deliverable page):

```text
In 01-portfolio/site, write the SEO page for page map row <row> (01-portfolio/15-v4a-plan/planning/seo-page-map.md): the <Hire role, Industry or Deliverable> page at <URL>. No real proof, no page: tell me if the row has none. Check its intent key isn't taken here or on the agency site. Follow docs/runbooks/publish-content.md: scaffold with the npm run content:new command for its family, fill every field, proof by claim key from content/claims.ts, 2 or 3 proof cases, 3 to 5 FAQs, 2 to 5 related pages, no prices. Then run npm run content:gate -- <file> until it passes, set status ready, and show me the page on npm run cf:preview at 390 and 1440 in BrowserOS. Report the files, the gate output, the proof lines word for word and anything to confirm. Leave it at ready. Don't commit or deploy.
```

Write the next batch of 10 SEO pages (every 2 weeks):

```text
In 01-portfolio/site, write SEO batch <n>: the next 10 rows of the page map (01-portfolio/15-v4a-plan/planning/seo-page-map.md) that have real proof; never write a drop row. Follow "A batch of 10" in docs/runbooks/publish-content.md: steps 2 to 7 for each file, with npm run content:gate -- <file> passing on each. Then one report: a table of URL, main question, first sentence, proof line and gate result, plus 2 pages picked at random for me to read in full, with how to open them on npm run cf:preview at 390 and 1440. Every file stays at ready. Don't commit or deploy.
```

Put pages live after your OK:

```text
OK to go live: <the files, or all of batch n>. In 01-portfolio/site, for each file set status live, reviewedBy { who: Rez, date: <today> } and updatedAt, then run npm run content:gate -- <file> on each again and npm run check. Show me the pages on npm run cf:preview at 390 and 1440, add a line to CHANGELOG.md, and give me a commit message with no AI attribution. Don't commit or deploy: I'll do both with docs/runbooks/deploy.md.
```

Take a page down:

```text
In 01-portfolio/site, take down <URL>: set its status to draft, add a redirect in src/lib/redirects.ts if the URL had traffic, run npm run content:gate -- <file>, and show me on npm run cf:preview that the URL now answers 404 or redirects. Add a line to CHANGELOG.md and give me a commit message. Don't commit or deploy.
```

After you deploy, ask any session for the after deploy check in `site/docs/runbooks/deploy.md`. Once the site is on rezkarim.com, also run `npm run indexnow` in `site/`.

## 4. Doing the same for a new project

The `website-build` skill (in your user skills folder) holds this whole flow, so in any new chat you can just say "Use the website-build skill for [project]". Or paste these one at a time and approve each step before the next.

1. **Folder and rules.** "New project in [folder]. Write a CLAUDE.md with my rules: [role, claims, what to never show]. Read [sources]."
2. **Spec.** "Write a short spec: who it is for, the one job of the site, pages, proof, cases, copy rules. Ask me only what changes the build."
3. **Research.** "Build an inspiration board of 20 to 30 sites like [examples]. Study them through their code. Tell me the patterns worth borrowing."
4. **Design.** "Design 3 directions in Figma [file link]: Home and one case each, with a Components page of variables and styles."
5. **Pick.** "I like V2's layout with V3's type. Make V4 from that."
6. **Build.** "Build V4 in Next.js on localhost, every page in the spec, matching the Figma frames."
7. **Test.** "Test everything: build, routes, forms, phone sizes, speed. Fix what fails and tell me what you could not check."
8. **Sync and docs.** "Update Figma to match the build. Write a document with every page's copy and feature."
9. **Go live.** "Host it on Cloudflare free at [address]." You do the login and any DNS clicks.

## 5. Still open on this site

From CLAUDE.md "Waiting on Rez", in short:

- Credit lines: Real estate client and year, SolVita year, CargoShift and Pulse roles.
- The Earworm quote OK from Ben Farley.
- Which NDA work shows, and which case gets the recruiter password.
- Prices and terms on /work-with-me, agency turnaround times.
- Template contents and Gumroad links on /free.
- The Cal.com event title, and email alerts for new messages.
- Buying rezkarim.com, then moving the site to it.
- Figma still shows "Rez Karim" in the V4a wordmark and footer.

## 6. Later, with the prompt to use

| Goal | Prompt |
|---|---|
| See visitors | "Show me who visits: add Cloudflare Web Analytics and make /stats show pages, countries and returning visitors for the last 30 days." |
| Cookies | "Explain what the rk_vid cookie gives me, then make the cookie choice and the returning visitor count work on the live site." In short, the cookie lets the counter tell new visitors from returning ones. Without it you still see page views. |
| Message alerts | "Email me at rezkarim.pro@gmail.com when someone sends the contact form." |
| SEO | "Make the site ready for Google: titles, descriptions, share images, sitemap, structured data. Turn off noindex when I say launch." |
| AEO and GEO | "Make the site easy for AI answers: clear About facts, FAQ structured data, an llms.txt, and case summaries in plain sentences." |
| Speed | "Run Lighthouse on every page on mobile and get each to 95 or more without changing the look." |
| Accessibility | "Audit accessibility: keyboard, focus, contrast, alt text, reduced motion, screen reader labels. Fix what fails." |
| Real domain | "I bought rezkarim.com. Move the site there and redirect the dashbloom address." |

## 7. Ideas to improve later

- Real covers for every case, and the missing B7 images.
- A short case video or before and after slider on the top two cases.
- A sound picker in the dock (choose beach, garden or stream).
- Light theme, from the Light copy already in Figma.
- A blog or notes page for search and AI answers.
- A downloadable one page credentials PDF behind the recruiter form.
- Uptime alerts and error alerts from Cloudflare.
- Automatic deploys from GitHub, with a preview link for every change.
