import type { QuoteProjectType } from '@/types'

/** Tipos de proyecto para cotización — alineados a productos confirmados */
export const quoteProjectTypes: QuoteProjectType[] = [
  { id: 'cocina', label: 'Cocina' },
  { id: 'closet', label: 'Closet' },
  { id: 'centro-entretenimiento', label: 'Centro de entretenimiento' },
  { id: 'recibidor', label: 'Recibidor' },
  { id: 'espejos', label: 'Espejos' },
  { id: 'otro', label: 'Otro / personalizado' },
]
