import { Link } from 'react-router-dom'
import { Section } from '../components/Section'
import Reveal from '../components/Reveal'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export default function NotFound() {
  useDocumentTitle('Page not found')

  return (
    <Section className="!pt-24">
      <div className="mx-auto max-w-xl text-center">
        <Reveal as="p" className="text-[0.63rem] uppercase tracking-[0.24em] text-accent-deep">
          404
        </Reveal>
        <Reveal as="h1" delay={80} className="mt-6 font-serif text-[2.4rem] md:text-[3rem]">
          That page isn&rsquo;t here.
        </Reveal>
        <Reveal delay={160} className="mt-8">
          <Link to="/" className="link-underline text-sm text-accent-deep">
            Back to the homepage
          </Link>
        </Reveal>
      </div>
    </Section>
  )
}
