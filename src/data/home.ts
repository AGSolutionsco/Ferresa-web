import { company } from './company'

/**
 * Contenido editable de la Home.
 * FASE 5: alineado a información confirmada del cliente.
 */
export const homeContent = {
  hero: {
    eyebrow: `${company.serviceCities.join(' y ')} · Colombia`,
    title: company.tagline,
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
    imageSrc: null as string | null,
    imageAlt:
      'Mobiliario personalizado Ferresa — fotografía de proyecto pendiente de carga',
  },
  valueProposition: {
    eyebrow: 'Enfoque',
    title: 'Mobiliario pensado para tu espacio',
    provisional: false,
    description:
      'Desarrollamos proyectos personalizados de acuerdo con las medidas, materiales, características del espacio, presupuesto y preferencias de cada cliente.',
    cta: {
      label: 'Solicitar cotización',
      to: '/contacto',
    },
  },
  portfolio: {
    eyebrow: 'Nuestro portafolio',
    title: 'Soluciones para cada espacio',
    provisional: false,
    description:
      'Trabajamos categorías confirmadas de mobiliario y ampliamos el catálogo a medida que el cliente incorpora nuevas líneas.',
    cta: {
      label: 'Ver todos los proyectos',
      to: '/proyectos',
    },
  },
  featuredProjects: {
    eyebrow: 'Proyectos',
    title: 'Proyectos que hablan por nosotros',
    provisional: false,
    description: 'Cuando incorporemos proyectos reales confirmados, aparecerán aquí.',
    emptyMessage: 'Estamos preparando nuestro portafolio de proyectos reales.',
    emptyCta: {
      label: 'Solicitar cotización',
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
    title: 'Mobiliario personalizado para tu espacio',
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
        value: 'Habitacional y comercial',
      },
    ],
    expansionNote: null as string | null,
    imageSrc: null as string | null,
    imageAlt:
      'Sobre Ferresa — fotografía de taller o proyecto pendiente de carga',
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
      'Así acompañamos cada proyecto: desde la primera conversación hasta la instalación.',
    primaryCta: {
      label: 'Solicitar cotización',
      to: '/contacto',
    },
    whatsappCta: {
      label: 'Escríbenos por WhatsApp',
      message:
        'Hola, Ferresa. Estoy interesado en realizar un proyecto de mobiliario y quisiera recibir información y una cotización.',
    },
  },
  differentiators: {
    eyebrow: '¿Por qué Ferresa?',
    title: 'Pensamos en tu espacio',
    provisional: false,
    description:
      'Personalización, fabricación a medida e instalación incluida en la cotización.',
  },
  testimonials: {
    eyebrow: 'Testimonios',
    title: 'Lo que dicen nuestros clientes',
    description:
      'Cuando existan testimonios confirmados, aparecerán aquí.',
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
  finalCta: {
    title: '¿Tienes un proyecto en mente?',
    description:
      'Cuéntanos qué necesitas. En Ferresa te acompañamos desde la cotización hasta la instalación.',
    primaryCta: {
      label: 'Solicitar cotización',
      to: '/contacto',
    },
    whatsappCta: {
      label: 'Escríbenos por WhatsApp',
      message:
        'Hola, Ferresa. Estoy interesado en realizar un proyecto de mobiliario y quisiera recibir información y una cotización.',
    },
  },
} as const
