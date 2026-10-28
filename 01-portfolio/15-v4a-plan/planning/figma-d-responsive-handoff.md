# Figma D · Responsive, structure and handoff
Status: done · 27 Oct 2026 · Every doc id still resolves and the responsive set is sound, but the Handoff page, the page order and the two copy pages need a tidy before the file counts as handed off.

[Planning README](README.md) · Draft · 27 Oct 2026 · Read only review of Figma file `2PZQVIX9UJO8NqnXNqiNDe` against [13-figma-handoff.md](../../13-figma-handoff.md) §1, §9, §15 and §16. Nothing in Figma was edited.

## Summary

- **Node ids (fact):** all 133 unique ids named in [08-build-plan.md](../../08-build-plan.md) resolve, with the names the docs give them. 06 and 09 name no node ids. There are 4 label slips and 5 missing ids (§5).
- **Responsive (fact):** Mobile (390) has 18 frames covering every page template, plus the LinkedIn invite's own mobile frame. Tablet (768) has 4 frames. Every desktop page is one column of 700px or less, so the tablet frames match desktop exactly (same heights). The one gap is the 880px booking modal at 768.
- **Touch targets (fact):** controls on mobile are 48 to 60px, apart from Filter chips (40px tall, by design), the Owner chip (80 by 32) and footer links (24px text rows). That clashes with 13 §9 and 09 §8 (44px).
- **Handoff page (fact):** has Start here, Page index (43 working links), Site map, Flows (5 flows, 19 working links), Build checklist and Open questions. It has no changelog, token table, contact line or owners. The index and site map stop at the 7 original cases, so the 14 new cases are missing.
- **Structure (fact):** there's no real Cover page (page 1 holds a single image). Legacy pages sit above the `----` divider. Two copy pages repeat the live section and frame names. Ready for dev status, named versions and branches can't be read through the Plugin API, so Chat A checks them in the Figma app.

## Findings

Weight: must (blocks a clean handoff), should, nice. Owner: Claude (Chat A) unless marked Rez.

### 1. File and pages (13 §1)

Page order today:

| # | Page | id | Holds |
|---|---|---|---|
| 0 | Rez website | `0:1` | One image, 2560 by 2650 (`1:3`). Nothing else |
| 1 | ↳ V4a · Pages (live design) | `10:3` | 12 sections plus "Read me · V4a pages" `159:17130` |
| 2 | ↳ V4a · Design system | `114:13313` | System (Figma A) |
| 3 | ↳ V4a · Handoff | `114:13314` | 6 frames (§3 below) |
| 4 | ↳ V2 · legacy | `13:2` | `24:2` V2 Home, section "V0" `82:8361` (10 frames) |
| 5 | ↳ V3 · legacy | `13:3` | `26:2` V3 Home |
| 6 | ↳ Components · legacy (V1 to V4) | `13:4` | 98 components, "Assets · V4a" `38:137` (71 children), "Assets · LinkedIn invite" `86:181` |
| 7 | ---- | `10:2` | Divider |
| 8 | Mobbin | `1:5` | "Portfolio refs · Moodboard" `3:15` |
| 9 | ↳ Copy V4a · Pages Archive | `196:12120` | Full copy of `10:3` (134 frames, same names), plus "Section 1" `228:23375` with the dropped Services bento proposal `228:23376` |
| 10 | Copy | `58:4743` | V1 and V4 frames and older V4a sections in "Section 1" `58:10224`; old V4a sections `83:21196`, `83:21472`, `83:21845`; "V4a · Built pages" `83:22119`; "Superseded 22 Oct 2026" `150:17680` (`82:9986`, `82:10023`) |

