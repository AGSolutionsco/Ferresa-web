import { homeContent } from '@/data/home'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { MediaFrame } from '@/components/ui/Media'
import { Reveal } from '@/components/ui/Reveal'
import { mediaSizes } from '@/utils/media'

/**
 * Vista previa "Sobre Ferresa".
 * Mobile: título → texto → imagen → datos → CTA.
 */
export function AboutPreview() {
  const { about } = homeContent

  return (
    <section
      aria-labelledby="about-preview-heading"
      className="border-b border-ferresa-line bg-ferresa-canvas"
    >
      <Container className="grid gap-10 py-16 sm:gap-12 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-28">
        <Reveal className="space-y-5 lg:order-2">
          <p className="text-small font-medium tracking-[0.16em] text-ferresa-muted uppercase">
            {about.eyebrow}
          </p>
          <h2 id="about-preview-heading" className="text-h2 max-w-lg">
            {about.title}
          </h2>
          <div className="max-w-xl space-y-4">
            {about.paragraphs.slice(0, 2).map((paragraph) => (
              <p key={paragraph} className="text-body text-ferresa-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={80} className="lg:order-1">
          <MediaFrame
            src={about.imageSrc}
            alt={about.imageAlt}
            aspect="portrait"
            sizes={mediaSizes.about}
            width={1000}
            height={1250}
            loading="lazy"
            className="min-h-[18rem] sm:min-h-[22rem] lg:min-h-[32rem] lg:aspect-auto"
          />
        </Reveal>

        <Reveal delay={120} className="space-y-8 lg:order-3 lg:col-span-2 lg:grid lg:grid-cols-2 lg:items-end lg:gap-16">
          <div className="space-y-4">
            <dl className="grid gap-6 sm:grid-cols-3">
              {about.highlights.map((item) => (
                <div key={item.label} className="border-t border-ferresa-line pt-5">
                  <dt className="text-small tracking-[0.14em] text-ferresa-muted uppercase">
                    {item.label}
                  </dt>
                  <dd className="mt-3 font-display text-[1.55rem] leading-tight text-ferresa-ink">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
            {about.expansionNote ? (
              <p className="text-small text-ferresa-subtle">{about.expansionNote}</p>
            ) : null}
          </div>

          <div className="lg:justify-self-end">
            <Button to={about.cta.to} variant="secondary">
              {about.cta.label}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
