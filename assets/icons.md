# Iconography — Little Sweet Photography

## Primary set: Lucide
LSP uses **[Lucide](https://lucide.dev)** — thin (1.5–2px stroke), rounded, outline icons. This
matches the brief's intended stack (`lucide-react`) and the lightweight, editorial aesthetic. Icons
are rendered **gold** (`--gold`) or **off-white** (`--white`), never multicolor, never filled.

### CDN usage (no build step)
```html
<script src="https://unpkg.com/lucide@latest"></script>
<i data-lucide="camera"></i>
<script>lucide.createIcons();</script>
```
Or per-icon SVG from `https://unpkg.com/lucide-static@latest/icons/<name>.svg`.

### Curated icon list (by usage)
| Context | Lucide icons |
|---|---|
| Nav / chrome | `menu`, `x`, `chevron-down`, `search`, `user`, `arrow-right` |
| Ceremonies | `camera`, `heart`, `baby`, `cake`, `gift`, `users`, `sparkles` |
| Business | `utensils`, `building-2`, `package`, `school`, `video`, `shopping-bag`, `id-card` |
| Why choose / features | `award`, `wallet`, `calendar-check`, `shield-check`, `star` |
| Contact | `phone`, `mail`, `map-pin`, `clock` |
| Media | `play`, `image`, `aperture` (echoes the logo) |
| Social | `instagram`, `facebook`, (TikTok → use a brand SVG or `music-2`) |

## Brand glyphs (typographic, not icons)
- **◆** — gold diamond that prefixes every Space Mono section label (`◆ CEREMONIES`).
- **→** — arrow that trails every CTA ("Book Now →").
These are set in text, not as SVG icons.

## Emoji
Used **only** as small decorative bullets in stat pills & feature bubbles (📷 ⭐ 🏆 💰 📅 🔒). They
map 1:1 to Lucide icons (camera, star, award, wallet, calendar-check, shield-check) — prefer Lucide
in production for visual consistency. Never use emoji in headings or body copy.

## Logo
`assets/lsp-logo.svg` — the only bespoke vector mark: two overlapping camera-frame rectangles with
gold serif **L** / **P** and a **6-blade aperture** as the central shutter monogram. Do not redraw;
reuse the file. A small/favicon crop can isolate just the aperture.
