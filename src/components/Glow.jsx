/**
 * The soft violet wash that sits behind text and cards. Decorative only, so it
 * is hidden from assistive tech and never intercepts a pointer.
 *
 * Its parent needs `relative`, and the content beside it needs `relative` too
 * so it paints above.
 */
export default function Glow({ className = '' }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute left-1/2 top-1/4 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(139,75,158,0.22),transparent)] blur-3xl md:h-[46rem] md:w-[46rem] ${className}`}
    />
  )
}
