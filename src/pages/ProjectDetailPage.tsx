import { Link, useParams } from 'react-router-dom'
import { pageSeo } from '@/data/seo'
import { categories } from '@/data/categories'
import { getProjectBySlug } from '@/data/projects'
import { usePageSeo } from '@/hooks/usePageSeo'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Image } from '@/components/ui/Image'
import { generateWhatsAppLink, similarProjectMessage } from '@/utils/whatsapp'
import { NotFoundPage } from './NotFoundPage'

export function ProjectDetailPage() {
  const { slug = '' } = useParams()
  const project = getProjectBySlug(slug)

  const seo = project
    ? pageSeo.projectDetail(project.title)
    : pageSeo.projectNotFound
  usePageSeo(seo.title, seo.description)

  if (!project) {
    return <NotFoundPage variant="project" />
  }

  const categoryLabel =
    categories.find((item) => item.id === project.category)?.label ?? project.category
  const [cover, ...gallery] = project.images
  const whatsappHref = generateWhatsAppLink(similarProjectMessage(project.title))

  return (
    <>
      <div className="border-b border-ferresa-line">
        <Container className="py-10 sm:py-14 lg:py-16">
          <p className="text-small text-ferresa-muted">
            <Link to="/proyectos" className="underline-offset-4 hover:underline">
              Proyectos
            </Link>
            <span aria-hidden="true"> / </span>
            <span>{project.title}</span>
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Badge>{categoryLabel}</Badge>
            {project.city ? (
              <span className="text-small text-ferresa-muted">{project.city}</span>
            ) : null}
            {project.workType ? (
              <span className="text-small text-ferresa-muted">{project.workType}</span>
            ) : null}
          </div>
          <h1 className="mt-4 max-w-3xl text-h1">{project.title}</h1>
          {project.description ? (
            <p className="mt-5 max-w-2xl text-body text-ferresa-muted">
              {project.description}
            </p>
          ) : null}
        </Container>
      </div>

      <Container className="py-10 sm:py-14">
        <div className="relative min-h-[18rem] overflow-hidden bg-ferresa-surface-muted sm:min-h-[24rem] lg:min-h-[32rem]">
          {cover ? (
            <Image
              src={cover}
              alt={`Proyecto ${project.title}`}
              width={1600}
              height={1000}
              loading="eager"
              fetchPriority="high"
              className="h-full min-h-[18rem] w-full sm:min-h-[24rem] lg:min-h-[32rem]"
            />
          ) : (
            <div
              role="img"
              aria-label={`Imagen pendiente del proyecto ${project.title}`}
              className="flex h-full min-h-[18rem] items-end bg-[linear-gradient(145deg,#eeece7,#cfc9be)] p-5 sm:min-h-[24rem]"
            >
              <span className="text-small font-medium tracking-wide text-ferresa-muted uppercase">
                Imagen pendiente
              </span>
            </div>
          )}
        </div>

        {gallery.length > 0 ? (
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((src) => (
              <Image
                key={src}
                src={src}
                alt={`Galería — ${project.title}`}
                width={800}
                height={600}
                loading="lazy"
                className="aspect-[4/3] w-full bg-ferresa-surface-muted"
              />
            ))}
          </div>
        ) : null}

        {project.features.length > 0 ? (
          <div className="mt-12 max-w-2xl">
            <h2 className="text-h3">Características</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-body text-ferresa-muted">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="mt-12 flex flex-col gap-3 border-t border-ferresa-line pt-10 sm:flex-row">
          <Button href={whatsappHref} target="_blank" rel="noopener noreferrer">
            Quiero un proyecto similar
          </Button>
          <Button to="/contacto" variant="secondary">
            Solicitar cotización
          </Button>
        </div>
      </Container>
    </>
  )
}
