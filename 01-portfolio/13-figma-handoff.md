# Figma Handoff

[README](../README.md) · Draft · 24 Oct 2026. The standard a Figma file meets before it goes to a developer. Works for any project; this site's own system is in [06-design-system.md](06-design-system.md)

Tick every box before a page is marked **Ready for dev**.

## 1. File and pages

- [ ] A **Cover** page with project name, status, owner, last update and the file's link
- [ ] Pages in a clear order: Cover, Handoff (start here), Pages, Design system, Assets, Archive
- [ ] Work in progress and explorations sit on their own page or in Archive, never next to final frames
- [ ] Final screens grouped in **Sections**, named by flow or page, and marked **Ready for dev** in Dev Mode
- [ ] No stray frames, test layers or duplicate screens on final pages
- [ ] A named version saved in version history at each handoff ("Handoff v1, 24 Oct")
- [ ] Branches merged or closed before handoff

## 2. Naming

- [ ] Every frame named by page and breakpoint (`Home / Desktop 1440`, `Home / Mobile 390`)
- [ ] No default names left (`Frame 123`, `Group 45`, `Rectangle 9`)
- [ ] Layers named by role (`header`, `nav`, `card/title`), matching the code names where possible
- [ ] Components, variants and properties named the way the developer will name them in code
- [ ] Hidden layers removed unless they show a state, and then named for it

## 3. Layout

- [ ] **Auto layout** on every frame, card, list and component
- [ ] Resizing set on purpose (Hug, Fill, Fixed), with min and max widths where content grows
- [ ] Constraints set for anything not in auto layout
- [ ] Layout grid on every page frame: columns, gutter and margin per breakpoint
- [ ] All spacing comes from the spacing scale (4 or 8 based), bound to variables
- [ ] No half pixels, no elements off the grid, no overlapping layers by accident

## 4. Design tokens (variables)

- [ ] **Primitives** (raw values) and **semantic** tokens (`text/primary`, `surface/card`, `border/subtle`) in separate collections
- [ ] Every fill, stroke, radius, gap and padding bound to a variable; no loose hex values or raw numbers
- [ ] Modes for themes (Light, Dark) and breakpoints (Desktop, Tablet, Mobile) where used
- [ ] Token names map 1 to 1 to CSS variables or Tailwind tokens, listed in the handoff doc
- [ ] Unused and legacy tokens removed or grouped as Legacy
- [ ] Variable scopes set so each token only shows where it belongs (colors on fills, numbers on gaps)

## 5. Typography

- [ ] A text style for every text on the page; no detached text
- [ ] Type scale covers display, headings H1 to H6, body, small, caption, label, button, code
- [ ] Each style sets font, weight, size, line height and letter spacing
- [ ] Responsive sizes per breakpoint (via modes or separate styles)
- [ ] Fonts listed with source, weights used and licence for web use
- [ ] Rules for long text noted: wrapping, truncation, max line length

## 6. Color and effects

- [ ] Color styles or variables for every color, including gradients and overlays
- [ ] Effect styles for shadows, blurs and glass
- [ ] Contrast checked: **4.5:1** for body text, **3:1** for large text, icons and UI borders (WCAG AA)
- [ ] Dark mode (if any) checked screen by screen, not only in the tokens

## 7. Components

- [ ] All components live on the Design system page or a published library
- [ ] Variants and properties used (boolean, text, instance swap) instead of copies
- [ ] Every interactive component has its **states**: default, hover, focus, pressed, disabled, loading, error, success
- [ ] Sizes covered (small, medium, large) and mobile versions where they differ
- [ ] No detached instances on final screens
- [ ] Each component has a short description: what it is, when to use it, behaviour notes
- [ ] Code Connect or a code name link added where the component already exists in code

## 8. States and edge cases

- [ ] Empty, loading (skeleton), error and success states for every data view
- [ ] Form states: default, focus, filled, error with message, disabled, sending, sent
- [ ] Content extremes: long names, long titles, one item, many items, no image
- [ ] System screens: 404, 500, offline, no access, signed out
- [ ] Toasts, modals, tooltips and banners drawn in place, with how they open and close

## 9. Responsive

- [ ] Every page at desktop (1440), tablet (768) and mobile (390), or the agreed set
- [ ] Notes on what changes between breakpoints (stacking, hidden items, nav changes)
- [ ] Touch targets at least **44 by 44 px** on mobile (WCAG minimum is 24)
- [ ] Mobile nav, sheets and sticky elements drawn open and closed

## 10. Interaction and motion

- [ ] Prototype links for the main flows, starting from a named flow start point
- [ ] Hover, focus and press behaviour shown or noted
- [ ] Motion specs: trigger, duration, easing, delay (for example 200 ms, ease out)
- [ ] Scroll behaviour noted: sticky, parallax, reveal, smooth scroll
- [ ] A **reduced motion** fallback noted for every animation

## 11. Content

- [ ] Final copy in place; any draft marked clearly ("Copy to confirm")
- [ ] Real images and data, or placeholders with the right size and ratio
- [ ] Links listed: where each button and link goes
- [ ] SEO bits per page: title, meta description, share image (1200 by 630)

## 12. Assets

- [ ] Icons as components on one grid (16, 20 or 24), strokes outlined or consistent, colour bound to a token
- [ ] Export settings set on every asset: SVG for icons and logos, PNG or WebP at 1x and 2x for images
- [ ] Images cropped to their final ratio and compressed; originals kept in Assets
- [ ] Logo set, favicon (SVG plus 32 and 180 px), app icons and share images ready to export
- [ ] Alt text noted for every meaningful image

## 13. Accessibility

- [ ] Visible focus state on every interactive element
- [ ] Heading order (H1 to H6) noted per page, one H1 each
- [ ] Reading and tab order noted where it differs from the layout
- [ ] Labels for icon only buttons and form fields
- [ ] Colour is never the only signal (errors also have text or an icon)

## 14. Annotations and specs

- [ ] Dev Mode annotations on anything the design alone does not explain
- [ ] Measurements only where they are not obvious from auto layout
- [ ] Behaviour notes: what happens on click, submit, error, timeout
- [ ] Data notes: where content comes from, limits, validation rules

## 15. Handoff page

- [ ] Page index with links to every frame
- [ ] User flows drawn as a map
- [ ] Build checklist and open questions, each with an owner
- [ ] Changelog: what changed since the last handoff, with dates
- [ ] Token table (Figma name to CSS name) or a link to it
- [ ] Contact for questions and where to leave them (Figma comments)

## 16. Access and sign off

- [ ] Developer has access at the right level (view or Dev Mode; Dev Mode needs a paid seat, so check first)
- [ ] Library published and enabled in the file
- [ ] All open comments resolved or answered
- [ ] Final review done by the designer, page by page, at every breakpoint
- [ ] Walkthrough call or short video for the developer
- [ ] Design QA planned: the designer checks the build against Figma before launch
