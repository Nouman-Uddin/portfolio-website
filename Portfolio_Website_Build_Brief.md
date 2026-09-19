# Portfolio website — build brief for Claude Code

> Paste everything below as your first message in Claude Code. It contains the full
> design spec, site structure, and copy needed to generate the complete website.
> Placeholders for images, video, and live links are marked `[TODO: ...]` — swap
> those in once your final assets are ready.

## 1. Project overview

Build a personal portfolio website for **Mohammad Nouman-Ud-din**, an MBA graduate
who creates AI-generated branded content (photo/video) and also builds the websites,
apps, and tools that support that work. The site should lead with the **creative AI
work** as the primary identity, with the **technical AI work** as a strong supporting
layer — not two separate identities.

Site title/role: **AI Creative Technologist**

Tone of the whole site: elegant, modern, minimalist, with dynamic but restrained
motion. Whitespace and typography carry the "premium" feel — not color or clutter.

## 2. Tech stack

- React + Vite
- Tailwind CSS for styling
- React Router for multi-page navigation (Home, individual case study pages, Contact)
- Icons: lucide-react (clean, outline-style icons)
- Simple scroll-triggered fade/slide-in animations (Intersection Observer or a
  lightweight library like `framer-motion` — keep it minimal, no heavy dependencies)
- Fully responsive (mobile, tablet, desktop)
- No backend needed — everything is static content

## 3. Design system

### Colors (use as CSS variables / Tailwind theme extension so they're easy to tweak)

```
--color-bg: #F7F3EC        /* warm cream background */
--color-text: #2B2420      /* near-black warm charcoal, primary text */
--color-primary: #4A2545   /* deep plum — headings, key UI elements */
--color-accent: #A9793E    /* warm bronze — the ONE accent color: buttons, links, hover states */
--color-accent-light: #C08A4E /* lighter gold-bronze — secondary highlights */
--color-surface: #FFFFFF   /* card backgrounds */
--color-border: #E4DDD0    /* subtle hairline borders */
```

Use the bronze accent sparingly and consistently — it's what makes the site read as
intentional rather than busy. Plum is for headings/emphasis, not for large fills.

### Typography

- Headings: an elegant modern serif — **Fraunces** or **Cormorant Garamond** (Google
  Fonts). Gives a touch of refinement that echoes the "royalty" feel of the brand.
- Body text: a clean modern sans — **Inter** or **Manrope** (Google Fonts).
- Generous line-height on body copy (1.6–1.7). Generous section spacing (don't
  cram sections together — whitespace is doing a lot of the "elegant" work here).

### Motion (dynamic but minimal — pick these, don't stack more on top)

- Sections fade + slide up slightly as they scroll into view (stagger children by
  ~80ms for a subtle cascade effect).
- Project cards and work-glimpse circles: gentle scale-up (1.03–1.05) + soft shadow
  on hover, smooth 200ms transition.
- Work-glimpse circles on the homepage: slightly staggered vertical offsets (not a
  neat row) with a very subtle parallax drift on scroll (they move a touch slower
  than the page).
- Nav "Portfolio" dropdown: smooth fade + slight slide-down on open/close.
- No more than one "signature" motion moment per page — resist adding extra effects.

## 4. Site structure & navigation

Top navigation (sticky, present on every page): `Home` · `Portfolio` (dropdown) · `Contact`

**Portfolio dropdown**, two labeled columns:

- **Creative work**
  - Skincare product brand
  - Property walkthrough
  - Backpack campaign
- **Technical work**
  - Personal portfolio website
  - Research aggregator web app
  - AI business tools & automation

Each item links to its own dedicated case study page.

## 5. Page content

### Home page

**Hero section**
- Photo: `[TODO: insert edited portrait — circular or rounded-square crop]`
- Name: Mohammad Nouman-Ud-din
- Title: AI Creative Technologist
- One-line tagline: "I use AI to create branded content — and build the tools that bring it to life."

**Background section** (short bio, creative-first framing):

> I'm an MBA graduate (Magna Cum Laude) who uses AI to create branded content and
> build the tools that bring it to life. Over the past three years I've directed
> AI-generated photography and video for real estate — including a luxury property
> walkthrough for Golden Vision Real Estate — while also building the websites, web
> apps, and automations that support that work, using Claude and Python. My
> background in real estate sales and business development gives me a practical,
> client-facing sense of what actually moves a brand, paired with the technical
> range to build it myself.

**Work glimpses** — 6 staggered circular thumbnails (3 creative, 3 technical),
each linking to its case study page:
`[TODO: insert one representative image per project — see list in section 4]`

