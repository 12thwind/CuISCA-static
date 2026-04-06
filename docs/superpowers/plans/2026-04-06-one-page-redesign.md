# One-Page Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the multi-page CuISCA site with a single polished `index.html` using a custom earthy/warm aesthetic — cream backgrounds, copper/gold accents, serif headings, sticky nav.

**Architecture:** New `index.html` links to `assets/css/custom.css` (written from scratch) and `assets/js/nav.js` (vanilla JS, sticky nav only). The old `main.css` and page-specific HTML files are left untouched on disk but are no longer linked from the primary page. No build tools, no frameworks, no jQuery.

**Tech Stack:** Plain HTML5, CSS custom properties, vanilla JavaScript (IntersectionObserver for sticky nav)

---

## File Map

| File | Action | Purpose |
|---|---|---|
| `index.html` | Rewrite | Single-page site |
| `assets/css/custom.css` | Create | All styles — variables, layout, sections, responsive |
| `assets/js/nav.js` | Create | Sticky nav fade-in via IntersectionObserver |
| `assets/css/main.css` | Leave untouched | Still used by old pages |
| `philosophy.html`, `ceremonies.html`, `living-philosophy.html`, `resources.html`, `contact.html` | Leave untouched | No longer linked from main nav; preserved for reference |
| `pantswatch.html` | Leave untouched | Unrelated standalone page |

---

## Task 1: Foundation — CSS variables, base styles, HTML skeleton

**Files:**
- Create: `assets/css/custom.css`
- Create: `assets/js/nav.js`
- Rewrite: `index.html`

- [ ] **Step 1: Create `assets/css/custom.css` with variables and base reset**

```css
/* assets/css/custom.css */

/* ── Variables ────────────────────────────────────── */
:root {
  --bg:         #f5f0e8;
  --bg-alt:     #ede8de;
  --dark:       #3d2b1f;
  --dark-deep:  #2a1e15;
  --accent:     #c9a96e;
  --text:       #5a4a3a;
  --text-muted: #8a7060;
  --text-light: #c9b89a;
}

/* ── Reset ────────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; }

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.7;
  font-size: 1rem;
}

/* ── Typography ───────────────────────────────────── */
h1, h2, h3 {
  font-family: Georgia, 'Times New Roman', serif;
  font-weight: 400;
  color: var(--dark);
  line-height: 1.3;
}

p { margin-bottom: 1rem; }
p:last-child { margin-bottom: 0; }

ul { padding-left: 1.25rem; }

a { color: var(--accent); }

/* ── Utilities ────────────────────────────────────── */
.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 5rem 2rem;
}

.eyebrow {
  font-size: 0.65rem;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 0.5rem;
}

.section-heading {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  margin-bottom: 0.25rem;
}

.section-sub {
  font-size: 1rem;
  color: var(--text-muted);
  margin-bottom: 2rem;
  font-style: italic;
}

.alt-bg { background: var(--bg-alt); }
.dark-bg { background: var(--dark); }
```

- [ ] **Step 2: Create `assets/js/nav.js`**

```javascript
// assets/js/nav.js
(function () {
  var nav  = document.getElementById('site-nav');
  var hero = document.getElementById('hero');

  var observer = new IntersectionObserver(
    function (entries) {
      nav.classList.toggle('visible', !entries[0].isIntersecting);
    },
    { threshold: 0 }
  );

  observer.observe(hero);
}());
```

- [ ] **Step 3: Rewrite `index.html` with full structural skeleton (sections present, content minimal)**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>CuISCA | Copper Island Shifting Currents Alliance</title>
  <meta name="description" content="CuISCA: Copper Island Shifting Currents Alliance — wedding ceremonies and living philosophy in Michigan's Keweenaw Peninsula, officiated by Rev. Adam Griffis." />
  <link rel="stylesheet" href="assets/css/custom.css" />
