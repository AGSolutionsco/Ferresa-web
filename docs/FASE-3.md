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

---

## FASE 3.4 — Sobre Ferresa

**Fecha:** 2026-08-11  
**Estado:** Completada

### Objetivo

Sección breve de confianza en Home: quién es Ferresa, qué hace, dónde opera y enfoque (diseño / fabricación / instalación).

### Contenido

| Elemento | Origen | Estado |
|----------|--------|--------|
| 3 párrafos | Copy cliente (2024, Medellín, diseño-fabricación-instalación) | Provisional |
| Título | “Diseñamos espacios pensados para ti” | Provisional |
| Highlights | `foundedYear`, Medellín, “Residencial y comercial” (desde descripción confirmada) | Confirmado / derivado |
| Barranquilla | `company.plannedExpansion` → “Próxima expansión: Barranquilla” | Proyectada (no operación actual) |
| Imagen | `about.imageSrc = null` | Placeholder desarrollo |

### UX

- Layout editorial: texto → imagen (móvil); imagen izquierda + texto derecha (desktop) + highlights/CTA.
- CTA único: “Conoce más sobre Ferresa” → `/nosotros`
- Sin estadísticas inventadas.

### Archivos

- `src/data/home.ts` → `about`
- `src/sections/AboutPreview.tsx`
- `src/pages/HomePage.tsx`

### Pendiente del cliente

- Fotografía real para la sección.
- Validación definitiva del copy provisional.
- Confirmación de wording de expansión Barranquilla.

### Fuera de alcance 3.4

Proceso (3.5), diferenciadores, materiales, testimonios, formulario, Instagram, blog, landing Barranquilla.

---

## FASE 3.5 — Proceso de trabajo

**Fecha:** 2026-08-11  
**Estado:** Completada

### Objetivo

Explicar visualmente qué ocurre tras contactar a Ferresa: de la idea a la instalación.

### Pasos (provisionales, cliente)

| # | Título | Descripción |
|---|--------|-------------|
| 01 | Cuéntanos tu idea | El cliente se comunica… |
| 02 | Analizamos el espacio | Dimensiones, necesidades, estilo y presupuesto |
| 03 | Diseñamos | Propuesta personalizada |
| 04 | Fabricamos | Según especificaciones aprobadas |
| 05 | Instalamos | Instalación y entrega |

Fuente: `src/data/process.ts`. Copy de sección: `homeContent.process`.

### UX / responsive

- Mobile: timeline vertical numerada (todo visible, sin carrusel).
- Tablet: 2 columnas.
- Desktop: 5 columnas; números display; línea decorativa `aria-hidden`.
- CTA: “Cuéntanos tu proyecto” → `/contacto`
- WhatsApp contextual vía `generateWhatsAppLink()` (mensaje en datos).

### No incluido (sin confirmación)

Pagos, anticipos, contratos, tiempos, visitas, renders, garantías.

### Archivos

- `src/data/process.ts`
- `src/data/home.ts` → `process`
- `src/sections/ProcessSteps.tsx`

### Pendiente del cliente

Validación final de copy de cada paso.

### Fuera de alcance 3.5

Diferenciadores, materiales, testimonios, FAQ, formulario, Instagram, blog, SEO avanzado.
