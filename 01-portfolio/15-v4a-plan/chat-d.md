# Chat D · Pages

[README](README.md) · Approved 27 Oct 2026 · Opus 5.5, Extra high · Wave 1.

## Start condition

`08-build-reports/f.md` starts with "done".

## Read first

[common.md](common.md); [08](../08-build-plan.md) packages P3, P4 and P6 in §6, §3.2, §3.4 and §3.8; [07](../07-search-and-speed-plan.md) §3.6, §3.7 and §4.4; [09](../09-functional-checklist.md) §1 (dock) and §3 (Home, Archive, Work, Service pages, Career, About, Free, Work with me, For agencies, Privacy, LinkedIn invite); [figma B](planning/figma-b-desktop-pages.md) and [figma D](planning/figma-d-responsive-handoff.md) (D rows, "Fixes applied", "Round 2"); [best-practices](planning/best-practices.md) §5 and §6.3; the D rows under "For the build chats" in seo and security; F's report (path map).

## Owns

The P3, P4 and P6 files in 08 §11 at their new paths; `src/app/accessibility/`; `src/styles/home-work.css`, `pages.css` and `invite.css`.

## Tasks, in order

1. **08 P3** (Home, Work, dock, archive rows) with: Work's Pause tile and no Back tile; filters with the filtered and empty states from Figma round 2; archive rows with a non drag path (arrow buttons or keyboard scrolling) and a pause control (best-practices §5.1); filter chips 40px to the eye with 44px hit areas; the dock fixed above the safe area, with focus padding so it never hides a focused element.
2. **08 P4** (services, Career, About, Free, Work with me, For agencies, Privacy, 404). Career and About show "BASIS" and no separate "Bangladesh" line (decision 39). About gets the RezBloom line once Rez confirms its copy (decision 12), and its For recruiters box links /hire. Privacy is written from the data inventory (best-practices §6.3). The 500 page from Figma round 2, through F's `error.tsx`.
3. **/accessibility** (decision 30): the short statement from Figma round 2, noindex, linked in the footer.
4. **08 P6** (LinkedIn invite): before and after from `176:8227`; the sticky CTA's show and hide points; the 4 unconfirmed tiles behind a flag (row 29); FAQ answers word for word from 10 row 39; form states from Figma round 2; B's action and guards.
5. **Links**: footer links Hire and Guides (decisions 7 and 8); Home links the hubs where Figma shows them; external links get `rel="noopener noreferrer"`. Logical CSS in every file you own.

## Checks

Every page at 375, 768 and 1440 next to its frames; page text against the frames word for word; the archive with mouse, touch emulation, keyboard and reduced motion; `/linkedin/invite` gives a real 404 with `NEXT_PUBLIC_INVITE_LIVE=0`; Lighthouse mobile on / and /work within 07 §5.10; `npm run check`.

## Done when

Every page matches its frames and copy; the 09 rows above pass.

## Report

Filled by chat D in `08-build-reports/d.md`.
