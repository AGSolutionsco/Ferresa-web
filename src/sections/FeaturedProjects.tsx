import { homeContent } from '@/data/home'
import { getFeaturedProjects } from '@/data/projects'
import { Button } from '@/components/ui/Button'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProjectCard } from '@/components/cards/ProjectCard'
import { Reveal } from '@/components/ui/Reveal'

/**
 * Proyectos destacados.
 * Si no hay proyectos publicados, no se muestra en Home (evita un vacío que debilita confianza).
 */
export function FeaturedProjects() {
  const { featuredProjects: content } = homeContent
  const featured = getFeaturedProjects(content.limit)
  const [primary, ...rest] = featured

  if (!primary) {
    return null
  }

  return (
    <Section
      tone="muted"
      padding="lg"
      aria-labelledby="featured-projects-heading"
      className="border-b border-ferresa-line"
    >
      <Reveal>
        <div className="flex flex-col gap-8 sm:gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
            titleAs="h2"
            titleId="featured-projects-heading"
            className="max-w-2xl"
          />
          <Button
            to={content.cta.to}
            variant="secondary"
            className="shrink-0 self-start lg:self-auto"
          >
            {content.cta.label}
          </Button>
        </div>
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-10 grid gap-8 lg:mt-14 lg:grid-cols-12 lg:gap-8">
          <ProjectCard
            project={primary}
            variant="featured"
            showDescription
            className="lg:col-span-7"
          />
          {rest.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
              {rest.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : null}
        </div>
      </Reveal>
    </Section>
  )
}
