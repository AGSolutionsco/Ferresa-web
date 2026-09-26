import { company } from './company'
import { postSaleContent } from './postSale'

/**
 * Contenido editable de la Home.
 * Posicionamiento: remodelaciones, construcciones y mobiliario a medida.
 */
export const homeContent = {
  hero: {
    eyebrow: `${company.serviceCities.join(' y ')} · Colombia`,
    title:
      'Remodelaciones, construcciones y soluciones de mobiliario para tu espacio.',
    description: company.description,
    supportingLine: company.supportingLine,
    primaryCta: {
      label: 'Cotizar mi proyecto',
      to: '/contacto',
    },
    secondaryCta: {
      label: 'Ver nuestros proyectos',
      to: '/proyectos',
    },
    imageSrc: '/images/projects/closet-puertas-vidrio.jpg',
    imageAlt: 'Closet a medida con puertas de vidrio, Ferresa',
  },
  valueProposition: {
    eyebrow: 'Enfoque',
    title: 'Remodelaciones y construcciones con mobiliario a medida',
    provisional: false,
    description:
      'Acompañamos proyectos integrales: remodelaciones, construcciones y mobiliario personalizado según las medidas, materiales, características del espacio, presupuesto y preferencias de cada cliente.',
    cta: {
      label: 'Cotizar mi proyecto',
      to: '/contacto',
    },
  },
  portfolio: {
    eyebrow: 'Soluciones',
    title: 'Soluciones para cada espacio',
    provisional: false,
    description:
      'Cocinas, closets, centros de entretenimiento, recibidores y espejos, desarrollados a medida como parte de tu proyecto.',
    cta: {
      label: 'Ver servicios',
      to: '/servicios',
    },
  },
  featuredProjects: {
    eyebrow: 'Proyectos',
    title: 'Proyectos que hablan por nosotros',
    provisional: false,
    description:
      'Una selección de trabajos fabricados e instalados por Ferresa, con mobiliario a medida integrado al espacio.',
    emptyTitle: 'Estamos documentando nuestros proyectos',
    emptyMessage:
      'Mientras tanto, cuéntanos tu idea y te orientamos sobre el siguiente paso.',
    emptyCta: {
      label: 'Cotizar mi proyecto',
      to: '/contacto',
    },
    cta: {
      label: 'Ver todos los proyectos',
      to: '/proyectos',
    },
    limit: 3,
  },
  about: {
    eyebrow: 'Sobre Ferresa',
    title: 'Remodelaciones, construcciones y mobiliario a medida',
    provisional: false,
    paragraphs: company.history,
    highlights: [
      {
        label: 'Inicio de operaciones',
        value: String(company.foundedYear),
      },
      {
        label: 'Ciudades atendidas',
        value: company.serviceCities.join(' y '),
      },
      {
        label: 'Ámbitos de trabajo',
        value: 'Residencial y comercial',
      },
    ],
    expansionNote: null as string | null,
    imageSrc: '/images/projects/cocina-isla-01.jpg',
    imageAlt: 'Cocina a medida con isla, Ferresa',
    cta: {
      label: 'Conoce más sobre Ferresa',
      to: '/nosotros',
    },
  },
  process: {
    eyebrow: 'Nuestro proceso',
    title: 'De la idea a la instalación',
    provisional: false,
    description:
      'Así acompañamos cada proyecto: desde la primera conversación hasta la entrega.',
    primaryCta: {
      label: 'Cotizar mi proyecto',
      to: '/contacto',
    },
    whatsappCta: {
      label: 'Escríbenos por WhatsApp',
      message:
        'Hola, Ferresa. Estoy interesado en un proyecto de remodelación, construcción o mobiliario a medida y quisiera recibir información y una cotización.',
    },
  },
  differentiators: {
    eyebrow: '¿Por qué Ferresa?',
    title: 'Pensamos en tu espacio',
    provisional: false,
    description:
      'Proyectos personalizados, fabricación a medida e instalación incluida en la cotización.',
  },
  testimonials: {
    eyebrow: 'Testimonios',
    title: 'Lo que dicen nuestros clientes',
    description: 'Cuando existan testimonios confirmados, aparecerán aquí.',
    emptyMessage: 'Pronto compartiremos testimonios reales de proyectos Ferresa.',
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Resolvemos tus dudas',
    description:
      'Respuestas confirmadas se publicarán aquí. Mientras tanto, escríbenos por WhatsApp.',
    emptyMessage:
      'Estamos preparando las preguntas frecuentes con información confirmada.',
  },
  postSale: postSaleContent,
  finalCta: {
    title: '¿Tienes un proyecto en mente?',
    description:
      'Cuéntanos qué necesitas. En Ferresa te acompañamos desde la cotización hasta la entrega, y después también.',
    primaryCta: {
      label: 'Cotizar mi proyecto',
      to: '/contacto',
    },
    whatsappCta: {
      label: 'Escríbenos por WhatsApp',
      message:
        'Hola, Ferresa. Estoy interesado en un proyecto de remodelación, construcción o mobiliario a medida y quisiera recibir información y una cotización.',
    },
  },
} as const
