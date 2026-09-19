import { Link } from 'react-router-dom'
import { projects, kindLabel } from '../data/projects'
import { useParallax } from '../hooks/useParallax'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { Media } from './Media'
import Reveal from './Reveal'

// Deliberately uneven — a neat row would read as a contact sheet, not a glimpse.
const offsets = [0, 44, -20, 30, -34]
const speeds = [18, 30, 12, 26, 14]

export default function WorkGlimpses() {
  const [ref, progress] = useParallax()
  const staggered = useMediaQuery('(min-width: 1024px)')

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-8"
    >
      {projects.map((project, index) => (
        <Reveal key={project.slug} delay={index * 80}>
          <Link
            to={`/work/${project.slug}`}
            className="group block text-center"
            style={{
              transform: staggered
                ? `translate3d(0, ${offsets[index] + progress * speeds[index]}px, 0)`
                : undefined,
            }}
          >
            <div className="relative">
              <span
                aria-hidden="true"
                className="absolute -inset-1.5 rounded-full border border-accent/0 transition-all duration-300 ease-out group-hover:-inset-3 group-hover:border-accent/45"
              />
              <Media
                src={project.glimpse.src}
                alt={project.glimpse.alt}
                sizeHint="Square"
                className="relative aspect-square w-full rounded-full border border-border shadow-[0_8px_24px_-18px_rgba(43,36,32,0.6)] transition-all duration-200 ease-out group-hover:scale-[1.04] group-hover:shadow-[0_16px_36px_-18px_rgba(43,36,32,0.55)]"
                imgClassName="transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
            <p className="mt-4 text-[0.58rem] uppercase tracking-[0.2em] text-accent-deep/85">
              {kindLabel[project.kind].replace(' work', '')}
            </p>
            <p className="mt-1 font-serif text-[0.95rem] leading-snug text-primary transition-colors duration-200 group-hover:text-accent-deep">
              {project.title}
            </p>
          </Link>
        </Reveal>
      ))}
    </div>
  )
}
