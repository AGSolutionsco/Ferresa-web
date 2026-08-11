import type { NavItem } from '@/types'

/** Navegación principal del sitio */
export const mainNavigation: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Proyectos', href: '/proyectos' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Contacto', href: '/contacto' },
]

/** Extensiones futuras — no presentar como contenido definitivo */
export const futureRoutes = [
  {
    path: '/barranquilla',
    note: 'PENDIENTE DE CONFIRMACIÓN DEL CLIENTE — expansión proyectada',
  },
  {
    path: '/blog',
    note: 'PENDIENTE DE CONFIRMACIÓN DEL CLIENTE — extensión futura',
  },
] as const
