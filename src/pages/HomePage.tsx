import { Link } from 'react-router-dom'
import { company } from '@/data/company'
import { mainNavigation } from '@/data/navigation'
import { generateWhatsAppLink } from '@/utils/whatsapp'

/**
 * Página de arranque FASE 1 — confirma stack y arquitectura.
 * La Home completa se construye en la FASE 3.
 */
export function HomePage() {
  const whatsappHref = generateWhatsAppLink()

  return (
    <div className="mx-auto flex min-h-dvh max-w-3xl flex-col justify-center gap-8 px-6 py-16">
      <header className="space-y-3">
        <p className="text-sm font-medium tracking-wide text-neutral-500 uppercase">
          AG Solutions · FASE 1
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          {company.name}
        </h1>
        <p className="text-lg text-neutral-600">{company.tagline}</p>
        <p className="text-neutral-600">{company.description}</p>
        <p className="text-sm text-neutral-500">
          {company.primaryLocation.city}, {company.primaryLocation.country}
        </p>
      </header>

      <section aria-labelledby="nav-fase1" className="space-y-3">
        <h2 id="nav-fase1" className="text-sm font-medium text-neutral-500">
          Rutas preparadas
        </h2>
        <ul className="flex flex-wrap gap-3">
          {mainNavigation.map((item) => (
            <li key={item.href}>
              <Link
                to={item.href}
                className="inline-flex rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-800 transition hover:border-neutral-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-800"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-2">
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex rounded-md bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
        >
          Probar enlace WhatsApp
        </a>
        <p className="text-sm text-neutral-500">
          Instagram:{' '}
          <a
            href={company.social.instagram.href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-neutral-800"
          >
            {company.social.instagram.handle}
          </a>
        </p>
      </section>

      <p className="text-sm text-neutral-400">
        Stack listo: React · Vite · TypeScript · Tailwind · React Router.
        Esperando FASE 2 (sistema visual + Header + Footer).
      </p>
    </div>
  )
}
