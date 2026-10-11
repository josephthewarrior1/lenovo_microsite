# OEM Innovation Forum Indonesia

Static, responsive event microsite with separate ISV Partner Innovation Forum and Customer Leader Circle pages. Both retain the purple Lenovo event styling and Montserrat typography. Each page contains the session banner, detailed agenda with supplied speaker photos and short biographies inside the relevant agenda entries, then the venue location. Following the user's 11 October feedback, there is no separate speaker directory or section. Navigation is Agenda → Location. All public text is in English, with no language selector.

## Local preview

Run `python -m http.server 4173 --bind 127.0.0.1 --directory dist` from this directory, then open http://127.0.0.1:4173.

- http://127.0.0.1:4173/morning/ — ISV Partner Innovation Forum, official banner time **09:00–13:00 WIB**. The detailed source rundown includes registration 08:00–09:00 and ends at 12:50. Twelve agenda items and nine scheduled speakers.
- http://127.0.0.1:4173/afternoon/ — Customer Leader Circle, official banner time **17:00–20:00 WIB**. The detailed source rundown includes registration 17:00–18:00 and ends at 20:50. Eleven agenda items and eight scheduled speakers.

Both sessions take place on 14 October 2026 at The Westin Jakarta. The root URL defaults to morning. Each route contains only its own agenda and speakers.

## Production addresses

The two public hostnames serve different session directories from this one project:

- https://oeminnovationforumindonesia-isvpartner.kimcommunication.id/ serves `dist/morning/`.
- https://oeminnovationforumindonesia-customerleadercircle.kimcommunication.id/ serves `dist/afternoon/`.

Apache aliases `/assets/`, `/styles.css`, `/event-data.js`, and `/app.js` to the shared files. The former host's `/morning/` and `/afternoon/` URLs redirect to the respective session host so existing QR codes keep working.

## Shared files

All serving files are in `dist/`; production requires no package installation. Public event content lives in `dist/event-data.js`. The page renderer is `dist/app.js`, the shared layout is `dist/index.html`, and styles are in `dist/styles.css`. Run `node build.mjs` after editing the layout or event data to regenerate both route entry files. The build reads `event-data.js`; `sessions.time` stores the official banner time separately from individual agenda-row times. CSS and JavaScript URLs include a shared cache version.

This project is for local development and preview. Publish, deploy, or push only when explicitly requested by the user. The ignored local `.openai/` directory records an earlier hosting setup and is not required to run the website.

## Content and assets

- Detailed agenda-row times, session titles, names, and roles follow the user-shared **Tracker Lenovo OEM Innovation Forum.xlsx**, worksheet **Agenda for Bumpers**, received 10 October 2026, with the morning opening speaker confirmed by the user's updated rundown screenshot on 11 October 2026. The user's subsequent correction restores the official banner times to **09:00–13:00 WIB** and **17:00–20:00 WIB** without changing the detailed source rundown. Registration remains an agenda item without a registration form or CTA.
- The agenda heading displays the date and “All times in WIB”; its individual rows retain the supplied rundown times rather than presenting a conflicting overall event window.
- The morning opening at **09:05–09:15** is assigned to **Varin Derjit Singh, President Director, Lenovo Indonesia**, as confirmed in the updated 11 October rundown. The evening opening remains assigned to Joni Irwanto. Earlier morning alternatives Alex Sun and Susianty Bong are not published as confirmed speakers or cards.
- Omar’s current supplied role is President Commissioner, BNI (2025–Present), with the former role Deputy President Director & CEO, Pertamina (2009–2010).
- Samuel Tan’s short biography summarizes the supplied Auk Industries biography. Other speakers use only their supplied roles while broader biographies are unavailable.
- All 13 scheduled speakers use the original transparent PNG portraits from the user-supplied **Speaker Photo for Microsite Lenovo OEM-20261011T075515Z-1-001.zip**, received 11 October 2026. Files are copied without modifying image bytes and named `speaker-<id>-20261011.png` in `dist/assets/`. The PNGs appear on white circles inside the relevant agenda entries alongside the English short biography. Every scheduled speaker has a supplied photo; the initials and “Photo coming soon” placeholder remains available if an image request fails. Older portrait assets are retained.
- The original **1920×1200** hero artwork is served as `hero-morning.webp` and `hero-afternoon.webp`, retaining the supplied composition, title, date, venue, logos, photograph and correct original times: **09:00–13:00 WIB** and **17:00–20:00 WIB**. Source PNG copies are retained in `dist/assets/`. The date and official banner time are also displayed as English page text. Backgrounds and the Montserrat font come from the supplied Lenovo TechDay reference.
- The location map and directions link use The Westin Jakarta and require internet access.

The public page does not contain production notes, speaker alternatives, dinner-course timing, overview summaries, countdowns, prizes, RSVP, registration links, or QR codes.
