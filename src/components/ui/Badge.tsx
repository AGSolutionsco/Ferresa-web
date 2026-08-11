import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

type BadgeProps = {
  children: ReactNode
  className?: string
  tone?: 'neutral' | 'accent'
}

export function Badge({ children, className, tone = 'neutral' }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-[var(--radius-sm)] px-2.5 py-1 text-small font-medium tracking-wide',
        tone === 'neutral' && 'bg-ferresa-surface-muted text-ferresa-muted',
        tone === 'accent' && 'bg-ferresa-accent-soft text-ferresa-accent',
        className,
      )}
    >
      {children}
    </span>
  )
}
