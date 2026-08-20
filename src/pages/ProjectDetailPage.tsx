import { Link, useParams } from 'react-router-dom'
import { pageSeo } from '@/data/seo'
import { categories } from '@/data/categories'
import { getProjectBySlug } from '@/data/projects'
import { usePageSeo } from '@/hooks/usePageSeo'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { MediaFrame } from '@/components/ui/Media'
import { mediaSizes } from '@/utils/media'
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
            <Link
              to="/proyectos"
              className="underline-offset-4 transition-ferresa hover:text-ferresa-ink hover:underline"
            >
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
        <MediaFrame
          src={cover}
          alt={`Proyecto ${project.title}`}
          aspect="wide"
          sizes={mediaSizes.hero}
          width={1600}
          height={1000}
          loading="eager"
          fetchPriority="high"
          className="min-h-[18rem] sm:min-h-[24rem] lg:min-h-[32rem] lg:aspect-auto"
        />

        {gallery.length > 0 ? (
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((src) => (
              <MediaFrame
                key={src}
                src={src}
                alt={`Galería — ${project.title}`}
                aspect="wide"
                sizes={mediaSizes.gallery}
                width={800}
                height={600}
                loading="lazy"
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
            Cotizar mi proyecto
          </Button>
        </div>
      </Container>
    </>
  )
}
