import { Link } from 'react-router-dom'
import type { ProjectCategory } from '@/types'
import { cn } from '@/utils/cn'

type CategoryCardProps = {
  category: ProjectCategory
  className?: string
  /** Ruta opcional; por defecto filtra en /proyectos */
  href?: string
}

export function CategoryCard({
  category,
  className,
  href = `/proyectos?categoria=${category.id}`,
}: CategoryCardProps) {
  return (
    <Link
      to={href}
      className={cn(
        'group flex min-h-36 flex-col justify-between border border-ferresa-line bg-ferresa-surface p-5 transition-ferresa',
        'hover:border-ferresa-ink hover:bg-ferresa-ink hover:text-ferresa-inverse',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ferresa-focus',
        className,
      )}
    >
      <span className="text-small tracking-[0.12em] text-ferresa-subtle uppercase transition-ferresa group-hover:text-ferresa-subtle">
        Categoría
      </span>
      <span className="font-display text-[1.5rem] leading-tight">{category.label}</span>
    </Link>
  )
}
