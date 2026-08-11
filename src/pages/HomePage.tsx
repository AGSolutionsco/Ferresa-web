import { Hero } from '@/sections/Hero'
import { ValueProposition } from '@/sections/ValueProposition'
import { PortfolioCategories } from '@/sections/PortfolioCategories'
import { FeaturedProjects } from '@/sections/FeaturedProjects'
import { AboutPreview } from '@/sections/AboutPreview'
import { ProcessSteps } from '@/sections/ProcessSteps'
import { Differentiators } from '@/sections/Differentiators'

/**
 * Home — FASE 3.1 · 3.2 · 3.3 · 3.4 · 3.5 · 3.6
 */
export function HomePage() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <PortfolioCategories />
      <FeaturedProjects />
      <AboutPreview />
      <ProcessSteps />
      <Differentiators />
    </>
  )
}
