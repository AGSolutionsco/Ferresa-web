import { Link as RouterLink } from 'react-router-dom'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { cn } from '@/utils/cn'

type Common = {
  children: ReactNode
  className?: string
  underline?: boolean
}

type InternalLink = Common &
  Omit<ComponentPropsWithoutRef<typeof RouterLink>, 'children' | 'className'> & {
    to: string
    href?: undefined
  }

type ExternalLink = Common &
  Omit<ComponentPropsWithoutRef<'a'>, 'children' | 'className' | 'href'> & {
    href: string
    to?: undefined
  }

export type AppLinkProps = InternalLink | ExternalLink

const base =
  'transition-ferresa focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ferresa-focus'

export function AppLink(props: AppLinkProps) {
  const { children, className, underline = false } = props
  const classes = cn(
    base,
    underline && 'underline underline-offset-4 decoration-ferresa-line hover:decoration-ferresa-ink',
    className,
  )

  if ('to' in props && props.to) {
    const { to, children: _c, className: _cl, underline: _u, ...rest } = props
    return (
      <RouterLink to={to} className={classes} {...rest}>
        {children}
      </RouterLink>
    )
  }

  const { href, children: _c, className: _cl, underline: _u, ...rest } = props as ExternalLink
  return (
    <a href={href} className={classes} {...rest}>
      {children}
    </a>
  )
}
