import { useEffect, useId, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { company } from '@/data/company'
import { mainNavigation } from '@/data/navigation'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { IconButton } from '@/components/ui/IconButton'
import { Logo } from '@/components/ui/Logo'
import { cn } from '@/utils/cn'

export function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const panelId = useId()
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b border-ferresa-line/80 bg-ferresa-canvas/90 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-[4.25rem]">
        <Logo />

        <nav aria-label="Principal" className="hidden items-center gap-1 lg:flex">
          {mainNavigation.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === '/'}
              className={({ isActive }) =>
                cn(
                  'rounded-[var(--radius-md)] px-3 py-2 text-nav text-ferresa-muted transition-ferresa',
                  'hover:text-ferresa-ink',
                  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ferresa-focus',
                  isActive && 'text-ferresa-ink',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            to="/contacto"
            variant="primary"
            size="sm"
            className="hidden sm:inline-flex"
          >
            Cotizar proyecto
          </Button>

          <IconButton
            ref={menuButtonRef}
            label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            aria-controls={panelId}
            className="lg:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            <MenuIcon open={open} />
          </IconButton>
        </div>
      </Container>

        <div
        id={panelId}
        className={cn(
          'overflow-hidden border-t border-ferresa-line bg-ferresa-canvas lg:hidden',
          'transition-[max-height,opacity] duration-[450ms] ease-[var(--ease-out-soft)]',
          open ? 'max-h-[calc(100dvh-4rem)] opacity-100' : 'max-h-0 opacity-0',
        )}
        aria-hidden={!open}
        inert={!open ? true : undefined}
      >
        <Container className="flex flex-col gap-6 py-6">
          <div className="flex items-center justify-between">
            <p className="text-small tracking-[0.12em] text-ferresa-muted uppercase">
              Menú
            </p>
            <IconButton
              ref={closeButtonRef}
              label="Cerrar menú"
              onClick={() => {
                setOpen(false)
                menuButtonRef.current?.focus()
              }}
            >
              <MenuIcon open />
            </IconButton>
          </div>

          <nav aria-label="Móvil" className="flex flex-col gap-1">
            {mainNavigation.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                end={item.href === '/'}
                className={({ isActive }) =>
                  cn(
                    'rounded-[var(--radius-md)] px-3 py-3 text-lg text-ferresa-ink transition-ferresa',
                    'hover:bg-ferresa-surface-muted',
                    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ferresa-focus',
                    isActive && 'bg-ferresa-surface-muted',
                  )
                }
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <Button to="/contacto" variant="primary" className="w-full">
            Cotizar proyecto
          </Button>

          <p className="text-small text-ferresa-muted">
            {company.primaryLocation.city}, {company.primaryLocation.country}
          </p>
        </Container>
      </div>
    </header>
  )
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      {open ? (
        <path
          d="M5 5L17 17M17 5L5 17"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      ) : (
        <>
          <path d="M4 7H18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M4 11H18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M4 15H18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </>
      )}
    </svg>
  )
}
