import type { ImgHTMLAttributes } from 'react'
import { cn } from '@/utils/cn'
import { publicAsset } from '@/utils/publicAsset'

type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  /** Si true, usa object-cover (por defecto). */
  cover?: boolean
}

/**
 * Imagen accesible con lazy loading por defecto.
 * No inventa fuentes: el caller debe pasar src real o un placeholder de desarrollo.
 */
export function Image({
  alt,
  src,
  className,
  loading = 'lazy',
  decoding = 'async',
  cover = true,
  ...props
}: ImageProps) {
  const resolvedSrc = typeof src === 'string' ? publicAsset(src) : src

  return (
    <img
      alt={alt ?? ''}
      src={resolvedSrc}
      loading={loading}
      decoding={decoding}
      className={cn(cover && 'h-full w-full object-cover object-center', className)}
      {...props}
    />
  )
}

type DevPlaceholderProps = {
  label?: string
  className?: string
  aspect?: 'square' | 'video' | 'portrait' | 'wide'
}

const aspectClasses = {
  square: 'aspect-square',
  video: 'aspect-video',
  portrait: 'aspect-[3/4]',
  wide: 'aspect-[16/9]',
}

/** Placeholder de desarrollo — no usar como contenido final. */
export function DevImagePlaceholder({
  label = '',
  className,
  aspect = 'wide',
}: DevPlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        'media-placeholder relative flex items-end p-4',
        aspectClasses[aspect],
        className,
      )}
    >
      {label ? (
        <span className="relative z-10 text-[0.7rem] font-medium tracking-[0.16em] text-ferresa-muted/80 uppercase">
          {label}
        </span>
      ) : null}
    </div>
  )
}
