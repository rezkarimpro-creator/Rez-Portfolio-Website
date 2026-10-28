done

# Chat D · Pages report

[README](../15-v4a-plan/README.md) · Done · 28 Oct 2026 · Opus 5.5, Extra high. Done. Home, Work, the dock, the archive rows, the inner pages, /accessibility and the LinkedIn invite page, built from the V4a frames on Figma page `10:3` (read 28 Oct, read only).

## Files changed

| File | What |
|---|---|
| `src/app/page.tsx` | Home per `82:8363`: hero (avatar, Remote, Book free strategy call, See all work), Proof, Selected work from `homeOrder`, Career highlights (Home variant, 3 rows, no Show more), Services accordion, How I work, Archive, "Free templates for your pitch and profile", call card. First two cards render visible |
| `src/app/work/page.tsx` | Work per `82:8477`: no icon tile, no Back tile, new intro, filters, SolVita across the row on All, On request 2 by 2 (every locked item from `workOrder` and `onRequest`; no NDA card, row 60; the Password card on the preview only with a note, row 40), Archive with the Pause tile, call card. No Social posts card (not in the frame) |
| `src/components/work/work-browser.tsx` | FilterChip row (40px on phones, 44px hit area), All, Brand, Web & UI/UX, Pitch decks, Social; the grid fades out and in on a change (no layout animation); Empty state from `289:10961`; "Cases" h2 visually hidden |
| `src/components/work/case-card.tsx`, `locked-card.tsx`, `work-grid.tsx` | No Client, Concept or To confirm tag, no year (row 81); cover alt "[Case] cover" (07 §3.7); first two covers eager with high priority; locked cards use F's Tag (Coming soon, Password) with the Lock tile; WorkGrid skips slugs with no data |
| `src/components/work/archive.tsx`, new `archive-rows.tsx` | The 08 §3.8 archive: original colour, edge fades, two rows auto slide in opposite directions (28 and 24 px/s), pause on hover and with the Pause tile (`aria-pressed`), mouse and touch drag with a little inertia, then the slide carries on from there; grab and grabbing cursors; a click without a drag shows the name (unlinked tiles), linked tiles open their case (07 §3.6). Reduced motion: no auto slide, drag still works. Non drag path (WCAG 2.5.7): Previous and Next tiles slide one tile, and every tile is a tab stop that slides into view on keyboard focus, with arrow keys between tiles. Transform only, stops when off screen |
| `src/components/layout/dock.tsx` | Active item per decision 48 (09 §1), `aria-current`, F's Tooltip (300ms), the bubble moves by CSS transform (no `layoutId`), 56px items (48 on phones), fixed 24px above the safe area. Hover sounds kept through `data-hover-sound` |
| `src/components/sections/career.tsx` | Track switch with a measured CSS bubble (labels All, Brand, Web & UI/UX, Pitch decks), sideways scroll on phones; highlights with Show more and Show less (Career) or three rows (Home); timeline with 3 roles, Delineate open, "Show 3 earlier roles"; `m` components only |
| `src/components/sections/services-accordion.tsx` | Accordion pills, one open at a time, CSS grid row transition; the See links stay in the HTML (inert) when closed (07 §3.6) |
| `src/components/sections/service-page.tsx`, `page-header.tsx`, `formats.tsx`, `recognition.tsx`, `recruiter-card.tsx`, new `cookie-settings-pill.tsx` | Back tile on service pages (to `/#services`) and Career (to `/about`); /linkedin shows Sam Bendix's refresh (row 28) and the free kit row; Formats as F's Tags; About shows the 3 awards; For recruiters links the Hire hub when it has a live page; Privacy's Cookie settings reopens the banner |
| `src/app/career`, `about`, `free`, `work-with-me`, `agencies`, `privacy`, `not-found.tsx`; new `src/app/accessibility/page.tsx` | Copy word for word from `82:8552`, `82:9439`, `82:9522`, `82:9560`, `82:9612`, `82:9658`, `82:9687`, `291:11249` |
| New `src/app/linkedin/invite/page.tsx`, `src/components/invite/before-after.tsx`, `sticky-cta.tsx`, `preview-form.tsx` | The invite page per `92:2862` and `93:3126` (details below) |
| `src/data/career.ts`, `offers.ts`, `services.ts`; new `src/data/pages.ts`, `invite.ts` | All page copy out of components |
| `src/styles/home-work.css`, `pages.css`, `invite.css` | Tokens and logical properties only |
| `assets/images/invite/*.webp` (9) and the same files in `public/images/invite/` | Sam's banner, both photos, two Featured cards, and the 4 unconfirmed tiles, from the Figma source images at 2x display size (4 to 38 KB each) |
| `site/CHANGELOG.md` | One Unreleased line |

