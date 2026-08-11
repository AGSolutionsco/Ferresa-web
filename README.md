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
| `/` | Home completa (FASE 3) |
| `/proyectos` | Listado + empty state |
| `/proyectos/:slug` | Detalle / 404 |
| `/servicios` | Catálogo de soluciones |
| `/nosotros` | Empresa |
| `/contacto` | Formulario → WhatsApp |
| `*` | 404 |

Documentación: `docs/FASE-3.md`, `docs/FASE-4.md`.

## Fases

1. Configuración y arquitectura — hecha  
2. Sistema visual + Header + Footer — hecha  
3. Home completa (3.1–3.8) — hecha  
4. Páginas internas — hecha  
5+ Responsive/a11y/SEO avanzado, QA, deploy — pendientes

## Reglas de contenido

- No inventar proyectos, testimonios, dirección, email ni materiales confirmados.
- Barranquilla = expansión proyectada, no operación actual.
- WhatsApp: `3245734731` (Colombia).
- Instagram: [@ferresa.co](https://www.instagram.com/ferresa.co/)
