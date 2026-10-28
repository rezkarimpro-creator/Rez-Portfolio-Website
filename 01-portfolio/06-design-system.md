# V4a design system and handoff

[README](../README.md) · Draft · 22 Oct 2026, with Rez's answers from [10-confirmations.md](10-confirmations.md) applied. Where Figma or this file differ from 10, 10 wins

**27 to 28 Oct 2026:** Figma gained tokens, styles and components that this file doesn't list yet (focus states, Article styles, border/field, the new surface and glow tokens, dock/item, space/28, `--radius-tile`, the chip group, Link, and the 11 template blocks), and border/focus changed from white 45% to 80%. Until chat F's `site/docs/design-system.md` replaces this file, read them in [15-v4a-plan/planning/figma-a-design-system.md](15-v4a-plan/planning/figma-a-design-system.md), sections "Fixes applied" and "Round 2", and in the Figma variables themselves.

The live design (V4a) now runs on one design system in Figma. This file is its map for developers: where things are, every token with its CSS name, the type scale, the components and states, the flows, and what changes in `site/`. Figma is the source for visuals; this file mirrors it.

Figma: [rez-website](https://www.figma.com/design/2PZQVIX9UJO8NqnXNqiNDe/rez-website)

## 1. Where things are

| Figma page | What it holds |
|---|---|
| ↳ V4a · Pages (live design) | Every screen. Sections: Core pages, Case pages, Service pages, Other pages and states, Mobile (390), Tablet (768). New case pages land in "V4a · New case pages (22 Oct)" |
| ↳ V4a · Design system | 00 Read me, 01 Foundations (colour, type, responsive tokens, breakpoints, spacing, radius, effects, motion), 02 Actions, 03 Navigation, 04 Forms and messages, 05 Content, 06 Overlays, feedback and data, 07 Icons |
| ↳ V4a · Handoff | Start here, page index (every frame linked), site map, flows, build checklist, open questions for Rez |
| ↳ V2 · legacy, ↳ V3 · legacy, ↳ Components · legacy (V1 to V4) | Old explorations. Their collections and styles are named Legacy. Never use them on V4a |
| Copy | Backups. "Superseded 22 Oct 2026" holds the old mobile Home and Case frames |

## 2. How it works

- **Modes.** Every frame sets the Responsive collection to Desktop, Tablet or Mobile. Card padding, radius, gaps, control heights and type sizes follow. Tablet uses the Desktop values in a 768 frame.
- **Colour.** Theme collection, one mode (Dark). Use semantic tokens only. Primitives are hidden.
- **Type.** 15 text styles. Sizes are bound to Responsive variables; line height and tracking are in percent, so they scale.
- **Components.** All V4a components live on the design system page with their states and a developer note in their description. Page frames use instances only.
- **Code names.** Each variable's Web code syntax is its CSS custom property. Dev Mode shows it.

## 3. Breakpoints and layout

| Breakpoint | Range | Frame | Column | Card padding | Card radius | Title |
|---|---|---|---|---|---|---|
| Desktop | 1024 and up | 1440 | 700 max | 48 | 40 | 60 |
| Tablet | 640 to 1023 | 768 | 700 max | 48 | 40 | 60 |
| Mobile | under 640 | 390 | full width minus 16 + 16 | 28 top and bottom, 22 sides | 32 | 42 |

Cards stack 8px apart. The dock floats 24px above the bottom edge (plus the safe area), with 160px of page padding under the last card on desktop (120 on phones) so it never covers content.

## 4. Tokens

### Theme (colour, Dark)

| Token | CSS | Value | Use |
|---|---|---|---|
| page/background | --page | #000000 | Behind the backdrop photo |
| surface/glass-card | --glass-card | #000000 40% | Glass cards, with Glass/Card |
| surface/glass-nav | --glass-nav | #000000 50% | Dock, Button tiles, toasts, with Glass/Nav |
| surface/glass-tile | --glass-tile | #000000 10% | Tiles, glass pills at rest, with Glass/Tile |
| surface/hover | --glass-hover | #FFFFFF 6% | Hover on glass pills and rows |
| surface/selected | --glass-selected | #FFFFFF 10% | Dock bubble, switches, pressed glass |
| surface/subtle | --surface-subtle | #FFFFFF 4% | Chips, meters, skeletons |
| surface/raised | --color-raised | #151920 | Menus, modals, raised tags |
| surface/inverse | --color-cta | #EEF0F3 | Primary button, active chip |
| surface/inverse-pressed | --color-cta-pressed | #D1D5DB | Primary button pressed |
| surface/bubble | --color-bubble | #FFFFFF | Speech bubble |
| surface/scrim | --scrim | #090B0E 72% | Behind modals and the lightbox |
| surface/note | --note-bg | #F5B840 16% | To confirm notes (preview only) |
| surface/danger | --danger-bg | #FF7A7A 12% | Error alerts |
| surface/success | --success-bg | #7EE0A1 12% | Success alerts |
| text/primary | --color-ink | #EEF0F3 | Main text and icons |
| text/secondary | --color-ink-2 | #9AA1AC | Leads, descriptions |
| text/tertiary | --color-ink-3 | #7D8592 | Timestamps, counters. Was #6B7280 (below AA at 13px) |
| text/muted | --color-muted | #FFFFFF 50% | Meta, placeholders |
| text/inverse | --color-cta-ink | #11141A | On light fills |
| text/on-bubble | --color-bubble-ink | #0D1015 | On the bubble |
| text/note | --color-note | #FAC759 | To confirm text |
| text/danger | --color-danger | #FF7A7A | Errors |
| text/success | --color-success | #7EE0A1 | Success |
| border/hairline | --color-hairline | #1A1F27 | Dividers |
| border/strong | --color-strong | #20262F | Strong dividers, chart axes |
| border/rim | --color-rim | #FFFFFF 12% | Field and card rims |
| border/hover | --border-hover | #FFFFFF 20% | Rim on hover |
| border/focus | --border-focus | #FFFFFF 45% | Field rim on focus |
| border/focus-ring | --focus-ring | #EEF0F3 85% | Keyboard outline, 2px, 3px offset |
| border/note | --note-border | #F5B840 | Note rim |
| border/danger | --danger-border | #FF7A7A | Error rim |
| effect/glow | --glow | #FFECD6 | Primary button glow |
| chart/bar | --chart-bar | #9AA1AC | Chart bars |
| chart/bar-current | --chart-bar-current | #EEF0F3 | Today |
| chart/grid | --chart-grid | #1A1F27 | Grid lines |
| chart/meter | --chart-meter | #FFFFFF 8% | Share bars on Stats lists |

### Responsive (Desktop / Tablet / Mobile)

| Token | CSS | D | T | M |
|---|---|---|---|---|
| layout/viewport | --viewport | 1440 | 768 | 390 |
| layout/column | --column | 700 | 700 | 358 |
| layout/gutter | --gutter | 16 | 16 | 16 |
| layout/stack-gap | --stack-gap | 8 | 8 | 8 |
| layout/page-top | --page-top | 22 | 22 | 8 |
| layout/page-bottom | --dock-space | 160 | 160 | 120 |
| card/padding-x | --card-px | 48 | 48 | 22 |
| card/padding-y | --card-py | 48 | 48 | 28 |
| card/radius | --radius-card | 40 | 40 | 32 |
| card/gap-2xl, xl, lg, md, sm, xs | --card-gap-* | 40, 32, 24, 20, 12, 8 | same | 32, 28, 20, 16, 12, 8 |
| control/height | --control-h | 64 | 64 | 56 |
| control/height-sm | --control-h-sm | 48 | 48 | 48 |
| control/padding-x | --control-px | 28 | 28 | 22 |
| tile/size | --tile | 72 | 72 | 60 |
| tile/radius | --tile-radius | 24 | 24 | 20 |
| chip/height | --chip-h | 32 | 32 | 40 |
| font sizes | --fs-* | see section 5 | | |

### Typography, spacing, radius

- Typography: font/serif = Newsreader (--font-serif), font/sans = Plus Jakarta Sans (--font-sans).
- Space: a 4px grid, space/0 to space/160 (--space-N).
- Radius: xs 6, sm 10, md 14, lg 20, xl 28, control 16, pill 24, full 999 (--radius-*). Cards use card/radius, tiles use tile/radius.

## 5. Type scale

| Style | Font | Desktop / Tablet / Mobile | Line, tracking | Code today |
|---|---|---|---|---|
| Display/Title | Newsreader 400 | 60 / 60 / 42 | 104%, -1.5% | .t-title |
| Display/Large | Newsreader 400 | 52 / 52 / 40 | 108%, -1% | big figures, prices |
| Display/Card | Newsreader 400 | 36 / 36 / 30 | 112%, -1% | .t-card |
| Display/Number | Newsreader 400 | 32 / 32 / 28 | 116%, -0.5% | .t-serif-m |
| Display/Small | Newsreader 400 | 22 | 130% | .t-serif-s |
| Body/L | Jakarta 400 | 18 / 18 / 17 | 150% | .t-lead |
| Body/M | Jakarta 400 | 16 | 150% | fields, answers |
| Body/S | Jakarta 400 | 15 | 150% | helper, rows |
| Body/XS | Jakarta 400 | 13 | 150% | fine print |
| Label/L | Jakarta 500 | 18 / 18 / 17 | 150% | .section-label, .action-pill |
| Label/M | Jakarta 500 | 16 | 150% | .t-meta, .glass-pill (S) |
| Label/S | Jakarta 500 | 15 | 140% | clock, footer links |
| Label/XS | Jakarta 500 | 13 | 140% | .tag, .chip, .t-small |
| Label/Eyebrow | Jakarta 500 | 13, caps | 140%, +6% | .t-eyebrow |
| Data/Stat | Jakarta 600 | 34 / 34 / 30 | 120%, -1% | Stats tiles |

## 6. Effects

| Style | What it is |
|---|---|
| Glass/Card | Inner glow 40px white 15%, background blur 16 (.glass-card) |
| Glass/Nav | Inner glow 24px white 20%, blur 16 (dock, Button tiles, toasts) |
| Glass/Tile | Inner glow 16px white 10% (.tile, .glass-pill) |
| Glass/Tile hover | Inner glow 22px white 20% |
| Glass/Bubble | Inner glow 8px white 15% |
| Glass/Primary glow | Rim highlights plus the warm glow (.action-pill). Animated in code |
| Glass/Primary glow hover | Wider, warmer glow |
| Focus/Field | 1px rim 45% white inside plus a 4px soft ring |
| Elevation/Overlay | Modals and menus |

Motion stays as built: ease-soft cubic-bezier(0.22, 1, 0.36, 1), ease-swift cubic-bezier(0.32, 0.72, 0, 1), 0.9s reveals, the 4.2s glow breathe and 5.5s rim, 0.97 press, 300ms tooltip delay, a 2.4s toast, and nothing moving under reduced motion.

## 7. Components

| Group | Components and states |
|---|---|
| Actions | Action pill (L, M × Default, Hover, Pressed, Focus, Disabled, Loading) · Glass pill (L, S × Default, Hover, Pressed, Focus, Disabled) · Icon tile (Decorative L; Button L and M × Default, Hover, Focus) · Filter chip (Default, Hover, Active, Focus) · Track switch (4 actives × Desktop, Mobile scroll) · Expand button · Sound toggle (On in every Dock variant, row 51) |
| Navigation | Top bar (Visitor, Owner × Desktop, Mobile) · Visitor clock · Owner chip · Dock (Active Home, Work, Free templates, About, Contact, None × Desktop, Mobile) · Dock item (Default, Hover, Active × sizes) · Tooltip · Footer (Desktop, Mobile) |
| Forms and messages | Field (Text, Textarea, Password × Default, Hover, Focus, Filled, Error, Disabled; helper text) · Select (Single, Multi × Closed, Focus, Filled, Error, Disabled, Open; the menu overlays) · Select option (Multi, Single × Selected × Default, Hover; 44px rows) · Alert (Error, Success, Info, Note) · Toast (Default, Success, Error) |
| Content | Call card (Default, Case) · Next case · Work card (Open and Hover carry no tag and no year; Locked keeps Coming soon or Password, row 81) · Case mini tile · Archive card · Media · Meta cell (value left aligned like its label; My role cards show Client where named, Scope, and Role or Studio; no Type or Year row, row 81) · Decision row · Highlight row · Timeline item · Proof item · Offer card · Package card · Perk level (TEXT property "Reward", the five playbook rewards word for word, row 37) · Template row (Available, Coming soon) · FAQ item · Accordion pill · Tag (Coming soon, Password, Recommended, Label. NDA is deleted; Client and Concept stay only for archived page copy and are never built, rows 60 and 81) · Note/To confirm (design only) · LinkedIn before and after |
| Overlays and data | Modal (Desktop, Mobile sheet) · Cookie banner (Desktop, Mobile) · Empty state · Skeleton · Stat tile · Meter row · Message row |
| Icons | 44 line icons, 24 grid, 1.6 stroke |

## 8. Flows

| Flow | Frames |
|---|---|
| Owner access to Stats | Any page (press G then S, a 1s press on the footer ©, or the /stats bookmark) → Stats · Sign in → Checking → Dashboard (Owner chip on every page) → Log out → Signed out. Also Wrong password, Too many tries |
| Book a call | Book free strategy call → Booking loading → Cal.com month view; fallback when the embed fails; phone bottom sheet |
| Send a message | Contact (Pick one) → role and needs → Sending → Sent; Errors; Too many messages; Sent for recruiters |
| Recruiter case | Ask for my CV → Contact, Recruiter → CV and password by email → /work/private → Unlocked; Wrong password; Too many tries |
| Cookies | Banner after 1.4s → Allow or Only essential → Footer, Cookie settings reopens it |

How only Rez gets into Stats: the page is never linked on the site and it's noindex, with no robots.txt line (row 58), and it asks for STATS_PASSWORD (a Cloudflare Worker secret). The shortcut and the long-press only open /stats; the password still guards it. Eight wrong tries in ten minutes lock it for a while. Signing in sets rk_stats (30 days) and rk_owner (one year, keeps his own visits out of the counts and shows the Owner chip).

## 9. Build checklist

The full list is on the Handoff page (Build checklist). In short:

1. Tokens: CSS custom properties with the names above; --color-ink-3 to #7D8592; the new tokens.
2. Components: Glass pill L label 18px; Action pill states; Button tiles; field labels in text/primary, errors and password show or hide; Select overlay and per-role options; dock active per page and tooltip; Owner chip; footer eyebrows; equal cookie buttons; the new components.
3. Copy: one call name ("Book free strategy call", card title "Need a brand, website or deck that wins clients?" under "Free 20 minute call · Sunday to Thursday", Rez's pick on 22 Oct); "See all work"; track labels All, Brand, Web & UI/UX, Pitch decks; the page-level edits listed on the Handoff page.
4. Flows: Stats sign in states, shortcut and long-press, Owner chip; contact states; recruiter case states; booking loading and fallback; toast; lightbox caption and swipe.
5. New case pages from the new section, as data in `site/src/data/work.ts` plus images.
6. Home "Selected work", set by Rez on 22 Oct: Earworm investor deck, Real estate website, SyncGrid (branding), Yum Yum (branding), in that order.
7. Archive rows (Home and Work), added by Rez on 22 Oct: images in original colour at rest (no grey, no darkening), a black fade on both edges only, auto slide in opposite directions with pause on hover and the Pause tile. Press and drag a row to slide it by hand (pointer and touch, a little inertia, grab and grabbing cursors), then the auto slide carries on from there. Reduced motion: no auto slide, dragging still works.
8. Rez's answers of 22 Oct ([10-confirmations.md](10-confirmations.md)): sound on by default, starting on the first click, so any Figma note that says off is stale (row 51). /linkedin/invite shows the footer on desktop and none on phones, as the frames show (52). robots.txt has no /stats line; /stats is noindex only (58). The offer is "Monthly design support" (49). No NDA card on Work (60). No Taste Labs anywhere (61). No city on About or For agencies (50). No Client, Concept or To confirm tags and no years on Work cards, case meta, Home or share images; Nike Mind keeps "Not affiliated with Nike" (81).

## 10. Open questions for Rez

The Handoff page's questions were answered on 22 Oct in [10-confirmations.md](10-confirmations.md): Stats shortcut kept (row 46), Free templates stay in the dock (47), both "LinkedIn Profile Kit" names kept (48), "Monthly design support" (49), Taste Labs removed (61), NDA card removed (60), SyncGrid's studio line hidden (5), the Pulse "2.3M" image kept (26), Sam's banner on /linkedin (28), invite credits hidden except Sam (29) and the five drafted FAQ answers (39).
