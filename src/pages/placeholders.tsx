import { Link } from 'react-router-dom'

/** Placeholder — contenido en FASE 4 */
export function ProjectsPage() {
  return (
    <PlaceholderPage
      title="Proyectos"
      note="Catálogo y detalle de proyectos se implementan en la FASE 4. Sin proyectos inventados."
    />
  )
}

/** Placeholder — contenido en FASE 4 */
export function ProjectDetailPage() {
  return (
    <PlaceholderPage
      title="Detalle de proyecto"
      note="Ruta /proyectos/:slug lista. Contenido en FASE 4."
    />
  )
}

/** Placeholder — contenido en FASE 5 */
export function ServicesPage() {
  return (
    <PlaceholderPage
      title="Servicios"
      note="Contenido de servicios en la FASE 5."
    />
  )
}

/** Placeholder — contenido en FASE 5 */
export function AboutPage() {
  return (
    <PlaceholderPage
      title="Nosotros"
      note="Información de Ferresa en la FASE 5. Solo datos confirmados."
    />
  )
}

/** Placeholder — contenido en FASE 6 */
export function ContactPage() {
  return (
    <PlaceholderPage
      title="Contacto"
      note="Contacto, cotización y WhatsApp en la FASE 6."
    />
  )
}

function PlaceholderPage({ title, note }: { title: string; note: string }) {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <p className="text-sm text-neutral-500">Ferresa · en construcción</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">{title}</h1>
      <p className="mt-4 text-neutral-600">{note}</p>
      <Link
        to="/"
        className="mt-8 inline-flex text-sm font-medium text-neutral-900 underline underline-offset-4"
      >
        Volver al inicio
      </Link>
    </div>
  )
}
