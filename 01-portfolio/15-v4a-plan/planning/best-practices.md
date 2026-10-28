# Best practices

Status: done · 27 Oct 2026 · The repo can reach a senior standard in package F with about 1.5 extra hours: one folder layout, kebab-case names, Prettier, ls-lint, a full docs set inside `site/` (README, AGENTS, CONTRIBUTING, CHANGELOG, docs, runbooks, decision records), error logging on free Workers Logs, and an onboarding test that proves a newcomer can work from the repo alone.

[Planning brief](README.md) · Track: Best practices (session "practices") · Read only on `site/`; nothing was built or changed.

## Summary

1. **Repo for a newcomer (lead item).** `site/` is the repo. It gets a fixed folder map (§1), kebab-case file names checked by ls-lint, and a docs set that lives in the repo (§2): how the code works, how to change it, how to run and deploy it. `01-portfolio/` keeps the why (spec, confirmations, facts, plans, reports). An onboarding test after the build proves it: setup, a page change and green checks within an hour from the docs alone (§3).
2. **Code standards.** `site/` lacks a formatter, a typecheck script, ls-lint, `.editorconfig`, a Node version pin, a real README and error boundaries; 21 component files break the kebab-case rule. F adds all of it before wave 1 (§4).
3. **Accessibility.** WCAG 2.2 AA. Today's Lighthouse score (100, Work 98) hides the real risks: drag-only archive rows, focus hidden behind the dock, glass contrast over photos, the custom multi-select, password fields and forced colours (§5).
4. **Privacy.** The consent model is sound. Gaps: no retention for messages, the inline Cal.com calendar sets third party cookies before any choice, and the privacy page lacks lawful basis, retention, processors and rights (§6).
5. **Testing, monitoring, QA, second language.** No new suites; one accessibility sweep script and checks per chat (§7). Server errors through `instrumentation.ts` into Workers Logs, free (§8). Design QA as screenshot pairs Rez reviews in one sitting (§9). Arabic ready by rules, not by building it (§10).

Labels used below: **Fact** (read in the code, the docs or a source with a date), **Opinion** (my recommendation), **Estimate**.

## 1. Target folder structure for `site/`

**Fact.** Today: 25 files in `src/app`, 25 components in a flat `src/components/` with mixed names (`ActionPill.tsx` next to `chrome.tsx`, `ui.tsx`, `work.tsx`), `src/data`, `src/lib`, `src/proxy.ts`. README is the create-next-app default. No `docs/`, `scripts/`, `tests/`, `content/` or `migrations/` yet; 08 §7 and the draft plan §4 add the last four.

**Plan (Opinion).** One home per kind of file, so "where does this change go" has one answer.

```text
site/                              the git repo root (Operations decides git; this assumes site/)
├─ README.md                       start here: what it is, setup in 5 steps, scripts, where things go
├─ AGENTS.md                       rules for every AI tool (keeps Next's generated block); CLAUDE.md holds "@AGENTS.md"
├─ CONTRIBUTING.md                 how to change things: branch, checks, commit messages, the review list
├─ CHANGELOG.md                    one entry per deploy (Keep a Changelog format)
├─ .editorconfig  .nvmrc  .prettierrc.json  .prettierignore  .ls-lint.yml  .env.example
├─ package.json  tsconfig.json  eslint.config.mjs  next.config.ts  open-next.config.ts  wrangler.jsonc
├─ docs/                           developer docs (§2)
│  ├─ runbooks/                    step by step tasks from the Operations plan: publish content, deploy and roll back, upkeep, AI tools
│  └─ decisions/                   decision records, 0001-<topic>.md
├─ content/                        what gets published, one file per item (schemas in src/lib/content)
│  ├─ work/<slug>.mdx              cases
│  ├─ pages/<family>/<slug>.mdx    SEO pages: hire, for, brand, product, decks, social, linkedin
│  ├─ blog/<slug>.mdx              guides and comparisons
│  └─ rules.json                   the copy rules content:lint applies (banned words and punctuation)
├─ assets/images/<area>/           image masters, never served (07 §5.4)
├─ migrations/                     D1 SQL, 0001_init.sql and on (snake_case, the SQL convention)
├─ scripts/                        node scripts behind npm scripts: images, og, indexnow, content-check, content-lint, a11y-sweep, smoke-auth
├─ tests/                          node --test files, critical code only (§7)
├─ public/                         served as is: images (generated), audio, flags, og, _headers
└─ src/
   ├─ app/                         routes only: page, layout, error, not-found, route handlers, metadata files
   │  ├─ actions/                  server actions: auth.ts, contact.ts, preview.ts
   │  ├─ api/track/route.ts
   │  └─ <route>/_components/      parts used by one route only (the underscore keeps them out of routing)
   ├─ components/
   │  ├─ ui/                       design system primitives, one per file: button, field, select, modal, toast, tooltip, icon, skeleton, empty-state, faq-item
   │  ├─ layout/                   chrome: top-bar, footer, dock, backdrop, chrome-gate, skip-link
   │  ├─ sections/                 blocks shared by pages: services-accordion, call-card, proof, faq-list
   │  ├─ work/                     case parts: case-hero, gallery, next-case, work-browser
   │  ├─ forms/                    contact-form, preview-form, password-form
   │  ├─ stats/                    owner dashboard parts
   │  └─ providers/                consent, sound, motion, toast providers
   ├─ lib/                         logic, no JSX: seo/, content/ (schemas, loaders), db/, auth/, forms.ts, img.ts, image-loader.ts, routes.ts, sound.ts, log.ts
   ├─ data/                        typed site settings and global copy: site.ts, ui.ts (interface labels), offers.ts, services.ts, career.ts; images.json (generated)
   ├─ styles/                      tokens.css, base.css, components.css, one file per area
   ├─ instrumentation.ts           server error logging (§8)
   └─ proxy.ts
```

