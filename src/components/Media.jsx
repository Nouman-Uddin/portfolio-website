import { useEffect, useState } from 'react'
import { Image as ImageIcon, Film } from 'lucide-react'

/**
 * An image that degrades into a labelled placeholder block when the file isn't
 * there yet — so the site is fully navigable before final media lands. Drop the
 * real file in at the same path under /public and it appears automatically.
 */
export function Media({ src, alt, className = '', imgClassName = '', sizeHint, fit = 'cover' }) {
  const [failed, setFailed] = useState(!src)

  useEffect(() => {
    setFailed(!src)
  }, [src])

  return (
    <div className={`relative overflow-hidden bg-border/50 ${className}`}>
      {failed ? (
        <Placeholder alt={alt} src={src} sizeHint={sizeHint} />
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          className={`h-full w-full ${fit === 'contain' ? 'object-contain' : 'object-cover'} ${imgClassName}`}
        />
      )}
    </div>
  )
}

/** A video with the same graceful-degradation behaviour. */
export function MediaVideo({ src, poster, alt, className = '' }) {
  const [failed, setFailed] = useState(!src)

  return (
    <div className={`relative overflow-hidden bg-primary ${className}`}>
      {failed ? (
        <Placeholder alt={alt} src={src} icon={Film} sizeHint="Video" />
      ) : (
        <video
          src={src}
          poster={poster}
          controls
          playsInline
          preload="metadata"
          aria-label={alt}
          onError={() => setFailed(true)}
          className="h-full w-full object-contain"
        >
          {alt}
        </video>
      )}
    </div>
  )
}

function Placeholder({ alt, src, icon: Icon = ImageIcon, sizeHint }) {
  const filename = src ? src.split('/').pop() : 'to be added'

  return (
    <div
      role="img"
      aria-label={`Placeholder — ${alt}`}
      className="flex h-full w-full flex-col items-center justify-center gap-2 border border-dashed border-accent/40 bg-[linear-gradient(135deg,#efe7da_0%,#e7dccb_100%)] p-5 text-center"
    >
      <Icon aria-hidden="true" className="h-5 w-5 shrink-0 text-accent-deep/70" strokeWidth={1.5} />
      <p className="max-w-[26ch] text-[0.7rem] leading-snug text-text/70">{alt}</p>
      <p className="font-mono text-[0.62rem] tracking-wide text-accent-deep/80">
        {sizeHint ? `${sizeHint} · ` : ''}
        {filename}
      </p>
    </div>
  )
}
