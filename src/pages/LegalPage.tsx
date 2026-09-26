import type { LegalDocument } from '@/data/legal'
import { usePageSeo } from '@/hooks/usePageSeo'
import { PageHero } from '@/components/layout/PageShell'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'

type LegalPageProps = {
  document: LegalDocument
  seo: {
    title: string
    description: string
  }
}

/** Página legal estática — layout editorial del sitio. */
export function LegalPage({ document, seo }: LegalPageProps) {
  usePageSeo(seo)

  return (
    <>
      <PageHero
        eyebrow={document.eyebrow}
        title={document.title}
        description={document.description}
      />

      <Container className="max-w-3xl py-12 sm:py-16 lg:py-20">
        <Reveal>
          <p className="text-small text-ferresa-muted">
            Última actualización: {document.lastUpdated}
          </p>
        </Reveal>

        <div className="mt-10 space-y-10 sm:mt-12 sm:space-y-12">
          {document.sections.map((section, index) => (
            <Reveal key={section.heading} delay={Math.min(index * 30, 120)}>
              <article className="space-y-4 border-t border-ferresa-line pt-8 first:border-t-0 first:pt-0">
                <h2 className="text-h3 text-[1.25rem] sm:text-[1.35rem]">
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className="text-body text-ferresa-muted">
                    {paragraph}
                  </p>
                ))}
                {section.bullets && section.bullets.length > 0 ? (
                  <ul className="list-disc space-y-2 pl-5 text-body text-ferresa-muted">
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </>
  )
}