</head>
<body>

  <!-- Sticky Nav -->
  <nav id="site-nav" aria-label="Site navigation">
    <a href="#" class="nav-logo">CuISCA</a>
    <ul class="nav-links">
      <li><a href="#ceremonies">Ceremonies</a></li>
      <li><a href="#philosophy">Philosophy</a></li>
      <li><a href="#elements">Elements</a></li>
      <li><a href="#contact">Connect</a></li>
    </ul>
    <a href="#contact" class="nav-cta">Begin Your Journey</a>
  </nav>

  <!-- Hero -->
  <section id="hero">
    <div class="hero-inner">
      <p class="eyebrow">Copper Island Shifting Currents Alliance</p>
      <h1>CuISCA</h1>
      <p class="hero-tagline">Placeholder tagline</p>
      <a href="#ceremonies" class="btn-outline">Discover Our Path</a>
    </div>
  </section>

  <!-- Ceremonies -->
  <section id="ceremonies">
    <div class="container">
      <p class="eyebrow">Sacred Ceremonies</p>
      <h2 class="section-heading">Wedding Ceremonies</h2>
      <p class="section-sub">Rev. Adam Griffis</p>
      <p>Ceremonies intro placeholder.</p>
    </div>
  </section>

  <!-- Philosophy -->
  <section id="philosophy" class="alt-bg">
    <div class="container">
      <p class="eyebrow">Our Philosophy</p>
      <h2 class="section-heading">Core Principles</h2>
      <p>Philosophy placeholder.</p>
    </div>
  </section>

  <!-- Ceremony Elements -->
  <section id="elements">
    <div class="container">
      <p class="eyebrow">What to Expect</p>
      <h2 class="section-heading">Ceremony Elements</h2>
      <p>Elements placeholder.</p>
    </div>
  </section>

  <!-- Contact -->
  <section id="contact" class="dark-bg">
    <div class="container" style="text-align:center;">
      <p class="eyebrow">Connect</p>
      <h2 class="section-heading">Begin Your Journey</h2>
      <p>Contact placeholder.</p>
    </div>
  </section>

  <!-- Footer -->
  <footer>
    <p>&copy; CuISCA 2025 &middot; Copper Island Shifting Currents Alliance</p>
  </footer>

  <script src="assets/js/nav.js"></script>
</body>
</html>
```

- [ ] **Step 4: Open `index.html` in browser and verify the skeleton loads without errors**

Open `index.html` directly in a browser (double-click or `open index.html` on macOS).
Expected: Page loads, sections stack vertically, unstyled but structurally present. No console errors.

- [ ] **Step 5: Commit**

```bash
git add assets/css/custom.css assets/js/nav.js index.html
git commit -m "feat: add foundation files — custom.css, nav.js, index.html skeleton"
```

---

## Task 2: Hero Section

**Files:**
- Modify: `assets/css/custom.css` (append hero styles)
- Modify: `index.html` (fill in hero content)

- [ ] **Step 1: Fill in hero content in `index.html`**

Replace the `<section id="hero">` block with:

```html
<!-- Hero -->
<section id="hero">
  <div class="hero-inner">
    <p class="eyebrow">Copper Island Shifting Currents Alliance</p>
    <h1>CuISCA</h1>
    <p class="hero-tagline">Honoring the sacred connections between spirit,<br>
    community, and place in Michigan's Keweenaw Peninsula</p>
    <a href="#ceremonies" class="btn-outline">Discover Our Path</a>
  </div>
</section>
```

- [ ] **Step 2: Append hero CSS to `assets/css/custom.css`**

```css
/* ── Hero ─────────────────────────────────────────── */
#hero {
  min-height: 100vh;
  background:
    linear-gradient(rgba(20, 10, 4, 0.6), rgba(20, 10, 4, 0.6)),
    url('../images/banner.jpg') center / cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
}

.hero-inner { max-width: 620px; }

#hero h1 {
  font-size: clamp(3.5rem, 10vw, 6rem);
  color: var(--bg);
  letter-spacing: 0.05em;
  margin: 0.4rem 0 0.75rem;
}

.hero-tagline {
  color: var(--text-light);
  font-size: 1.05rem;
  line-height: 1.8;
  margin-bottom: 2rem;
}

#hero .eyebrow { color: var(--accent); }

.btn-outline {
  display: inline-block;
  border: 1px solid var(--accent);
  color: var(--accent);
  padding: 0.65rem 1.75rem;
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
}

