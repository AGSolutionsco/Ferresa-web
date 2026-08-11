import type { PortfolioCategory, ProjectCategory } from '@/types'

/**
 * Taxonomía fina de proyectos (filtros / detalle).
 * Se mantiene para FASE 4 — no inventar ítems.
 */
export const categories: ProjectCategory[] = [
  { id: 'cocinas', label: 'Cocinas' },
  { id: 'closets', label: 'Closets' },
  { id: 'vestidores', label: 'Vestidores' },
  { id: 'salas', label: 'Salas' },
  {
    id: 'centros-de-entretenimiento',
    label: 'Centros de entretenimiento',
  },
  { id: 'recibidores', label: 'Recibidores' },
  { id: 'oficinas', label: 'Oficinas' },
  { id: 'comercial', label: 'Comercial' },
  { id: 'proyectos-especiales', label: 'Proyectos especiales' },
]

/**
 * Catálogo detallado (cliente) — preparado para /servicios.
 * No se renderiza ítem por ítem en la Home.
 */
export const categoryCatalog = {
  hogar: [
    'Cocinas integrales',
    'Closets',
    'Vestidores',
    'Centros de entretenimiento',
    'Muebles de sala',
    'Recibidores',
    'Consolas',
    'Muebles de habitaciones',
    'Mesas de noche',
    'Muebles de baño',
    'Bibliotecas',
    'Paneles decorativos',
    'Repisas',
    'Muebles auxiliares',
  ],
  empresas: [
    'Mobiliario de oficinas',
    'Escritorios',
    'Recepciones',
    'Muebles para locales comerciales',
    'Exhibidores',
    'Estanterías',
    'Mobiliario corporativo',
  ],
  especiales: [
    'Muebles personalizados',
    'Soluciones personalizadas según dimensiones y necesidades',
  ],
} as const

/**
 * Categorías principales de Home — puente comercial.
 * Imágenes: null hasta cargar fotos reales en public/images.
 */
export const portfolioCategories: PortfolioCategory[] = [
  {
    id: 'hogar',
    name: 'Hogar',
    slug: 'hogar',
    summary: 'Cocinas · Closets · Salas · Vestidores',
    description:
      'Mobiliario residencial personalizado para distintos ambientes del hogar.',
    imageSrc: null,
    imageAlt: 'Categoría Hogar — fotografía pendiente',
    href: '/proyectos',
    featured: true,
  },
  {
    id: 'oficinas',
    name: 'Oficinas',
    slug: 'oficinas',
    summary: 'Escritorios · Recepciones · Corporativo',
    description: 'Soluciones de mobiliario para espacios de trabajo.',
    imageSrc: null,
    imageAlt: 'Categoría Oficinas — fotografía pendiente',
    href: '/proyectos',
  },
  {
    id: 'comercial',
    name: 'Comercial',
    slug: 'comercial',
    summary: 'Locales · Exhibidores · Estanterías',
    description: 'Mobiliario para locales y espacios comerciales.',
    imageSrc: null,
    imageAlt: 'Categoría Comercial — fotografía pendiente',
    href: '/proyectos',
  },
  {
    id: 'proyectos-personalizados',
    name: 'Proyectos personalizados',
    slug: 'proyectos-personalizados',
    summary: 'A medida según espacio y necesidad',
    description:
      'Proyectos especiales y soluciones personalizadas según dimensiones y necesidades.',
    imageSrc: null,
    imageAlt: 'Categoría Proyectos personalizados — fotografía pendiente',
    href: '/servicios',
  },
]
