import { homeContent } from '@/data/home'
import {
  differentiators,
  homeDifferentiatorIds,
} from '@/data/differentiators'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

/**
 * Diferenciadores — solo información confirmada, sin superlativos.
 */
export function Differentiators() {
  const { differentiators: content } = homeContent
  const items = homeDifferentiatorIds
    .map((id) => differentiators.find((item) => item.id === id))
    .filter((item): item is (typeof differentiators)[number] => Boolean(item))

  return (
    <Section
      tone="light"
      padding="lg"
      aria-labelledby="differentiators-heading"
      className="border-b border-ferresa-line"
    >
      <Reveal>
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
          titleAs="h2"
          titleId="differentiators-heading"
          className="max-w-2xl"
        />
      </Reveal>

      <ul className="mt-12 grid list-none gap-10 sm:mt-14 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-12">
        {items.map((item, index) => (
          <li key={item.id}>
            <Reveal delay={index * 50}>
              <article className="max-w-sm space-y-3 border-t border-ferresa-line pt-6">
                <p
                  className="font-display text-[1.85rem] leading-none text-ferresa-accent/70"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="text-h3 text-[1.35rem]">{item.title}</h3>
                <p className="text-body text-ferresa-muted">{item.description}</p>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
