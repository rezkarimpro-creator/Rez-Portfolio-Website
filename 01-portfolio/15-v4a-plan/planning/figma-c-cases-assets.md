# Figma C · Cases and assets
Status: done · 27 Oct 2026 · All 21 cases and their share images are designed and close to ready; 2 share images show the wrong cover (one with the removed "Saudi" claim), 1 error message is wrong, and 3 open notes from the pre-build review are still in Figma.

[README](../../../README.md) · Draft · 27 Oct 2026 · Read only review of Figma file `2PZQVIX9UJO8NqnXNqiNDe`, page ↳ V4a · Pages `10:3`, through the Figma MCP (`use_figma` reads and screenshots). Nothing in Figma was changed.

## Summary

- **Cases.** All 21 case frames exist (7 in `82:8638`, 14 in `172:17339`), each with a share image in `170:7174`. The 14 new cases follow one template exactly: Hero, My role, The brief, gallery, 3 design decisions, Next case, Call card. No visible tags or years on any case or share image (row 81 holds). Role and scope rows match 10-confirmations rows 1 to 21 word for word.
- **Must fix (4).** Samā's share image uses an old cover with "Saudi-based airline" baked into the picture (row 19 removed that claim). CortexAI's share image uses an old cover with clipped text, not the case cover. SyncGrid still shows "Studio · DashBloom" with no To confirm mark (14 review item 1). The Locked · Wrong password state shows the contact form's helper "Add a line about your project." as its error.
- **Images.** Every gallery image sits at its natural ratio (frame ratio equals source ratio to 2 decimals, so nothing is cropped). 21 of 21 hero and gallery sets are 1400 px wide or close to it, except IsHamn (1171), Livio (1054) and two 1024 px images. No export settings on any case image or asset; the share images and icons all have theirs.
- **Gaps.** No alt text notes anywhere in Figma (0 annotations, 0 "alt" texts). The 7 original cases already have alt text in `site/src/data/work.ts`; the 14 new cases and CargoShift's 3 added images need it. Two older notes from the 14 review (items 3 and 4) are still in Figma.
- **Next case order** runs Earworm, Real estate website, SolVita, Nike Mind, SyncGrid, CargoShift, Pulse, then the 14 new cases in section order, and Livio loops back to Earworm. The SolVita ordering rule holds (it follows Earworm and the Real estate website).

## Findings

Labels: **fact** is read from Figma or the docs; **opinion** is my judgement. All findings are facts unless marked.

