import { Link } from 'react-router-dom'
import type { PortfolioCategory } from '@/types'
import { Image } from '@/components/ui/Image'
import { cn } from '@/utils/cn'

type CategoryCardProps = {
  category: PortfolioCategory
  className?: string
  /** Variante visual para layout editorial */
  variant?: 'featured' | 'default'
}

export function CategoryCard({
  category,
  className,
  variant = 'default',
}: CategoryCardProps) {
  const featured = variant === 'featured' || category.featured
  const href = category.href
  const alt =
    category.imageAlt ?? `Categoría ${category.name} — mobiliario Ferresa`

  return (
    <article className={cn('h-full', className)}>
      <Link
        to={href}
        className={cn(
          'group relative flex h-full flex-col overflow-hidden bg-ferresa-surface-muted',
          'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ferresa-focus',
          featured ? 'min-h-[28rem] lg:min-h-full' : 'min-h-[16rem] sm:min-h-[18rem]',
        )}
      >
        <div className="absolute inset-0 overflow-hidden">
          {category.imageSrc ? (
            <Image
              src={category.imageSrc}
              alt={alt}
              width={featured ? 1200 : 800}
              height={featured ? 1500 : 1000}
              loading="lazy"
              decoding="async"
              className="h-full w-full transition-ferresa duration-[450ms] group-hover:scale-[1.03]"
            />
          ) : (
            <div
              role="img"
              aria-label={`${alt} (placeholder de desarrollo)`}
              className={cn(
                'flex h-full w-full items-end bg-[linear-gradient(145deg,#eeece7_0%,#ddd9d1_50%,#cfc9be_100%)] p-4 transition-ferresa duration-[450ms] group-hover:scale-[1.02]',
              )}
            >
              <span className="text-small font-medium tracking-wide text-ferresa-muted uppercase">
                Imagen pendiente
              </span>
            </div>
          )}
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ferresa-ink/70 via-ferresa-ink/15 to-transparent"
            aria-hidden="true"
          />
        </div>

        <div
          className={cn(
            'relative mt-auto flex flex-col gap-2 p-5 text-ferresa-inverse sm:p-6',
            featured && 'sm:p-8',
          )}
        >
          <h3
            className={cn(
              'font-display leading-tight',
              featured ? 'text-[2rem] sm:text-[2.35rem]' : 'text-[1.5rem] sm:text-[1.65rem]',
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
            Explorar
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
