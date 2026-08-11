# Ferresa — Sitio web comercial

Proyecto de **AG Solutions** para **Ferresa** (Medellín, Colombia).

Sitio comercial orientado a conversión (web → WhatsApp), construido por fases.

## Stack

- React 19
- Vite 6
- TypeScript
- Tailwind CSS 4
- React Router 7

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Variables de entorno

Copia `.env.example` a `.env` y ajusta si es necesario.

## Arquitectura

```
src/
  components/   # UI reutilizable
  sections/     # Bloques de página
  pages/        # Rutas
  layouts/      # Layouts
  data/         # Contenido editable
  types/        # Tipos TypeScript
  utils/        # Helpers (WhatsApp, etc.)
  hooks/
  assets/
public/images/  # Fotografías reales
```

## Rutas

| Ruta | Estado |
|------|--------|
| `/` | Placeholder FASE 1 |
| `/proyectos` | Placeholder → FASE 4 |
| `/proyectos/:slug` | Placeholder → FASE 4 |
| `/servicios` | Placeholder → FASE 5 |
| `/nosotros` | Placeholder → FASE 5 |
| `/contacto` | Placeholder → FASE 6 |

## Fases

1. Configuración y arquitectura ← **actual**
2. Sistema visual + Header + Footer
3. Home completa
4. Proyectos
5. Servicios + Nosotros + Proceso + Diferenciadores
6. Contacto + Cotización + WhatsApp
7. Responsive + a11y + performance
8. SEO técnico
9. QA
10. Deploy
11. Verificación en producción

## Reglas de contenido

- No inventar proyectos, testimonios, dirección, email ni materiales confirmados.
- Barranquilla = expansión proyectada, no operación actual.
- WhatsApp: `3245734731` (Colombia).
- Instagram: [@ferresa.co](https://www.instagram.com/ferresa.co/)
