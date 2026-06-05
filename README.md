# Little Sweet Photography (LSP) — Design System

> **Tagline:** *"Starts with a click — ends with a notification."*

A premium, cinematic, dark-mode design system for **Little Sweet Photography (LSP)** — a
photography booking platform based in **Kathmandu, Nepal** that connects clients with handpicked
professional photographers for ceremonies, events, and business shoots.

The brand voice is **luxurious, editorial, and trust-inspiring** — closer to a high-end creative
studio than a generic booking portal. Visual reference point: the **light, cream-toned, big-black-
type editorial aesthetic** of *creme.digital* — a near-white canvas, generous whitespace, and gold
used sparingly as a precious accent (logo, section labels, primary CTA, one emphasis word).

---

## Sources

This system was generated from a **written project brief** (Claude Code build prompt for the LSP
website). No live codebase or Figma file was provided — the brief itself is the source of truth.

- **Brand / product:** Little Sweet Photography (LSP), lsponestop.com (referenced in brief)
- **Intended stack (per brief):** React 18 + Vite + TailwindCSS, React Router v6, Framer Motion,
  Lucide React icons, Google Fonts.
- **Phone:** +977 15916533 · +977 9851195181
- **Address:** Kathmandu, Nepal

> If you have access to the production codebase or a Figma file, share it and this system can be
> upgraded from the synthesized spec to pixel-exact recreations.

---

## What's a photography booking brand selling?

Three audiences, one platform:

1. **Ceremonies / families** — Wedding, Baby Shower, Bratabandha, Birthday, Pasni, Newborn,
   Maternity, Toddler, Family Portrait, Party, Vacation Photography.
2. **Business / corporate** — Food Photography, School Events, Corporate Events, Brand Video,
   Product Photoshoot, Boutique Photography, Profile & Headshot.
3. **Supply side** — photographers joining the network, plus travel agents, hostels & attractions.

The product surface is a **marketing + booking website** (Home, Packages, Package Detail, Events,
About, Contact, Join as Photographer). That website is the single product this system recreates.

---

## CONTENT FUNDAMENTALS

How LSP writes. The copy is **warm, confident, and a little romantic** — it sells emotion and
trust, not features.

