import { Hero } from '@/sections/Hero'
import { ValueProposition } from '@/sections/ValueProposition'
import { PortfolioCategories } from '@/sections/PortfolioCategories'
import { FeaturedProjects } from '@/sections/FeaturedProjects'
import { AboutPreview } from '@/sections/AboutPreview'
import { ProcessSteps } from '@/sections/ProcessSteps'
import { Differentiators } from '@/sections/Differentiators'
import { Testimonials } from '@/sections/Testimonials'
import { FaqSection } from '@/sections/FaqSection'
import { FinalCta } from '@/sections/FinalCta'
import { pageSeo } from '@/data/seo'
import { usePageSeo } from '@/hooks/usePageSeo'

/**
 * Home — FASE 6
 * Testimonios/FAQ solo se renderizan si hay contenido publicado.
 */
export function HomePage() {
  usePageSeo(pageSeo.home.title, pageSeo.home.description)

  return (
    <>
      <Hero />
      <ValueProposition />
      <PortfolioCategories />
      <FeaturedProjects />
      <AboutPreview />
      <ProcessSteps />
      <Differentiators />
      <Testimonials />
      <FaqSection />
      <FinalCta />
    </>
  )
}
