import type { ElementType, ReactNode } from 'react'
import { cn } from '@/utils/cn'
import { Container } from './Container'

type SectionTone = 'light' | 'muted' | 'dark'
type SectionPadding = 'md' | 'lg'

const toneClasses: Record<SectionTone, string> = {
  light: 'bg-ferresa-canvas text-ferresa-ink',
  muted: 'bg-ferresa-surface-muted text-ferresa-ink',
  dark: 'bg-ferresa-ink text-ferresa-inverse',
}

const paddingClasses: Record<SectionPadding, string> = {
  md: 'py-14 sm:py-16 lg:py-20',
  lg: 'py-16 sm:py-20 lg:py-28',
}

type SectionProps = {
  children: ReactNode
  className?: string
  id?: string
  tone?: SectionTone
  padding?: SectionPadding
  as?: ElementType
  contained?: boolean
}

export function Section({
  children,
  className,
  id,
  tone = 'light',
  padding = 'lg',
  as: Tag = 'section',
  contained = true,
}: SectionProps) {
  return (
    <Tag id={id} className={cn(toneClasses[tone], paddingClasses[padding], className)}>
      {contained ? <Container>{children}</Container> : children}
    </Tag>
  )
}
