/** Tipos compartidos del sitio Ferresa */

/** Categorías confirmadas + preparadas para ampliación futura */
export type ProjectCategoryId =
  | 'cocinas'
  | 'closets'
  | 'centros-de-entretenimiento'
  | 'recibidores'
  | 'espejos'
  | 'vestidores'
  | 'salas'
  | 'oficinas'
  | 'comercial'
  | 'proyectos-especiales'

export interface ProjectCategory {
  id: ProjectCategoryId
  label: string
  description?: string
  /** Solo mostrar en catálogo público si true */
  confirmed: boolean
}

/**
 * Categoría principal del portafolio (Home / navegación comercial).
 */
export interface PortfolioCategory {
  id: string
  name: string
  slug: string
  summary?: string
  description?: string
  imageSrc?: string | null
  imageAlt?: string
  href: string
  featured?: boolean
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
  published: boolean
  featured?: boolean
}

export interface Service {
  id: string
  title: string
  description: string
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
  handle?: string
}

export interface CompanyInfo {
  name: string
  legalName?: string
  foundedYear: number
  tagline: string
  supportingLine: string
  description: string
  history: string[]
  primaryLocation: {
    city: string
    country: string
    address?: string
  }
  /** Ciudades donde presta servicios actualmente */
  serviceCities: string[]
  businessHours?: string
  whatsapp: {
    /** Solo dígitos con código de país, ej. 573152121687 */
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
    showTestimonials: boolean
    showMaterials: boolean
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
  confirmed: boolean
}

export interface Testimonial {
  id: string
  name: string
  city?: string
  quote: string
  projectTitle?: string
  imageSrc?: string | null
  published: boolean
}

export interface FaqItem {
  id: string
  question: string
  answer: string
  published: boolean
}

export interface PageSeo {
  title: string
  description: string
}
