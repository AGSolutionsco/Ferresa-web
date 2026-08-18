import { pageSeo } from '@/data/seo'
import { company } from '@/data/company'
import { usePageSeo } from '@/hooks/usePageSeo'
import { PageHero } from '@/components/layout/PageShell'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
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
        description="Completa el formulario y continúa por WhatsApp para recibir información y una cotización. WhatsApp es nuestro canal principal."
      />

      <Container className="grid gap-12 py-12 sm:py-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:py-20">
        <div className="space-y-6">
          <Button
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            className="w-full sm:w-auto"
          >
            Cotizar por WhatsApp
          </Button>
          <ContactForm />
        </div>

        <aside className="space-y-6 lg:pt-2">
          <h2 className="text-h3">Información de contacto</h2>
          <ul className="space-y-4 text-body text-ferresa-muted">
            <li>
              <span className="block text-small tracking-wide text-ferresa-subtle uppercase">
                Canal principal
              </span>
              <Button
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                className="mt-2"
              >
                Abrir WhatsApp
              </Button>
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
                Dirección
              </span>
              <p className="text-ferresa-ink">
                {company.contact.address ??
                  `${company.primaryLocation.city}, ${company.primaryLocation.country}`}
              </p>
            </li>
            <li>
              <span className="block text-small tracking-wide text-ferresa-subtle uppercase">
                Horario
              </span>
              <p className="text-ferresa-ink">{company.businessHours}</p>
            </li>
            <li>
              <span className="block text-small tracking-wide text-ferresa-subtle uppercase">
                Ciudades atendidas
              </span>
              <p className="text-ferresa-ink">{company.serviceCities.join(' y ')}</p>
            </li>
            {company.flags.showMaps && company.contact.mapsUrl ? (
              <li>
                <AppLink
                  href={company.contact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline
                  className="text-ferresa-ink"
                >
                  Ver ubicación en Google Maps
                </AppLink>
              </li>
            ) : null}
          </ul>
          <p className="text-small text-ferresa-subtle">
            Actualmente no atendemos el resto del país. Cobertura: Medellín y
            Barranquilla.
          </p>
        </aside>
      </Container>
    </>
  )
}
