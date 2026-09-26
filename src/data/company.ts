import type { CompanyInfo } from '@/types'

/**
 * Datos confirmados de Ferresa (FASE 5 — fuente de verdad del cliente).
 * No inventar campos no confirmados.
 */
export const company: CompanyInfo = {
  name: 'Ferresa',
  legalName: 'Diseños y Maderas Álamo SAS',
  foundedYear: 2023,
  tagline: 'Transformamos espacios en lugares únicos',
  supportingLine:
    'Remodelaciones y construcciones. Soluciones de mobiliario a medida.',
  description:
    'Ferresa desarrolla remodelaciones, construcciones y soluciones de mobiliario a medida para espacios residenciales y comerciales en Medellín y Barranquilla.',
  history: [
    'Ferresa nació en 2023 bajo la razón social Diseños y Maderas Álamo SAS, mediante la cual comenzó a darse a conocer y desarrolló diferentes proyectos.',
    'Hoy operamos en Medellín y Barranquilla, ofreciendo remodelaciones, construcciones y mobiliario personalizado para espacios residenciales y comerciales.',
    'Desarrollamos proyectos adaptados a las medidas, materiales, características del espacio, presupuesto y preferencias de cada cliente. Fabricamos e instalamos el mobiliario cuando el proyecto lo requiere, e incluimos la instalación dentro de la cotización.',
  ],
  primaryLocation: {
    city: 'Medellín',
    country: 'Colombia',
    address: 'Calle 50 #77B-47, Medellín',
  },
  serviceCities: ['Medellín', 'Barranquilla'],
  businessHours: '7:00 a. m. – 5:00 p. m.',
  whatsapp: {
    number: '573152121687',
    display: '315 212 1687',
  },
  social: {
    instagram: {
      label: 'Instagram',
      href: 'https://www.instagram.com/ferresa.co/',
      handle: '@ferresa.co',
    },
  },
  contact: {
    // email: NO DISPONIBLE — no inventar
    address: 'Calle 50 #77B-47, Medellín',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Calle+50+%2377B-47%2C+Medell%C3%ADn%2C+Colombia',
    mapsEmbedUrl:
      'https://www.google.com/maps?q=Calle+50+%2377B-47,+Medell%C3%ADn,+Colombia&z=16&output=embed',
  },
  flags: {
    showTestimonials: false,
    showMaterials: false,
    showMaps: true,
  },
}
