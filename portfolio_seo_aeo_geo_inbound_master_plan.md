# Portfolio Website: Research, Architecture, SEO, AEO, GEO & Inbound Growth Plan

## Purpose

The visual design is ready, but coding has not started. Use this document as the strategy and implementation brief for Claude with BrowserOS MCP.

The goal is to build a fast, accessible, maintainable personal portfolio website that attracts qualified international clients and relevant employment opportunities, earns search visibility across Google, Bing/Microsoft, Brave, DuckDuckGo, and relevant AI-powered discovery experiences, and converts suitable visitors into inquiries and revenue.

The website is for a designer working across UI/UX, SaaS/MVP product design, pitch decks, branding, landing pages, and Framer websites. The exact positioning, target markets, and service priorities must be validated rather than blindly assumed.

**Important:** No SEO plan can guarantee rankings, indexing, AI citations, or revenue. Validate each strategy with evidence and measure actual results.

---

## 1. Rules for Claude: Challenge, Cross-Check, Validate

Do not treat this brief, the user's assumptions, or Claude's own initial ideas as automatically correct.

1. **Challenge the plan.** Identify weak assumptions, unnecessary complexity, risky tactics, missing opportunities, and recommendations that may not produce meaningful results.
2. **Cross-check important claims.** Use current official search-engine documentation first, then reputable specialist sources and live SERP evidence. Cite sources and dates for time-sensitive claims.
3. **Compare independent evidence.** Do not base keyword decisions on a single tool, one competitor, or AI-generated estimates.
4. **Separate facts from estimates.** Label verified data, third-party estimates, hypotheses, and recommendations distinctly.
5. **Never fabricate metrics.** Do not invent search volume, keyword difficulty, rankings, backlinks, traffic, AI citations, conversion rates, or revenue forecasts. If data is unavailable, say so.
6. **Validate before implementing.** Explain why a recommendation fits this specific site, what evidence supports it, what trade-offs it introduces, and how success will be tested.
7. **Prefer the simplest reliable solution.** Avoid unnecessary plugins, dependencies, paid services, databases, and overengineering.
8. **Preserve the approved design.** Treat the existing visual design as the design source of truth. Identify genuine usability/accessibility issues, but do not redesign it without approval.
9. **Do not start with 1,000 pages.** Test the content and technical model with a small, high-quality set before scaling.
10. **Do not perform external or destructive actions without permission.** Do not purchase subscriptions, submit forms, change DNS, connect accounts, deploy to production, publish mass content, or expose credentials without explicit approval.
11. **Do not claim something “will work” without qualification.** State what can be validated before launch, what requires real-world testing, and what remains uncertain.
12. **Review your own conclusions.** Before presenting a final recommendation, run a skeptical second pass: “What could be wrong, what evidence contradicts this, and what is the lowest-risk alternative?”

## 2. Workflow and responsibilities

Use:
- **Claude:** planning, analysis, synthesis, coding, test creation, and implementation.
- **BrowserOS MCP:** inspect live competitor sites, search results, official documentation, and public resources.
- **Free SEO and performance tools:** verify technical behavior and provide data.
- **Optional paid SEO tool:** use only if free sources cannot answer a specific, valuable research question.

Before coding, Claude should read this brief and the available design files, then return the research plan, architecture proposal, and unresolved questions. The user will validate the plan before substantial implementation.

During development, work in small milestones, use version control, and test each milestone before proceeding.

---

## 3. Research tools

### Free starting stack

| Tool | Primary use | Link |
|---|---|---|
| Google Search | Search intent, SERPs, competitors, autocomplete, related questions | https://www.google.com/ |
| Google Search Console | Search queries, clicks, impressions, indexing and site issues after launch | https://search.google.com/search-console/ |
| Google Trends | Relative interest and trend comparison | https://trends.google.com/ |
| Google Keyword Planner | Keyword ideas and advertising-oriented demand estimates | https://ads.google.com/home/tools/keyword-planner/ |
| Bing Webmaster Tools | Bing search performance, keyword research, crawling and indexing tools | https://www.bing.com/webmasters/ |
| Ahrefs free tools | Limited keyword, backlink and site research | https://ahrefs.com/ |
| Semrush free tools | Limited keyword and competitor research | https://www.semrush.com/ |
| PageSpeed Insights | Lab tests and available real-user Core Web Vitals data | https://pagespeed.web.dev/ |
| Lighthouse | Performance, accessibility and SEO audits | https://developer.chrome.com/docs/lighthouse/ |
| Screaming Frog SEO Spider | Crawl and technical SEO audit; free tier has a URL limit | https://www.screamingfrog.co.uk/seo-spider/ |
| Rich Results Test | Test eligibility for supported Google rich results | https://search.google.com/test/rich-results |
| Schema Markup Validator | Validate Schema.org structured data | https://validator.schema.org/ |
| W3C WCAG guidance | Accessibility standards and techniques | https://www.w3.org/WAI/standards-guidelines/wcag/ |
| axe DevTools | Automated accessibility checks | https://www.deque.com/axe/devtools/ |

