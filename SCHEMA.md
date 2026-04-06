# CuISCA Site Schema & Overview

**Copper Island Shifting Currents Alliance**
Single-page static site — custom design (replaced HTML5 UP "Forty" theme)
Hosted: GitHub → Cloudflare

---

## Architecture

`index.html` is the entire site. The old multi-page files (`philosophy.html`, `ceremonies.html`, etc.) remain on disk but are no longer linked from the main navigation.

**Tech stack:** Plain HTML5, CSS custom properties, vanilla JavaScript. No build tools, no frameworks, no jQuery.

---

## File Map

```
index.html                    — Single-page site (all content)
pantswatch.html               — Standalone counter page (unrelated; Tailwind CSS, no site nav)

assets/
  css/
    custom.css                — Primary stylesheet (all styles for index.html)
    main.css                  — Legacy stylesheet (used only by old multi-page files)
    noscript.css              — Legacy fallback
    fontawesome-all.min.css   — Legacy icon set (not used by index.html)
  js/
    nav.js                    — Sticky nav fade-in + mobile hamburger (IntersectionObserver)
    scroll-animations.js      — Scroll-triggered fade-up entrance animations
    form-handler.js           — Legacy EmailJS handler (prepared, never active)
    jquery.min.js             — Legacy (not used by index.html)
    jquery.scrolly.min.js     — Legacy
    jquery.scrollex.min.js    — Legacy
    browser.min.js            — Legacy
    breakpoints.min.js        — Legacy
    util.js                   — Legacy
    main.js                   — Legacy
  sass/                       — Legacy SCSS source files (not used)
  webfonts/                   — Legacy FontAwesome font files (not used by index.html)

images/
  banner.jpg                  — Hero background
  officiant.png               — Rev. Adam Griffis photo (ceremonies section)
  ceremony-planning.jpg       — Legacy (not referenced in index.html)
  wedding-ceremony.jpg        — Legacy
  Ronan_Profile Pic.png       — Legacy (founder photo, commented out in old pages)
  pic01.jpg – pic11.jpg       — Legacy gallery images (not referenced in index.html)
```

> **Missing images:** `ceremonies-banner.jpg`, `community-banner.jpg`, `keweenaw-map.jpg`, and `philosophy-banner.jpg` are referenced in legacy pages but do not exist in the repo.

---

## index.html — Page Sections

| # | Section | Anchor | Background |
|---|---------|--------|------------|
| 1 | Hero | — | `banner.jpg` with dark overlay |
| 2 | Sticky Nav | — | `rgba(42,30,21,0.88)` + backdrop blur |
| 3 | Ceremonies | `#ceremonies` | `--bg` |
| 4 | Philosophy | `#philosophy` | `--bg-alt` |
| 5 | Ceremony Elements | `#elements` | `--bg` |
| 6 | Contact | `#contact` | `--dark` |
| 7 | Footer | — | `--dark-deep` |

### Nav links
Ceremonies · Philosophy · Elements · Connect → each smooth-scrolls to its anchor.
CTA "Begin Your Journey" → `#contact`.

---

## Design System

### Color Palette — Ore & Basalt

| Token | Value | Use |
|---|---|---|
| `--bg` | `#f2f0ed` | Main background |
| `--bg-alt` | `#e7e4de` | Alternating sections |
| `--dark` | `#252018` | Contact section, footer, nav |
| `--dark-deep` | `#161310` | Footer |
| `--accent` | `#b87333` | True copper — CTAs, borders, highlights |
| `--text` | `#3d3830` | Body text |
| `--text-muted` | `#7a7268` | Labels, captions |
| `--text-light` | `#aba195` | Secondary text on light backgrounds |

### Typography

- **Headings:** `Cormorant Garamond` (Google Fonts) — 300/400/600, includes italic
- **Body:** `Crimson Pro` (Google Fonts) — 300/400, includes italic
- Body size: `1.1rem` / `1.75` line-height
- Eyebrows: `0.65rem`, `0.35em` letter-spacing, uppercase

### JavaScript

**`nav.js`**
- Sticky nav fades in via `IntersectionObserver` when hero scrolls out of view
- Mobile hamburger toggle with `aria-expanded` state and smooth slide-down drawer
- Drawer closes automatically on any nav link click

**`scroll-animations.js`**
- Applies `.fade-up` class to cards, pull-quote, inclusive box, section headings, and eyebrows
- `IntersectionObserver` adds `.visible` at 12% threshold — fires once, then unobserves
- Siblings in the same grid parent receive staggered `transition-delay` (0.1s per index)

---

## Contact

- **No HTML forms** — all pages link to `ceremonies@cuisca.org`
- `form-handler.js` contains EmailJS infrastructure (service `service_zq412ey`, template `template_dmucgf9`) but is never initialized and has no forms to attach to

---

## Legacy Multi-Page Files

These files remain on disk but are no longer linked from the main navigation:

| File | Was | Status |
|---|---|---|
| `philosophy.html` | Our Philosophy | Superseded by index.html |
| `ceremonies.html` | Sacred Ceremonies | Superseded by index.html |
| `living-philosophy.html` | Living Philosophy | Superseded; content omitted from one-pager |
| `resources.html` | Keweenaw Resources | Superseded; content omitted from one-pager |
| `contact.html` | Connect | Superseded by index.html |

---

## Content & Constraints

- Officiant: **Rev. Adam Griffis**, legally ordained minister
- Location: Hancock, Michigan — Keweenaw Peninsula
- Contact: `ceremonies@cuisca.org`
- Peak season books 6–12 months in advance
- Organization does **not** perform land acknowledgments — do not add such language
- Footer year: 2025
