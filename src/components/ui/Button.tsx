import { Link as RouterLink } from 'react-router-dom'
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react'
import { cn } from '@/utils/cn'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-ferresa-ink text-ferresa-inverse hover:bg-ferresa-ink-soft active:bg-ferresa-ink disabled:bg-ferresa-subtle',
  secondary:
    'border border-ferresa-ink bg-transparent text-ferresa-ink hover:bg-ferresa-ink hover:text-ferresa-inverse active:bg-ferresa-ink-soft disabled:border-ferresa-line disabled:text-ferresa-subtle',
  ghost:
    'bg-transparent text-ferresa-ink hover:bg-ferresa-surface-muted active:bg-ferresa-line disabled:text-ferresa-subtle',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'min-h-11 px-3.5 py-2 text-small',
  md: 'min-h-11 px-5 py-2.5 text-button',
  lg: 'min-h-12 px-6 py-3 text-button',
}

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] font-sans font-semibold transition-ferresa focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ferresa-focus disabled:pointer-events-none disabled:opacity-50'

type SharedProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: ReactNode
}

type NativeButtonProps = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> & {
    to?: never
    href?: never
  }

type RouterButtonProps = SharedProps & {
  to: string
  href?: never
  replace?: boolean
}

type AnchorButtonProps = SharedProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children' | 'href'> & {
    href: string
    to?: never
  }

export type ButtonProps = NativeButtonProps | RouterButtonProps | AnchorButtonProps

export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', className, children } = props
  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className)

  if ('to' in props && props.to) {
    return (
      <RouterLink to={props.to} replace={props.replace} className={classes}>
        {children}
      </RouterLink>
    )
  }

  if ('href' in props && props.href) {
    const {
      href,
      target,
      rel,
      download,
      hrefLang,
      media,
      ping,
      referrerPolicy,
      type,
      onClick,
      onMouseEnter,
      onMouseLeave,
      id,
      role,
      tabIndex,
      'aria-label': ariaLabel,
      title,
    } = props

    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? (rel ?? 'noopener noreferrer') : rel}
        download={download}
        hrefLang={hrefLang}
        media={media}
        ping={ping}
        referrerPolicy={referrerPolicy}
        type={type}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        id={id}
        role={role}
        tabIndex={tabIndex}
        aria-label={ariaLabel}
        title={title}
        className={classes}
      >
        {children}
        {target === '_blank' ? (
          <span className="sr-only"> (se abre en una pestaña nueva)</span>
        ) : null}
      </a>
    )
  }

  const buttonProps = props as NativeButtonProps
  const {
    type = 'button',
    disabled,
    onClick,
    id,
    name,
    value,
    form,
    'aria-label': ariaLabel,
    title,
  } = buttonProps

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      id={id}
      name={name}
      value={value}
      form={form}
      aria-label={ariaLabel}
      title={title}
      className={classes}
    >
      {children}
    </button>
  )
}
