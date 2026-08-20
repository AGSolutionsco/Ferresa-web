import { homeContent } from '@/data/home'
import { getPublishedFaqItems } from '@/data/faq'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { AccordionItem } from '@/components/ui/Accordion'
import { Reveal } from '@/components/ui/Reveal'

/**
 * FAQ — solo preguntas publicadas (confirmadas).
 * Sin respuestas inventadas. Si está vacío, no se renderiza.
 */
export function FaqSection() {
  const { faq: content } = homeContent
  const items = getPublishedFaqItems()

  if (items.length === 0) {
    return null
  }

  return (
    <Section
      tone="light"
      padding="lg"
      aria-labelledby="faq-heading"
      className="border-b border-ferresa-line"
    >
      <Reveal>
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
          titleAs="h2"
          titleId="faq-heading"
          className="max-w-2xl"
        />
      </Reveal>
      <div className="mt-10 max-w-3xl border-b border-ferresa-line">
        {items.map((item) => (
          <AccordionItem key={item.id} title={item.question}>
            {item.answer}
          </AccordionItem>
        ))}
      </div>
    </Section>
  )
}
