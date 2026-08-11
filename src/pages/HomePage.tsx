import { company } from '@/data/company'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { DevImagePlaceholder } from '@/components/ui/Image'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProjectCard } from '@/components/cards/ProjectCard'
import { ServiceCard } from '@/components/cards/ServiceCard'
import { CategoryCard } from '@/components/cards/CategoryCard'
import { categories } from '@/data/categories'
import { services } from '@/data/services'
import { projects } from '@/data/projects'

/**
 * Estructura visual base de Home — FASE 2.
 * La Home completa (contenido y secciones definitivas) se construye en FASE 3.
 */
export function HomePage() {
  const previewServices = services.slice(0, 3)
  const previewCategories = categories.slice(0, 4)
  const publishedProjects = projects.filter((project) => project.published)

  return (
    <>
      <section className="border-b border-ferresa-line">
        <Container className="grid gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14 lg:py-20">
          <div className="space-y-6">
            <Badge tone="accent">Medellín, Colombia</Badge>
            <h1 className="text-display max-w-xl">{company.tagline}</h1>
            <p className="max-w-lg text-body text-ferresa-muted">
              {company.description}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button to="/contacto" variant="primary">
                Cotizar mi proyecto
              </Button>
              <Button to="/proyectos" variant="secondary">
                Ver nuestros proyectos
              </Button>
            </div>
          </div>

          <DevImagePlaceholder
            label="Fotografía de proyecto pendiente"
            aspect="wide"
            className="min-h-72 w-full lg:min-h-[28rem]"
          />
        </Container>
      </section>

      <Section tone="light" padding="lg">
        <SectionHeading
          eyebrow="Sistema visual"
          title="Base lista para las siguientes fases"
          description="Header, tipografía, componentes y conversión WhatsApp ya están integrados. El contenido completo de la Home llega en la FASE 3."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {previewCategories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </Section>

      <Section tone="muted" padding="lg">
        <SectionHeading
          eyebrow="Servicios"
          title="Diseño, fabricación e instalación"
          description="Vista previa de tarjetas de servicio. El bloque definitivo se desarrolla en FASE 5."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {previewServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </Section>

      <Section tone="light" padding="lg">
        <SectionHeading
          eyebrow="Proyectos"
          title="Catálogo preparado"
          description={
            publishedProjects.length === 0
              ? 'Aún no hay proyectos confirmados en los datos. Las tarjetas se activarán cuando AG Solutions cargue proyectos reales.'
              : 'Proyectos destacados desde src/data.'
          }
        />

        {publishedProjects.length > 0 ? (
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {publishedProjects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="mt-10 border border-dashed border-ferresa-line bg-ferresa-surface px-6 py-10">
            <p className="text-small font-medium tracking-[0.12em] text-ferresa-muted uppercase">
              Contenido pendiente de configuración
            </p>
            <p className="mt-3 max-w-xl text-body text-ferresa-muted">
              ProjectCard está listo. No se muestran proyectos inventados.
            </p>
          </div>
        )}
      </Section>
    </>
  )
}
