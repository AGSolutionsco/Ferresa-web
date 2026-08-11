import type { Differentiator } from '@/types'

/**
 * Diferenciadores Ferresa.
 * Contenido provisional proporcionado por el cliente — pendiente de validación final.
 * No agregar beneficios no confirmados (garantías, precios, certificaciones, etc.).
 */
export const differentiators: Differentiator[] = [
  {
    id: 'diseno-personalizado',
    title: 'Diseño personalizado',
    description:
      'Cada proyecto se adapta a las necesidades y dimensiones del cliente.',
  },
  {
    id: 'fabricacion-a-medida',
    title: 'Fabricación a medida',
    description: 'Creamos soluciones que se ajustan al espacio disponible.',
  },
  {
    id: 'servicio-integral',
    title: 'Servicio integral',
    description: 'Diseñamos, fabricamos e instalamos.',
  },
  {
    id: 'aprovechamiento-espacio',
    title: 'Aprovechamiento del espacio',
    description: 'Buscamos que cada metro cuadrado tenga una función.',
  },
  {
    id: 'atencion-personalizada',
    title: 'Atención personalizada',
    description:
      'Acompañamos al cliente durante el desarrollo del proyecto.',
  },
  {
    id: 'residencial-comercial',
    title: 'Soluciones residenciales y comerciales',
    description: 'Atendemos hogares y negocios.',
  },
]

/** Prioridad visual en Home (orden de aparición). */
export const homeDifferentiatorIds = [
  'diseno-personalizado',
  'fabricacion-a-medida',
  'servicio-integral',
  'aprovechamiento-espacio',
  'atencion-personalizada',
  'residencial-comercial',
] as const
