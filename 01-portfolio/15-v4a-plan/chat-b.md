# Chat B · App and data

[README](README.md) · Approved 27 Oct 2026 · Opus 5.5, Max (sign in, data and security code) · Wave 1.

## Start condition

`08-build-reports/f.md` starts with "done".

## Read first

[common.md](common.md); [08](../08-build-plan.md) §3.3, §3.7, §13.2 and packages P1 and P2 in §6; [06](../06-design-system.md) §7 and §8; [07](../07-search-and-speed-plan.md) §5.2 and §5.8; [09](../09-functional-checklist.md) §1 (cookie banner, Owner chip, G then S), §2, §3 (Contact, /work/private), §4, §5, §6; [security](planning/security.md) §5.1 to §5.3 and §8 row 4; [best-practices](planning/best-practices.md) §5 (form rows), §6 and §8; [seo](planning/seo-aeo-geo.md) §5.2 and §6; [operations](planning/operations.md) §4.5 and §5.2; the B rows under "For the build chats" in every planning file; F's report (path map, contracts).

## Owns

The P1 and P2 files in 08 §11 at their new paths; `tests/auth*`; `scripts/smoke-auth.mjs`, `scripts/kv-to-d1.mjs`; new migrations after 0001; `docs/security.md`, `docs/privacy-data.md`, `docs/runbooks/d1-backup-restore.md`.

## Tasks, in order

1. **08 P1 in full** (D1, auth, Stats, the recruiter case) with security §5.1: tokens with a signed expiry, fail closed, a keyed IP hash, the lockout in D1. A Stats sign in lasts 7 days (decision 26).
2. **08 P2 in full** (Contact, booking, cookies, both form actions, the email toast), using the Figma round 2 frames: Stats tooltip, table view, cookie choices, empty dashboard and AI referrer group; the role menu open; the invite form errors and sending.
3. **Wrong password lines** (decision 31): the recruiter case "That password didn't work. Try again, or ask for my CV."; Stats "Wrong password. Try again."
4. **Contact form additions** (decision 10, seo §6.1): optional Timeline and Budget chips with the copy Rez confirms in Figma, an optional link field, the hidden landing, source and page fields, and the recruiter role prefill from `/contact?kind=recruiter&role=...`. Accessible forms (best-practices §5.1): visible labels, errors tied with `aria-describedby`, focus moves to the first error, `autocomplete`, the multi pick built as real checkboxes, paste allowed in password fields.
5. **Limits and abuse** (security §5.2): the Rate Limiting binding layers, D1 attempts, honeypot, timer, caps and the duplicate guard; `/api/track` with the origin check, size cap and daily cap; Turnstile behind a switch, off (decision 24).
6. **Measurement** (seo §5.2): referrer groups including AI, family tags, the events, lead source saved on each message, the qualified mark in Stats, and the `client_error` event with a cap.
7. **Privacy** (best-practices §6): retention pruning at 24 months (decision 27); `rk_vid` deleted on "Only essential"; the inline Cal.com calendar loads on a click on its placeholder (decision 28); a failed D1 write never loses a message silently (show the email address instead).
8. **Booking and chips**: a sheet below 640px and a modal of min(880px, 100vw minus 48px) from 640px up (figma D); the Owner chip with a 44px hit area.
9. **Lead alerts** behind a switch, off until rezkarim.com is on Cloudflare (seo §6.3).
10. **Docs**: `docs/security.md` from the security plan, `docs/privacy-data.md` from best-practices §6.1, and the D1 backup and restore runbook.

## Checks

`npm test` with security §8 row 4's cases; `scripts/smoke-auth.mjs` ready for R; every state clicked through at 375, 768 and 1440; a message and a preview request land in local D1 with their source; Lighthouse mobile on /contact within 07 §5.10; `npm run check`.

## Done when

Every frame behaves as designed; 09 §2, §4, §5, §6 and the B rows of §1 and §3 pass; the tests pass; no secret or password reaches client code.

## Report

Filled by chat B in `08-build-reports/b.md`.
