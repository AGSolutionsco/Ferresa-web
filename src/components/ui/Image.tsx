import type { ImgHTMLAttributes } from 'react'
import { cn } from '@/utils/cn'

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
  className,
  loading = 'lazy',
  decoding = 'async',
  cover = true,
  ...props
}: ImageProps) {
  return (
    <img
      alt={alt ?? ''}
      loading={loading}
      decoding={decoding}
      className={cn(cover && 'object-cover', className)}
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
  label = 'Fotografía pendiente',
  className,
  aspect = 'wide',
}: DevPlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        'flex items-end bg-ferresa-surface-muted p-4',
        aspectClasses[aspect],
        className,
      )}
    >
      <span className="text-small font-medium tracking-wide text-ferresa-muted uppercase">
        {label}
      </span>
    </div>
  )
}
