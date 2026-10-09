# Lenovo OEM Innovation Forum Indonesia 2026

Static, responsive event microsite based on the visual reference at https://lenovotechday.id/id. Includes Indonesian and English copy, a WIB countdown, the two forum programs, invited speakers, lucky draw prizes, and The Westin Jakarta location. There is no registration form, RSVP navigation, registration link, or QR code.

## Local preview

Run `python -m http.server 4173 --bind 127.0.0.1 --directory dist` from this directory, then open http://127.0.0.1:4173.

All website files are in `dist/`. No installation or build step is required. Upload the contents of `dist/` to any static hosting service to serve the site.

## Content and assets

- Event copy, names, roles, dates and times follow the supplied invitation text. Customer Leader Circle is **18:00–21:00 WIB**, overriding the older poster time.
- No detailed session timetable was provided, so the agenda displays the two confirmed event windows only.
- Backgrounds, Montserrat font, hero video, brand marks and overview illustrations come from the supplied Lenovo TechDay reference website. Hero and visual structure intentionally follow that reference.
- Speaker portraits and prize images are cropped from the supplied posters. Their source resolution is limited, so they are displayed at compact sizes.
- The map and directions link use The Westin Jakarta. They require internet access.

The Sites project identity is stored in `.openai/hosting.json`.
