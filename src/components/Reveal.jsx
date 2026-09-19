import { useInView } from '../hooks/useInView'

/**
 * Fades + slides its children up as they enter view.
 * `delay` (ms) staggers siblings — ~80ms apart reads as a cascade.
 */
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, inView] = useInView()

  return (
    <Tag
      ref={ref}
      data-visible={inView}
      style={{ '--reveal-delay': `${delay}ms` }}
      className={`reveal ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}