.btn-outline:hover {
  background: var(--accent);
  color: var(--dark);
}
```

- [ ] **Step 3: Verify in browser**

Reload `index.html`. Expected: Full-viewport dark hero with `banner.jpg` background, CuISCA heading in large serif, cream tagline text, copper outline button.

- [ ] **Step 4: Commit**

```bash
git add assets/css/custom.css index.html
git commit -m "feat: hero section — full-viewport banner with overlay and CTA"
```

---

## Task 3: Sticky Navigation

**Files:**
- Modify: `assets/css/custom.css` (append nav styles)
- `assets/js/nav.js` is already complete from Task 1

- [ ] **Step 1: Append sticky nav CSS to `assets/css/custom.css`**

```css
/* ── Sticky Nav ───────────────────────────────────── */
#site-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: var(--dark);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  height: 3.5rem;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.35s ease;
}

#site-nav.visible {
  opacity: 1;
  pointer-events: auto;
}

.nav-logo {
  color: var(--accent);
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 1.1rem;
  text-decoration: none;
  letter-spacing: 0.05em;
  flex-shrink: 0;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: var(--text-light);
  text-decoration: none;
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  transition: color 0.2s;
}

.nav-links a:hover { color: var(--bg); }

.nav-cta {
  background: var(--accent);
  color: var(--dark);
  padding: 0.4rem 1.1rem;
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 600;
  flex-shrink: 0;
  transition: background 0.2s;
}

