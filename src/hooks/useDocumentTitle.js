import { useEffect } from 'react'

const SITE = 'Mohammad Nouman-Ud-Din — AI Creative Technologist'

export function useDocumentTitle(title, description) {
  useEffect(() => {
    document.title = title ? `${title} · ${SITE}` : SITE

    if (description) {
      const tag = document.querySelector('meta[name="description"]')
      if (tag) tag.setAttribute('content', description)
    }
  }, [title, description])
}
