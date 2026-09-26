# FASE 11 — Legal y cumplimiento (Colombia)

**Fecha:** 2026-09-26  
**Estado:** Completada  
**Alcance:** Páginas legales, consentimiento en formulario, banner de cookies. Sin deploy.

## Implementado

### Rutas
- `/privacidad` — Política de Tratamiento de Datos Personales (Ley 1581 de 2012 / Habeas Data).
- `/terminos` — Términos y Condiciones (cotizaciones personalizadas + PI de fotos/marcas).

Textos centralizados en `src/data/legal.ts`. Canal de derechos ARCO: WhatsApp confirmado (sin inventar correo).

### Footer
Enlaces a Privacidad y Términos en la franja inferior.

### Formulario de contacto
Checkbox obligatorio: “Acepto la Política de Tratamiento de Datos Personales de Ferresa”, con enlace a `/privacidad` en pestaña nueva.

### CookieBanner
Aviso flotante inferior minimalista + botón “Aceptar”. Persistencia en `localStorage` (`ferresa-cookies-accepted`). Enlace a la política de datos.

### SEO / sitemap
Metas en `pageSeo.privacy` / `pageSeo.terms`. URLs añadidas a `public/sitemap.xml` y al chequeo de integridad de Vite.

## Verificación
- `npm run lint`
- `npm run build`
