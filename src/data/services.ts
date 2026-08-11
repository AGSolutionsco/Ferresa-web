import type { Service } from '@/types'

/**
 * Servicios basados en información confirmada.
 * No inventar servicios adicionales sin confirmación del cliente.
 */
export const services: Service[] = [
  {
    id: 'diseno',
    title: 'Diseño',
    description:
      'Diseñamos mobiliario personalizado adaptado al espacio y a las necesidades de cada cliente.',
  },
  {
    id: 'fabricacion',
    title: 'Fabricación',
    description:
      'Fabricamos a medida soluciones residenciales y comerciales con enfoque en calidad y detalle.',
  },
  {
    id: 'instalacion',
    title: 'Instalación',
    description:
      'Instalamos el mobiliario en el espacio, cuidando el acabado y el resultado final.',
  },
  {
    id: 'personalizacion',
    title: 'Personalización',
    description:
      'Cada proyecto se adapta al estilo, uso y aprovechamiento del espacio del cliente.',
  },
  {
    id: 'mobiliario-residencial',
    title: 'Mobiliario residencial',
    description:
      'Soluciones para hogares: cocinas, closets, salas y más.',
  },
  {
    id: 'mobiliario-comercial',
    title: 'Mobiliario comercial',
    description:
      'Mobiliario para oficinas y espacios comerciales.',
  },
  {
    id: 'proyectos-especiales',
    title: 'Proyectos especiales',
    description:
      'Proyectos a medida según requerimientos específicos del cliente.',
  },
]
