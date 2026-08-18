import type { NavItem } from '@/types'

/** Navegación principal del sitio */
export const mainNavigation: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Proyectos', href: '/proyectos' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Contacto', href: '/contacto' },
]

/**
 * Rutas futuras — no presentadas en navegación.
 * Barranquilla ya es ciudad de operación; una landing dedicada sigue pendiente.
 */
export const futureRoutes = [
  {
    path: '/barranquilla',
    note: 'Landing dedicada pendiente — Ferresa ya opera en Barranquilla',
  },
  {
    path: '/blog',
    note: 'PENDIENTE DE CONFIRMACIÓN DEL CLIENTE — extensión futura',
  },
] as const
