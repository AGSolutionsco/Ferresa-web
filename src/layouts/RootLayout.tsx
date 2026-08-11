import { Outlet } from 'react-router-dom'

/**
 * Layout raíz.
 * Header / Footer se implementarán en la FASE 2.
 */
export function RootLayout() {
  return (
    <div className="min-h-dvh bg-neutral-50 text-neutral-900">
      <a
        href="#contenido-principal"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:shadow"
      >
        Saltar al contenido
      </a>
      <main id="contenido-principal">
        <Outlet />
      </main>
    </div>
  )
}
