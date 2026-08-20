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
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const panelId = useId()
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        menuButtonRef.current?.focus()
        return
      }

      if (event.key !== 'Tab' || !panelRef.current) return

      const focusable = [
        ...panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])',
        ),
      ]
      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <header
      className={cn(
        'sticky top-0 z-40 border-b bg-ferresa-canvas/90 backdrop-blur-md transition-ferresa',
        scrolled ? 'border-ferresa-line shadow-soft' : 'border-ferresa-line/80',
      )}
    >
      <Container className="flex h-[4.25rem] items-center justify-between gap-4 lg:h-[4.75rem]">
        <Logo className="shrink-0" />

        <nav aria-label="Principal" className="hidden items-center gap-0.5 lg:flex">
          {mainNavigation.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === '/'}
              className={({ isActive }) =>
                cn(
                  'relative rounded-[var(--radius-md)] px-3.5 py-2 text-nav tracking-[0.01em] text-ferresa-muted transition-ferresa',
                  'hover:text-ferresa-ink',
                  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ferresa-focus',
                  isActive && 'text-ferresa-ink after:absolute after:inset-x-3.5 after:bottom-1 after:h-px after:bg-ferresa-ink',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Button to="/contacto" variant="primary" size="sm">
            <span className="sm:hidden">Cotizar</span>
            <span className="hidden sm:inline">Cotizar mi proyecto</span>
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
        ref={panelRef}
        id={panelId}
        className={cn(
          'overflow-hidden border-t border-ferresa-line bg-ferresa-canvas lg:hidden',
          'transition-[max-height,opacity] duration-[450ms] ease-[var(--ease-out-soft)]',
          open ? 'max-h-[calc(100dvh-4.25rem)] opacity-100' : 'max-h-0 opacity-0',
        )}
        aria-hidden={!open}
        inert={!open ? true : undefined}
      >
        <Container className="flex flex-col gap-8 py-8">
          <div className="flex items-center justify-between">
            <p className="text-small tracking-[0.16em] text-ferresa-muted uppercase">
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
                    'rounded-[var(--radius-md)] px-1 py-3 font-display text-[1.75rem] leading-none text-ferresa-ink transition-ferresa',
                    'hover:text-ferresa-accent',
                    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ferresa-focus',
                    isActive && 'text-ferresa-accent',
                  )
                }
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <Button to="/contacto" variant="primary" className="w-full">
            Cotizar mi proyecto
          </Button>

          <p className="text-small text-ferresa-muted">
            {company.serviceCities.join(' y ')}
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