| # | Finding | 13 § | Weight | Fix |
|---|---|---|---|---|
| 1.1 | No Cover page. Page `0:1` holds only an image, with no project name, status, owner, date or link | §1 | must | Turn `0:1` into "Cover": the image plus name, status, owner (Rez), last update and the file link. Set it as the file thumbnail |
| 1.2 | Page order is Pages, Design system, Handoff, then the legacy pages above the divider | §1 | should | Order: Cover, Handoff, Pages, Design system, `----`, then the archive pages (Copy V4a · Pages Archive, Copy, V2, V3, Components legacy) and the references (Mobbin) |
| 1.3 | The archive page `196:12120` repeats every live section and frame name (for example "V4a · Core pages", "V4a · Home"). A name search, Dev Mode or an MCP lookup by name can land on the copy. It also lacks the Nike Mind assets section, so it's already out of date | §1 | must | Rename the page "Archive · V4a pages copy (22 Oct)", prefix its sections with "Archive ·" and add a note frame saying "Not the live design", or delete it (Rez decides, Q1) |
| 1.4 | The Copy page `58:4743` also holds sections named "V4a · Core pages", "V4a · Case pages" and "V4a · Service pages" | §1 | should | Prefix them with "Old ·", or move them into "Superseded 22 Oct 2026" |
| 1.5 | The dropped Services bento proposal still sits on the archive page in an unnamed "Section 1" | §1 | nice | Name the section "Dropped 22 Oct (Rez)", or delete it with the page |
| 1.6 | Legacy pages are clean of live use: the 2,604 instances on `10:3` come from the Design system (2,588) and the page's own Nike Mind cover component (16). None come from `13:4` | §1 | solid | None |
| 1.7 | "Assets · V4a" `38:137` and "Assets · LinkedIn invite" `86:181` sit on the legacy components page. If any live image's source lives only there, a later cleanup could lose it | §1 | should | Figma C confirms the sources. If they're used, move them to an assets section on `10:3` |
| 1.8 | Live frames all sit in named Sections. No stray top level frames on `10:3` apart from the Read me frame (intended) | §1 | solid | None |
| 1.9 | Ready for dev marks, named versions and open branches can't be read through the Plugin API (`devStatus` is unsupported). Start here says "After his OK, mark the V4a sections R[eady for dev]", so none are expected yet | §1 | must | Chat A, in the Figma app: mark each live section Ready for dev after Rez's yes, save a named version "Handoff v1, <date>", and merge or close any branches |
| 1.10 | 06 §1's page table leaves out page `0:1`, Mobbin, the divider and the archive copy page, and it describes Copy as superseded frames only | — | should | Chat A updates 06 §1 after 1.1 to 1.4 |

### 2. Responsive (13 §9)

**Coverage per template.** Mobile mode is set on all 18 mobile frames, Tablet on all 4 tablet frames and Desktop on every desktop frame (fact).

| Template or page | Desktop | Mobile 390 | Tablet 768 | Covered? |
|---|---|---|---|---|
| Home | `82:8363` | `149:4630` | `150:16628` | Yes |
| Work | `82:8477` | `149:5035` | `150:16826` | Yes |
| Case (21 pages: 7 original, 14 new) | `82:8639` and 20 more | `149:15858` (Earworm only) | `150:16983` (Earworm only) | Through the template, if the new cases use the same blocks (Figma C checks) |
| Case · Locked and its 3 states | `82:8992`, `146:4098`, `146:4144`, `146:4195` | `149:16081` (default only) | none | The states are 860px cards that reuse Mobile mode. A note is needed |
| Service (5 pages) | `82:9012` and 4 more | `149:16257` (Brand identity) | none | Through the template |
| LinkedIn invite and Form thanks | `92:2862`, `93:3111` | `93:3126` (no thanks state) | none | Mostly. The phone thanks state isn't drawn |
| Career and the Pitch decks track | `82:8552`, `82:8629` | `149:5387` | none | Yes (Track switch has a Mobile scroll variant) |
| Contact and 8 form states | `82:9286` and 8 cards at 860 | `149:16493` (default only) | `150:17116` | States reuse the cards. The phone Dropdown open isn't drawn |
| About, Free templates, Work with me, For agencies, Privacy, 404 | `82:9439`, `82:9522`, `82:9560`, `82:9612`, `82:9658`, `82:9687` | `149:16821`, `149:17063`, `149:17268`, `149:17529`, `149:17740`, `149:17902` | none | Yes on mobile |
| Stats sign in, 4 states, dashboard | `144:14107` and 4 cards, `82:9702` | `149:18053`, `149:18212` | none | Yes. The states reuse the cards |
| Booking modal, loading, fallback | `82:9890`, `147:14408`, `147:14515` | `150:6388` (sheet) | none | The 880px modal at 640 to 1023 has no rule (2.3) |
| Cookie banner | `82:9866` | `150:6429` | none | Yes |
| Lightbox | `82:9884` | `150:6502` | none | Yes |
| Email copied toast | `147:14638` | none | none | No phone frame (page index says "—") |
| New templates (blog, Hire, Industry, Deliverable; 15-v4a-plan §6 E) | none | none | none | Not designed yet. Chat A draws them at all three sizes |

