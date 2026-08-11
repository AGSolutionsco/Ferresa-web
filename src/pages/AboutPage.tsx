import { pageSeo } from '@/data/seo'
import { company } from '@/data/company'
import { homeContent } from '@/data/home'
import { differentiators, homeDifferentiatorIds } from '@/data/differentiators'
import { processSteps } from '@/data/process'
import { services } from '@/data/services'
import { usePageSeo } from '@/hooks/usePageSeo'
import { PageHero } from '@/components/layout/PageShell'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Image } from '@/components/ui/Image'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'

const coreServiceIds = ['diseno', 'fabricacion', 'instalacion'] as const

export function AboutPage() {
  usePageSeo(pageSeo.about.title, pageSeo.about.description)
  const { about } = homeContent
  const coreServices = services.filter((item) =>
    coreServiceIds.includes(item.id as (typeof coreServiceIds)[number]),
  )
  const diffs = homeDifferentiatorIds
    .slice(0, 4)
    .map((id) => differentiators.find((item) => item.id === id))
    .filter((item): item is (typeof differentiators)[number] => Boolean(item))

  return (
    <>
      <PageHero
        eyebrow="Nosotros"
        title={about.title}
        description={company.description}
      />

      <Container className="grid gap-10 py-14 sm:py-16 lg:grid-cols-2 lg:items-start lg:gap-14 lg:py-20">
        <div className="space-y-5">
          <h2 className="text-h2">Nuestra historia</h2>
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-body text-ferresa-muted">
              {paragraph}
            </p>
          ))}
          {about.expansionNote ? (
            <p className="text-small text-ferresa-subtle">
              {about.expansionNote}
              <span className="sr-only">
                . Expansión proyectada; no es una operación actual.
              </span>
            </p>
          ) : null}
        </div>

        <div className="relative min-h-[18rem] overflow-hidden bg-ferresa-surface-muted sm:min-h-[22rem]">
          {about.imageSrc ? (
            <Image
              src={about.imageSrc}
              alt={about.imageAlt}
              width={1000}
              height={1250}
              loading="lazy"
              className="h-full min-h-[18rem] w-full sm:min-h-[22rem]"
            />
          ) : (
            <div
              role="img"
              aria-label={`${about.imageAlt} (placeholder de desarrollo)`}
              className="flex h-full min-h-[18rem] items-end bg-[linear-gradient(160deg,#eeece7,#cfc9be)] p-5 sm:min-h-[22rem]"
            >
              <span className="text-small font-medium tracking-wide text-ferresa-muted uppercase">
                Fotografía pendiente
              </span>
            </div>
          )}
        </div>
      </Container>

      <Section tone="muted" padding="lg" className="border-y border-ferresa-line">
        <SectionHeading
          title="Qué hace Ferresa"
          description="Diseño, fabricación e instalación de mobiliario personalizado."
          titleAs="h2"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {coreServices.map((service) => (
            <article
              key={service.id}
              className="border border-ferresa-line bg-ferresa-surface p-6"
            >
              <h3 className="text-h3 text-[1.35rem]">{service.title}</h3>
              <p className="mt-3 text-body text-ferresa-muted">{service.description}</p>
            </article>
          ))}
        </div>

        <dl className="mt-12 grid gap-6 sm:grid-cols-3">
          {about.highlights.map((item) => (
            <div key={item.label} className="border-t border-ferresa-line pt-4">
              <dt className="text-small tracking-wide text-ferresa-subtle uppercase">
                {item.label}
              </dt>
              <dd className="mt-2 font-display text-[1.35rem]">{item.value}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section tone="light" padding="lg">
        <SectionHeading title="Nuestro enfoque" titleAs="h2" />
        <ul className="mt-10 grid list-none gap-8 sm:grid-cols-2">
          {diffs.map((item, index) => (
            <li key={item.id} className="border-t border-ferresa-line pt-5">
              <p className="font-display text-[1.5rem] text-ferresa-accent/70" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-2 text-h3 text-[1.3rem]">{item.title}</h3>
              <p className="mt-2 text-body text-ferresa-muted">{item.description}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="muted" padding="lg" className="border-t border-ferresa-line">
        <SectionHeading
          title="De la idea a la instalación"
          description="Así acompañamos cada proyecto."
          titleAs="h2"
        />
        <ol className="mt-10 grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step) => (
            <li key={step.number}>
              <p className="font-display text-[2rem] text-ferresa-accent/70" aria-hidden="true">
                {step.number}
              </p>
              <h3 className="mt-2 text-h3 text-[1.2rem]">{step.title}</h3>
              <p className="mt-2 text-small text-ferresa-muted">{step.description}</p>
            </li>
          ))}
        </ol>
        <Button to="/contacto" variant="primary" className="mt-10">
          Cuéntanos tu proyecto
        </Button>
      </Section>
    </>
  )
}
