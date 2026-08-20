import { Link } from 'react-router-dom'
import type { PortfolioCategory } from '@/types'
import { MediaFrame } from '@/components/ui/Media'
import { mediaSizes } from '@/utils/media'
import { cn } from '@/utils/cn'

type CategoryCardProps = {
  category: PortfolioCategory
  className?: string
  /** Variante visual para layout editorial */
  variant?: 'featured' | 'default'
  /** Ancla para /servicios#slug — no usar en Home (evitar ids duplicados) */
  anchor?: boolean
  actionLabel?: string
}

export function CategoryCard({
  category,
  className,
  variant = 'default',
  anchor = false,
  actionLabel = 'Explorar',
}: CategoryCardProps) {
  const featured = variant === 'featured' || category.featured
  const href = category.href
  const alt =
    category.imageAlt ?? `Categoría ${category.name} — mobiliario Ferresa`

  return (
    <article
      id={anchor ? category.slug : undefined}
      className={cn('h-full', anchor && 'scroll-mt-28', className)}
    >
      <Link
        to={href}
        className={cn(
          'group relative flex h-full flex-col overflow-hidden bg-ferresa-surface-muted',
          'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ferresa-focus',
          featured ? 'min-h-[20rem] sm:min-h-[24rem] lg:min-h-full' : 'min-h-[14rem] sm:min-h-[16rem]',
        )}
      >
        <MediaFrame
          src={category.imageSrc}
          alt={alt}
          aspect="fill"
          sizes={featured ? mediaSizes.featured : mediaSizes.card}
          width={featured ? 1200 : 800}
          height={featured ? 1500 : 1000}
          loading="lazy"
          className="absolute inset-0"
          imgClassName="img-zoom"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ferresa-ink/75 via-ferresa-ink/20 to-transparent"
          aria-hidden="true"
        />

        <div
          className={cn(
            'relative mt-auto flex flex-col gap-2 p-5 text-ferresa-inverse sm:p-6',
            featured && 'sm:p-8',
          )}
        >
          <h3
            className={cn(
              'font-display leading-tight',
              featured ? 'text-[2rem] sm:text-[2.4rem]' : 'text-[1.5rem] sm:text-[1.7rem]',
            )}
          >
            {category.name}
          </h3>
          {category.summary ? (
            <p className="max-w-md text-small text-ferresa-inverse/80">
              {category.summary}
            </p>
          ) : null}
          <p className="mt-1 inline-flex items-center gap-2 text-small font-semibold tracking-wide">
            {actionLabel}
            <span
              aria-hidden="true"
              className="transition-ferresa group-hover:translate-x-1"
            >
              →
            </span>
          </p>
        </div>
      </Link>
    </article>
  )
}