.nav-cta:hover { background: #dbb97e; }
```

- [ ] **Step 2: Verify in browser**

Reload `index.html`. Scroll down past the hero. Expected: slim dark nav bar fades in with CuISCA logo (copper), four section links (muted gold), and "Begin Your Journey" button. Scrolling back up hides it. All links point to correct anchor IDs.

- [ ] **Step 3: Commit**

```bash
git add assets/css/custom.css
git commit -m "feat: sticky nav — fades in after hero via IntersectionObserver"
```

---

## Task 4: Ceremonies Section

**Files:**
- Modify: `index.html` (fill in ceremonies content)
- Modify: `assets/css/custom.css` (append ceremonies styles)

- [ ] **Step 1: Replace ceremonies section in `index.html`**

Replace the `<section id="ceremonies">` block with:

```html
<!-- Ceremonies -->
<section id="ceremonies">
  <div class="container">
    <p class="eyebrow">Sacred Ceremonies</p>
    <h2 class="section-heading">Wedding Ceremonies</h2>
    <p class="section-sub">Rev. Adam Griffis</p>

    <div class="ceremonies-intro">
      <div class="ceremonies-text">
        <p>As an officiant with deep roots in Michigan's Keweenaw Peninsula, I approach wedding ceremonies as sacred thresholds — containers that hold you as you cross from one phase of life into another. I believe that your wedding should be a profound expression of your commitment, weaving together timeless wisdom and contemporary relevance, personal meaning and universal themes.</p>
        <p>I create each ceremony as a collaborative process, taking time to listen deeply to your stories, values, and intentions. What distinguishes my ceremonial approach is my integration of the power of place. The Keweenaw Peninsula — with its ancient rock formations, majestic waters, and resilient forests — becomes more than backdrop; it becomes an active presence in your ceremony.</p>
        <p>As a legally ordained minister, I handle all documentation to ensure your marriage is legally recognized. Initial consultations are offered at no charge.</p>
      </div>
      <img src="images/officiant.png" alt="Rev. Adam Griffis, wedding officiant" class="officiant-photo" />
    </div>

    <div class="approach-cards">
      <div class="approach-card">
        <h3>Sacred Preparation</h3>
        <p>Every ceremony begins with deep listening. I take time to understand your story, values, and intentions — exploring your relationship journey, what you cherish about each other, and your vision for your shared future. This preparation phase is itself a ritual of intention-setting.</p>
      </div>
      <div class="approach-card">
        <h3>The Threshold Experience</h3>
        <p>For the ceremony itself, I arrive early to ground myself in the chosen space, connecting with the energy of the land and the moment. I create a container of presence and reverence, guiding you and your witnesses through this meaningful transition with both care and joy.</p>
      </div>
      <div class="approach-card">
        <h3>Integration &amp; Remembrance</h3>
        <p>After the ceremony, I attend to both practical details (including filing marriage documentation) and the integration of the experience. I provide a keepsake copy of your ceremony text as a touchstone for reflection throughout your journey together.</p>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Append ceremonies CSS to `assets/css/custom.css`**

```css
/* ── Ceremonies ───────────────────────────────────── */
#ceremonies { background: var(--bg); }

.ceremonies-intro {
  display: flex;
  gap: 3rem;
  align-items: flex-start;
  margin-bottom: 3rem;
}

.ceremonies-text { flex: 1; }

.officiant-photo {
  width: 200px;
  flex-shrink: 0;
  border-radius: 2px;
  display: block;
}

.approach-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.approach-card {
  background: #fff8f0;
  border: 1px solid #ddd0c0;
  padding: 1.5rem;
  border-radius: 2px;
}

.approach-card h3 {
  font-size: 1rem;
  margin-bottom: 0.75rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #ddd0c0;
}
```

- [ ] **Step 3: Verify in browser**

Reload and scroll to ceremonies section. Expected: eyebrow + heading + italic "Rev. Adam Griffis" subtitle; two-column layout (text left, photo right); three equal cards below with copper-accented bottom borders on headings.

- [ ] **Step 4: Commit**

```bash
git add assets/css/custom.css index.html
git commit -m "feat: ceremonies section — intro, officiant photo, three approach cards"
```

---

## Task 5: Philosophy Section

**Files:**
- Modify: `index.html` (fill in philosophy content)
- Modify: `assets/css/custom.css` (append philosophy styles)

- [ ] **Step 1: Replace philosophy section in `index.html`**

Replace the `<section id="philosophy">` block with:

```html
<!-- Philosophy -->
<section id="philosophy" class="alt-bg">
  <div class="container">
    <p class="eyebrow">Our Philosophy</p>
    <h2 class="section-heading">Core Principles</h2>

    <div class="principles-grid">
      <div class="principle-card">
        <h3>Sacred Relationship with Place</h3>
        <p>Deep connection with the land and waters that sustain us is essential to spiritual well-being. The Keweenaw Peninsula, with its ancient rock formations, dense forests, and the vast expanse of Lake Superior, serves as both teacher and sanctuary.</p>
      </div>
      <div class="principle-card">
        <h3>Conscious Presence</h3>
        <p>The cultivation of mindful awareness lies at the heart of our practice. Presence — the ability to fully inhabit each moment with open awareness — is both the path and the destination, developing the capacity to respond to life's challenges with clarity and compassion.</p>
      </div>
      <div class="principle-card">
        <h3>Interconnected Wholeness</h3>
        <p>We recognize the fundamental interconnection of all beings and systems. What affects one affects all, and healing occurs through the recognition and restoration of these relationships. We reject the illusion of separation that lies at the root of many contemporary crises.</p>
      </div>
      <div class="principle-card">
        <h3>Cyclical Wisdom</h3>
        <p>Nature reveals that all things move in cycles — seasons, tides, lives. We embrace these natural rhythms rather than fighting against them, finding wisdom in times of both growth and fallowness, joy and grief, gathering and solitude.</p>
      </div>
      <div class="principle-card">
        <h3>Embodied Spirituality</h3>
        <p>Spiritual wisdom must be lived, not merely contemplated. Our bodies and our daily actions are sacred vessels through which our values are expressed. We seek integration rather than compartmentalization.</p>
      </div>
    </div>

    <blockquote class="pull-quote">
      "In the depths of the Great Lake and the heights of the ancient hills, in the growth of the forest and the shifting of the seasons, we find our teachers. In the crafting of meaningful ceremonies and the honoring of sacred thresholds, we find our purpose."
    </blockquote>
  </div>
</section>
```

- [ ] **Step 2: Append philosophy CSS to `assets/css/custom.css`**

```css
/* ── Philosophy ───────────────────────────────────── */
#philosophy { background: var(--bg-alt); }

.principles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.25rem;
  margin: 2rem 0;
}

.principle-card {
  background: var(--bg);
  border-left: 3px solid var(--accent);
  padding: 1.25rem 1.5rem;
}

.principle-card h3 {
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
}

.pull-quote {
  border-left: 3px solid var(--accent);
  padding: 1rem 1.75rem;
  font-style: italic;
  color: var(--text-muted);
  font-size: 1rem;
  line-height: 1.8;
  margin-top: 2.5rem;
}
```

- [ ] **Step 3: Verify in browser**

Reload and scroll to philosophy section. Expected: warm linen background, auto-fitting principle cards with copper left border (5 cards arrange ~3+2 on desktop), italic pull-quote with copper left rule below.

- [ ] **Step 4: Commit**

```bash
git add assets/css/custom.css index.html
git commit -m "feat: philosophy section — five principle cards with copper accents and pull-quote"
```

---

## Task 6: Ceremony Elements Section

**Files:**
- Modify: `index.html` (fill in elements content)
- Modify: `assets/css/custom.css` (append elements styles)

- [ ] **Step 1: Replace elements section in `index.html`**

Replace the `<section id="elements">` block with:

```html
<!-- Ceremony Elements -->
<section id="elements">
  <div class="container">
    <p class="eyebrow">What to Expect</p>
    <h2 class="section-heading">Ceremony Elements</h2>
    <p style="margin-bottom:2rem;">While each ceremony is uniquely crafted, here are elements I often incorporate based on your preferences and the spirit of the place:</p>

    <div class="elements-grid">
      <div class="element">
        <h3>Connection to Place</h3>
        <ul>
          <li><strong>Elemental Presence</strong> — water, stone, fire, or plants from the ceremony location</li>
          <li><strong>Seasonal Awareness</strong> — reflecting the particular energy of your ceremony's season</li>
          <li><strong>Location-Specific Rituals</strong> — symbolic actions that connect with your chosen setting</li>
        </ul>
      </div>
      <div class="element">
        <h3>Personal Significance</h3>
        <ul>
          <li><strong>Your Story</strong> — weaving elements of your journey into the ceremonial narrative</li>
          <li><strong>Meaningful Objects</strong> — incorporating heirlooms or significant items</li>
          <li><strong>Personal Vows</strong> — supporting you in crafting authentic expressions of commitment</li>
          <li><strong>Cultural Traditions</strong> — honoring heritage and family customs</li>
        </ul>
      </div>
      <div class="element">
        <h3>Symbolic Actions</h3>
        <ul>
          <li><strong>Unity Rituals</strong> — unique symbolic actions beyond common unity candles or sand</li>
          <li><strong>Threshold Markings</strong> — physical representations of crossing from one state to another</li>
          <li><strong>Community Involvement</strong> — ways for guests to actively participate</li>
          <li><strong>Blessing Rituals</strong> — invocations of support from community or natural elements</li>
        </ul>
      </div>
      <div class="element">
        <h3>Sacred Dimension</h3>
        <ul>
          <li><strong>Moments of Silence</strong> — creating space for deeper presence and awareness</li>
          <li><strong>Readings &amp; Wisdom</strong> — poetry, teachings, or passages that resonate</li>
          <li><strong>Music &amp; Sound</strong> — voice, instruments, or natural sounds to enhance the experience</li>
          <li><strong>Spiritual Elements</strong> — honoring your specific path or creating interfaith bridges</li>
        </ul>
      </div>
    </div>

    <div class="inclusive-box">
      <h3>Inclusive Approach</h3>
      <p>I honor all spiritual paths and create ceremonies that welcome people of diverse backgrounds, beliefs, and identities. Whether you identify with a specific spiritual tradition, hold a secular outlook, or embrace an eclectic approach, we work together to create a ceremony that feels authentically aligned with your values. I have extensive experience creating interfaith ceremonies that honor both traditions while maintaining cohesion and meaning.</p>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Append elements CSS to `assets/css/custom.css`**

```css
/* ── Ceremony Elements ────────────────────────────── */
#elements { background: var(--bg); }

.elements-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;
}

