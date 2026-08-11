# FASE 3 — Home (por subfases)

## FASE 3.1 — Hero + propuesta de valor

**Fecha:** 2026-08-11  
**Estado:** Completada

### Objetivo

Comunicar en los primeros segundos qué hace Ferresa y habilitar conversión a cotización / proyectos.

### Hero

- Composición editorial dividida (texto + media a bleed en móvil / full-height en desktop).
- **H1 único:** `Transformamos espacios en lugares únicos` (`company.tagline`).
- Descripción confirmada + `supportingLine`.
- CTA primario → `/contacto` · CTA secundario → `/proyectos`.
- Fotografía: **no hay assets reales** en `public/images` → placeholder de desarrollo identificado. Activar imagen real asignando `homeContent.hero.imageSrc`.

### Propuesta de valor

- Título: `Diseñamos para tu espacio`
- Texto provisional editable en `src/data/home.ts` (`provisional: true`).
- CTA: `Cuéntanos tu proyecto` → `/contacto`
- Enlace discreto a WhatsApp (sin saturar CTAs).

### Archivos

| Archivo | Rol |
|---------|-----|
| `src/data/home.ts` | Contenido centralizado Home |
| `src/sections/Hero.tsx` | Hero + HeroContent + HeroMedia |
| `src/sections/ValueProposition.tsx` | Bloque de valor + micro-CTA |
| `src/pages/HomePage.tsx` | Solo 3.1 |
| `src/index.css` | Animación `reveal-up` + reduced motion |

### Accesibilidad / performance

- Un solo H1; H2 en value proposition.
- `aria-labelledby` en secciones.
- Placeholder con `role="img"` + alt/aria-label.
- Hero image `loading="eager"` + `fetchPriority="high"` cuando exista `imageSrc`.
- Animación sutil respetando `prefers-reduced-motion`.

### Verificación

- `npm run lint` OK
- `npm run build` OK

### Pendiente para fases siguientes

- 3.2+: proyectos destacados, servicios, proceso, etc.
- Sustituir placeholder por fotografía real de Ferresa.
- Revisar copy provisional de value proposition con el cliente.

### Fuera de alcance 3.1

Catálogo, servicios completos, testimonios, formulario, materiales, Instagram feed.
