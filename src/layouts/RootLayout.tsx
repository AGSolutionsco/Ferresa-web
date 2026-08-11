import { Outlet } from 'react-router-dom'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { WhatsAppButton } from '@/components/layout/WhatsAppButton'

/**
 * Layout raíz con sistema visual FASE 2.
 */
export function RootLayout() {
  return (
    <div className="flex min-h-dvh flex-col bg-ferresa-canvas text-ferresa-ink">
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
    </div>
  )
}
