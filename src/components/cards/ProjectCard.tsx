import { Link } from 'react-router-dom'
import type { Project } from '@/types'
import { categories } from '@/data/categories'
import { Badge } from '@/components/ui/Badge'
import { DevImagePlaceholder, Image } from '@/components/ui/Image'
import { cn } from '@/utils/cn'

type ProjectCardProps = {
  project: Project
  className?: string
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const categoryLabel =
    categories.find((item) => item.id === project.category)?.label ?? project.category
  const cover = project.images[0]

  return (
    <article className={cn('group', className)}>
      <Link
        to={`/proyectos/${project.slug}`}
        className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ferresa-focus"
      >
        <div className="relative overflow-hidden bg-ferresa-surface-muted">
          {cover ? (
            <Image
              src={cover}
              alt={`Proyecto ${project.title}`}
              className="aspect-[4/5] w-full transition-ferresa duration-[450ms] group-hover:scale-[1.03]"
            />
          ) : (
            <DevImagePlaceholder
              label="Imagen de proyecto pendiente"
              aspect="portrait"
              className="w-full"
            />
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 transition-ferresa group-hover:opacity-100" />
        </div>
        <div className="mt-4 space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>{categoryLabel}</Badge>
            {project.city ? (
              <span className="text-small text-ferresa-muted">{project.city}</span>
            ) : null}
          </div>
          <h3 className="text-h3 transition-ferresa group-hover:text-ferresa-accent">
            {project.title}
          </h3>
          <p className="text-small font-medium text-ferresa-muted transition-ferresa group-hover:text-ferresa-ink">
            Ver proyecto
          </p>
        </div>
      </Link>
    </article>
  )
}
