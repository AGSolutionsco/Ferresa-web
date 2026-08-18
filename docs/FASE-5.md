# FASE 5 — Integración de información real del cliente

**Fecha:** 2026-08-18  
**Estado:** Completada  
**Alcance:** Actualizar contenido confirmado. Sin deploy, SEO avanzado ni FASE 6.

## Información incorporada

| Campo | Valor |
|-------|--------|
| Nombre | Ferresa |
| Razón social origen | Diseños y Maderas Álamo SAS |
| Inicio | 2023 |
| Ciudades actuales | Medellín y Barranquilla |
| Dirección Medellín | Calle 50 #77B-47 |
| Horario | 7:00 a. m. – 5:00 p. m. |
| WhatsApp | 315 212 1687 (`573152121687`) |
| Instagram | @ferresa.co |
| Productos | Cocinas, Closets, Centros de entretenimiento, Recibidores, Espejos |
| Servicios | Diseño coordinado, fabricación, personalización, instalación, logística |

## Corregido / eliminado

- Año 2024 → **2023**
- Barranquilla como “próxima expansión” → **operación actual**
- WhatsApp antiguo `3245734731` → **3152121687**
- Catálogo amplio no confirmado (oficinas, baños, etc.) → solo productos confirmados en UI
- Afirmaciones de equipo interno de diseño → diseño **gestionado/coordinado** por Ferresa
- Asesoría como servicio principal → no se presenta así
- Email ficticio → no se muestra

## Deliberadamente no mostrado (pendiente)

Materiales, marcas, acabados, garantías, tiempos, pagos, testimonios, proyectos reales, fotos oficiales, FAQ, correo, redes adicionales, dirección/teléfono Barranquilla, precios.

## Decisiones

- Maps: URL de búsqueda con dirección confirmada de Medellín (`showMaps: true`).
- Precios: ningún “desde $…”; CTA = cotización / WhatsApp.
- `projects[]` sigue vacío.
- Arquitectura lista para ampliar categorías (`confirmed: false`).

## Archivos clave

`company.ts`, `categories.ts`, `services.ts`, `differentiators.ts`, `process.ts`, `home.ts`, `quote.ts`, `seo.ts`, `whatsapp.ts`, páginas Nosotros/Servicios/Contacto, Footer, Header, `index.html`, `.env.example`
