import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: ReactNode
  align?: 'left' | 'center'
  className?: string
  titleAs?: 'h1' | 'h2' | 'h3'
  tone?: 'light' | 'dark'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
  titleAs: TitleTag = 'h2',
  tone = 'light',
}: SectionHeadingProps) {
  const isDark = tone === 'dark'

  return (
    <div
      className={cn(
        'max-w-2xl space-y-3',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            'text-small font-medium tracking-[0.14em] uppercase',
            isDark ? 'text-ferresa-subtle' : 'text-ferresa-muted',
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <TitleTag
        className={cn(
          TitleTag === 'h1' ? 'text-h1' : TitleTag === 'h3' ? 'text-h3' : 'text-h2',
          isDark && 'text-ferresa-inverse',
        )}
      >
        {title}
      </TitleTag>
      {description ? (
        <div
          className={cn(
            'text-body',
            isDark ? 'text-ferresa-subtle' : 'text-ferresa-muted',
          )}
        >
          {description}
        </div>
      ) : null}
    </div>
  )
}
