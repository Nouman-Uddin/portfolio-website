import { Link } from 'react-router-dom'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { Media } from '../components/Media'
import Reveal from '../components/Reveal'
import WorkGlimpses from '../components/WorkGlimpses'
import { Section, SectionHeading } from '../components/Section'
import Pill from '../components/Pill'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

const approach = [
  {
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
    label: 'Technical AI',
    title: 'Building with AI as the engineering partner.',
    body:
      'I build the software around the work with Claude AI — marketing sites, web apps and internal tools, taken from information architecture and copy through to a deployed product, usually in days rather than a dev queue’s worth of weeks.',
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

export default function Home() {
  useDocumentTitle(
    null,
    'Mohammad Nouman-Ud-din, AI Creative Technologist. AI-generated branded photography and video, plus the websites, apps and automations that bring it to life.',
  )

  return (
    <>
      {/* ---------- Hero ---------- */}
      <Section className="relative !pt-16 md:!pt-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(58%_55%_at_72%_18%,rgba(192,138,78,0.16),transparent_72%)]"
        />
        <div className="relative grid items-center gap-12 md:grid-cols-[1.15fr_0.85fr] md:gap-16">
          <div>
            <Reveal as="p" className="text-[0.63rem] uppercase tracking-[0.24em] text-accent-deep">
              AI Creative Technologist
            </Reveal>

            <Reveal
              as="h1"
              delay={80}
              className="mt-6 font-serif text-[2.6rem] leading-[1.05] sm:text-[3.4rem] md:text-[4rem]"
            >
              Mohammad
              <br />
              Nouman-Ud-din
            </Reveal>

            <Reveal
              as="p"
              delay={160}
              className="mt-7 max-w-[34ch] text-[1.1rem] leading-relaxed text-text/85 md:text-[1.25rem]"
            >
              I use AI to create branded content — and build the tools that bring it to life.
            </Reveal>

            <Reveal delay={240} className="mt-10">
              <Pill href="#work" icon={ArrowDown}>
                See the work
              </Pill>
            </Reveal>
          </div>

          <Reveal delay={120} className="md:justify-self-end">
            <div className="relative mx-auto w-full max-w-[22rem] md:mx-0">
              <span
                aria-hidden="true"
                className="absolute -inset-3 -rotate-2 rounded-[2.4rem] border border-accent/35"
              />
              <span
                aria-hidden="true"
                className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-accent-light/25 blur-3xl"
              />
              <Media
                src="/images/hero.jpg"
                alt="Portrait of Mohammad Nouman-Ud-din"
                sizeHint="Portrait"
                className="relative aspect-[4/5] w-full rounded-[2rem] border border-border shadow-[0_28px_60px_-34px_rgba(43,36,32,0.55)]"
              />
            </div>
          </Reveal>
        </div>
      </Section>

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
              className="h-full rounded-lg border border-border bg-surface p-8 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_20px_44px_-30px_rgba(43,36,32,0.55)] md:p-10"
            >
              <p className="text-[0.6rem] uppercase tracking-[0.2em] text-accent-deep">
                {item.label}
              </p>
              <h3 className="mt-4 font-serif text-[1.5rem] leading-snug md:text-[1.7rem]">
                {item.title}
              </h3>
              <p className="mt-5 text-[0.98rem] leading-[1.7] text-text/80">{item.body}</p>
              <ul className="mt-6 space-y-2">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3 text-[0.88rem] text-text/70">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------- Background ---------- */}
      <div className="border-y border-border bg-surface/70">
        <Section className="md:!py-24">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
            <SectionHeading eyebrow="Background" title="Creative first, technical throughout." />

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
                    className="rounded-full border border-border bg-bg px-4 py-1.5 text-[0.78rem] tracking-wide text-text/75"
                  >
                    {item}
                  </li>
                ))}
              </ul>
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
              className="link-underline inline-flex items-center gap-1.5 text-sm text-accent-deep"
            >
              Start with the skincare brand
              <ArrowUpRight aria-hidden="true" strokeWidth={1.75} className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <WorkGlimpses />
      </Section>
    </>
  )
}
