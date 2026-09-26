import type { PageSeo, Project } from '@/types'
import { company } from './company'
import { categories } from './categories'
import { getPublishedProjects } from './projects'

const cities = company.serviceCities.join(' y ')

/** Dominio canónico. Sobrescribir con VITE_SITE_URL al publicar. */
export const siteUrl = (
  import.meta.env.VITE_SITE_URL ?? 'https://ferresa.co'
).replace(/\/$/, '')

/** Imagen Open Graph por defecto — fotografía real de proyecto. */
export const defaultOgImage = '/images/projects/closet-puertas-vidrio.jpg'

export function absoluteUrl(path: string, origin: string = siteUrl): string {
  if (/^https?:\/\//i.test(path)) return path
  const base = origin.replace(/\/$/, '')
  const suffix = path.startsWith('/') ? path : `/${path}`
  return `${base}${suffix}`
}

/**
 * SEO por ruta — búsqueda local Medellín / Barranquilla.
 * Posicionamiento: remodelaciones, construcciones y mobiliario a medida.
 */
export const pageSeo = {
  home: {
    title: `Ferresa | Remodelaciones y construcciones en ${cities}`,
    description:
      'Remodelaciones, construcciones y mobiliario a medida en Medellín y Barranquilla. Ferresa coordina proyectos integrales para espacios residenciales y comerciales.',
    image: defaultOgImage,
  },
  projects: {
    title: `Proyectos de remodelación y mobiliario a medida | Ferresa ${cities}`,
    description:
      'Cocinas, closets, centros de entretenimiento, recibidores y espejos fabricados e instalados por Ferresa en Medellín y Barranquilla.',
    image: '/images/projects/cocina-isla-01.jpg',
  },
  projectDetail: (project: Project): PageSeo => {
    const categoryLabel =
      categories.find((item) => item.id === project.category)?.label ??
      'mobiliario'
    return {
      title: `${project.title} | ${categoryLabel} a medida — Ferresa`,
      description: `${project.description} Remodelaciones, construcciones y mobiliario a medida en Medellín y Barranquilla.`,
      image: project.images[0] ?? defaultOgImage,
    }
  },
  projectNotFound: {
    title: 'Proyecto no encontrado | Ferresa',
    description: 'El proyecto solicitado no está disponible en el portafolio de Ferresa.',
    robots: 'noindex, nofollow',
  },
  services: {
    title: `Remodelaciones, construcciones y mobiliario | Ferresa ${cities}`,
    description:
      'Remodelaciones, construcciones y mobiliario a medida para espacios residenciales y comerciales en Medellín y Barranquilla.',
    image: '/images/categories/cocinas.jpg',
  },
  about: {
    title: `Nosotros | Ferresa, remodelaciones y construcciones en ${cities}`,
    description: `Ferresa nació en ${company.foundedYear}. Remodelaciones, construcciones y mobiliario a medida en Medellín y Barranquilla.`,
    image: '/images/projects/cocina-isla-01.jpg',
  },
  contact: {
    title: `Cotizar remodelación o mobiliario a medida en ${cities} | Ferresa`,
    description:
      'Cotiza remodelaciones, construcciones o mobiliario a medida en Medellín o Barranquilla. WhatsApp es el canal principal de Ferresa.',
    image: defaultOgImage,
  },
  privacy: {
    title: 'Política de Tratamiento de Datos Personales | Ferresa',
    description:
      'Política de tratamiento de datos personales de Ferresa conforme a la Ley 1581 de 2012 (Habeas Data) en Colombia.',
  },
  terms: {
    title: 'Términos y Condiciones | Ferresa',
    description:
      'Términos y condiciones de uso del sitio Ferresa. Cotizaciones personalizadas y protección de propiedad intelectual.',
  },
  notFound: {
    title: 'Página no encontrada | Ferresa',
    description:
      'La página solicitada no existe. Visita Ferresa para remodelaciones, construcciones y mobiliario a medida en Medellín y Barranquilla.',
    robots: 'noindex, nofollow',
  },
} as const

/** Rutas públicas para sitemap (estático + slugs publicados). */
export function getSitemapPaths(): string[] {
  const staticPaths = [
    '/',
    '/proyectos',
    '/servicios',
    '/nosotros',
    '/contacto',
    '/privacidad',
    '/terminos',
  ]
  const projectPaths = getPublishedProjects().map(
    (project) => `/proyectos/${project.slug}`,
  )
  return [...staticPaths, ...projectPaths]
}
