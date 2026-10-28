# Portfolio build notes

[README](../README.md) · Draft, not locked · 21 Oct 2026 · Rez's constraints from 18 Oct, and the build ideas from draft 1 of the website plan (18 Oct, now in `09-archive`). Where anything here differs from the [spec](01-portfolio-spec.md), the spec wins. Ask Rez before adding any library or service.

## 1. Rez's constraints (18 Oct 2026)

- Vibe coded by Claude, not built in Framer.
- Interactive and Awwwards style, but very fast and smooth.
- Hosted on Cloudflare's free plan. Tested on a domain Rez already owns until rezkarim.com is bought.
- Most assets are in Figma and on Behance.

## 2. Stack ideas

| Part | Idea | Why |
|---|---|---|
| Framework | Astro (locked in spec §9) | Sends almost no JavaScript, so pages open fast on any phone |
| Styling | Tailwind CSS with Rez's own design tokens | Fast to build, consistent spacing and type |
| Motion | GSAP with ScrollTrigger and SplitText, plus Lenis smooth scroll | Behind most Awwwards sites |
| Page transitions | Native View Transitions | A project thumbnail grows into the case study hero |
| Components | React islands with Motion (Framer Motion), only where a part needs it | Keeps the rest of the site static |
| Images | Astro's image pipeline | Figma exports become AVIF and WebP in the right sizes |
| Case studies | One MDX file plus an image folder per project | Adding a project later is quick |

## 3. Hosting and services, all free

| Need | Service |
|---|---|
| Hosting | Cloudflare free plan, as a static site |
| Deploys | Code on GitHub; every push deploys, with a preview link first |
| Domain | DNS on Cloudflare, HTTPS automatic |
| Analytics | Cloudflare Web Analytics: no cookies, so no cookie banner |
| Booking | `cal.com/rezkarim/deck-call` on buttons and on Contact |
| Email (optional) | hello@ the domain, forwarded to Gmail with Cloudflare Email Routing |
| Large videos | Cloudflare R2 free tier, or YouTube and Vimeo embeds |

Rez does every account, DNS and deploy step himself.

## 4. Speed targets

The spec's requirement is main content visible in under 2.5 seconds on 4G (spec §9). These stretch targets go further:

| Target | Number |
|---|---|
| Lighthouse on mobile | 95 or more on every page |
| Main content visible (LCP) | Under 2 s on a mid-range phone, under 1 s on desktop |
| Layout shift (CLS) | Close to 0 |
| JavaScript on Home | Under about 100 KB compressed |
| Animation | 60 fps, transform and opacity only, respects Reduce Motion |
| Intro loader | None, or under 1 s and only on the first visit |

- Heavy 3D only on desktop, loaded after the page is usable, and kept off case study pages.
- Every image sits in a fixed-size box, so nothing jumps while loading.
- Fonts self-hosted, trimmed to the characters used, and preloaded.

## 5. Motion ideas

Numbers refer to cards on the [inspiration board](03-inspiration-board.html).

| Where | Effect |
|---|---|
| Whole site | Lenis smooth scroll and soft reveals on scroll |
| Headlines | Line-by-line text reveal |
| Work list | Image preview that follows the cursor on hover, desktop only |
| Work grid to case study | Thumbnail grows into the hero |
| Buttons and links | Magnetic hover and underline sweeps |
| Brand section | A logo wall of Rez's marks (#27) |
| Optional wow | One 3D project gallery on desktop (#8, #30) |

Draft 1's suggested mix: layout and tone from #19 or #1, work index from #22 or #23, lane filters from #3, logo wall from #27, case study structure from #28. Rez's own picks replace this once he shares them.

## 6. Figma to site

1. Rez sends a Figma link per project, or one page named "Portfolio export".
2. Claude pulls the frames through the Figma connector, with Rez's OK, or Rez exports PNG at 2x into one folder per project.
3. The build turns them into AVIF and WebP at the right sizes.
4. Long Behance-style boards get sliced into sections, so they load fast and resize well on phones.
5. Rez's Behance text is the first draft of each case study. Claude rewrites it in his voice and he approves it.

## 7. Questions still open from draft 1

Check each one against the spec and Rez's latest answers first, then ask the rest in one quiz.

1. Board picks: which 2 to 4 numbers, and what he likes in each.
2. Design route: straight to code from his picks, or Home and one case study in Figma first (spec §8 makes Figma optional).
3. The name on the site: Rez Karim, Md Rezaul Karim or RezBloom, and any logo.
4. Theme: light, dark, or both.
5. GitHub and Cloudflare accounts (Rez creates them and signs in himself).
6. Client quotes, with a name and role.
7. A target live date.
