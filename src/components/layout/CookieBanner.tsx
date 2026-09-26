import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { cookieNotice } from '@/data/legal'
import { Button } from '@/components/ui/Button'
import { cn } from '@/utils/cn'

/**
 * Aviso discreto de cookies — consentimiento vía localStorage.
 * No carga scripts de analítica; solo informa y registra la aceptación.
 */
export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      const accepted = window.localStorage.getItem(cookieNotice.storageKey)
      if (!accepted) setVisible(true)
    } catch {
      setVisible(true)
    }
  }, [])

  function accept() {
    try {
      window.localStorage.setItem(cookieNotice.storageKey, '1')
    } catch {
      // Si el almacenamiento falla, ocultamos el banner en esta sesión.
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
      className={cn(
        'fixed inset-x-0 bottom-0 z-40 p-4 sm:p-5',
        'pointer-events-none',
      )}
    >
      <div
        className={cn(
          'pointer-events-auto ml-0 mr-auto flex max-w-lg flex-col gap-4',
          'border border-ferresa-line bg-ferresa-surface/95 p-4 shadow-soft backdrop-blur-sm',
          'sm:flex-row sm:items-end sm:gap-5 sm:p-5',
          'mb-[max(0.25rem,env(safe-area-inset-bottom))]',
          'sm:mb-0',
        )}
      >
        <p className="flex-1 text-small leading-relaxed text-ferresa-muted">
          {cookieNotice.message}{' '}
          <Link
            to={cookieNotice.policyPath}
            className="font-medium text-ferresa-ink underline underline-offset-4 decoration-ferresa-line transition-ferresa hover:decoration-ferresa-ink"
          >
            {cookieNotice.policyLabel}
          </Link>
          .
        </p>
        <Button
          type="button"
          variant="primary"
          size="sm"
          onClick={accept}
          className="w-full shrink-0 sm:w-auto"
        >
          {cookieNotice.acceptLabel}
        </Button>
      </div>
    </div>
  )
}
