done

# Chat R · Review and end to end report

[README](../15-v4a-plan/README.md) · Done · 28 Oct 2026 · Run by the build coordinator at Max ([review.md](../15-v4a-plan/review.md), [e2e.md](../15-v4a-plan/e2e.md)), with five review subagents (pages, app flows, accessibility, design QA, SEO and content) and one docs writer. Nothing committed, deployed or touched live. Scratch notes from the subagents stay in the coordinator's scratchpad.

## In one screen

- Wave 1 (B, C, D, E, W) all reported done. R fixed every open request that fit, then ran the security, gate, SEO, accessibility, design QA and end to end passes and fixed what they found: about 40 fixes in all, listed under "Files changed".
- `npm run check`, `cf:build`, `cf:preview`, `smoke-auth` (35 of 35) and `worker:size` (9.22 MiB of 64 MiB) pass on the final code.
- Every e2e flow passes, except a real Cal.com booking (needs Rez) and the NVDA pass (needs a person).
- Accessibility: Lighthouse 100 on all 55 URLs. Speed: TBT, CLS, weight and desktop meet the budgets; mobile scores 81 to 90 with a simulated LCP of 3.6 to 5.0 s miss them, while the real first paint is the LCP (0.58 s observed on Home).
- One change Rez will see at once: decision 38 darkened the card glass from 40% to 74% black and the dock glass from 50% to 78%, because text failed AA over the bright parts of the photo. A lighter option is in "Rez decides later".
- O, the onboarding test: passed in 12 minutes from the repo alone ([onboarding-test.md](onboarding-test.md)); its doc gaps are fixed in the README and docs, and a `.gitattributes` keeps text files LF.
- Rollback points: the trees after wave 1, after R and the final one are in [baseline.md](../15-v4a-plan/baseline.md).

## Files changed by R

