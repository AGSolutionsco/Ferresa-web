import { homeContent } from '@/data/home'
import { portfolioCategories } from '@/data/categories'
import { Button } from '@/components/ui/Button'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { CategoryCard } from '@/components/cards/CategoryCard'
import { Reveal } from '@/components/ui/Reveal'

/**
 * Portafolio / categorías principales.
 * Layout editorial: card destacada + secundarias.
 */
export function PortfolioCategories() {
  const { portfolio } = homeContent
  const featured =
    portfolioCategories.find((item) => item.featured) ?? portfolioCategories[0]
  const secondary = portfolioCategories.filter((item) => item.id !== featured.id)

  return (
    <Section
      tone="light"
      padding="lg"
      aria-labelledby="portfolio-heading"
      className="border-b border-ferresa-line"
    >
      <Reveal>
        <div className="flex flex-col gap-8 sm:gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow={portfolio.eyebrow}
            title={portfolio.title}
            description={portfolio.description}
            titleAs="h2"
            titleId="portfolio-heading"
            className="max-w-2xl"
          />
          <Button
            to={portfolio.cta.to}
            variant="secondary"
            className="shrink-0 self-start lg:self-auto"
          >
            {portfolio.cta.label}
          </Button>
        </div>
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-10 grid gap-4 lg:mt-14 lg:grid-cols-12 lg:gap-5">
          <CategoryCard
            category={featured}
            variant="featured"
            className="lg:col-span-7 lg:min-h-[34rem]"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-2 lg:gap-5">
            {secondary.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
