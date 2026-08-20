import { Link } from 'react-router-dom'
import { pageSeo } from '@/data/seo'
import { usePageSeo } from '@/hooks/usePageSeo'
import { PageHero } from '@/components/layout/PageShell'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'

type NotFoundPageProps = {
  variant?: 'generic' | 'project'
}

export function NotFoundPage({ variant = 'generic' }: NotFoundPageProps) {
  const seo = variant === 'project' ? pageSeo.projectNotFound : pageSeo.notFound
  usePageSeo(seo.title, seo.description)

  const title =
    variant === 'project' ? 'Proyecto no encontrado' : 'Página no encontrada'
  const description =
    variant === 'project'
      ? 'El proyecto que buscas no está disponible o aún no ha sido publicado.'
      : 'La página que buscas no existe o fue movida.'

  return (
    <>
      <PageHero eyebrow="404" title={title} description={description} />
      <Container className="py-12 sm:py-16">
        <Reveal>
          <div className="flex flex-wrap gap-3">
            <Button to="/" variant="primary">
              Ir al inicio
            </Button>
            <Button to="/proyectos" variant="secondary">
              Ver proyectos
            </Button>
            <Button to="/contacto" variant="ghost">
              Contacto
            </Button>
          </div>
          <p className="mt-8 text-small text-ferresa-muted">
            También puedes volver con el{' '}
            <Link to="/" className="underline underline-offset-4">
              menú principal
            </Link>
            .
          </p>
        </Reveal>
      </Container>
    </>
  )
}