Check current product capabilities and free-tier limits before relying on them. Google Keyword Planner's competition score concerns advertising, not organic ranking difficulty.

### Paid tools, only if justified

Evaluate **Ahrefs OR Semrush** if deeper competitor keyword gaps, backlink analysis, or keyword datasets are necessary. Do not pay for both initially unless a documented research need justifies the overlap.

A paid tool is worthwhile only if Claude explains:
- The specific unanswered question.
- Why free methods are insufficient.
- Which feature or dataset is needed.
- The cost and expected practical benefit.
- How the data will change a decision.

Do not buy a tool merely because it is popular.

---

## 4. Research before coding

### A. Positioning and audience

Validate:
- Primary services and strongest differentiators.
- Ideal client types, company stages, industries, and budgets.
- Geographic markets and language requirements.
- Whether the site should prioritize client work, employment, or clearly separated paths for both.
- Proof available for each service: case studies, deliverables, testimonials, documented outcomes, and relevant experience.
- Which offers are most commercially valuable and realistic to deliver.

Do not make unsupported funding, conversion, client, or outcome claims.

### B. Competitor research

Inspect approximately 10–20 relevant competitors, selected based on real search results and service relevance rather than visual inspiration alone.

For each competitor, record:
- Brand and URL.
- Services and positioning.
- Search queries and locations for which the competitor appears.
- Relevant ranking URLs and page types.
- Search intent and content structure.
- Evidence, portfolio quality, pricing transparency, CTAs, and conversion paths.
- Backlink or brand-mention evidence where available.
- Content gaps and possible opportunities.
- Limitations of the evidence.

Use BrowserOS to inspect actual pages and SERPs. Use SEO tools to validate metrics where possible. Do not infer organic traffic or keyword difficulty from appearance alone.

### C. Keyword research

Build a spreadsheet or structured dataset with:
- Keyword/query and close variants.
- Search intent: informational, commercial investigation, transactional, navigational, or mixed.
- Country/market and language.
- Search volume estimate, source, date, and confidence where available.
- Organic difficulty estimate, source, and limitations where available.
- Actual SERP observations and competing page types.
- Business relevance and likely lead value.
- Existing or proposed destination URL.
- Supporting content and internal links.
- Priority, rationale, and validation status.

Research:
- Core service terms.
- Long-tail service queries.
- Industry and use-case queries.
- Pricing and buyer-decision queries.
- Comparison queries.
- Common client questions.
- Problem/solution searches.
- Relevant branded searches.
- Terms that indicate hiring intent.

Prioritize commercial value, realistic competitiveness, distinct intent, and evidence—not search volume alone. Do not assume a “low difficulty” score means a new portfolio can rank.

### D. Search and AI discovery research

Inspect Google and Bing results separately. Check Brave and DuckDuckGo directly for selected high-value queries. Research current documentation for AI search and crawler behavior.

Review relevant discussions and questions from credible communities, client conversations, and industry sources. Community content is useful for understanding language and pain points, not automatically for proving market size.

Create a keyword-to-page map before creating page content.

---

## 5. Website architecture and content strategy

Do not make the website blog-only. Combine commercial pages, evidence of expertise, and useful educational content.

Potential page groups:

1. **Core pages:** homepage, about/profile, resume or experience, contact, and privacy/legal pages as applicable.
2. **Service pages:** dedicated pages for the most valuable and distinct services.
3. **Industry/niche pages:** only where demand and genuine expertise support a useful, differentiated page.
4. **Case studies:** individual projects with context, constraints, decisions, deliverables, and verifiable outcomes.
5. **Guides/articles:** practical answers to relevant client questions.
6. **Comparison/buyer pages:** service options, process, pricing considerations, or freelancer-versus-agency decisions when useful.
7. **Resources/tools/templates:** only where they offer real utility and support the business.

