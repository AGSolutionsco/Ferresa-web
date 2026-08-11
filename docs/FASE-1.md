# FASE 1 — Configuración y arquitectura

**Fecha:** 2026-08-11  
**Estado:** Completada (build OK · dev server OK · Git pendiente de instalación en el equipo)

## Objetivo

Dejar lista la base técnica del sitio Ferresa sin construir todavía la UI completa.

## Decisiones técnicas

| Decisión | Motivo |
|----------|--------|
| React + Vite + TypeScript + Tailwind | Stack solicitado; rápido y mantenible |
| React Router 7 | Necesario para rutas `/proyectos/:slug` y páginas comerciales |
| Alias `@/` | Imports claros y reutilizables entre clientes AG Solutions |
| Datos en `src/data` | Contenido editable sin tocar componentes |
| WhatsApp via `wa.me` | Conversión principal; sin backend |
| Sin Firebase / CMS / auth | Alcance aprobado: sitio principalmente estático |
| Materiales / testimonios / maps con flags | Evitar mostrar info no confirmada |

## Estructura creada

- Scaffold Vite + React + TS + Tailwind 4
- Carpetas: `components`, `sections`, `pages`, `layouts`, `data`, `types`, `utils`, `hooks`, `assets`
- `public/images/{projects,brand}`
- `.env.example`, `.gitignore`, `README.md`
- Utilidad `generateWhatsAppLink()`
- Rutas placeholder para todas las páginas planificadas

## Cómo verificar

```bash
npm install
npm run dev
npm run build
```

Abrir la URL local, navegar rutas y probar el enlace de WhatsApp.
