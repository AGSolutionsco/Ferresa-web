import type { Service } from '@/types'

/**
 * Servicios confirmados (FASE 5).
 * El diseño se gestiona mediante un tercero contratado por Ferresa —
 * no afirmar departamento interno de diseño.
 * No presentar asesoría formal como servicio principal.
 */
export const services: Service[] = [
  {
    id: 'diseno',
    title: 'Diseño del proyecto',
    description:
      'Coordinamos el desarrollo de una propuesta de mobiliario personalizado según las necesidades, medidas y características de cada espacio.',
  },
  {
    id: 'fabricacion',
    title: 'Fabricación',
    description:
      'Fabricamos el mobiliario de acuerdo con las especificaciones aprobadas para cada proyecto.',
  },
  {
    id: 'personalizacion',
    title: 'Personalización',
    description:
      'Cada proyecto se adapta a las medidas, materiales, espacio disponible, presupuesto y preferencias del cliente.',
  },
  {
    id: 'instalacion',
    title: 'Instalación',
    description:
      'Realizamos la instalación del mobiliario: entrega de materiales, montaje, mano de obra y entrega final. El costo de instalación se incluye en la cotización.',
  },
  {
    id: 'logistica',
    title: 'Logística y transporte',
    description:
      'Gestionamos el transporte cuando es necesario. Ferresa asume este costo dentro del proceso del proyecto.',
  },
]
