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
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="max-w-sm space-y-5 sm:col-span-2 lg:col-span-5">
            <Logo tone="dark" />
            <p className="text-body text-ferresa-subtle">{company.description}</p>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-small font-semibold tracking-[0.16em] text-ferresa-subtle uppercase">
              Navegación
            </h2>
            <ul className="mt-5 space-y-2.5">
              {mainNavigation.map((item) => (
                <li key={item.href}>
                  <NavLink
                    to={item.href}
                    end={item.href === '/'}
                    className={({ isActive }) =>
                      cn(
                        'text-nav text-ferresa-inverse/80 transition-ferresa hover:text-ferresa-inverse',
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

          <div className="lg:col-span-2">
            <h2 className="text-small font-semibold tracking-[0.16em] text-ferresa-subtle uppercase">
              Ubicación
            </h2>
            <ul className="mt-5 space-y-3 text-nav text-ferresa-inverse/80">
              <li>
                <p className="text-ferresa-inverse">
                  {company.primaryLocation.city}, {company.primaryLocation.country}
                </p>
                {company.contact.address ? (
                  <p className="mt-1 text-small text-ferresa-subtle">
                    {company.contact.address}
                  </p>
                ) : null}
              </li>
              {company.serviceCities
                .filter((city) => city !== company.primaryLocation.city)
                .map((city) => (
                  <li key={city}>
                    <p className="text-ferresa-inverse">{city}</p>
                  </li>
                ))}
              {company.businessHours ? (
                <li className="text-small text-ferresa-subtle">
                  Horario: {company.businessHours}
                </li>
              ) : null}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-small font-semibold tracking-[0.16em] text-ferresa-subtle uppercase">
              Contacto
            </h2>
            <ul className="mt-5 space-y-3 text-nav">
              <li>
                <AppLink
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ferresa-inverse/80 hover:text-ferresa-inverse"
                >
                  WhatsApp {company.whatsapp.display}
                </AppLink>
              </li>
              <li>
                <AppLink
                  href={company.social.instagram.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ferresa-inverse/80 hover:text-ferresa-inverse"
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
                    className="text-ferresa-inverse/80 hover:text-ferresa-inverse"
                  >
                    Google Maps
                  </AppLink>
                </li>
              ) : null}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-small text-ferresa-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {company.name}. Todos los derechos reservados.
          </p>
          <p>Fabricación e instalación de mobiliario personalizado.</p>
        </div>
      </Container>
    </footer>
  )
}
