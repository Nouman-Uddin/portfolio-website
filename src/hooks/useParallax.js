import { useEffect, useRef, useState } from 'react'

/**
 * Returns how far the element is through the viewport, as -1 (below the fold)
 * → 0 (centred) → 1 (above it). Used for the homepage glimpse circles, which
 * drift a touch slower than the page. rAF-throttled; inert under reduced motion.
 */
export function useParallax() {
  const ref = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = null

    const measure = () => {
      frame = null
      const rect = node.getBoundingClientRect()
      const viewport = window.innerHeight || 1
      const centre = rect.top + rect.height / 2
      // 1 when the element's centre sits at the top of the viewport, -1 at the bottom.
      const next = (viewport / 2 - centre) / (viewport / 2 + rect.height / 2)
      setProgress(Math.max(-1, Math.min(1, next)))
    }

    const onScroll = () => {
      if (frame === null) frame = window.requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame !== null) window.cancelAnimationFrame(frame)
    }
  }, [])

  return [ref, progress]
}
