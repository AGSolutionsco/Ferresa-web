import { homeContent } from '@/data/home'
import { Button } from '@/components/ui/Button'
import { Section } from '@/components/ui/Section'
import { AppLink } from '@/components/ui/Link'
import { Reveal } from '@/components/ui/Reveal'
import { generateWhatsAppLink } from '@/utils/whatsapp'

/**
 * Propuesta de valor breve.
 * Contenido editable desde src/data/home.ts
 */
export function ValueProposition() {
  const { valueProposition: content } = homeContent
  const whatsappHref = generateWhatsAppLink()

  return (
    <Section
      tone="muted"
      padding="lg"
      aria-labelledby="value-proposition-heading"
      className="border-b border-ferresa-line"
    >
      <Reveal>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:items-end lg:gap-20">
          <div className="max-w-2xl space-y-5">
            <p className="text-small font-medium tracking-[0.16em] text-ferresa-muted uppercase">
              {content.eyebrow}
            </p>
            <h2 id="value-proposition-heading" className="text-h2 max-w-[18ch]">
              {content.title}
            </h2>
            <p className="text-body text-ferresa-muted">{content.description}</p>
          </div>

          <div className="flex flex-col items-start gap-4 lg:items-end lg:text-right">
            <Button to={content.cta.to} variant="secondary">
              {content.cta.label}
            </Button>
            <AppLink
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              underline
              className="text-small text-ferresa-muted hover:text-ferresa-ink"
            >
              O escríbenos por WhatsApp
            </AppLink>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