**Where each change goes** (this table becomes the README's "Where things go"):

| I want to | Edit |
|---|---|
| Change a colour, size or radius everywhere | `src/styles/tokens.css` (names match the Figma variables, `docs/design-system.md`) |
| Change global copy (name, headline, footer, call card) | `src/data/site.ts` |
| Change a button label, aria label or other interface word | `src/data/ui.ts` |
| Add or edit a case, SEO page or post | One file in `content/`, then `npm run content:check` (`docs/content.md`) |
| Add an image | Master into `assets/images/<area>/`, then `npm run images` |
| Change a page's layout | `src/app/<route>/page.tsx` and its `_components/` |
| Change a shared block or component | `src/components/<group>/<name>.tsx` |
| Change titles, canonicals, JSON-LD, sitemap | `src/lib/seo/` (never by hand in a page, 07) |
| Change what gets stored | `migrations/` (a new numbered file) and `src/lib/db/` |
| Change a form | `src/lib/forms.ts` (fields), `src/app/actions/`, `src/components/forms/` |
| Change headers or caching | `next.config.ts` for Worker responses, `public/_headers` for static files (07 §5.9) |

**Naming** (Rez's conventions, then Next.js):

| Thing | Rule | Example |
|---|---|---|
| Files and folders | kebab-case | `action-pill.tsx`, `case-hero.tsx`, `content-check.mjs` |
| Fixed names | As the tool needs | `page.tsx`, `layout.tsx`, `README.md`, `AGENTS.md`, `CLAUDE.md`, `CHANGELOG.md`, `CONTRIBUTING.md` |
| Components | PascalCase export, one shared component per file, named after the file | `case-hero.tsx` exports `CaseHero` |
| Hooks | `use-<name>.ts` exporting `use<Name>` | `use-consent.ts` |
| Variables, functions | camelCase; constants UPPER_SNAKE_CASE | `pageMeta`, `MAX_ATTEMPTS` |
| Types | PascalCase, no `I` prefix | `Case`, `FormState` |
| Env vars | UPPER_SNAKE_CASE, `NEXT_PUBLIC_` only for values safe in the browser | `NEXT_PUBLIC_INDEXABLE` |
| SQL | snake_case tables and columns; migrations `NNNN_<what>.sql` | `0002_message_retention.sql` |
| Content slugs | kebab-case, equal to the URL segment | `content/blog/pre-seed-deck-slides.mdx` → `/blog/pre-seed-deck-slides` |
| Image masters | `<case-code or area>-<nn>.<ext>` | `d1-01.jpg` |
| Docs | kebab-case, no number prefix inside the repo (the `01-` order rule is for the planning folder) | `docs/runbooks/deploy.md` |

**Case trap (Fact, Windows).** Eight of today's names differ only by case from their kebab form (`Career.tsx`, `Consent.tsx`, `Forms.tsx`, `Gallery.tsx`, `Icon.tsx`, `Nav.tsx`, `Providers.tsx`, `Tracker.tsx`). Git on Windows ignores a case-only rename, and Linux CI would then miss the file. Moving every component into its group folder (above) changes the path, so Git sees it. F renames by moving, never in place.

## 2. Documentation set and where docs live

**Rule (Opinion).** The repo carries everything a developer or AI tool needs to set up, change, run and deploy the site. `01-portfolio/` carries the business record. Each fact keeps one home; the other side links to it.

| Kind of fact | Home after the build | The other side |
|---|---|---|
| How the code works, how to change, run, deploy, roll back | `site/` docs | `01-portfolio/` links to them |
| Rules for code and content (voice, claims, Taste Labs, prices only on /work-with-me, noindex) | `site/AGENTS.md`, if Rez says yes (Q1) | Root CLAUDE.md keeps the business rules and links here for site work |
| Copy rules as data (banned words, punctuation) | `site/content/rules.json`, the file `content:lint` reads | `docs/content-rules.md` (Operations' name) explains the voice in words and links to it, never repeats the list |
| Claims word for word, case facts, credits | [00-facts.md](../../00-facts.md) until published; the content file once Rez approves it | Content files never invent; new claims start in 00-facts |
| Tokens | `src/styles/tokens.css` (code) and Figma (design) | `docs/design-system.md` maps them, with Figma node ids |
| Why a technical choice was made | `docs/decisions/` | Spec and 10-confirmations keep Rez's product calls |
| Strategy, page map, plans, build reports | `01-portfolio/` | Not in the repo |

**The docs set** (each short, plain English, a status and date line under the title):

| File | Holds | Written by | Size (Estimate) |
|---|---|---|---|
| `README.md` | What the site is, stack and versions, setup in 5 steps (Node from `.nvmrc`, `npm ci`, copy `.env.example`, local D1 migrate, `npm run dev`), every npm script in one table, "Where things go" (§1), links to docs | F, R refreshes | 1 to 2 screens |
| `AGENTS.md` | Next's generated block, then the site rules (Q1), the check gate, what an AI tool may and may not do (no deploys, no live data, claims word for word) | F; Operations and Security supply their parts | 1 screen |
| `CLAUDE.md` | One line, `@AGENTS.md`, so Claude and other tools read one file (Operations confirms what Antigravity reads) | F | 1 line |
| `CONTRIBUTING.md` | Branches, commit messages (Conventional Commits, no AI attribution), the checks to run, the review list (§4), comment policy, how to add a dependency (Security's policy) | F | 1 screen |
| `CHANGELOG.md` | Unreleased, then one dated entry per deploy with the Worker version id for rollback | F starts it; each deploy adds a line | Grows |
| `docs/architecture.md` | Request flow (Worker, OpenNext, static files), rendering per route, data (D1 tables), auth, forms, sound, motion, images, the build modes, a diagram in text | F, R refreshes | 2 screens |
| `docs/content.md` | Content model per family (fields from the SEO track), how to add a case, an SEO page and a post, the draft, ready and live states, the checks, images and alt text | E (pages, posts), C (cases) | 2 screens |
| `docs/design-system.md` | Figma file and node ids, tokens to CSS names, type scale, components and their states, breakpoints. Replaces the developer half of 06 | F | 2 screens |
| `docs/seo.md` | How metadata, canonicals, JSON-LD, sitemap, robots, llms.txt, RSS and share images are generated, and the launch switch | E | 1 screen |
| `docs/accessibility.md` | The standard (§5), the test routine, known exceptions | F starts, R completes | 1 screen |
| `docs/privacy-data.md` | The data inventory (§6.1): what is stored, where, why, how long, who sees it. The privacy page is written from it | B | 1 screen |
| `docs/security.md` | Headers, CSP, secrets, auth, rate limits, dependency rules (Security track's content) | B, from the Security plan | 1 screen |
| `docs/performance.md` | The budgets (07 §5.2), caching rules, the measuring routine | E | 1 screen |
| `docs/testing.md` | What gets tested where (§7), how to run each check, the browser support list | R | 1 screen |
| `docs/content-rules.md` | The voice and copy rules in words, the claims rule, a link to `content/rules.json` | F, from the Operations and SEO plans | 1 screen |
| `docs/runbooks/*.md` | Operations' runbooks, names and content from `operations.md`: publish content, deploy and roll back (environments, secrets, D1 migrations, the launch switch), upkeep and monitoring (§8), AI tools | The chats Operations names (F, R) | 1 screen each |
| `docs/decisions/0001` to `0009` | One record per choice already made (below) | F | Half a screen each |

**First decision records** (format: Status, Date, Context, Decision, Consequences):

| # | Decision | Source |
|---|---|---|
| 0001 | Next.js 16 on Cloudflare Workers through OpenNext | Row 62, 14 review §2 |
| 0002 | D1 for visits, messages and attempts | Row 91 |
| 0003 | Cache Components off everywhere | 14 review §2 |
| 0004 | Content as files with typed schemas, MDX through `@next/mdx`, no CMS by default | Draft plan §4, §5 |
| 0005 | Static WebP images with a custom loader | 07 §5.4 |
| 0006 | Cookieless counting, one optional cookie after Allow | 09 §6, spec |
| 0007 | English only, built Arabic ready (§10) | This file |
| 0008 | Tailwind v4 tokens named after Figma variables | Spec, 06 |
| 0009 | Posting through the check gate | Operations track |

**Comment policy** (goes into CONTRIBUTING):
- Comment the why, never the what. Today's code already does this well (`store.ts`, `next.config.ts` headers).
- One line at the top of any module whose job isn't obvious from its name.
- JSDoc on every exported contract (`seo`, `db`, `forms`, actions, content schemas): what it takes, returns and throws.
- No commented out code. No TODO without an owner and a doc or changelog line (`// TODO(rez): <what>, see docs/x.md`).
- Rule numbers from the planning docs ("row 81", "spec §9") are fine as a pointer, with the rule written out in plain words beside them, since the repo can't open those files.

**Older docs after the build** (moves only on Rez's OK, done by R):

| Doc | Becomes |
|---|---|
| [document_portfolio.md](../../document_portfolio.md) | Superseded by README, architecture and the content files; to `09-archive/` |
| [05-guide.md](../../05-guide.md) | §3 moves to `docs/content.md` and `docs/runbooks/`; §4 already lives in the website-build skill; the rest to `09-archive/` |
| [06-design-system.md](../../06-design-system.md) | Developer half to `docs/design-system.md`; 06 keeps the Figma side or archives |
| [07-search-and-speed-plan.md](../../07-search-and-speed-plan.md) | Strategy stays; budgets and caching rules move to `docs/performance.md` |

## 3. Onboarding test

**Goal.** Prove that someone with only the repo can set up, change and check the site within an hour.

| Item | Plan |
|---|---|
| When | After R, once Rez commits the build, so the test clones what Rez has |
| Who | A fresh session with no memory and no access to `01-portfolio/` (Sonnet 5.5, or Antigravity if Rez uses it). Rez may also hand the repo to a human developer |
| Setup | `git clone` of the local `site/` repo into a scratch folder. No `.env.local`; the tester makes it from `.env.example` with test values |
| Tasks | 1) Setup and `npm run dev` · 2) `npm run check` green · 3) Change one line of copy on /about · 4) Add one FAQ to an existing SEO page file · 5) Add a draft blog post that passes `content:check` and stays out of the sitemap · 6) Find where the CTA colour is set · 7) Explain, without running it, how to deploy and roll back |
| Pass | All 7 in 60 minutes, no question that needs anything outside the repo, every check green, the draft post invisible on the built site |
| Output | `01-portfolio/08-build-reports/onboarding-test.md`: time per task, every question asked, every doc gap. Each gap becomes a doc fix in the same session, then any failed task runs again |
| Cost | Estimate: 45 to 60 minutes, 0.2 to 0.4M tokens |

