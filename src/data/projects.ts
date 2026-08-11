import type { Project } from '@/types'

/**
 * Proyectos reales de Ferresa.
 * Vacío intencionalmente: no inventar proyectos.
 * AG Solutions agregará proyectos confirmados con imágenes reales.
 *
 * Estructura esperada por ítem:
 * id, slug, title, category, city, description, images, features, published, featured?
 */
export const projects: Project[] = [
  // PENDIENTE DE CONFIRMACIÓN DEL CLIENTE — agregar proyectos reales aquí
]

/**
 * Selección para Home: publicados + destacados, sin duplicar, con límite.
 */
export function getFeaturedProjects(limit = 3): Project[] {
  return projects
    .filter((project) => project.published && project.featured)
    .slice(0, limit)
}
