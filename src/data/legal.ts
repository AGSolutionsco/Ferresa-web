import { company } from './company'

export type LegalSection = {
  heading: string
  paragraphs: string[]
  bullets?: string[]
}

export type LegalDocument = {
  path: '/privacidad' | '/terminos'
  eyebrow: string
  title: string
  description: string
  lastUpdated: string
  sections: LegalSection[]
}

const responsibleName = company.legalName
  ? `${company.name} (${company.legalName})`
  : company.name

const contactChannel = `WhatsApp ${company.whatsapp.display}`

/**
 * Textos legales — marco colombiano (Ley 1581 de 2012 y normas complementarias).
 * Sin inventar canales no confirmados (p. ej. correo electrónico).
 */
export const privacyPolicy: LegalDocument = {
  path: '/privacidad',
  eyebrow: 'Legal',
  title: 'Política de Tratamiento de Datos Personales',
  description:
    'Información sobre el tratamiento de datos personales conforme a la Ley 1581 de 2012 (Habeas Data) y demás normas aplicables en Colombia.',
  lastUpdated: '26 de septiembre de 2026',
  sections: [
    {
      heading: '1. Responsable del tratamiento',
      paragraphs: [
        `${responsibleName} (“Ferresa”, “nosotros”) es el responsable del tratamiento de los datos personales que usted suministre a través de este sitio web, WhatsApp u otros canales de contacto comerciales.`,
        `Domicilio principal: ${company.contact.address ?? `${company.primaryLocation.city}, ${company.primaryLocation.country}`}.`,
        `Canal de contacto para asuntos de protección de datos: ${contactChannel}.`,
      ],
    },
    {
      heading: '2. Marco normativo',
      paragraphs: [
        'Esta política se rige por la Constitución Política de Colombia, la Ley Estatutaria 1581 de 2012, el Decreto 1377 de 2013 (compilado y actualizado en la normativa vigente), las circulares y lineamientos de la Superintendencia de Industria y Comercio (SIC), y demás normas que modifiquen, adicionen o reglamenten la protección de datos personales en Colombia.',
      ],
    },
    {
      heading: '3. Datos que podemos recolectar',
      paragraphs: [
        'Solo solicitamos la información razonable y necesaria para atender su solicitud comercial. Según el canal utilizado, podemos tratar:',
      ],
      bullets: [
        'Datos de identificación y contacto: nombre, número de WhatsApp o teléfono, ciudad.',
        'Información del proyecto: tipo de proyecto, descripción y preferencias que usted comunique.',
        'Datos técnicos de navegación: dirección IP, tipo de dispositivo o navegador, páginas visitadas y cookies o tecnologías similares, cuando apliquen.',
      ],
    },
    {
      heading: '4. Finalidades del tratamiento',
      paragraphs: [
        'Los datos personales se tratan para las siguientes finalidades:',
      ],
      bullets: [
        'Atender solicitudes de información, cotización y seguimiento comercial.',
        'Comunicarnos con usted por WhatsApp u otros medios que usted autorice.',
        'Elaborar propuestas personalizadas de remodelación, construcción o mobiliario a medida.',
        'Mejorar la experiencia del sitio, la seguridad y, cuando corresponda, el análisis de uso.',
        'Cumplir obligaciones legales, regulatorias o requerimientos de autoridad competente.',
      ],
    },
    {
      heading: '5. Autorización',
      paragraphs: [
        'Al marcar la casilla de aceptación en el formulario de contacto, al enviarnos un mensaje o al continuar navegando cuando se le informe el uso de cookies, usted autoriza de manera previa, expresa e informada el tratamiento de sus datos personales conforme a esta política, en los términos de la Ley 1581 de 2012.',
        'Si no autoriza el tratamiento, no podremos tramitar adecuadamente su solicitud de cotización a través del formulario del sitio.',
      ],
    },
    {
      heading: '6. Derechos del titular (Habeas Data)',
      paragraphs: [
        'Como titular de los datos, usted puede ejercer los derechos de conocer, actualizar, rectificar y suprimir su información, así como revocar la autorización y solicitar prueba de esta, de conformidad con la Ley 1581 de 2012.',
        `Para ejercer estos derechos, escríbanos a ${contactChannel}, indicando su nombre completo, el derecho que desea ejercer y la descripción de su solicitud. Responderemos en los términos legales aplicables.`,
      ],
    },
    {
      heading: '7. Seguridad y conservación',
      paragraphs: [
        'Adoptamos medidas razonables de seguridad administrativa, técnica y física para proteger la información personal contra acceso no autorizado, pérdida o uso indebido, sin perjuicio de los riesgos inherentes a los medios digitales.',
        'Conservaremos los datos solo durante el tiempo necesario para cumplir las finalidades informadas o las obligaciones legales aplicables.',
      ],
    },
    {
      heading: '8. Transferencia y transmisión',
      paragraphs: [
        'Ferresa no vende datos personales. Podremos compartir información con proveedores que presten servicios de soporte (por ejemplo, alojamiento web o mensajería), cuando sea necesario para operar el sitio o atender su solicitud, bajo deberes de confidencialidad y conforme a la ley colombiana.',
        'Si en el futuro se realiza una transferencia internacional de datos, se hará conforme a los requisitos legales vigentes.',
      ],
    },
    {
      heading: '9. Cookies y tecnologías similares',
      paragraphs: [
        'Este sitio puede utilizar cookies propias o de terceros para el funcionamiento básico, la mejora de la experiencia de navegación y, cuando se activen, el análisis de uso. Usted puede configurar su navegador para rechazar cookies; algunas funciones del sitio podrían verse limitadas.',
        'Al aceptar el aviso de cookies o continuar navegando tras ser informado, usted acepta el uso de cookies según esta política.',
      ],
    },
    {
      heading: '10. Actualizaciones',
      paragraphs: [
        'Ferresa podrá modificar esta política para reflejar cambios normativos u operativos. La versión vigente se publicará en esta página con la fecha de actualización.',
      ],
    },
  ],
}