| # | Finding | 13 § | Weight | Fix |
|---|---|---|---|---|
| 2.1 | Every desktop page is one column of 700px or less (fact: the widest content block on every 1440 frame is 700px or less, except the booking modal). The 4 tablet frames are exactly as tall as their desktop frames. So Tablet is the desktop column in a 768 viewport, which matches 06 §3 | §9 | solid | Write it as the rule on the Handoff page: "Tablet (640 to 1023) = the desktop column, centred, Desktop values. No tablet frames beyond these 4." That counts as "the agreed set" in 13 §9 (Rez decides, Q2) |
| 2.2 | No notes on what changes between breakpoints, apart from Start here "Modes", the Read me frame and 06 §3. No Dev Mode annotations exist (0 annotated nodes in Mobile or Tablet). Mobile changes such as the hidden city in the clock (09 §1), the footer © long press, lightbox swipe and the cookie banner above the dock are spread over 09 and the build checklist | §9 | must | Chat A adds a "Breakpoints" frame on Handoff: the 06 §3 table plus one line per change (stacking, hidden items, dock, sheets, sticky CTA, swipe, long press) |
| 2.3 | The booking modal is 880px wide. At 640 to 1023 it doesn't fit, and the sheet is drawn only for phones | §9 | must | Rule: the sheet below 640, and a modal of min(880px, 100vw minus 48px) from 640 up. Chat A adds it to the modal's description; Chat B builds it |
| 2.4 | Phone states not drawn: Email copied toast, Contact Dropdown open (the menu floats over the form), LinkedIn invite Form thanks. The states drawn as 860 cards (Contact form, Case locked, Stats sign in) have no note saying they reuse Mobile mode on phones | §9 | should | Draw the three phone states, or add one note per card group: "Same card on phones, Mobile mode" |
| 2.5 | Touch targets. Most controls on mobile pass (Action pill 48 and 56, Glass pill 48 and 56, Icon tile 48 and 60, Dock item 48, Sound toggle 48, Fields and Select 90 tall, FAQ 85). Under 44: Filter chip 40 tall (5 on Work `149:5035`), Owner chip 80 by 32 (`149:18212`), footer links as 24px text rows (`149:4737`) | §9 | must | Filter chips stay 40px to the eye with a 44px hit area (padding or a pseudo element). The Owner chip grows to 44 or gets the same hit area. Footer link rows get 44px hit areas. The build checklist's "Filter chips are 40px tall on phones" gets "with a 44px hit area" added. Chats D and F build it |
| 2.6 | Sticky and sheet states. The dock isn't set to Fixed scroll behaviour in any mobile frame, so prototypes and Dev Mode don't show it as sticky. The LinkedIn invite has "Sticky CTA" and "Sticky fade" layers in one state only, while 09 says it shows after the hero and hides near the form. The booking sheet and cookie banner are drawn open; closed is the page itself | §9 | should | Set the dock and the sticky CTA to Fixed. Add a note or second state for the CTA's show and hide points |
| 2.7 | 09 checks at 375, 768 and 1440, while Figma draws at 390. No check runs at 320 (WCAG reflow) | §9 | should | See For other tracks (Practices) |

### 3. Handoff page (13 §15)

| Frame | id | State |
|---|---|---|
| Start here | `155:2` | Says "Status: draft for Rez's review, 22 Oct 2026". Points to the pages, system, modes and code. No links (0) |
| Page index | `155:17` | 128 texts, 43 links, all live. Lists the case template as "6 more cases share it" |
| Site map | `155:167` | Says "7 case pages". No links |
| Flows | `156:2` | 5 flows (Stats owner, Book a call, Send a message, Recruiter CV, Cookies), 19 links, all live |
| Build checklist | `157:7053` | 22 Oct snapshot, with "Added 22 Oct (Rez)". No owners |
| Open questions for Rez | `157:7141` | Up to date as of 22 Oct. Row 45 still open |

| # | Finding | 13 § | Weight | Fix |
|---|---|---|---|---|
| 3.1 | The page index and site map leave out the 14 new cases (YumYum to Livio). The site map says "7 case pages"; there are 21 | §15 | must | Add a "New cases" block with 14 linked rows, change the site map to 21 case pages, and add rows for the Share images and icons section `170:7174` and the asset sections |
| 3.2 | No changelog. The 22 Oct audit list lives in 06 §9 and the checklist | §15 | must | Add a "Changelog" frame: 21 Oct build, 22 Oct audit, 22 Oct answers, the Chat A changes, each with its date |
| 3.3 | No token table or link to one. Start here relies on Dev Mode, which needs a paid seat (§16) | §15 | should | Add a link to 06 §4 on Start here, or a compact Figma name to CSS name table |
| 3.4 | Build checklist and open questions have no owners | §15 | should | Tag each block with its build chat (F, B, C, D, E) and each question with Rez. Mark the checklist as superseded by the merged 15-v4a-plan once it's approved |
| 3.5 | No contact line ("Questions: Rez, as Figma comments on the frame") | §15 | nice | One line on Start here |
| 3.6 | Flows lack the LinkedIn invite (form, then thanks) and Email copied. Every link goes to a desktop frame | §15 | nice | Add the two flows. Add phone links where a phone frame exists |
| 3.7 | Start here's status and date are stale (22 Oct, draft) | §15 | should | Update them when Rez says yes |

