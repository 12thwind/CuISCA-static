# CuISCA One-Page Redesign

**Date:** 2026-04-06
**Branch:** `one-page-redesign`
**Scope:** Collapse the existing 5-page CuISCA site into a single, better-looking `index.html`. Excludes `pantswatch.html`.

---

## Goals

- Replace the multi-page HTML5 UP "Forty" theme with a custom single-page design
- Achieve a higher-quality, more distinctive visual result
- Maintain all essential content for couples considering wedding ceremony services
- Keep the site fully static (no build tools, no frameworks, no form backend)

---

## Visual Direction

**Aesthetic:** Earthy & Warm — cream and linen backgrounds, warm brown and copper/gold accents, serif headings, clean sans-serif body text. Feels grounded and place-rooted, like the Keweenaw landscape itself.

**Palette:**
| Token | Value | Use |
|---|---|---|
| Background | `#f5f0e8` | Main page background |
| Background alt | `#ede8de` | Alternating sections |
| Dark | `#3d2b1f` | Hero, footer, nav, headings |
| Accent | `#c9a96e` | Copper/gold — CTAs, borders, highlights |
| Body text | `#5a4a3a` | Paragraph text |
| Muted | `#8a7060` | Labels, captions, secondary text |

**Typography:**
- Headings: Georgia (serif), font-weight 400, generous tracking on labels
- Body: System sans-serif stack (`-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`)
- Generous line-height (1.7 body, 1.3 headings)
- Uppercase letter-spaced labels for section eyebrows

---

## Architecture

**Output:** Single `index.html` linked to `assets/css/custom.css` (the existing `main.css` is replaced, not modified)
**JS:** Minimal — sticky nav fade-in on scroll only (vanilla JS, no jQuery dependency)
**Images used:** `banner.jpg` (hero background), `officiant.png` (ceremonies section)
**Pages kept as-is:** `pantswatch.html` (standalone, unrelated)
**Pages superseded:** `philosophy.html`, `ceremonies.html`, `living-philosophy.html`, `resources.html`, `contact.html` — content consolidated into `index.html`

---

## Page Sections (top to bottom)

### 1. Hero
- Full-viewport section, `banner.jpg` as background with dark overlay
- Centered: eyebrow label, large "CuISCA" heading, tagline, scroll CTA button
- No navigation visible here — nav fades in sticky on scroll

### 2. Sticky Navigation
- Hidden until user scrolls past hero
- Slim dark bar (`#3d2b1f`): CuISCA logo left, anchor links center (Ceremonies · Philosophy · Elements · Connect), copper CTA button right ("Begin Your Journey" → `#contact`)
- Smooth-scroll to anchors

### 3. Ceremonies (`#ceremonies`)
- Eyebrow: "Sacred Ceremonies"
- Heading: "Wedding Ceremonies" + subheading "Rev. Adam Griffis"
- Intro paragraphs from `ceremonies.html` (Art of Sacred Ceremony section) — condensed to ~2 paragraphs
- `officiant.png` displayed beside intro text (floated right on desktop, stacked on mobile)
- Three-column cards: Sacred Preparation · The Threshold Experience · Integration & Remembrance (condensed from ceremonies.html #three)

### 4. Philosophy (`#philosophy`)
- Alternate background (`#ede8de`)
- Eyebrow: "Our Philosophy"
- Heading: "Core Principles"
- Five principles displayed as cards with copper left-border accent: Sacred Relationship with Place, Conscious Presence, Interconnected Wholeness, Cyclical Wisdom, Embodied Spirituality
- Pull-quote from `index.html`: *"In the depths of the Great Lake and the heights of the ancient hills..."*

### 5. Ceremony Elements (`#elements`)
- Back to main background (`#f5f0e8`)
- Eyebrow: "What to Expect"
- Heading: "Ceremony Elements"
- 2×2 grid: Connection to Place · Personal Significance · Symbolic Actions · Sacred Dimension (bullet content from `ceremonies.html` #four, condensed)
- Inclusive Approach callout box at bottom

### 6. Contact (`#contact`)
- Dark section (`#3d2b1f`) matching hero — bookends the page
- Eyebrow: "Connect"
- Heading: "Begin Your Journey"
- Single email link: `ceremonies@cuisca.org`
- No form — the existing EmailJS infrastructure was not active

### 7. Footer
- Very dark (`#2a1e15`)
- One line: © CuISCA 2025 · Copper Island Shifting Currents Alliance

---

## Content Sourcing

| Section | Source file(s) |
|---|---|
| Hero tagline | `index.html` banner |
| Ceremonies intro | `ceremonies.html` #one |
| About Adam / approach cards | `ceremonies.html` #three |
| Core Principles | `index.html` #three + `philosophy.html` (detailed) |
| Pull-quote | `index.html` blockquote |
| Ceremony Elements | `ceremonies.html` #four |
| Inclusive Approach | `ceremonies.html` #four `.box` |
| Contact email | All pages (`ceremonies@cuisca.org`) |

---

## What's Excluded

- **Living Philosophy** section content — too detailed for one-pager; can be linked separately later
- **Keweenaw Resources** — same
- **FAQ** — omitted to keep page focused; most questions covered implicitly
- **Who We Are / Name meaning** — omitted; philosophy section covers the spirit of it
- **Contact form** — form infrastructure existed but was never active; email link only

---

## Constraints & Notes

- No land acknowledgment language (per SCHEMA.md note)
- `ceremonies-banner.jpg` is missing from repo — do not reference it
- Keep `pantswatch.html` untouched
- No build tools — plain HTML/CSS/JS only
- Footer year: 2025 (matches existing pages)
- Old pages (`philosophy.html`, etc.) can remain in repo but are no longer linked from the main nav
