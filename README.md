# Mohammad Nouman-Ud-Din — portfolio

Personal portfolio site. React + Vite + Tailwind CSS, no backend.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the production build locally
```

## Viewing it on your computer

Double-clicking a file in `dist/` will **not** work — this is a React app, so the
browser has to be served the files over http, not opened off the disk. Use one
of these instead:

```bash
npm run dev
```

That serves it at http://localhost:5173 (or the next free port) and reloads as
you edit. To check the production build the way a visitor would get it:

```bash
npm run build
npm run preview
```

Once it's deployed, the live URL is the answer — no commands needed.

## Where to change things

| What | File |
| --- | --- |
| Every project's copy, media paths and ordering | `src/data/projects.js` |
| External URLs (live app links, socials) + phone/email | `src/data/links.js` |
| Colours, fonts, motion easing | `src/index.css` (the `@theme` block) |
| Page shells | `src/pages/` |
| Nav, footer, reusable bits | `src/components/` |

## Adding the real media

Nothing is hard-coded in components — each project in `src/data/projects.js`
points at a path under `public/`. Until a file exists at that path, the page
renders a labelled placeholder showing the expected filename, so the site is
fully navigable before the media lands. **Drop the file in at the same path and
it appears — no code change.**

```
public/
  images/
    hero.jpg                      portrait, hero section (4:5) — still to add

    glimpse-skincare.jpg          the five homepage circles — square crops
    glimpse-property.jpg
    glimpse-backpack.jpg
    glimpse-hospitality.jpg
    glimpse-scholhub.jpg

    case-skincare-hero.jpg        case study heroes — 16:9, or 2:3 where the
    case-property-hero.jpg        project sets `hero.ratio: 'tall'`
    case-backpack-hero.jpg
    case-hospitality-hero.jpg
    case-scholhub-hero.jpg

    case-skincare-before.jpg      skincare reference → final — square
    case-skincare-after.jpg

    case-skincare-01.jpg … -06.jpg   portrait galleries — 4:5
    case-backpack-01.jpg … -06.jpg
    case-property-01.jpg … -08.jpg   landscape gallery — 3:2

    case-skincare-ref-product.jpg    reference sheets — never cropped,
    case-skincare-ref-set.jpg        each declares its own `ratio`
    case-backpack-ref-product.jpg
    case-backpack-ref-model.jpg
    case-backpack-ref-set.jpg
  video/
    skincare-ad.mp4               the finished films (poster frames come
    backpack-ad.mp4               from the images above)
    property-walkthrough.mp4
```

To add, remove or reorder gallery images, edit that project's `gallery` array.
Set `galleryRatio: 'landscape'` on a project to show its gallery as 3:2 frames
two-up (interiors and architecture) instead of the default 4:5 three-up.
A project's `referenceSheets` array renders as its own labelled section — each
entry takes a `label`, a `caption` and a `ratio` (`16/9`, `4/3` or `3/4`), and
the image is shown whole rather than cropped. A `video` entry appears at the top
of the gallery.

The films are 27–52 MB each and load only when played (`preload="metadata"`).
If you want the pages lighter, re-encode them at a lower bitrate before
deploying — ffmpeg isn't installed on this machine.

## Adding the live links

Both live project links are set in `src/data/links.js`:

```js
suedeStone: 'https://suede-stone-designs.vercel.app/',
scholhub:   'https://papertrail-web-app.vercel.app/',
```

Socials start at `null`. A `null` link is hidden — the Contact page drops the
socials row entirely, and a technical case study shows a small "live link to be
added" note in place of its button. Set a URL and it appears:

```js
linkedin: 'https://www.linkedin.com/in/…',
```

## Design system

Eight colour tokens and two typefaces, all defined once in `src/index.css`:

| Token | Value | Used for |
| --- | --- | --- |
| `--color-bg` | `#F7F3EC` | page background |
| `--color-text` | `#2B2420` | body copy |
| `--color-primary` | `#4A2545` | headings, emphasis |
| `--color-accent` | `#A9793E` | rules, borders, non-text bronze |
| `--color-accent-deep` | `#8A5F2C` | bronze **text** and filled buttons |
| `--color-accent-light` | `#C08A4E` | secondary highlights |
| `--color-surface` | `#FFFFFF` | cards |
| `--color-border` | `#E4DDD0` | hairlines |

`--color-accent-deep` exists for contrast: the brief's bronze on cream is
3.2:1, which passes AA for large text and UI but not for body copy. The deeper
bronze reaches 5.1:1 on cream and 5.6:1 behind white button text, so anything
bronze and *readable* uses it, while the original bronze stays for rules,
borders and icons. Plum on cream is 11.6:1, charcoal on cream 13.9:1.

Type: **Fraunces** for headings, **Inter** for body, both from Google Fonts.

## Motion

One signature moment per page, all of it opt-out under
`prefers-reduced-motion: reduce`:

- Sections fade and slide up on entry, children staggered ~80ms
  (`src/hooks/useInView.js`, `src/components/Reveal.jsx`) — Intersection
  Observer, no animation library.
- Homepage: the five glimpse circles sit at uneven heights and drift slightly
  slower than the page (`src/hooks/useParallax.js`), rAF-throttled.
- Cards and circles lift ~3–4% with a soft shadow on hover, 200ms; the glimpse
  circles also open a bronze ring.
- Every gallery and reference sheet opens in a full-screen viewer
  (`src/components/Lightbox.jsx`) — arrow keys step through, Escape closes, and
  the page behind it is frozen without the layout shifting.
- Case studies carry a hairline bronze scroll-progress rule
  (`src/components/ScrollProgress.jsx`).
- Each route fades up on arrival (`.page-enter`).

## Deploying

Pushing to `main` builds and publishes the site to GitHub Pages automatically
(`.github/workflows/deploy.yml`). Pages serves from a subfolder, so the workflow
builds with `VITE_BASE=/portfolio-website/` and the router picks that up through
`import.meta.env.BASE_URL`. It also copies `index.html` to `404.html`, because
Pages has no rewrite rules and a direct hit on `/work/<slug>` would otherwise
404.

Everywhere else the base stays `/` with no configuration:

- **Vercel** — import the repo; SPA rewrites are automatic for Vite projects.
- **Netlify** — already handled by `public/_redirects`.

Build command `npm run build`, publish directory `dist`.

The three films are ~129 MB of the repository. If clones start to feel heavy,
move them to Git LFS or host them separately and point the `video` entries in
`src/data/projects.js` at the new URLs.
