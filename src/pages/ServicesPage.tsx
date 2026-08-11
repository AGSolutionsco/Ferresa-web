import { pageSeo } from '@/data/seo'
import { categoryCatalog, portfolioCategories } from '@/data/categories'
import { usePageSeo } from '@/hooks/usePageSeo'
import { PageHero } from '@/components/layout/PageShell'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { CategoryCard } from '@/components/cards/CategoryCard'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'

const catalogBlocks = [
  {
    id: 'hogar',
    title: 'Hogar',
    description:
      'Mobiliario residencial personalizado para distintos ambientes del hogar.',
    items: categoryCatalog.hogar,
  },
  {
    id: 'empresas',
    title: 'Empresas y espacios comerciales',
    description: 'Soluciones para oficinas, locales y espacios corporativos.',
    items: categoryCatalog.empresas,
  },
  {
    id: 'especiales',
    title: 'Proyectos especiales',
    description:
      'Muebles y soluciones personalizadas según dimensiones y necesidades.',
    items: categoryCatalog.especiales,
  },
] as const

export function ServicesPage() {
  usePageSeo(pageSeo.services.title, pageSeo.services.description)

  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title="Soluciones de mobiliario"
        description="Diseño, fabricación e instalación de mobiliario personalizado para hogar, oficinas y espacios comerciales."
      />

      <Section tone="light" padding="lg" className="border-b border-ferresa-line">
        <SectionHeading
          title="Categorías principales"
          description="Explora el tipo de solución que mejor se adapta a tu espacio."
          titleAs="h2"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {portfolioCategories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </Section>

      <Container className="py-14 sm:py-16 lg:py-20">
        <div className="space-y-14">
          {catalogBlocks.map((block) => (
            <section key={block.id} aria-labelledby={`catalog-${block.id}`}>
              <h2 id={`catalog-${block.id}`} className="text-h2">
                {block.title}
              </h2>
              <p className="mt-3 max-w-2xl text-body text-ferresa-muted">
                {block.description}
              </p>
              <ul className="mt-6 grid list-none gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="border-t border-ferresa-line py-3 text-body text-ferresa-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-16 border-t border-ferresa-line pt-10">
          <h2 className="text-h3">¿Listo para empezar?</h2>
          <p className="mt-2 max-w-xl text-body text-ferresa-muted">
            Cuéntanos tu proyecto y te orientamos sobre el proceso.
          </p>
          <Button to="/contacto" variant="primary" className="mt-6">
            Cuéntanos tu proyecto
          </Button>
        </div>
      </Container>
    </>
  )
}
