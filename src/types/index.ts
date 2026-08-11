/** Tipos compartidos del sitio Ferresa */

export type ProjectCategoryId =
  | 'cocinas'
  | 'closets'
  | 'vestidores'
  | 'salas'
  | 'centros-de-entretenimiento'
  | 'recibidores'
  | 'oficinas'
  | 'comercial'
  | 'proyectos-especiales'

export interface ProjectCategory {
  id: ProjectCategoryId
  label: string
  description?: string
}

export interface Project {
  id: string
  slug: string
  title: string
  category: ProjectCategoryId
  city: string
  description: string
  images: string[]
  features: string[]
  workType?: string
  /** Si false, no se muestra en listados públicos */
  published: boolean
  featured?: boolean
}

export interface Service {
  id: string
  title: string
  description: string
  /** Icono / imagen opcional — por definir en fases de UI */
  icon?: string
}

export interface ProcessStep {
  number: string
  title: string
  description: string
}

export interface Differentiator {
  id: string
  title: string
  description: string
}

export interface NavItem {
  label: string
  href: string
}

export interface SocialLink {
  label: string
  href: string
  /** handle visible, ej. @ferresa.co */
  handle?: string
}

export interface CompanyInfo {
  name: string
  legalName?: string
  foundedYear: number
  tagline: string
  supportingLine: string
  description: string
  primaryLocation: {
    city: string
    country: string
  }
  /**
   * Expansión proyectada — NO presentar como operación actual.
   * PENDIENTE DE CONFIRMACIÓN DEL CLIENTE para fechas/detalles.
   */
  plannedExpansion?: {
    city: string
    statusLabel: string
    note: string
  }
  whatsapp: {
    /** Solo dígitos con código de país, ej. 573245734731 */
    number: string
    display: string
  }
  social: {
    instagram: SocialLink
  }
  contact: {
    email?: string
    address?: string
    mapsUrl?: string
  }
  flags: {
    /** Activar cuando existan testimonios reales confirmados */
    showTestimonials: boolean
    /** Activar cuando materiales estén confirmados por el cliente */
    showMaterials: boolean
    /** Activar cuando exista dirección exacta */
    showMaps: boolean
  }
}

export interface QuoteProjectType {
  id: string
  label: string
}

export interface MaterialItem {
  id: string
  label: string
  /** true solo cuando el cliente confirmó el material */
  confirmed: boolean
}

export interface Testimonial {
  id: string
  name: string
  city?: string
  quote: string
  projectTitle?: string
}