.element h3 {
  font-size: 1rem;
  margin-bottom: 0.75rem;
  padding-bottom: 0.4rem;
  border-bottom: 1px solid var(--accent);
  color: var(--dark);
}

.element ul {
  list-style: none;
  padding: 0;
}

.element li {
  padding: 0.35rem 0 0.35rem 1rem;
  font-size: 0.9rem;
  color: var(--text);
  position: relative;
  border-bottom: 1px solid rgba(180,160,130,0.2);
}

.element li:last-child { border-bottom: none; }

.element li::before {
  content: '·';
  position: absolute;
  left: 0;
  color: var(--accent);
  font-size: 1.2rem;
  line-height: 1.4;
}

.inclusive-box {
  background: var(--bg-alt);
  border: 1px solid #ddd0c0;
  padding: 1.75rem 2rem;
  border-radius: 2px;
}

.inclusive-box h3 {
  font-size: 1rem;
  margin-bottom: 0.75rem;
}
```

- [ ] **Step 3: Verify in browser**

Reload and scroll to elements section. Expected: 2×2 grid of element categories, each with a copper-underlined heading and bulleted list using copper mid-dots. Inclusive approach callout box in warm linen below.

- [ ] **Step 4: Commit**

```bash
git add assets/css/custom.css index.html
git commit -m "feat: ceremony elements section — 2x2 grid with inclusive approach callout"
```

---

## Task 7: Contact Section and Footer

**Files:**
- Modify: `index.html` (fill in contact + footer content)
- Modify: `assets/css/custom.css` (append contact + footer styles)

- [ ] **Step 1: Replace contact and footer in `index.html`**

Replace the contact section and footer with:

```html
<!-- Contact -->
<section id="contact" class="dark-bg">
  <div class="container" style="text-align:center; padding-top:5rem; padding-bottom:5rem;">
    <p class="eyebrow contact-eyebrow">Connect</p>
    <h2 class="section-heading contact-heading">Begin Your Journey</h2>
    <p class="contact-sub">We welcome your questions and look forward to hearing about your vision.<br>Peak season books 6–12 months in advance — reach out early.</p>
    <a href="mailto:ceremonies@cuisca.org" class="email-link">ceremonies@cuisca.org</a>
  </div>
