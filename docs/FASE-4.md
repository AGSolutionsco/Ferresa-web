# FASE 4 — Páginas internas

**Fecha:** 2026-08-11  
**Estado:** Completada (alcance aprobado; sin FASE 5)

## Rutas

| Ruta | Página | Notas |
|------|--------|-------|
| `/` | Home | Completa 3.1–3.8 |
| `/proyectos` | Listado | Empty state si no hay proyectos |
| `/proyectos/:slug` | Detalle | 404 de proyecto si slug inválido |
| `/servicios` | Catálogo | `portfolioCategories` + `categoryCatalog` |
| `/nosotros` | Empresa | company + about + proceso + diferenciadores |
| `/contacto` | Lead form | Validación FE → WhatsApp |
| `*` | 404 | Genérica |

## Componentes / archivos nuevos relevantes

- `ContactForm`, páginas en `src/pages/*`
- `NotFoundPage`
- `AccordionItem`
- `usePageSeo`, `pageSeo`, `faq.ts`
- Secciones: `Testimonials`, `FaqSection`, `FinalCta`

## Contacto / conversión

- Campos: nombre, WhatsApp/teléfono, ciudad, tipo (`quoteProjectTypes`), descripción
- Estados: idle / error / ready (abre WhatsApp con mensaje dinámico)
- Sin backend
- Contacto lateral: WhatsApp, Instagram, Medellín; email/maps solo si confirmados

## Datos pendientes del cliente

- Proyectos reales + imágenes
- Testimonios
- FAQ
- Logo oficial / fotos
- Email, dirección, Maps
- Validación copy provisional

## No incluido (FASE 5+)

Backend, Firebase, CMS, auth, pagos, blog, SEO avanzado, analytics avanzado.
