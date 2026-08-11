import { Hero } from '@/sections/Hero'
import { ValueProposition } from '@/sections/ValueProposition'
import { PortfolioCategories } from '@/sections/PortfolioCategories'

/**
 * Home — FASE 3.1 + 3.2
 * Hero, propuesta de valor y portafolio/categorías.
 */
export function HomePage() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <PortfolioCategories />
    </>
  )
}
