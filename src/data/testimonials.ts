import type { Testimonial } from '@/types'

/**
 * Testimonios reales confirmados.
 * Vacío intencionalmente: no inventar nombres ni reseñas.
 * Activar UI cuando existan ítems con published: true.
 */
export const testimonials: Testimonial[] = [
  // PENDIENTE DE CONFIRMACIÓN DEL CLIENTE
]

export function getPublishedTestimonials(): Testimonial[] {
  return testimonials.filter((item) => item.published)
}
