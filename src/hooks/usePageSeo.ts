import { useEffect } from 'react'

function upsertMeta(
  selector: string,
  attr: 'name' | 'property',
  attrValue: string,
  content: string,
) {
  let meta = document.querySelector(selector)
  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute(attr, attrValue)
    document.head.appendChild(meta)
  }
  meta.setAttribute('content', content)
}

/** Actualiza title, meta description y Open Graph básico de la página actual. */
export function usePageSeo(title: string, description: string) {
  useEffect(() => {
    document.title = title

    upsertMeta('meta[name="description"]', 'name', 'description', description)
    upsertMeta('meta[property="og:title"]', 'property', 'og:title', title)
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', description)
    upsertMeta('meta[property="og:type"]', 'property', 'og:type', 'website')
    upsertMeta('meta[property="og:locale"]', 'property', 'og:locale', 'es_CO')

    const canonical = `${window.location.origin}${window.location.pathname}`
    upsertMeta('meta[property="og:url"]', 'property', 'og:url', canonical)

    let link = document.querySelector('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      document.head.appendChild(link)
    }
    link.setAttribute('href', canonical)
  }, [title, description])
}