Candidate service clusters to validate:
- SaaS UI/UX design.
- MVP and product design.
- Pitch deck and investor presentation design.
- Startup branding and visual identity.
- Landing page design and conversion-focused redesign.
- Framer website design.
- Ongoing design partnerships or retainers.
- Relevant industry-specific solutions such as FinTech, healthcare, legal technology, or B2B SaaS.

Each page must have a clear audience, distinct search intent, original value, a purpose, and an appropriate CTA.

### The 1,000-page idea

Treat 1,000 pages as a possible future scale, not a requirement or launch target. A large page count is useful only if there are enough distinct search needs to justify it.

Before scaling, demonstrate that:
- Pages solve distinct needs.
- Templates create genuinely useful pages rather than keyword permutations.
- Each page has unique evidence, examples, data, or expertise.
- Duplicate and overlapping intents are detected.
- Pages are linked contextually and can be crawled.
- Editorial review and quality controls work.
- Indexing and business outcomes justify further expansion.

Avoid mass-produced thin pages, doorway pages, near-duplicate city/service pages, and AI content published without meaningful review. Review Google's current spam policies: https://developers.google.com/search/docs/essentials/spam-policies

A page need not appear in the main navigation to be indexable, but important pages should have relevant internal links. Sitemap inclusion does not guarantee indexing or rankings.

---

## 6. Technical SEO requirements

Build these into reusable templates and automated checks from the beginning.

- Crawlable HTML and an appropriate server-rendering or static-generation approach.
- Clean, stable, descriptive URLs.
- Unique titles, meta descriptions, and useful headings.
- Correct canonical URLs.
- Correct robots directives and robots.txt.
- Automatically generated XML sitemap(s), with a sitemap index if needed.
- Sitemaps containing eligible canonical URLs that return successful responses.
- Accurate `lastmod` values; do not update dates artificially.
- Correct redirects and handling for 404, 410, duplicate, and discontinued pages.
- No accidental indexing of staging sites, internal search results, low-value parameter URLs, drafts, or noindex pages.
- Internal links, breadcrumbs, and sensible pagination.
- Descriptive image filenames and useful alt text.
- Responsive image formats, dimensions, and loading priorities.
- Open Graph/social metadata where useful.
- Correct language and localized URL signals if multiple languages are introduced.
- Accessible navigation and forms.
- No essential content hidden behind interactions or dependent on inaccessible rendering.
- No unnecessary blocking of resources needed to render content.
- Automated checks for broken links, orphan pages, missing metadata, duplicate titles, bad canonical targets, and sitemap errors.

Read current official Google documentation: https://developers.google.com/search/docs/crawling-indexing

Do not add technical features merely for a checklist. Explain their value for this project's framework and scale.

---

## 7. AEO and GEO

The goal is to make accurate, useful content easy for people and search/answer systems to understand—not to exploit a supposed shortcut.

Implement:
- Direct answers to genuine questions.
- Clear semantic headings and concise explanations.
- Definitions, comparisons, steps, and evidence when appropriate.
- Original insights, research, examples, and detailed case studies.
- Clear authorship, identity, and relevant expertise.
- Verifiable claims and citations for factual statements.
- Consistent professional identity across the site and relevant profiles.
- Genuine industry mentions, references, and relevant backlinks.
- Independent monitoring of AI referral traffic and citations where possible.

Use applicable Schema.org JSON-LD, potentially including `Person`, `Organization` when appropriate, `WebSite`, `ProfilePage`, `Service`, `BreadcrumbList`, and `Article`. Use portfolio-specific types only when they fit the actual content. Structured data must match visible content and current guidelines.

Validate markup using the Schema Markup Validator and Google's Rich Results Test where applicable. Schema does not guarantee rankings, rich results, or AI citations.

Do not assume `llms.txt`, FAQ schema, or any single GEO technique is a ranking factor. Research current official documentation before making crawler-policy changes. Do not accidentally block relevant search crawlers.

---

## 8. Performance, accessibility, and security

### Performance targets

Target Core Web Vitals at the 75th percentile of real-user visits:
- LCP ≤ 2.5 seconds.
- INP ≤ 200 milliseconds.
- CLS ≤ 0.1.

Consider:
- Responsive AVIF/WebP images where appropriate.
- Correct image dimensions and lazy loading below the fold.
- Prioritization of critical above-the-fold images and fonts.
- Small JavaScript bundles and limited unnecessary hydration.
- Reduced third-party scripts and expensive animations.
- Font optimization, caching, compression, and CDN configuration.
- Mobile-first layouts and prevention of layout shifts.

### Accessibility

