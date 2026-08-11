import { company } from './company'

/**
 * Contenido editable de la Home.
 * Textos provisionales marcados explícitamente.
 */
export const homeContent = {
  hero: {
    eyebrow: `${company.primaryLocation.city}, ${company.primaryLocation.country}`,
    /** H1 único de la Home */
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
    /**
     * Cuando exista fotografía real de proyecto, asignar ruta en /public.
     * Ejemplo: '/images/projects/hero-01.jpg'
     * null = DevImagePlaceholder (desarrollo).
     */
    imageSrc: null as string | null,
    imageAlt:
      'Mobiliario personalizado Ferresa — fotografía de proyecto pendiente de carga',
  },
  valueProposition: {
    eyebrow: 'Enfoque',
    title: 'Diseñamos para tu espacio',
    /**
     * Texto provisional de trabajo — editable desde datos.
     * No agrega afirmaciones específicas no confirmadas.
     */
    provisional: true,
    description:
      'Cada proyecto comienza con una necesidad diferente. En Ferresa desarrollamos soluciones de mobiliario pensadas para adaptarse al espacio, al estilo y a las necesidades de cada cliente.',
    cta: {
      label: 'Cuéntanos tu proyecto',
      to: '/contacto',
    },
  },
  portfolio: {
    eyebrow: 'Nuestro portafolio',
    title: 'Soluciones para cada espacio',
    /**
     * Copy provisional — editable desde datos.
     */
    provisional: true,
    description:
      'Desarrollamos mobiliario pensado para adaptarse a las necesidades, dimensiones y estilo de cada proyecto.',
    cta: {
      label: 'Ver todos los proyectos',
      to: '/proyectos',
    },
  },
  featuredProjects: {
    eyebrow: 'Proyectos',
    title: 'Proyectos que hablan por nosotros',
    /**
     * Copy provisional — editable desde datos.
     */
    provisional: true,
    description: 'Conoce algunos de los proyectos desarrollados por Ferresa.',
    emptyMessage: 'Estamos preparando nuestro portafolio de proyectos.',
    emptyCta: {
      label: 'Conoce nuestro trabajo',
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
    title: 'Diseñamos espacios pensados para ti',
    /**
     * Párrafos provisionales proporcionados por el cliente.
     */
    provisional: true,
    paragraphs: [
      'Ferresa nace en 2024 con el propósito de transformar espacios a través del diseño y la fabricación de mobiliario personalizado.',
      'Desde Medellín, desarrollamos soluciones pensadas para aprovechar cada espacio, combinando funcionalidad, diseño y calidad.',
      'Nuestro trabajo integra diferentes etapas del proyecto: diseño, fabricación e instalación, ofreciendo a nuestros clientes una experiencia completa y personalizada.',
    ],
    /**
     * Datos disponibles en company — solo confirmados/provisionales ya tipados.
     */
    highlights: [
      {
        label: 'Año de fundación',
        value: String(company.foundedYear),
      },
      {
        label: 'Ciudad principal',
        value: company.primaryLocation.city,
      },
      {
        label: 'Ámbitos de trabajo',
        value: 'Residencial y comercial',
      },
    ],
    expansionNote: company.plannedExpansion
      ? `Próxima expansión: ${company.plannedExpansion.city}`
      : null,
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
    /**
     * Copy provisional — pasos en src/data/process.ts
     */
    provisional: true,
    description:
      'Así acompañamos cada proyecto: desde la primera conversación hasta la instalación.',
    primaryCta: {
      label: 'Cuéntanos tu proyecto',
      to: '/contacto',
    },
    whatsappCta: {
      label: 'Escríbenos por WhatsApp',
      message:
        'Hola Ferresa, quiero hablar sobre un proyecto de mobiliario.',
    },
  },
} as const
