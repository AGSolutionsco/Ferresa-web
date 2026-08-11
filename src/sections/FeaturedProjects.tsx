import { homeContent } from '@/data/home'
import { getFeaturedProjects } from '@/data/projects'
import { Button } from '@/components/ui/Button'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProjectCard } from '@/components/cards/ProjectCard'

/**
 * Proyectos destacados — FASE 3.3
 * Sin proyectos inventados: estado vacío elegante si la lista está vacía.
 */
export function FeaturedProjects() {
  const { featuredProjects: content } = homeContent
  const featured = getFeaturedProjects(content.limit)
  const hasProjects = featured.length > 0
  const [primary, ...rest] = featured

  return (
    <Section
      tone="muted"
      padding="lg"
      aria-labelledby="featured-projects-heading"
      className="border-b border-ferresa-line"
    >
      <div className="reveal-up flex flex-col gap-8 sm:gap-10 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
          titleAs="h2"
          titleId="featured-projects-heading"
          className="max-w-2xl"
        />
        {hasProjects ? (
          <Button
            to={content.cta.to}
            variant="secondary"
            className="shrink-0 self-start lg:self-auto"
          >
            {content.cta.label}
          </Button>
        ) : null}
      </div>

      {hasProjects && primary ? (
        <div className="reveal-up mt-10 grid gap-8 lg:mt-14 lg:grid-cols-12 lg:gap-8">
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
      ) : (
        <div className="reveal-up mt-10 border border-dashed border-ferresa-line bg-ferresa-surface px-6 py-14 sm:px-10 sm:py-16 lg:mt-14">
          <div className="mx-auto flex max-w-xl flex-col items-start gap-6 sm:items-center sm:text-center">
            <p className="text-body text-ferresa-muted">{content.emptyMessage}</p>
            <Button to={content.emptyCta.to} variant="secondary">
              {content.emptyCta.label}
            </Button>
          </div>
        </div>
      )}
    </Section>
  )
}
