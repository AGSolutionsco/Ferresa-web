import { NavLink } from 'react-router-dom'
import { company } from '@/data/company'
import { mainNavigation } from '@/data/navigation'
import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/ui/Logo'
import { AppLink } from '@/components/ui/Link'
import { generateWhatsAppLink } from '@/utils/whatsapp'
import { cn } from '@/utils/cn'

export function Footer() {
  const year = new Date().getFullYear()
  const whatsappHref = generateWhatsAppLink()

  return (
    <footer className="border-t border-ferresa-line bg-ferresa-ink text-ferresa-inverse">
      <Container className="py-14 sm:py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div className="max-w-sm space-y-5">
            <Logo tone="dark" />
            <p className="text-body text-ferresa-subtle">{company.description}</p>
            <p className="text-small text-ferresa-subtle">
              {company.serviceCities.join(' y ')}, {company.primaryLocation.country}
            </p>
            {company.contact.address ? (
              <p className="text-small text-ferresa-subtle">{company.contact.address}</p>
            ) : null}
            {company.businessHours ? (
              <p className="text-small text-ferresa-subtle">
                Horario: {company.businessHours}
              </p>
            ) : null}
          </div>

          <div>
            <h2 className="text-small font-semibold tracking-[0.14em] text-ferresa-subtle uppercase">
              Navegación
            </h2>
            <ul className="mt-4 space-y-2">
              {mainNavigation.map((item) => (
                <li key={item.href}>
                  <NavLink
                    to={item.href}
                    end={item.href === '/'}
                    className={({ isActive }) =>
                      cn(
                        'text-nav text-ferresa-inverse/85 transition-ferresa hover:text-ferresa-inverse',
                        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ferresa-inverse',
                        isActive && 'text-ferresa-inverse',
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-small font-semibold tracking-[0.14em] text-ferresa-subtle uppercase">
              Contacto
            </h2>
            <ul className="mt-4 space-y-3 text-nav">
              <li>
                <AppLink
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ferresa-inverse/85 hover:text-ferresa-inverse"
                >
                  WhatsApp
                </AppLink>
              </li>
              <li>
                <AppLink
                  href={company.social.instagram.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ferresa-inverse/85 hover:text-ferresa-inverse"
                >
                  Instagram {company.social.instagram.handle}
                </AppLink>
              </li>
              {company.flags.showMaps && company.contact.mapsUrl ? (
                <li>
                  <AppLink
                    href={company.contact.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ferresa-inverse/85 hover:text-ferresa-inverse"
                  >
                    Google Maps
                  </AppLink>
                </li>
              ) : null}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-small text-ferresa-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {company.name}. Todos los derechos reservados.
          </p>
          <p>Fabricación e instalación de mobiliario personalizado.</p>
        </div>
      </Container>
    </footer>
  )
}
