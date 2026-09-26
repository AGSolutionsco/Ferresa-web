import { company } from '@/data/company'

const DEFAULT_MESSAGE =
  'Hola, Ferresa. Estoy interesado en un proyecto de remodelación, construcción o mobiliario a medida y quisiera recibir información y una cotización.'

/**
 * Genera un enlace wa.me compatible con iPhone, Android y desktop.
 */
export function generateWhatsAppLink(
  message: string = DEFAULT_MESSAGE,
  phoneNumber: string = company.whatsapp.number,
): string {
  const digits = phoneNumber.replace(/\D/g, '')
  const text = encodeURIComponent(message.trim())
  return `https://wa.me/${digits}?text=${text}`
}

export function projectInterestMessage(projectTitle: string): string {
  return `Hola, Ferresa. Estoy interesado en el proyecto ${projectTitle} que vi en su página web. Me gustaría conocer más información y solicitar una cotización.`
}

export function similarProjectMessage(projectTitle: string): string {
  return `Hola, Ferresa. Estoy interesado en el proyecto ${projectTitle} que vi en su página web. Me gustaría conocer más información y solicitar una cotización.`
}

export function categoryInterestMessage(categoryName: string): string {
  return `Hola, Ferresa. Estoy interesado en ${categoryName} y quisiera recibir información y una cotización.`
}

export function quoteFormMessage(input: {
  name: string
  phone: string
  city: string
  projectType: string
  description: string
}): string {
  return [
    'Hola, Ferresa.',
    '',
    `Mi nombre es ${input.name}.`,
    '',
    `Estoy en ${input.city}.`,
    '',
    `Estoy interesado en ${input.projectType}.`,
    '',
    'Detalles:',
    '',
    input.description,
    '',
    `Mi WhatsApp: ${input.phone}`,
    '',
    'Me gustaría recibir información y una cotización.',
  ].join('\n')
}

export { DEFAULT_MESSAGE as defaultWhatsAppMessage }
