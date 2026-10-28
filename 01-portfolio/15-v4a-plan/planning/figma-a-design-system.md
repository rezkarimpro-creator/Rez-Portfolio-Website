# Figma A · Design system

Status: done · 27 Oct 2026 · Solid base, close to handoff ready. Four must fixes (stale descriptions, missing focus states, a legacy binding, no long form styles for the new templates) and a binding cleanup, all Claude's, about 2 to 3 hours in chat A.

[README](../../../README.md) · Draft · 27 Oct 2026 · Read only review of page ↳ V4a · Design system `114:13313` in Figma `2PZQVIX9UJO8NqnXNqiNDe`, against [13-figma-handoff.md](../../13-figma-handoff.md) §4 to §7, §12, §13 and [06-design-system.md](../../06-design-system.md). Nothing in Figma was changed.

## Summary

1. **Tokens match 06.** All 37 Theme tokens, 35 Responsive tokens, 15 text styles and 9 effect styles exist with the names, values and CSS names in 06 §4 to §6. Scopes are set and Primitives are hidden from pickers. Legacy is grouped and hidden from publishing.
2. **Components are mostly complete.** There are 32 component sets, 15 single components and 44 icons (167 variants). Buttons, fields and selects have full states. Icons are clean: 44 on a 24 grid, 1.6 stroke, all bound to text/primary.
3. **Must fix: stale descriptions.** Three descriptions contradict Rez's answers: Sound toggle says "Off by default" (row 51), and Tag and Work card still name NDA and Client or Concept (rows 60 and 81). A builder reading Dev Mode could build the wrong thing.
4. **Must fix: focus and long form.** 13 interactive components have no Focus state. There are no text styles for articles (H2, H3, lists, quotes, inline links), which the blog and SEO templates need.
5. **Should fix: bindings.** About 250 gaps, 330 paddings and 40 radii inside components are raw numbers, and 7 of them are off the 4px grid. No effect style binds effect/glow. Text contrast passes on dark glass but needs a check over the bright parts of the backdrop photo.

## Findings

Weight: **must** blocks "Ready for dev" or risks a wrong build; **should** is part of 13's standard; **nice** is polish. Every row is a fact read from the file on 27 Oct, unless it is marked as an opinion.

### Tokens (13 §4)