## 4. Code standards

**What `site/` lacks today (Fact) and what F adds:**

| Gap | Fix in F | Note |
|---|---|---|
| No formatter | Prettier with `prettier-plugin-tailwindcss` (sorts classes); `format`, `format:check` scripts; one format pass as F's first step | Free. ESLint stays the linter (one of each). R reviews with `git diff -w` to skip whitespace |
| No typecheck script | `typecheck`: `next typegen && tsc --noEmit` (already in 08 F step 2) | |
| No ls-lint | `@ls-lint/ls-lint` with `.ls-lint.yml`: kebab-case for `src`, `scripts`, `tests`, `content`, `docs`; fixed names allowed; `names` script | Free |
| No `.editorconfig` | UTF-8, LF, 2 spaces, final newline, trim trailing spaces (not in `.md`) | |
| No Node pin | `.nvmrc` with 22, `"engines": { "node": ">=22.15" }` | 08 §13.4 needs 22 for `--experimental-strip-types` |
| ESLint ignores miss build output | `.open-next/**`, `.wrangler/**` (08 F step 1) | |
| Flat, mixed case components | The layout in §1, by moving files | Before wave 1, so no package works on old paths |
| Create-next-app README | The real README (§2) | |
| No error boundaries | `app/error.tsx`, `app/global-error.tsx` in the site's look (§8) | `not-found.tsx` exists |
| Server code could leak into client bundles | `import "server-only"` at the top of `lib/db`, `lib/auth`, `actions/*` | `server-only` is the package Next's docs name; free |
| Copy inside components | Interface labels into `src/data/ui.ts` (§10) | Already true for most copy (`site.ts`) |
| `"en-US"` and `"Asia/Dhaka"` hard coded in Stats | One `OWNER_TIME_ZONE` setting in `site.ts`; Stats only, never visible to visitors | |