### 4. Access and sign off (13 §16)

| # | Item | State | Owner |
|---|---|---|---|
| 4.1 | Developer access | The build runs on Rez's PC with Rez's Figma account through MCP, so no extra seat is needed. Dev Mode needs a paid seat; the docs use the Plugin API and 06 instead | Rez confirms his seat type (Q3) |
| 4.2 | Library published | Not needed: one file, local components. Only needed if the agency site reuses the system | — |
| 4.3 | Open comments | Not readable through the Plugin API | Chat A, in the Figma app |
| 4.4 | Final review at every breakpoint | Rez's review (row 45) is still open | Rez |
| 4.5 | Walkthrough | Not needed: the builder is Claude, and the Handoff page and the docs replace it | — |
| 4.6 | Design QA | 08 R plus Rez's check against Figma | Practices track sets it |

## 5. Node ids in the docs that moved or broke

Checked on 27 Oct 2026: 133 unique ids from 08 (§3, §3.5, §6 package prompts, §13.1), plus the section ids in the planning README and 14-pre-build-review. **None are missing, none moved page, and none were renamed.** 06 and 09 name no ids.

| # | Doc and place | Says | Actually is | Fix |
|---|---|---|---|---|
| 5.1 | 08 §3.5 and P5's inputs | "Five more are coming (LYFT, IsHamn, Samā, CortexAI, Livio)" | All five exist: LYFT `177:18171`, IsHamn `177:18489`, Samā `177:18636`, CortexAI `178:8398`, Livio `179:8514`, in `172:17339` (same as 14 review §4 item 2) | Add the five ids |
| 5.2 | 08 P5's inputs ("SyncGrid cover 172:7108") | A cover | `172:7108` is the SECTION "V4a · SyncGrid assets". The cover frame is `172:7109` "Assets · SyncGrid cover" | Use `172:7109` for the cover |
| 5.3 | 08 P6's inputs ("LinkedIn before and after 90:206") | The component | `90:206` is the variant "Size=Desktop". The set (with the description and the mobile size) is `176:8227` | Use `176:8227` |
| 5.4 | 08 §3.5 ("CargoShift's added images (frame `170:7049`)") and "Images from Assets · New cases (22 Oct) (`170:7049`)" | Two labels for one frame | `170:7049` is "Assets · New cases (22 Oct)" inside section `170:7048` "V4a · New case assets", which also holds the LYFT cover source `221:8398` (not in the docs) | Figma C confirms CargoShift's images are in `170:7049`. Name the section `170:7048` in 08 |
| 5.5 | 08 §13.1, "A frame's copy in reading order" | `findAllWithCriteria({types:["TEXT"]})` on a frame | Planning README rule 7 says `findAll` from a frame misses texts inside instances | Chat A swaps the snippet for a recursive `.children` walk, or proves it works on an instance heavy frame such as Home |
| 5.6 | Any lookup by name | — | The archive copy page `196:12120` and the Copy page `58:4743` repeat live names | Builds keep reading by id from `10:3`, as 08 says. 1.3 and 1.4 remove the risk |

## Rez decides

| # | Question | Options (recommended first) |
|---|---|---|
| Q1 | What happens to the archive copy page `196:12120` (a full copy of the live page from 22 Oct, plus the dropped Services proposal)? | (a) Keep it, renamed "Archive · V4a pages copy (22 Oct)", with "Archive ·" section names and a note (Recommended) · (b) Delete it; version history keeps the old state · (c) Leave as is |
| Q2 | Tablet frames: draw more, or write the rule? | (a) Keep the 4 tablet frames and write the rule "Tablet = the desktop column, centred" on Handoff, since every page is one column of 700px or less (Recommended) · (b) Draw tablet frames for every template (about 12 more frames) |
| Q3 | Which Figma seat is on Rez's account (Dev Mode and MCP call limits depend on it)? | (a) Professional or higher with Dev Mode, Claude reads through MCP (Recommended to confirm) · (b) Free or view seat: Chat A plans for MCP rate limits and relies on 06 for tokens |
| Q4 | Filter chips on phones are 40px tall by design; the rule is 44px | (a) 40px to the eye, 44px hit area in code (Recommended) · (b) Make them 44px tall in Figma |

