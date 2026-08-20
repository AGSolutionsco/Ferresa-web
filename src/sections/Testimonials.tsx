import { homeContent } from '@/data/home'
import { getPublishedTestimonials } from '@/data/testimonials'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

/**
 * Testimonios — solo con contenido real publicado.
 * Si no hay ítems, no se muestra la sección (sin reseñas inventadas).
 */
export function Testimonials() {
  const { testimonials: content } = homeContent
  const items = getPublishedTestimonials()

  if (items.length === 0) {
    return null
  }

  return (
    <Section
      tone="muted"
      padding="lg"
      aria-labelledby="testimonials-heading"
      className="border-b border-ferresa-line"
    >
      <Reveal>
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
          titleAs="h2"
          titleId="testimonials-heading"
        />
      </Reveal>
      <ul className="mt-12 grid list-none gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li
            key={item.id}
            className="border border-ferresa-line bg-ferresa-surface p-6 sm:p-8"
          >
            <blockquote className="space-y-4">
              <p className="text-body text-ferresa-ink">“{item.quote}”</p>
              <footer className="text-small text-ferresa-muted">
                <cite className="not-italic font-semibold text-ferresa-ink">
                  {item.name}
                </cite>
                {item.city ? <span> · {item.city}</span> : null}
                {item.projectTitle ? (
                  <p className="mt-1">{item.projectTitle}</p>
                ) : null}
              </footer>
            </blockquote>
          </li>
        ))}
      </ul>
    </Section>
  )
}
