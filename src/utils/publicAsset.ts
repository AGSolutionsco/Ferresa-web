/** Prefija la base de Vite (`/` o `/Ferresa-web/`) en archivos de `public/`. */
export function publicAsset(src: string): string {
  if (/^(https?:|data:|blob:)/i.test(src)) return src
  const base = import.meta.env.BASE_URL
  return `${base}${src.replace(/^\//, '')}`
}
