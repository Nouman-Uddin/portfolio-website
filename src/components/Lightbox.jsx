import { useCallback, useEffect, useRef, useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

/**
 * Full-screen viewer for campaign images. Opens from any gallery tile;
 * arrow keys and Escape work, and the page behind it stays put.
 *
 * `useLightbox(items)` hands back the props for it plus an `open(index)`.
 */
export function useLightbox(items) {
  const [index, setIndex] = useState(null)
  const open = useCallback((i) => setIndex(i), [])
  const close = useCallback(() => setIndex(null), [])
  return { lightbox: { items, index, onClose: close, onIndex: setIndex }, open }
}

export default function Lightbox({ items, index, onClose, onIndex }) {
  const closeRef = useRef(null)
  const isOpen = index !== null && index >= 0 && items?.length > 0

  const step = useCallback(
    (delta) => onIndex((current) => (current + delta + items.length) % items.length),
    [items, onIndex],
  )

  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      else if (event.key === 'ArrowRight') step(1)
      else if (event.key === 'ArrowLeft') step(-1)
    }

    // Hold the page still behind the overlay, without the layout jumping as
    // the scrollbar disappears.
    const { body } = document
    const gap = window.innerWidth - document.documentElement.clientWidth
    const prev = { overflow: body.style.overflow, padding: body.style.paddingRight }
    body.style.overflow = 'hidden'
    if (gap > 0) body.style.paddingRight = `${gap}px`

    closeRef.current?.focus()
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      body.style.overflow = prev.overflow
      body.style.paddingRight = prev.padding
    }
  }, [isOpen, onClose, step])

  if (!isOpen) return null

  const item = items[index]

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.alt}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex flex-col bg-[rgba(24,20,18,0.94)] backdrop-blur-sm"
      style={{ animation: 'lightbox-in 220ms cubic-bezier(0.22,0.61,0.36,1)' }}
    >
      <div className="flex items-center justify-between px-5 py-4 sm:px-8">
        <span className="font-mono text-[0.7rem] tracking-[0.2em] text-[#E4DDD0]/60">
          {String(index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
        </span>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="rounded-full p-2 text-[#E4DDD0]/80 transition-colors duration-200 hover:bg-white/10 hover:text-white"
        >
          <X aria-hidden="true" strokeWidth={1.5} className="h-5 w-5" />
        </button>
      </div>

      <div className="flex min-h-0 flex-1 items-center gap-2 px-2 sm:gap-4 sm:px-6">
        {items.length > 1 ? (
          <Arrow side="left" onClick={(e) => (e.stopPropagation(), step(-1))} />
        ) : null}

        <img
          src={item.src}
          alt={item.alt}
          onClick={(event) => event.stopPropagation()}
          className="mx-auto max-h-full min-h-0 w-auto max-w-full flex-1 object-contain"
        />

        {items.length > 1 ? (
          <Arrow side="right" onClick={(e) => (e.stopPropagation(), step(1))} />
        ) : null}
      </div>

      <p className="mx-auto max-w-[60ch] px-6 py-5 text-center text-[0.8rem] leading-relaxed text-[#E4DDD0]/70">
        {item.alt}
      </p>
    </div>
  )
}

function Arrow({ side, onClick }) {
  const Icon = side === 'left' ? ChevronLeft : ChevronRight
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={side === 'left' ? 'Previous image' : 'Next image'}
      className="shrink-0 rounded-full p-2.5 text-[#E4DDD0]/70 transition-colors duration-200 hover:bg-white/10 hover:text-white sm:p-3"
    >
      <Icon aria-hidden="true" strokeWidth={1.25} className="h-6 w-6 sm:h-7 sm:w-7" />
    </button>
  )
}
