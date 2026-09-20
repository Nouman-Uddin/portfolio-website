import Reveal from './Reveal'

export function Section({ id, className = '', children }) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28 ${className}`}>
      {children}
    </section>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  className = '',
  eyebrowClassName = '',
  titleClassName = '',
}) {
  return (
    <Reveal className={`max-w-2xl ${className}`}>
      {eyebrow ? (
        <p className={`flex items-center gap-3 text-[0.63rem] uppercase tracking-[0.22em] text-accent-deep ${eyebrowClassName}`}>
          <span aria-hidden="true" className="h-px w-8 bg-accent" />
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`mt-4 font-serif text-[2rem] leading-[1.12] md:text-[2.6rem] ${titleClassName}`}>
        {title}
      </h2>
      {intro ? <p className="mt-5 text-[1.02rem] text-text/80">{intro}</p> : null}
    </Reveal>
  )
}
