import { Navigate, useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ExternalLink, MoveRight, Expand } from 'lucide-react'
import { getProject, kindLabel } from '../data/projects'
import { links } from '../data/links'
import { Media, MediaVideo } from '../components/Media'
import Reveal from '../components/Reveal'
import { Section } from '../components/Section'
import Pill from '../components/Pill'
import Lightbox, { useLightbox } from '../components/Lightbox'
import ScrollProgress from '../components/ScrollProgress'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

// Reference sheets keep their own proportions — written out in full so the
// Tailwind scanner sees each class.
const sheetAspect = {
  '16/9': 'aspect-[16/9]',
  '4/3': 'aspect-[4/3]',
  '3/4': 'aspect-[3/4]',
}

// A hero keeps the proportions of what it is: a phone-shaped product frame, a
// screenshot at its own aspect, or the default landscape plate.
const heroShape = {
  tall: 'mx-auto aspect-[2/3] max-w-[30rem]',
  wide: 'aspect-[1894/872]',
}

// Interiors want a landscape frame; product and fashion frames want a portrait one.
// Social cuts are shot 9:16. Forcing them into a 16:9 plate crops the product
// out of its own advert, so each film declares its shape and gets a frame that
// fits it.
const videoShape = {
  vertical: 'mx-auto aspect-[9/16] w-full max-w-[22rem]',
  wide: 'aspect-video w-full',
}

const galleryLayout = {
  portrait: { grid: 'grid-cols-2 md:grid-cols-3', aspect: 'aspect-[4/5]' },
  landscape: { grid: 'grid-cols-1 sm:grid-cols-2', aspect: 'aspect-[3/2]' },
}

