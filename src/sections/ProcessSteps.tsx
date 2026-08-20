import { homeContent } from '@/data/home'
import { processSteps } from '@/data/process'
import { Button } from '@/components/ui/Button'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { AppLink } from '@/components/ui/Link'
import { Reveal } from '@/components/ui/Reveal'
import { generateWhatsAppLink } from '@/utils/whatsapp'
import { cn } from '@/utils/cn'

/**
 * Proceso de trabajo — pasos confirmados, sin plazos ni pagos inventados.
 */
export function ProcessSteps() {
  const { process: content } = homeContent
  const whatsappHref = generateWhatsAppLink(content.whatsappCta.message)

  return (
    <Section
      tone="muted"
      padding="lg"
      aria-labelledby="process-heading"
      className="border-b border-ferresa-line"
    >
      <Reveal>
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
          titleAs="h2"
          titleId="process-heading"
          className="max-w-2xl"
        />
      </Reveal>

      <Reveal delay={80}>
        <ol className="relative mt-12 grid list-none gap-8 sm:mt-14 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-5 lg:gap-8">
          <span
            aria-hidden="true"
            className="absolute top-5 right-[10%] left-[10%] hidden h-px bg-ferresa-line lg:block"
          />
          {processSteps.map((step, index) => {
            const isLast = index === processSteps.length - 1

            return (
              <li key={step.number} className="group relative">
                {!isLast ? (
                  <span
                    aria-hidden="true"
                    className="absolute top-8 bottom-[-2rem] left-3 w-px bg-ferresa-line sm:hidden"
                  />
                ) : null}

                <div className="relative flex gap-4 sm:flex-col sm:gap-5">
                  <div className="flex shrink-0 flex-col items-center sm:items-start">
                    <span
                      className={cn(
                        'relative z-10 flex size-6 items-center justify-center rounded-full border border-ferresa-line bg-ferresa-surface-muted text-[0.65rem] font-semibold text-ferresa-ink sm:mb-1 sm:size-auto sm:justify-start sm:border-0 sm:bg-transparent sm:p-0',
                      )}
                      aria-hidden="true"
                    >
                      <span className="sm:hidden">{index + 1}</span>
                      <span className="hidden font-display text-[2.6rem] leading-none text-ferresa-accent/75 transition-ferresa group-hover:text-ferresa-accent lg:text-[2.85rem] sm:inline">
                        {step.number}
                      </span>
                    </span>
                  </div>

                  <div className="space-y-2 pb-2 sm:pb-0">
                    <h3 className="text-h3 text-[1.3rem] leading-snug">{step.title}</h3>
                    <p className="text-body text-ferresa-muted">{step.description}</p>
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
      </Reveal>

      <Reveal delay={120}>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
          <Button to={content.primaryCta.to} variant="primary">
            {content.primaryCta.label}
          </Button>
          <AppLink
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            underline
            className="text-small font-medium text-ferresa-muted hover:text-ferresa-ink"
          >
            {content.whatsappCta.label}
          </AppLink>
        </div>
      </Reveal>
    </Section>
  )
}
