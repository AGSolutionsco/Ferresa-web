import type { PageSeo } from '@/types'
import { company } from './company'

const location = `${company.primaryLocation.city}, ${company.primaryLocation.country}`

/**
 * SEO base por ruta — sin keywords artificiales.
 */
export const pageSeo = {
  home: {
    title: `Ferresa | Mobiliario personalizado en ${company.primaryLocation.city}`,
    description: company.description,
  },
  projects: {
    title: `Proyectos | Ferresa — ${location}`,
    description:
      'Conoce proyectos de mobiliario personalizado diseñados, fabricados e instalados por Ferresa.',
  },
  projectDetail: (projectTitle: string): PageSeo => ({
    title: `${projectTitle} | Proyectos Ferresa`,
    description: `Proyecto ${projectTitle} de mobiliario personalizado por Ferresa en ${company.primaryLocation.city}.`,
  }),
  projectNotFound: {
    title: `Proyecto no encontrado | Ferresa`,
    description: 'El proyecto solicitado no está disponible.',
  },
  services: {
    title: `Servicios y soluciones | Ferresa — ${location}`,
    description:
      'Soluciones de mobiliario residencial, oficinas, comercial y proyectos personalizados.',
  },
  about: {
    title: `Nosotros | Ferresa — ${location}`,
    description: `Conoce a Ferresa: diseño, fabricación e instalación de mobiliario personalizado desde ${company.primaryLocation.city}.`,
  },
  contact: {
    title: `Contacto y cotización | Ferresa — ${location}`,
    description:
      'Cuéntanos tu proyecto de mobiliario. Solicita información y cotización con Ferresa.',
  },
  notFound: {
    title: `Página no encontrada | Ferresa`,
    description: 'La página solicitada no existe.',
  },
} as const
