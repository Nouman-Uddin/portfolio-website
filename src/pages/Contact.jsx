import { Phone, Mail, Linkedin, Instagram } from 'lucide-react'
import { contact, links } from '../data/links'
import Reveal from '../components/Reveal'
import { Section } from '../components/Section'
import Glow from '../components/Glow'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

const socials = [
  { key: 'linkedin', label: 'LinkedIn', icon: Linkedin },
  { key: 'instagram', label: 'Instagram', icon: Instagram },
]

export default function Contact() {
  useDocumentTitle('Contact')
  const visibleSocials = socials.filter((social) => links[social.key])

  return (
    <Section className="relative overflow-hidden !pt-16 md:!pt-24">
      <Glow />
      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal as="p" className="text-[0.63rem] uppercase tracking-[0.24em] text-accent-deep">
          Contact
        </Reveal>

        <Reveal
          as="h1"
          delay={80}
          className="mt-6 font-serif text-[2.8rem] leading-[1.06] md:text-[4.2rem]"
        >
          Say hello.
        </Reveal>

        <Reveal as="p" delay={160} className="mx-auto mt-6 max-w-[42ch] text-[1.08rem] text-text/80">
          Campaign, build, or something in between — the fastest way to reach me is directly.
        </Reveal>

        <div className="mt-14 space-y-4">
          <ContactRow
            delay={200}
            href={contact.phoneHref}
            icon={Phone}
            label="Phone"
            value={contact.phoneDisplay}
          />
          <ContactRow
            delay={280}
            href={contact.emailHref}
            icon={Mail}
            label="Email"
            value={contact.emailDisplay}
          />
        </div>

        {visibleSocials.length > 0 ? (
          <Reveal delay={360} className="mt-12 flex justify-center gap-4">
            {visibleSocials.map(({ key, label, icon: Icon }) => (
              <a
                key={key}
                href={links[key]}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-text/80 transition-colors duration-200 hover:border-accent hover:text-accent-deep"
              >
                <Icon aria-hidden="true" strokeWidth={1.75} className="h-4 w-4" />
                {label}
              </a>
            ))}
          </Reveal>
        ) : null}
      </div>
    </Section>
  )
}

function ContactRow({ href, icon: Icon, label, value, delay }) {
  return (
    <Reveal delay={delay}>
      <a
        href={href}
        className="group flex w-full items-center justify-between gap-4 rounded-full border border-border bg-surface px-6 py-5 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:shadow-[0_18px_40px_-26px_rgba(43,36,32,0.6)] sm:px-8"
      >
        <span className="flex items-center gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-deep text-white transition-colors duration-200 group-hover:bg-primary">
            <Icon aria-hidden="true" strokeWidth={1.75} className="h-4.5 w-4.5" />
          </span>
          <span>
            <span className="block text-[0.6rem] uppercase tracking-[0.2em] text-text/50">
              {label}
            </span>
            <span className="block text-[1.02rem] text-primary sm:text-[1.15rem]">{value}</span>
          </span>
        </span>
      </a>
    </Reveal>
  )
}
