import { homeContent } from '@/data/home'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { Image } from '@/components/ui/Image'
import { cn } from '@/utils/cn'

function HeroContent({ className }: { className?: string }) {
  const { hero } = homeContent

  return (
    <div className={cn('flex flex-col justify-center', className)}>
      <div className="reveal-up space-y-6 sm:space-y-7">
        <Badge tone="accent">{hero.eyebrow}</Badge>

        <div className="space-y-4">
          <h1 id="hero-heading" className="text-display max-w-[14ch] text-ferresa-ink">
            {hero.title}
          </h1>
          <p className="max-w-md text-body text-ferresa-muted">{hero.description}</p>
          <p className="max-w-md text-small text-ferresa-subtle">{hero.supportingLine}</p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button to={hero.primaryCta.to} variant="primary" size="lg">
            {hero.primaryCta.label}
          </Button>
          <Button to={hero.secondaryCta.to} variant="secondary" size="lg">
            {hero.secondaryCta.label}
          </Button>
        </div>
      </div>
    </div>
  )
}

function HeroMedia({ className }: { className?: string }) {
  const { hero } = homeContent

  return (
    <div
      className={cn(
        'reveal-up relative isolate overflow-hidden bg-ferresa-surface-muted',
        'min-h-[20rem] sm:min-h-[24rem] lg:min-h-full',
        className,
      )}
      style={{ animationDelay: '120ms' }}
    >
      {hero.imageSrc ? (
        <Image
          src={hero.imageSrc}
          alt={hero.imageAlt}
          width={1200}
          height={1500}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <div
          role="img"
          aria-label={hero.imageAlt}
          className="absolute inset-0 flex items-end bg-[linear-gradient(145deg,#eeece7_0%,#ddd9d1_55%,#cfc9be_100%)] p-5 sm:p-6"
        >
          <span className="text-small font-medium tracking-wide text-ferresa-muted uppercase">
            Fotografía real pendiente — public/images
          </span>
        </div>
      )}
    </div>
  )
}

/**
 * Hero Home — FASE 3.1
 * Composición editorial dividida: mensaje + fotografía protagonista.
 */
export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="border-b border-ferresa-line bg-ferresa-canvas"
    >
      <Container className="grid lg:min-h-[calc(100dvh-4.25rem)] lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-0">
        <HeroContent className="py-12 sm:py-16 lg:py-20 lg:pr-12 xl:pr-16" />
        <HeroMedia className="-mx-5 sm:-mx-6 lg:mx-0 lg:min-h-[calc(100dvh-4.25rem)]" />
      </Container>
    </section>
  )
}
