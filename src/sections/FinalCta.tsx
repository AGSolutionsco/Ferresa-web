import { homeContent } from '@/data/home'
import { Button } from '@/components/ui/Button'
import { Section } from '@/components/ui/Section'
import { generateWhatsAppLink } from '@/utils/whatsapp'

/**
 * CTA final de conversión — cierre de Home.
 */
export function FinalCta() {
  const { finalCta: content } = homeContent
  const whatsappHref = generateWhatsAppLink(content.whatsappCta.message)

  return (
    <Section
      tone="dark"
      padding="lg"
      aria-labelledby="final-cta-heading"
      className="border-b border-ferresa-ink"
    >
      <div className="reveal-up mx-auto max-w-2xl text-center">
        <h2 id="final-cta-heading" className="text-h2 text-ferresa-inverse">
          {content.title}
        </h2>
        <p className="mt-4 text-body text-ferresa-subtle">{content.description}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            to={content.primaryCta.to}
            variant="secondary"
            className="border-ferresa-inverse text-ferresa-inverse hover:bg-ferresa-inverse hover:text-ferresa-ink"
          >
            {content.primaryCta.label}
          </Button>
          <Button
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            variant="ghost"
            className="text-ferresa-inverse hover:bg-white/10"
          >
            {content.whatsappCta.label}
          </Button>
        </div>
      </div>
    </Section>
  )
}
