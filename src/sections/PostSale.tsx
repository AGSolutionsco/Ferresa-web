import { postSaleContent } from '@/data/postSale'
import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'

/**
 * Compromiso postventa — confianza después de la entrega.
 * Copy aprobado por el cliente; sin garantías inventadas.
 */
export function PostSale() {
  const content = postSaleContent

  return (
    <Section
      tone="muted"
      padding="lg"
      aria-labelledby="post-sale-heading"
      className="border-b border-ferresa-line"
    >
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-small font-medium tracking-[0.16em] text-ferresa-muted uppercase">
            {content.eyebrow}
          </p>
          <h2
            id="post-sale-heading"
            className="mt-4 text-h2 text-balance sm:mt-5"
          >
            {content.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-body text-ferresa-muted sm:mt-6">
            {content.description}
          </p>
          <p className="mx-auto mt-8 max-w-xl font-display text-[1.35rem] leading-snug text-ferresa-ink italic sm:mt-10 sm:text-[1.6rem]">
            {content.closing.split(/(?<=\.)\s+/).map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>
      </Reveal>
    </Section>
  )
}
