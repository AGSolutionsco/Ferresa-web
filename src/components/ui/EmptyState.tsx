import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

type EmptyStateProps = {
  eyebrow?: string
  title: string
  description: string
  action?: ReactNode
  className?: string
  titleAs?: 'h2' | 'h3'
}

/**
 * Estado vacío intencional — no debe leerse como error de la página.
 */
export function EmptyState({
  eyebrow,
  title,
  description,
  action,
  className,
  titleAs: TitleTag = 'h3',
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden border border-ferresa-line bg-ferresa-surface px-6 py-16 sm:px-12 sm:py-20 lg:py-24',
        className,
      )}
    >
      <div className="media-placeholder pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="relative mx-auto flex max-w-lg flex-col items-center text-center">
        {eyebrow ? (
          <p className="text-small font-medium tracking-[0.16em] text-ferresa-muted uppercase">
            {eyebrow}
          </p>
        ) : null}
        <TitleTag className="mt-3 max-w-[18ch] text-h2">{title}</TitleTag>
        <p className="mt-4 text-body text-ferresa-muted">{description}</p>
        {action ? <div className="mt-8">{action}</div> : null}
      </div>
    </div>
  )
}
