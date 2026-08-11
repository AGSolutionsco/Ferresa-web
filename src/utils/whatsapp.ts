import { company } from '@/data/company'

const DEFAULT_MESSAGE =
  'Hola Ferresa, estoy interesado en realizar un proyecto de mobiliario. Me gustaría recibir información y una cotización.'


/**
 * Genera un enlace wa.me compatible con iPhone, Android y desktop.
 * @param message Mensaje prellenado (opcional)
 * @param phoneNumber Solo dígitos con código de país (opcional; usa company por defecto)
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
  return `Hola Ferresa, estoy interesado en el proyecto ${projectTitle}. Me gustaría conocer más información.`
}

export function similarProjectMessage(projectTitle: string): string {
  return `Hola Ferresa, vi el proyecto ${projectTitle} en su página web y me gustaría realizar un proyecto similar. Quisiera conocer más información.`
}

export function quoteFormMessage(input: {
  name: string
  phone: string
  city: string
  projectType: string
  description: string
}): string {
  return [
    'Hola Ferresa,',
    '',
    `Mi nombre es ${input.name}.`,
    '',
    `Estoy interesado en un proyecto de ${input.projectType}.`,
    `WhatsApp / teléfono: ${input.phone}`,
    `Ciudad: ${input.city}`,
    '',
    'Descripción:',
    input.description,
    '',
    'Me gustaría recibir información y una cotización.',
  ].join('\n')
}

export { DEFAULT_MESSAGE as defaultWhatsAppMessage }
