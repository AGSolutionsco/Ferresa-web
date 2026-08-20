import { homeContent } from '@/data/home'
import { Button } from '@/components/ui/Button'
import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'

/**
 * Propuesta de valor breve — banda de enfoque, sin CTA duplicado.
 */
export function ValueProposition() {
  const { valueProposition: content } = homeContent

  return (
    <Section
      tone="muted"
      padding="md"
      aria-labelledby="value-proposition-heading"
      className="border-b border-ferresa-line"
    >
      <Reveal>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_auto] lg:items-end lg:gap-16">
          <div className="max-w-2xl space-y-4">
            <p className="text-small font-medium tracking-[0.16em] text-ferresa-muted uppercase">
              {content.eyebrow}
            </p>
            <h2 id="value-proposition-heading" className="text-h2 max-w-[18ch]">
              {content.title}
            </h2>
            <p className="text-body text-ferresa-muted">{content.description}</p>
          </div>

          <Button to={content.cta.to} variant="secondary" className="self-start lg:self-auto">
            {content.cta.label}
          </Button>
        </div>
      </Reveal>
    </Section>
  )
}