## For other tracks

| Track | Note |
|---|---|
| Figma A | The Owner chip (32 tall) and Filter chip (40 tall, Mobile) need a hit area note in their descriptions. Set the Dock to Fixed scroll behaviour in its usage. The booking Modal's description needs the 640 to 1023 rule (2.3) |
| Figma B | Phone states missing: Contact Dropdown open, Email copied toast. Flows lack the LinkedIn invite and Email copied (3.6) |
| Figma C | Confirm that the 14 new cases use only the blocks in the Earworm mobile frame `149:15858`, since that one frame covers all 21 cases on phones. Confirm whether live images come from "Assets · V4a" `38:137` on the legacy page (1.7). Confirm CargoShift's images are in `170:7049` (5.4) |
| Practices | 09 tests at 375, 768 and 1440. Add 360 and a 320 reflow check (WCAG 1.4.10). Footer links and the Owner chip fail 44px (2.5). Design QA should include each breakpoint |
| SEO | The new templates (blog, Hire, Industry, Deliverable) have no Figma frames at any size yet. Chat A draws them at 1440, 768 (or the rule) and 390 before Chat E |
| Operations | When posting adds a new case, the Handoff page index needs a row. Add that to the check gate, or decide that the index lists templates only |

## For the build chats

| Chat | Must do |
|---|---|
| A · Figma ready | 1.1 to 1.5, 1.9 (Ready for dev, named version, branches, comments), 1.10, 2.2 to 2.6, 3.1 to 3.7, 5.5. Draw the new templates at all sizes. After Rez's yes, update 08 with 5.1 to 5.4 |
| F · Foundation | One `@media (max-width: 639px)` block for Mobile values (06 §3), with Tablet = Desktop values. A shared hit area utility (44px) for chips, chips in the top bar and footer links |
| B · App and data | Booking: the sheet below 640, and a modal of min(880px, 100vw minus 48px) above (2.3). Owner chip hit area. Contact Dropdown open on phones floats over the form |
| C · Cases and images | Read cases by id only: the 21 frame ids including the five in 5.1, the cover `172:7109`, assets `170:7049` and `221:8398`. Never from `196:12120` or `58:4743` |
| D · Pages | Filter chips 40px with a 44px hit area. Footer link rows at 44px. Dock fixed above the safe area. The LinkedIn invite sticky CTA shows after the hero and hides near the form. LinkedIn before and after from `176:8227` |
| E · Search and templates | Build the new templates only from Chat A's frames at three sizes |
| W · Content | No Figma work. New pages follow the template frames |
| R · Review | Run 09 at 320, 375, 768 and 1440. Check touch targets with the 44px rule. Compare every phone page with its Mobile frame, and tablet with the rule in 2.1 |

## Sources

Figma file `2PZQVIX9UJO8NqnXNqiNDe`, read through the Figma MCP Plugin API on 27 Oct 2026 (read only): page list, `10:3` sections and frames, Mobile `148:4804`, Tablet `150:16627`, Handoff `114:13314` (texts and links), `196:12120`, `58:4743`, `13:2`, `13:3`, `13:4`, `1:5`, `0:1`, and the 133 doc ids. Docs: 13-figma-handoff §1, §9, §15, §16; 08 §3, §3.5, §6, §13.1; 06 §1 to §3; 09 §1 and §8; 14-pre-build-review; 15-v4a-plan README §6.

## Fixes applied (27 Oct)

On Rez's go, relayed by the coordinator. Edits were limited to the Cover page, the page order, the section names on the Copy page, the Mobile and Tablet sections on `10:3`, and the Handoff page `114:13314`. No visible design copy changed. Every Handoff link was checked afterwards: 163 node links, 0 broken, and no frames overlap.

