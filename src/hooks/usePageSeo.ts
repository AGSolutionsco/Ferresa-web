import { useEffect } from 'react'
import type { PageSeo } from '@/types'
import { absoluteUrl, defaultOgImage, siteUrl } from '@/data/seo'

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

/** Title, description, canonical, Open Graph y Twitter Card de la ruta actual. */
export function usePageSeo(seo: PageSeo) {
  const { title, description, image, robots = 'index, follow' } = seo

  useEffect(() => {
    document.title = title

    const path = window.location.pathname || '/'
    const canonical = absoluteUrl(path, siteUrl)
    const ogImage = absoluteUrl(image || defaultOgImage, siteUrl)

    upsertMeta('meta[name="description"]', 'name', 'description', description)
    upsertMeta('meta[name="robots"]', 'name', 'robots', robots)

    upsertMeta('meta[property="og:title"]', 'property', 'og:title', title)
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', description)
    upsertMeta('meta[property="og:type"]', 'property', 'og:type', 'website')
    upsertMeta('meta[property="og:locale"]', 'property', 'og:locale', 'es_CO')
    upsertMeta('meta[property="og:site_name"]', 'property', 'og:site_name', 'Ferresa')
    upsertMeta('meta[property="og:url"]', 'property', 'og:url', canonical)
    upsertMeta('meta[property="og:image"]', 'property', 'og:image', ogImage)
    upsertMeta('meta[property="og:image:alt"]', 'property', 'og:image:alt', title)

    upsertMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image')
    upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title)
    upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description)
    upsertMeta('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage)

    let link = document.querySelector('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      document.head.appendChild(link)
    }
    link.setAttribute('href', canonical)
  }, [title, description, image, robots])
}
