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
import { MediaFrame } from '@/components/ui/Media'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { ServiceCard } from '@/components/cards/ServiceCard'
import { mediaSizes } from '@/utils/media'

export function AboutPage() {
  usePageSeo(pageSeo.about)
  const { about } = homeContent
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

      <Container className="grid gap-10 py-14 sm:py-16 lg:grid-cols-2 lg:items-start lg:gap-16 lg:py-20">
        <Reveal className="space-y-5">
          <h2 className="text-h2">Nuestra historia</h2>
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-body text-ferresa-muted">
              {paragraph}
            </p>
          ))}
          {company.legalName ? (
            <p className="text-small text-ferresa-subtle">
              Razón social de origen: {company.legalName}.
            </p>
          ) : null}
        </Reveal>

        <Reveal delay={80}>
          <MediaFrame
            src={about.imageSrc}
            alt={about.imageAlt}
            aspect="portrait"
            sizes={mediaSizes.about}
            width={1000}
            height={1250}
            loading="lazy"
            className="min-h-[18rem] sm:min-h-[24rem] lg:aspect-auto lg:min-h-[28rem]"
          />
        </Reveal>
      </Container>

      <Section tone="muted" padding="lg" className="border-y border-ferresa-line">
        <Reveal>
          <SectionHeading
            title="Qué hace Ferresa"
            description="Desarrollamos remodelaciones, construcciones y proyectos de mobiliario a medida, con fabricación e instalación cuando el proyecto lo requiere."
            titleAs="h2"
          />
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 40}>
              <ServiceCard service={service} index={index} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <dl className="mt-14 grid gap-6 sm:grid-cols-3">
            {about.highlights.map((item) => (
              <div key={item.label} className="border-t border-ferresa-line pt-5">
                <dt className="text-small tracking-[0.14em] text-ferresa-muted uppercase">
                  {item.label}
                </dt>
                <dd className="mt-3 font-display text-[1.55rem]">{item.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Section>

      <Section tone="light" padding="lg">
        <Reveal>
          <SectionHeading title="Nuestro enfoque" titleAs="h2" />
        </Reveal>
        <ul className="mt-10 grid list-none gap-8 sm:grid-cols-2">
          {diffs.map((item, index) => (
            <li key={item.id}>
              <Reveal delay={index * 40}>
                <div className="border-t border-ferresa-line pt-5">
                  <p className="font-display text-[1.5rem] text-ferresa-accent/70" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-2 text-h3 text-[1.3rem]">{item.title}</h3>
                  <p className="mt-2 text-body text-ferresa-muted">{item.description}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="muted" padding="lg" className="border-t border-ferresa-line">
        <Reveal>
          <SectionHeading
            title="De la idea a la instalación"
            description="Así acompañamos cada proyecto."
            titleAs="h2"
          />
        </Reveal>
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
          Cotizar mi proyecto
        </Button>
      </Section>
    </>
  )
}
