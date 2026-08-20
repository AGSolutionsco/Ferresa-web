import { pageSeo } from '@/data/seo'
import { company } from '@/data/company'
import { usePageSeo } from '@/hooks/usePageSeo'
import { PageHero } from '@/components/layout/PageShell'
import { Container } from '@/components/ui/Container'
import { AppLink } from '@/components/ui/Link'
import { Reveal } from '@/components/ui/Reveal'
import { generateWhatsAppLink } from '@/utils/whatsapp'
import { ContactForm } from './ContactForm'

export function ContactPage() {
  usePageSeo(pageSeo.contact.title, pageSeo.contact.description)
  const whatsappHref = generateWhatsAppLink()
  const mapsEmbed = company.flags.showMaps ? company.contact.mapsEmbedUrl : undefined
  const mapsUrl = company.flags.showMaps ? company.contact.mapsUrl : undefined

  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Cuéntanos tu proyecto"
        description="WhatsApp es nuestro canal principal. Completa el formulario y continúa con tu mensaje listo para enviar."
      />

      <Container className="grid gap-12 py-12 sm:py-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16 lg:py-20">
        <Reveal className="space-y-6">
          <ContactForm />
        </Reveal>

        <Reveal delay={80}>
          <aside className="space-y-8 border border-ferresa-line bg-ferresa-surface p-6 sm:p-8 lg:sticky lg:top-28">
            <h2 className="text-h3">Información de contacto</h2>
            <ul className="space-y-6 text-body text-ferresa-muted">
              <li>
                <span className="block text-small tracking-[0.14em] text-ferresa-muted uppercase">
                  WhatsApp
                </span>
                <AppLink
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-ferresa-ink hover:text-ferresa-accent"
                >
                  {company.whatsapp.display}
                </AppLink>
              </li>
              <li>
                <span className="block text-small tracking-[0.14em] text-ferresa-muted uppercase">
                  Instagram
                </span>
                <AppLink
                  href={company.social.instagram.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 text-ferresa-ink hover:text-ferresa-accent"
                >
                  {company.social.instagram.handle}
                </AppLink>
              </li>
              <li>
                <span className="block text-small tracking-[0.14em] text-ferresa-muted uppercase">
                  Medellín
                </span>
                <p className="mt-1 text-ferresa-ink">
                  {company.contact.address ??
                    `${company.primaryLocation.city}, ${company.primaryLocation.country}`}
                </p>
              </li>
              <li>
                <span className="block text-small tracking-[0.14em] text-ferresa-muted uppercase">
                  Horario
                </span>
                <p className="mt-1 text-ferresa-ink">{company.businessHours}</p>
              </li>
              <li>
                <span className="block text-small tracking-[0.14em] text-ferresa-muted uppercase">
                  Ciudades atendidas
                </span>
                <p className="mt-1 text-ferresa-ink">{company.serviceCities.join(' y ')}</p>
              </li>
            </ul>

            {mapsEmbed ? (
              <div className="space-y-3">
                <span className="block text-small tracking-[0.14em] text-ferresa-muted uppercase">
                  Google Maps
                </span>
                <div className="overflow-hidden border border-ferresa-line bg-ferresa-surface-muted">
                  <iframe
                    title={`Ubicación de ${company.name} en ${company.primaryLocation.city}`}
                    src={mapsEmbed}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="aspect-[4/3] w-full border-0"
                  />
                </div>
                {mapsUrl ? (
                  <AppLink
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline
                    className="text-small text-ferresa-ink"
                  >
                    Abrir en Google Maps
                  </AppLink>
                ) : null}
              </div>
            ) : mapsUrl ? (
              <AppLink
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                underline
                className="text-ferresa-ink"
              >
                Ver ubicación en Google Maps
              </AppLink>
            ) : null}
          </aside>
        </Reveal>
      </Container>
    </>
  )
}
