# OEM Innovation Forum Indonesia

Static, responsive event microsite based on the visual reference at https://lenovotechday.id/id. Two separate routes share the same layout and Indonesian/English copy. Each page follows this order: session banner → Agenda → Speaker with portrait and short biography → Location. There is no overview, countdown, prizes section, registration form, RSVP navigation, registration link, or QR code.

## Local preview

Run `python -m http.server 4173 --bind 127.0.0.1 --directory dist` from this directory, then open http://127.0.0.1:4173.

Open http://127.0.0.1:4173/morning/ for **ISV Partner Innovation Forum + Dr. Sonny Hendra Sudaryana, 09:00–13:00 WIB**, or http://127.0.0.1:4173/afternoon/ for **Customer Leader Circle + Omar Sjawaldy Anwar, 17:00–20:00 WIB**. Both sessions take place on 14 October 2026 at The Westin Jakarta. The root URL defaults to the morning session. Each route contains only its own agenda and speaker, followed by the shared venue location. Navigation anchors and language changes keep the selected session.

All website files are in `dist/` and are ready to serve without installing dependencies. After editing the shared `dist/index.html` layout, run `node build.mjs` to regenerate both route entry files. Shared copy and session data are in `dist/app.js`, and shared styles are in `dist/styles.css`. This project is for local development and preview. Do not publish or deploy unless the user explicitly asks.

## Content and assets

- Names, roles and descriptions follow the supplied invitation text. Times follow the latest supplied banners: **morning 09:00–13:00 WIB** and **afternoon 17:00–20:00 WIB**, on 14 October 2026. These supersede the earlier invitation times.
- No detailed session timetable was provided, so each agenda displays its session's event window only.
- The hero uses the latest user-supplied 1920×1200 session banners, converted to lossless WebP. Original PNG copies are retained in `dist/assets/`. Banners are shown in full without cropping or overlaid text. Backgrounds and the Montserrat font come from the supplied Lenovo TechDay reference website; previous visual assets are retained.
- Speaker portraits use the user-supplied 874×1241 PNG files from `kim-ems.sgp1.cdn.digitaloceanspaces.com/image-uploads/Speaker_Sonny.png` and `Speaker_Omar.png`, displayed on white portrait backgrounds. The previous poster crops are retained in `dist/assets/`.
- Each speaker's short biography uses only the role information supplied by the user.
- The map and directions link use The Westin Jakarta. They require internet access.

The local `.openai/` directory records an earlier hosting setup and is ignored by Git. It is not needed to run or serve this website.
