import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const siteOrigin = 'https://ferresa.co'

/** Falla el build si `public/sitemap.xml` no cubre las rutas públicas y los slugs publicados. */
function sitemapIntegrityPlugin(): Plugin {
  return {
    name: 'ferresa-sitemap-integrity',
    buildStart() {
      const sitemap = readFileSync(new URL('./public/sitemap.xml', import.meta.url), 'utf8')
      const projectsSrc = readFileSync(
        new URL('./src/data/projects.ts', import.meta.url),
        'utf8',
      )

      const staticPaths = [
        '/',
        '/proyectos',
        '/servicios',
        '/nosotros',
        '/contacto',
        '/privacidad',
        '/terminos',
      ]
      for (const path of staticPaths) {
        const loc = path === '/' ? `${siteOrigin}/` : `${siteOrigin}${path}`
        if (!sitemap.includes(`<loc>${loc}</loc>`)) {
          throw new Error(`sitemap.xml no incluye ${loc}`)
        }
      }

      const slugPublished = /slug:\s*'([^']+)'[\s\S]*?published:\s*(true|false)/g
      for (const match of projectsSrc.matchAll(slugPublished)) {
        if (match[2] !== 'true') continue
        const loc = `${siteOrigin}/proyectos/${match[1]}`
        if (!sitemap.includes(`<loc>${loc}</loc>`)) {
          throw new Error(`sitemap.xml no incluye el proyecto publicado ${match[1]}`)
        }
      }
    },
  }
}

/** Copia `index.html` a `404.html` para que las rutas del SPA funcionen en GitHub Pages. */
function spaFallbackPlugin(): Plugin {
  return {
    name: 'ferresa-spa-fallback',
    apply: 'build',
    closeBundle() {
      const indexHtml = readFileSync(new URL('./dist/index.html', import.meta.url))
      writeFileSync(new URL('./dist/404.html', import.meta.url), indexHtml)
    },
  }
}

export default defineConfig({
  base: process.env.GITHUB_PAGES === 'true' ? '/Ferresa-web/' : '/',
  plugins: [react(), tailwindcss(), sitemapIntegrityPlugin(), spaFallbackPlugin()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