| # | Node | Issue | 13 § | Weight | Fix | Owner |
|---|---|---|---|---|---|---|
| 1 | OG · /work/sama `178:8592`, layer Cover | Uses cover image `65feaa` (an older phone render, 1400x1000) whose background text reads "…udi-based airline", "Samā lu…" and "Premium Flight Platform". Row 19 replaced the Saudi airline line. The case hero, Work cards and asset cover all use `a82c1d` (`sm-cover` `170:7140`) | 11 | Must | Swap the Cover fill to the `sm-cover` image | Claude (chat A) |
| 2 | OG · /work/cortexai `178:8616`, layer Cover | Uses cover `1b64a4` (1400x1050) with clipped strip text at its left and right edges ("…esign", "Br…"), not the case cover `723f62` (`cx-cover` `170:7149`) | 11 | Must | Swap the Cover fill to the `cx-cover` image | Claude (chat A) |
| 3 | SyncGrid My role `82:8844` | "STUDIO · DashBloom" shows as a plain value. Row 5 and 00-facts §7 keep it To confirm and hidden. Same as 14 review item 1, still open | 11 | Must | Set the value to "To confirm" (the build hides To confirm rows) or hide the cell, so a word for word copy can't ship it | Claude (chat A) |
| 4 | Case · Locked · Wrong password `146:4098`, Field[Type=Password, State=Error] > Helper | Error helper reads "Add a line about your project." (the contact form's text, never overridden). 09 §3 needs a wrong password message | 8, 11 | Must | Write the error, see Rez decides Q4 | Claude after Rez's pick |
| 5 | Case · Unlocked `146:4195`, Alert[Kind=Note] | "To confirm: which case goes behind the password." sits in an Alert, not the Note/To confirm component, so builds can't tell it is a designer note (14 review item 3, still open). The other three locked frames use Note/To confirm correctly | 14 | Should | Swap it to a Note/To confirm instance | Claude (chat A) |
| 6 | Nike Mind The brief `82:8798` | "micro check-ins", a hyphen in visible copy (14 review item 4, still in Figma). Row 82 says Figma matches the site | 11 | Should | "micro check ins" in Figma and the build, unless Rez keeps it (Q5) | Claude (chat A) |
| 7 | All case Media instances, all asset rectangles in `170:7049`, `172:7109`, `173:7561`, `212:8331` | No export settings (13 §12 asks for PNG or WebP at 1x and 2x). Asset rectangles are drawn at 280 px wide, so a 1x export would give 280 px images, not the 1400 px masters | 12 | Should | Set PNG 2x on each case Media instance (700 px slot, so 1400 px out). The image script takes masters from the original image bytes by hash, never from a 1x frame export. Note this on the Handoff page | Claude (chat A), C uses it |
| 8 | IsHamn `177:18489` (all 7 images 1171 px wide), Livio `179:8514` (gallery 1054 px, cover 1140 px), ReSpace rs-05 `176:18302` and CortexAI cx-04 `170:7153` (1024x768) | Below the 1400 px master width (2x the 700 px slot). They will look soft on retina screens, not broken | 12 | Should | Ship as is with no upscaling, or Rez sends larger originals (Q3) | Rez |
| 9 | All 21 cases | No alt text notes in Figma (0 annotations, no "alt" texts). Old cases: alt lives in `site/src/data/work.ts` (47 lines). New: 14 cases plus CargoShift cs-08, cs-09, cs-10 have none | 12 | Should | Alt text keeps one home, the case content files, written by chat C per 07 §3.7. The Handoff page says so instead of duplicating 120 lines in Figma (opinion) | Chat C |
| 10 | Share image frames in `170:7174`, notes `174:18077` | Export is PNG 1x; 08 P7 writes `public/og/<key>.jpg`. Photo heavy PNGs at 1200x630 often pass 500 KB (opinion, estimate) | 12 | Should | Keep the PNG export from Figma and convert to JPG (quality about 82) in the share image script; say so in the notes frame | Chat E |
| 11 | Icon frames `172:7101` to `174:17926` | All export PNG only. 13 §12 asks for a favicon SVG plus 32 and 180 px. Icon · 512 is vector, so an SVG can come from it | 12 | Should | Add an SVG export to Icon · 512 for `icon.svg`; list it in the notes table | Claude (chat A) |
| 12 | Earworm `82:8639` "Result", Real estate website `82:8700` "What mattered", Nike Mind `82:8798` "How the story runs" | Layer names differ from the labels on canvas ("Proof", "3 design decisions", "3 design decisions"). Builds read layer names | 2 | Nice | Rename the layers to match the labels | Claude (chat A) |
| 13 | Nike Mind `82:8798` | The "3 design decisions" rows are The problem, Why now, Go to market: story beats, not design decisions (opinion). 08 asks for the label on every case | 11 | Nice | Keep as is (no new copy without a source). Flag only | None |
| 14 | Nike Mind/Cover `212:8331` | The clean cover component has 0 instances. The hero, SolVita's Next case thumb and the share image use the same image (`6c1efd`) as plain fills, so the look is right | 7 | Nice | Leave it; note on the Handoff page that `212:8331` is the source for `nk-cover` | Claude (chat A) |
| 15 | Earworm Client words `82:8679` | The name line reads "Founder & CEO, Earworm"; row 80 gives "Ben Farley, Founder & CEO". The quote itself is word for word | 11 | Nice | Keep (adds the company, changes no claim), or drop ", Earworm" if Rez wants row 80 to the letter | Rez, optional |
| 16 | CargoShift `82:8893` | Figma has 10 images (cs-01 to cs-10; cs-08, cs-09, cs-10 come from `170:7163`); the site has 7 | 11 | Info | Chat C adds the 3 with alt text | Chat C |
| 17 | ReSpace `176:7948` | 6 gallery assets in `170:7114`, 5 used on the case | 12 | Info | Chat C uses the 5 on the case | Chat C |

**Checked and solid (fact):**

| Check | Result |
|---|---|
| Template | The 14 new cases have the same 10 top level parts in the same order, nothing hidden or extra. The 7 older cases share the frame; Earworm adds Proof and Client words; Real estate website and Nike Mind name their decisions block differently (finding 12) |
| Tags and years | A scan of every visible text on 21 cases and all 38 share image frames found no Client, Concept, To confirm tag and no year outside To confirm role values |
| Claims | Earworm hero and Proof read "Designed the investor deck used in Earworm's £200K pre-seed" word for word; quote is row 80's last sentence; Nike Mind keeps "Not affiliated with Nike"; SolVita has no studio line and the Role "Designer, brand identity and website"; Samā's hero matches row 19 |
| Copy rules | Only hyphens in visible case copy: "pre-seed" (locked claim) and "check-ins" (finding 6). No em dash, colon or semicolon |
| Ratios | Every gallery frame ratio equals its source image ratio, so nothing is cropped. Heroes are 700x600 fills cropped from 1400 to 2400 px sources |
| Banned images | Earworm's cover is clean (no "funding raised"); Real estate re-05 isn't used (row 77) |
| Share images | 15 page routes plus 21 cases, 1200x630, the same template, "rezkarim.com", no location, safe area noted; both templates kept unexported for the script |
| Next case | One loop over all 21, each thumb showing the next case's hero image |
| Asset naming | One frame per case (`yy · YumYum` and so on), children `<code>-cover` and `<code>-m01`…; masters 1390 to 1400 px wide except finding 8 |

## Cases

Status key: **Ready** (copy and images ready to build), **Ready, hidden** (ready; a To confirm row stays hidden on the live site), **Fix first** (a Must finding).

| # | Case | Frame | Share image | Slug | My role as drawn (G1) | Status | Issues |
|---|---|---|---|---|---|---|---|
| 1 | Earworm investor deck | `82:8639` | `170:17561` | earworm | Client Earworm, UK · Scope Investor deck · Role Designer, pitch deck and web | Ready | 12, 15 |
| 2 | Real estate website | `82:8700` | `171:7083` | real-estate-website | Client To confirm · Scope Website UI and UX · Studio DashBloom | Ready, hidden | Client hidden (row 2); 12 |
| 3 | SolVita | `82:8748` | `171:7106` | solvita | Client SolVita · Scope Brand identity and website, built in Framer · Role Designer, brand identity and website | Ready | — |
| 4 | Nike Mind | `82:8798` | `171:7129` | nike-mind | Scope Investor deck · Note Not affiliated with Nike | Ready | 6, 12, 13, 14 |
| 5 | SyncGrid | `82:8844` | `171:7153` | syncgrid | Scope Brand identity for an HR SaaS platform · Studio DashBloom (unmarked) | Fix first | 3 |
| 6 | CargoShift | `82:8893` | `171:7177` | cargoshift | Scope Logistics brand identity · Role To confirm | Ready, hidden | Role hidden (row 6); 16 |
| 7 | Pulse | `82:8943` | `171:7201` | pulse | Scope eSIM brand identity · Role To confirm | Ready, hidden | Role hidden (row 7); pl-01 keeps 2.3M (row 26) |
| 8 | YumYum | `172:17340` | `174:17807` | yumyum | Scope Brand identity, packaging, menu and social · Role Designer, brand identity | Ready | 9 |
| 9 | ALPHA | `172:17487` | `174:17831` | alpha | Scope Brand identity and packaging · Role Designer, brand and packaging | Ready | 9 |
| 10 | Taif | `172:17657` | `174:17855` | taif | Scope Brand strategy and logo design · Role Designer, brand identity | Ready | 9 |
| 11 | Gravix | `173:7413` | `174:17879` | gravix | Scope Fintech brand identity · Role Designer, brand identity | Ready | 9 |
| 12 | Azora | `173:7572` | `176:18303` | azora | Scope Luxury real estate branding · Role Designer, brand identity | Ready | 9 |
| 13 | Nexus | `173:17801` | `176:18327` | nexus | Scope Web3 platform branding · Role Designer, brand identity | Ready | 9 |
| 14 | Bristo | `174:17930` | `176:18351` | bristo | Scope Cafe brand identity · Role Designer, brand identity | Ready | 9 |
| 15 | Orion | `174:18325` | `176:18375` | orion | Scope Branding, website and dashboard UI · Role Designer, brand and UI | Ready | 9; not the Orvion archive tile (row 23) |
| 16 | ReSpace | `176:7948` | `176:18399` | respace | Scope Ecommerce website and app · Role Designer, UI and UX | Ready | 8 (rs-05), 9, 17 |
| 17 | LYFT | `177:18171` | `178:8544` | lyft | Scope App, website and branding · Role Designer, brand and UI | Ready | 9; cover cleaned by Rez in `221:8398` |
| 18 | IsHamn | `177:18489` | `178:8568` | ishamn | Scope Ecommerce website and branding · Role Designer, UI and UX | Ready | 8, 9 |
| 19 | Samā | `177:18636` | `178:8592` | sama | Scope Branding and mobile app · Role Designer, brand and UI | Fix first | 1, 9 |
| 20 | CortexAI | `178:8398` | `178:8616` | cortexai | Scope Branding and SaaS product UI · Role Designer, brand and UI | Fix first | 2, 8 (cx-04), 9 |
| 21 | Livio | `179:8514` | `209:8328` | livio | Scope Branding and mobile app · Role Designer, brand and UI | Ready | 8, 9 |

Every case also carries the preview only note "Credit lines need your OK before launch" (Note/To confirm), which the live site hides.

**Locked case** (in `82:8638`): Locked `82:8992`, Wrong password `146:4098` (finding 4), Too many tries `146:4144`, Unlocked `146:4195` (finding 5). Which case goes behind the password is still open (row 40); the Work card stays hidden until then.

## Assets

| Section | Frame | Holds | Images | Export | Notes |
|---|---|---|---|---|---|
| New case assets `170:7048` | Assets · New cases (22 Oct) `170:7049` | 15 rows: 14 new cases (cover plus 5 to 7 gallery) and CargoShift's added images `170:7163` | 110 rectangles, masters 1024 to 2800 px wide | None | Finding 7, 8 |
| | LYFT · Cover source `221:8398` | Rez's cleaned LYFT cover (mockup 4096 px, vector logo with SVG export) | 1 | Logo only | ly-cover (2800x2000) matches the case hero |
| SyncGrid assets `172:7108` | Assets · SyncGrid cover `172:7109` | SyncGrid cover | 2400x1800 | None | Matches the case hero |
| LinkedIn assets `173:7560` | Assets · Sam V4 IR `173:7561` | Sam's banner component (1584x396), Featured cards (1200x627), photos (400x400) | 4 groups | None | For /linkedin (row 27). Banner exists at 1x only, LinkedIn's own size |
| Nike Mind assets `212:8330` | Nike Mind/Cover `212:8331` (component) | Clean cover, no header, footer or year | 1400x1050 | None | Finding 14 |
| Share images and icons `170:7174` | 15 page OG, 21 case OG, 2 templates, 6 icons, notes `174:18077` | 1200x630 each | — | PNG 1x on all but the templates | Findings 1, 2, 10, 11 |

## Rez decides

| Q | Question | Options (recommended first) |
|---|---|---|
| Q1 | The open To confirm values: Real estate client name (row 2), SyncGrid's studio (row 5), CargoShift and Pulse roles (rows 6, 7), whether any new case was done at DashBloom (row 22), whether CargoShift is B3 (row 68) | (a) Launch with them hidden and answer later (Recommended) · (b) Answer them in this round |
| Q2 | Gate G1: approve the 21 My role lines in the Cases table above as drawn | (a) Approve all as drawn (Recommended) · (b) Approve with edits you list |
| Q3 | IsHamn, Livio, ReSpace rs-05 and CortexAI cx-04 are below 1400 px wide | (a) Ship as is, no upscaling (Recommended) · (b) You send larger originals before chat C |
| Q4 | Error text for a wrong password on the private case (Figma shows the contact form's helper) | (a) "That password doesn't match. It comes with my CV." (Recommended) · (b) "Wrong password. Ask for my CV to get it." |
| Q5 | Nike Mind brief "micro check-ins" | (a) "micro check ins" in Figma and on the site (Recommended) · (b) Keep the hyphen |

## For other tracks

| Track | Note |
|---|---|
| Figma B | The Work grid order should match the Next case loop (Earworm, Real estate website, SolVita, Nike Mind, SyncGrid, CargoShift, Pulse, then YumYum to Livio). Work cards for Samā and CortexAI already use the right covers. Check the Stats Wrong password state for the same unset helper text as finding 4 |
| Figma D | 08 §3.5 and P5 still list five cases as coming; their ids are LYFT `177:18171`, IsHamn `177:18489`, Samā `177:18636`, CortexAI `178:8398`, Livio `179:8514`, share images `178:8544`, `178:8568`, `178:8592`, `178:8616`, `209:8328`. New ids for the docs: LYFT cover source `221:8398`, Nike Mind assets `212:8330`, LinkedIn assets `173:7560`. Only Earworm has its own tablet and mobile case frames; the other 20 rely on the template |
| SEO | Share images for the new families (hire, industries, deliverables, blog) come from OG · Template `170:7175` through the script, unless chat A draws family templates. Case descriptions can start from each hero line (all under 100 characters). Case images feed the image sitemap |
| Operations | "Add a case from this Figma frame" works best if new cases follow the asset convention: one frame per case in an assets section, children `<code>-cover` and `<code>-m01`…, masters 1400 px wide, pulled by image hash, not by frame export |
| Practices | Alt text has one home, the case content files; Figma holds none. The 7 older cases' alt lines in `site/src/data/work.ts` move into the content files |
| Security | The image script should strip metadata (EXIF) from every master it writes |

## For the build chats

| Chat | Must do |
|---|---|
| A · Figma ready | Findings 1, 2, 3, 5, 6, 11, 12 and the Q4 copy for finding 4; export settings per finding 7; on the Handoff page, the asset convention, where alt text lives, and `212:8331` as the Nike Mind cover source. Then re-run this table's status column |
| F · Foundation | The case content schema holds per image: file key, width, height, alt (required, empty allowed only for decorative), and per case: slug, hero line, My role rows with a `toConfirm` flag, Next case slug, share image key |
| C · Cases and images | Build all 21 from the frames in the Cases table, copy word for word. Masters from the original image bytes (1400 px, no upscaling); WebP at fixed widths. Add CargoShift cs-08 to cs-10. Write alt text for the 14 new cases and the 3 new CargoShift images (07 §3.7). Hide To confirm rows and the credit note on the live site. Skip designer notes (Note/To confirm, Alert[Kind=Note]). Use the Next case loop above |
| D · Pages | Work and Home cards use the same cover keys as the case heroes (`<code>-cover`); Nike Mind uses the clean cover |
| E · Search and templates | Export the 36 OG frames from `170:7174` and convert to JPG in the script (finding 10); icons from the Icon frames plus `icon.svg` from Icon · 512; anything without a frame uses the two templates. Never a tag or year on a share image |
| W · Content | SEO pages that show a case use its cover key and its alt text from the case file, never a new crop |
| R · Review | Check every case against its frame at 375, 768 and 1440; no To confirm text or designer note on the live build; Samā and CortexAI share images show the case covers; each share image under 300 KB (estimate of a sensible budget) |

## Sources

| Source | Read |
|---|---|
| Figma `2PZQVIX9UJO8NqnXNqiNDe`, page `10:3`, sections `82:8638`, `172:17339`, `170:7048`, `172:7108`, `173:7560`, `212:8330`, `170:7174` | 27 Oct 2026, read only via `use_figma` and screenshots |
| [13-figma-handoff.md](../../13-figma-handoff.md) §11, §12 | 27 Oct 2026 |
| [01-portfolio-spec.md](../../01-portfolio-spec.md) §4, §6, §7 | 27 Oct 2026 |
| [10-confirmations.md](../../10-confirmations.md) rows 1 to 26, 40, 77 to 82 | 27 Oct 2026 |
| [00-facts.md](../../00-facts.md) §2 to §5, §7 | 27 Oct 2026 |
| [14-pre-build-review.md](../../14-pre-build-review.md) §4 | 27 Oct 2026 |
| [08-build-plan.md](../../08-build-plan.md) §3.5, P5, P7; [07-search-and-speed-plan.md](../../07-search-and-speed-plan.md) §3.7; `site/src/data/work.ts`, `site/public/images/work/` | 27 Oct 2026 |

## Fixes applied (27 Oct)

On Rez's go, relayed by the coordinator. These edits are in Figma, only inside this track's sections on `10:3`. Visible copy changed only where listed. Checked by read back and screenshots of `178:8592`, `178:8616`, `146:4195` and `82:8844`.

| Finding | Result | Nodes | Note |
|---|---|---|---|
| 1 Samā share image | Done | Cover `178:8611` in `178:8592` | Fill now uses `a82c1d` (`sm-cover`), the same image as the case hero, with FILL and its transform kept. The "Saudi-based airline" picture is gone from the share image |
| 2 CortexAI share image | Done | Cover `178:8635` in `178:8616` | Fill now uses `723f62` (`cx-cover`), the same image as the case hero, with FILL kept. The clipped strip text is gone |
| 3 SyncGrid studio | Done | Meta cell `82:8863` | Its value is now "To confirm", marked the same way as the Real estate client `82:8715` and CargoShift role `82:8912` (a plain value, which the build hides). The STUDIO label stays |
| 5 Unlocked note | Done | Alert `146:4224` removed; Note/To confirm `253:9450` (main `40:206`) at the same place in `146:4199` | Same words, "To confirm: which case goes behind the password." |
| Figma B M3 | Already done, no change | `146:4109` in `146:4098`, `146:4155` in `146:4144`, `82:9008` in `82:8992` | All three "Which case gets the password is your call" lines were already Note/To confirm instances (main `40:206`). Figma B's M3 was a false positive |
| 7 Export settings | Done | All 131 Image Media instances on the 21 case frames | PNG at 2x, contents only, so each 700 px slot exports at 1400 px. Hero frames are left as they are (image plus text); chat C takes masters from the image bytes |
| 11 SVG icon | Done, moved | SVG added to Icon · 32 `172:17645`; Icon · 512 `172:7101` keeps PNG only | Icon · 512 is a blurred portrait with layer and background blur, so its SVG would embed a bitmap. Icon · 32 is a solid square plus the RK vector, which makes a clean `icon.svg`. The notes table in `174:18077` still lists PNG only for Icon · 32; I left that designer text for chat A or Figma D |
| 12 Layer names | Done | `82:8675` is now "Proof"; `82:8726` and `82:8824` are now "3 design decisions" | Layer names only |
| Prototype | Done | Locked Unlock case `82:9004` click goes to Wrong password `146:4098`; Wrong password Unlock case `146:4105` click goes to Too many tries `146:4144`; Locked frame `82:8992` Enter key goes to Unlocked `146:4195`; Unlocked Lock again `146:4233` click goes to Locked. Dissolve, 200 ms, ease out | New flow start on `82:8992`: "Recruiter case · Unlock shows the wrong password path, Enter unlocks". A prototype can't take typing, so Enter stands in for the right password |
| 4, 6, 8, 15 | Skipped | — | Rez decides (Q4, Q5, Q3, finding 15) |
| 9, 10, 13, 14, 16, 17 | Not in this round | — | Build work or no change (chat C, chat E, Figma D's Handoff notes) |

**For Rez to see.** In the prototype, press Enter on the Locked case to see the Unlocked state; clicking Unlock case shows the wrong password path. Too many tries ends there, and "Ask for my CV" isn't linked because the Contact frames belong to Figma B's sections. The Wrong password error still reads "Add a line about your project." until Q4 is answered.

**Case status, re-run**

| # | Case | Status | Open |
|---|---|---|---|
| 1 | Earworm investor deck | Ready | 15 (Rez, optional) |
| 2 | Real estate website | Ready, hidden | Client To confirm (row 2) |
| 3 | SolVita | Ready | — |
| 4 | Nike Mind | Ready | 6 (Q5) |
| 5 | SyncGrid | Ready, hidden | Studio To confirm (row 5) |
| 6 | CargoShift | Ready, hidden | Role To confirm (row 6); 16 at build |
| 7 | Pulse | Ready, hidden | Role To confirm (row 7) |
| 8 to 15 | YumYum, ALPHA, Taif, Gravix, Azora, Nexus, Bristo, Orion | Ready | 9 (alt text at build) |
| 16 | ReSpace | Ready | 8 (Q3), 9, 17 |
| 17 | LYFT | Ready | 9 |
| 18 | IsHamn | Ready | 8 (Q3), 9 |
| 19 | Samā | Ready | 9 |
| 20 | CortexAI | Ready | 8 (Q3), 9 |
| 21 | Livio | Ready | 8 (Q3), 9 |
| — | Locked case states | Ready apart from Q4 | 4 (Q4); which case is behind the password (row 40) |

## Round 2 (27 Oct)

Rez accepted every recommended answer in [../for-rez.md](../for-rez.md) on 27 Oct. These edits are in Figma, only inside this track's sections on `10:3`. Checked by read back and screenshots of `146:4098`, Earworm's My role `82:8652` and YumYum's My role `172:17353` (the cards shrink to fit with no gap).

| Decision | Result | Nodes | Note |
|---|---|---|---|
| 31 Wrong password line | Done | Field `146:4104` in `146:4098`, through Figma A's new `Error text#255:0` property | Reads "That password didn't work. Try again, or ask for my CV." Before this it showed the property's placeholder "Error text". The mobile locked frame `149:16081` shows only the default state, so it needs no change. The Stats line ("Wrong password. Try again.", `144:14385`) belongs to Figma B |
| 33 Nike Mind | Done | Text `82:8821` | "micro check ins". This was the only "check-ins" on `10:3` |
| 41 Role lines approved (G1) | Done | Removed the "Credit lines need your OK before launch" note from 17 cases: `142:3931`, `82:8768`, `142:3933`, `172:17360`, `172:17507`, `172:17677`, `173:7433`, `173:7592`, `173:17821`, `174:17950`, `174:18345`, `176:7968`, `177:18191`, `177:18509`, `177:18656`, `178:8418`, `179:8534` | Kept on the 4 cases that still hold a To confirm value (decision 40): Real estate website `82:8720`, SyncGrid `142:3935`, CargoShift `82:8913`, Pulse `82:8963`. Their To confirm values stay marked, and the build hides them |
| 42, 43 | No change | — | Images ship as is; "Founder & CEO, Earworm" stays |

**Outside this track's sections:** Earworm's Mobile case `149:15858` and Tablet case `150:16983` still carry the credit note (`149:15878`, `150:17003`). Both should go to match decision 41 (Figma B, Figma D or chat A).

**Case status, refreshed**

| # | Case | Status | Open |
|---|---|---|---|
| 1 | Earworm investor deck | Ready | — (alt text exists in `site/`) |
| 2 | Real estate website | Ready, hidden | Client To confirm (decision 40) |
| 3 | SolVita | Ready | — |
| 4 | Nike Mind | Ready | — |
| 5 | SyncGrid | Ready, hidden | Studio To confirm (decision 40) |
| 6 | CargoShift | Ready, hidden | Role To confirm (decision 40); cs-08 to cs-10 at build |
| 7 | Pulse | Ready, hidden | Role To confirm (decision 40) |
| 8 to 21 | YumYum, ALPHA, Taif, Gravix, Azora, Nexus, Bristo, Orion, ReSpace, LYFT, IsHamn, Samā, CortexAI, Livio | Ready | Alt text at build (chat C) |
| — | Locked case states | Ready | Which case sits behind the password (row 40) |

## Round 3 (28 Oct)

The coordinator's follow ups. All edits are in Figma, inside Share images and icons `170:7174` on `10:3`. Checked with screenshots of `267:8598`, `267:8619` and the notes frame `174:18077`.

| Item | Result | Nodes | Note |
|---|---|---|---|
| Icon · 32 row in the notes table | Done | Row `174:18313`: use `174:18315` "favicon.ico, 32 layer, and icon.svg", export `174:18317` "PNG 1x, SVG" | The intro `174:18079` also says Icon · 32 exports SVG for icon.svg |
| OG · Template · Guide | Done | Frame `267:8598` at 9120, 3120; Footer `267:8616`; Byline text `267:8615` | Built from OG · Template `170:7175`: same backdrop, card, layout grid (60 px safe area), Display/Title, Display/Small, Body/L and Label/L styles. The layout is text led: the title at the top, then a footer with the byline (avatar, "Rezaul Karim", "6 minute read") on the left and rezkarim.com on the right. No image, tags or years, and no export (a reference for the og script) |
| OG · Template · Page | Done | Frame `267:8619` at 10400, 3120 | Built from OG · Template · Case `174:17903`: the identity row, the title (three lines at most, wider column, no lead line) and rezkarim.com on the left, with a 440 px "Case thumbnail" Media slot on the right holding the proof case's cover. No tags or years and no export |
| Sample copy notes | Done | Note/To confirm `267:8617` on Guide, `267:8640` on Page | "Sample copy", absolute at the top right, so chat E knows the title and "6 minute read" are placeholders |
| Notes table | Done | New template rows `267:8644` (Guide) and `267:8650` (Page); intro `174:18083`; safe area line `174:18082` now says "The four templates" | Guides and hire, industry and deliverable pages without a frame follow these templates |
| Icon frames | Moved down 127 px | `172:7101`, `172:17633`, `172:17639`, `172:17645`, `172:17649`, `174:17926` | The notes frame grew to 2797 px and would have covered them. The gap is now 56 px; the frames are otherwise unchanged and stay inside the section |

**Placement.** The row beside OG · Template has no free space, so both new templates take the two empty slots at the end of the last row (after OG · /work/livio). The notes table lists them with the other templates.

**For chat E.** The two new templates are references, like the existing two. In satori, Guide = title, then a footer with avatar, name and one meta line (read time or similar, never a date or year) on the left and rezkarim.com on the right. Page = identity row, title up to three lines, rezkarim.com, and the proof case's `<code>-cover` in a 440 by 478 slot.

**Case status:** unchanged from Round 2. All 21 cases are Ready, and Real estate website, SyncGrid, CargoShift and Pulse keep their To confirm values hidden.
