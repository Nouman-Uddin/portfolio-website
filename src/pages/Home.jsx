import { Link } from 'react-router-dom'
import { ArrowDown, ArrowUpRight, ChevronDown, Camera, Code2 } from 'lucide-react'
import Reveal from '../components/Reveal'
import WorkGlimpses from '../components/WorkGlimpses'
import { Section, SectionHeading } from '../components/Section'
import Pill from '../components/Pill'
import Glow from '../components/Glow'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

const approach = [
  {
    numeral: '01',
    icon: Camera,
    label: 'Creative AI',
    title: 'Directing a camera that doesn’t exist.',
    body:
      'I art-direct AI-generated photography and video — writing and refining prompts until the light, surface and framing hold up as a campaign, generating in Google Flow, then cutting in CapCut. The model is the camera and the crew; the direction stays mine.',
    points: [
      'Product photography and ad creative',
      'Full Instagram brand grids, shot consistently',
      'Long-form walkthrough film and short-form social cuts',
    ],
  },
  {
    numeral: '02',
    icon: Code2,
    label: 'Technical AI',
    title: 'Building with AI as the engineering partner.',
    body:
      'I build the software around the work with Claude AI — marketing sites, web apps and internal tools, taken from information architecture and copy through to a deployed product, usually in days rather than weeks in a dev queue.',
    points: [
      'Responsive marketing sites and web apps',
      'Python services and API integrations',
      'Workflow automations that remove repetitive admin',
    ],
  },
]

const disciplines = [
  'AI photography & video',
  'Creative direction',
  'Web & app builds',
  'Workflow automation',
]

const stats = [
  { figure: '3 yrs', caption: 'directing AI work' },
  { figure: '5', caption: 'projects shipped' },
  { figure: 'MBA', caption: 'magna cum laude' },
]

