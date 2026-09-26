import type { Project } from '@/types'

/**
 * Proyectos reales de Ferresa con fotografías del cliente (FASE 8).
 * Ciudad omitida: no es identificable en las fotos.
 * Sin medidas, materiales técnicos, precios ni garantías inventados.
 */
export const projects: Project[] = [
  {
    id: 'closet-puertas-vidrio',
    slug: 'closet-puertas-vidrio',
    title: 'Closet con puertas de vidrio',
    category: 'closets',
    description:
      'Closet a medida de piso a techo, con puertas de vidrio, marco oscuro e iluminación interior.',
    images: ['/images/projects/closet-puertas-vidrio.jpg'],
    features: [
      'Puertas de vidrio de piso a techo',
      'Iluminación interior visible',
      'Organización interior a medida',
    ],
    published: true,
    featured: true,
  },
  {
    id: 'cocina-isla',
    slug: 'cocina-isla',
    title: 'Cocina con isla',
    category: 'cocinas',
    description:
      'Cocina a medida con isla central, combinación de acabados claros y oscuros, y campana sobre la zona de cocción.',
    images: [
      '/images/projects/cocina-isla-01.jpg',
      '/images/projects/cocina-isla-02.jpg',
    ],
    features: [
      'Isla central',
      'Mobiliario a medida de piso a techo',
      'Zona de cocción en la isla',
    ],
    published: true,
    featured: true,
  },
  {
    id: 'centro-entretenimiento-panel',
    slug: 'centro-entretenimiento-panel',
    title: 'Centro de entretenimiento',
    category: 'centros-de-entretenimiento',
    description:
      'Mueble de TV a medida con panel de fondo, mueble bajo flotante, estantería lateral e iluminación integrada.',
    images: ['/images/projects/centro-entretenimiento-panel.jpg'],
    features: [
      'Panel de fondo a medida',
      'Mueble bajo flotante',
      'Iluminación integrada visible',
    ],
    published: true,
    featured: true,
  },
  {
    id: 'recibidor-espejo-circular',
    slug: 'recibidor-espejo-circular',
    title: 'Recibidor con espejo circular',
    category: 'recibidores',
    description:
      'Recibidor a medida con espejo circular, consola flotante y panel de fondo.',
    images: [
      '/images/projects/recibidor-espejo-circular-01.jpg',
      '/images/projects/recibidor-espejo-circular-02.jpg',
    ],
    features: [
      'Espejo circular',
      'Consola flotante',
      'Iluminación perimetral visible',
    ],
    published: true,
  },
  {
    id: 'espejo-empotrado-iluminado',
    slug: 'espejo-empotrado-iluminado',
    title: 'Espejo de piso a techo',
    category: 'espejos',
    description:
      'Espejo a medida de piso a techo, con paneles laterales e iluminación integrada.',
    images: ['/images/projects/espejo-empotrado-iluminado.jpg'],
    features: [
      'Formato de piso a techo',
      'Paneles laterales',
      'Iluminación integrada visible',
    ],
    published: true,
  },
  {
    id: 'centro-entretenimiento-divisor',
    slug: 'centro-entretenimiento-divisor',
    title: 'Centro de entretenimiento divisor',
    category: 'centros-de-entretenimiento',
    description:
      'Mueble a medida que combina centro de entretenimiento y divisor de ambiente, con estructura oscura, madera clara y estantería iluminada.',
    images: ['/images/projects/centro-entretenimiento-divisor.jpg'],
    features: [
      'Función de divisor de ambiente',
      'Estantería abierta',
      'Iluminación en estantes',
    ],
    published: true,
  },
  {
    id: 'closet-empotrado',
    slug: 'closet-empotrado',
    title: 'Closet empotrado',
    category: 'closets',
    description:
      'Closet empotrado a medida con maleteros superiores, puertas correderas y organización interior visible.',
    images: [
      '/images/projects/closet-empotrado-01.jpg',
      '/images/projects/closet-empotrado-02.jpg',
    ],
    features: [
      'Puertas correderas',
      'Maleteros superiores',
      'Barra y entrepaños interiores',
    ],
    published: true,
  },
]

export function getFeaturedProjects(limit = 3): Project[] {
  return projects
    .filter((project) => project.published && project.featured)
    .slice(0, limit)
}

/** Al publicar un proyecto, incluir también su URL en `public/sitemap.xml`. */
export function getPublishedProjects(): Project[] {
  return projects.filter((project) => project.published)
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug && project.published)
}
