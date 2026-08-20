import type { PortfolioCategory, ProjectCategory } from '@/types'

/**
 * Taxonomía de proyectos.
 * confirmed: true = producto confirmado por el cliente (FASE 5).
 * El resto queda preparado para ampliación futura — no se muestra en Home/catálogo público.
 */
export const categories: ProjectCategory[] = [
  { id: 'cocinas', label: 'Cocinas', confirmed: true },
  { id: 'closets', label: 'Closets', confirmed: true },
  {
    id: 'centros-de-entretenimiento',
    label: 'Centros de entretenimiento',
    confirmed: true,
  },
  { id: 'recibidores', label: 'Recibidores', confirmed: true },
  { id: 'espejos', label: 'Espejos', confirmed: true },
  // Preparadas — PENDIENTE DE CONFIRMACIÓN DEL CLIENTE
  { id: 'vestidores', label: 'Vestidores', confirmed: false },
  { id: 'salas', label: 'Salas', confirmed: false },
  { id: 'oficinas', label: 'Oficinas', confirmed: false },
  { id: 'comercial', label: 'Comercial', confirmed: false },
  { id: 'proyectos-especiales', label: 'Proyectos especiales', confirmed: false },
]

export const confirmedCategories = categories.filter((item) => item.confirmed)

/**
 * Catálogo público — solo productos confirmados.
 * Ampliar cuando el cliente entregue más categorías.
 */
export const categoryCatalog = {
  confirmados: [
    'Cocinas',
    'Closets',
    'Centros de entretenimiento',
    'Recibidores',
    'Espejos',
  ],
} as const

/**
 * Categorías de Home / puente comercial — solo confirmadas.
 * Imágenes: public/images/categories/{slug}.jpg (cuando existan).
 */
export const portfolioCategories: PortfolioCategory[] = [
  {
    id: 'cocinas',
    name: 'Cocinas',
    slug: 'cocinas',
    summary: 'Mobiliario de cocina a medida',
    description:
      'Cocinas personalizadas según medidas, materiales y espacio disponible.',
    imageSrc: null,
    imageAlt: 'Categoría Cocinas — fotografía pendiente',
    href: '/servicios#cocinas',
    featured: true,
  },
  {
    id: 'closets',
    name: 'Closets',
    slug: 'closets',
    summary: 'Organización a medida',
    description: 'Closets adaptados al espacio y a las necesidades de uso.',
    imageSrc: null,
    imageAlt: 'Categoría Closets — fotografía pendiente',
    href: '/servicios#closets',
  },
  {
    id: 'centros-de-entretenimiento',
    name: 'Centros de entretenimiento',
    slug: 'centros-de-entretenimiento',
    summary: 'Salas y espacios de TV',
    description:
      'Centros de entretenimiento diseñados para el ambiente y el uso diario.',
    imageSrc: null,
    imageAlt: 'Categoría Centros de entretenimiento — fotografía pendiente',
    href: '/servicios#centros-de-entretenimiento',
  },
  {
    id: 'recibidores',
    name: 'Recibidores',
    slug: 'recibidores',
    summary: 'Primer impacto del hogar',
    description: 'Recibidores funcionales y a medida para el ingreso.',
    imageSrc: null,
    imageAlt: 'Categoría Recibidores — fotografía pendiente',
    href: '/servicios#recibidores',
  },
  {
    id: 'espejos',
    name: 'Espejos',
    slug: 'espejos',
    summary: 'Complementos a medida',
    description: 'Espejos adaptados al proyecto y al espacio.',
    imageSrc: null,
    imageAlt: 'Categoría Espejos — fotografía pendiente',
    href: '/servicios#espejos',
  },
]
