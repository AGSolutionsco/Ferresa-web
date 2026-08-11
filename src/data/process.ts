import type { ProcessStep } from '@/types'

/**
 * Pasos del proceso Ferresa.
 * Contenido provisional proporcionado por el cliente — pendiente de validación final.
 * No agregar pagos, plazos, garantías u otros pasos no confirmados.
 */
export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Cuéntanos tu idea',
    description:
      'El cliente se comunica con Ferresa y explica qué necesita.',
  },
  {
    number: '02',
    title: 'Analizamos el espacio',
    description:
      'Se revisan dimensiones, necesidades, estilo y presupuesto.',
  },
  {
    number: '03',
    title: 'Diseñamos',
    description: 'Se desarrolla una propuesta personalizada.',
  },
  {
    number: '04',
    title: 'Fabricamos',
    description:
      'El mobiliario se produce de acuerdo con las especificaciones aprobadas.',
  },
  {
    number: '05',
    title: 'Instalamos',
    description:
      'Ferresa realiza la instalación y entrega del proyecto.',
  },
]