| Area | Files (`site/`) | What |
|---|---|---|
| Content checks | `scripts/lib/checks.ts`, `content/rules.json` | Concepts read from the case files' `kind` plus the 12 new slugs in `conceptCases`; a live case may keep a To confirm line (warning, decision 40), so the 4 cases with hidden lines can go live |
| Dev index | `package.json` | `postbuild` restores the draft content index, so a build never empties the shared `next dev` |
| Worker | `wrangler.jsonc`, `cloudflare-env.d.ts` | KV binding removed (the 21 Oct site keeps its KV on its own Worker; `kv-to-d1.mjs` reads it by namespace id); `RL_TRACK` 60 a minute in both blocks; `npm run cf:typegen` |
| Static cache | `public/_headers`, `.gitignore` | Hashed case images a year, immutable; plain image folders a week, with no overlapping rules; `public/og/gen/` ignored |
| Forms and links | `src/lib/forms.ts`, `src/components/forms/contact-form.tsx`, `src/components/templates/content-header.tsx`, `content-page.tsx`, `src/components/invite/preview-form.tsx` | Hire roles send `?kind=recruiter&role=` (flow 2); Industry and Deliverable pages get Send a message, the deliverable's service preselected (`?kind=founder&need=`, flow 5, seo §6.2); Send another re-picks the role's need; the invite form renders `FormMeta` (lead source) and checks `/in/` or `/company/` links |
| SEO | `src/lib/seo/graph.ts`, `src/lib/seo/index.ts`, `src/components/seo/json-ld.tsx`, `src/data/seo.ts`, `src/lib/content/schema.ts`, `content/work/*.mdx`, `src/app/llms.txt/route.ts`, `tests/json-ld.test.ts` | `seoTitle` on 19 cases (07 §3.2's five, plus name and scope for the 14 new ones); `client` on Earworm and SolVita for the JSON-LD `about` node; full ISO dates; no read dates on citations; `creditText` on case images; decks genre "Investor deck"; the /accessibility description; the Home share alt no longer repeats the name; hire lines in llms.txt use the description |
| Content | `content/pages/hire/presentation-designer.mdx`, `for/saas.mdx`, `product/dashboard-ui-design.mdx`, `linkedin/banner-design.mdx` | The Delineate FAQ uses the exact claim; the three pages whose proof tiles are all concepts lead with the years claim |
| Service pages | `src/components/sections/service-page.tsx`, `src/data/services.ts` | A Related card links each service's deliverable pages (no more orphans); /brand shows YumYum and /product Orion in SolVita's place (the ordering rule) |
| Invite | `src/data/invite.ts` | "What else I design" puts Earworm and the Real estate website above SolVita |
| Cases | `src/app/work/[slug]/page.tsx`, `src/components/work/next-case.tsx` | One `dl` per My role row (valid list); Related ranks industry and deliverable pages first (flow 4); the Next case title wraps to two lines |
| Accessibility | `src/components/ui/select.tsx`, `src/styles/components.css`, `src/styles/base.css`, `src/components/providers/consent-provider.tsx`, `src/components/ui/template-row.tsx`, `src/styles/home-work.css`, `src/styles/tokens.css`, `src/components/layout/visitor-clock.tsx` | Menus close on blur (a mouse click on an option keeps focus inside, checked by real mouse events) and mark the keyboard's option; forced colours on menus; focus to `main` after a cookie choice; template rows wrap at 320px and 400% zoom; the dock fits 320px (44px items); `--glass-card` 74%, `--glass-nav` 78% (decision 38); the clock flag is decorative |
| Design QA | `src/styles/pages.css`, `src/app/agencies/page.tsx`, `src/components/sections/call-card.tsx`, `src/data/offers.ts`, `src/app/page.tsx`, `src/components/sections/list-rows.tsx`, `src/styles/templates.css`, `src/app/privacy/page.tsx`, `src/app/accessibility/page.tsx`, `src/app/not-found.tsx`, `src/app/error.tsx` | The services accordion line no longer clips (H1); For agencies closes with "Try it on one real brief" and Ask about the pilot (H2); header buttons full width on phones (M1); Home Proof 2 by 2 on phones (M2); highlight tags kept on phones (M3); a 220px label column in list rows (M5); Body/L paragraphs on Privacy and Accessibility (M7); post cards get their glow (M8); the About portrait (a new cutout at Rez's ask, centred on phones too, Figma updated) |
| Modal | `src/components/ui/modal.tsx` | A click on the panel's padding no longer closes it; only the scrim does |
| Privacy and statement | `src/data/pages.ts` | Privacy names the session storage lead source, the Cal.com warm up and the 24 month retention; /accessibility's How I check it and Known gaps match what R tested |
| Sound | `src/data/site.ts`, `src/components/providers/sound-provider.tsx`, `src/lib/sound.ts` | The ambience list names ids only; files come from `audio.json`; an empty path never loads |
| Test route | `src/app/dev/throw/` | Throws in the browser for flow 13; 404 in the live build |
| a11y script | `scripts/a11y-sweep.mjs` | Lighthouse accessibility on every sitemap URL plus the noindex pages; exits 1 under 100 |
| Docs | `docs/runbooks/{deploy,rollback,launch,monthly-upkeep,dependency-update,incident,uptime}.md`, `docs/testing.md`, `docs/accessibility.md`, `README.md`, `CHANGELOG.md`; `01-portfolio/05-guide.md` §3 | Runbooks and testing written; README links every doc; accessibility handling and exceptions recorded; posting prompts for Claude or Antigravity |

Outside `site/`: the Figma page "QA · Build vs design" (`320:2`, decision 29), [baseline.md](../15-v4a-plan/baseline.md) (two trees), this report.

## Checks

| Check | Result |
|---|---|
| `npm run check` (names, format, lint, typecheck, content:check, content:lint, agents:check, check:deps, 41 tests, build, check:secrets) | Pass, exit 0 |
| `npm run cf:build` (preview stage) | Pass; `check:secrets` ok (71 client files) |
| `npm run worker:size` | 9.22 MiB uncompressed of 64 MiB (1.98 MiB gzipped) |
| `scripts/smoke-auth.mjs` on the local Worker | 35 of 35 |
| `npm audit --omit=dev` | 0. Full audit: 10 (4 moderate, 6 high), the same build and local tooling set as F's baseline |
| Planted bad content (`import`, `{ }`, `<script>`) | Caught by the pre-commit hook (`content:gate --staged`, run with a temporary index), by `prebuild` (`content:check`, 7 errors) and by CI (`ci.yml` runs the same `content:check`); removed after, check clean |
| Draft and ready pages in the live build (flow 11) | All 20 pages, 21 cases, the hubs and the feed answer 404; the sitemap lists the 11 static pages only; llms.txt names no content page |
| Launch mode (flow 15) | robots.txt allows all with `Disallow: /api/` and the sitemap line; sitemap 52 URLs on rezkarim.com, none noindex; llms.txt 47 links; feed 8 items; `index, follow, max-image-preview:large` on public pages, `noindex, follow` on /free, /work-with-me, /agencies, /accessibility, `noindex, nofollow` on /stats and /work/private, with matching `X-Robots-Tag` |
| Invite switch (flow 16) | `NEXT_PUBLIC_INVITE_LIVE=0`: /linkedin/invite answers 404 |
| Version updates | None is 7 days old yet: OpenNext 1.20.13 qualifies at 13:24 UTC on 28 Oct, Next, eslint-config-next and @next/mdx 16.4.3 on 30 Oct, Wrangler 4.153.0 on 2 Nov, Motion 14.7.1 on 3 Nov ([dependency-update.md](../site/docs/runbooks/dependency-update.md)) |
| Host and Worker | `rezkarim-site` on rezkarim.dashbloom.design; the old Worker `rezkarim-portfolio` untouched; `cf:typegen` run |

## Security (security §8 row 6)

| Line | Result |
|---|---|
| Code review of the server code since the baseline (the `security-review` skill needs a git remote this repo lacks, so by hand): auth, tokens, lockout, secrets, limits, actions, `/api/track`, `/api/owner`, D1 SQL, the proxy, JSON-LD, content checks | Pass. Tokens `v1.<scope>.<expiry>.<HMAC>` checked for format, scope, expiry, then in constant time; passwords compared through an HMAC; sign in fails closed without secrets; attempt keys are an HMAC of the IP; every D1 query binds its values (the only interpolations are constants); Stats data and the qualified mark need a valid Stats token; messages render as text; JSON-LD escapes `<`; `target="_blank"` links carry `noopener noreferrer` |
| §5.1 Sign in, tokens and cookies | Pass (smoke-auth 35 of 35; B's 27 tests; flags HttpOnly, Lax, Secure in production, 7 and 30 days) |
| §5.2 Limits and form abuse | Pass: honeypot and timer (fake Sent), 6 messages an hour, a twin in a minute stores nothing, `RL_AUTH`, `RL_FORMS`, `RL_TRACK` bound; `/api/track` 403 cross site, 413 over 2 KB, 400 junk, bots 204 |
| §5.3 Input and output | Pass: `<b>x</b>` and `javascript:` in a message show as text on Stats; share images built at build only |
| §5.4 Headers and CSP | Pass: all 8 headers on all 67 routes (CSP Report Only, HSTS, nosniff, Referrer-Policy, Permissions-Policy, COOP, X-Frame-Options, X-Robots-Tag); static files keep nosniff and HSTS |
| No CSP report on any route | Pass: 0 `securitypolicyviolation` events on 29 routes, and with the Cal.com modal loaded |
| `npm audit --omit=dev` | 0 |
| `check:secrets` on the Cloudflare build | ok |
| §5.5 Cloudflare settings | Rez's, at launch (You check) |

## End to end ([e2e.md](../15-v4a-plan/e2e.md))

| # | Flow | Result |
|---|---|---|
| 1 | 09 §1 to §8 line by line | Pass after R's fixes, except 09 §2 "a finished booking adds one to Calls booked" (needs a real booking, Rez) and §8 speed (budgets below) |
| 2 | Hire to CV | Pass after the fix: the role page sends `?kind=recruiter&role=`; Contact prefills Recruiter and the role; the message shows its source on Stats |
| 3 | Guide to call | Pass: the modal opens; `cta_call` and `cal_open` counted |
| 4 | Industry to case | Pass after the fix: SyncGrid links back to /for/saas, Earworm to /decks/saas-pitch-deck |
| 5 | Deliverable to message | Pass after the fix: Contact opens with Founder or team and the service picked |
| 6 | Contact, new fields | Pass: timeline, budget, link and source on Stats |
| 7 | Calendar waits for a click | Pass: 0 cal.com requests before the click |
| 8 | Stats access | Pass: G then S, the © press, Too many tries after 8, 7 day sign in with the Owner chip, Log out removes it (rerun on the Worker by smoke-auth) |
| 9 | Stats data | Pass: events, AI referrer group, qualified mark, cookie choices; empty states covered by `tests/auth-db.test.ts` (an empty database) and the empty lists seen |
| 10 | Recruiter case | Pass: decision 31's line, unlocked for 30 days, Lock again |
| 11 | Draft and ready pages | Pass (Checks) |
| 12 | Consent | Pass: `rk_vid` after Allow, deleted after Only essential |
| 13 | Errors | Pass: `/dev/throw` shows the 500 page; one `client_error` counted |
| 14 | Accessibility page | Pass: footer link, 200, noindex |
| 15 | Launch mode | Pass (Checks) |
| 16 | Invite switch | Pass (Checks) |
| 17 | Mobile only | Pass after the fix: the dock fits 320px (4 to 316); sheets, sticky CTA, lightbox swipe and the © press work at 390 and 320 |

## SEO

| Line | Result |
|---|---|
| Schema Markup Validator, one page per family (Home, a case, Hire role, Industry, Deliverable, Guide, Contact, About) | 0 errors, 0 warnings on all 8 |
| Rich Results Test | Refuses the pages as served (the planned test mode noindex); with only that line removed it finds valid Breadcrumbs, Article, Profile page and Image metadata. The date warnings it raised are fixed (full ISO dates) |
| Duplicate titles, descriptions, intent keys | None; titles 60 characters or less |
| Orphans | None after the service page Related cards (/linkedin/banner-design was the one) |
| Noindex | Only where planned (07 §3.1), in both modes |
| Internal links | All 55 answer 200 |
| 20 content pages on E's templates at 1440 and 390 | One H1, answer first, breadcrumb, proof lines word for word, problem rows, FAQs in the HTML, related links resolve, no sideways scroll |
| Share images | 57 at 1200 by 630 |

## Accessibility

| Line | Result |
|---|---|
| `npm run a11y` (Lighthouse 12 accessibility, 55 URLs on the local Worker) | Final build: 55 of 55 score 100 (before R's fixes: 32 of 55; the 21 cases scored 93 on an invalid My role list) |
| axe-core, 24 templates at 1440 and 375 | 46 of 48 clean before the fixes; both fails were the My role list, now fixed |
| Keyboard pass, every template | Skip link, tab order, focus rings, named icon buttons, the lightbox and booking modal trap and return focus. Fixed: menus that stayed open over the next field, focus lost after a cookie choice |
| 320px reflow and 200%, 400% zoom | No sideways scroll. Fixed: template row titles and the Next case title cut off, the dock 17px too wide at 320 (now 4 to 316) |
| Reduced motion | No auto slide or moving reveals; drag still works |
| Forced colours | Fixed: the Contact menus' edge, boxes and marked option |
| Contrast over the backdrop (finding C1) at 1440, 768, 390 | Tertiary text 2.63 to 4.19, labels 3.80 to 4.45 and phone body text 3.76 to 4.13 at the brightest photo spot with 40% glass. Decision 38 applied: card glass 74%, nav glass 78%, the least that passes everywhere |
| NVDA | Not run (needs a person; plan in `docs/accessibility.md`) |
| /accessibility page | "How I check it" and "Known gaps" now match what was tested and the one gap left (Esc inside Cal.com's frame) |
| `docs/accessibility.md` | The risks, how each was handled, how it is checked, the two exceptions |

## Design QA (decision 29)

The Figma page "QA · Build vs design" (`320:2`, Read me `322:2`) holds 24 template blocks, each with the frame and the build at 1440 and 390 and a table of differences. Found: 2 high, 10 medium, 24 low. Fixed by R: both high and 8 medium (H1, H2, M1, M2, M3, M4, M5, M7, M8, M10) and L23 (the Next case title wraps). Left for Rez: M6 (Timeline and Budget appear only once a role is picked; the frame shows them by default) and M9 (the case Related card the frame doesn't draw; flow 4 needs it), plus the low items (frame updates or Rez's taste). The page's "Fixed" column still says no: it records the build as compared. The five banned phrases ("Add a line about your project", "Prefer a call", "your call", "To confirm", "Copy to confirm") appear on none of the 60 routes.

## Speed (07 §5.10)

Lighthouse 12, 3 runs each, the median, on the local Worker (preview stage) after every fix, with nothing else building. Budgets from 07 §5.2 and the page targets in §5.10.

| Page | Score | LCP (simulated) | TBT | CLS | FCP | Weight | Target |
|---|---|---|---|---|---|---|---|
| Home, mobile | 83 | 4.72 s | 84 ms | 0.011 | 0.96 s | 626 KB | 90 · 2.0 s |
| Work, mobile | 81 | 5.04 s | 72 ms | 0.000 | 0.97 s | 757 KB | 90 · 2.5 s |
| Earworm, mobile | 86 | 4.21 s | 68 ms | 0.000 | 1.14 s | 689 KB | 90 · 2.5 s |
| Pulse, mobile | 90 | 3.61 s | 62 ms | 0.000 | 1.14 s | 727 KB | 90 · 2.5 s |
| Brand, mobile | 84 | 4.52 s | 61 ms | 0.011 | 0.97 s | 604 KB | 90 · 2.5 s |
| Contact, mobile | 83 | 4.56 s | 130 ms | 0.000 | 0.96 s | 509 KB | 85 · 2.5 s · TBT 200 |
| LinkedIn invite, mobile | 86 | 4.25 s | 66 ms | 0.006 | 0.95 s | 531 KB | 90 · 2.5 s |
| A guide, mobile | 86 | 4.17 s | 81 ms | 0.000 | 0.95 s | 553 KB | 90 · 2.5 s |
| Home, desktop | 99 | 1.04 s | 0 ms | 0.002 | 0.31 s | 645 KB | 98 · 1.2 s |

| Budget | Result |
|---|---|
| TBT, CLS, weight, desktop score and LCP, audio and third parties before a click | Met on every page |
| Mobile score 90 and LCP 2.5 s (2.0 s on Home) | Not met in the simulation: scores 81 to 90, LCP 3.6 to 5.0 s |
| Why | The LCP element is the h1 (or the case hero), painted with the first paint: observed LCP on Home is 0.58 s, equal to FCP. Lighthouse's slow 4G simulation puts 90% of its 4.8 s into "render delay", because it charges the JavaScript that starts before the first paint (React, Next and Motion, about 250 KB) at 4x CPU. E measured 2.2 to 2.55 s with real devtools throttling |
| `inlineCss` trial (E's Request 4) | Run and reverted: Home 81 and 4.84 s, the guide 86 and 4.19 s, no better than the linked CSS |
| What decides it | PageSpeed Insights on the live test site after the first deploy (07 §5.10), then the Core Web Vitals field data. If those miss 2.5 s, the lever is less JavaScript before the first paint (Motion's features, the sound and smooth scroll providers) |

## Open issues

| For | Issue |
|---|---|
| Rez | A real Cal.com booking, then a cancel, to see Calls booked go up (09 §2) |
| Rez | An NVDA pass on each template, about 45 minutes ([accessibility.md](../site/docs/accessibility.md)); then add "I also go through each page with the NVDA screen reader." to /accessibility |
| Next session | The 3 brand guides (brand-designer-cost, brand-identity-process, how-long-brand-identity-takes) show no registry claim: the Guide template drops `proofClaims`. A claim line in the "From a real project" card needs Rez's OK on the Guide frame |
| Next session | The first two reveal cards play their rise at load even when far below the fold (`motion.css`), so they don't rise on scroll. Harmless; a small polish |
| Next session | `content/agency-intent-keys.json` doesn't exist: the agency site has no intent keys in this form yet. W checked the overlap by hand |
| Rez, after the first deploy | Mobile Lighthouse misses the score 90 and LCP 2.5 s budgets in the simulation (Speed); PageSpeed Insights on the live test site decides whether less JavaScript before the first paint is needed |
| Local tooling | `wrangler dev` (cf:preview) crashed once and hung twice under five parallel browser agents (esbuild "service is no longer running"); a restart fixed it each time |

## Requests

| For | Request |
|---|---|
| Rez | The CLAUDE.md change for decision 3 is already in both CLAUDE.md files (F's Request 1): nothing to do |
| Rez | `~/.gemini/AGENTS.md` (F's Request 2), before using Antigravity |
| Rez | Archive the old docs listed in [for-rez.md](../15-v4a-plan/for-rez.md) §6.2, if he agrees |
| Next session, after 13:24 UTC on 28 Oct | `npm i -E @opennextjs/cloudflare@1.20.13`, then `npm run check` and `cf:preview` |

## Rez decides later

| Item | Default taken | Why |
|---|---|---|
| Card and dock glass (decision 38) | `--glass-card` 74%, `--glass-nav` 78% black: the least that passes AA over the brightest photo spot at 1440, 768 and 390 | Decision 38 (a). Lighter option: 58% card glass with tertiary text at #9097a3 (one token each in `tokens.css`); Figma follows once Rez picks |
| G then S for every visitor (WCAG 2.1.4, a level A rule for letter only shortcuts) | Kept as built (09 §1) | Rez's feature. Options: a modifier (Alt+Shift+S), only in his own browser (`rk_owner_ui`), or the © press alone |
| SolVita on /brand and /product | YumYum on /brand and Orion on /product in its place | 00-facts ordering rule: never SolVita without Earworm and the Real estate website above it. The Framer proof on /product goes with it |
| Proof claims on the mixed pages (/hire, /hire/web-designer, /for/real-estate) | "300+ client reviews" kept over mixed tiles (a client case first) | It counts Rez's reviews, not the tiles. Option: show only client cases under a client claim |
| Case search titles for the 14 new cases | Name plus scope, from each card's own line (e.g. "YumYum Japanese restaurant brand identity") | 07 §3.2's pattern; no new claims |
| Case Related card (design QA M9) | Kept, below the quote | Flow 4 and seo §3.2 need cases to link back |
| Timeline and Budget chips only after a role (design QA M6) | Kept (B's build) | The chips belong to Founder or team and Something else |
| For agencies closing card | The frame's copy, word for word, with Ask about the pilot and no socials | Design QA H2 |
| Industry pages' Send a message | Opens Contact with Founder or team picked (no service) | An industry has no single service |
| The test route `/dev/throw` | Kept in dev and the preview stage, 404 live | Flow 13 needs a route that throws |

## Suggested commit message

```text
fix: review the V4a build end to end and fix what it found

Relax the content check for hidden To confirm lines, read concepts from
the case files, drop the KV binding and add the track limiter. Carry the
role and service into Contact from Hire, Industry and Deliverable pages,
link deliverable pages from their service pages, and keep SolVita under
Earworm and the Real estate website. Give cases search titles and client
nodes, use full ISO dates in JSON-LD, and lead concept proof with the
years claim. Fix accessibility (valid My role lists, menus that close on
blur, forced colours, focus after cookie choices, 320px reflow, glass
contrast per decision 38) and the design QA items, add the a11y sweep,
the error test route, the runbooks, the testing doc and the README.
```

## You check

| What | Where |
|---|---|
| The darker card and dock glass (decision 38) | Any page on localhost; compare with Figma, and pick 74% or the lighter option |
| The whole site against Figma | Figma page "QA · Build vs design" (`320:2`), then localhost |
| A real booking adds to Calls booked | Book and cancel through /contact, then /stats |
| NVDA on each template | Windows, NVDA (free) |
| Cloudflare free settings at launch (security §5.5) | Cloudflare dashboard |
| Workers > Metrics a day after the first deploy ("Exceeded CPU", errors 1102 and 1027) | Cloudflare dashboard, `rezkarim-site` |

## Deploy steps

In [site/docs/runbooks/deploy.md](../site/docs/runbooks/deploy.md): the first deploy (new secrets for `rezkarim-site`, D1 create and both migrations, the KV copy, the content Rez OK'd flipped to live, `npm run check`, commit, `npm run deploy`, the edge rule on the test host), then the after deploy checks (security §8 row 8) and the CPU check a day later. The ready commands are in [for-rez.md](../15-v4a-plan/for-rez.md) §6.4.
