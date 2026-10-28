# Tagged links per channel

[README](../README.md) · Draft · 29 Oct 2026 · Written by chat C (helper 2). Use these links wherever the site is linked, so /stats shows which channel sends visits, bookings and messages. Chat R and Rez paste them; nothing here is posted by itself.

## How it works

The site reads `utm_source` on the first page of a visit and files the visit under that channel. The same name carries on to the Book clicks, calendar opens and bookings of that visit, and to any message it sends (Stats, Messages, "Channel"). `utm_medium` says what kind of place it is; Stats doesn't group by it yet, it is there for later. A visit from LinkedIn without a tag still counts as LinkedIn when the browser passes the referrer; the tag makes it count even when the LinkedIn or Instagram app strips it.

Stats shows each channel under its own name in "Where visits come from" and in "Conversions by page and source".

## Links

| Channel | Where it goes | Link |
|---|---|---|
| LinkedIn | Profile website field, Featured, About section | `https://rezkarim.com/?utm_source=linkedin&utm_medium=profile` |
| LinkedIn posts | Links in posts and comments | `https://rezkarim.com/?utm_source=linkedin&utm_medium=outreach` |
| Behance | Profile website field and project descriptions | `https://rezkarim.com/?utm_source=behance&utm_medium=profile` |
| Behance project to its case | The last line of each Behance project, to the matching case | `https://rezkarim.com/work/<case-slug>?utm_source=behance&utm_medium=profile` (for example `/work/earworm`) |
| Dribbble | Bio | `https://rezkarim.com/?utm_source=dribbble&utm_medium=profile` |
| Dribbble shot to its case | Shot descriptions | `https://rezkarim.com/work/<case-slug>?utm_source=dribbble&utm_medium=profile` |
| Instagram | Bio link | `https://rezkarim.com/?utm_source=instagram&utm_medium=profile` |
| Contra | Profile website field | `https://rezkarim.com/?utm_source=contra&utm_medium=profile` |
| Himalayas | Profile website field | `https://rezkarim.com/?utm_source=himalayas&utm_medium=profile` |
| Email signature | hello@rezkarim.com signature in Gmail | `https://rezkarim.com/?utm_source=email&utm_medium=email` |
| CV | The website line on each CV (PDF) | `https://rezkarim.com/?utm_source=cv&utm_medium=cv` |
| Job applications | Portfolio fields in application forms and cover letters | `https://rezkarim.com/?utm_source=apply&utm_medium=outreach` |
| Recruiters (direct to the CV form) | When a recruiter asks for the CV | `https://rezkarim.com/contact?kind=recruiter&utm_source=apply&utm_medium=outreach#message` |
| Directories | One per directory: put the directory's name in `utm_source`, lowercase, no spaces | `https://rezkarim.com/?utm_source=<directory-name>&utm_medium=directory` (for example `utm_source=clutch`) |

## Rules

- Lowercase names, no spaces. A new channel can use any name; Stats shows it as typed.
- Keep `#message` or `#book` at the very end of a link, after the query.
- Never tag links inside the site itself: a tag on an internal link would replace the visit's real source.
- Never use a Fiverr link or name anywhere (Rez, 29 Oct).
