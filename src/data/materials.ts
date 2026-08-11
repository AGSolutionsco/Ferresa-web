import type { MaterialItem } from '@/types'

/**
 * Lista preliminar de materiales.
 * PENDIENTE DE CONFIRMACIÓN DEL CLIENTE.
 * No mostrar en UI hasta company.flags.showMaterials === true.
 */
export const materials: MaterialItem[] = [
  { id: 'mdf', label: 'MDF', confirmed: false },
  { id: 'maderas', label: 'Maderas', confirmed: false },
  { id: 'melaminas', label: 'Melaminas', confirmed: false },
  { id: 'laminados', label: 'Laminados', confirmed: false },
  { id: 'vidrio', label: 'Vidrio', confirmed: false },
  { id: 'espejos', label: 'Espejos', confirmed: false },
  { id: 'herrajes', label: 'Herrajes', confirmed: false },
  { id: 'iluminacion-integrada', label: 'Iluminación integrada', confirmed: false },
]
