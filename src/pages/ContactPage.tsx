import { pageSeo } from '@/data/seo'
import { company } from '@/data/company'
import { usePageSeo } from '@/hooks/usePageSeo'
import { PageHero } from '@/components/layout/PageShell'
import { Container } from '@/components/ui/Container'
import { AppLink } from '@/components/ui/Link'
import { generateWhatsAppLink } from '@/utils/whatsapp'
import { ContactForm } from './ContactForm'

export function ContactPage() {
  usePageSeo(pageSeo.contact.title, pageSeo.contact.description)
  const whatsappHref = generateWhatsAppLink()

  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Cuéntanos tu proyecto"
        description="Completa el formulario y continúa por WhatsApp para recibir información y una cotización."
      />

      <Container className="grid gap-12 py-12 sm:py-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:py-20">
        <ContactForm />

        <aside className="space-y-6 lg:pt-2">
          <h2 className="text-h3">Información de contacto</h2>
          <ul className="space-y-4 text-body text-ferresa-muted">
            <li>
              <span className="block text-small tracking-wide text-ferresa-subtle uppercase">
                WhatsApp
              </span>
              <AppLink
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                underline
                className="text-ferresa-ink"
              >
                {company.whatsapp.display}
              </AppLink>
            </li>
            <li>
              <span className="block text-small tracking-wide text-ferresa-subtle uppercase">
                Instagram
              </span>
              <AppLink
                href={company.social.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                underline
                className="text-ferresa-ink"
              >
                {company.social.instagram.handle}
              </AppLink>
            </li>
            <li>
              <span className="block text-small tracking-wide text-ferresa-subtle uppercase">
                Ubicación
              </span>
              <p className="text-ferresa-ink">
                {company.primaryLocation.city}, {company.primaryLocation.country}
              </p>
            </li>
            {company.contact.email ? (
              <li>
                <span className="block text-small tracking-wide text-ferresa-subtle uppercase">
                  Correo
                </span>
                <AppLink
                  href={`mailto:${company.contact.email}`}
                  underline
                  className="text-ferresa-ink"
                >
                  {company.contact.email}
                </AppLink>
              </li>
            ) : null}
            {company.flags.showMaps && company.contact.mapsUrl ? (
              <li>
                <AppLink
                  href={company.contact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline
                  className="text-ferresa-ink"
                >
                  Ver en Google Maps
                </AppLink>
              </li>
            ) : null}
          </ul>
          {company.plannedExpansion ? (
            <p className="text-small text-ferresa-subtle">
              {company.plannedExpansion.statusLabel} (expansión proyectada).
            </p>
          ) : null}
        </aside>
      </Container>
    </>
  )
}