**Scripts** (Operations owns the check gate; these are the names it calls):

| Script | Runs |
|---|---|
| `dev`, `build`, `start` | As now |
| `lint`, `format`, `format:check`, `typecheck`, `names` | ESLint, Prettier write and check, tsc, ls-lint |
| `content:check`, `content:lint` | Schema and copy rules on every content file |
| `test` | `node --test --experimental-strip-types tests/` |
| `check` | `names`, `format:check`, `lint`, `typecheck`, `content:check`, `content:lint`, `test`, `build`, in that order, stopping at the first failure |
| `images`, `og`, `indexnow` | As 08 plans |
| `a11y` | `scripts/a11y-sweep.mjs`: Lighthouse accessibility on every sitemap URL against `cf:preview` (§5.3) |
| `db:migrate:local` | `wrangler d1 migrations apply <db> --local` (local only; the live one is Rez's) |
| `cf:build`, `cf:preview`, `deploy` | As now |

**TypeScript and React rules (Opinion):**
- `strict` stays on. F tries `noUncheckedIndexedAccess` and keeps it if it costs under about 30 fixes; otherwise a decision record says why not.
- `"use client"` only on the smallest leaf that needs the browser. Pages and sections stay server components.
- Imports through `@/`; no `../../`.
- No `any`; `unknown` and a check at every boundary (actions, route handlers, content loaders).
- Tailwind: tokens first. An arbitrary value (`text-[15px]`) only where Figma has a one off, never where a token exists. R counts them and lists any that match a token.
- Every interactive element is a real `button`, `a` or form control, never a clickable `div`.

**Review list** (in CONTRIBUTING, used by every chat before its report): checks green; files in the right folder with the right names; no copy in components; no secret or personal data in logs or client code; states from Figma present (hover, focus, disabled, error, loading); keyboard and screen reader names work; reduced motion respected; logical CSS properties; docs updated for anything a newcomer would trip on; CHANGELOG "Unreleased" line added; a suggested commit message in the report, with no AI attribution.

## 5. Accessibility, WCAG 2.2 AA

### 5.1 Where this site is at risk

**Fact:** Lighthouse gave 100 on every page but Work (98) on 22 Oct (07 §5.1). Lighthouse runs a subset of axe and can't judge most of the items below.

| Criterion | Risk on this site | Fix | Where |
|---|---|---|---|
| 2.5.7 Dragging Movements (new in 2.2) | Archive rows slide by press and drag (22 Oct call); lightbox swipe | Arrow buttons or plain horizontal scroll with keys as the non-drag path | Figma (arrows), code |
| 2.2.2 Pause, Stop, Hide | If archive rows or the backdrop move on their own for over 5 seconds | A pause control, or no auto movement; reduced motion stops it | Figma, code |
| 2.4.11 Focus Not Obscured (new) | The floating dock, the cookie banner and the sticky "Claim your preview" can cover a focused element | `scroll-padding-bottom` equal to the dock height; the banner never covers focus | Code |
| 2.4.7 Focus Visible, 1.4.11 Non-text Contrast | Focus ring on glass over a blurred photo | One focus ring token, 3:1 against the worst backdrop area | Figma (A), code (F) |
| 1.4.3 Contrast | Glass cards and Button tiles over photos; `text/tertiary` #7D8592 | Measure against the lightest backdrop pixel under each card, not the token alone | Figma (A, B), R checks |
| 2.5.8 Target Size (new), 24 px minimum | Footer links, small pills, the © press, flag and clock | 24 px everywhere, 44 px on phones (09 §8) | Figma (D), code |
| 3.3.8 Accessible Authentication (new) | Stats and recruiter passwords | Allow paste and password managers (`autocomplete="current-password"`, a hidden username field), keep show and hide | Code (B) |
| 4.1.2, 1.3.1 | The multi pick "What do you need?" select | Build it as a button that opens a group of real checkboxes, same look as Figma; avoids a fragile custom listbox | Code (B) |
| 3.3.1, 3.3.3 Errors | Contact and preview forms | Visible labels, error text tied with `aria-describedby`, `aria-invalid`, focus moves to the first error, `autocomplete` on name, email, organisation | Figma (error text), code (B) |
| 1.4.2 Audio Control | Ambient sound on by default after the first click | The dock switch is reachable early, named, with `aria-pressed` | Code (D, E) |
| 4.1.3 Status Messages | Toasts, "Sending", "Sent" | `role="status"`; the ticking clock is never in a live region | Code |
| 2.1.2, 2.4.3 Dialogs | Booking modal, lightbox, cookie banner, mobile sheet | Native `<dialog>` with `showModal()` (focus trap and inert page for free), Esc closes, focus returns to the opener | Code |
| 1.4.10 Reflow, 1.4.4 Resize | Fixed glass layouts | Test at 320 px and at 200 and 400% zoom (09 tests 375 only) | R |
| 1.4.12 Text Spacing | Fixed height cards (the Services accordion collapse on 22 Oct) | No fixed heights on text boxes | Code |
| Forced colours (Windows High Contrast) | Glass borders and focus rings vanish | A `forced-colors: active` block in `base.css` restores borders and focus | Code (F) |
| 1.1.1 Images | 21 cases, about 100 SEO pages | `alt` required in every content file's image field; decorative images `alt=""`; `content:check` fails without it | SEO (fields), C, W |
| 2.4.6, 1.3.1 Headings | 100 generated pages | One `h1`, no skipped levels; templates fix the levels, content can't break them | Figma annotations, E |
| 3.2.6 Consistent Help | /linkedin/invite has no dock | Its contact path stays in the same spot on every state | Figma (B) |

### 5.2 Figma versus code

| Fixed in Figma (chat A) | Fixed in code |
|---|---|
| Contrast of tokens and over photos; focus ring design; target sizes; visible labels and error text; non-drag controls; a pause control if anything moves on its own; heading levels and reading order as annotations; alt text notes per image | Semantics and landmarks; ARIA; focus order and return; keyboard paths; reduced motion; forced colours; live regions; autocomplete; dialogs; paste allowed in passwords |

### 5.3 How it gets tested

| Test | Tool (all free) | Who, when |
|---|---|---|
| Lint | `eslint-plugin-jsx-a11y`, already inside `eslint-config-next` (Fact, its package.json) | Every chat, `npm run lint` |
| Automated scan per page | axe-core (already in `node_modules` through jsx-a11y; F lists it as a dev dependency) injected into the page in BrowserOS with `run`; Lighthouse accessibility | Each chat on its pages |
| Sweep of every URL | `npm run a11y`: Lighthouse 12, accessibility only, every sitemap URL on `cf:preview` | R; then monthly (Operations) |
| Keyboard | Tab through each template: skip link, order, visible focus, dialogs, no traps | Each chat on its pages; R on all |
| Screen reader | NVDA on Windows (free): landmarks, headings list, forms and errors, dialogs, the dock, the sound switch | R, one pass per template |
| Phone screen reader | VoiceOver on an iPhone | Rez, in the You check list |
| Zoom, reflow, motion, contrast mode | 320 px, 200 and 400% zoom, OS reduced motion, Windows contrast themes | R |

Automated tools find roughly a third of WCAG issues (Opinion, widely reported), so the manual rows are not optional.

**Accessibility statement.** A short page or section saying the target (WCAG 2.2 AA), what was tested and how to report a problem (Q5).

## 6. Privacy and legal

Not legal advice. Opinions below follow UK GDPR and PECR, and EU GDPR and ePrivacy, since UK and EU visitors are in scope.

### 6.1 Data inventory (the source for the privacy page and `docs/privacy-data.md`)

| Data | Where | Why | Lawful basis (Opinion) | Kept | Fact or plan |
|---|---|---|---|---|---|
| Page views: path, referring host, device class, country from the time zone, time | D1 `views` | Improve the site | Legitimate interests; no device storage | 25 months, then deleted (Opinion; no limit planned today) | 08 §13.2 |
| Visitor id (daily hash of `rk_vid`) | D1 `views.visitor` | Count returning visits | Consent (Allow) | 90 days (planned in P1) | 08 P1 |
| Cookie choices, booking clicks | D1 `events` | Counts | Legitimate interests; no personal data | With the views | 08 §13.2 |
| Contact messages: name, email, company, needs, message | D1 `messages` | Reply | Steps before a contract, or legitimate interests | **No limit planned.** Recommend 24 months after the last contact (Q2) | 08 §13.2 |
| LinkedIn preview requests: name, email, LinkedIn URL, 4 answers | D1 `messages` | Make the preview | Same | Same as messages | 08 §13.2 |
| Sign in attempts: scope and a hash of the IP | D1 `attempts` | Stop password guessing | Legitimate interests | Until the window ends; pruned | 08 §13.2 |
| Request logs | Cloudflare Workers Logs | Find errors | Legitimate interests | 3 days today, 7 days from 1 Dec 2026 (Fact, Cloudflare docs) | `wrangler.jsonc` has observability on |
| Core Web Vitals | Cloudflare Web Analytics, cookieless | Speed | Legitimate interests | Cloudflare's terms | 07 §5.9 |
| Booking details | Cal.com, its own policy | Book the call | Cal.com's role | Cal.com's terms | |
| Lead alert emails | The email service SEO picks, if any | Tell Rez about a message | Processor | Its terms | Open (SEO track) |
| `rk_consent`, `rk_stats`, `rk_case`, `rk_owner`, `rk_owner_ui` | Cookies | Remember the choice, sign in | Strictly necessary, no consent needed | 1 year (consent), 30 days (Stats) | 08 §7 |
| `rk_vid` | Cookie | Returning visits | Consent | 1 year | Privacy page today |
| Sound setting, last ambience | localStorage, never sent | Remember a setting the visitor chose | Strictly necessary (requested by the user) | Until cleared | Privacy page today |
| Fonts | Self hosted by `next/font`, no call to Google | | | | Fact, `layout.tsx` |

### 6.2 Consent

| Item | State | Action |
|---|---|---|
| Banner with equal Allow and Only essential, no pre ticks, Cookie settings in the footer | Good (Fact, `Consent.tsx`) | Keep. Add: switching from Allow to Only essential deletes `rk_vid` at once (B checks; not visible in today's code) |
| Cookieless counting before any choice | Fine under PECR and ePrivacy as long as nothing is stored or read on the device (Opinion) | `/api/track` must not read `rk_vid` before Allow |
| Inline Cal.com calendar on /contact | Loads on page load and sets third party cookies before any choice (Fact: Lighthouse best practices 79 for that cookie, 07 §5.1) | Load it on a click or after Allow (Q3). Also the biggest speed fix there (07 §5.8) |
| GA4 or Clarity, if SEO proposes them | Both need consent; Clarity's session replay can catch form text | Recommend neither; Cloudflare Web Analytics and /stats cover it (SEO decides, this is the privacy view) |
| UK Data (Use and Access) Act 2025 eases consent for some analytics cookies | To verify; the EU rule doesn't change | Don't rely on it; keep consent for `rk_vid` |

### 6.3 The privacy page (P4 or D writes it from the inventory, in the site's voice)

Must hold: who runs the site and how to reach him (Rezaul Karim, email; no address or country needed when he collects directly, Opinion based on EDPB Guidelines 05/2021); what is collected and why; the lawful basis in plain words; how long; who else handles it (Cloudflare, Cal.com, Gumroad for templates, the alert email service); visitors' rights (see, correct, delete, object, complain to the ICO or their local regulator); cookies by name; a "last updated" date. Plus one line under each form's send button: why the data is asked and a link to Privacy. No marketing opt in exists, so none is needed.

Other legal items: Nike Mind keeps "Not affiliated with Nike" (row 81); CC0 sound credit stays; client credits wait on Rez (gate G1); no Terms page needed for a portfolio (Opinion; /work-with-me terms live in Rez's contract). An EU representative (GDPR Art 27) is likely not required for occasional, low risk processing like a contact form (Opinion).

## 7. Testing within Rez's rules

Code first, checks at the end, no new suites except critical code.

| What | How | Where it runs | Who |
|---|---|---|---|
| Names, format, lint, types | `npm run check` (stops at the first failure) | Every chat, at the end | All |
| Content files | `content:check`, `content:lint` | Each content batch | W1, W2, C, E |
| Auth, lockout, cookie flags | `tests/auth.test.ts` (planned) | `npm test` | B |
| JSON-LD escaping (a script injection risk) | One small test, `tests/json-ld.test.ts` (Security owns the rule) | `npm test` | E |
| Content schema edge cases | Covered by `content:check` itself, no suite | | |
| Auth on the Worker | `scripts/smoke-auth.mjs` on `cf:preview` | R | |
| The Worker build | `cf:build`, `cf:preview`, every route answers | F, R | |
| Flows end to end | 09 in full, by hand in BrowserOS (no Playwright suite) | R | |
| Accessibility | §5.3 | Each chat, R | |
| Speed | Lighthouse per 07 §5.10 | Chats with pages, R | |
| Look | Screenshot pairs (§9) | Each chat, R | |

**Browser support (Fact, Next 16 docs):** Chrome, Edge and Firefox 111 and up, Safari 16.4 and up. Test in BrowserOS (Chromium) and Firefox on Rez's PC; Safari on Rez's iPhone (You check). Newer CSS such as `animation-timeline: view()` stays a progressive extra: without it the page reads the same.

## 8. Errors and monitoring (free)

| Layer | Plan | Owner |
|---|---|---|
| Server errors | `src/instrumentation.ts` exports `onRequestError` (stable since Next 15, Fact) and writes one JSON line per error with `console.error`: level, digest, path, method, route type, message. Workers Logs keeps it (observability is already on in `wrangler.jsonc`). F checks it fires on `cf:preview` | F |
| Logger | `src/lib/log.ts`, one function, JSON lines. Never logs IPs, emails, names, message bodies, passwords, tokens or cookies | F; Security reviews |
| Client errors | `error.tsx` and `global-error.tsx` show a calm page with a way home; they send `{ type: "error", digest, path }` to `/api/track`, stored as a `client_error` event, capped per day; Stats shows the count | F (boundaries), B (event and cap) |
| Free limits | Workers Logs on the free plan: 200,000 events a day, 3 days. From 1 Dec 2026: 0.5 GB a day, 7 days, ingestion stops at the cap, no bill (Fact, Cloudflare pricing pages) | |
| D1 limits | Since 1 Sep 2026 D1 queries fail on the free plan past the daily row limits (Fact, Cloudflare changelog). Counting must fail quietly; the contact form must never lose a message silently: on a write error it shows the email address instead | B |
| Uptime, alerts, the monthly look at logs | Operations' routine | Operations |
| A paid tracker (Sentry and others) | Not needed at this traffic; free tiers have caps, so Rez's OK first | |

## 9. Design QA

| Step | Who | How |
|---|---|---|
| Per change | Each chat | Screenshots at 375, 768 and 1440 next to the Figma frame (08 §8), listed in the report with the frame id |
| Token use | Each chat | Colours, type and spacing from tokens; arbitrary values only for Figma one offs |
| Full pass | R | Every template and state against its frame; a table per template: frame id, route, screenshot pair, difference, weight (blocker, should, polish), fixed or not |
| Rez's review | Rez, one sitting | Where he reviews is Q4. Then he checks motion, sound and feel on the test site, on his phone and desktop |
| Sign off | Rez | Every blocker fixed; polish items go to a later list |

## 10. Second language readiness (Arabic later, not built now)

| Rule from F on | Why | Cost now |
|---|---|---|
| No prose in components; copy in `content/`, `src/data/site.ts` and `src/data/ui.ts` | A translation becomes new data files, not code edits | Small, mostly true today |
| Logical CSS: `ms-`, `me-`, `ps-`, `pe-`, `start-`, `end-`, `text-start`, `border-s`, `rounded-s` instead of left and right | The layout flips with `dir="rtl"` | 54 physical classes today (Fact, grep); each chat converts the files it owns |
| `<html lang dir>` from one setting in `site.ts` | One switch per locale | Tiny |
| Directional icons and motion read the direction (`rtl:-scale-x-100`, x offsets times a sign) | Arrows point the right way | Tiny |
| Dates and numbers through `Intl` with the page locale; no hard coded `"en-US"` on public pages | Arabic dates and digits later | Tiny |
| Content files carry `locale: "en"` (default) | A later `content/ar/` mirrors the tree | Field for SEO's schema |
| `seo.ts` builds `alternates.languages` from the locales present | hreflang comes free later | Tiny |
| Font families through CSS variables only | An Arabic pair can swap in with `:lang(ar)`. Newsreader and Plus Jakarta Sans have no Arabic letters (Opinion, check when chosen) | None |
| No words baked into images | Share images come from text through satori. Note: satori's right to left support is limited, a risk for Arabic share images later | None |

Not now: the `app/[lang]` route segment from Next's i18n guide. Moving routes under it later is mechanical; adding it now would touch every route and the 100 pages for no gain. Decision record 0007 says so.

## Rez decides

| # | Question | Options, recommended first |
|---|---|---|
| Q1 | Where do the site rules (voice, claims, Taste Labs, prices, noindex) live, so a tool with only the repo follows them? | **`site/AGENTS.md` becomes their home; the root CLAUDE.md links to it for site work (Recommended)** · Keep them in the root CLAUDE.md only; the repo says "ask Rez" · Copy them into both (two homes, drift risk) |
| Q2 | How long are contact messages and preview requests kept? | **24 months after the last contact, then deleted (Recommended)** · 12 months · Until you delete them in Stats |
| Q3 | The inline Cal.com calendar on /contact sets cookies before any choice. How should it load? | **On a click on its placeholder (Recommended, also the speed fix in 07 §5.8)** · Only after Allow · As now, named on the privacy page |
| Q4 | Where do you review the build against the design? | **A "QA · Build vs design" page in Figma, with each build screenshot beside its frame (Recommended)** · A markdown report with screenshot pairs · Only on the test site |
| Q5 | Accessibility statement | **A short /accessibility page on the Privacy template, linked in the footer, noindex (Recommended)** · A section at the end of /privacy · None for now |

## For other tracks

| Track | Note |
|---|---|
| SEO | Content schema needs `alt` on every image (required), `locale` (default "en"), `updated` date, heading level rules per template. Form fields: visible labels, `autocomplete`, no phone field, selects as real controls. GA4 or Clarity would need consent and Clarity's replay can capture form text: privacy view says neither. A lead alert email service is a processor and goes on the privacy page |
| Security | Logs never carry personal data (§8). Password fields must allow paste and password managers (WCAG 3.3.8); don't block paste for "security". The client error beacon needs a cap. CSP must allow the Cal.com iframe, the Cloudflare beacon and the inline JSON-LD. The JSON-LD escaping test sits in `tests/`. axe is injected only on localhost and `cf:preview` |
| Operations | This plan assumes the repo root is `site/`; say so if not. `CLAUDE.md` holds `@AGENTS.md`; confirm what Antigravity reads. Your `docs/runbooks/` and `docs/content-rules.md` are adopted in §1 and §2; the banned list itself sits in `content/rules.json` so the lint reads data, not prose. Your Q3 and my Q1 ask the same thing; merge them. CHANGELOG gets the Worker version id per deploy. Monthly: `npm run a11y`, dependency updates. Workers Logs pricing changes on 1 Dec 2026; D1 free limits fail queries since 1 Sep 2026. The onboarding test runs after Rez's commit |
| Figma A | One focus ring token at 3:1 on glass; contrast measured over the photo; 24 px minimum targets |
| Figma B | Archive rows: arrow buttons as the non-drag path, and a pause control if they move on their own; error text on every field; heading level and reading order notes; Privacy frame gains the inventory lines (retention, processors, rights), plus the LinkedIn form and Gumroad lines (08 §3.4) |
| Figma C | Alt text note per case image |
| Figma D | Touch targets 44 px on phones; the dock height for focus padding; /linkedin/invite keeps its contact path in one place |
| Coordinator | 08 §7's ownership table needs the new paths from §1 once F has moved the files; the root CLAUDE.md change in Q1 is yours to make after Rez answers |

## For the build chats

| Chat | Must do, from this plan |
|---|---|
| A · Figma | §5.2 Figma column; the QA page if Q4 is yes; frames for /accessibility if Q5 is yes |
| M · Page map | Every row's proof image has an alt text note; one `h1` question per page |
| F · Foundation | First, before wave 1 starts: the folder layout and kebab-case names by moving files (§1); Prettier, ls-lint, `.editorconfig`, `.nvmrc`, engines, `server-only`, axe-core as a dev dependency, the scripts (§4); one format pass. Then: `instrumentation.ts`, `lib/log.ts`, `error.tsx`, `global-error.tsx` (§8); focus ring, skip link, `scroll-padding` for the dock, forced colours, reduced motion base in `base.css`; `src/data/ui.ts`; `lang` and `dir` from `site.ts`; logical CSS in its own files. Docs: README, AGENTS.md (with Q1's answer), CLAUDE.md, CONTRIBUTING, CHANGELOG, `docs/architecture.md`, `docs/design-system.md`, `docs/accessibility.md` (start), decision records 0001 to 0008, empty files with owners for the rest. Estimate: +1 to 1.5 h, about 0.3M tokens |
| B · App and data | Data inventory into `docs/privacy-data.md`; retention pruning per Q2 (a migration and the prune on Stats sign in); `rk_vid` deleted on Only essential; Cal.com loading per Q3; forms per §5.1 (labels, errors, autocomplete, the checkbox based multi pick, paste allowed in passwords); the `client_error` event with a cap; D1 failures handled (§8); `docs/security.md` from the Security plan |
| C · Cases | `alt` in every case file; image masters named per §1; the cases part of `docs/content.md` |
| D · Pages | Archive rows non-drag path and pause; dock focus padding; Privacy page from the inventory (§6.3); /accessibility per Q5; logical CSS in its files |
| E · Search and templates | One `h1` and fixed heading levels per template; `alternates.languages` ready in `seo.ts`; `tests/json-ld.test.ts`; `docs/seo.md`, `docs/performance.md`, the pages and posts part of `docs/content.md` |
| W1, W2 · Content | Alt text on every image; `locale` field; checks green on each batch |
| R · Review | §5.3 rows for R, `npm run a11y`; the design QA pass (§9, Q4); the review list (§4) on the whole diff; `docs/testing.md`; the runbooks Operations gives R; README refresh; old docs moved per §2 on Rez's OK. After Rez's commit: the onboarding test (§3) |
| Every chat | `npm run check` at the end; files in the right folder; CHANGELOG "Unreleased" line; a suggested commit message in the report, no AI attribution |

## Sources

| Source | Read |
|---|---|
| `site/` code: `package.json`, configs, `src/` tree, `layout.tsx`, `Consent.tsx`, `privacy/page.tsx`, `store.ts`, grep for physical CSS and `Intl` | 27 Oct 2026, read only |
| Next.js 16.4.2 docs in `site/node_modules/next/dist/docs/`: installation (browser list), `instrumentation.md` (`onRequestError`), `internationalization.md` (`app/[lang]`), upgrading to 16 | 27 Oct 2026 |
| `eslint-config-next` 16.4.2 `package.json` (includes `eslint-plugin-jsx-a11y`) | 27 Oct 2026 |
| [Cloudflare Workers pricing, Workers Logs](https://developers.cloudflare.com/workers/platform/pricing/) and [Observability pricing](https://developers.cloudflare.com/observability/pricing/) | 27 Oct 2026, through the Cloudflare docs connector |
| [Cloudflare changelog: D1 enforces free tier daily limits, 1 Sep 2026](https://developers.cloudflare.com/changelog/post/2026-09-01-d1-free-tier-limit-enforcement/) | 27 Oct 2026 |
| [WCAG 2.2](https://www.w3.org/TR/WCAG22/) (2.4.11, 2.5.7, 2.5.8, 3.2.6, 3.3.7, 3.3.8 new in 2.2) | From knowledge, not re-read today |
| EDPB Guidelines 05/2021 on transfers (direct collection by a controller abroad is not a transfer) | From knowledge, not re-read today |
| Planning docs: [README](README.md), [../README.md](../README.md), [14-pre-build-review.md](../../14-pre-build-review.md), [08-build-plan.md](../../08-build-plan.md) §5 to §14, [09-functional-checklist.md](../../09-functional-checklist.md), [07-search-and-speed-plan.md](../../07-search-and-speed-plan.md) §5, master plan §8 and §11 | 27 Oct 2026 |

BrowserOS was not needed: the sources above came from the repo and the Cloudflare docs connector.