| Finding | Result | Node ids | Notes |
|---|---|---|---|
| 1.1 Cover | Done | Page `0:1`, renamed "Cover". Frame `254:14055` (1920 by 1080), with the V4a blurred portrait backdrop `254:14056` and a glass card `254:14059` | The card holds the title (Rezaul Karim portfolio, V4a), status (Draft for handoff), owner (Rez), last update (27 Oct 2026), the file link and a link to Start here |
| 1.1 Thumbnail | Skipped | — | `setFileThumbnailNodeAsync` isn't supported through MCP. Chat A sets it in the Figma app (right click `254:14055`, Set as thumbnail) |
| 1.1 Old image | Kept, moved beside the Cover | `1:3`, note `254:14080` | **Rez should see this:** the image is a screenshot of another designer's portfolio ("Hi, I am Dasha"), not his work, so it isn't on the Cover. It now carries a "Reference only" label. Move it to Mobbin or delete it (his call) |
| 1.2 Page order | Done | — | Cover, Handoff, Pages, Design system, `----`, Copy V4a · Pages Archive, Copy, V2, V3, Components legacy, Mobbin |
| 1.4 Copy page | Done, 9 sections | `58:10224` became "Old · V1, V4 and first V4a (21 Oct)". "Old ·" added to `58:5376`, `58:5649`, `58:6013`, `83:21196`, `83:21472`, `83:21845`, `83:22119` and `150:17680` | Frames inside those sections still share names with live frames (for example "V4a · Mobile · Home" in `150:17680`). Section names only, as briefed |
| S10 (Figma B) | Done | `93:3126` now sits in `148:4804` at x 7430, y 120. The section widened to 7900 | The id is unchanged. Service pages `82:9011` now holds 7 frames |
| 2.2, 2.3 | Done | Breakpoints frame `254:24032` | Holds the 06 §3 table, the dock and padding rule, the tablet rule ("agreed set, pending Rez"), the booking modal rule, one line per phone change and the state cards line |
| 2.4 | Done, placed differently | Dev Mode notes on `149:16493`, `149:16081`, `149:18053`, `149:5387` and `93:3126`, plus a line in `254:24032` | The 860px cards sit in figma-b's and figma-c's sections, so the notes went on the matching Mobile frames instead of the cards |
| 2.6 Fixed | Skipped; notes added instead | Dev Mode notes on all 20 dock instances (Mobile and Tablet), and on the sticky CTA `93:3472` | The Plugin API here has no `scrollBehavior`, and writing `numberOfFixedChildren` was ignored (tested on `149:4630`, nothing changed). Chat A sets Position to Fixed in the Figma app. **Chat A should see this:** the sticky CTA `93:3472` sits at y 8378, below the bottom of its 8312px frame, so it's clipped and not visible. Place it near the bottom when setting Fixed |
| 3.1 | Done | Page index: cases intro `254:23795`, header `254:23796`, 21 case rows `254:23803` to `254:23943` (each links its desktop frame, the case template and its share image), asset rows `254:23958` to `254:23986` (Share images and icons, New case assets, SyncGrid, LinkedIn, Nike Mind). The template row now says "20 more cases share it". Site map: "21 case pages" plus a line naming the 14 new cases `254:23993` | — |
| 3.2 | Done | Changelog `254:24101` | Covers 21 Oct build, 22 Oct updates, audit and answers, 24 Oct standard, 27 Oct review and fixes |
| 3.3 | Done | Start here row "Tokens" `254:23996` | Points to 06 §4. No duplicate token table, so each fact keeps one home |
| 3.4 | Done | Checklist block tags (`157:7056`, `157:7066`, `157:7094`, `157:7125`, `162:2`), superseded note `254:24002`, owner line on the questions `254:24003` | Tags: Tokens F; Components F, with B, C and D; Copy C, D and B; Flows B, with Lightbox C; Added 22 Oct C, D and F |
| 3.5 | Done | Start here row "Questions" `254:23999` | — |
| 3.6 | Done | Flows `254:24158` (LinkedIn invite) and `254:24180` (Email copied) | Both use the existing start, middle and end box styles |
| Figma C, Handoff items | Done | Assets and alt text `254:24088` | Covers the asset convention, 1400px masters by image hash, the masters below 1400px (Rez decides), alt text in the content files, and Nike Mind/Cover `212:8331` as the source of nk-cover |
| Layout | Done | — | Two columns: Start here, page index, flows and checklist on the left; site map, Breakpoints, assets, changelog and questions on the right |

