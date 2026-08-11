import { Link } from 'react-router-dom'
import type { Project } from '@/types'
import { categories } from '@/data/categories'
import { Badge } from '@/components/ui/Badge'
import { Image } from '@/components/ui/Image'
import { cn } from '@/utils/cn'

type ProjectCardProps = {
  project: Project
  className?: string
  /** Variante para layout editorial en Home */
  variant?: 'featured' | 'default'
  /** Mostrar descripción breve si existe */
  showDescription?: boolean
}

export function ProjectCard({
  project,
  className,
  variant = 'default',
  showDescription = false,
}: ProjectCardProps) {
  const categoryLabel =
    categories.find((item) => item.id === project.category)?.label ?? project.category
  const cover = project.images[0]
  const featured = variant === 'featured'
  const shortDescription =
    showDescription && project.description
      ? project.description.length > 140
        ? `${project.description.slice(0, 137).trimEnd()}…`
        : project.description
      : null

  return (
    <article className={cn('group h-full', className)}>
      <Link
        to={`/proyectos/${project.slug}`}
        className={cn(
          'flex h-full flex-col focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ferresa-focus',
        )}
      >
        <div
          className={cn(
            'relative overflow-hidden bg-ferresa-surface-muted',
            featured
              ? 'aspect-[4/5] sm:aspect-[5/4] lg:min-h-[28rem] lg:aspect-auto'
              : 'aspect-[4/5]',
          )}
        >
          {cover ? (
            <Image
              src={cover}
              alt={`Proyecto ${project.title}`}
              width={featured ? 1200 : 800}
              height={featured ? 1500 : 1000}
              loading="lazy"
              decoding="async"
              className="h-full w-full transition-ferresa duration-[450ms] group-hover:scale-[1.03]"
            />
          ) : (
            <div
              role="img"
              aria-label={`Imagen pendiente del proyecto ${project.title}`}
              className="flex h-full min-h-[16rem] w-full items-end bg-[linear-gradient(145deg,#eeece7_0%,#ddd9d1_50%,#cfc9be_100%)] p-4 transition-ferresa duration-[450ms] group-hover:scale-[1.02]"
            >
              <span className="text-small font-medium tracking-wide text-ferresa-muted uppercase">
                Imagen pendiente
              </span>
            </div>
          )}
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-ferresa group-hover:opacity-100"
            aria-hidden="true"
          />
        </div>

        <div className={cn('mt-4 space-y-2', featured && 'sm:mt-5')}>
          <div className="flex flex-wrap items-center gap-2">
            <Badge>{categoryLabel}</Badge>
            {project.city ? (
              <span className="text-small text-ferresa-muted">{project.city}</span>
            ) : null}
          </div>
          <h3
            className={cn(
              'transition-ferresa group-hover:text-ferresa-accent',
              featured ? 'text-h2' : 'text-h3',
            )}
          >
            {project.title}
          </h3>
          {shortDescription ? (
            <p className="text-body text-ferresa-muted">{shortDescription}</p>
          ) : null}
          <p className="inline-flex items-center gap-2 text-small font-semibold text-ferresa-muted transition-ferresa group-hover:text-ferresa-ink">
            Ver proyecto
            <span aria-hidden="true" className="transition-ferresa group-hover:translate-x-1">
              →
            </span>
          </p>
        </div>
      </Link>
    </article>
  )
}
