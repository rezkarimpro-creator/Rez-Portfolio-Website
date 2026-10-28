# Chat P · Profiles and marketing

[README](README.md) · Draft · 28 Oct 2026 · Sonnet 5.5, high. Starts now.

## Scope

Make every public profile point to rezkarim.com with one consistent identity, and draft the launch announcement for LinkedIn, Instagram and Behance. Nothing is published or edited without Rez's OK on the exact text.

## Read first

`01-portfolio/00-facts.md` (identity, claims, voice §5), `site/content/claims.ts`, `site/src/data/seo.ts` (Person, `alternateName`, `sameAs`), `01-portfolio/15-v4a-plan/for-rez.md` §4 (row 77 profile fixes, decision 13 Contra and Framer Experts, A4 the himalayas profile), the 7 Oct CV notes in `01-portfolio/11-cv-updates.md`.

## Owns

`01-portfolio/17-launch-plan/marketing/` (drafts) and the `sameAs` list in `site/src/data/seo.ts`. Not: any other file in `site/`.

## Tasks, in order

1. **Profile audit**, read only in BrowserOS: LinkedIn (/in/rezbloom), Behance (/rezbloom), Dribbble, Instagram, Contra, himalayas.app/@rezaulkarim10. For each: the name shown, headline, website link, the role words, anything that breaks the rules (Taste Labs, "funding raised" on the Earworm cover, a city or country, studio "we", founder words). Write `marketing/profiles.md`: one table row per profile, current vs proposed, word for word.
2. **Apply profile edits** one profile at a time, only after Rez OKs that profile's exact changes in the picker: the website link to https://rezkarim.com, the name and handle line "Rezaul Karim · RezBloom", a headline in the site's positioning (brand and websites lead; decks, social and LinkedIn follow). If a profile needs Rez's own login step, stop and tell him.
3. **sameAs**: list in `site/src/data/seo.ts` only the profiles Rez confirms are his and that now link back; run `npx tsc --noEmit` and the JSON-LD test (`npm test`). Tell chat Z it's ready for the redeploy.
4. **Launch posts** in `marketing/launch-posts.md`: one LinkedIn post (hook line, what the site holds, one real proof point word for word from `claims.ts`, the link), an Instagram caption plus a carousel outline of 5 slides from existing case images (keys from `site/src/data/images.json`), and a Behance project update or appreciation note pointing to the site. Voice rules apply (common.md rule 9). Rez posts them himself, or you post with his OK per post.
5. **Contra and Framer Experts** (decision 13): check Framer Experts' requirements against Rez's facts and say whether he qualifies; draft the Contra profile update.

## Done when

`marketing/profiles.md` and `marketing/launch-posts.md` exist; every profile Rez OK'd links to rezkarim.com; `sameAs` matches the confirmed profiles and passes the tests.
