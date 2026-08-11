import { Link } from 'react-router-dom'
import { cn } from '@/utils/cn'
import { company } from '@/data/company'

type LogoProps = {
  className?: string
  /** Variante para fondos claros u oscuros */
  tone?: 'light' | 'dark'
}

/**
 * Wordmark Ferresa.
 * Cuando exista logo oficial del cliente, reemplazar el SVG manteniendo esta API.
 */
export function Logo({ className, tone = 'light' }: LogoProps) {
  const ink = tone === 'dark' ? '#F6F5F2' : '#171717'
  const accent = '#2F5D4A'

  return (
    <Link
      to="/"
      aria-label={`${company.name} — inicio`}
      className={cn(
        'inline-flex items-center gap-2.5 transition-ferresa focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ferresa-focus',
        className,
      )}
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x="1" y="1" width="26" height="26" stroke={ink} strokeWidth="1.5" />
        <rect x="7" y="7" width="14" height="14" fill={accent} />
      </svg>
      <span
        className={cn(
          'font-display text-[1.35rem] leading-none tracking-[0.04em]',
          tone === 'dark' ? 'text-ferresa-inverse' : 'text-ferresa-ink',
        )}
      >
        {company.name}
      </span>
    </Link>
  )
}
