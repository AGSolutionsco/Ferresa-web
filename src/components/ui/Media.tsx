import type { ReactNode } from 'react'
import { Image } from '@/components/ui/Image'
import { cn } from '@/utils/cn'
import {
  mediaAspectClasses,
  type MediaAspect,
} from '@/utils/media'

type MediaFrameProps = {
  src?: string | null
  alt: string
  aspect?: MediaAspect
  sizes?: string
  width?: number
  height?: number
  loading?: 'lazy' | 'eager'
  fetchPriority?: 'high' | 'low' | 'auto'
  className?: string
  imgClassName?: string
  /** Caption discreto solo cuando no hay fotografía real */
  placeholderCaption?: string
  children?: ReactNode
}

/**
 * Marco de imagen con object-fit, lazy loading y placeholder editorial.
 * No inventa fotografías: si `src` es null, muestra un vacío intencional.
 */
export function MediaFrame({
  src,
  alt,
  aspect = 'wide',
  sizes,
  width,
  height,
  loading = 'lazy',
  fetchPriority,
  className,
  imgClassName,
  placeholderCaption,
  children,
}: MediaFrameProps) {
  return (
    <div
      className={cn(
        'relative isolate overflow-hidden bg-ferresa-surface-muted',
        aspect !== 'fill' && mediaAspectClasses[aspect],
        aspect === 'fill' && 'h-full w-full',
        className,
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          loading={loading}
          fetchPriority={fetchPriority}
          decoding="async"
          className={cn('absolute inset-0 h-full w-full', imgClassName)}
        />
      ) : (
        <MediaPlaceholder alt={alt} caption={placeholderCaption} />
      )}
      {children}
    </div>
  )
}

type MediaPlaceholderProps = {
  alt: string
  caption?: string
  className?: string
}

/** Placeholder de desarrollo — composición editorial, no una foto inventada. */
export function MediaPlaceholder({ alt, caption, className }: MediaPlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={cn('media-placeholder absolute inset-0 flex items-end', className)}
    >
      {caption ? (
        <span className="relative z-10 p-4 text-[0.7rem] font-medium tracking-[0.16em] text-ferresa-muted/80 uppercase sm:p-5">
          {caption}
        </span>
      ) : null}
    </div>
  )
}
