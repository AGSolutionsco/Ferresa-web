import type { ReactNode } from 'react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { cn } from '@/utils/cn'

type PageHeroProps = {
  eyebrow?: string
  title: string
  description?: ReactNode
  className?: string
}

/** Hero estructural para páginas internas (sin contenido inventado). */
export function PageHero({ eyebrow, title, description, className }: PageHeroProps) {
  return (
    <div className={cn('border-b border-ferresa-line bg-ferresa-canvas', className)}>
      <Container className="py-16 sm:py-20 lg:py-24">
        <Reveal>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
            titleAs="h1"
            className="max-w-3xl"
          />
        </Reveal>
      </Container>
    </div>
  )
}

type PagePlaceholderProps = {
  title: string
  note: string
  eyebrow?: string
}

/** Contenido pendiente de fases posteriores — no usa copy de negocio falso. */
export function PagePlaceholder({ title, note, eyebrow = 'Ferresa' }: PagePlaceholderProps) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={note} />
      <Container className="py-12 sm:py-16">
        <div className="relative overflow-hidden border border-ferresa-line bg-ferresa-surface px-6 py-12 sm:px-8">
          <div className="media-placeholder pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
          <div className="relative">
            <p className="text-small font-medium tracking-[0.12em] text-ferresa-muted uppercase">
              Contenido pendiente de configuración
            </p>
            <p className="mt-3 max-w-xl text-body text-ferresa-muted">
              Esta página usa la estructura visual base. El contenido definitivo se
              completará en fases posteriores con información confirmada.
            </p>
          </div>
        </div>
      </Container>
    </>
  )
}