</section>

<!-- Footer -->
<footer>
  <p>&copy; CuISCA 2025 &middot; Copper Island Shifting Currents Alliance</p>
</footer>
```

- [ ] **Step 2: Append contact and footer CSS to `assets/css/custom.css`**

```css
/* ── Contact ──────────────────────────────────────── */
#contact { background: var(--dark); }

.contact-eyebrow { color: var(--accent); }

.contact-heading {
  color: var(--bg);
  margin-bottom: 1rem;
}

.contact-sub {
  color: var(--text-light);
  font-size: 0.95rem;
  line-height: 1.8;
  margin-bottom: 2rem;
}

.email-link {
  display: inline-block;
  color: var(--text-light);
  text-decoration: none;
  font-size: 1.15rem;
  border-bottom: 1px solid var(--accent);
  padding-bottom: 0.15rem;
  transition: color 0.2s, border-color 0.2s;
}

.email-link:hover {
  color: var(--accent);
  border-color: var(--accent);
}

/* ── Footer ───────────────────────────────────────── */
footer {
  background: var(--dark-deep);
  padding: 1.25rem 2rem;
  text-align: center;
  color: var(--text-muted);
  font-size: 0.75rem;
  letter-spacing: 0.05em;
}
```

- [ ] **Step 3: Verify in browser**

Reload and scroll to bottom. Expected: dark section matching hero tone, "Connect" eyebrow in copper, heading in cream, email link with copper underline that brightens on hover. Footer is very dark with muted copyright text.

- [ ] **Step 4: Commit**

```bash
git add assets/css/custom.css index.html
git commit -m "feat: contact section and footer — email link, dark bookend"
```

---

## Task 8: Mobile Responsiveness

**Files:**
- Modify: `assets/css/custom.css` (append media queries)

- [ ] **Step 1: Append responsive CSS to `assets/css/custom.css`**

```css
/* ── Responsive ───────────────────────────────────── */
@media (max-width: 768px) {
  /* Nav — hide text links on mobile, keep logo + CTA */
  .nav-links { display: none; }
  #site-nav { padding: 0 1rem; }

  /* Hero */
  .hero-tagline br { display: none; }

  /* Ceremonies */
  .ceremonies-intro {
    flex-direction: column;
    gap: 1.5rem;
  }
  .officiant-photo {
    width: 100%;
    max-width: 260px;
    margin: 0 auto;
  }
  .approach-cards { grid-template-columns: 1fr; }

  /* Philosophy */
  .principles-grid { grid-template-columns: 1fr; }

  /* Elements */
  .elements-grid { grid-template-columns: 1fr; }

  /* Container padding */
  .container { padding: 3.5rem 1.25rem; }
}

