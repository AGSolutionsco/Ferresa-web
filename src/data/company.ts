import type { CompanyInfo } from '@/types'

/**
 * Datos confirmados de Ferresa.
 * No inventar campos: dejar opcionales o documentar pendiente.
 */
export const company: CompanyInfo = {
  name: 'Ferresa',
  foundedYear: 2024,
  tagline: 'Transformamos espacios en lugares únicos',
  supportingLine:
    'Diseñamos espacios. Fabricamos soluciones. Creamos ambientes únicos.',
  description:
    'En Ferresa diseñamos, fabricamos e instalamos mobiliario personalizado para hogares, oficinas y espacios comerciales.',
  primaryLocation: {
    city: 'Medellín',
    country: 'Colombia',
  },
  plannedExpansion: {
    city: 'Barranquilla',
    statusLabel: 'Próximamente en Barranquilla',
    note: 'Expansión proyectada. No es una operación actual. PENDIENTE DE CONFIRMACIÓN DEL CLIENTE.',
  },
  whatsapp: {
    number: '573245734731',
    display: '324 573 4731',
  },
  social: {
    instagram: {
      label: 'Instagram',
      href: 'https://www.instagram.com/ferresa.co/',
      handle: '@ferresa.co',
    },
  },
  contact: {
    // email: PENDIENTE DE CONFIRMACIÓN DEL CLIENTE
    // address: PENDIENTE DE CONFIRMACIÓN DEL CLIENTE
    // mapsUrl: PENDIENTE DE CONFIRMACIÓN DEL CLIENTE
  },
  flags: {
    showTestimonials: false,
    showMaterials: false,
    showMaps: false,
  },
}
