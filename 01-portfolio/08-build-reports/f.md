done

# Chat F · Foundation report

[README](../15-v4a-plan/README.md) · Done · 28 Oct 2026 · Opus 5.5, Extra high. Wave 1 (B, C, D, E, W1) can start. Read "Path map" and "Contracts" first.

## Path map (old → new)

Every file moved by `mv` (never renamed in place) into its folder with a kebab-case name. Imports go through `@/`. Wave 1 uses these paths instead of the old ones in 08 §7 and §11.

| Old path (`site/`) | New path | Owner after F |
|---|---|---|
| `src/components/ActionPill.tsx` | `src/components/ui/action-pill.tsx` | F (frozen) |
| `src/components/Icon.tsx` | `src/components/ui/icon.tsx` | F (frozen) |
| `src/components/ui.tsx` | `ui/card.tsx`, `ui/glass-pill.tsx`, `ui/tag.tsx`, `ui/template-row.tsx`, `ui/to-confirm.tsx`, `ui/section-head.tsx` (F); `sections/page-header.tsx`, `sections/rows.tsx`, `sections/list-rows.tsx`, `sections/formats.tsx` (D); `sections/call-card.tsx`, `sections/social-tiles.tsx` (F); `delay()` → `src/lib/delay.ts` | as listed |
| `src/components/chrome.tsx` | `layout/backdrop.tsx`, `layout/top-bar.tsx`, `layout/footer.tsx`, plus new `layout/footer-copyright.tsx` and `layout/owner-chip.tsx` | F look; B fills `owner-chip.tsx` and `footer-copyright.tsx` |
| `src/components/extras.tsx` | `sections/recruiter-card.tsx`, `sections/recognition.tsx` | D |
| `src/components/work.tsx` | `work/case-card.tsx`, `work/locked-card.tsx`, `work/work-grid.tsx`, `work/archive.tsx` | D (C for case data) |
| `src/components/Nav.tsx` | `src/components/layout/dock.tsx` | D |
| `src/components/VisitorClock.tsx` | `src/components/layout/visitor-clock.tsx` | F (frozen) |
| `src/components/Providers.tsx` | `src/components/providers/providers.tsx` | F (frozen) |
| `src/components/Consent.tsx` | `src/components/providers/consent-provider.tsx` | B |
| `src/components/SoundProvider.tsx` | `src/components/providers/sound-provider.tsx` | E |
| `src/components/SmoothScroll.tsx` | `src/components/providers/smooth-scroll.tsx` | E |
| `src/components/RevealObserver.tsx` | `src/components/providers/reveal-observer.tsx` | E |
| `src/components/Tracker.tsx` | `src/components/providers/tracker.tsx` | B |
| `src/components/ContactForm.tsx` | `src/components/forms/contact-form.tsx` | B |
| `src/components/Forms.tsx` | `src/components/forms/password-form.tsx` | B |
| `src/components/DailyChart.tsx` | `src/components/stats/daily-chart.tsx` | B |
| `src/components/Gallery.tsx` | `src/components/work/gallery.tsx` | C |
| `src/components/WorkBrowser.tsx` | `src/components/work/work-browser.tsx` | D |
| `src/components/ServicePage.tsx` | `src/components/sections/service-page.tsx` | D |
| `src/components/ServicesAccordion.tsx` | `src/components/sections/services-accordion.tsx` | D |
| `src/components/Career.tsx` | `src/components/sections/career.tsx` | D |
| `src/components/CalEmbed.tsx` | `src/app/contact/_components/cal-embed.tsx` | B |
| `src/components/CopyEmail.tsx` | `src/app/contact/_components/copy-email.tsx` | B |
| `src/components/FaqThread.tsx` | `src/app/contact/_components/faq-thread.tsx` | B (the "+" FAQs replace it with `ui/faq-item.tsx`) |
| `src/app/actions.ts` (deleted) | `src/app/actions/auth.ts` (B · P1), `contact.ts` and `preview.ts` (B · P2), helpers in `shared.ts` | B |
| `src/lib/auth.ts` | `src/lib/auth/index.ts`; new `src/lib/secrets.ts` (F, frozen) | B |
| `src/lib/store.ts` | `src/lib/db/store.ts` (today's KV and `.data` store) | B |
| `src/lib/stats.ts` | `src/lib/db/stats.ts` (today's counting); the contract is `src/lib/db/index.ts` | B |
| `src/app/globals.css` | imports only; rules moved to `src/styles/*.css` | F (frozen) |
| `src/lib/booking.ts`, `cn.ts`, `img.ts`, `routes.ts`, `sound.ts`, `src/data/*`, `src/proxy.ts`, every page file | same paths | as 08 §11 (`routes.ts`, `site.ts` F, frozen) |

Styles in `src/styles/`: `tokens.css`, `base.css`, `components.css` (F, frozen); `home-work.css` (D: work cards, archive, dock bars, moved from globals), `pages.css`, `invite.css` (D); `stats.css`, `contact.css` (B); `cases.css` (C); `templates.css`, `motion.css` (E: reveal, rise, drift, Lenis rules, moved from globals).

New F files wave 1 builds on: `src/components/ui/` (`icon-tile`, `filter-chip`, `field`, `select`, `alert`, `toast`, `tooltip`, `modal`, `skeleton`, `empty-state`, `faq-item`, `breadcrumb`), `src/components/layout/` (`chrome-gate`, `skip-link`), `src/components/providers/toast-provider.tsx`, `src/components/seo/json-ld.tsx`, `src/components/templates/` (placeholders E replaces), `src/data/ui.ts`, `src/data/seo.ts` (E owns from now), `src/lib/` (`seo/`, `content/`, `forms.ts`, `log.ts`, `links.ts`, `chrome.ts`, `redirects.ts`, `image-loader.ts` (C owns from now), `motion-features.ts`, `report-error.ts`), `src/instrumentation.ts`, `src/app/error.tsx`, `global-error.tsx`, `src/mdx-components.tsx` (E), `migrations/0001_init.sql`, `content/`, `scripts/`, `tests/`, `docs/`.

## Contracts

| Contract | Where | Shape |
|---|---|---|
| Page metadata | `src/lib/seo/index.ts` (E owns the folder) | `type PageKey` (home, work, brand, product, decks, social, linkedin, career, about, contact, free, privacy, accessibility, work-with-me, agencies, linkedin-invite, work-private, stats, hire, industries, guides, not-found); `pageMeta(key)`, `caseMeta(slug)`, `contentMeta(item)`. Titles and descriptions are 07 §3.2's, in `src/data/seo.ts` (no city; noindex flags for /free, /work-with-me, /agencies, /work/private, /stats, /accessibility and the hubs) |
| JSON-LD | `src/components/seo/json-ld.tsx` | `<JsonLd page={PageKey \| "site" \| "case" \| "hire-role" \| "industry" \| "deliverable" \| "guide"} slug? />`; renders nothing until E. Person data with `alternateName` ["Rez", "RezBloom"] in `src/data/seo.ts` |
| Every page | all `page.tsx`, `not-found.tsx` | `export const metadata = pageMeta("<key>")` (cases: `generateMetadata` → `caseMeta`) and one `<JsonLd page="<key>" />`; the layout has `<JsonLd page="site" />` |
| Forms | `src/lib/forms.ts` | `ROLES`, `type Role` (founder, recruiter, agency, other), `roleLabels`, `needsByRole` (09 §4), `timelineOptions`, `budgetOptions` (decision 46), `contactFields` (`as`, `needs`, `timeline`, `budget`, `name`, `email`, `company`, `link`, `message`, `role`, `landing`, `source`, `page`, honeypot `website`, start `t`), `previewFields` (`q1` to `q4`, `name`, `email`, `linkedin`, `website`, `t`), `maxLength`, `contactLinks` (incl. `recruiterForRole`), `FormState` (`null` \| `{ok:true,name?}` \| `{ok:false,error,fieldErrors?,values?}`), `isEmail` |
| Actions | `src/app/actions/*` | `sendMessage(prev, data)`, `requestPreview(prev, data)`, `unlockCase`, `lockCase`, `statsLogin`, `statsLogout`, returning `FormState`. Today's logic; `sendMessage` reads `as` then `kind`. A failed store write shows the email address. Log out clears `rk_stats`, `rk_owner`, `rk_owner_ui`; a Stats sign in lasts 7 days |
| Storage | `src/lib/db/index.ts` (`server-only`) | `recordView`, `recordEvent(kind, value?, path?)`, `recordVisitor`, `addMessage`, `listMessages`, `setQualified`, `pruneMessages`, `hitAttempt(key, limit, windowMs)`, `clearAttempts(key)`, `getStats(days)`, `dayKey`; `EVENT_KINDS`, `REFERRER_GROUPS`, `referrerHosts`, `referrerGroup(host, utm)`, `type Family`, `MessageKind`, `LeadSource`, `Message` (with `qualified`), `RETENTION_MS` (24 months). Runs on today's store; B puts D1 inside |
| D1 | `migrations/0001_init.sql`, `wrangler.jsonc` | 08 §13.2 plus `views.family`, `views.ref_group`, `events.path`, `messages.landing/source/page/qualified`, an email index. Binding `DB`, placeholder id `00000000-…`, applied locally (`npm run db:migrate:local`) |
| Secrets | `src/lib/secrets.ts` | `getSecret("STATS_PASSWORD" \| "RECRUITER_PASSWORD" \| "AUTH_SECRET")` from the Cloudflare env binding (OpenNext dev setup in next.config.ts); null when missing |
| Auth | `src/lib/auth/index.ts` | async `token(scope)`, `hasToken(scope, value)`, `checkPassword(scope, input)`, all false or null without a secret (no fallback); `cookieNames` (`rk_stats`, `rk_case`, `rk_owner`, `rk_owner_ui`) |
| Cases | `src/data/work.ts` | `Case` v2 with `description` (07 §3.2 for the 7 cases), `services`, `year` (data only), `next` worked out by `nextCase(slug)` from `caseOrder`; `homeOrder` as before (C sets it) |
| Content | `src/lib/content/schema.ts`, `src/lib/content/index.ts` | zod schemas for hire, industry, deliverable, guide and case (every seo §3.5 field; images with key, width, height, alt, decorative; My role rows with `toConfirm`; blocks; `industries`, `deliverables`, `shareImage`); loaders `contentItems`, `hubItem`, `hubChildren`, `contentItem`, `caseItems`, `contentRoutes`, `loadBody` |
| Claims, copy rules | `content/claims.ts`, `content/rules.json` | Claims from 00-facts §3 by key (earworm, delineate, delineateScope, reviews, solvita, years, awards, bdapps); the lint's punctuation, hyphen names, banned patterns, price exemptions (incl. the budget chips), concept cases, the SolVita rule, the MDX allow list (Callout, CaseCard, Faq, Figure, Proof) |
| Routes | `src/lib/routes.ts`, `src/lib/chrome.ts` | `staticRoutes` (+ `/linkedin/invite`), `hubRoutes`, `allRoutes`, `normalizePath`, `familyOf(path)`; `chromeRoute(path)` |
| Chrome | `layout/chrome-gate.tsx` | No dock on `/linkedin/invite`; the footer wrapper has `data-chrome="invite"` there for `invite.css` to hide it below 640px |
| Interface words | `src/data/ui.ts` | Labels, aria words, hub names, decision 46 words, the 500 page copy (`errorPage`) |
| Environment | `.env.example`, `.env.local`, `.env.production.local` | `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_SHOW_NOTES`, `NEXT_PUBLIC_INDEXABLE`, `NEXT_PUBLIC_INVITE_LIVE`; secrets only in `.dev.vars` (new test values) and Worker secrets; `CONTENT_STAGE` (draft, preview, live) and `SITE_STAGE` (Worker var, `preview` in the previews block) |
| Logging | `src/lib/log.ts`, `src/instrumentation.ts` | `log(level, event, fields)` with an allow list and scrubbing; `onRequestError` → one JSON line |

## What F did (tasks 1 to 15)

1. **Safety first.** `wrangler.jsonc`: custom domain `rezz.dashbloom.design`, `workers_dev: false`, `preview_urls: false`, `secrets.required` for the three secrets (supported by Wrangler 4.151.3's schema), D1 binding, KV kept, two Rate Limiting bindings (`RL_AUTH` 10/min, `RL_FORMS` 5/min), `vars.SITE_STAGE`, and a `previews` block (preview D1, `SITE_STAGE=preview`).
2. **One install.** Added: zod 4.6.7, server-only 0.0.1, @next/mdx 16.4.2, @mdx-js/loader 3.1.1, @mdx-js/react 3.1.1, remark-frontmatter 5.0.0 (deps); sharp 0.35.5, satori 0.63.2, schema-dts 2.1.0, @types/mdx 2.0.14, prettier 3.9.10, prettier-plugin-tailwindcss 0.8.1, @ls-lint/ls-lint 2.3.2, axe-core 4.14.0, gray-matter 4.0.3, @mdx-js/mdx 3.1.1 (dev). React and React DOM 19.3.0 → 19.3.1. Every version is exact (`.npmrc` `save-exact=true`, registry pinned, `engine-strict`); `engines.node >=22.15`; `.nvmrc` 22. Each new or bumped version was at least 7 days old on 28 Oct (checked with `npm view <pkg> time`). Install scripts in the tree: esbuild, fsevents, unrs-resolver, workerd, all on the allow list. **Held back by the 7 day rule** (see Rez decides): Next 16.4.3 (4 days old; a bug fix backport, no security fix in its notes), eslint-config-next and @next/mdx 16.4.3, OpenNext 1.20.13 (6.4 days), Wrangler 4.153.0 (1 day), Motion 14.7.1 (under 1 day).
3. **Cache Components and partial prefetching off everywhere** (`next.config.ts`); decision record 0003.
4. **Layout move**, the path map above, one Prettier pass, `.ls-lint.yml`.
5. **Scripts**: the best-practices §4 table plus `check:deps`, `check:secrets`, `content:new`, `content:check`, `content:lint` (`--data`), `content:links`, `content:gate` (`--fast`, `--staged`, `--json`), `content:index`, `agents:check`, `a11y` (stub), `db:migrate:local`, `cf:typegen`, `preview:remote` (written, never run), `worker:size` (bundles the Worker with esbuild as Wrangler does), `prepare` (git hooks path), `postcf:build` (secrets check). `check` = names, format:check, lint, typecheck, content:check, content:lint, agents:check, check:deps, test, build, check:secrets.
6. **Secrets**: `.dev.vars` with new random test values (never printed), `.dev.vars.example`; `.env*` public only; `getSecret()`; sign in fails closed.
7. **Tokens and the CSS split** from the Figma variables (Theme, Responsive, Space, Radius, Typography, Primitives, read 28 Oct), with figma-a's changes (`--radius-tile`, Article styles, border/focus 80%, `--border-field`, `--border-field-hover`, `--scrim-strong`, glow tokens, `--dock-item`, `--space-28`, `--avatar-backdrop`). Base: focus ring, skip link, `scroll-padding-bottom` for the dock, forced colours, reduced motion, the `hit-area` utility.
8. **Shared components** (08 §3.2 F rows) plus Skip link and Breadcrumb, each with its Figma states and aria rules; all 44 icons. Field and Alert take error text from props only.
9. **Layout and chrome**: Newsreader without italic, LazyMotion (domAnimation after hydration), Toast provider, ChromeGate, top bar (Label/S clock, Owner chip slot), footer (Hire, Guides, Accessibility, "Remote", © slot), `<html lang dir>` from `site.ts`, `main#content`, `error.tsx` (the 500 page from Figma `291:11160`), `global-error.tsx`, `instrumentation.ts`, `src/data/ui.ts`.
10. **Contracts** (above); local D1 migrated.
11. **Content layer**: folders `content/work`, `content/pages/{hire,for,brand,product,decks,social,linkedin}`, `content/guides`; schemas; claims; rules; `CONTENT_STAGE` filtering through `.generated/` (production bundles no draft body); `content:check`, `content:lint`, `content:gate`, `content:links`, `content:new`; `prebuild` runs check and lint; `.githooks/pre-commit` (names, Prettier on staged files, `content:gate --staged --fast`); `.github/workflows/ci.yml` (read only, actions pinned to SHAs, never deploys).
12. **Routes**: `/hire`, `/hire/[role]`, `/for`, `/for/[industry]`, `/<brand|product|decks|social|linkedin>/[deliverable]`, `/guides`, `/guides/[slug]`, `/guides/feed.xml`, all answering 404 until there is content for the stage; `src/lib/redirects.ts` (empty, wired into next.config); metadata and JsonLd lines in every page.
13. **`site.ts` copy**: "Remote", "You leave with 3 fixes.", the 3 Contact FAQs, the call card line and title, footer columns, recruiters line without Dhaka, `OWNER_TIME_ZONE` for Stats only.
14. **Headers**: CSP Report Only (security §5.4, `'unsafe-eval'` and `ws:` in dev only), HSTS, nosniff, Referrer-Policy, Permissions-Policy, COOP, X-Frame-Options, X-Robots-Tag noindex until `NEXT_PUBLIC_INDEXABLE=1`; `public/_headers`; server action body limit 64 KB; the Rate Limiting bindings.
15. **Docs**: README, AGENTS.md (Next's block kept, site rules moved in, 4.3 KB), CLAUDE.md (`@AGENTS.md`), CONTRIBUTING, CHANGELOG, `docs/architecture.md`, `docs/design-system.md`, `docs/accessibility.md` (started), `docs/content-rules.md`, decisions 0001 to 0009, runbooks `publish-content`, `ai-tools`, `github-setup`, `staging-preview`, empty owned files for the rest (`content`, `seo`, `security`, `privacy-data`, `performance`, `testing`, and runbooks `deploy`, `rollback`, `d1-backup-restore`, `launch`, `monthly-upkeep`, `dependency-update`, `incident`, `uptime`), the two skill wrappers, `site/.claude/settings.json` (the same deny list as `01-portfolio/.claude/settings.json`).

Also: `noUncheckedIndexedAccess` is on (8 fixes, under the ~30 budget); a dev only component sheet at `/dev/components` (404 in production) for screenshot pairs.

## Checks

| Check | Result |
|---|---|
| `npm run check` (names, format, lint, typecheck, content:check, content:lint, agents:check, check:deps, 6 tests, build, check:secrets) | Pass, exit 0 (34 routes built) |
| `npm run cf:build` | Pass; `postcf:build` check:secrets: ok, no secret key in `next-env.mjs`, no `.dev.vars` value in 60 client files. Before it, the check flagged the old 21 Oct `next-env.mjs` holding the three secrets (the A2 leak), as intended |
| `npm run cf:preview` (local Worker, port 8787) | All 23 existing routes 200; `/hire`, `/for`, `/guides`, `/guides/feed.xml`, `/hire/x`, `/for/x`, `/guides/x`, `/decks/x`, `/nope`, `/work/nope` 404; `/sitemap.xml`, `/robots.txt`, static files 200. Headers present on Worker and static responses |
| Secrets through the binding | A no-JS form post to /stats on the local Worker: wrong password refused, the `.dev.vars` test password sets `rk_stats` and `rk_owner_ui` (values never printed) |
| `worker:size` | About 1.75 MB gzipped of the 3 MB free limit (the 21 Oct deploy measured 1.8 MB) |
| Planted bad content | `content/guides/planted-import.mdx` (an `import`) and `planted-expression.mdx` (`{ }` in text and a prop) both failed `content:check` with exit 1, then were removed; the check is clean again |
| `content:new` and `content:gate --fast` | Scaffold works, a taken slug is refused, a draft's gaps are warnings |
| Pre-commit hook | Runs (`sh .githooks/pre-commit`, exit 0); `npm install` set `core.hooksPath` |
| Dev server (BrowserOS, own tab, closed) | Home, Work, Contact, About, a case, Stats, the private case and Brand render with their h1; hubs and unknown paths show the 404; no Next error; no sideways scroll at 375; skip link shows on focus; focus ring 2px; `scroll-padding-bottom` 160px; the Action pill is one tab stop; the Modal sheet traps focus, locks the scroll and sits at the bottom at 375 |
| `npm audit` baseline (28 Oct, after the install) | `--omit=dev`: 0. Full: 10 (4 moderate, 6 high), all build or local tooling: undici via wrangler → miniflare (fixed in Wrangler 4.153.0, held), glob via OpenNext → @node-minify (unreachable CLI flag), body-parser 2.3.0 via OpenNext → express (2.4.0 is 5 days old; not in the Worker bundle), fflate via satori (build only) |
| Copy scan of `src/data` (`content:lint -- --data`) | 16 warnings for the owning chats, listed under Open issues |

## Screenshots

In [f-shots/](f-shots/): `build-components-1440.jpg` and `build-components-375.jpg` (the `/dev/components` sheet: Action and Glass pills, Icon tiles, Tags, Template rows, Filter chips, Select single and multi, Field default, optional, error, password and disabled, Alerts, Toasts, FAQ items, Skeletons, Empty state, Call card, Footer), next to the Figma frames `figma-action-pill-39-162.png`, `figma-field-115-247.png`, `figma-footer-135-507.png` (desktop and mobile), `figma-alert-137-573.png`. The Modal sheet at 375 was checked live. Compared by eye: sizes, radii, fills, states and the footer layout match; the Modal desktop width follows the description (min(880px, 100vw minus 48px)) rather than the 760px drawing (figma-a flagged it).

## Changes in files other chats own (minimal, needed by the move or the contracts)

- Every page: the metadata line and the JsonLd line; imports to the new paths.
- `app/stats/page.tsx`, `app/work/private/page.tsx`: `await hasToken(...)` (the token check is async now).
- The Client and Concept tag renders removed from `work/case-card.tsx`, `app/work/page.tsx`, `sections/service-page.tsx` and the case page header (Tag has no such kinds; row 81).
- Type fixes for `noUncheckedIndexedAccess`: `cal-embed.tsx`, `stats/page.tsx`, the case page, `sound-provider.tsx`, `service-page.tsx`, `db/store.ts`. `cal-embed.tsx` skeleton cells keep their 12px radius (`rounded-xl` now means Figma's 28px).
- `sections/career.tsx`: icon name `Chevron` → `ChevronDown`. `db/stats.ts`: `OWNER_TIME_ZONE`.

## Open issues for wave 1

| For | Issue |
|---|---|
| D | `src/data/career.ts` still names Taste Labs ("Taste Labs, USA · Remote contract", row 61) and "Bangladesh" twice (decision 39); the RUET full name is allowed (07 §4.2). `content:lint -- --data` lists them |
| C | `work.ts`: Nike Mind "micro check-ins" (decision 33); the Earworm quote block still carries "Needs the client's OK"; cases move to `content/work/` with the case schema; `homeOrder` per 08 §3.8 |
| D | `onRequest` still has the NDA card (row 60); archive images still greyed at rest (§3.8); the dock uses `motion` with `layoutId`: under the LazyMotion features (domAnimation) only `motion.` components animate layout. Keep `motion.` there, move to CSS transforms (07 §5.6), or ask E to switch `lib/motion-features.ts` to domMax |
| B | Contact form posts `kind`; the contract field is `as` (the action reads both). `rk_owner_ui` is set at sign in, the chip itself is B's. Attempts are in memory until D1 |
| E | `pageMeta` has no canonicals or Open Graph merging yet; JsonLd renders nothing; `templates/content-placeholder.tsx` stands in for the real templates; `/guides/feed.xml` is minimal; `mdx-components.tsx` is empty |
| C | `image-loader.ts` returns the source unchanged, so next dev warns that the loader ignores width |
| R | `baseline.md`'s `git diff --stat <tree>` lists untracked files as deletions. To compare with the baseline, use a temporary index the same way the tree was made: `GIT_INDEX_FILE=<tmp> git add -A && GIT_INDEX_FILE=<tmp> git diff --cached --stat f3474748e92543326f366c5aa2ae32c36135f23e` (F's change: 237 files, +27,249, −2,031) |
| All | `cloudflare-env.d.ts` (Wrangler runtime types, 0.6 MB) is generated by `npm run cf:typegen` after any `wrangler.jsonc` change |

## Requests

1. **Coordinator: the CLAUDE.md change for decision 3.** The site rules now live in `site/AGENTS.md`. Add to the root `CLAUDE.md` and `01-portfolio/CLAUDE.md`, in "Rules for this site": "For work inside `site/`, the rules in `site/AGENTS.md` apply; Claude reads them through `site/CLAUDE.md`. Keep the two in step: business rules stay here, code and content rules live there." F may not edit those files.
2. **Rez: `~/.gemini/AGENTS.md`** (decision 22), before using Antigravity. Create `C:\Users\REZ\.gemini\AGENTS.md` with exactly:

   ```markdown
   # Rez's global rules

   @[Rez global rules](~/.claude/CLAUDE.md)
   ```

   Then ask Antigravity what its global rules say about commits (`site/docs/runbooks/ai-tools.md`).
3. **The held version bumps**, once each is 7 days old: Next, eslint-config-next and @next/mdx 16.4.3 (from 30 Oct), OpenNext 1.20.13 (from 28 Oct, 13:24 UTC), Wrangler 4.153.0 (from 2 Nov; fixes undici in local dev), Motion 14.7.1 (from 3 Nov). R or the coordinator installs them with `npm i -E`, then `npm run check`.
4. **Packages added for the content layer** beyond the explicit list, all named by the Next MDX docs or already in the tree: remark-frontmatter and gray-matter (Next's MDX guide names both for front matter), zod (Next's forms guide names it; "a schema validator if the docs don't cover one"), @mdx-js/mdx (already installed under @mdx-js/loader; declared so the content check doesn't rely on a hidden dependency). No new install script, nothing in the Worker beyond zod's types.
5. **Coordinator: file table rows.** `01-portfolio/CLAUDE.md` "Files here" has no row for `08-build-reports/` (the build chats' reports, with `f-shots/` for F's screenshots).

## Rez decides later

| Item | Default taken | Why |
|---|---|---|
| Named versions vs the 7 day rule | The rule won: only versions at least 7 days old went in (React 19.3.1 did); the rest wait (Request 3) | security §3.1; Next 16.4.3 holds no security fix |
| The 500 page copy (for-rez.md §2.10) | Built as drawn: "Something went wrong on my side." · "Try again in a minute. The work and the contact page are one click away." | The recommended answer |
| Rate Limiting binding on the free plan | Added. Cloudflare's docs mark it GA with no paid only note; if the first deploy refuses it, remove `ratelimits` from `wrangler.jsonc` | security §5.2 |
| The D1 database | Placeholder id. At the first deploy: `npx wrangler d1 create rezkarim-portfolio`, put the id in `wrangler.jsonc`, then `npx wrangler d1 migrations apply rezkarim-portfolio --remote` | 08 §10 |
| New secrets (A2) | `.dev.vars` holds new local test values; the live Worker still has the 21 Oct values, which the old bundle and `.env.local` carried | Before the first deploy, run the two `wrangler secret put` commands in for-rez.md §1 |
| `.dev.vars` in git | Not ignored, as Rez's rule says; it holds test values only | security §4 rule 3 |

## Suggested commit message

```text
feat: lay the V4a foundation

Move components to kebab-case folders, split the CSS into tokens, base,
components and per-area files from the Figma variables, and rebuild the
shared components with their states. Add the SEO, forms, actions, storage,
case and content contracts, the D1 schema, the content layer with its
checks and gate, route skeletons for hire, industries, deliverables and
guides, secrets from the Cloudflare binding with sign in failing closed,
security headers with a Report Only CSP, error pages and server logging,
tooling (Prettier, ls-lint, EditorConfig, hook, CI) and the docs set.
Point the custom domain at rezz.dashbloom.design and turn off workers.dev
and preview URLs.
```
