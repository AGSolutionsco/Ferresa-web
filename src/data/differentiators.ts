import type { Differentiator } from '@/types'

/**
 * Diferenciadores — alineados a información confirmada (FASE 5).
 * Sin asesoría formal como servicio principal, sin equipo interno de diseño.
 */
export const differentiators: Differentiator[] = [
  {
    id: 'diseno-personalizado',
    title: 'Proyectos personalizados',
    description:
      'Cada proyecto se adapta a las necesidades y características particulares de cada cliente.',
  },
  {
    id: 'fabricacion-a-medida',
    title: 'Fabricación a medida',
    description:
      'Fabricamos soluciones que se ajustan al espacio disponible y a las especificaciones del proyecto.',
  },
  {
    id: 'servicio-integral',
    title: 'Servicio integral',
    description:
      'Acompañamos el proyecto desde la cotización hasta la fabricación e instalación.',
  },
  {
    id: 'aprovechamiento-espacio',
    title: 'Aprovechamiento del espacio',
    description:
      'Buscamos que cada metro cuadrado tenga una función según el uso real del ambiente.',
  },
  {
    id: 'instalacion-incluida',
    title: 'Instalación incluida en la cotización',
    description:
      'La instalación forma parte del servicio y su costo se incluye en la cotización.',
  },
  {
    id: 'residencial-comercial',
    title: 'Residencial y comercial',
    description:
      'Atendemos espacios habitacionales y comerciales en Medellín y Barranquilla.',
  },
]

export const homeDifferentiatorIds = [
  'diseno-personalizado',
  'fabricacion-a-medida',
  'servicio-integral',
  'aprovechamiento-espacio',
  'instalacion-incluida',
  'residencial-comercial',
] as const
