# Chat Z · Zone, email and uptime

[README](README.md) · Draft · 28 Oct 2026 · Sonnet 5.5, high. Dashboard work starts now; code changes after wave 0's deploy (the "Go live on Cloudflare" session owns the code until then).

## Scope

Harden the rezkarim.com zone, switch the site email to hello@rezkarim.com with forwarding and lead alerts, enforce the CSP, and prepare uptime alerts.

## Read first

`01-portfolio/15-v4a-plan/planning/security.md` §5.4, §5.5 and §8 rows 8 and 9; `site/docs/security.md`; `site/docs/runbooks/launch.md`, `deploy.md`, `uptime.md`; `site/src/lib/alerts.ts`; B's Request 3 in `01-portfolio/08-build-reports/b.md` (the lead alert binding).

## Owns

Cloudflare security, DNS (except chat S's Search Console TXT) and Email Routing on rezkarim.com. Code: `site/wrangler.jsonc`, `site/next.config.ts`, `site/src/data/site.ts` (the `email` field only), `site/.env.example`, `site/.env.production.local`, `site/docs/runbooks/`, `site/docs/security.md`, `site/docs/privacy-data.md`. Not: content files, `src/data/seo.ts` (chat P), any other code.

## Tasks, in order

1. **Zone settings (security §5.5)**, each with Rez's OK: Always Use HTTPS and Automatic HTTPS Rewrites on; minimum TLS 1.2, TLS 1.3 on; the free rate limiting rule for `http.host in {"rezkarim.com" "www.rezkarim.com"}` POST, 20 per 10 s, block 10 s (the zone allows one; the dashbloom.design rule stays for the test host); a custom rule blocking scanner paths (`/wp-`, `/.env`, `/.git`, `.php`, `/xmlrpc`); DNSSEC on; www.rezkarim.com resolves and redirects to the apex if wave 0 didn't set it.
2. **Email Routing, kept smooth (Rez, 28 Oct)**: hello@rezkarim.com → rezkarim.pro@gmail.com, free through Cloudflare Email Routing (he confirms the destination by a click in his mail). Cloudflare adds its MX and SPF records. So Rez can also reply as hello@ from Gmail: give him the Gmail "Send mail as" steps (Settings, Accounts, Add another email address, SMTP `smtp.gmail.com`, port 587, his own Gmail with a Google app password he creates and types himself), and add `include:_spf.google.com` to the SPF record. DMARC starts at `v=DMARC1; p=none; rua=mailto:hello@rezkarim.com`, because Gmail's send-as mail isn't aligned with the domain and a stricter policy would send his replies to spam; note in the report when it's safe to tighten. Send a test mail both ways and ask Rez to confirm.
3. **Site email**: `site/src/data/site.ts` `email` → `hello@rezkarim.com`; grep the repo for `rezkarim.pro@gmail.com` and change every visible use (privacy page, JSON-LD, docs) except Rez's own notes. Run `npm run content:lint -- --data`.
4. **Lead alerts** (seo §6.3): the `send_email` binding `LEAD_EMAIL` with `destination_address` = Rez's verified Gmail, vars `LEAD_ALERTS = "1"` and `LEAD_ALERT_FROM = "alerts@rezkarim.com"` in `wrangler.jsonc`, `npm run cf:typegen`. Check `alerts.ts` sends visitor text in the body only (security §5.3).
5. **CSP enforce** (security §8 row 9): after the deploy, confirm no CSP report on the live site (BrowserOS, the `securitypolicyviolation` listener on Home, a case, /contact with the calendar open, /social with the lightbox), then switch `Content-Security-Policy-Report-Only` to `Content-Security-Policy` in `next.config.ts`, adding `upgrade-insecure-requests` only to the enforced one. Add any host the live site needs (for example Cloudflare Web Analytics, if chat S reports a beacon).
6. **Uptime**: write Rez's UptimeRobot steps in `site/docs/runbooks/uptime.md` (free plan: HTTPS monitors for Home and /api/track's 405, 5 minute checks, alerts to hello@rezkarim.com). He creates the account.
7. **Checks**: `npm run check` once; then give Rez the one redeploy command with a commit message (no AI attribution), together with chat P's `sameAs` change if it's ready (ask the coordinator).

## Done when

The zone settings are saved; hello@rezkarim.com delivers to Gmail; the code changes pass `npm run check` and wait for Rez's redeploy; the uptime steps are written.
