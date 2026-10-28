done (profiles edited and saved except Contra, launch posts drafted and not posted, sameAs ready for redeploy)

# Chat P report · 28 Oct 2026

## What I set (each save OK'd by Rez in the picker, then re-read live)

| Profile | Set | Where |
|---|---|---|
| Behance | Headline "Brand & website designer for startups and B2B teams", website https://rezkarim.com, WhatsApp link removed, new About me, Contact with a portfolio line | behance.net/RezBloom/editor |
| Dribbble | Name "Rezaul Karim · RezBloom", location cleared, new bio, Delineate (YC W25), DashBloom Product Designer 2024 to 2026, Qubitech to 2023, RUET 2021 | dribbble.com/account/profile |
| LinkedIn | New headline, website https://rezkarim.com (Portfolio) | Edit intro, Contact info |
| Instagram | New bio | accounts/edit |
| Himalayas | Summary (shortened to the 150 character cap), website, portfolio, long bio fixes | himalayas.app/profile/overview |
| `sameAs` | LinkedIn and Behance only | `site/src/data/seo.ts` |

Full before and after, word for word: [marketing/profiles.md](../marketing/profiles.md). Launch posts: [marketing/launch-posts.md](../marketing/launch-posts.md).

## Checked

- Re-read each profile after saving: Behance, Dribbble (bio, history, education), LinkedIn (headline, contact website), Instagram bio, Himalayas (summary, website, bio) all show the new text.
- `npx tsc --noEmit` clean. `npm test` 41 of 41.
- Behance's Earworm cover now says only "PITCH DECK" (no "funding raised"). No Taste Labs and no founder words on any of the six profiles.

## What Rez still clicks

| Action | Where |
|---|---|
| Add https://rezkarim.com as the website link | Instagram app, Edit profile (the web editor blocks links) |
| Transfer primary ownership of the Dashbloom Design Agency team, then leave it | Dribbble, account/teams. Rez is its primary owner, so I did not touch it |
| Remove "on Fiverr" from the Contra About (hard rule 4), add rezkarim.com, drop "Digital Marketer", decide on Dhaka and the $50 to $75 rate | contra.com/rezkarimpro. Its editor did not open to me. Draft text is in profiles.md |
| Decide whether the Himalayas salary range (36k to 60k USD) stays public | himalayas.app/profile/preferences |
| Decide on the LinkedIn name sparkle, the phone number and the third email (rezaulkarim.ipe15@gmail.com) in Contact info | LinkedIn. I left them, because Behance's verification shows the sparkle name |
| Post the launch posts, or say "post it" per post | launch-posts.md |
| Contact email on every profile becomes hello@rezkarim.com | After chat Z confirms the mailbox |

## Framer Experts

Requirement (framer.com/expert/apply, read 28 Oct): two published Framer sites on a Framer Community profile. The facts show one (SolVita's site). Rez said he has one, so he does not qualify yet. A second published Framer site, or a different route, would be a new task.

## Open issues

- Dribbble's website link field is Pro only, so the bio carries rezkarim.com as text. Instagram's link is app only. Contra and Himalayas are not in `sameAs` until they carry the link; Himalayas also was not explicitly confirmed as Rez's.
- The Behance display name is split into first and last name fields, so "Rezaul Karim · RezBloom" is only on Dribbble.
- Behance Services still lead with decks and show prices (US$500 to US$2,000). Behance work experience says "Dashbloom, Sheridan, WY, USA" and "Qubitech, Rajshahi, Bangladesh". Rez decides.
- Himalayas long bio still opens "I'm a product designer". Contra's banner image shows a card with "0+ ... projects" text I could not read in full.

## Requests

- Chat Z or the coordinator: the `sameAs` change needs Rez's one redeploy. Chat Z was told. Tell me when hello@rezkarim.com receives mail and I will move the contact lines.
