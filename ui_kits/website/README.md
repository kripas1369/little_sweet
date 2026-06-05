# UI Kit — LSP Marketing & Booking Website

A high-fidelity, interactive recreation of the Little Sweet Photography website in the **light /
cream editorial** theme (creme.digital-inspired). Open `index.html` for the full clickable demo.

## Theme
Cream canvas (`#FBFAF7`), ink text (`#14110B`), **gold reserved for accents** — logo, `◆` section
labels, the primary CTA, hover underlines, stat numbers, and one italic emphasis word. Two **dark
"main parts"** anchor the page: the Final-CTA banner and the footer (`#0E0C08` + gold).

> A dark-mode version of this kit is preserved in `../website-dark/` (the original brief direction).

## Files
| File | What it is |
|---|---|
| `index.html` | Mounts the full home page + wires React, Babel, Lucide, and all components. |
| `primitives.jsx` | `Logo` (aperture SVG), `Button` (primary/outline/ghost · sm–lg), `SectionLabel`, `StatPill`, `FeaturePill`, `Icon` (Lucide helper). Exported to `window`. |
| `Nav.jsx` | Sticky cream nav with backdrop blur, Ceremonies/Business dropdowns, underline-hover links, and a full-screen mobile drawer. |
| `Hero.jsx` | `Hero` (gold particle dust, grain, big Playfair headline, CTAs, stat pills) + `SearchBar` booking card. |
| `Sections.jsx` | `Ceremonies` (caption-below image cards), `Business` (bento grid), `WhyChoose`, `HowItWorks`, `SectionShell`. |
| `Testimonials.jsx` | Two-row auto-scrolling marquee + the dark `FinalCTA` banner. |
| `Footer.jsx` | Dark footer + `BookingModal` (date/time/notes) + `Toast` ("ends with a notification"). |
| `App.jsx` | Composes the page; holds booking-modal, login-modal, and toast state. |

## Interactions to try
- **Book Now / any card / Search / a dropdown item** → opens the booking modal → **Confirm** fires a
  gold toast notification (the brand's "starts with a click, ends with a notification" mechanic).
- **Client Login** → light login modal.
- **Ceremonies / Business** nav items → hover dropdowns.
- Resize narrow → hamburger → full-screen drawer.

## Notes
- Icons are **Lucide** via CDN. Imagery is photography-themed **Unsplash** URLs (remote).
- Components are cosmetic recreations (no real backend/routing) — built for reuse in mocks, not
  production. Copy a component, drop it into a new file, restyle via the CSS vars in
  `../../colors_and_type.css`.
