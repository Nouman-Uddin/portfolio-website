import { Link } from 'react-router-dom'
import { ArrowDown, ArrowUpRight, ChevronDown, Camera, Code2 } from 'lucide-react'
import Reveal from '../components/Reveal'
import WorkGlimpses from '../components/WorkGlimpses'
import { Section, SectionHeading } from '../components/Section'
import Pill from '../components/Pill'
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
    'Mohammad Nouman-Ud-din, AI Creative Technologist. AI-generated branded photography and video, plus the websites, apps and automations that bring it to life.',
  )

  return (
    <>
      {/* ---------- Hero: the portrait carries the whole section ---------- */}
      <section className="grain relative isolate flex min-h-[86vh] items-center overflow-hidden">
        <img
          src="/images/hero.jpg"
          alt="Mohammad Nouman-Ud-din"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: '64% 18%' }}
        />
        {/* Directional scrim: solid under the text, gone by the time it reaches
            the detail in the photograph. */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ background: 'linear-gradient(100deg, rgba(74,37,69,0.95) 0%, rgba(74,37,69,0.75) 35%, rgba(74,37,69,0.25) 65%, rgba(74,37,69,0) 85%)' }}
        />
        {/* Narrow screens have no room for the diagonal to do its work. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/45 to-primary/15 md:hidden"
        />

        <div className="relative mx-auto w-full max-w-6xl px-5 py-28 sm:px-8 md:py-36">
          <Reveal as="p" className="text-[0.63rem] uppercase tracking-[0.24em] text-accent-plum">
            AI Creative Technologist
          </Reveal>

          <Reveal
            as="h1"
            delay={80}
            className="mt-6 font-serif text-[2.35rem] leading-[1.06] text-bg [overflow-wrap:normal] sm:max-w-[14ch] sm:text-[3.6rem] md:text-[4.4rem]"
          >
            Mohammad
            <br />
            Nouman-Ud-din
          </Reveal>

          <Reveal
            as="p"
            delay={160}
            className="mt-7 max-w-[36ch] text-[1.1rem] leading-relaxed text-bg/85 md:text-[1.3rem]"
          >
            I use AI to create <em className="font-serif text-bg">branded</em> content — and build
            the tools that bring it to life.
          </Reveal>

          <Reveal delay={240} className="mt-10 flex flex-wrap items-center gap-4">
            <Pill href="#work" icon={ArrowDown}>
              See the work
            </Pill>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-bg/25 bg-bg/95 px-4 py-2 text-[0.65rem] uppercase tracking-[0.18em] text-primary">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent-deep" />
              Available for freelance work
            </span>
          </Reveal>
        </div>

        <a
          href="#about"
          aria-label="Scroll to About"
          className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 text-bg/65 transition-colors duration-200 hover:text-bg sm:block"
        >
          <ChevronDown aria-hidden="true" strokeWidth={1.5} className="bob h-6 w-6" />
        </a>
      </section>

      {/* ---------- About ---------- */}
      <Section id="about" className="scroll-mt-24">
        <SectionHeading
          eyebrow="About"
          title="Two kinds of AI work, one practice."
          intro="I work with AI at both ends of a project — the images and film a brand shows the world, and the software sitting behind them."
        />

        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2 md:gap-8">
          {approach.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 80}
              className="relative h-full overflow-hidden rounded-[var(--radius-md)] border border-border border-t-2 border-t-accent bg-surface p-8 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_24px_50px_-32px_rgba(43,36,32,0.55)] md:p-10"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-6 right-3 select-none font-serif text-[8.5rem] leading-none text-primary/[0.07] md:text-[10rem]"
              >
                {item.numeral}
              </span>

              <div className="relative">
                <item.icon aria-hidden="true" strokeWidth={1.5} className="h-6 w-6 text-accent-deep" />
                <p className="mt-4 text-[0.6rem] uppercase tracking-[0.2em] text-accent-deep">
                  {item.label}
                </p>
                <h3 className="mt-3 font-serif text-[1.5rem] leading-snug md:text-[1.7rem]">
                  {item.title}
                </h3>
                <p className="mt-5 text-[0.98rem] leading-[1.7] text-text/80">{item.body}</p>
                <ul className="mt-6 space-y-2">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3 text-[0.88rem] text-text/70">
                      <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
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
      <div className="border-y border-border bg-bg-deep">
        <Section className="md:!py-24">
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
                title="Creative first, technical throughout."
              />
            </div>

            <Reveal delay={120}>
              <p className="text-[1.05rem] leading-[1.75] text-text/85">
                I&rsquo;m an MBA graduate (Magna Cum Laude) who uses AI to create branded content and
                build the tools that bring it to life. Over the past three years I&rsquo;ve directed
                AI-generated photography and video for real estate — including a luxury property
                walkthrough for Golden Vision Real Estate — while also building the websites, web
                apps, and automations that support that work, using Claude and Python. My background
                in real estate sales and business development gives me a practical, client-facing
                sense of what actually moves a brand, paired with the technical range to build it
                myself.
              </p>

              <ul className="mt-9 flex flex-wrap gap-x-3 gap-y-2.5">
                {disciplines.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-accent/55 px-4 py-1.5 text-[0.65rem] uppercase tracking-[0.14em] text-accent-deep"
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
