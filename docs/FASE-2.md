# FASE 2 — Sistema visual + componentes base

**Fecha:** 2026-08-11  
**Estado:** Completada

## Objetivo

Definir el sistema visual profesional de Ferresa y los componentes reutilizables (Header, Footer, botones, cards, WhatsApp) sin construir todavía la Home completa ni el catálogo.

## Dirección visual

- Editorial, minimalista, cálido y moderno (mobiliario / interiorismo).
- Neutros claros + tinta oscura + acento verde controlado (`#2F5D4A`).
- Fotografías como protagonista (placeholders de desarrollo cuando aún no hay assets).
- Sin plantilla e-commerce, sin gradientes excesivos ni efectos decorativos.

## Tipografía

| Rol | Familia | Motivo |
|-----|---------|--------|
| Display / títulos | Instrument Serif | Presencia editorial, sector diseño |
| UI / cuerpo | Figtree | Legibilidad y navegación moderna |

Máximo 2 familias, cargadas desde Google Fonts en `index.html`.

## Tokens

Centralizados en `src/index.css` (`@theme`):

- Colores (`ferresa-*`)
- Escala tipográfica (`text-display` … `text-nav`)
- Radios, sombras sutiles, anchos (`narrow` / `content` / `wide`)
- Duraciones 200–450ms + `prefers-reduced-motion`

## Componentes creados

### UI
- `Button` (primary / secondary / ghost)
- `Container`, `Section`, `SectionHeading`
- `Badge`, `IconButton`, `Image`, `DevImagePlaceholder`
- `Logo`, `AppLink`

### Cards
- `ProjectCard`, `ServiceCard`, `CategoryCard`

### Layout
- `Header` (sticky, menú móvil accesible, CTA Cotizar)
- `Footer` (solo datos confirmados)
- `WhatsAppButton` (flotante + mensaje configurable)
- `PageHero`, `PagePlaceholder`

## Responsive y a11y

- Mobile-first: padding, tipografía fluida, menú hamburguesa &lt; `lg`
- Focus visible, skip link, `aria-label` / `aria-expanded`, Escape cierra menú
- Scroll bloqueado solo mientras el menú móvil está abierto
- Alt en imágenes; placeholders con `role="img"`

## Verificación

- `npm run lint` OK
- `npm run build` OK
- Dev server: `http://127.0.0.1:5173/`

## Decisiones que pueden requerir aprobación

1. **Logo temporal (wordmark + marca geométrica)** hasta recibir logo oficial de Ferresa.
2. **Acento verde `#2F5D4A`** — ajustable si el cliente confirma pantone/hex del branding.
3. **CTA “Cotizar proyecto” → `/contacto`** (formulario real en FASE 6); WhatsApp flotante ya convierte.
4. **Fuentes Google** — alternativa self-host en fase de performance si se prioriza privacidad/latencia.

## Fuera de alcance (intencional)

- Home completa (FASE 3)
- Catálogo / detalle real (FASE 4)
- Proyectos, testimonios o materiales inventados