Target WCAG 2.2 AA:
- Keyboard navigation and visible focus.
- Semantic HTML, landmarks, and logical heading order.
- Accessible labels and error messages.
- Sufficient color contrast.
- Meaningful alternative text.
- Screen-reader usability.
- Reduced-motion support.
- Usable touch targets, zoom, responsive layouts, menus, dialogs, and forms.

Use Lighthouse, PageSpeed Insights, axe, and manual keyboard/screen-reader testing. Automated scores are not proof of full accessibility.

### Security and privacy

- HTTPS and suitable security headers.
- Secure form handling and spam protection.
- No secrets or API keys in client-side code or the repository.
- Dependencies kept updated.
- Minimal personal data collection.
- Appropriate consent, retention, and privacy controls for analytics and session replay.
- No unsafe public exposure of admin or preview functionality.

---

## 9. Search integrations and analytics

Plan to connect these after the site is deployed on its intended domain. Account connections and verification require the owner's approval.

### Google Search Console
Verify the domain, submit sitemaps, inspect important URLs, and monitor queries, impressions, clicks, CTR, indexing, Core Web Vitals, and security issues.

https://search.google.com/search-console/

### Bing Webmaster Tools
Verify the site, submit sitemaps, review crawling and performance, and evaluate IndexNow for eligible URL updates.

https://www.bing.com/webmasters/

IndexNow is a notification mechanism, not an indexing or ranking guarantee. Do not assume Bing inclusion guarantees visibility in Brave or DuckDuckGo.

### Google Analytics 4
Track organic landing pages, contact submissions, booking clicks, email clicks, and appropriate conversion events.

https://analytics.google.com/

### Microsoft Clarity
Consider heatmaps and session insights if they answer a specific UX question. Apply privacy controls and avoid collecting sensitive form content.

https://clarity.microsoft.com/

Also consider:
- PageSpeed Insights and periodic Lighthouse tests.
- Scheduled technical crawls.
- Uptime and deployment monitoring.
- A lightweight dashboard or spreadsheet combining organic traffic, qualified leads, and revenue.

Track business outcomes, not just page views. Protect credentials and comply with applicable privacy requirements.

---

## 10. Inbound conversion and revenue

The website must turn relevant visitors into qualified opportunities.

Implement:
- Clear positioning: who the designer helps, what is offered, and why it matters.
- Distinct paths for client projects and employment inquiries if both are priorities.
- Service-specific CTAs and relevant case studies.
- Credible testimonials and verifiable outcomes.
- Clear process, deliverables, and pricing information where appropriate.
- A concise inquiry form with relevant qualification fields such as service, project scope, budget, company, and timeline.
- Booking integration where useful.
- Secure spam prevention and form validation.
- Confirmation messages and lead notifications.
- CRM-ready records and source/landing-page attribution.

Avoid unsupported claims, fabricated testimonials, or implying that a design project caused funding or business outcomes without evidence.

Measure:
- Relevant search impressions, clicks, and CTR.
- Valuable pages indexed.
- Qualified organic inquiries.
- Lead-to-call and lead-to-project conversion.
- Qualified lead value and revenue by acquisition source.
- Relevant backlinks and brand mentions.
- AI citations/referrals where observable.
- Performance, accessibility, and technical errors.

Prioritize qualified leads and profitable work over raw traffic.

---

## 11. Development architecture and automated quality gates

Choose the framework, hosting, CMS, and database only after reviewing the approved design and project constraints. Avoid premature infrastructure complexity.

Consider:
- Reusable page templates and design components.
- Maintainable content models.
- Draft/review/publish workflows and version history.
- Metadata and structured-data generation.
- Sitemap and internal-link automation.
- Preview deployments and safe rollback.
- Build, type, lint, link, and test checks.
- SEO/accessibility regression tests.
- Visual QA on desktop and mobile.
- Monitoring and dependency updates.

Create a publishing quality gate. AI-generated content must not automatically go live.

Before a page is published, check:
1. It solves a distinct user need.
2. Claims and data are supported.
3. It offers meaningful value beyond existing pages.
4. Title, headings, canonical, schema, and links are correct.
5. Technical and accessibility checks pass.
6. Indexability is intentional.
7. Its CTA and business objective are appropriate.
8. It does not create keyword cannibalization or near-duplicate content.

Use version control and small implementation milestones. Test changes before proceeding.

---

## 12. Recommended roadmap

