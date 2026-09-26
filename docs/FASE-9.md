# FASE 9 — SEO técnico y performance

**Fecha:** 2026-08-26  
**Estado:** Completada  
**Alcance:** Indexación, sitemap, metas locales y Open Graph. Sin deploy ni Search Console.

## Implementado

### robots.txt
`public/robots.txt` permite indexar el sitio y declara el sitemap:

```
User-agent: *
Allow: /
Sitemap: https://ferresa.co/sitemap.xml
```

Vite copia este archivo a `dist/` en el build.

### sitemap.xml
`public/sitemap.xml` incluye:

- `/`
- `/proyectos`
- `/servicios`
- `/nosotros`
- `/contacto`
- 7 rutas de proyectos publicados (`/proyectos/:slug`)

| URL | lastmod |
|-----|---------|
| https://ferresa.co/ | 2026-08-26 |
| https://ferresa.co/proyectos | 2026-08-26 |
| https://ferresa.co/servicios | 2026-08-26 |
| https://ferresa.co/nosotros | 2026-08-26 |
| https://ferresa.co/contacto | 2026-08-26 |
| https://ferresa.co/proyectos/closet-puertas-vidrio | 2026-08-26 |
| https://ferresa.co/proyectos/cocina-isla | 2026-08-26 |
| https://ferresa.co/proyectos/centro-entretenimiento-panel | 2026-08-26 |
| https://ferresa.co/proyectos/recibidor-espejo-circular | 2026-08-26 |
| https://ferresa.co/proyectos/espejo-empotrado-iluminado | 2026-08-26 |
| https://ferresa.co/proyectos/centro-entretenimiento-divisor | 2026-08-26 |
| https://ferresa.co/proyectos/closet-empotrado | 2026-08-26 |

Dominio canónico: `https://ferresa.co` (`VITE_SITE_URL`). La función `getSitemapPaths()` en `src/data/seo.ts` es la referencia en código; el XML estático debe coincidir.

### Metas por página
Hook `usePageSeo` recibe el objeto `PageSeo` y actualiza:

- title y meta description únicos (búsqueda local: Medellín, Barranquilla, cocinas, closets, muebles a medida)
- canonical (`https://ferresa.co` + pathname)
- robots (`noindex, nofollow` en 404 y proyecto no publicado)
- Open Graph: `og:title`, `og:description`, `og:url`, `og:image`, `og:locale`, `og:site_name`, `og:type`
- Twitter Card: `summary_large_image`

`og:image` usa fotografías reales del portafolio (no stock).

### JSON-LD
LocalBusiness en `index.html` con datos confirmados: nombre, 2023, dirección Medellín, WhatsApp, Instagram, Medellín y Barranquilla.

## Enlaces internos
Rutas de navegación (`/`, `/proyectos`, `/servicios`, `/nosotros`, `/contacto`) coinciden con el router y el sitemap. Los hashes `/servicios#cocinas` (etc.) apuntan a `id` en las tarjetas de producto. 404 no está en el sitemap. Instagram y WhatsApp son URLs externas confirmadas.

## Performance (sin librerías nuevas)
- Imágenes con lazy loading (`MediaFrame` / `Image`); hero y detalle de proyecto con `eager` + `fetchPriority`
- Fuentes Google con `display=swap` y preconnect
- OG image = asset ya publicado
- Build de producción: JS ~300 kB / ~91 kB gzip

## Limitación SPA
Las metas por ruta se escriben en el cliente. Google ejecuta JS. Crawlers sociales que no ejecutan JS verán las metas por defecto de `index.html` (home). Un prerender o SSR queda fuera de esta fase.

## Mantenimiento
Al publicar un proyecto nuevo: agregar el slug en `src/data/projects.ts` **y** la URL en `public/sitemap.xml`. El plugin `ferresa-sitemap-integrity` en `vite.config.ts` falla el build si el XML queda desfasado.

## Verificación
- `npm run lint` — OK (`tsc -b`)
- `npm run build` — OK (Vite 6.4.3)
- Rutas públicas, `robots.txt`, `sitemap.xml` e imágenes de proyectos/categorías responden HTTP 200 en el servidor de desarrollo