export const termsOfUse: LegalDocument = {
  path: '/terminos',
  eyebrow: 'Legal',
  title: 'Términos y Condiciones de uso',
  description:
    'Condiciones de uso del sitio web de Ferresa. Las cotizaciones y proyectos son personalizados; el contenido visual y la marca están protegidos.',
  lastUpdated: '26 de septiembre de 2026',
  sections: [
    {
      heading: '1. Aceptación',
      paragraphs: [
        `Al acceder y utilizar el sitio web de ${company.name}, usted acepta estos Términos y Condiciones. Si no está de acuerdo, le pedimos abstenerse de usar el sitio.`,
      ],
    },
    {
      heading: '2. Identificación del titular del sitio',
      paragraphs: [
        `El sitio es operado por ${responsibleName}, con operación comercial en ${company.serviceCities.join(' y ')}, Colombia.`,
        `Canal principal de contacto: ${contactChannel}.`,
      ],
    },
    {
      heading: '3. Objeto del sitio',
      paragraphs: [
        'Este sitio tiene fines informativos y comerciales: presentar la oferta de remodelaciones, construcciones y mobiliario a medida, mostrar proyectos de referencia y facilitar el contacto para cotizaciones.',
        'El sitio no constituye por sí mismo un contrato de obra, compraventa ni prestación de servicios.',
      ],
    },
    {
      heading: '4. Cotizaciones y proyectos personalizados',
      paragraphs: [
        'Toda cotización, propuesta o proyecto de Ferresa es personalizado. Los precios, plazos, materiales, alcances e instalaciones se definen caso a caso según medidas, condiciones del espacio, presupuesto y acuerdos particulares con el cliente.',
        'La información publicada en el sitio (incluidas fotografías de proyectos) es referencial y no garantiza disponibilidad idéntica de acabados, medidas, costos ni resultados en un proyecto distinto.',
        'Ningún mensaje automático, formulario o publicación en el sitio constituye una oferta vinculante hasta que exista aceptación expresa de una propuesta formal emitida por Ferresa.',
      ],
    },
    {
      heading: '5. Propiedad intelectual',
      paragraphs: [
        'Salvo indicación en contrario, los textos, fotografías, imágenes, logotipos, marcas, tipografías aplicadas, diseños de interfaz y demás contenidos del sitio son propiedad de Ferresa o se utilizan con autorización de sus titulares.',
        'Queda prohibida la reproducción, distribución, modificación, uso comercial o explotación de dichos contenidos sin autorización previa y por escrito de Ferresa o del titular correspondiente.',
        'Las fotografías de proyectos ilustran trabajos reales o de referencia y no autorizan su uso fuera de este sitio sin permiso.',
      ],
    },
    {
      heading: '6. Uso permitido del sitio',
      paragraphs: [
        'Usted se compromete a utilizar el sitio de forma lícita, respetuosa y sin afectar su operación. No está permitido:',
      ],
      bullets: [
        'Intentar acceder de forma no autorizada a sistemas, datos o áreas restringidas.',
        'Introducir malware, realizar ataques o interferir con el funcionamiento del sitio.',
        'Usar el contenido con fines engañosos, ilícitos o que vulneren derechos de terceros.',
        'Suplantar la identidad de Ferresa o de otras personas.',
      ],
    },
    {
      heading: '7. Enlaces y servicios de terceros',
      paragraphs: [
        'El sitio puede incluir enlaces a WhatsApp, Instagram, Google Maps u otros servicios de terceros. Ferresa no controla ni es responsable del contenido, políticas o disponibilidad de esos servicios. Su uso se rige por los términos de cada proveedor.',
      ],
    },
    {
      heading: '8. Limitación de responsabilidad',
      paragraphs: [
        'Ferresa procura mantener la información del sitio actualizada y disponible, sin garantizar ausencia total de errores, interrupciones o inexactitudes. En la máxima medida permitida por la ley colombiana, Ferresa no responde por daños derivados del uso o la imposibilidad de uso del sitio, salvo dolo o culpa grave cuando la ley lo exija.',
        'Las decisiones comerciales basadas en información del sitio deben confirmarse directamente con Ferresa.',
      ],
    },
    {
      heading: '9. Protección de datos personales',
      paragraphs: [
        'El tratamiento de datos personales se rige por la Política de Tratamiento de Datos Personales disponible en /privacidad, conforme a la Ley 1581 de 2012 y normas complementarias.',
      ],
    },
    {
      heading: '10. Ley aplicable y jurisdicción',
      paragraphs: [
        'Estos términos se interpretan conforme a las leyes de la República de Colombia. Cualquier controversia se someterá a los jueces y tribunales competentes de Colombia, sin perjuicio de los mecanismos alternativos de solución de conflictos que las partes acuerden.',
      ],
    },
    {
      heading: '11. Modificaciones',
      paragraphs: [
        'Ferresa podrá actualizar estos Términos y Condiciones en cualquier momento. La versión vigente se publicará en esta página con su fecha de actualización. El uso continuado del sitio tras la publicación implica la aceptación de los cambios.',
      ],
    },
  ],
}

export const cookieNotice = {
  message:
    'Utilizamos cookies para optimizar tu experiencia y análisis. Al continuar navegando, aceptas nuestra política.',
  acceptLabel: 'Aceptar',
  policyLabel: 'Política de datos',
  policyPath: '/privacidad' as const,
  storageKey: 'ferresa-cookies-accepted',
} as const