@media (max-width: 480px) {
  #hero h1 { font-size: clamp(2.5rem, 14vw, 4rem); }
  .hero-tagline { font-size: 0.95rem; }
  .section-heading { font-size: 1.6rem; }
}
```

- [ ] **Step 2: Verify on mobile viewport**

In Chrome DevTools (or Firefox), open Responsive Design Mode (`Cmd+Shift+M` / `F12 → toggle device toolbar`). Set width to 375px (iPhone SE).

Expected:
- Hero takes full height, heading readable, tagline wraps naturally
- Nav: logo left, "Begin Your Journey" button right, no text links in between
- Ceremonies: photo stacks above/below text, cards stack single column
- Principles: single column cards
- Elements: single column, full-width

- [ ] **Step 3: Commit**

```bash
git add assets/css/custom.css
git commit -m "feat: responsive layout — mobile-first adjustments for nav, grid, and typography"
```

---

## Task 9: Polish and Final Verification

**Files:**
- Modify: `assets/css/custom.css` (hover states, minor refinements)
- Modify: `index.html` (add `.gitignore` entry for `.superpowers/` if not already there)

- [ ] **Step 1: Check `.gitignore` includes `.superpowers/`**

Open `.gitignore` and verify `.superpowers/` is listed. If it isn't, add it:

```
.superpowers/
```

- [ ] **Step 2: Verify all anchor links scroll correctly**

Click each nav link (after scrolling past hero so nav is visible): Ceremonies, Philosophy, Elements, Connect. Each should smooth-scroll to the correct section. The "Begin Your Journey" nav CTA should scroll to `#contact`.

Click "Discover Our Path" in the hero. Should scroll to `#ceremonies`.

Click the email link in contact. Should open the user's mail client addressed to `ceremonies@cuisca.org`.

- [ ] **Step 3: Add selection color to reinforce the palette**

Append to `assets/css/custom.css`:

```css
/* ── Selection ────────────────────────────────────── */
::selection {
  background: var(--accent);
  color: var(--dark);
}
```

- [ ] **Step 4: Full visual pass — scroll the entire page**

Check for:
- [ ] No unstyled text or placeholder copy remaining
- [ ] Consistent spacing between sections (each `.container` has equal top/bottom padding)
- [ ] Images load correctly (`banner.jpg` in hero, `officiant.png` in ceremonies)
- [ ] No horizontal scroll on desktop at 1280px width
- [ ] No horizontal scroll on mobile at 375px width
- [ ] Footer text is readable (not too dark)
- [ ] Pull quote in philosophy section is visually distinct

- [ ] **Step 5: Final commit**

```bash
git add assets/css/custom.css .gitignore
git commit -m "feat: polish — selection color, final visual verification pass"
```

---

## Self-Review

**Spec coverage check:**

| Spec requirement | Covered by task |
|---|---|
| Custom CSS from scratch | Task 1 |
| Earthy & warm palette with CSS variables | Task 1 |
| Sticky nav fades in after hero | Task 3 |
| Nav links: Ceremonies, Philosophy, Elements, Connect | Task 3 |
| Nav CTA "Begin Your Journey" → #contact | Task 3 |
| Hero full-viewport with banner.jpg | Task 2 |
| Ceremonies: Adam bio + 3 approach cards | Task 4 |
| officiant.png beside intro text | Task 4 |
| Philosophy: 5 principle cards with copper left border | Task 5 |
| Pull-quote from index.html | Task 5 |
| Ceremony Elements 2×2 grid | Task 6 |
| Inclusive Approach callout box | Task 6 |
| Contact: email link only, no form | Task 7 |
| Footer: © CuISCA 2025 | Task 7 |
| Mobile responsive | Task 8 |
| pantswatch.html untouched | Not modified — confirmed by file map |
| No land acknowledgment language | Not included — confirmed by content review |
| ceremonies-banner.jpg not referenced | Confirmed — banner.jpg used for hero only |

**No placeholders or TBDs found.**

**Type/naming consistency:** CSS class names used consistently across tasks — `.eyebrow`, `.section-heading`, `.section-sub`, `.container`, `.alt-bg`, `.dark-bg`, `.btn-outline`, `.approach-cards`, `.approach-card`, `.principles-grid`, `.principle-card`, `.pull-quote`, `.elements-grid`, `.element`, `.inclusive-box`, `.email-link`, `.officiant-photo`.
