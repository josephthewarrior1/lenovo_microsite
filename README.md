# OEM Innovation Forum Indonesia

Static, responsive event microsite with separate ISV Partner Innovation Forum and Customer Leader Circle pages. Both retain the purple Lenovo event styling and Montserrat typography. Each page contains the session banner, detailed agenda, scheduled speakers with photos or labeled placeholders and short biographies, then the venue location. Navigation is Agenda → Speaker → Lokasi, with Indonesian and English support.

## Local preview

Run `python -m http.server 4173 --bind 127.0.0.1 --directory dist` from this directory, then open http://127.0.0.1:4173.

- http://127.0.0.1:4173/morning/ — ISV Partner Innovation Forum, **08:00–12:50 WIB** including registration 08:00–09:00. Twelve agenda items and eight scheduled speakers.
- http://127.0.0.1:4173/afternoon/ — Customer Leader Circle, **17:00–20:50 WIB** including registration 17:00–18:00. Eleven agenda items and eight scheduled speakers.

Both sessions take place on 14 October 2026 at The Westin Jakarta. The root URL defaults to morning. Each route contains only its own agenda and speakers. Changing the language preserves the selected session, URL hash, and visible section position.

## Production addresses

The two public hostnames serve different session directories from this one project:

- https://oeminnovationforumindonesia-isvpartner.kimcommunication.id/ serves `dist/morning/`.
- https://oeminnovationforumindonesia-customerleadercircle.kimcommunication.id/ serves `dist/afternoon/`.

Apache aliases `/assets/`, `/styles.css`, `/event-data.js`, and `/app.js` to the shared files. The former host's `/morning/` and `/afternoon/` URLs redirect to the respective session host so existing QR codes keep working.

## Shared files

All serving files are in `dist/`; production requires no package installation. Public event content lives in `dist/event-data.js`. The page renderer is `dist/app.js`, the shared layout is `dist/index.html`, and styles are in `dist/styles.css`. Run `node build.mjs` after editing the layout or event data to regenerate both route entry files. The build reads `event-data.js` so static metadata and hero times use the same source as the agenda. CSS and JavaScript URLs include a shared cache version.

This project is for local development and preview. Publish, deploy, or push only when explicitly requested by the user. The ignored local `.openai/` directory records an earlier hosting setup and is not required to run the website.

## Content and assets

- Agenda times, session titles, names, and roles follow the user-shared **Tracker Lenovo OEM Innovation Forum.xlsx**, worksheet **Agenda for Bumpers**, received 10 October 2026. These times supersede the earlier invitation and banner times. Event windows include registration; registration is an agenda item without a registration form or CTA.
- The morning opening executive speaker is tentative. The public agenda uses “Lenovo Executive” with a tentative badge; the three source alternatives are not published as confirmed speakers or cards.
- Omar’s current supplied role is President Commissioner, BNI (2025–Present), with the former role Deputy President Director & CEO, Pertamina (2009–2010).
- Samuel Tan’s short biography summarizes the supplied Auk Industries biography. Other speakers use only their supplied roles while broader biographies are unavailable.
- Sonny and Omar use the user-supplied PNG portraits on white circles, and Samuel uses the supplied JPEG portrait. Missing photos use white circles with initials and the visible label “Foto segera hadir” / “Photo coming soon”. A failed portrait request also falls back to the labeled placeholder.
- Hero assets remain in `dist/assets/`; source PNG copies are retained. The `hero-*-updated.png` and lossless WebP versions use built-in ImageGen to replace only the time line with **08:00–12:50 WIB** or **17:00–20:50 WIB**, retaining the supplied composition, title, date, venue, logos and photograph. Generated outputs are 1586×992. The current date and source event window are also displayed as page text. Backgrounds and the Montserrat font come from the supplied Lenovo TechDay reference.
- The location map and directions link use The Westin Jakarta and require internet access.

The public page does not contain production notes, speaker alternatives, dinner-course timing, overview summaries, countdowns, prizes, RSVP, registration links, or QR codes.
