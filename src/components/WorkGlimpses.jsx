import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { creativeProjects, technicalProjects, kindLabel } from '../data/projects'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { Media } from './Media'
import Reveal from './Reveal'

const PREVIEW_MS = 5000

export default function WorkGlimpses() {
  // Autoplay-on-hover only makes sense where there is a pointer, and it is
  // exactly the kind of motion reduced-motion users are asking us to stop.
  const canPreview = useMediaQuery('(hover: hover)') && !useMediaQuery('(prefers-reduced-motion: reduce)')

  return (
    <div className="space-y-16 md:space-y-20">
      <Group kind="creative" items={creativeProjects} cols="lg:grid-cols-3" canPreview={canPreview} />
      <Group kind="technical" items={technicalProjects} cols="md:grid-cols-2" canPreview={canPreview} />
    </div>
  )
}

function Group({ kind, items, cols, canPreview }) {
  return (
    <div>
      <Reveal
        as="p"
        className="mb-6 flex items-center gap-3 text-[0.63rem] uppercase tracking-[0.22em] text-accent-deep"
      >
        <span aria-hidden="true" className="h-px w-8 bg-accent" />
        {kindLabel[kind]}
      </Reveal>

      <div className={`grid gap-6 sm:grid-cols-2 md:gap-8 ${cols}`}>
        {items.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            delay={index * 80}
            canPreview={canPreview}
          />
        ))}
      </div>
    </div>
  )
}

function ProjectCard({ project, delay, canPreview }) {
  const videoRef = useRef(null)
  const timerRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const preview = canPreview ? project.preview : null

  useEffect(() => () => window.clearTimeout(timerRef.current), [])

  const start = () => {
    const video = videoRef.current
    if (!video) return
    video.currentTime = 0
    // Muted is what makes autoplay legal; a rejected promise just means the
    // browser declined, and the still underneath is already the fallback.
    video.play().then(() => setPlaying(true)).catch(() => {})
    timerRef.current = window.setTimeout(stop, PREVIEW_MS)
  }

  const stop = () => {
    window.clearTimeout(timerRef.current)
    videoRef.current?.pause()
    setPlaying(false)
  }

  return (
    <Reveal delay={delay}>
      <Link
        to={`/work/${project.slug}`}
        className="group block"
        onMouseEnter={preview ? start : undefined}
        onMouseLeave={preview ? stop : undefined}
        onFocus={preview ? start : undefined}
        onBlur={preview ? stop : undefined}
      >
        <div className="relative aspect-video overflow-hidden rounded-[var(--radius-md)] border border-border bg-primary shadow-[0_10px_30px_-22px_rgba(43,36,32,0.6)] transition-all duration-200 ease-out group-hover:-translate-y-1 group-hover:border-accent/60 group-hover:shadow-[0_26px_50px_-28px_rgba(43,36,32,0.6)]">
          <Media
            src={project.glimpse.src}
            alt={project.glimpse.alt}
            sizeHint="Landscape"
            className="h-full w-full"
            imgClassName="transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />

          {preview ? (
            <video
              ref={videoRef}
              src={preview}
              muted
              playsInline
              preload="none"
              aria-hidden="true"
              tabIndex={-1}
              className={`pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
                playing ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ) : null}
        </div>

        <p className="mt-4 text-[0.58rem] uppercase tracking-[0.2em] text-accent-deep/85">
          {kindLabel[project.kind].replace(' work', '')}
        </p>
        <p className="mt-1 font-serif text-[1.15rem] leading-snug text-primary transition-colors duration-200 group-hover:text-accent-deep md:text-[1.3rem]">
          <span className="underline-grow">{project.title}</span>
        </p>
        <p className="mt-1.5 text-[0.85rem] leading-relaxed text-text/65">{project.tagline}</p>
      </Link>
    </Reveal>
  )
}
