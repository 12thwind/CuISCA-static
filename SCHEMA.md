# CuISCA Site Schema & Overview

**Copper Island Shifting Currents Alliance**
Static HTML site — HTML5 UP "Forty" theme
Hosted: GitHub → Cloudflare

-----

## Pages

|File                    |Title             |Layout                                                          |
|------------------------|------------------|----------------------------------------------------------------|
|`index.html`            |Homepage          |Banner (major) + tiles (commented out) + testimonials (commented out) + email link|
|`philosophy.html`       |Our Philosophy    |Article (`#main alt`)                                           |
|`ceremonies.html`       |Sacred Ceremonies |Banner (style2) + spotlights + "About Adam" + Ceremony Elements |
|`living-philosophy.html`|Living Philosophy |Article (`#main alt`)                                           |
|`resources.html`        |Keweenaw Resources|Article (`#main alt`)                                           |
|`contact.html`          |Connect           |Article + FAQ section + email link                              |

### Non-site page

|File               |Purpose                                             |
|-------------------|----------------------------------------------------|
|`pantswatch.html`  |Standalone counter page (unrelated to CuISCA; uses Tailwind CSS, no site nav)|

-----

## Shared Page Structure

Every CuISCA page contains these sections in order:

```
#wrapper
  #header        — Logo + hamburger nav trigger
  #menu          — Nav overlay (6 links + CTA button)
  #main          — Page-specific content
  #contact       — Email link contact block (most pages); living-philosophy.html uses id="three" here
  #footer        — Copyright
```

### Nav links

Standard order (all pages except `index.html`):

1. Home → `index.html`
1. Our Philosophy → `philosophy.html`
1. Sacred Ceremonies → `ceremonies.html`
1. Keweenaw Resources → `resources.html`
1. Living Philosophy → `living-philosophy.html`
1. Connect → `contact.html`

**`index.html` nav order differs:** Home, Our Philosophy, Connect, Sacred Ceremonies, Keweenaw Resources, Living Philosophy

### CTA button label per page

|Page                    |CTA Label         |
|------------------------|------------------|
|`index.html`            |Connect With Us   |
|`philosophy.html`       |Connect With Us   |
|`ceremonies.html`       |Begin Your Journey|
|`living-philosophy.html`|Personal Guidance |
|`resources.html`        |Ask a Local       |
|`contact.html`          |Contact Us        |

-----

## Contact / Email

- **No HTML forms currently exist on any page**
- All pages link to: `ceremonies@cuisca.org`
- `assets/js/form-handler.js` is loaded sitewide and contains prepared EmailJS infrastructure, but has no forms to attach to

### form-handler.js (prepared, not active)

- Service: EmailJS
- Service ID: `service_zq412ey`
- Template ID: `template_dmucgf9`
- Template parameters wired (for future form fields): `name`, `email`, `message`, `subject`, `phone`, `date`, `ceremony`, `vision`, `interests`, `category`, `firstName`, `question`
- No EmailJS CDN script or `emailjs.init()` call exists in any HTML file

-----

## Assets

```
assets/
  css/
    main.css               — Primary stylesheet
    noscript.css           — Fallback (no-JS)
    fontawesome-all.min.css — FontAwesome icon set
  js/
    jquery.min.js
    jquery.scrolly.min.js
    jquery.scrollex.min.js
    browser.min.js
    breakpoints.min.js
    util.js
    main.js
    form-handler.js        — EmailJS handler (prepared; no active forms)
  sass/                    — SCSS source files (base, components, layout, libs)
  webfonts/                — FontAwesome font files (eot, svg, ttf, woff, woff2)
images/
  banner.jpg               — General banner background (index.html)
  ceremonies-banner.jpg    — NOT present in repo (referenced in ceremonies.html)
  ceremony-planning.jpg    — Ceremonies page spotlight
  officiant.png            — Ceremonies page
  wedding-ceremony.jpg     — Ceremonies page spotlight
  Ronan_Profile Pic.png    — Founder photo (referenced in philosophy.html, currently commented out)
  pic01.jpg – pic11.jpg    — Gallery images (11 files; used in index.html tiles, currently commented out)
```

> **Missing images:** `ceremonies-banner.jpg`, `community-banner.jpg`, `keweenaw-map.jpg`, and `philosophy-banner.jpg` are referenced in the original theme or schema but do not exist in the repo.

-----

## Structural Quirks & Notes

- `ceremonies.html` is the only page with `class="alt style2"` on `#header` and a full `#banner` section using `ceremonies-banner.jpg` (file missing). All other pages use a plain `#header` with no style class.
- `index.html` has `class="alt"` on `#header` (toggles styling on scroll). Its banner uses a gradient/text-only background (no image).
- **Commented-out sections on `index.html`:** `<!-- One -->` (tiles gallery, 4 article cards) and `<!-- Five -->` (testimonials/blockquotes). Content exists but is not rendered.
- **Commented-out sections on other pages:**
  - `philosophy.html`: "Our Founder" section with `Ronan_Profile Pic.png` and bio
  - `living-philosophy.html`: A testimonial blockquote
  - `resources.html`: A box/image gallery section and a lakeside meditation image block
- `living-philosophy.html` uses `<section id="three">` for its contact/email block instead of `<section id="contact">` — inconsistent with all other pages
- `contact.html` has no standalone form; it contains an intro section, a "Ways to Engage" FAQ section, and a wedding planning resources table
- Organization does **not** perform land acknowledgments — remove or avoid any such language if adding content about place or land
- Footer on all pages: `© CuISCA 2025 | Copper Island Shifting Currents Alliance`

-----

## Content Scope

CuISCA is a wedding officiant and spiritual philosophy organization based in Hancock, Michigan on the Keweenaw Peninsula. Officiant: **Rev. Adam Griffis**. Services:

- Wedding & commitment ceremonies (primary revenue)
- Living philosophy guidance
- Wedding planner referrals (third-party, not direct service)

Physical location referenced in `contact.html`: **The Sacred Circle Center, Hancock, Michigan**
