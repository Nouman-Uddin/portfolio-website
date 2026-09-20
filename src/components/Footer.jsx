import { Phone, Mail } from 'lucide-react'
import { contact } from '../data/links'
import Reveal from './Reveal'

/** Plum, like the nav — the two of them bracket every page. */
export default function Footer() {
  return (
    <footer className="mt-24 bg-[#1A0E1F] text-bg md:mt-32">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-20">
        <Reveal className="flex flex-col items-start gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[0.63rem] uppercase tracking-[0.22em] text-accent-plum">
              Get in touch
            </p>
            <h2 className="mt-4 max-w-[16ch] font-serif text-[1.9rem] leading-tight text-bg md:text-[2.4rem]">
              Let&rsquo;s make something worth looking at.
            </h2>
            <p className="mt-4 max-w-[46ch] text-[0.95rem] leading-relaxed text-bg/70">
              Campaign, build, or something in between — I answer directly, and quickly.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <FooterPill href={contact.phoneHref} icon={Phone}>
              {contact.phoneDisplay}
            </FooterPill>
            <FooterPill href={contact.emailHref} icon={Mail} variant="outline">
              {contact.emailDisplay}
            </FooterPill>
          </div>
        </Reveal>

        <p className="mt-14 border-t border-bg/15 pt-6 text-xs text-bg/55">
          © {new Date().getFullYear()} Mohammad Nouman-Ud-Din · AI Creative Technologist
        </p>
      </div>
    </footer>
  )
}

function FooterPill({ href, icon: Icon, children, variant = 'filled' }) {
  const styles =
    variant === 'filled'
      ? 'bg-bg text-primary hover:bg-white'
      : 'border border-bg/35 text-bg hover:border-accent-plum hover:text-accent-plum'

  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-sm tracking-wide transition-all duration-200 hover:-translate-y-0.5 ${styles}`}
    >
      <Icon aria-hidden="true" strokeWidth={1.75} className="h-4 w-4 shrink-0" />
      <span>{children}</span>
    </a>
  )
}
