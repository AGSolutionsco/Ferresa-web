import { pageSeo } from '@/data/seo'
import { categoryCatalog, portfolioCategories } from '@/data/categories'
import { services } from '@/data/services'
import { usePageSeo } from '@/hooks/usePageSeo'
import { PageHero } from '@/components/layout/PageShell'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { CategoryCard } from '@/components/cards/CategoryCard'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'

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
        <SectionHeading
          title="Cómo te acompañamos"
          description="Servicios confirmados del proceso Ferresa."
          titleAs="h2"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="border border-ferresa-line bg-ferresa-surface p-6"
            >
              <h3 className="text-h3 text-[1.35rem]">{service.title}</h3>
              <p className="mt-3 text-body text-ferresa-muted">{service.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="muted" padding="lg" className="border-b border-ferresa-line">
        <SectionHeading
          title="Productos confirmados"
          description="Líneas disponibles actualmente. El catálogo se ampliará cuando el cliente confirme más categorías."
          titleAs="h2"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioCategories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </Section>

      <Container className="py-14 sm:py-16 lg:py-20">
        <section aria-labelledby="catalog-confirmados">
          <h2 id="catalog-confirmados" className="text-h2">
            Catálogo actual
          </h2>
          <p className="mt-3 max-w-2xl text-body text-ferresa-muted">
            Productos confirmados por Ferresa. Otras categorías se agregarán
            posteriormente.
          </p>
          <ul className="mt-6 grid list-none gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {categoryCatalog.confirmados.map((item) => (
              <li
                key={item}
                className="border-t border-ferresa-line py-3 text-body text-ferresa-ink"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-16 border-t border-ferresa-line pt-10">
          <h2 className="text-h3">¿Listo para cotizar?</h2>
          <p className="mt-2 max-w-xl text-body text-ferresa-muted">
            Cuéntanos tu proyecto. Los precios se definen según las
            características particulares de cada trabajo.
          </p>
          <Button to="/contacto" variant="primary" className="mt-6">
            Solicitar cotización
          </Button>
        </div>
      </Container>
    </>
  )
}