- **Voice — "we" → "you":** LSP speaks as a team ("**We** connect you…", "**We** believe every
  moment deserves to be captured beautifully") and addresses the client directly as "**you / your**"
  ("**Your** Perfect Package", "Capture **Your** Perfect Moment"). Warm, personal, never corporate.
- **Emotional, sensory nouns:** "precious moment", "unforgettable moments", "life's most beautiful
  moments", "relive the moment". Photography is framed as memory-preservation, not a transaction.
- **Headlines — editorial fragments, often with a period.** Short, declarative, occasionally with a
  full stop for confidence: *"Why Choose Us."*, *"We Bleed Photographs"*, *"Capture Every Precious
  Moment"*. One word in the headline is usually set in **gold italic** for emphasis
  (e.g. *Precious*).
- **Casing:** Headlines & nav use **Title Case**. Section labels are **UPPERCASE** and set in
  Space Mono with wide tracking, always prefixed with a gold **◆** diamond
  (`◆ CEREMONIES`, `◆ BUSINESS`, `◆ WHAT CLIENTS SAY`, `◆ OFFERINGS`).
- **CTAs — imperative + arrow.** "Book Now →", "View Details →", "Talk to Us →", "Explore
  Packages", "Watch Our Work", "Book Your Session Now". Arrows (→) recur as a directional motif.
- **Tagline mechanic:** the brand tagline is playful and product-aware — *"Starts with a click —
  ends with a notification."* (the camera click + the booking notification).
- **Proof & numbers:** trust is built with concrete stats — *150+ Photographers · 500+ Happy
  Clients / Bookings · 4.9★ Rating · 7 Years of Excellence*. Used sparingly, as social proof, not
  data slop.
- **Emoji:** used **lightly and only as decorative bullet glyphs** in stat pills / feature bubbles
  (📷 ⭐ 🏆 💰 📅 🔒). Never inside body copy or headings. Prefer the gold ◆ diamond and → arrow as
  the brand's true "glyphs"; treat emoji as optional ornaments that can be swapped for Lucide icons.
- **Vibe:** premium, reassuring, celebratory. Reads like an invitation to a beautiful event.

**Representative copy**
> "Nepal's premier photography booking platform — connecting you with handpicked professionals for
> life's most unforgettable moments."

> "We connect you with handpicked, professional photographers tailored to your needs. Enjoy
> transparent pricing, hassle-free booking, and trusted reviews — all in one place."

---

## VISUAL FOUNDATIONS

The look is **cinematic dark luxury**: near-black canvas, gold as the single accent, big serif
display type, lots of negative space, and restrained, smooth motion.

### Color
- **Warm cream canvas** (`--cream #FBFAF7`) everywhere — a near-white that reads clean but feels
  premium (the "creme"). Alternate sections step to `#F3EFE6`; cards are pure white `#FFFFFF` with a
  faint ink hairline and soft shadow.
- **Ink, not pure black**, for text: `#14110B` headings, warm grey `#4A463E` body, `#8A857B` muted.
- **Gold is a precious accent, used sparingly** — the logo, `◆` section labels, the primary CTA
  fill, hover underlines, stat numbers, and the single italic emphasis word. For gold *text* on a
  light background use the deeper `--gold-ink #9A7212` / `--gold-gradient-ink` so it stays legible;
  the brighter `--gold` is reserved for fills and borders.
- **Two dark "main parts" only** anchor the page: the Final-CTA banner and the footer use the warm
  near-black `#0E0C08` with gold + cream text, for cinematic contrast. Everything else is light.
- Gold is precious — if everything is gold, nothing is. One gold moment per visual zone.

### Type
- **Playfair Display** (serif) for all display & headings — editorial, high-contrast, elegant.
  Hero is heavy (800), headings 600–700. Emphasis word set in *italic 500* with the gold gradient.
- **DM Sans** for body & UI — clean, neutral, modern. Body line-height generous (~1.65).
- **Space Mono** for labels, tags, categories, stat numbers — uppercase, wide `0.22em` tracking.
- Pairing logic: serif romance + sans clarity + mono "technical credibility". See
  `colors_and_type.css` for the full scale.

### Spacing & layout
- **8pt spacing system.** Sections breathe — generous vertical rhythm (`96–160px` between major
  blocks). Negative space is a feature, not a bug.
- Centered hero; otherwise left-aligned editorial blocks and asymmetric **bento grids** for the
  business offerings (one 2-col anchor card + medium + small cards).
- Fixed/sticky nav with backdrop blur is the one persistent chrome element.

### Backgrounds & texture
- Warm cream base. **Very subtle film grain / noise overlay** on the hero (low opacity) keeps the
  large empty cream areas from feeling flat.
- **Faint gold particle dots** drift in the hero — low-opacity gold dust, not glowing orbs.
- Photography is treated cinematically: rounded image cards with a **caption area below on white**,
  and a soft **gold tint on hover**. The old dark bottom-scrim is reserved for the dark sections.
- A signature **golden hairline divider** that fades in from the center marks the hero's lower edge.

### Imagery vibe
- Warm, rich, professionally lit photography (weddings, ceremonies, food, portraits). Slight warm
  gold cast on hover. Never cold/blue. Color, not B&W — but with a luxe, slightly desaturated,
  cinematic grade.

### Motion (Framer Motion)
- **Scroll-triggered reveals**: `fadeUp` (opacity 0→1, y 40→0, 0.7s ease-out) on every section,
  with `staggerChildren` ~0.12s for groups.
- Hero headline reveals **word-by-word**. Stat pills slide in from the left with stagger.
- **Marquee testimonials**: continuous horizontal loop (`x: [0, -50%]`), two rows opposite
  directions.
- Easing is soft and decelerating (`cubic-bezier(0.16,1,0.3,1)`). No bounces, no harsh springs —
  everything glides.
- Respect `prefers-reduced-motion`: reveal content statically.

### Interaction states
- **Hover (links):** gold **underline slides in from the left**; text lightens gold→gold-light.
- **Hover (cards):** image zooms subtly, a faint gold tint fades in, **gold border appears**, card
  **lifts** with a soft shadow.
- **Hover (buttons):** primary lightens (gold→gold-light), outline **fills** gold; subtle scale-up
  (~1.02) + gold glow.
- **Press:** slight scale-down (~0.98); no color flash.
- **Focus:** gold ring (`--border-strong`) for accessibility.

### Borders, radii, shadows
- **Borders** are workhorses: 1px **ink hairlines at ~10% opacity** (`--border`) on light surfaces,
  strengthening to ~22% on hover, plus a **gold accent border** (`--border-gold`) on featured/hover
  cards. Bento cards keep a **gold left-border** detail.
- **Radii:** soft but not bubbly — cards `14–18px`, buttons/inputs `8–10px`, pills fully rounded.
- **Shadows:** soft warm-tinted ambient shadows (`rgba(20,17,11,.05–.12)`) for elevation on the light
  canvas + a **gold glow** reserved for hover lift. Dark sections drop shadows entirely.

### Transparency & blur
- Nav and overlays use `rgba(251,250,247,0.82)` + `backdrop-filter: blur(20px)`. Blur is reserved
  for floating chrome (nav, mobile drawer, modals), not decorative. Modals are white cards over a
  dim ink scrim.

---

## ICONOGRAPHY

- **Primary icon set: Lucide** (lucide.dev) — thin (1.5–2px), rounded, outline icons. This matches
  the brief's stack (`lucide-react`) and the elegant, lightweight aesthetic. Used for nav, feature
  cards, contact info (phone / mail / map-pin), play button, search, social. Load from CDN; see
  `assets/icons.md`.
- **The ◆ diamond and → arrow** are the brand's true recurring glyphs — ◆ prefixes every section
  label (Space Mono gold), → trails every CTA. Treat these as typographic, not iconographic.
- **Emoji** appear only as small decorative bullets inside stat pills & feature bubbles
  (📷 ⭐ 🏆 💰 📅 🔒). They are swappable with Lucide equivalents (camera, star, award, wallet,
  calendar, lock) and should be in production for consistency.
- **The LSP logo** is a custom SVG: two overlapping landscape rectangles (a camera viewfinder),
  with **L** and **P** in gold and a **6-blade camera aperture** forming the central **S**. See
  `assets/lsp-logo.svg` and the Brand cards.
- No emoji in headings or body. No multicolor icon sets. Stroke icons only, gold or white.

See `assets/icons.md` for the curated Lucide icon list and CDN usage.

---

## Index — what's in this folder

| File / folder | What it is |
|---|---|
| `README.md` | This file — brand context, content & visual foundations, iconography, index. |
| `colors_and_type.css` | CSS variables for color + type + spacing + radii + shadow + motion, and semantic element styles. **Import this in every design.** |
| `SKILL.md` | Agent Skill manifest — makes this folder usable as a Claude Skill. |
| `assets/` | Brand assets: `lsp-logo.svg`, logo lockups, grain texture, sample imagery, `icons.md`. |
| `fonts/` | Notes on the webfonts (loaded via Google Fonts CDN; see `fonts/README.md`). |
| `preview/` | Design-system preview cards (colors, type, spacing, components, brand) shown in the Design System tab. |
| `ui_kits/website/` | UI kit — high-fidelity recreation of the LSP marketing + booking website. `index.html` is an interactive demo; `*.jsx` are reusable components. |

**Quick start:** `@import 'colors_and_type.css';` then build on `--bg-page` black with `--font-body`
text, `--font-display` headings, gold accents, and the component patterns in `ui_kits/website/`.
