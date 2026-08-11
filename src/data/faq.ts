import type { FaqItem } from '@/types'

/**
 * FAQ — estructura preparada.
 * Sin respuestas inventadas. Agregar ítems con published: true cuando el cliente confirme.
 *
 * Ejemplo:
 * { id: '1', question: '...', answer: '...', published: true }
 */
export const faqItems: FaqItem[] = [
  // PENDIENTE DE CONFIRMACIÓN DEL CLIENTE
]

export function getPublishedFaqItems(): FaqItem[] {
  return faqItems.filter((item) => item.published)
}
