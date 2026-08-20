import { pageSeo } from '@/data/seo'
import { categoryCatalog, portfolioCategories } from '@/data/categories'
import { services } from '@/data/services'
import { usePageSeo } from '@/hooks/usePageSeo'
import { PageHero } from '@/components/layout/PageShell'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { CategoryCard } from '@/components/cards/CategoryCard'
import { ServiceCard } from '@/components/cards/ServiceCard'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { AppLink } from '@/components/ui/Link'
import { generateWhatsAppLink, categoryInterestMessage } from '@/utils/whatsapp'

export function ServicesPage() {
  usePageSeo(pageSeo.services.title, pageSeo.services.description)

  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title="Soluciones de mobiliario"
        description="Desarrollamos proyectos personalizados con fabricación, instalación y gestión logística para espacios habitacionales y comerciales."
      />

      <Section tone="light" padding="lg" className="border-b border-ferresa-line">
        <Reveal>
          <SectionHeading
            title="Cómo te acompañamos"
            description="Coordinamos el diseño del proyecto, fabricamos, personalizamos e instalamos el mobiliario."
            titleAs="h2"
          />
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 40}>
              <ServiceCard service={service} index={index} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="muted" padding="lg" className="border-b border-ferresa-line">
        <Reveal>
          <SectionHeading
            title="Productos"
            description="Estas son las líneas con las que trabajamos actualmente. Si tienes otro tipo de proyecto, cuéntanoslo."
            titleAs="h2"
          />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioCategories.map((category) => (
            <CategoryCard
              key={category.id}
              category={{ ...category, href: '/contacto' }}
              anchor
            />
          ))}
        </div>
        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-small">
          {portfolioCategories.map((category) => (
            <li key={category.id}>
              <AppLink
                href={generateWhatsAppLink(categoryInterestMessage(category.name))}
                target="_blank"
                rel="noopener noreferrer"
                underline
                className="text-ferresa-muted hover:text-ferresa-ink"
              >
                Cotizar {category.name.toLowerCase()}
              </AppLink>
            </li>
          ))}
        </ul>
      </Section>

      <Container className="py-14 sm:py-16 lg:py-20">
        <Reveal>
          <section aria-labelledby="catalog-confirmados">
            <h2 id="catalog-confirmados" className="text-h2">
              Catálogo actual
            </h2>
            <p className="mt-3 max-w-2xl text-body text-ferresa-muted">
              Productos disponibles hoy. Si necesitas otro tipo de mobiliario, escríbenos.
            </p>
            <ul className="mt-8 grid list-none gap-0 sm:grid-cols-2 lg:grid-cols-3">
              {categoryCatalog.confirmados.map((item) => (
                <li
                  key={item}
                  className="border-t border-ferresa-line py-4 text-body text-ferresa-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal>
          <div className="mt-16 border-t border-ferresa-line pt-10">
            <h2 className="text-h3">¿Listo para cotizar?</h2>
            <p className="mt-2 max-w-xl text-body text-ferresa-muted">
              Cuéntanos tu proyecto. Cada cotización se define según medidas, materiales,
              espacio, presupuesto y preferencias.
            </p>
            <Button to="/contacto" variant="primary" className="mt-6">
              Solicitar cotización
            </Button>
          </div>
        </Reveal>
      </Container>
    </>
  )
}
