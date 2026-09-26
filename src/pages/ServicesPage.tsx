import { pageSeo } from '@/data/seo'
import { portfolioCategories } from '@/data/categories'
import { services } from '@/data/services'
import { usePageSeo } from '@/hooks/usePageSeo'
import { PageHero } from '@/components/layout/PageShell'
import { Button } from '@/components/ui/Button'
import { CategoryCard } from '@/components/cards/CategoryCard'
import { ServiceCard } from '@/components/cards/ServiceCard'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

export function ServicesPage() {
  usePageSeo(pageSeo.services)

  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title="Remodelaciones, construcciones y mobiliario"
        description="Coordinamos remodelaciones y construcciones, e integramos mobiliario a medida para espacios residenciales y comerciales. Fabricamos, personalizamos e instalamos; gestionamos la logística cuando es necesario."
      />

      <Section tone="light" padding="lg" className="border-b border-ferresa-line">
        <Reveal>
          <SectionHeading
            title="Cómo te acompañamos"
            description="Del primer contacto a la entrega, con una cotización que incluye el montaje cuando el proyecto lo requiere."
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
              actionLabel="Cotizar"
            />
          ))}
        </div>
        <Button to="/contacto" variant="primary" className="mt-10">
          Cotizar mi proyecto
        </Button>
      </Section>
    </>
  )
}
