import { Phone, Mail } from 'lucide-react'
import { contact } from '../data/links'
import Pill from './Pill'
import Reveal from './Reveal'

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border md:mt-32">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-20">
        <Reveal className="flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[0.63rem] uppercase tracking-[0.22em] text-accent-deep">
              Get in touch
            </p>
            <h2 className="mt-3 max-w-[16ch] font-serif text-[1.75rem] leading-tight md:text-[2.15rem]">
              Let&rsquo;s make something worth looking at.
            </h2>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Pill href={contact.phoneHref} icon={Phone}>
              {contact.phoneDisplay}
            </Pill>
            <Pill href={contact.emailHref} icon={Mail} variant="outline">
              {contact.emailDisplay}
            </Pill>
          </div>
        </Reveal>

        <p className="mt-14 border-t border-border/70 pt-6 text-xs text-text/55">
          © {new Date().getFullYear()} Mohammad Nouman-Ud-din · AI Creative Technologist
        </p>
      </div>
    </footer>
  )
}