export default function Home() {
  useDocumentTitle(
    null,
    'Mohammad Nouman-Ud-Din, AI Creative Technologist. AI-generated branded photography and video, plus the websites, apps and automations that bring it to life.',
  )

  return (
    <>
      {/* ---------- Hero ----------
          One continuous dark backdrop now: the photo over #1A0E1F, which is the
          same near-black violet the name gradient starts from, so any area the
          photo does not cover reads as part of the same wall. The content is
          full-bleed rather than centred in the page container, so the name
          stays pinned to the left edge and clear of his face at every width. */}
      <section className="grain relative isolate flex min-h-[92vh] flex-col overflow-hidden bg-[#1A0E1F]">
        <img
          src="/images/hero.jpg"
          alt="Mohammad Nouman-Ud-Din"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: '20% center' }}
        />
        {/* Narrow screens crop straight in on the face, so the type needs its
            own ground to sit on. */}
        <div aria-hidden="true" className="absolute inset-0 bg-[#1A0E1F]/70 lg:hidden" />

        <div className="relative flex w-full flex-1 flex-col px-6 pb-10 pt-28 md:px-10 md:pb-14 md:pt-36 lg:px-16">
          <div className="flex flex-1 flex-col justify-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
            <Reveal
              as="h1"
              className="font-serif text-[2.6rem] leading-[0.98] sm:text-[3.4rem] lg:text-[4.2rem] xl:text-[5rem]"
            >
              <span className="hero-name">
                Mohammad
                <br />
                Nouman-
                <br />
                Ud-Din
              </span>
            </Reveal>

            <Reveal
              as="p"
              delay={140}
              className="max-w-[34ch] text-[1.05rem] leading-relaxed text-white/85 md:text-[1.2rem] lg:mt-24 lg:max-w-[24ch]"
            >
              I use AI to create branded content — polished enough to hold up as a real
              campaign.
            </Reveal>
          </div>

          <Reveal delay={220} className="mt-10 flex flex-wrap items-center gap-4 lg:mt-0">
            <Pill href="#work" icon={ArrowDown} variant="orchid">
              See the work
            </Pill>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/25 px-4 py-2 text-[0.65rem] uppercase tracking-[0.18em] text-white">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#D9A9E8]" />
              Available for freelance work
            </span>
          </Reveal>

          <Reveal
            as="p"
            delay={300}
            className="mt-10 font-serif text-[2.2rem] uppercase leading-none tracking-[0.06em] sm:text-[3rem] md:mt-12 md:text-[4rem]"
          >
            <span className="text-white">AI Creative </span>
            <span className="text-[#F2C6D9]">Technologist</span>
          </Reveal>
        </div>

        <a
          href="#about"
          aria-label="Scroll to About"
          className="absolute bottom-7 right-6 hidden text-white/60 transition-colors duration-200 hover:text-white sm:block"
        >
          <ChevronDown aria-hidden="true" strokeWidth={1.5} className="bob h-6 w-6" />
        </a>
      </section>

      {/* ---------- About ---------- */}
      <Section id="about" className="relative scroll-mt-24 overflow-hidden">
        <Glow />
        <SectionHeading
          eyebrow="About"
          title="Two kinds of AI work, one practice."
          titleClassName="md:text-[3.2rem]"
          intro="I work with AI at both ends of a project — the images and film a brand shows the world, and the software sitting behind them."
        />

        <div className="relative mt-12 grid gap-6 md:mt-16 md:grid-cols-2 md:gap-8">
          {approach.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 80}
              className="group relative h-full overflow-hidden rounded-[var(--radius-md)] border border-border border-t-2 border-t-accent bg-bg p-8 transition-all duration-[250ms] ease-out hover:-translate-y-1 hover:border-primary hover:bg-primary hover:shadow-[0_26px_54px_-30px_rgba(43,36,32,0.6)] md:p-10"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-6 right-3 select-none font-serif text-[8.5rem] leading-none text-primary/[0.07] transition-colors duration-[250ms] group-hover:text-bg/15 md:text-[10rem]"
              >
                {item.numeral}
              </span>

              <div className="relative">
                <item.icon
                  aria-hidden="true"
                  strokeWidth={1.5}
                  className="h-6 w-6 text-accent-deep transition-colors duration-[250ms] group-hover:text-accent-plum"
                />
                <p className="mt-4 text-[0.6rem] uppercase tracking-[0.2em] text-accent-deep transition-colors duration-[250ms] group-hover:text-accent-plum">
                  {item.label}
                </p>
                <h3 className="mt-3 font-serif text-[1.5rem] leading-snug transition-colors duration-[250ms] group-hover:text-bg md:text-[1.7rem]">
                  {item.title}
                </h3>
                <p className="mt-5 text-[0.98rem] leading-[1.7] text-text/80 transition-colors duration-[250ms] group-hover:text-bg/80">
                  {item.body}
                </p>
                <ul className="mt-6 space-y-2">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-[0.88rem] text-text/70 transition-colors duration-[250ms] group-hover:text-bg/75"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent transition-colors duration-[250ms] group-hover:bg-accent-plum"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------- Background ---------- */}
      <div id="background" className="relative scroll-mt-24 overflow-hidden border-y border-border bg-bg-deep">
        <Glow className="top-0" />
        <Section className="relative md:!py-24">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
            <div className="relative">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -left-6 -top-20 select-none font-serif text-[14rem] leading-none text-primary/[0.06] md:-top-24 md:text-[18rem]"
              >
                N
              </span>
              <SectionHeading
                className="relative"
                eyebrow="Background"
                eyebrowClassName="!text-[0.8rem] font-medium !tracking-[0.2em]"
                title="Creative first, technical throughout."
                titleClassName="heading-gradient md:text-[3.4rem]"
              />
            </div>

            <Reveal delay={120}>
              <p className="text-[1.05rem] leading-[1.75] text-text/85">
                I&rsquo;m an MBA graduate (Magna Cum Laude) who creates{' '}
                <strong className="font-semibold text-primary">AI-driven advertising</strong> and{' '}
                <strong className="font-semibold text-primary">visual content</strong> from concept
                to final edit. My portfolio spans concept brands—including a commuter backpack and
                luxury moisturizer campaigns—and real-world real estate content, including a
                cinematic property walkthrough for Golden Vision Real Estate. My real estate and
                business-development background adds a practical understanding of how creative work
                translates into commercial value.
              </p>

              <ul className="mt-9 flex max-w-[30rem] flex-wrap gap-1.5">
                {disciplines.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-accent/55 px-3 py-1 text-[0.63rem] uppercase tracking-[0.12em] text-accent-deep"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
                {stats.map((stat) => (
                  <div key={stat.caption}>
                    <dt className="sr-only">{stat.caption}</dt>
                    <dd>
                      <span className="block font-serif text-[1.9rem] leading-none text-primary md:text-[2.4rem]">
                        {stat.figure}
                      </span>
                      <span className="mt-2 block text-[0.68rem] uppercase tracking-[0.16em] text-accent-deep">
                        {stat.caption}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </Section>
      </div>

      {/* ---------- Work glimpses ---------- */}
      <Section id="work" className="scroll-mt-24">
        <div className="mb-16 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Selected work"
            title="Five projects, two disciplines."
            intro="Three campaigns directed with AI, and two web products built end to end."
          />
          <Reveal delay={120}>
            <Link
              to="/work/skincare-product-brand"
              className="nudge group inline-flex items-center gap-1.5 text-sm text-accent-deep"
            >
              <span className="underline-grow">Start with the skincare brand</span>
              <ArrowUpRight aria-hidden="true" strokeWidth={1.75} className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <WorkGlimpses />
      </Section>
    </>
  )
}
