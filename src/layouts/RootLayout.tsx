import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { CookieBanner } from '@/components/layout/CookieBanner'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { WhatsAppButton } from '@/components/layout/WhatsAppButton'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.replace('#', ''))
      const frame = window.requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
      return () => window.cancelAnimationFrame(frame)
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname, hash])

  return null
}

/**
 * Layout raíz con sistema visual FASE 2.
 */
export function RootLayout() {
  return (
    <div className="flex min-h-dvh flex-col bg-ferresa-canvas text-ferresa-ink">
      <ScrollToTop />
      <a
        href="#contenido-principal"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-[var(--radius-md)] focus:bg-ferresa-surface focus:px-3 focus:py-2 focus:shadow-soft"
      >
        Saltar al contenido
      </a>

      <Header />

      <main id="contenido-principal" className="flex-1">
        <Outlet />
      </main>

      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </div>
  )
}