### Phase 1 — Validate strategy and research
- Review the approved visual design and design assets.
- Validate positioning, audiences, services, markets, and business goals.
- Research competitors, keywords, SERPs, and content gaps.
- Create a keyword-to-page map and proposed site architecture.
- Identify uncertain assumptions and decisions needing user approval.

**Gate:** user approves positioning, page architecture, and research priorities.

### Phase 2 — Technical design
- Choose framework and hosting based on the design, performance needs, budget, and maintenance.
- Define routes, content model, templates, rendering, metadata, schema, sitemaps, and internal-link rules.
- Define accessibility, performance, security, analytics, and test requirements.

**Gate:** architecture and acceptance criteria are reviewed before substantial coding.

### Phase 3 — Build the foundation
- Implement shared layout, design system, navigation, footer, and reusable components.
- Implement metadata, canonical URLs, structured data, sitemap/robots handling, and error states.
- Add responsive behavior, accessibility, image/font optimization, and automated tests.

**Gate:** build passes, core templates are tested, and no critical issues remain.

### Phase 4 — Build core pages
- Homepage, about/profile, employment/resume path, priority service pages, case studies, contact funnel, and essential legal/privacy pages.
- Add initial high-value content based on research.
- Review every page against the approved design and publishing checklist.

**Gate:** visual, content, accessibility, SEO, and conversion QA completed.

### Phase 5 — Launch and connect measurement
- Deploy to the intended domain after approval.
- Verify HTTPS, redirects, canonical URLs, robots directives, sitemap, and production rendering.
- Connect Google Search Console, Bing Webmaster Tools, and analytics with permission.
- Test forms and conversion events.
- Record baseline performance and indexing status.

**Gate:** launch checklist passed.

### Phase 6 — Expand in measured batches
- Publish additional researched service, industry, guide, and resource pages.
- Review uniqueness, usefulness, internal links, and indexability.
- Observe impressions, clicks, rankings where available, qualified inquiries, and conversion outcomes.
- Scale only content patterns that demonstrate value.

### Phase 7 — Improve continuously
- Review key metrics weekly and conduct deeper monthly reviews.
- Update outdated information.
- Improve pages with impressions but weak CTR or conversion.
- Consolidate overlapping pages.
- Fix technical and accessibility regressions.
- Pursue relevant links, mentions, and partnerships.
- Expand based on measured opportunity, not a fixed page quota.

---

## 13. First deliverables required from Claude

Before substantial coding, provide:

1. **Strategy challenge:** which parts of this brief are weak, overstated, unnecessary, or missing?
2. **Research plan:** exact queries, sources, tools, competitor-selection method, and evidence needed.
3. **Tool decision:** what can be done for free, what BrowserOS can collect, and whether any paid tool is justified.
4. **Keyword research schema:** the columns and evidence standards for the research database.
5. **Competitor report:** observed evidence, sources, and limitations—not guesses.
6. **Proposed architecture:** page groups, URL patterns, page-to-intent mapping, and initial launch scope.
7. **Technical architecture proposal:** framework/hosting/content strategy with trade-offs based on the actual design and requirements.
8. **SEO/AEO/GEO checklist:** implementation requirements and what is evidence-backed versus speculative.
9. **Performance/accessibility plan:** measurable targets and test methods.
10. **Conversion and measurement plan:** events, lead qualification, attribution, and KPIs.
11. **Prioritized implementation backlog:** critical, high, medium, optional; include dependencies and acceptance criteria.
12. **Risk register:** risks, likelihood, impact, mitigation, and unresolved questions.
13. **Approval points:** decisions that require user validation before implementation or external actions.

Do not claim that research is complete unless it was actually performed. Include direct links and dates for sources. Distinguish observed SERP facts from estimates. Explain contradictions and uncertainty.

After delivering these items, stop and wait for the user's review before major coding, mass content generation, paid purchases, account connections, or production deployment.

---

## 14. Definition of success

A maintainable, accessible, fast website that preserves the approved design, offers genuinely useful and differentiated content, is technically understandable to search engines, gains relevant visibility over time, and converts suitable visitors into qualified client opportunities.

Success must be evaluated with real data after launch. No one can guarantee rankings across every search engine, AI citations, indexing of every URL, or a specific amount of revenue.

**Final instruction to Claude:** Be skeptical and evidence-driven. Challenge both the user's assumptions and your own recommendations. Cross-check important points against current official documentation and independent evidence. Explain why each major recommendation is likely to help this specific project, what could make it fail, and how to test it. Prefer the smallest reliable plan that meets the objective. Do not confuse a comprehensive checklist with a requirement to implement every item.
