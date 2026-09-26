# FASE 10 — Posicionamiento comercial y postventa

**Fecha:** 2026-09-26  
**Estado:** Completada  
**Nota:** El brief interno la etiquetó como “FASE 8 — ajustes”; en el repo FASE 8 ya es fotografías y FASE 9 es SEO, por eso se documenta aquí como **FASE 10**.

## Objetivo

1. Reposicionar titulares: Ferresa como empresa de **remodelaciones y construcciones**, con **mobiliario a medida** como parte de la solución integral.
2. Publicar sección de **seguimiento postventa** con copy aprobado por el cliente, antes del CTA/formulario de contacto.

## Cambios principales

### Copy / data
- `src/data/company.ts` — description, supportingLine e historia alineados al nuevo enfoque.
- `src/data/home.ts` — Hero, value proposition, about, featured, process, final CTA.
- `src/data/postSale.ts` — copy postventa definitivo (centralizado).
- `src/data/services.ts`, `process.ts`, `differentiators.ts`, `seo.ts` — titulares y descripciones coherentes.
- `src/utils/whatsapp.ts` — mensaje por defecto actualizado.

### UI
- `src/sections/Hero.tsx` — H1 = concepto integral aprobado.
- `src/sections/PostSale.tsx` — nuevo bloque (eyebrow + título + descripción + frase de cierre).
- Home: `PostSale` **antes** de `FinalCta`.
- Contacto: `PostSale` **antes** del formulario.
- Servicios, Nosotros, Footer, `index.html` (metas + JSON-LD).

### Copy postventa (sin inventar garantías)
- Título: “Nuestro compromiso continúa después de la entrega”
- Descripción: acompañamiento postventa cercano (texto cliente).
- Cierre: “Construimos espacios. Creamos confianza. Permanecemos contigo.”

## Verificación
- `npm run lint`
- `npm run build`
