/**
 * Tamaños responsive para fotografías reales.
 * Usar con el atributo `sizes` cuando existan assets en public/images.
 */
export const mediaSizes = {
  hero: '(min-width: 1024px) 52vw, 100vw',
  featured: '(min-width: 1024px) 58vw, 100vw',
  portrait: '(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw',
  card: '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw',
  gallery: '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw',
  about: '(min-width: 1024px) 50vw, 100vw',
} as const

export type MediaAspect = 'square' | 'video' | 'portrait' | 'wide' | 'photo' | 'fill'

export const mediaAspectClasses: Record<Exclude<MediaAspect, 'fill'>, string> = {
  square: 'aspect-square',
  video: 'aspect-video',
  portrait: 'aspect-[3/4]',
  wide: 'aspect-[16/10]',
  photo: 'aspect-[4/5]',
}
