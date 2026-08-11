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

### Verificación 3.1

- `npm run lint` OK · `npm run build` OK

---

## FASE 3.2 — Portafolio y categorías

**Fecha:** 2026-08-11  
**Estado:** Completada

### Objetivo

Mostrar tipos de solución de Ferresa como puente Hero → portafolio → proyectos/cotizar, sin formato e-commerce.

### Categorías en Home

| Categoría | Resumen (confirmado, abreviado) | Enlace |
|-----------|----------------------------------|--------|
| Hogar (featured) | Cocinas · Closets · Salas · Vestidores | `/proyectos` |
| Oficinas | Escritorios · Recepciones · Corporativo | `/proyectos` |
| Comercial | Locales · Exhibidores · Estanterías | `/proyectos` |
| Proyectos personalizados | A medida según espacio y necesidad | `/servicios` |

Lista completa del cliente guardada en `categoryCatalog` para `/servicios` (no se muestra ítem a ítem en Home).

### UX / diseño

- Layout editorial: card grande (Hogar) + columna de 3 secundarias.
- Tablet: featured full + grid 2 cols; Mobile: stack.
- Hover: zoom sutil de imagen + flecha; respeta `prefers-reduced-motion`.
- CTA sección: `Ver todos los proyectos` → `/proyectos`.
- Copy de sección en `homeContent.portfolio` (provisional).

### Imágenes

- Sin fotografías reales en `public/images`.
- Placeholders de desarrollo claramente identificados.
- Sustituir con `portfolioCategories[].imageSrc`.

### Componentes / datos

| Archivo | Rol |
|---------|-----|
| `src/types` → `PortfolioCategory` | Tipo de categoría de portafolio |
| `src/data/categories.ts` | `portfolioCategories` + `categoryCatalog` + taxonomía `categories` |
| `src/data/home.ts` | Copy `portfolio` |
| `src/components/cards/CategoryCard.tsx` | Card con imagen + nombre + summary + Explorar |
| `src/sections/PortfolioCategories.tsx` | Sección Home |

### Pendiente del cliente

- Fotografías reales por categoría.
- Confirmar si Oficinas/Comercial deben ir a `/servicios` en lugar de `/proyectos`.
- Validar summaries y copy provisional.

### Fuera de alcance 3.2

Proyectos destacados (3.3), servicios completos, nosotros, proceso, diferenciadores, testimonios, formulario, blog, Instagram, materiales.

---

## FASE 3.3 — Proyectos destacados

**Fecha:** 2026-08-11  
**Estado:** Completada

### Objetivo

Mostrar proyectos reales en Home para generar confianza y conversión, sin inventar contenido.

### Datos

- Fuente: `src/data/projects.ts` (`projects` + `getFeaturedProjects(limit)`).
- Criterio Home: `published && featured`, máximo `homeContent.featuredProjects.limit` (3).
- Array actual: **vacío** (sin proyectos ficticios).

### Estado vacío

- Mensaje discreto: “Estamos preparando nuestro portafolio de proyectos.”
- CTA: “Conoce nuestro trabajo” → `/contacto`
- Espacio visual reservado (bloque dashed), sin cards inventadas.

### Con proyectos reales

- Layout editorial: 1 destacado + hasta 2 secundarios.
- `ProjectCard` reutilizado (`variant`, descripción opcional, lazy images).
- CTA: “Ver todos los proyectos” → `/proyectos`
- Enlace por card: `/proyectos/:slug`

### Copy (centralizado)

`homeContent.featuredProjects` en `src/data/home.ts` (provisional).

### Pendiente del cliente

- Cargar proyectos reales con `published: true`, `featured: true` e imágenes en `public/images/projects`.
- Validar copy introductorio.

### Fuera de alcance 3.3

Detalle completo, filtros, CMS, backend, resto de secciones Home (3.4+).
