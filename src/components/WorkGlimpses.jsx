import { Link } from 'react-router-dom'
import { projects, kindLabel } from '../data/projects'
import { useParallax } from '../hooks/useParallax'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { Media } from './Media'
import Reveal from './Reveal'

// Deliberately uneven — a neat row would read as a contact sheet, not a glimpse.
const offsets = [0, 44, -20, 30, -34]
const speeds = [18, 30, 12, 26, 14]

// Shape carries the discipline: organic circles for what was photographed,
// structured rounded squares for what was engineered.
const shape = {
  creative: { frame: 'rounded-full', ring: 'rounded-full' },
  technical: { frame: 'rounded-[var(--radius-lg)]', ring: 'rounded-[calc(var(--radius-lg)+6px)]' },
}

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
                className={`absolute -inset-1 border-2 border-accent/0 transition-all duration-300 ease-out group-hover:-inset-[4px] group-hover:border-accent/70 ${shape[project.kind].ring}`}
              />
              <Media
                src={project.glimpse.src}
                alt={project.glimpse.alt}
                sizeHint="Square"
                className={`relative aspect-square w-full border border-border shadow-[0_8px_24px_-18px_rgba(43,36,32,0.6)] transition-transform duration-200 ease-out group-hover:scale-[1.05] ${shape[project.kind].frame}`}
                imgClassName="transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>

            <p className="mt-4 text-[0.58rem] uppercase tracking-[0.2em] text-accent-deep/85">
              {kindLabel[project.kind].replace(' work', '')}
            </p>
            <p className="mt-1 font-serif text-[0.95rem] leading-snug text-primary transition-colors duration-200 group-hover:text-accent-deep">
              <span className="underline-grow">{project.title}</span>
            </p>
          </Link>
        </Reveal>
      ))}
    </div>
  )
}
