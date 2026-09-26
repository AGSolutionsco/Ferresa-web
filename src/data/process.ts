import type { ProcessStep } from '@/types'

/**
 * Proceso Ferresa — alineado a información confirmada.
 * Sin plazos, pagos ni garantías no confirmadas.
 */
export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Cuéntanos tu idea',
    description:
      'Te comunicas con Ferresa por WhatsApp o desde la web y explicas qué necesitas.',
  },
  {
    number: '02',
    title: 'Analizamos el espacio',
    description:
      'Revisamos medidas, necesidades, características del espacio, materiales y presupuesto.',
  },
  {
    number: '03',
    title: 'Desarrollamos la propuesta',
    description:
      'Coordinamos una propuesta de remodelación, construcción o mobiliario a medida para tu proyecto.',
  },
  {
    number: '04',
    title: 'Fabricamos',
    description:
      'Producimos el mobiliario de acuerdo con las especificaciones aprobadas.',
  },
  {
    number: '05',
    title: 'Instalamos',
    description:
      'Realizamos el montaje, la instalación y la entrega final del trabajo.',
  },
]
