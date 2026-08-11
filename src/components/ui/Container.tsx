import type { ElementType, ReactNode } from 'react'
import { cn } from '@/utils/cn'

type ContainerWidth = 'narrow' | 'content' | 'wide'

const widthClasses: Record<ContainerWidth, string> = {
  narrow: 'max-w-[var(--width-narrow)]',
  content: 'max-w-[var(--width-content)]',
  wide: 'max-w-[var(--width-wide)]',
}

type ContainerProps = {
  children: ReactNode
  className?: string
  width?: ContainerWidth
  as?: ElementType
}

export function Container({
  children,
  className,
  width = 'content',
  as: Tag = 'div',
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        'mx-auto w-full px-5 sm:px-6 lg:px-8',
        widthClasses[width],
        className,
      )}
    >
      {children}
    </Tag>
  )
}
