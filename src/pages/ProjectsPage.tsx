import { pageSeo } from '@/data/seo'
import { getPublishedProjects } from '@/data/projects'
import { usePageSeo } from '@/hooks/usePageSeo'
import { PageHero } from '@/components/layout/PageShell'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { ProjectCard } from '@/components/cards/ProjectCard'
import { Section } from '@/components/ui/Section'

export function ProjectsPage() {
  usePageSeo(pageSeo.projects.title, pageSeo.projects.description)
  const items = getPublishedProjects()

  return (
    <>
      <PageHero
        eyebrow="Portafolio"
        title="Nuestros proyectos"
        description="Proyectos de mobiliario personalizado diseñados, fabricados e instalados por Ferresa."
      />

      <Container className="py-12 sm:py-16 lg:py-20">
        {items.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="border border-dashed border-ferresa-line bg-ferresa-surface px-6 py-14 text-center sm:px-10">
            <p className="text-body text-ferresa-muted">
              Estamos preparando nuestro portafolio de proyectos.
            </p>
            <Button to="/contacto" variant="secondary" className="mt-6">
              Cuéntanos tu proyecto
            </Button>
          </div>
        )}
      </Container>

      <Section tone="muted" padding="md" className="border-t border-ferresa-line">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-h3">¿Quieres un proyecto similar?</h2>
            <p className="mt-2 text-body text-ferresa-muted">
              Cuéntanos tu idea y te orientamos sobre el siguiente paso.
            </p>
          </div>
          <Button to="/contacto" variant="primary">
            Solicitar información
          </Button>
        </div>
      </Section>
    </>
  )
}