### LinkedIn invite

- 404 unless `NEXT_PUBLIC_INVITE_LIVE=1` (`notFound()` in the page; the value is inlined at build).
- No dock (F's ChromeGate); footer on desktop, hidden on phones by `invite.css` through `data-chrome="invite"` (row 52).
- Before and after from the set `176:8227`: one shared layout drawn twice, the After layer clipped at the handle; drag the 44px handle or anywhere on the card (pointer and touch), arrow keys, Shift for bigger steps, Home and End; `role="slider"` with value text; both states carry the 07 §3.7 alt lines.
- Sticky "Claim your preview" on phones (`93:3472`): shows once the hero card scrolls away, hides while the form is near; fade from the frame's gradient.
- Recent work: only Sam's tile on the live site; the 4 others show on the preview with the "Hidden until Rez confirms (row 29)" note (`inviteTilesConfirmed` in `src/data/invite.ts`).
- Perks and capacity word for word from rows 37 and 38; FAQ answers word for word from row 39 (FAQ items stay in the HTML when closed).
- Form: 4 questions (q2 as real radio chips), then name, email, LinkedIn; checks the three before sending with the `291:10997` error lines, focus goes to the first error; Sending state on the button (`291:11092`); posts to B's `requestPreview`; thanks state (`93:3111`) takes focus, "See recent work" jumps to the Recent work card.

## Checks

| Check | Result |
|---|---|
| Prettier and ESLint on every file above | Pass |
| `tsc --noEmit` on my files | No errors in my files (the only errors left are in E's `src/lib/seo/trail.ts`) |
| `content:lint -- --data` on my data | No errors; warnings left are the RUET full name (allowed, 07 §4.2), the two preview only "to confirm" notes on Work with me, and "Can we sign an NDA?" (the visitor's "we", as drawn). Fixed: Career's Earworm detail now uses the exact claim |
| Pages on next dev (curl) | 15 routes 200, `/nope` 404; no Taste Labs, Bangladesh, Dhaka, Rajshahi (except the RUET name), NDA card or Monthly Design Team in the HTML |
| BrowserOS, own background tab, closed after | 1440: Home hero, archive, Work header and grid, invite hero match their frames (pairs in [d-shots/](d-shots/)). 375: all 14 pages have no sideways scroll and one h1; dock lights Home, Work (Work, services), About (Career, About), Free, Contact (Work with me, For agencies), none (Privacy, Accessibility, 404) |
| Archive, mouse | Rows move in opposite directions; a 300px drag moved the row 300px and did not open the tile under it; hover pauses |
| Archive, touch emulation | A 160px swipe moved the row with a short glide, no navigation |
| Archive, keyboard | Tab from the Pause tile lands on the first tile, arrow keys move through all 8 with each fully in view (24px from the edge), wrap at the ends |
| Archive, reduced motion | No auto slide; drag still works; Previous and Next jump one tile |
| Work filters | Social shows Pulse and YumYum (C's tags); All shows 21 cases in the frame's order |
| Track switch | The bubble matches the active option's size and place after a switch; Pitch decks shows Earworm, Delineate, BdApps |
| Invite | Arrow keys move the slider (42 to 52); empty submit shows the three Figma lines and focuses Name; a filled form reached the action and showed the thanks state with focus on "Thanks!"; sticky button hidden at the top, shown mid page, hidden at the form; no dock, no footer on phones |
| `/linkedin/invite` with `NEXT_PUBLIC_INVITE_LIVE=0` | Pass: a full `npm run build` with the switch off (exit 0, every route compiled and type checked) prerenders the route with `"status": 404` in `.next/server/app/linkedin/invite.meta` |
| `npm run check` | Stopped at `format:check` on 6 files other chats own (`docs/content.md`, `docs/performance.md`, `scripts/og.mjs`, `src/components/forms/form-meta.tsx`, `src/data/work.ts`, `src/lib/seo/index.ts`); none of mine. Every later step run on its own: `names`, `lint`, `typecheck`, `content:check`, `content:lint`, `agents:check`, `check:deps`, `test` all exit 0; `check:secrets` ok |
| `npm run build` (switch on) | Pass, exit 0: `/`, `/work`, the inner pages, `/accessibility` and `/linkedin/invite` prerender as static; `check:secrets` ok |
| Lighthouse mobile on / and /work | Not run: no Lighthouse in the tree and installs are R's. For R (07 §5.10) |

## Screenshots

In [d-shots/](d-shots/): `build-home-hero-1440.jpg` with `figma-home-hero-82-8368.png`; `build-home-archive-1440.jpg` with `figma-home-archive-82-8437.png`; `build-work-top-1440.jpg` with `figma-work-header-82-8482.png` and `figma-work-on-request-82-8506.png`; `build-invite-hero-1440.jpg` with `figma-invite-header-92-2867.png`; `build-invite-slider-375.jpg` with `figma-invite-header-mobile-93-3131.png`; `build-invite-recent-sticky-375.jpg` with `figma-invite-recent-92-3038.png` (the preview shows the hidden tiles with their note).

## Open issues

| For | Issue |
|---|---|
| R | Lighthouse mobile on / and /work (07 §5.10), axe on these pages, and a 320px pass. The archive's Previous and Next tiles are new controls the frames don't draw (best-practices §5.1 asks for them; see Rez decides) |
| R | `docs/accessibility.md` "Known risks" says D adds arrow buttons and a pause: done, plus keyboard focus that slides tiles into view |
| C | Archive tiles link by the name before " · " (ALPHA, Azora, Bristo, CargoShift, Gravix, Nike Mind, Pulse, Real estate website, SyncGrid, Taif, YumYum); Fitness app UI, Furniture and Grocery ecommerce, Orvion and Solar have no case, so they show their name on a click. If any of those is a new case under another name (LYFT, ReSpace?), a label change in `work.ts` links it |
| C | The invite images sit in `public/images/invite/` and use `unoptimized`, outside your loader. Keep that folder if `npm run images` cleans `public/images/` (shared notes, chat-d-notes.md) |
| B | Invite form contract and the Figma error lines are in the shared notes; one test preview request ("Test Person") reached the action on next dev |
| E | `/accessibility` and `/linkedin/invite` use `pageMeta` keys `accessibility` and `linkedin-invite`; no D component uses Motion layout animations any more |

## Requests

1. **Coordinator or R:** `site/docs/accessibility.md` (F and R own it) could record the archive's non drag path: Previous and Next tiles, keyboard focus, arrow keys, the Pause tile.
2. **Coordinator:** `01-portfolio/CLAUDE.md` "Files here" could name `08-build-reports/d-shots/` next to `f-shots/`.

## Rez decides later

| Item | Default taken | Why |
|---|---|---|
| RezBloom line on About (decision 12, drawn as copy to confirm) | Shown as drawn | Recommended answer |
| Archive Previous and Next tiles (not in the frames) | Added beside the Pause tile, same Icon tile style | WCAG 2.5.7: with reduced motion or Pause, touch users had no way to see the rest of a row without dragging |
| Work with me "How many revisions?" and "How do I pay?" (row 34) | Hidden on the live site; the preview shows them with a note | Their answers are still to confirm |
| "Full case for recruiters" card (row 40) | Preview only, with a note | Rez hasn't picked the case |
| The 4 unconfirmed invite tiles (row 29) | Hidden on the live site; preview shows them with the note | Recommended answer; flip `inviteTilesConfirmed` once credits are OK |
| Invite header tile | The LinkedIn icon tile, decorative | The frame names it "Back" but draws the LinkedIn mark with no target |
| Back tiles | Service pages go to `/#services`, Career to `/about` | The frames draw a Back tile without a target; these match the dock mapping |
| Career highlights collapsed count | 4, then Show more | Only the open state is drawn |

## Suggested commit message

```text
feat: build Home, Work, inner pages and the LinkedIn invite from V4a

Match Home, Work, the service pages, Career, About, Free, Work with me,
For agencies, Privacy and the 404 to their V4a frames, and add the
accessibility statement and the LinkedIn invite campaign page behind its
switch. Rebuild the archive rows with transform sliding, drag with
inertia, pause, Previous and Next, and keyboard focus. Move the dock and
track switch bubbles to CSS, light the dock per page, drop Taste Labs,
the NDA card and every city line, and move page copy into data files.
```
