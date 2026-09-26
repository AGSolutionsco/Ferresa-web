import { pageSeo } from '@/data/seo'
import { homeContent } from '@/data/home'
import { getPublishedProjects } from '@/data/projects'
import { usePageSeo } from '@/hooks/usePageSeo'
import { PageHero } from '@/components/layout/PageShell'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { ProjectCard } from '@/components/cards/ProjectCard'
import { EmptyState } from '@/components/ui/EmptyState'
import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'

export function ProjectsPage() {
  usePageSeo(pageSeo.projects)
  const items = getPublishedProjects()
  const { featuredProjects: content } = homeContent
  const hasProjects = items.length > 0

  return (
    <>
      <PageHero
        eyebrow="Portafolio"
        title="Nuestros proyectos"
        description="Mobiliario personalizado fabricado e instalado por Ferresa."
      />

      <Container className="py-12 sm:py-16 lg:py-20">
        {hasProjects ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <Reveal>
            <EmptyState
              eyebrow="Portafolio"
              title={content.emptyTitle}
              description={content.emptyMessage}
              titleAs="h2"
              action={
                <Button to="/contacto" variant="primary">
                  Cotizar mi proyecto
                </Button>
              }
            />
          </Reveal>
        )}
      </Container>

      {hasProjects ? (
        <Section tone="muted" padding="md" className="border-t border-ferresa-line">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-h3">¿Quieres un proyecto similar?</h2>
              <p className="mt-2 text-body text-ferresa-muted">
                Cuéntanos tu idea y te orientamos sobre el siguiente paso.
              </p>
            </div>
            <Button to="/contacto" variant="primary">
              Cotizar mi proyecto
            </Button>
          </div>
        </Section>
      ) : null}
    </>
  )
}
