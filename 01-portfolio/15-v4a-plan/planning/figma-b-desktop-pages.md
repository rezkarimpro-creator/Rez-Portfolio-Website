# Figma B · Desktop pages and flows

Status: done · 28 Oct 2026 · Review done 27 Oct; Round 1 fixes and Round 2 changes applied in Figma on 28 Oct (see the last two sections).

[README](README.md) · Draft · 27 Oct 2026 · Read only review of Figma `2PZQVIX9UJO8NqnXNqiNDe`, page ↳ V4a · Pages `10:3`, sections Core pages `82:8362` (4 frames), Service pages `82:9011` (8 frames, LinkedIn invite included) and Other pages and states `82:9285` (27 frames). The recruiter case states sit in Case pages `82:8638` (Figma C's section) and were checked here as a flow only. Nothing in Figma was changed.

## Summary

- 39 frames, 1,558 visible texts. Every text uses a text style (0 unstyled), every page frame is vertical auto layout, the dock's active item matches 09 §1 on all 21 frames that show it, and the copy is clean (no Taste Labs, Dhaka, "need your OK", "deck call", Monthly Design Team). Invite perks, perk levels and "I take on 30 free previews a month." match rows 37 and 38 word for word.
- **Must fix (4):** the Field component's default error line "Add a line about your project." shows as the error on both Wrong password states; Contact · Dropdown open still shows "Prefer a call? · Book free strategy call"; two more plain text designer notes on the recruiter case states; the four unconfirmed invite tiles (row 29) show as plain, detached tiles.
- **Handoff gaps:** no Dev Mode annotations in any of the three sections, no layout grids, 4 prototype links only (Home Selected work to cases), flow starts named "Flow 1" to "Flow 3", no motion or heading notes on the frames.
- **15 lines of 09** (plus a 500 page from 13 §8 and the AI referrers row) have no frame or state, mostly Stats extras, invite form states, Work filter states and the role menu (table below).
- Hygiene: 23 default layer names, about 25 unbound fills (mostly scrims and calendar mocks), 10 leftover hidden layers. All are Claude's fixes in chat A; none needs Rez.

## Findings

Weight: **must** (a word for word build would ship it wrong), **should** (13 checklist or 09 gap), **nice**. Owner: Claude means chat A (Figma ready), unless noted.

### Must fix

| # | Node | Issue | 13 § | Fix | Owner |
|---|---|---|---|---|---|
| M1 | Case · Locked · Wrong password `146:4098`, Stats · Sign in · Wrong password `144:14385` | The error line under the password field reads "Add a line about your project.", the Field component's default helper text. Neither frame shows a real wrong password message | §8, §11 | Write the error line (Rez decides Q1), then set it on both instances | Claude, after Rez |
| M2 | Contact form · Dropdown open `96:3448` | "Prefer a call?" and "Book free strategy call" are visible. 08 §3.4 drops that line and every other form frame hides it | §11 | Delete the row wherever it sits: visible in Dropdown open, hidden in Contact, Errors and 4 other form states | Claude |
| M3 | Case · Locked · Wrong password `146:4098`, Too many tries `146:4144` | Plain text "Which case gets the password is your call", a designer note not built as a Note. 14 review §4 item 3 only named the one on Unlocked `146:4195` | §11, §14 | Turn all three into Note instances (or annotations) so no build copies them | Claude (tell Figma C) |
| M4 | LinkedIn invite `92:2862` and Mobile `93:3126`, Board tiles `101:3634`, `101:3639`, `101:3644`, `101:3649` (and the mobile copies) | Idriss Benbassou, RevPilot, The Venture GrowthHub and "Python developer" show as normal tiles. Row 29 keeps them hidden until Rez confirms. They are also detached frames with default "Text" layers, the only detached instances in scope | §7, §11 | Rebuild as Case mini tile instances and mark them "Hidden until confirmed (row 29)" with a Note or annotation | Claude (Rez decides Q3) |

### Should fix

| # | Node | Issue | 13 § | Fix | Owner |
|---|---|---|---|---|---|
| S1 | All 39 frames | 0 Dev Mode annotations. Links, behaviour, data limits and heading levels live only in 08 and 09 | §10, §14, §13 | Lean annotations that point to the 09 line instead of copying it: one per interactive block (where it links, what it does), plus a heading map per page. Keep facts in one home | Claude |
| S2 | Page `10:3` prototype | 4 reactions in scope (Home Work cards to `82:8639`, `82:8700`, `82:8844`, `172:17340`). Flow starts are "Flow 1" (Home), "Flow 2" (Tablet), "Flow 3" (Mobile). None of the 7 flows is wired | §10 | Name the starts after the flows and wire Contact, Booking, Stats sign in, Recruiter case, Cookies, Email copied, Invite form (desktop) | Claude |
| S3 | All 21 page frames | No headings noted. Each page has one Display/Title text (a clean H1), but section titles use Display/Card, Display/Small and label styles, so H2 and H3 aren't clear | §13 | Heading annotation per page (H1 to H3). The overlay states repeat the Home or Contact H1 behind the scrim, which is fine | Claude |
| S4 | All 21 page frames | No motion notes on any frame (reveals, archive marquee, accordion, modal and sheet open and close, slider, toast) | §10 | One Motion annotation per template linking to 07 §5.6 and the component descriptions, with the reduced motion fallback | Claude |
| S5 | All 39 frames | No layout grid on any frame | §3 | Add the container grid (columns, gutter, margin) from the Responsive collection to each 1440 frame | Claude (with Figma A's tokens) |
| S6 | About 25 nodes | Unbound solid fills: Home `82:8370`, `82:8371`; Contact Cal.com mock `82:9303` and day cells; Booking Dim `82:9905`, `147:14423`, `147:14530` and the modal mocks `82:9906`, `147:14424`, `147:14531` plus day cells; Lightbox frame `82:9884`; Package cards `92:3110`, `92:3123`, `93:3178`, `93:3180` | §4 | Bind Dim to `scrim`, modals and mocks to the surface tokens, Package cards to their component tokens | Claude |
| S7 | 23 layers | Default names: Home `Frame 2` `82:8370`, `Ellipse 1` `82:8371`; About `Frame 3` `82:9447` and 4 × `Text`; Career 6 × `Text` (`82:8587` and siblings); Service · LinkedIn 2 × `Rectangle` (`207:8417`, `207:8418`); invite tiles 4 × `Text` per frame | §2 | Name by role (`glow`, `portrait/frame`, `award/org`, `banner/before`) | Claude |
| S8 | 10 hidden layers | Work `Back` (08: no Back tile); Contact and Errors `Prefer a call`; 4 form states hide `Book free strategy call`; Lightbox `1 / 6` (old caption); Home `Portrait`, `Expand button` | §2 | Delete leftovers; keep only hidden layers that show a state, named for it | Claude |
| S9 | Work `82:8477` | No Pause tile on the Work archive rows. "Pause motion" exists only in Home's archive header (`141:3904`) and on Mobile and Tablet. 09 §3 asks for it on Home and Work | §8 | Add the same header row to Work, or note that Work reuses Home's | Claude |
| S10 | LinkedIn invite `93:3126` | The Mobile invite frame sits in the desktop Service pages section | §1 | Move it to Mobile (390) `148:4804`; ids stay the same | Claude (tell Figma D) |
| S11 | Free templates, Work with me, For agencies, Privacy, invite pages | Product names carry hyphens in visible copy: "10-Slide Story Deck", "21-Day Brand & Website Launch", "72-Hour Deck Rescue". Colons show only in sample times and the clock, which is fine | §11 | Rez decides Q2 | Rez |

### Nice

| # | Node | Issue | Fix |
|---|---|---|---|
| N1 | All frames | Names read "V4a · Home", not "Home / Desktop 1440" (13 §2). 06, 08 and 09 cite these names | Keep them. The section and the Mobile and Tablet frames carry the breakpoint; renaming would break the docs for no build gain |
| N2 | Overlay states `82:9866`, `82:9884`, `82:9890`, `147:14408`, `147:14515`, `147:14638` | Absolute layout (backdrop page plus overlay), on purpose | One annotation each: "Overlay over any page, absolute by design" |
| N3 | Stats `82:9702` | "Sample numbers" Note and the "Berlin" clock are sample data | Fine as is (Settled earlier row in 10) |
| N4 | Free templates `82:9538`, `82:9540`, `82:9547`, `82:9549` | Four Note/To confirm instances (rows 31, 32) | Fine: named Notes the build skips |

### What is solid

| Check | Result |
|---|---|
| Text styles | 1,558 of 1,558 visible texts use a style |
| Auto layout | Every page and state frame is vertical auto layout; only backdrops, marquee rows, the Stats plot and overlay frames are absolute, all on purpose |
| Detached instances | Only the 4 invite board tiles (M4) |
| Dock per page (09 §1) | Home, Work, Work on all 5 services, About on Career and About, Free templates, Contact on Contact, Work with me and For agencies, None on Privacy, 404 and Stats, no dock on the invite page |
| Footer | Desktop invite page shows it, mobile does not (row 52) |
| Copy against 10 | Rows 33, 36, 37, 38, 43, 49, 50, 61 applied; Strategy call title in all booking states; "Times show in your own time zone." present |
| Flows drawn | Stats sign in (Sign in, Checking, Wrong password, Too many tries, Signed out, Dashboard with Owner chip and Log out), Contact (Dropdown open, Recruiter picked, Agency picked, Errors with text lines, Sending, Too many messages, Sent, Sent recruiter), Booking (modal, loading, fallback), Cookies, Email copied, Lightbox ("Earworm investor deck · 2 of 7"), Recruiter case (Locked `82:8992`, Wrong password, Too many tries, Unlocked with Lock again), Invite (slider handle 44px, form, thanks) |
| States in frames | Home services accordion one open, Work with me first FAQ open, Career roles open and closed, Career Show less, Work filter Active, On request 2 by 2 with Full case for recruiters |
| Errors not colour only | Contact and Stats errors carry text lines |

### 09 lines with no frame or state

Mobile and Tablet are Figma D's; cases are Figma C's. This covers the desktop design only.

| 09 § | Line | What is missing | Proposed frame or note | Weight |
|---|---|---|---|---|
| §1 | Clock: unknown zones show the globe | No globe state | Check the Top bar component (Figma A); else one variant | Nice |
| §2 | Close with X, Esc, scrim; focus returns | Behaviour only | Annotation on `82:9890` | Should |
| §3 Home | Track switch filters highlights | Only "All" drawn on Home; Career has the Pitch decks pattern (`82:8629`) | Annotation pointing to `82:8629` | Nice |
| §3 Work | Filter change and the empty state | No filtered state, no empty state | "Work · Filter Social" and "Work · Empty state" (Empty state component exists) | Should |
| §3 Archive | Pause tile on Work | Missing (S9) | Add to Work | Should |
| §3 Archive | A click without a drag shows the name | No state in the page frames | Check Archive card states (Figma A) | Nice |
| §3 Invite | FAQ open with the five approved answers (row 39) | All five items closed; the answers are not in Figma | "LinkedIn invite · FAQ open" with answer 1 open, all five answers in the component text | Should |
| §3 Invite | Only Sam's Recent work tile shows until confirmed (row 29) | All five tiles show | M4 | Must |
| §3 Invite | The form validates and sends | Only the thanks state `93:3111` | "Invite form · Errors" and "Invite form · Sending" | Should |
| §3 Career | Show more and Show less | Only the open (Show less) state | Annotation, or a collapsed variant | Nice |
| §4 | "I'm reaching out as" menu open | Only the "What do you need?" menu is drawn open | "Contact form · Role menu open" | Should |
| §4 | Sent state per role | Sent (founder) and Sent (recruiter); no agency | Note that agency uses the founder Sent, or a third frame | Nice |
| §5 | Chart hover tooltip and table view | "Show as table" link with no table state; no tooltip | "Stats · Chart tooltip" and "Stats · Table view" | Should |
| §5 | Cookie choices list | Not on the dashboard (tiles, chart, Top pages, sources, countries, devices, messages only) | Add a Cookie choices list | Should |
| §5 | Empty states | No "no data yet" dashboard | "Stats · Empty" | Should |
| 13 §8 | 500 and error screens | Only 404 | "V4a · Error" on the 404 template ("Something broke on my side" style copy, Rez OKs) | Should |
| Plan §6 | AI referrers grouped in Stats (chat B) | Not designed | A grouped row in "Where visits come from" | Should |

## Rez decides

| # | Question | Options (recommended first) |
|---|---|---|
| Q1 | The wrong password line on the recruiter case and on Stats (now a leaked placeholder) | (a) Case: "That password didn't work. Try again, or ask for my CV." Stats: "Wrong password. Try again." (Recommended) · (b) One shared line for both: "Wrong password. Try again." · (c) Your own words |
| Q2 | Hyphens in product names ("10-Slide Story Deck", "21-Day Brand & Website Launch", "72-Hour Deck Rescue") | (a) Keep them: they are product names, and Gumroad and the playbook use them (Recommended) · (b) Drop the hyphens everywhere ("10 Slide Story Deck") |
| Q3 | The four unconfirmed invite tiles (Idriss Benbassou, RevPilot, The Venture GrowthHub, Python developer) | (a) Keep them in Figma, marked hidden until you confirm; the build hides them behind a flag (Recommended) · (b) Confirm the credits now so they go live · (c) Remove them from Figma and the build |
| Q4 | The missing states (table above) and the 500 page | (a) Claude draws them in chat A from existing components; you see the new copy in the Figma list (Recommended) · (b) Build them from the components without frames |

## For other tracks

| Track | Note |
|---|---|
| Figma A | The Field component's error helper defaults to "Add a line about your project.", which leaked into two error states (M1). Make the error text a text property with an obvious placeholder (for example "Error text") or empty default. Check the Top bar globe state, Archive card name on click, Tooltip for the chart, Empty state for Stats and Work |
| Figma C | M3: the notes on `146:4098` and `146:4144` in your section, plus M1's copy on `146:4098` |
| Figma D | Move `93:3126` to Mobile (S10). Mobile versions of any new states from the table (Invite form errors, Stats empty). Rename the flow starts. The Handoff flows map can cite the ids in "Flows drawn" above |
| SEO | The contact form in Figma has role, needs, name, email, company (optional), message. Any new field (budget, timeline) needs new frames in chat A and Rez's OK. The invite form has 4 questions then details |
| Security | Stats sign in shows "press G then S" on an unlinked, noindex page; fine. Keep the wrong password line generic (Q1 does). "Too many tries. Wait 10 minutes" matches the 8 in 10 minutes lockout |
| Practices | Heading map per page comes from S3. Errors use text, not colour only. Every icon only button still needs a label check on the Design system page (Figma A) |
| Coordinator | 14 review §4 item 6 (Bangladesh, BASIS and RUET on Career and About) is still in the frames; not repeated in Rez decides here |

## For the build chats

| Chat | Must do |
|---|---|
| A · Figma ready | M1 to M4 after Rez's answers, then S1 to S10 and the missing states table; name a version "Handoff v1" when done |
| F · Foundation | Field and Alert take error text from props, never a default sentence; `ChromeGate` per 08 §3.5 (no dock on the invite page, no footer on phones) |
| B · App and data | Build from the flow ids in "Flows drawn". Skip every Note and the "Which case gets the password" lines. Use Q1's copy. No "Prefer a call?" line on the form. Stats adds cookie choices, AI referrers, tooltip, table view and empty states from chat A's frames |
| C · Cases and images | Lightbox caption "Case name · n of N" (`82:9884`), not the hidden "1 / 6" |
| D · Pages | Dock map as verified above. Work has no Back tile and gets the Pause tile. The invite tiles in M4 sit behind a flag (row 29). Invite FAQ answers come word for word from 10 row 39, not from Figma. Invite form error and sending states from chat A |
| E · Search and templates | Use the heading map (S3) for page outlines; nothing else from this section |
| W · Content | Nothing |
| R · Review | Design QA against the frame ids in this file; search the built HTML for "Add a line about your project", "Prefer a call", "your call" and "To confirm" |

## Sources

| Source | Read |
|---|---|
| Figma `2PZQVIX9UJO8NqnXNqiNDe`, page `10:3`, sections `82:8362`, `82:9011`, `82:9285`, plus `82:8992`, `146:4098`, `146:4144`, `146:4195`, `159:17130` | 27 Oct 2026, read only (`use_figma`, 7 calls) |
| [13-figma-handoff.md](../../13-figma-handoff.md) §2, §3, §8, §10, §11, §13, §14 | 27 Oct 2026 |
| [09-functional-checklist.md](../../09-functional-checklist.md) §1 to §5 | 27 Oct 2026 |
| [10-confirmations.md](../../10-confirmations.md), [08-build-plan.md](../../08-build-plan.md) §3, [14-pre-build-review.md](../../14-pre-build-review.md), [../README.md](../README.md) §6 | 27 Oct 2026 |

## Fixes applied (27 Oct)

Run on 28 Oct 2026, after Rez allowed Figma edits in this session. Only sections `82:8362`, `82:9011` and `82:9285` on `10:3` changed; no main component was edited. Every change was checked with a screenshot.

| Finding | Done | Node ids | Note |
|---|---|---|---|
| M2 | Done | Deleted the "Prefer a call" row from 7 form frames: `82:9416`, `96:3461`, `96:3381`, `96:3419`, `146:4253`, `146:4379`, `146:4454` | Its hidden "Book free strategy call" child went with it |
| M4 | Done | Recent work tiles `281:10709`, `281:10713`, `281:10717`, `281:10721` (desktop), `281:10725`, `281:10729`, `281:10733`, `281:10737` (mobile), Case mini tile instances, text unchanged. Notes "Hidden until Rez confirms (row 29)" `281:10741`, `281:10743` | The cover ratio is locked in the Case mini tile component and an instance can't override it, so the four tiles now form an even 2 by 2 grid instead of the masonry. Images are cropped to fill. Figma A could add a Tall variant if Rez wants the masonry back |
| S8 | Done | Deleted Portrait `82:8372`, Expand button `82:8419`, Work Back `82:8483`, Lightbox "1 / 6" `82:9886` | No other loose hidden layers left in the three sections |
| S7 | Done | Avatar `82:8370`, Avatar backdrop `82:8371`, Portrait crop `82:9447`, Award text ×6, Course text ×2, Body ×2 (`82:9509`, `82:8616`), Featured card 1 and 2 (`207:8417`, `207:8418`) | The 8 invite `Text` frames went away with M4 |
| S6 | Done | Dim ×3 to `surface/scrim`; Cal.com modal mocks ×3 to `surface/raised`; Contact Cal.com embed `82:9303` to `surface/glass-card` at 70% (keeps the old 28% black); 12 day cells to `surface/selected`; selected day `82:9962` and Avatar to `surface/bubble`; Lightbox `82:9884` to `page/background` at 92% | Day cells were white 14%, now white 10%. Package cards (fill comes from main `89:210`) and the avatar's blue backdrop (no token) stay for Figma A |
| S9 | Done | Work Header row `282:10735`: Work's Header plus a Pause motion tile `282:10743`, same as Home `141:3903` | |
| S5 | Done | One centred column of 700 px, bound to `layout/column`, on all 24 frames at 1440 | |
| S2 | Done | 27 prototype links. Flow starts: Desktop · Browse and book a call (`82:8363`), Contact · Send a message and copy email (`82:9286`), Stats · Owner sign in (`144:14107`), Cookies · First visit (`82:9866`), LinkedIn invite · Claim your preview (`92:2862`), Tablet · Browse the site, Mobile · Browse the site. Figma C's recruiter case start kept | Timed steps: Email copied back to Contact after 2 s, Sending to Sent after 1.5 s, Booking loading to modal after 1.2 s, Checking to dashboard after 1 s, invite Sending to thanks after 1.5 s |
| S1, S3, S4, N2 | Done | About 100 annotations. Every page frame has a heading map (Accessibility) and a motion note with its reduced motion fallback (Development, 07 §5.6 and 06 §6). Each interactive block has an Interaction note naming its 09 line. The 6 overlay states say "Overlay over any page, absolute by design" | Top bar, Dock and Footer are annotated once, on Home |
| M1 | Done in Round 2 (decision 31) | | |
| S10 | Not mine | `93:3126` was moved by Figma D | |

## Round 2 (27 Oct)

Done on 28 Oct 2026 from Rez's answers in [../for-rez.md](../for-rez.md). Every new line is marked "Copy to confirm (Rez)" with a Note, or in its annotation where a Note would sit in the layout.

| Decision | Done | Node ids | Note |
|---|---|---|---|
| 31 | Done | Stats Wrong password field `144:14391` error text now "Wrong password. Try again." | Figma C sets the recruiter case line |
| 39 | Done | Career: "Bangladesh" `82:8594` deleted, `82:8599` now "BASIS". About: `82:9501` deleted, `82:9506` now "BASIS" | RUET kept. Mobile and Tablet copies belong to Figma D |
| 12 | Done | About Bio: "I'm Rezaul Karim, and online I go by RezBloom on LinkedIn, Behance, Dribbble and Instagram." `287:10738`, Note `287:10739` | All four handles are rezbloom (10, profile table) |
| 32 · Work | Done | Work · Filter Social `289:10814`, Work · Empty state `289:10961` | Today only Pulse is tagged Social in the site data; chat C decides YumYum's tags. Empty copy: "No cases here yet" and "Try another filter, or see all my work." |
| 32 · Contact | Done | Contact form · Role menu open `289:11026`. Agency Sent: an annotation on Sent `82:9855` says Founder and Agency share it | |
| 32 · Stats | Done | Tooltip was already drawn (`144:3943`, "20 Oct · 31 views"). New: AI assistants row `290:10904` in Where visits come from; Cookie choices list `290:10908` (Allow, Only essential, No choice yet); Views per day · Table `290:10933` with values read off the chart; Dashboard · Empty `290:11037` | All numbers are sample data. Empty copy: "No visits yet", "Counts start with the first visit.", "No views yet", "Nothing yet" |
| 32 · Invite | Done | Form · Errors `291:10997` (Name, Email, LinkedIn URL), Form · Sending `291:11092` (wired to thanks) | New line: "Add your LinkedIn link, so I can design from it." |
| 32 · 500 | Done | V4a · 500 `291:11160` on the 404 template | "Something went wrong on my side." and "Try again in a minute. The work and the contact page are one click away." |
| 30 | Done | V4a · Accessibility `291:11249` on the Privacy template: What I aim for, How I check it, Known gaps, Tell me about a problem | Noindex and the footer link are in its annotation. The Footer component needs an Accessibility link (Figma A). "How I check it" must match what chat R really tests. The header icon is still Privacy's lock |
| 10 | Done | Timeline and Budget chip rows (Chip group `262:649`, Picked No) after "What do you need?" on Contact (`287:10741`, `287:10753`), Dropdown open (`287:10767`, `287:10779`), Errors (`287:10793`, `287:10805`); Role menu open has them from its clone | Founder or team only (seo §6.1), so not on the Recruiter, Agency, Sending or Too many messages states. Budget copy approved (decision 46) |

**Rez checks:** the new copy above (Work empty, Stats empty and Cookie choices labels, invite LinkedIn error, 500, the Accessibility page and the RezBloom line), and the even grid of the four hidden invite tiles.

**For Figma A:** Package card fill, avatar backdrop token, an Accessibility link in the Footer, and a taller ratio option for Case mini tile if the masonry should come back.
