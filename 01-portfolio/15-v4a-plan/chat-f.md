# Chat F · Foundation

[README](README.md) · Approved 27 Oct 2026 · Opus 5.5, Extra high · Wave 0, alone. Lay the shared ground so five chats can build in parallel on final paths.

## Start condition

A baseline of `site/` before the build exists: Rez's commit, or the tree in [baseline.md](baseline.md) (recorded 28 Oct, since Claude never commits). figma-a's planning file shows its token changes done ("Fixes applied", "Round 2" and "Round 3" in [figma-a](planning/figma-a-design-system.md)). If not, stop and report.

## Read first

[common.md](common.md); [08](../08-build-plan.md) §3, §5, §7, §13 and package F in §6; [06](../06-design-system.md); [07](../07-search-and-speed-plan.md) §5.5 and §5.6; [09](../09-functional-checklist.md) §1 and §8; [best-practices](planning/best-practices.md) §1 to §4, §8 and §10; [security](planning/security.md) §3, §4, §5.4 and §6.1; [operations](planning/operations.md) §2, §3, §4.1 and §4.4; [seo](planning/seo-aeo-geo.md) §3.5 to §3.7; [figma-a](planning/figma-a-design-system.md) "Fixes applied", "Round 2" and "Round 3" (tokens, styles and components that 06 doesn't list yet); the F rows under "For the build chats" in every planning file.

## Owns

Everything 08 §7 gives F, plus: `.npmrc`, `.nvmrc`, `.editorconfig`, `.prettierrc.json`, `.prettierignore`, `.ls-lint.yml`, `.dev.vars.example` (and a local `.dev.vars` with test values), `.githooks/`, `.github/workflows/ci.yml`; the scripts for check-deps, check-secrets, content-new, content-check, content-lint, content-gate, content-links, agents-check and a stub for a11y-sweep; the `content/` folders, the schemas in `src/lib/content/`, `content/claims.ts`, `content/rules.json`; `migrations/0001_init.sql`; `src/lib/log.ts`, `src/instrumentation.ts`, `src/app/error.tsx`, `src/app/global-error.tsx`, `src/data/ui.ts`; route skeletons for `/hire`, `/for`, `/guides` (E fills them); `src/lib/redirects.ts`; `site/AGENTS.md`, `site/CLAUDE.md`, the two skill wrappers; the docs skeleton and the docs listed in task 15. The move of every existing file to the new layout.

## Don't touch

Page content beyond the metadata and JsonLd lines; the root and `01-portfolio` CLAUDE.md files (Request changes); Figma.

## Tasks, in order

1. **Safety first.** `wrangler.jsonc`: the custom domain becomes `rezz.dashbloom.design` (operations §4.1), plus `"workers_dev": false`, `"preview_urls": false` and `secrets.required` for the three secrets if the installed Wrangler supports it (security §4 rule 5).
2. **One install** (decision 1, security §3.1). Bump Next 16.4.3, React 19.3.1, OpenNext 1.20.13, Wrangler 4.153.0 (or a newer patch at least 7 days old), Motion 14.7.1 and `eslint-config-next` to match. Add sharp, satori, schema-dts, `@next/mdx` and the MDX packages its docs name, prettier, prettier-plugin-tailwindcss, @ls-lint/ls-lint, axe-core, and a schema validator if the docs don't cover one. `.npmrc` with `save-exact=true`; the 7 day age check; the install script allow list; the `npm audit` baseline in the report.
3. **Cache Components and partial prefetching off everywhere** (decision 1); decision record 0003.
4. **The layout move** (best-practices §1). Move every file into its folder with kebab-case names. Move, never rename in place (the Windows case trap). Update imports, run one Prettier pass, add the ls-lint config. Publish the old to new path map in the report before anything else lands.
5. **Scripts**: the best-practices §4 table, security's `check:deps` and `check:secrets`, operations' `content:new`, `content:gate`, `content:links` and `agents:check`, `db:migrate:local`, `preview:remote` (written, never run), and `worker:size`, which reads the built Worker's size without Wrangler (the project's deny list blocks `wrangler deploy`, even with `--dry-run`). `check` runs names, format:check, lint, typecheck, the content checks, test and build, in that order.
6. **Secrets** (security §4). `.dev.vars` with new test values and `.dev.vars.example`; the `.env*` files keep public settings only; one server only `getSecret()` that reads the Cloudflare env binding through OpenNext's dev setup (read OpenNext 1.20.13's docs first); sign in fails closed without a secret.
7. **Tokens and the CSS split** (08 F step 3) from the Figma code syntax, with figma-a's changes (`--radius-tile`, the Article styles, the focus ring, the field edge token). Base styles: a `:focus-visible` ring, the skip link, `scroll-padding-bottom` for the dock, forced colours, reduced motion, and the 44px hit area utility (figma D).
8. **Shared components** (08 §3.2 F rows) plus Skip link and Breadcrumb. Field and Alert take their error text from props, never a default sentence (figma B).
9. **Layout and chrome** (08 F step 5); `error.tsx` and `global-error.tsx`; `instrumentation.ts` with `onRequestError` into `lib/log.ts` (best-practices §8); `<html lang dir>` from `site.ts`; `src/data/ui.ts`.
10. **Contracts** (08 §7) plus: `seo.ts` page keys for the new families; `forms.ts` with the timeline, budget and link fields, the hidden landing, source and page fields, and the recruiter role prefill (seo §6.1); `db.ts` with the event kinds, referrer groups, lead source, the qualified mark, retention pruning at 24 months (decision 27) and attempts; `migrations/0001_init.sql` = 08 §13.2 plus those columns; the D1 binding with a placeholder id and local D1 in dev.
11. **The content layer** (seo §3.5 to §3.7, operations §2, security §6.1). Folders `content/work`, `content/pages/<family>`, `content/guides`; schemas with every field in seo §3.5 and the case fields in figma C's F row; `content/claims.ts` copied word for word from 00-facts §3; `content/rules.json` for the lint; status filtering with `CONTENT_STAGE`; `content:check` (schema, unique `intentKey` and titles, proof, links and orphans, similarity, the SolVita rule, alt text, the MDX allow list, safe front matter), `content:lint`, `content:gate` and the `content:new` templates; `prebuild` runs the checks; `.githooks/pre-commit` set by a `prepare` script, running only the fast checks on staged files (names, format, `content:check`, `content:lint`), never the build, so Rez's commits stay quick; `ci.yml` read only, never deploying.
12. **Routes**: skeletons for `/hire`, `/for/<industry>`, `/<service>/<deliverable>`, `/guides` and `/guides/feed.xml` that render nothing live until E's templates; `redirects.ts`. The metadata line and the JsonLd line in every page (08 F step 7); Person `alternateName` ["Rez", "RezBloom"] in the SEO data stub (decision 12).
13. **`site.ts` copy** (08 F step 8).
14. **Headers**: the security headers and CSP in Report Only (security §5.4) in `next.config.ts` and `public/_headers`; the server action body limit; the Workers Rate Limiting binding if the free plan has it.
15. **Docs** (best-practices §2, operations §3): README, AGENTS.md (keep Next's block; the site rules move in per decision 3; under 8 KB), CLAUDE.md with `@AGENTS.md`, CONTRIBUTING, CHANGELOG, `docs/architecture.md`, `docs/design-system.md`, `docs/accessibility.md` (start), `docs/content-rules.md`, decision records 0001 to 0009, runbook drafts `publish-content`, `ai-tools` (with the exact `~/.gemini/AGENTS.md` text for Rez, decision 22), `github-setup` and `staging-preview`, empty files with owners for the rest, the two skill wrappers, and `site/.claude/settings.json` with the same deny list as `01-portfolio/.claude/settings.json` (decision 25).

## Checks

`npm run check`; `cf:build` and `cf:preview` with every route answering; `check:secrets` on the Cloudflare build finds no secret key in `next-env.mjs`; two planted bad content files (one with an `import`, one with a `{ }` expression) fail `content:check`, then get removed; screenshots of the shared components next to their Design system frames at 375 and 1440.

## Done when

Every check passes; the report's first line says "done"; the path map, the contracts and the installed versions are listed; Requests hold the CLAUDE.md change for decision 3 and the `~/.gemini/AGENTS.md` step for Rez.

## Report

Filled by chat F in `08-build-reports/f.md`.
