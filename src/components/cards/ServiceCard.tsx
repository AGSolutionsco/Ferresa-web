import type { Service } from '@/types'
import { cn } from '@/utils/cn'

type ServiceCardProps = {
  service: Service
  className?: string
  index?: number
}

export function ServiceCard({ service, className, index }: ServiceCardProps) {
  return (
    <article
      className={cn(
        'border border-ferresa-line bg-ferresa-surface p-6 transition-ferresa hover:-translate-y-0.5 hover:border-ferresa-ink/25 hover:shadow-soft sm:p-8',
        className,
      )}
    >
      {typeof index === 'number' ? (
        <p className="text-small font-medium tracking-[0.14em] text-ferresa-subtle uppercase">
          {String(index + 1).padStart(2, '0')}
        </p>
      ) : null}
      <h3 className="mt-3 text-h3">{service.title}</h3>
      <p className="mt-3 text-body text-ferresa-muted">{service.description}</p>
    </article>
  )
}
