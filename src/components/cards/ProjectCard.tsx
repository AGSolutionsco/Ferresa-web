import { Link } from 'react-router-dom'
import type { Project } from '@/types'
import { categories } from '@/data/categories'
import { Badge } from '@/components/ui/Badge'
import { MediaFrame } from '@/components/ui/Media'
import { mediaSizes } from '@/utils/media'
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
        className="flex h-full flex-col focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ferresa-focus"
      >
        <MediaFrame
          src={cover}
          alt={`Proyecto ${project.title}`}
          aspect="photo"
          sizes={featured ? mediaSizes.featured : mediaSizes.card}
          width={featured ? 1200 : 800}
          height={featured ? 1500 : 1000}
          loading="lazy"
          className={cn(
            featured && 'sm:aspect-[5/4] lg:min-h-[28rem] lg:aspect-auto',
          )}
          imgClassName="img-zoom"
          placeholderCaption="Fotografía pendiente"
        />

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