**Contact strip** (footer, present on every page): phone + email as clickable
`tel:` / `mailto:` pill buttons, bronze accent.

---

### Creative work — case study pages

Each case study page follows this structure: hero image/video → brief → tools &
process → gallery → next project link. The Skincare project additionally gets a
before/after comparison block.

**1. Skincare product brand**
- Hero: `[TODO: best final image from the campaign]`
- Brief: "Directed and produced AI-generated branded product photography and ad
  content — including a full Instagram brand grid — for a minimalist skincare
  concept, from creative direction and prompt engineering through final edit."
- Tools & process: Google Flow (image & video generation), CapCut (edit), prompt engineering
- Before → after: `[TODO: raw/reference product shot]` → `[TODO: final AI-generated image]`
- Gallery: `[TODO: 3–6 additional shots/crops from the brand grid]`
- Links out to: Property walkthrough

**2. Property walkthrough**
- Hero: `[TODO: video thumbnail or best still from the walkthrough]`
- Brief: "Directed and produced an AI-generated luxury property walkthrough video
  for Golden Vision Real Estate, used to drive buyer and tenant engagement across
  Al Hamra Village, Mina Al Arab, and Al Marjan Island listings — plus supporting
  short-form video content for Instagram and TikTok."
- Tools & process: Google Flow (AI video generation), CapCut
- Gallery: `[TODO: video embed + a few still frames]`
- Links out to: Backpack campaign

**3. Backpack campaign**
- Hero: `[TODO: best final ad image]`
- Brief: "Directed and produced AI-generated branded product photography and ad
  content for a backpack concept campaign, from creative direction through final
  edit."
- Tools & process: Google Flow, CapCut
- Gallery: `[TODO: 3–4 campaign images]`
- Links out to: Skincare product brand (loop back to first)

---

### Technical work — case study pages

Each page: hero/screenshot → brief → tech stack → key features → live link → next project.

**1. Personal portfolio website**
- Hero: `[TODO: screenshot of this very site]`
- Brief: "Designed and built this portfolio using Claude AI — from information
  architecture and copy through the final responsive build."
- Tech stack: React, Vite, Tailwind CSS, built with Claude AI
- Live link: `[TODO: this site's own URL, once deployed]`
- Links out to: Research aggregator web app

**2. Research aggregator web app**
- Hero: `[TODO: screenshot of the app]`
- Brief: "Built a Python web app, with Claude AI assistance, that gives university
  students free access to academic papers — from concept through deployment."
- Tech stack: Python, Claude AI
- Live link: `[TODO: app URL]` — *(also confirm the app's actual name to use as the page title)*
- Links out to: AI business tools & automation

**3. AI business tools & automation**
- Hero: `[TODO: screenshot of the cost calculator or chatbot]`
- Brief: "Designed and shipped lightweight AI-coded business tools — including a
  real estate cost calculator covering security deposit, agency commission, and
  VAT — plus website chatbots and Claude-AI-powered internal workflow automations,
  built for rapid prototyping without a dedicated dev team."
- Tech stack: Claude AI, Python
- Live link: `[TODO: if any tool is publicly viewable]`
- Links out to: Personal portfolio website (loop back to first)

---

### Contact page

- Phone: +971 50 543 5395 → `tel:+971505435395`
- Email: uddinnauman@gmail.com → `mailto:uddinnauman@gmail.com`
- Present both as large, clickable pill buttons (bronze accent), not a form.
- `[TODO: optional — add LinkedIn or other social links here if desired]`

## 6. Asset organization (for when real media is added)

Set up a clear folder structure so images/videos are trivial to swap in later:

```
/public
  /images
    hero.jpg
    glimpse-skincare.jpg
    glimpse-property.jpg
    glimpse-backpack.jpg
    glimpse-portfolio-site.jpg
    glimpse-research-app.jpg
    glimpse-business-tools.jpg
    case-skincare-hero.jpg
    case-skincare-before.jpg
    case-skincare-after.jpg
    ...(same pattern per project)
  /video
    property-walkthrough.mp4
```

Also create a single `src/data/links.js` (or similar) config file holding every
external URL (portfolio site link, web app link, socials) in one place, so they're
easy to update without touching component code.

## 7. Build notes

- Use placeholder colored blocks (with clear alt text noting what belongs there)
  anywhere an image/video is marked `[TODO]`, so the site is fully functional and
  navigable before final media is added.
- Keep the whole build accessible: proper alt text, semantic HTML, sufficient
  color contrast (check plum-on-cream and bronze-on-cream both pass AA).
- Confirm the final structure works cleanly on mobile — the nav dropdown especially
  needs a sensible mobile pattern (e.g. collapses into an accordion in a mobile menu).