export default function CaseStudy() {
  const { slug } = useParams()
  const project = getProject(slug)

  useDocumentTitle(project?.title, project?.brief)

  if (!project) return <Navigate to="/" replace />

  const next = getProject(project.next)
  const liveUrl = project.liveKey ? links[project.liveKey] : null
  const heroClass = heroShape[project.hero.ratio] ?? 'aspect-[16/9]'
  const layout = galleryLayout[project.galleryRatio ?? 'portrait']
  const viewerItems = [...(project.gallery ?? []), ...(project.referenceSheets ?? [])]
  const { lightbox, open } = useLightbox(viewerItems)

  return (
    <article>
      <ScrollProgress />
      {/* ---------- Header ---------- */}
      <Section className="!pb-10 !pt-12 md:!pb-14 md:!pt-16">
        <Reveal>
          <Link
            to="/#work"
            className="nudge-back inline-flex items-center gap-2 text-[0.8rem] text-text/60 transition-colors duration-200 hover:text-accent-deep"
          >
            <ArrowLeft aria-hidden="true" strokeWidth={1.75} className="h-3.5 w-3.5" />
            All work
          </Link>
        </Reveal>

        <div className="mt-8 grid gap-8 md:grid-cols-[1.4fr_0.6fr] md:items-end md:gap-16">
          <div>
            <Reveal as="p" className="text-[0.63rem] uppercase tracking-[0.22em] text-accent-deep">
              {kindLabel[project.kind]}
            </Reveal>
            <Reveal
              as="h1"
              delay={80}
              className="mt-4 font-serif text-[2.3rem] leading-[1.08] sm:text-[3rem] md:text-[3.5rem]"
            >
              {project.title}
            </Reveal>
            <Reveal as="p" delay={160} className="mt-5 max-w-[42ch] text-[1.05rem] text-text/75">
              {project.tagline}
            </Reveal>
          </div>

          <Reveal delay={200} className="md:text-right">
            <dl className="space-y-4 border-t border-border pt-5 md:border-t-0 md:pt-0">
              <div>
                <dt className="text-[0.6rem] uppercase tracking-[0.2em] text-text/50">Year</dt>
                <dd className="mt-1 text-sm text-text/85">{project.year}</dd>
              </div>
              <div>
                <dt className="text-[0.6rem] uppercase tracking-[0.2em] text-text/50">Role</dt>
                <dd className="mt-1 text-sm text-text/85">{project.role}</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </Section>

      {/* ---------- Hero media ---------- */}
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <Media
            src={project.hero.src}
            alt={project.hero.alt}
            sizeHint={project.hero.ratio === 'tall' ? 'Portrait' : 'Landscape'}
            className={`w-full rounded-[var(--radius-lg)] border border-border shadow-[0_30px_70px_-45px_rgba(43,36,32,0.6)] ${heroClass}`}
          />
        </Reveal>
      </div>

      {/* ---------- Brief + process ---------- */}
      <Section className="md:!py-24">
        <div className="grid gap-12 md:grid-cols-[1.25fr_0.75fr] md:gap-20">
          <Reveal>
            <p className="text-[0.63rem] uppercase tracking-[0.22em] text-accent-deep">The brief</p>
            <p className="mt-5 font-serif text-[1.5rem] leading-[1.45] text-primary md:text-[1.85rem]">
              {project.brief}
            </p>
          </Reveal>

          <Reveal delay={120}>
            {project.tools ? (
              <>
                <h2 className="text-[0.63rem] uppercase tracking-[0.22em] text-accent-deep">
                  Tools &amp; process
                </h2>
                <ul className="mt-5 divide-y divide-border border-y border-border">
                  {project.tools.map((tool) => (
                    <li key={tool.name} className="py-3.5">
                      <p className="text-[0.95rem] text-primary">{tool.name}</p>
                      <p className="text-[0.82rem] text-text/65">{tool.note}</p>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}

            {project.stack ? (
              <>
                <h2 className="text-[0.63rem] uppercase tracking-[0.22em] text-accent-deep">
                  Tech stack
                </h2>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-[0.8rem] text-text/80"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            ) : null}

            {liveUrl ? (
              <Pill
                href={liveUrl}
                icon={ExternalLink}
                variant="outline"
                target="_blank"
                rel="noreferrer noopener"
                className="mt-7"
              >
                View it live
              </Pill>
            ) : project.liveKey ? (
              <p className="mt-7 rounded-[var(--radius-sm)] border border-dashed border-accent/40 px-4 py-3 text-[0.78rem] text-text/60">
                Live link to be added — set <code className="font-mono">{project.liveKey}</code> in{' '}
                <code className="font-mono">src/data/links.js</code>.
              </p>
            ) : null}
          </Reveal>
        </div>
      </Section>

      {/* ---------- Key features (technical) ---------- */}
      {project.features ? (
        <div className="border-y border-border bg-bg-deep">
          <Section className="md:!py-24">
            <Reveal as="h2" className="font-serif text-[1.75rem] md:text-[2.2rem]">
              Key features
            </Reveal>
            <ul className="mt-10 grid gap-x-12 gap-y-7 md:grid-cols-2">
              {project.features.map((feature, index) => (
                <Reveal as="li" key={feature} delay={index * 80} className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  />
                  <span className="text-[0.98rem] leading-relaxed text-text/85">{feature}</span>
                </Reveal>
              ))}
            </ul>
          </Section>
        </div>
      ) : null}

      {/* ---------- Before / after ---------- */}
      {project.beforeAfter ? (
        <Section className="md:!py-24">
          <Reveal as="h2" className="font-serif text-[1.75rem] md:text-[2.2rem]">
            Reference → final
          </Reveal>
          <p className="mt-4 max-w-[60ch] text-[0.98rem] leading-relaxed text-text/75">
            {project.beforeAfter.intro}
          </p>

          <div className="mt-10 grid items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
            <BeforeAfterPane {...project.beforeAfter.before} />
            <MoveRight
              aria-hidden="true"
              strokeWidth={1.25}
              className="mx-auto hidden h-7 w-7 text-accent md:block"
            />
            <BeforeAfterPane {...project.beforeAfter.after} emphasised />
          </div>
        </Section>
      ) : null}

      {/* ---------- Gallery ---------- */}
      {project.video || project.gallery ? (
        <Section className="!pt-4 md:!pt-6">
          <Reveal as="h2" className="font-serif text-[1.75rem] md:text-[2.2rem]">
            Gallery
          </Reveal>

          {project.video ? (
            <Reveal delay={80} className="mt-10">
              <MediaVideo
                src={project.video.src}
                poster={project.video.poster}
                alt={project.video.alt}
                className={`rounded-[var(--radius-md)] border border-border ${
                  videoShape[project.video.ratio] ?? videoShape.wide
                }`}
              />
            </Reveal>
          ) : null}

          {project.gallery ? (
            <div className={`mt-10 grid gap-4 md:gap-6 ${layout.grid}`}>
              {project.gallery.map((item, index) => (
                <Reveal key={item.src} delay={index * 80}>
                  <button
                    type="button"
                    onClick={() => open(index)}
                    aria-label={`View larger: ${item.alt}`}
                    className="group relative block w-full cursor-zoom-in overflow-hidden rounded-[var(--radius-sm)] border border-border transition-all duration-200 ease-out hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_22px_46px_-26px_rgba(43,36,32,0.65)]"
                  >
                    <Media
                      src={item.src}
                      alt={item.alt}
                      sizeHint={project.galleryRatio === 'landscape' ? 'Landscape' : 'Portrait'}
                      className={`w-full ${layout.aspect}`}
                      imgClassName="transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/10"
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute bottom-3 right-3 flex h-8 w-8 translate-y-1 items-center justify-center rounded-full bg-bg/90 text-accent-deep opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      <Expand strokeWidth={1.75} className="h-3.5 w-3.5" />
                    </span>
                  </button>
                </Reveal>
              ))}
            </div>
          ) : null}
        </Section>
      ) : null}

      {/* ---------- Reference sheets ---------- */}
      {project.referenceSheets ? (
        <div className="border-y border-border bg-bg-deep">
          <Section className="md:!py-24">
            <Reveal as="h2" className="font-serif text-[1.75rem] md:text-[2.2rem]">
              Reference sheets
            </Reveal>
            <p className="mt-4 max-w-[58ch] text-[0.98rem] leading-relaxed text-text/70">
              The work before the work. Each sheet fixes one variable — product, cast, set — so that
              every frame in the campaign belongs to the same world.
            </p>

            <div className="mt-12 space-y-14 md:mt-16 md:space-y-16">
              {project.referenceSheets.map((sheet, index) => (
                <Reveal key={sheet.src} delay={index * 80}>
                  <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between">
                    <h3 className="font-serif text-[1.3rem] md:text-[1.5rem]">{sheet.label}</h3>
                    <p className="max-w-[46ch] text-[0.88rem] leading-relaxed text-text/65">
                      {sheet.caption}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => open((project.gallery?.length ?? 0) + index)}
                    aria-label={`View larger: ${sheet.alt}`}
                    className="mt-5 block w-full cursor-zoom-in rounded-[var(--radius-sm)] border border-border bg-bg transition-all duration-200 hover:border-accent/50 hover:shadow-[0_22px_46px_-30px_rgba(43,36,32,0.6)]"
                  >
                    <Media
                      src={sheet.src}
                      alt={sheet.alt}
                      sizeHint="Sheet"
                      fit="contain"
                      className={`w-full rounded-[var(--radius-sm)] ${sheetAspect[sheet.ratio] ?? sheetAspect['16/9']}`}
                    />
                  </button>
                </Reveal>
              ))}
            </div>
          </Section>
        </div>
      ) : null}

      {/* ---------- Next project ---------- */}
      {next ? (
        <div className="border-t border-border">
          <Section className="md:!py-20">
            <Reveal>
              <Link to={`/work/${next.slug}`} className="nudge group flex flex-col gap-4">
                <span className="text-[0.63rem] uppercase tracking-[0.22em] text-accent-deep">
                  Next project — {kindLabel[next.kind]}
                </span>
                <span className="flex items-center gap-4 font-serif text-[2rem] leading-tight text-primary transition-colors duration-200 group-hover:text-accent-deep md:text-[2.8rem]">
                  {next.title}
                  <ArrowRight
                    aria-hidden="true"
                    strokeWidth={1.25}
                    className="h-7 w-7 shrink-0 md:h-9 md:w-9"
                  />
                </span>
              </Link>
            </Reveal>
          </Section>
        </div>
      ) : null}
      <Lightbox {...lightbox} />
    </article>
  )
}

function BeforeAfterPane({ src, alt, label, emphasised = false }) {
  return (
    <Reveal delay={emphasised ? 120 : 0}>
      <p className="mb-3 text-[0.6rem] uppercase tracking-[0.2em] text-text/55">{label}</p>
      <Media
        src={src}
        alt={alt}
        sizeHint="Square"
        className={`aspect-square w-full rounded-[var(--radius-sm)] border ${
          emphasised ? 'border-accent/60 shadow-[0_20px_44px_-28px_rgba(43,36,32,0.6)]' : 'border-border'
        }`}
      />
    </Reveal>
  )
}
