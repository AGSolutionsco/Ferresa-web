import { homeContent } from '@/data/home'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Image } from '@/components/ui/Image'

/**
 * Vista previa "Sobre Ferresa" — FASE 3.4
 * Contenido provisional del cliente, sin datos inventados.
 * Mobile: título → texto → imagen → CTA.
 */
export function AboutPreview() {
  const { about } = homeContent

  return (
    <section
      aria-labelledby="about-preview-heading"
      className="border-b border-ferresa-line bg-ferresa-canvas"
    >
      <Container className="grid gap-10 py-16 sm:gap-12 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-14 lg:py-28">
        <div className="reveal-up space-y-5 lg:order-2">
          <p className="text-small font-medium tracking-[0.14em] text-ferresa-muted uppercase">
            {about.eyebrow}
          </p>
          <h2 id="about-preview-heading" className="text-h2 max-w-lg">
            {about.title}
          </h2>
          <div className="max-w-xl space-y-4">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-body text-ferresa-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div
          className="reveal-up relative isolate min-h-[20rem] overflow-hidden bg-ferresa-surface-muted sm:min-h-[24rem] lg:order-1 lg:min-h-[32rem]"
          style={{ animationDelay: '80ms' }}
        >
          {about.imageSrc ? (
            <Image
              src={about.imageSrc}
              alt={about.imageAlt}
              width={1000}
              height={1250}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full"
            />
          ) : (
            <div
              role="img"
              aria-label={`${about.imageAlt} (placeholder de desarrollo)`}
              className="absolute inset-0 flex items-end bg-[linear-gradient(160deg,#eeece7_0%,#ddd9d1_45%,#cfc9be_100%)] p-5 sm:p-6"
            >
              <span className="text-small font-medium tracking-wide text-ferresa-muted uppercase">
                Fotografía real pendiente — public/images
              </span>
            </div>
          )}
        </div>

        <div
          className="reveal-up space-y-8 lg:order-3 lg:col-span-2 lg:grid lg:grid-cols-2 lg:items-end lg:gap-14"
          style={{ animationDelay: '120ms' }}
        >
          <div className="space-y-4">
            <dl className="grid gap-5 sm:grid-cols-3">
              {about.highlights.map((item) => (
                <div key={item.label} className="border-t border-ferresa-line pt-4">
                  <dt className="text-small tracking-wide text-ferresa-subtle uppercase">
                    {item.label}
                  </dt>
                  <dd className="mt-2 font-display text-[1.35rem] leading-tight text-ferresa-ink">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
            {about.expansionNote ? (
              <p className="text-small text-ferresa-subtle">
                {about.expansionNote}
                <span className="sr-only">
                  . Expansión proyectada; no es una operación actual.
                </span>
              </p>
            ) : null}
          </div>

          <div className="lg:justify-self-end">
            <Button to={about.cta.to} variant="secondary">
              {about.cta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