**Not done, as briefed:** 1.3 and 1.5 (the archive page, Q1), 2.1 (more tablet frames, Q2), 1.9 (Ready for dev marks and the named version, in the Figma app after Rez's yes), 3.7 (the Start here status still reads "draft for Rez's review, 22 Oct 2026"), and the missing phone states (Figma B's Q4).

## Round 2 (27 Oct)

Rez accepted every recommended answer in [../for-rez.md](../for-rez.md). Applied 28 Oct within the same limits as before (plus the archive page, as briefed). No overlaps on the Handoff page or in Mobile (390). The Handoff page now has 172 node links, 0 broken.

| Item | Result | Node ids | Notes |
|---|---|---|---|
| Decision 34, archive page | Done | Page `196:12120` is now "Archive · V4a pages copy (22 Oct)". 11 sections prefixed "Archive ·". `228:23375` is now "Dropped 22 Oct (Rez)". Note frame `259:8597` "Not the live design", linked to the live Read me | The copied Read me `196:15484` said "the live design", so it's renamed "Archive · Read me (copy, 22 Oct)" and its title now says "copy from 22 Oct, not the live design" |
| Decision 35, tablet | Done | Breakpoints `254:24032` | The subhead now reads "agreed by Rez, 27 Oct", and the rule ends "No more tablet frames" |
| Decisions 36 and 42 (from my Q4 and figma C's Q3) | Recorded | `254:24032`, `254:24088` | Chips look 40px with a 44px tap area in code. Masters under 1400px ship as they are |
| Decision 39, mobile Career and About | Done | `149:5442` and `149:16888` now read "BASIS". The "Bangladesh" lines `149:5437` and `149:16883` are removed | The desktop frames (`82:8594`, `82:8599`, `82:9501`, `82:9506`) still have the old text. That's figma-b's area |
| Decision 12, RezBloom line on mobile About | Waiting | — | Not on desktop About `82:9439` yet. I copy it to mobile once figma-b places it |
| Decision 32, three phone states | Done | Email copied `260:8306`, Contact form · Role menu open `260:8417`, LinkedIn invite · Form thanks `260:8510`, all in `148:4804` at y 8400 | Built from the existing frames and components (Toast, Select Single Open, the Sent card), in Mobile mode. No new copy: the role options come from the Select component (Founder or team, Recruiter, Agency, Something else) |
| Decision 10, mobile Contact chips | Waiting | — | figma-a's chip group doesn't exist yet. The design system page has Filter chip, Owner chip and Timeline item only. I add the Timeline and Budget rows to `149:16493` once it lands. The budget ranges aren't written down anywhere yet (seo §6.1 says "USD ranges"), so they need copy before they can be drawn |
| Handoff | Done | Changelog row `261:2` (28 Oct, decisions). Answered note `261:5` under Open questions. The page index links the three phone states (`155:164`, `155:89`, `155:68`). The flow notes on `254:24180` and `254:24158` and the Dev Mode notes on `149:16493` and `93:3126` point to them | — |

## Round 2 follow-ups (28 Oct)

All checked afterwards: Mobile (390) has no overlaps and no frame sits outside the section.

| Item | Result | Node ids | Notes |
|---|---|---|---|
| Decision 10, chip rows on phones | Done | Mobile Contact `149:16493`: Timeline `266:8558`, Budget `266:8570`. Phone Role menu open `260:8417`: Timeline `266:8586`, Budget `266:8598` | Instances of figma-a's Chip group `262:649`, set to Picked=No and placed after "What do you need?", following seo §6.1's field order. The chips render 40px tall in Mobile mode. Budget keeps its "Copy to confirm (Rez)" note. The form card grew to 1198px, so Mobile Contact is now 3806 tall. The other phone states don't show the form, so nothing else changed. The desktop Contact and its 8 form states don't have the rows yet (figma-b's area) |
| Decision 41, Earworm credit note | Done | Removed `149:15878` (Mobile case) and `150:17003` (Tablet case), the Note/To confirm inside the My role cards `149:15871` and `150:16996` | — |
| Invite sticky CTA | Done, position only | `93:3472` moved to y 8232, 24px above the bottom of the 8312px frame `93:3126`. Its fade `93:3471` now sits at the frame's bottom edge | Fixed position still has to be set in the Figma app |
| Decision 44, reference image | Done | `1:3` and its "Reference only" note `254:14080` now sit on the Mobbin page `1:5` at x 5040, to the right of the moodboard `3:15` | The Cover page holds only the Cover frame `254:14055` |
| Decision 46, budget copy approved | Done | Hid the Note/To confirm on both mobile Budget rows (`I266:8570;262:620`, `I266:8598;262:620`) | Only the instances were changed; the note is still on the Chip group component `262:617`, which is figma-a's to remove. The rows are now 124px tall, matching Timeline |
| Decision 47, lightbox counter | Nothing to change | Mobile lightbox `150:6502` | It shows only the caption "Earworm investor deck · 2 of 7" and the swipe hint, with no "1 / 6" counter. The desktop lightbox `82:9884` has a hidden "1 / 6" text, `82:9886`, which is figma-b's area. Code drops the counter |

## Round 3 (28 Oct)

I drew the 390 versions of figma-a's seven templates (`269:8604`) in Mobile (390) `148:4804`, in row 1 at x 7920 to 10860, y 120. The section is now 11350 wide, and nothing else on `10:3` is in that area. No tablet frames (decision 35). Each one is a copy of the desktop frame, set to Mobile mode. Every card, padding, radius, gap and type size follows the Responsive variables, so nothing is hard sized. I took one screenshot of each frame, then a second only where a fix followed.

| Template | Desktop | Phone (390) | Height | Notes and annotations kept | Changes for phones |
|---|---|---|---|---|---|
| Hire hub | `270:8779` | `275:9688` | 4913 | 6 notes, 7 annotations | Breadcrumb Mobile, CTAs stacked full width, Post cards and Answer box fill the column, case rows stacked |
| Hire role | `270:9148` | `276:9875` | 4146 | 6, 7 | Meta cells fill the column |
| Industry hub | `270:9459` | `276:10145` | 2295 | 2, 3 | Post cards fill the column |
| Industry | `271:9078` | `276:10337` | 4622 | 6, 7 | Decision row text now wraps inside the 314 column. It was cut off at first |
| Deliverable | `271:9385` | `276:10623` | about 3890 | 6, 7 | Includes items wrap and grow taller (they overlapped at first). The Formats tags wrap |
| Guides index | `272:9421` | `276:10906` | 2729 | 2, 3 | Post cards fill the column |
| Guide | `272:9641` | `276:11113` | 3988 | 6, 7 | Table of contents Size=Mobile (the "On this page" row) fills its card. Article prose and the Work card fill the column |

On every phone frame: the Top bar, Footer and Dock use their Size=Mobile variants, the dock keeps its page mapping (decision 48) and carries the same fixed position Dev Mode note as the other docks, label rows wrap, Work cards fill the column at their own height, and Related link rows fill the column.

**For figma-a:** Proof block `264:647` doesn't wrap two per row on phones. Its Case mini tiles are a fixed 193px inside the component, and that width can't be overridden on an instance, so on a 314px column they stack one per row (Hire hub, Hire role, Industry, Deliverable). The component description says "two per row on phones". The fix belongs in the component: bind the tile width to a Responsive variable (193 on Desktop, 151 on Mobile), or add a Size=Mobile variant. The phone instances update by themselves once it's fixed.

**Handoff `114:13314`:**
- Page index: a "New templates (28 Oct)" block `277:2`, header `277:3`, and 7 rows `277:10` to `277:52`. Each row links its desktop frame, its phone frame and the Breakpoints rule `254:24032`, and names the dock.
- Site map: Hire, Industries and Guides with their child routes, and Deliverable pages under Services (`277:59` to `277:77`). Routes follow seo §3.2.
- Changelog: row `277:80` (28 Oct, templates).
- I also fixed the site map's Stats row. Its bullet sat on top of the text, so `155:212` is replaced by a clean copy, `277:88`.

The page has 193 node links, 0 broken, and no frames overlap.

**Chip group note (decision 46):** figma-a had already removed it from `262:617` (and `262:633`), so I changed nothing there.

### Round 3, last items (28 Oct, after figma-b's round 2)

| Item | Result | Node ids | Notes |
|---|---|---|---|
| Decision 12, RezBloom line on mobile About | Done | Line `294:11369` and its "Copy to confirm (Rez)" Note `294:11370`, at the end of the Bio `149:16833`, as on desktop (`287:10738`, `287:10739`) | Wording unchanged. Mobile About is now 3815 tall |
| Phone 500 | Done | `294:11372` "V4a · Mobile · 500", in `148:4804` at x 3020, y 8400 | A copy of `291:11160` in Mobile mode, laid out like the mobile 404 (buttons stacked full width). Copy, Note and both frame annotations (headings, motion) kept |
| Phone Accessibility | Done | `294:11525` "V4a · Mobile · Accessibility", at x 3510, y 8400 | A copy of `291:11249` in Mobile mode, laid out like the mobile Privacy. Copy, Note and the three frame annotations (headings, motion, noindex and footer link) kept |
| Handoff page index | Done | Rows `294:14437` (500), `294:14444` (Accessibility), `294:14451` (Work states: Filter Social `289:10814`, Empty state `289:10961`), `294:14458` (Contact role menu `289:11026`, phone `260:8417`), `294:14465` (Stats: Views per day table `290:10933`, Dashboard empty `290:11037`, AI assistants `290:10904`, Cookie choices `290:10908`), `294:14472` (Invite form Errors `291:10997`, Sending `291:11092`) | Placed after the Email copied row |
| Changelog | Done | Row `294:14479` (28 Oct, pages and states) | — |

Checks: 207 node links on the Handoff page, 0 broken. No overlaps on the Handoff page or in Mobile (390). The new phone pages have one Dev Mode dock note each, like every other phone frame.

**For figma-a:** the Footer has no Accessibility link yet (figma-b noted it too), so the phone Accessibility and 500 frames show the current footer.
