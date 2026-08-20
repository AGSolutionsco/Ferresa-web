import type { PageSeo } from '@/types'
import { company } from './company'

const cities = company.serviceCities.join(' y ')

/**
 * SEO base por ruta — Medellín y Barranquilla (operación actual).
 */
export const pageSeo = {
  home: {
    title: `Ferresa | Mobiliario personalizado en ${cities}`,
    description: company.description,
  },
  projects: {
    title: `Proyectos | Ferresa — ${cities}`,
    description:
      'Portafolio de mobiliario personalizado fabricado e instalado por Ferresa en Medellín y Barranquilla.',
  },
  projectDetail: (projectTitle: string): PageSeo => ({
    title: `${projectTitle} | Proyectos Ferresa`,
    description: `Proyecto ${projectTitle} de mobiliario personalizado por Ferresa.`,
  }),
  projectNotFound: {
    title: 'Proyecto no encontrado | Ferresa',
    description: 'El proyecto solicitado no está disponible.',
  },
  services: {
    title: `Servicios | Ferresa — ${cities}`,
    description:
      'Fabricación, personalización e instalación de mobiliario para espacios residenciales y comerciales en Medellín y Barranquilla.',
  },
  about: {
    title: `Nosotros | Ferresa — ${cities}`,
    description: `Ferresa nació en ${company.foundedYear}. Fabricación e instalación de mobiliario personalizado en ${cities}.`,
  },
  contact: {
    title: `Cotizar proyecto | Ferresa — ${cities}`,
    description:
      'Solicita una cotización de mobiliario personalizado en Medellín o Barranquilla. WhatsApp es nuestro canal principal.',
  },
  notFound: {
    title: 'Página no encontrada | Ferresa',
    description: 'La página solicitada no existe.',
  },
} as const
