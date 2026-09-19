/**
 * The site's one button shape. `filled` uses the deep bronze (white text on it
 * clears AA); `outline` is the quieter sibling for secondary actions.
 */
export default function Pill({
  href,
  children,
  icon: Icon,
  variant = 'filled',
  className = '',
  ...rest
}) {
  const base =
    'group inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-sm tracking-wide transition-all duration-200 hover:-translate-y-0.5'

  const styles = {
    filled:
      'bg-accent-deep text-white hover:bg-primary hover:shadow-[0_10px_24px_-12px_rgba(74,37,69,0.7)]',
    outline:
      'border border-accent/60 text-accent-deep hover:border-primary hover:text-primary hover:shadow-[0_10px_24px_-14px_rgba(43,36,32,0.5)]',
  }

  return (
    <a href={href} className={`${base} ${styles[variant]} ${className}`} {...rest}>
      {Icon ? <Icon aria-hidden="true" strokeWidth={1.75} className="h-4 w-4 shrink-0" /> : null}
      <span>{children}</span>
    </a>
  )
}