| # | Node or item | Issue | 13 § | Weight | Fix | Owner |
|---|---|---|---|---|---|---|
| T1 | Collections | Primitives (53, one mode, scopes empty so hidden from pickers), Theme (37, Dark), Responsive (35, Desktop/Tablet/Mobile), Typography (2), Space (19), Radius (10), plus Legacy · Color (29, Light/Dark) and Legacy · Display face (2, 3 modes), both hidden from publishing. This matches 06 and 13 §4 | §4 | solid | None | — |
| T2 | Theme scopes | text/* is scoped to text, shape fill and stroke (so icons can use it); surface/* to fills; border/* to fills and strokes; effect/glow to effect colour; Responsive sizes to width and height, gap, corner radius or font size. Correct | §4 | solid | None | — |
| T3 | Every variable | Each one has its Web code syntax set, and the Theme names match 06 §4 one to one | §4 | solid | None | — |
| T4 | Radius `radius/card` (`--radius-40`), `radius/card-sm` (`--radius-32`) | These duplicate Responsive `card/radius` (`--radius-card`, 40/40/32) under numeric CSS names, and 06 §4 doesn't list them. Two ways to set a card radius means drift | §4 | should | Point both at card/radius or remove them once nothing uses them (check the instances first). Update 06 §4 | Claude |
| T5 | Responsive `tile/radius` (`--tile-radius`) | The code today uses `--radius-tile` (site `globals.css`), like the rest of the radius family. Figma and 06 say `--tile-radius` | §4 | should | Set the code syntax to `--radius-tile` and update 06 §4 | Claude |
| T6 | Responsive `font/display-small` (`--fs-serif-s`), `font/display-large` (`--fs-large`), `font/display-number` (`--fs-number`) | The CSS names don't follow the style names (Display/Small and the others). Opinion: rename them once, before F writes the tokens | §4 | nice | `--fs-display-s`, `--fs-display-l`, `--fs-display-number`, or keep and note it in 06 | Claude |
| T7 | Primitives | 8 primitives are used by no token: ink/600, ink/700, ink/975, slate/400, slate/700, alpha/ink-12, alpha/white-15, alpha/white-18. ink/400 (#6B7280, the old tertiary) is still aliased, but only by Legacy | §4 | nice | Delete the 8 (check bound nodes on the legacy pages first) | Claude |
| T8 | Theme `effect/glow` | The token exists, but no effect style binds it: Glass/Primary glow and its hover use raw colours, and no effect style in the file has a bound variable | §4, §6 | should | Bind the glow drop shadows to effect/glow and the inner glows to alpha primitives through new effect tokens, or note in 06 that effects are raw by design | Claude |
| T9 | Motion | Easing, durations and the glow loop live only in the Motion table frame (`153:864`), not as variables. Fine, because Figma can't drive motion from variables | §4 | nice | Optional: STRING variables with the code syntax `--ease-soft`, `--ease-swift` so Dev Mode shows the names | Claude |
| T10 | CSS naming | Theme CSS names come from the old code (`text/primary` → `--color-ink`, `surface/inverse` → `--color-cta`). They map one to one but don't read alike. Opinion: keep them, because the code, 06 and Figma already agree, and renaming every token adds churn with no gain for users | §4 | nice | Keep. F writes them exactly as the code syntax says | F |

### Typography (13 §5)

| # | Node or item | Issue | 13 § | Weight | Fix | Owner |
|---|---|---|---|---|---|---|
| Y1 | 15 text styles (Display/Title `S:4755…` and the rest) | Font and size are bound to Typography and Responsive; line height and tracking are in percent. Sizes match 06 §5 | §5 | solid | None | — |
| Y2 | Design system page | No text node on the page lacks a text style (0 of 2,503 nodes scanned) | §5 | solid | None | — |
| Y3 | Type scale | There is no map from styles to heading levels (H1 to H6), and no styles for long form: article H2 and H3, list item, blockquote, inline link, caption, table. The new Blog post, Hire, Industry and Deliverable templates (plan step 4) need them, and SEO and AEO pages lean on clear H2/H3 structure | §5 | must (for the new templates) | Add Article/H2 (Newsreader, Display/Number sizes), Article/H3 (Jakarta 600, 20/18), Article/Body (Body/L), Article/Quote, Article/Caption (Body/XS) and a Link treatment (underline, text/primary, hover text/secondary). Add a heading map to the 00 · Read me frame: Display/Title = H1, Display/Card = H2 on core pages | Claude |
| Y4 | Text links | There is no inline link style or hover for links in running text (footer links, cookie banner copy, privacy page) | §5, §7 | should | Part of Y3 | Claude |
| Y5 | Fonts | The 00 · Read me frame (`152:555`) names the fonts but not their source, weights or licence. Fact to confirm in F: Newsreader and Plus Jakarta Sans are both on Google Fonts under the SIL Open Font License; the site uses Newsreader 400 and Jakarta 400, 500 and 600 | §5 | nice | One line in Read me and 06 §4 | Claude |
| Y6 | Long text | There is no rule for wrapping, truncation or line length. The 700 column with 48px padding gives about 75 to 85 characters at 18px, which is fine for cards but long for articles | §5 | should | Note in Read me: articles 65 to 75 characters a line, titles wrap and never truncate, Work card meta truncates to one line | Claude |
| Y7 | Legacy text styles | 28 Legacy/Rez/* styles, none used on this page. 5 have no description (Sans Lead, Sans Quote, Sans Stat, Serif Title, Serif Card) | §4 | nice | Leave them; Figma D decides archive cleanup | Figma D |

### Colour, effects and contrast (13 §6)

Contrast was computed with the WCAG formula (Claude, 27 Oct). The backdrop values are estimates from the Effects stage screenshot (`153:844`): a dark area of the portrait (about #3A2E28), a mid tone (#806A5A) and the cream shirt (#E8D8C8), each under the 40% black card glass.

| Token | On black | On raised #151920 | Card over dark photo | Card over mid tone | Card over the shirt |
|---|---|---|---|---|---|
| text/primary #EEF0F3 | 18.4 | 15.4 | 14.7 | 8.7 | 3.3 |
| text/secondary #9AA1AC | 8.1 | 6.8 | 6.5 | 3.8 | 1.5 |
| text/tertiary #7D8592 | 5.6 | 4.7 | 4.5 | 2.7 | 1.0 |
| text/muted white 50% | 5.3 | 5.2 | 5.2 | 3.9 | 2.1 |
| text/danger #FF7A7A | 8.3 | 7.0 | 6.6 | 4.0 | 1.5 |
| text/note, text/success | 13+ | 11+ | 10+ | 6+ | 2.3 to 2.4 |

text/inverse on surface/inverse is 16.2, and text/on-bubble on the bubble is 19.1. The focus ring (85%) is 13.0 on black, and border/focus (45%) is 4.4.

| # | Node or item | Issue | 13 § | Weight | Fix | Owner |
|---|---|---|---|---|---|---|
| C1 | Text tokens | All pass AA (4.5) on black, raised and glass over dark photo areas, and tertiary sits right at 4.5. Over mid tones, secondary, tertiary, muted and danger fail; over the bright shirt everything but primary fails. The real backdrop is blurred and placed per page, so whether a card ever sits over a bright area is unknown until it is measured | §6 | should | R samples the real composited background behind every card at 1440, 768 and 390 (axe can't measure over images). If anything fails, see Rez decides Q1 | Claude (R) |
| C2 | `border/rim` (white 12%), `border/hairline` #1A1F27 | Each is 1.27 to 1 on black, below the 3 to 1 that WCAG 1.4.11 asks for when the rim is what shows a field's edge. The Filter chip's default rim is about 1 to 1 against the glass | §6 | should | Rez decides Q2 | Rez, then Claude |
| C3 | Colour / text swatches (`152:661`) | The text/tertiary label still reads "#6B7280", but the token is #7D8592 | §6 | should | Fix the label | Claude |
| C4 | Effect styles | 9 V4a effect styles match 06 §6 and all have descriptions. Glass/Card, Nav and Tile carry the blur and the inner glow | §6 | solid | None | — |
| C5 | Archive card `40:166`, `40:169` | Raw background blur, no effect style | §6 | should | Add a Glass/Label style or use Glass/Tile plus the blur | Claude |
| C6 | Raw colours inside components | Work card and Case mini tile placeholders use #26292E (`91:207`), Archive card uses black 60%, Package card black 28%, Visitor clock's rim white 16% (`64:192`, `134:453`), and Note/To confirm (`40:206`) and Profile sample tile (`177:18160`) use #F5B840 strokes. The Visitor clock's flag colours are fine as artwork | §4, §6 | should | Bind them: surface/raised or a new surface/placeholder, alpha primitives through new tokens, border/rim, border/note | Claude |

### Components (13 §7)

| # | Node or item | Issue | 13 § | Weight | Fix | Owner |
|---|---|---|---|---|---|---|
| K1 | Sound toggle `64:175` | The description says "Off by default, remembered per browser". Row 51 says on by default, starting on the first click, and 06 §9.8 calls any off note stale | §7 | must | Rewrite: on by default, starts on the first click, remembered per browser | Claude |
| K2 | Tag `115:221` | The description says "Client and Concept follow spec 4. Coming soon, NDA and Password…". NDA is deleted (row 60); Client and Concept are never built (rows 60 and 81). The Client and Concept variants still exist for the archive copy page | §7 | must | Rewrite. Rename the variants "Client (archive only)" and "Concept (archive only)", or move them off the page if `196:12120` no longer needs them (Figma D) | Claude |
| K3 | Work card `39:184` | The description lists NDA among the Locked kinds (row 60) | §7 | must | Drop NDA. Locked shows Coming soon or Password only (row 81) | Claude |
| K4 | Cookie banner `135:525`, copy text `64:262` and `135:521` | One text range fill is bound to a Legacy · Color variable. If that collection's mode isn't Dark, the link colour shifts. The 22 Oct note said no Legacy bindings were left on this page | §4, §7 | must | Rebind it to text/primary | Claude |
| K5 | Focus states | No Focus variant on Track switch `39:248`, Expand button `39:257`, Sound toggle `64:175`, Dock item `115:237`, Work card `39:184`, Archive card `40:171`, Timeline item `39:211`, FAQ item `88:199`, Accordion pill `115:256`, Template row `136:523`, Next case `137:530`, Case mini tile `91:206`, Owner chip `134:460`, or the Footer and Top bar links. Action pill, Glass pill, Icon tile, Filter chip, Field and Select do have one (2px border/focus-ring outside) | §7, §13 | must | Add a Focus foundation to 01 · Foundations (2px border/focus-ring, 3px offset in code, radius follows the element, links get the ring around the text box), then add Focus variants to the 13 components | Claude |
| K6 | Hover and pressed | No hover on Track switch, Sound toggle, FAQ item, Accordion pill, Template row, Timeline item, Next case or Expand button. Some descriptions name hover behaviour that no variant shows | §7 | should | Add Hover to those that are links or buttons. Pressed can stay a code rule (scale 0.97, 06 §6) noted in Read me | Claude |
| K7 | Descriptions missing | Expand button `39:257`, Timeline item `39:211`, Decision row `40:159`, Offer card `40:178`, and 14 icons (Arrow left, Arrow up, Behance, Check, Chevron down, Chevron up, Close, Eye, File, Home, LinkedIn, Minus, Plus, Send) | §7 | should | Write them: what it is, when to use it, behaviour, code name | Claude |
| K8 | Unbound spacing inside components | About 250 gaps, 330 paddings and 40 radii are raw numbers (heaviest: Field, Select, Dock, Footer, Track switch, Action pill). Most match a token (2, 4, 6, 8, 10, 12, 16, 20, 24 and radius 999 = radius/full, 16 = radius/control, 24 = radius/pill). Off the grid: gaps of 3 (Sound toggle, Dock) and 14 (Action pill, Work card); paddings of 5, 18, 22 and 170 (Timeline item); radii of 2, 3 and 7 | §4 | should | Bind every value to space/*, card/* or radius/*. Snap off-grid values to the nearest token where it changes 2px or less, and show Rez only the changes he could see. Keep 22 and 28 where they are control/padding-x | Claude |
| K9 | Size bindings | Action pill, Glass pill, Filter chip and Icon tile L bind their heights to control/height, control/height-sm, chip/height and tile/size. Icon tile M (48) and Dock item (56/48) use raw sizes | §4, §7 | should | Bind Icon tile M to control/height-sm. Add a dock/item token (56/56/48) | Claude |
| K10 | Track switch `39:248` | The variant values are All/Brand/Product/Decks, while the labels read All, Brand, Web & UI/UX, Pitch decks. Its description says "matching the three CVs" (the CVs stay off the site) | §2, §7 | nice | Rename the values to match the labels and drop the CV phrase | Claude |
| K11 | Missing components | There is no Lightbox component (the lightbox lives only in page frames), no Skip link, no Breadcrumb, and none of the blocks the new templates need: post card, article prose, table of contents, author and updated line, related links, and an answer box for AEO if SEO's content model has one | §7 | must (new templates), should (Lightbox, Skip link) | Build them with the new templates in chat A step 4, after SEO's content model is merged | Claude |
| K12 | Mobile variants | Track switch, Top bar, Visitor clock, Dock, Dock item, Footer, LinkedIn before and after, Modal and Cookie banner have Desktop and Mobile variants. The rest resize through the Responsive modes. Touch targets: Dock item 48, Select option 44, Filter chip 40 on phones, controls 56. All at least 24 (WCAG 2.2 AA) and at least 44 where it counts | §7, §9 | solid | None | — |
| K13 | Code links | Descriptions name today's classes (`.glass-pill`, `.tile`, `.chip`), and there is no Code Connect. Code Connect needs a paid Figma plan (Organization or Enterprise; check against Rez's seat) | §7 | nice | After F, add a "Code:" line with the component path to each description (free). Skip Code Connect unless Rez already pays for it | Claude, after F |
| K14 | Profile sample tile `177:18155` | It isn't in 06 §7 | §7 | nice | Add it to 06 §7 (LinkedIn invite) | Claude |

### Icons (13 §12)

| # | Node or item | Issue | 13 § | Weight | Fix | Owner |
|---|---|---|---|---|---|---|
| I1 | 07 · Icons `151:658` | 44 icons, all 24 by 24, 119 strokes all at 1.6 and all bound to text/primary, with no raw fills. This matches 06 §7 | §12 | solid | None | — |
| I2 | Export settings | None of the 44 icons has an export setting | §12 | should | Add SVG export to each, so Dev Mode downloads them as SVG | Claude |
| I3 | Coverage | The sound bars inside Sound toggle are drawn in the component with raw radii of 2, not as an icon. Nothing else looks missing for the current pages | §12 | nice | Leave them, or add Icon/Sound so the toggle matches the set | Claude |

### Read me and Foundations

| # | Node or item | Issue | Weight | Fix | Owner |
|---|---|---|---|---|---|
| R1 | 00 · Read me `152:555` | It says every component has its states, which K5 and K6 contradict. It is dated 22 Oct | should | Update it after the fixes. Add the heading map, focus rule, fonts and licence, and long text rules | Claude |
| R2 | 01 · Foundations `152:579` | Colour, type, responsive tokens, breakpoints, spacing, radius, effects and motion are all there. There is no Focus spec and no contrast table | should | Add Focus (K5) and a contrast table (C1, C2) | Claude |

## Rez decides

**Q1. If text fails contrast where a card sits over a bright part of your photo, how should we fix it?** (C1; only matters if R's check finds a fail)
1. **Darken the card glass only as much as needed (Recommended).** surface/glass-card goes from 40% black to the lowest value that passes, likely 50 to 60%. The same look, a little darker.
2. Darken the photo behind the cards instead (a soft dark gradient on the backdrop). The cards stay as they are, and the portrait looks moodier.
3. Keep it as it is and accept a few fails over the shirt area (not AA).

**Q2. Field and chip edges are very faint (1.3 to 1 against the 3 to 1 guideline). Make them clearer?** (C2)
1. **Brighten only field and select rims at rest to about 40% white (Recommended).** They meet AA, and chips and cards keep their soft look.
2. Brighten every rim (fields, chips, cards). More contrast everywhere, less glassy.
3. Keep them as they are. Fields are found by their labels, but this is a likely fail in an accessibility audit.

## For other tracks

| Track | Note |
|---|---|
| Practices | Contrast over the backdrop photo can't be tested by axe or Lighthouse. Plan a manual sample per breakpoint (C1). The focus spec is 2px border/focus-ring #EEF0F3 at 85% with a 3px offset (K5). Field rims fail 1.4.11 today (C2). Target sizes pass (K12). Add a Skip link to the code standard (K11) |
| SEO | The new templates get Article text styles and prose blocks (Y3, K11). Tell chat A which blocks your content model needs per family (breadcrumbs, table of contents, answer box, FAQ, related links, author and updated line) so the components match the fields |
| Figma B | The Cookie banner's Legacy binding (K4) is in the component, so fixing it fixes every instance. Raw values on the page frames are yours. The component side is K8 |
| Figma C | Share images at 1200 by 630 have no type tokens. If the satori template reuses Display/Title and Body/L, note their sizes for that format on the template frame |
| Figma D | The Handoff page's token table must change with T4, T5 and T6. The archive copy page `196:12120` is why the Tag variants Client and Concept still exist (K2): say whether that page still needs them. The Legacy collections and styles stay while the legacy pages exist |
| Operations | Idea: a small `tokens:check` script in the check gate that compares the CSS custom properties with a JSON export of the Figma variables, so drift shows up early. Optional and free |

## For the build chats

| Chat | Must do |
|---|---|
| A (Figma ready) | Fix K1 to K5, C3, Y3 and K11 (with the new templates) first; then K6 to K9, T4, T5, T8, C5, C6, I2, R1 and R2; the nice rows if time allows. Apply Rez's Q1 and Q2 answers. Update 06 §4, §5 and §7 to match. Save a named version |
| F (Foundation) | Write tokens from the Figma code syntax exactly (T3, T10): Theme, Responsive with three breakpoints (Tablet equals Desktop apart from the viewport), Space, Radius, Typography. Use `--radius-tile` (T5). Add the Article styles (Y3) and a global `:focus-visible` ring from the Focus spec (K5). Motion stays as built (06 §6) |
| B (App and data) | Field, Select and Alert states as drawn, error text plus icon (13 §13), and Toast as role status |
| C (Cases) | Work card Locked shows Coming soon or Password only, never NDA, Client or Concept (K2, K3) |
| D (Pages) | Sound on by default (K1). Dock item and Track switch focus rings. FAQ and Accordion as buttons with aria-expanded |
| E (Search and templates) | Build the blog and SEO templates only from the Article styles and new components (Y3, K11), with articles at 65 to 75 characters a line (Y6) |
| W1, W2 (Content) | Use H2 and H3 in order, with no skipped levels, so they map to the Article styles |
| R (Review) | Sample contrast over the backdrop at 1440, 768 and 390 (C1). Keyboard pass for visible focus on every interactive element (K5). Compare the CSS tokens with the Figma code syntax |

## Sources

- Figma `2PZQVIX9UJO8NqnXNqiNDe`, page `114:13313`, read through the Plugin API on 27 Oct 2026 (variables, text, effect and paint styles, 2,503 nodes on the page, 47 component roots, 44 icons), with screenshots of `153:844` and `152:661`.
- [13-figma-handoff.md](../../13-figma-handoff.md) §4 to §7, §12, §13 (24 Oct); [06-design-system.md](../../06-design-system.md) (22 Oct); [10-confirmations.md](../../10-confirmations.md) rows 51, 60, 81; `site/src/app/globals.css` (custom property names).
- Contrast: the WCAG 2.2 relative luminance formula, computed locally. The backdrop tones are estimates from the screenshot.

## Fixes applied (27 Oct)

Done in Figma on Rez's go (relayed by the main session, 27 Oct), on page `114:13313` only, except a copy-preserving property move on six Field instances (see the Figma B row). Finished in the early hours of 28 Oct. Final audit of the page: no stray nodes, 0 Legacy bindings, 0 text without a style, every component and set has a description, 36 sets with 181 variants, 20 sets with a Focus state.

### Done

| Finding | What changed | Node ids |
|---|---|---|
| K1 | Sound toggle description says on by default, starts on the first click (row 51) | `64:175` |
| K2 | Tag description rewritten (no NDA; Client and Concept never built); variants renamed "Client (archive only)" and "Concept (archive only)" | `115:221`, `115:222`, `115:224` |
| K3 | Work card description: Locked shows Coming soon or Password only | `39:184` |
| K4 | Cookie banner copy: the node fill was still bound to Legacy · Color text/secondary. It is now Theme text/secondary, with "Privacy" in text/primary and underlined | `64:262`, `135:521` |
| K5 | Focus spec in 01 · Foundations (rules table plus example instances). Focus variants added to all 13 components | Spec `254:23633` (heading `254:23632`). Track switch `254:8403`, Expand button `254:8415`, Sound toggle `254:8424`, Dock item `254:8430` and `254:8432`, Work card `254:8434`, Archive card `254:8439`, Timeline item `254:8449`, FAQ item `254:8462`, Accordion pill `254:8472`, Template row `254:8491`, Next case `254:12190`, Case mini tile `254:12197`, Owner chip `254:12205` |
| K5, structure | Track switch, Expand button, Sound toggle, Timeline item, FAQ item, Accordion pill and Template row have a new **Interaction** property (Default, Hover, Focus) beside their value property. Existing instances default to Interaction=Default, so nothing changes on the pages. Next case, Case mini tile and Owner chip became component sets; the original components (`137:530`, `91:206`, `134:460`) are now their State=Default variant, so every instance stays linked | Sets `254:12196`, `254:12201`, `254:12208` |
| K6 | Hover variants: Track switch `254:8394`, Expand button `254:8412`, Sound toggle `254:8418`, Timeline item `254:8442`, FAQ item `254:8456`, Accordion pill `254:8468`, Template row `254:8476` (shows its Action pill's Hover), Next case `254:12178`, Owner chip `254:12202` | As listed |
| Y3 | New text styles, all bound to Typography and Responsive and described: Article/H2 (Newsreader 400, font/display-number), Article/H3 (Jakarta 600, new variable font/article-h3 at 20/20/18, `--fs-article-h3`), Article/Body (font/body-l, 160%, 20px paragraph spacing), Article/Quote (font/display-small, 140%), Article/Caption (font/body-xs). Specimen in 01 · Foundations | Variable `VariableID:254:23780`; specimen `254:24005`, heading `254:24004` |
| Y4 | Link component set in 02 · Actions: Default (underline, text/primary), Hover (text/secondary), Focus (ring, radius/xs), with a Label text property, a title and notes | Set `254:23794` (`254:23788`, `254:23790`, `254:23792`), title `254:23786`, notes `254:23787` |
| Heading map | In 00 · Read me (the Headings row) | `258:19713` |
| K7 | Descriptions written for Expand button, Timeline item, Decision row, Offer card and the 14 icons. Descriptions updated for every component that got new states | 33 nodes, among them `39:257`, `39:211`, `40:159`, `40:178` |
| K9 | Icon tile M is bound to control/height-sm. A new Responsive variable, dock/item (56/56/48, `--dock-item`), is bound to every Dock item variant, with the Mobile variants pinned to the Mobile mode | `126:13292`, `115:237`, `VariableID:255:606` |
| K10 | Track switch values renamed to match the labels: All, Brand, Web & UI/UX, Pitch decks. "Matching the three CVs" removed from the description and the canvas note | `39:248`, note `151:567` |
| T5 | tile/radius code syntax is now `var(--radius-tile)` | — |
| T8 | New Primitives alpha/glow-28, -42, -45 and -60, and Theme effect/glow-drop, effect/glow-halo, effect/glow-drop-hover and effect/glow-halo-hover (`--glow-drop` and the rest), bound to the warm drop shadows of Glass/Primary glow and its hover. The white inner glows stay raw by design, and the Glass/* style descriptions say so (in code each is one `--inset-*` shadow) | `VariableID:255:599` to `255:602` |
| C3 | The text/tertiary swatch label now reads #7D8592 | In `152:661` |
| C5 | New effect style Glass/Label (background blur 12). The Archive card label chips use it, plus the new token surface/glass-label (black 60%, `--glass-label`) | Label chips in `40:171`, token `VariableID:255:604` |
| C6 | Cover placeholders bound to the new surface/placeholder (ink/750, `--surface-placeholder`). The Package card panel uses the new surface/glass-inner (black 28%, `--glass-inner`). Note/To confirm uses surface/note and border/note. The Visitor clock flag rim uses border/rim | `VariableID:255:603`, `255:605`, `89:198`, `40:206`, `64:192`, `134:453` |
| I2 | SVG export on all 44 icons | 07 · Icons |
| K8 | 255 gaps, 368 paddings and 54 radii bound to Space and Radius tokens. A new Space variable, space/28 (`--space-28`), covers the 28px paddings already on the 4px grid | `VariableID:258:593` |
| R1 | 00 · Read me: dated 27 Oct. The Type row lists 20 styles, the fonts with their source and licence, and the weights in use. The Components row describes the states as they are now. New rows: Headings, Focus, Long text, Contrast | `152:557`, `152:569`, `152:572`, `258:19713`, `258:19716`, `258:19719`, `258:19722` |
| R2 | 01 · Foundations: the Focus spec, plus the contrast table with a note on how it was measured | `254:23633`, `254:23701`, `254:23779` |
| Figma D notes | Filter chip: 44px hit area in code. Owner chip: 44px hit area in code. Modal: a sheet below 640px; min(880px, 100vw minus 48px) from 640px up. Dock: fixed above the safe area (24px plus env(safe-area-inset-bottom)) | `115:242`, `254:12208`, `138:586`, `133:667` |
| Figma B note | Field has a new **Error text** property (default "Error text"), bound only in the three Error variants, so an error state can no longer show "Add a line about your project." by default. To keep the page copy unchanged, the six Field Error instances that had real error lines got them copied into Error text | Property `Error text#255:0`; variant texts `127:197`, `127:235`, `127:277`; instances `146:4249`, `146:4248`, `146:4251` (live) and `196:14011`, `196:14010`, `196:14013` (archive copy) |
| Stale canvas note | The Archive card note said "desaturated at rest". It now says original colour, matching 06 §9.7 | `151:613` |
| Layout | Sets that grew pushed the nodes below them down inside their sections, and the page's sections were restacked with 200px gaps. Nothing overlaps | Sections 02, 03 and 05 |

### Skipped, and why

| Finding | Why |
|---|---|
| T4 | radius/card and radius/card-sm are still bound on the live page (`82:9882` and `150:6489` Cookie banner, `174:18077` Notes · Share images), so the numeric names stay. The Modal sheet's 32px top corners now also use radius/card-sm (`138:574`) |
| T6, T7, K11 template blocks, K13 | Not now, per the main session (Rez decides, or later) |
| Q1, Q2 | Rez decides |
| Raw values left on purpose | Radius 2 (Sound toggle bars and the Modal grabber, 21 nodes) and 3 (the flag); the Timeline item's 170px inset (a 150px years column plus a 20px gap, now in its description); the Visitor clock flag colours (artwork) |

### Rez must see

| Item | Where |
|---|---|
| **Wrong password line.** The four Field Password Error instances never had an error line of their own: they showed the helper default. They now show the placeholder "Error text" until Rez picks the real line. Live: `144:14391`, `146:4104`. Archive copy: `196:13979`, `196:12729`. Figma B owns those frames | ↳ V4a · Pages, the Stats sign in and recruiter case Wrong password frames |
| Changes of 2px or less from snapping to the grid: Action pill label to arrow gap 14 to 16; Work card gaps and padding 14 to 16; Alert and Toast padding 14 to 16; Toast and Timeline item padding 18 to 20; Top bar padding 22 to 24; Sound toggle bar gap 3 to 4; Note padding 5 to 6; Skeleton radius 7 to 6 | Design system page; the instances follow |
| Small colour changes: the cover placeholder goes from #26292E to #20262F (seen only before an image loads); the Visitor clock flag rim goes from white 16% to 12% | Work card, Case mini tile, Visitor clock |
| The Modal description now says min(880px, 100vw minus 48px) from 640px up, as Figma D asked, but the Desktop variant is drawn 760 wide | Modal `138:586`. Figma D or Rez confirm the width |
| The Owner chip is drawn 32px tall, so its description says "32px to the eye, 44px hit area in code" rather than 40 | `254:12208` |

### For the coordinator (docs I may not edit)

- 06 §4 needs the new tokens: surface/placeholder (`--surface-placeholder`), surface/glass-label (`--glass-label`), surface/glass-inner (`--glass-inner`), effect/glow-drop, -halo, -drop-hover and -halo-hover, dock/item (`--dock-item`), font/article-h3 (`--fs-article-h3`), space/28, and tile/radius as `--radius-tile`. 06 §5 needs the five Article styles, §6 needs Glass/Label, and §7 needs Link, Profile sample tile, the Focus states, the Interaction property and the Field Error text property.
- For F: `site/src/app/layout.tsx` loads Newsreader with `style: ["normal", "italic"]`, but no V4a style uses italic. Opinion: drop italic to save a font file. Article/Quote is upright.

## Round 2 (27 Oct)

Rez accepted every recommended answer in [../for-rez.md](../for-rez.md) on 27 Oct. Done on page `114:13313`, finished early on 28 Oct. Audit after the changes: no stray nodes, and every new component has a description, styled text and bound fills, strokes, gaps, paddings and radii. **The template components are ready: figma-b can compose the Hire, Industry, Deliverable, Guide, Guides index and hub templates from section 08 · Template blocks (`263:613`).**

### Done

| Decision or item | What changed | Node ids |
|---|---|---|
| 37, field edges | New Primitive alpha/white-40 and Theme border/field (white 40%, `--border-field`) and border/field-hover (white 60%, `--border-field-hover`), bound to the Box edge in all 18 Field and 12 Select variants (rest, filled and disabled use border/field; hover uses border/field-hover). The Select menu, chips and cards keep border/rim. **border/focus now aliases white 80% (was 45%)**, so focus stays clearly brighter than rest and hover; only Field and Select use it. Contrast at rest: 3.7 to 1 on black, 3.8 on raised and on glass over dark photo areas, 3.0 over mid tones. Hover is 4.8 to 7.4, focus 7.1 to 13.1 | `VariableID:261:8547`, `261:8548`, `261:8549`; border/focus `VariableID:114:3464`; Field `115:247`, Select `88:458` |
| 10, contact form chips | New **Chip group** set in 04 · Forms and messages: Kind=Timeline or Budget × Picked=No or Yes, built from Filter chip instances that wrap. Labels "Timeline · optional" and "Budget · optional" follow the Field pattern ("Company · optional"). The Budget rows carry a Note/To confirm reading "Copy to confirm (Rez)". The description covers radiogroup semantics, clearing a pick, hidden fields and allow lists | Set `262:649` (`262:593`, `262:605`, `262:617`, `262:633`); title `262:650`, notes `262:651` |
| 7 and 8, footer | Footer, both variants: "Guides" after Services in Pages, "Hire" first in More (beside Work with me and For agencies, the audience pages). The description lists the links and their routes, and now says the LinkedIn invite shows the footer on desktop only (row 52) | `261:8991`, `261:8992` (Desktop), `261:8993`, `261:8994` (Mobile), set `135:507` |
| Template blocks | New section **08 · Template blocks**, each block with a title, notes, states where interactive, and a description naming its kebab-case code component | Section `263:613` |
| Breadcrumb | Size=Desktop (Home / hub / page) with Default and Focus, plus Size=Mobile (back arrow and parent). Links are Link instances in Label/S. `breadcrumb` | `263:638` (`263:616`, `263:624`, `263:632`) |
| Answer box | Text property Answer: one sentence of 25 to 40 words, Article/Body text/primary, on surface/subtle with a border/rim edge and radius/lg. Static. `answer-box` | `263:641` |
| Proof block | Cases=3 and Cases=2: a Claim text property (sample: the Earworm line from 00-facts §3, word for word) plus Case mini tiles that wrap; tile titles read "Case title" as placeholders. `proof-block` | `264:647` (`264:621`, `264:636`) |
| Includes list | Includes item (check icon plus an Item text property) and Includes list (4 items). `includes-list` | `264:650`, `264:654` |
| Related links | Related link set (Default with a hairline rule, Hover with surface/hover, Focus with the ring; Title property) and Related links (the "Related" eyebrow plus 3 rows). `related-links` | `264:690` (`264:675`, `264:680`, `264:685`), `264:693` |
| Author and updated line | "By" plus a Link to the author, then an "Updated" text property, in Article/Caption. `byline` | `263:645` |
| Post card | Default, Hover and Focus; text properties Kind, Title, Summary and Updated; glass card with Glass/Card and radius/xl. `post-card` | `264:740` (`264:713`, `264:722`, `264:731`) |
| Table of contents | TOC item (Default, Hover, Active, Focus; Heading property) and Table of contents (Size=Desktop list with the "On this page" eyebrow; Size=Mobile collapsed row). `table-of-contents` | `264:751` (`264:743`, `264:745`, `264:747`, `264:749`), `264:769` (`264:754`, `264:765`) |
| Article prose sample | H2, a paragraph with an inline link, a bullet list, H3, a quote with a left rule, and a figure with a caption, all on the Article styles, with placeholder text only. `article-prose` | `265:678` |
| Skip link | Its focused look (surface/inverse pill with the ring). The description says it stays hidden until keyboard focus and moves focus to main. `skip-link` | `263:653` |
| Lightbox | Made from copies of the live frames `82:9884` and `150:6502` (the originals are untouched): Size=Desktop and Size=Mobile, Caption and Counter text properties, tiles named Close, Previous and Next. Backdrop bound to the new surface/scrim-strong (black 92%, `--scrim-strong`). `lightbox` | `265:716` (`265:697`, `265:712`); `VariableID:265:719`, `265:720` |

### Rez and the other tracks should see

| Item | Who |
|---|---|
| **border/focus changed value**: white 45% to 80% (Field and Select focus edges only). 06 §4 must change with it, together with the new border/field, border/field-hover and surface/scrim-strong | Coordinator (06), F |
| **Copy mismatch on the live lightbox frame**: the counter reads "1 / 6" while the caption says "2 of 7" (`82:9884`). The component uses "2 / 7". The live mobile frame also uses black 94% against 92% on desktop; the token settles both at 92% | figma-b (frame), Rez if the counter should go |
| New UI words on the blocks, worth one look: "By", "Updated", "Related", "On this page", "Skip to content", and the chip labels "Timeline · optional" and "Budget · optional". The budget ranges themselves carry the copy to confirm note | Rez |
| Footer placement: Guides sits in Pages and Hire in More. If Rez wants both in one column, it is a one minute change | Rez |
| The Proof block shows placeholder tiles ("Case title", no cover); figma-b sets the real cases per template | figma-b |
| For F and E: the new code component names are breadcrumb, answer-box, proof-block, includes-list, related-links, byline, post-card, table-of-contents, article-prose, skip-link, lightbox and chip-group, plus the tokens `--border-field`, `--border-field-hover`, `--scrim-strong` and `--alpha-white-40`, `--alpha-black-92` | F, E |

## Round 3 (28 Oct)

The main session moved this from figma-b, which waits on Rez's approval. **The desktop templates are ready: figma-d can draw the 390 versions next.** They live in the new section **V4a · New templates (28 Oct)** (`269:8604`) on page `10:3`, at x 0, y 66600, clear of every other section. I edited no other section.

### How they are built

- Each frame started as a copy of the Pitch decks service page (`82:9121`, untouched), so the backdrop, top bar, glass cards, Call card (Variant=Case), Footer (with Hire and Guides) and Dock match the service pages exactly. The service cards were then replaced with instances from 08 · Template blocks, FAQ item, Meta cell, Decision row, Tag and Work card copies with their real covers.
- Every card and the header carry a **Sample copy** note (Note/To confirm). Each also has a Dev Mode annotation naming its content field from SEO §3.5 (`h1`, `answer`, `proofClaims`, `proofCases`, `faqs`, `related`, `includes`, `formats`, `problems`, `role`, `jobTitles`, `tools`, `availability`, `updatedAt`, `kind`).
- One H1 per frame (the header Title, Display/Title). A **heading map** text sits to the right of each frame, with the dock choice and a sample copy reminder.
- Proof claims are word for word from 00-facts §3: the Earworm line, "300+ client reviews", and the Delineate scope line. Case tiles show their real covers; Nike Mind keeps "not affiliated with Nike", and the other tiles hide their meta line.

### Templates

| Template | Route used as sample | Frame | Heading map | Blocks, in order | Dock |
|---|---|---|---|---|---|
| Hire hub | `/hire` (page map row 1) | `270:8779` | `270:9147` | Header (breadcrumb Home / Hire, H1, answer, Ask for my CV + See the work), Roles (4 Post cards), Proof (300+ client reviews), Cases (Earworm, Real estate website, SyncGrid), Questions, Related, Call card | About |
| Hire role | `/hire/presentation-designer` (row 3) | `270:9148` | `270:9458` | Header, The role (Meta cells: job titles, "Tools to confirm (Rez)", "Open to remote full time and contract roles"), Proof (Earworm line), Cases (Earworm, Nike Mind), Questions, Related, Call card | About |
| Industry hub | `/for` (row 13) | `270:9459` | `270:9634` | Header (Book free strategy call + Send a message), Industries (2 Post cards), Call card | Work |
| Industry | `/for/saas` (row 14) | `271:9078` | `271:9384` | Header, Problems I solve (3 Decision rows with placeholder problems), Proof (Delineate scope line), Cases (SyncGrid, CortexAI, Orion), Questions, Related, Call card | Work |
| Deliverable | `/decks/saas-pitch-deck` (row 26) | `271:9385` | `271:9691` | Header (Home / Pitch decks / SaaS pitch deck), What the deck includes (Includes list plus Formats tags PowerPoint, Google Slides, Figma), Proof, Cases (Earworm, Nike Mind), Questions, Related, Call card | Work |
| Guides index | `/guides` (row 53) | `272:9421` | `272:9640` | Header (Book free strategy call only), Latest guides (4 Post cards from batch 1 guides), Call card | None |
| Guide | `/guides/pre-seed-pitch-deck` (row 54) | `272:9641` | `272:9937` | Header (breadcrumb, H1, byline, answer, no buttons), Table of contents, Article (prose sample), From a real project (Earworm Work card), Questions, Related, Call card as the end CTA | None |

Checked by one screenshot of each frame. Fixed after the check: odd case rows now keep the half width card (`270:9052`, `271:9319`), and the Guide's case card no longer collapses (`From a real project`).

### Rez decides or confirms

| Item | Default used |
|---|---|
| Dock on the new pages | Hire pages: About. Industry and Deliverable: Work. Guides: none active |
| The breadcrumb label for `/for` | "Industries" |
| Problems on Industry pages | Placeholders ("Problem from a SaaS case brief"). The real lines must come from the case briefs (SEO §3.5); none are invented |
| Hire hub proof claim | "300+ client reviews" (the role pages use the Earworm line) |
| The cost guide's eyebrow | "Comparison" on the Guides index sample; use "Guide" if Rez prefers |
| Every H1, answer, FAQ and summary | Sample copy written to the voice rules, from batch 1 of the page map. The build uses the content files only. "pre-seed" keeps its hyphen, as in the Earworm claim |

### For the other tracks

- **figma-d:** the 390 versions. Breadcrumb Size=Mobile, Table of contents Size=Mobile, Proof block tiles wrap two per row, and the Post card and Answer box fill the 358 column.
- **figma-b:** nothing to redo. Its service pages are unchanged, and the templates reuse its Call card, Footer and Dock instances.
- **E:** the annotations name the fields per block. Hubs (`/hire`, `/for`, `/guides`) show only live children, as Post cards.

### Rez's answers applied (28 Oct, [../for-rez.md](../for-rez.md) §2.8)

| Decision | What changed | Node ids |
|---|---|---|
| 46 | Budget ranges and the new interface words approved. The "Copy to confirm (Rez)" note is gone from both Budget variants of Chip group; its description and canvas note say the labels are approved | Notes removed `262:620`, `262:636`; set `262:649`, notes `262:651` |
| 47 | The lightbox shows the caption only ("Case · n of N"). The counter text and the Counter property are removed from Lightbox; the description says the caption gives the position. The live frame `82:9884` still has its "1 / 6" counter (figma-b's section, untouched) | Counter `265:692` removed; set `265:716` |
| 48 | Dock mapping approved (Hire under About, Industry and Deliverable under Work, Guides with none active). The seven heading maps now say "approved by Rez" instead of asking him | `270:9147`, `270:9458`, `270:9634`, `271:9384`, `271:9691`, `272:9640`, `272:9937` |

### Proof block on phones (28 Oct, from figma-d)

The case tiles stacked one per row on the 390 templates because their width was fixed at 193. Fixed in the component, so the existing instances follow on their own; figma-d has nothing to switch.

| Change | Node ids |
|---|---|
| In both Proof block variants, the tiles now fill the wrapping row with a minimum width of 140 and a maximum of 193 | `264:647` (`264:621`, `264:636`) |
| The Case mini tile cover is locked to its 193:130 shape, so narrower tiles keep the same crop | Covers `91:207`, `254:12198` in set `254:12201` |
| The Proof block description explains the rule | `264:647` |

Checked:
- **Desktop is unchanged:** the tiles are still 193 wide at x 0, 205 and 410, on the components and on the Hire hub template (`270:8983`).
- **Phones show two per row:** tiles are 151 wide in the 314px card on Hire hub `275:9688` (screenshot checked), Hire role `276:9875`, Industry `276:10337` and Deliverable `276:10623`.
- **One Figma limit:** with three cases, the third tile on phones sits alone and grows to 193, while the two above it are 151. In code the row is a CSS grid, `repeat(auto-fill, minmax(140px, 1fr))`, so a lone tile keeps the column width. Build it that way rather than copying the wider lone tile.

### Last items from figma-b (28 Oct)

| Item | Result | Node ids |
|---|---|---|
| Footer Accessibility link (decision 30) | Added after Privacy in the More column of both Footer variants. The description lists it (`/accessibility`, a noindex page). The footer height did not change, so nothing below it moved | `294:11684` (Desktop), `294:11685` (Mobile), set `135:507` |
| Package card fill | Already bound: both variants of the main `89:210` use tokens (Recommended=No `surface/glass-inner`, from my C6 fix; Recommended=Yes `surface/hover`). The four instances figma-b listed (`92:3110`, `92:3123`, `93:3178`, `93:3180`) now resolve to `surface/glass-inner`, with no raw override left. figma-b's log predates the C6 binding. No change needed | — |
| Avatar blue backdrop | New Primitive `blue/400` (#00AEFF, `--blue-400`) and Theme `surface/avatar-backdrop` (`--avatar-backdrop`, scoped to fills, described as avatar only). Bound to all 45 raw #00AEFF avatar fills on the live page: Home `82:8371` plus the Identity copies in the Mobile, Tablet, case and share image sections, and the template Byline avatar `267:8605`. The colour is identical, so nothing looks different. The Design system page had none | `VariableID:294:11682`, `VariableID:294:11683` |
| Taller Case mini tile ratio | Skipped, as asked (only if Rez wants the masonry back) | — |

For 06 §4 (coordinator): add `surface/avatar-backdrop` (`--avatar-backdrop`, #00AEFF, the avatar disc only), and list Accessibility in the 06 §7 Footer row.
