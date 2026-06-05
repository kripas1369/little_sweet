# Fonts — Little Sweet Photography

All three families are **Google Fonts** and are loaded via CDN `@import` at the top of
`colors_and_type.css`. No substitution was needed — these are the exact families specified.

| Role | Family | Weights used | Google Fonts |
|---|---|---|---|
| Display / headings | **Playfair Display** | 400, 500, 600, 700, 800, 900 + italics | https://fonts.google.com/specimen/Playfair+Display |
| Body / UI | **DM Sans** | 300, 400, 500, 600, 700 + italic | https://fonts.google.com/specimen/DM+Sans |
| Labels / mono | **Space Mono** | 400, 700 + italic | https://fonts.google.com/specimen/Space+Mono |

## Offline / self-hosted use
If you need the site to work offline or want to self-host, download the `.woff2` files from Google
Fonts (or `npm i @fontsource/playfair-display @fontsource/dm-sans @fontsource/space-mono`), drop
them in this folder, and replace the `@import` line in `colors_and_type.css` with `@font-face`
rules pointing at the local files. The CSS variables (`--font-display`, `--font-body`,
`--font-mono`) stay the same, so nothing else changes.
