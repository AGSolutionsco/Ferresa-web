import { Hero } from '@/sections/Hero'
import { ValueProposition } from '@/sections/ValueProposition'
import { PortfolioCategories } from '@/sections/PortfolioCategories'
import { FeaturedProjects } from '@/sections/FeaturedProjects'
import { AboutPreview } from '@/sections/AboutPreview'
import { ProcessSteps } from '@/sections/ProcessSteps'
import { Differentiators } from '@/sections/Differentiators'
import { Testimonials } from '@/sections/Testimonials'
import { FaqSection } from '@/sections/FaqSection'
import { PostSale } from '@/sections/PostSale'
import { FinalCta } from '@/sections/FinalCta'
import { pageSeo } from '@/data/seo'
import { usePageSeo } from '@/hooks/usePageSeo'

/**
 * Home — posicionamiento integral + postventa antes del CTA de contacto.
 * Testimonios, FAQ y proyectos destacados solo se renderizan si hay contenido publicado.
 */
export function HomePage() {
  usePageSeo(pageSeo.home)

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
      <PostSale />
      <FinalCta />
    </>
  )
}
