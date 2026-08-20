import { homeContent } from '@/data/home'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { MediaFrame } from '@/components/ui/Media'
import { mediaSizes } from '@/utils/media'
import { cn } from '@/utils/cn'

function splitConcept(value: string) {
  return value
    .split(/(?<=\.)\s+/)
    .map((line) => line.trim())
    .filter(Boolean)
}

function HeroContent({ className }: { className?: string }) {
  const { hero } = homeContent
  const conceptLines = splitConcept(hero.supportingLine)

  return (
    <div className={cn('flex flex-col justify-center', className)}>
      <div className="reveal-up space-y-7 sm:space-y-8">
        <Badge tone="accent">{hero.eyebrow}</Badge>

        <div className="space-y-5">
          <h1 id="hero-heading" className="text-display max-w-[16ch] text-ferresa-ink">
            {conceptLines.map((line) => (
              <span key={line} className="block italic">
                {line}
              </span>
            ))}
          </h1>
          <p className="max-w-md text-h3 font-display text-ferresa-ink-soft">
            {hero.title}
          </p>
          <p className="max-w-md text-body text-ferresa-muted">{hero.description}</p>
        </div>

        <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap">
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
        'reveal-up relative isolate min-h-[22rem] overflow-hidden sm:min-h-[26rem] lg:min-h-full',
        className,
      )}
      style={{ animationDelay: '120ms' }}
    >
      <MediaFrame
        src={hero.imageSrc}
        alt={hero.imageAlt}
        aspect="fill"
        sizes={mediaSizes.hero}
        width={1200}
        height={1500}
        loading="eager"
        fetchPriority="high"
        className="absolute inset-0 min-h-[22rem] sm:min-h-[26rem] lg:min-h-full"
        placeholderCaption="Fotografía de proyecto pendiente"
      />
    </div>
  )
}

/**
 * Hero Home — FASE 6
 * Composición editorial: concepto + fotografía protagonista (o placeholder).
 */
export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="border-b border-ferresa-line bg-ferresa-canvas"
    >
      <Container className="grid lg:min-h-[calc(100dvh-4.75rem)] lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-0">
        <HeroContent className="py-14 sm:py-16 lg:py-24 lg:pr-12 xl:pr-16" />
        <HeroMedia className="-mx-5 sm:-mx-6 lg:mx-0 lg:min-h-[calc(100dvh-4.75rem)]" />
      </Container>
    </section>
  )
}
