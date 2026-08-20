# FASE 7 — Auditoría profesional, QA, UX/CRO y optimización

**Fecha:** 2026-08-20  
**Estado:** Completada  
**Alcance:** Auditoría crítica del sitio listo para presentación al cliente. Sin FASE 8, deploy, analytics ni backend.

## 1. Problemas encontrados

### Conversión / CRO
- CTA inconsistente: “Cotizar mi proyecto”, “Cotizar proyecto”, “Solicitar cotización”, “Solicitar información”.
- Hero secundario y CTA de categorías apuntaban a `/proyectos` (vacío), debilitando el flujo soluciones → cotización.
- Home mostraba “Proyectos que hablan por nosotros” con empty state: promesa incumplida.
- WhatsApp duplicado en Hero-adjacente (value prop), proceso, contacto (botón + formulario + flotante + aside).
- Formulario en dos pasos (“Preparar mensaje” y luego abrir WhatsApp) añadía fricción.
- El teléfono se capturaba y no se incluía en el mensaje.
- En `/servicios`, cards + 5 links WhatsApp + listado duplicado del mismo catálogo.
- En `/contacto`, botón WhatsApp encima del formulario competía con el formulario.
- Header sin CTA visible en viewports < 640px.

### UX / copy
- Textos de desarrollo visibles: “Fotografía pendiente”, alts con “pendiente de carga”.
- Hero con tres mensajes (concepto + tagline + descripción).
- About en Home repetía los 3 párrafos de historia.
- Empty states y descripciones con tono interno (“confirmados”, “incorporaremos”).
- “Habitacional” vs “residencial” (briefing: residencial y comercial).
- Cards de categoría en servicios decían “Explorar” pero iban a `/contacto`.

### Accesibilidad
- `text-ferresa-subtle` (#9a9a93) sobre fondo claro no alcanza contraste AA.
- Enlaces externos sin aviso de nueva pestaña.
- Asterisco de obligatorio sin texto para lectores de pantalla.
- Botones `sm` por debajo de 44px de alto táctil.
- Formulario no enfocaba el primer error.

### Responsive / visual
- Hero imagen min 22rem en móvil alargaba demasiado el primer scroll.
- Category cards destacadas a 26–28rem en móvil.
- Posible overflow horizontal en 320px.

### SEO / performance
- No existía `robots.txt`.
- Figtree itálica se cargaba sin usarse.
- Sitemap no implementado (fuera de SEO avanzado).

## 2. Problemas corregidos

- CTAs unificados a **Cotizar mi proyecto** (variante corta “Cotizar” solo en header móvil).
- Hero secundario → `/servicios` (“Ver soluciones”). Categorías Home → `/servicios`.
- Home oculta proyectos destacados si `projects[]` está vacío.
- `/proyectos` conserva empty state profesional, sin banda CTA duplicada.
- Placeholders sin captions de desarrollo; alts profesionales.
- Hero: H1 = concepto confirmado; se eliminó el tagline redundante.
- About Home: 2 párrafos + CTA a `/nosotros`.
- Contacto: un solo camino de conversión (formulario → WhatsApp) + datos en aside.
- Formulario abre WhatsApp al enviar, incluye el número, valida dígitos, enfoca el primer error.
- `/servicios` sin catálogo duplicado ni 5 links WhatsApp; cards con “Cotizar”.
- Header CTA visible en 320px+.
- Contraste de labels en superficies claras.
- `rel` y aviso sr-only en enlaces `target=_blank`.
- `robots.txt` básico. Fuente Figtree sin itálica. `overflow-x: clip`.

## 3. Mejoras UX

- Menos texto en el primer pantallazo.
- Empty states de cara al visitante, no al equipo interno.
- Mensajes de formulario más claros: “Continuar en WhatsApp”.
- 404 redirige a soluciones, no a un portafolio vacío.

## 4. Mejoras CRO

- Flujo: Instagram/Google → web → soluciones → cotización → WhatsApp.
- Un CTA principal consistente.
- WhatsApp flotante + CTA final + formulario; se quitaron duplicados de sección.
- Formulario de un paso (abre WhatsApp; el enlace de respaldo queda si el popup se bloquea).

## 5. Mejoras responsive

- Hero más compacto en 320–430px.
- Cards de categoría más bajas en móvil.
- CTA de header siempre visible, etiqueta corta en xs.
- Clip de overflow horizontal.

## 6. Mejoras accesibilidad

- Contraste de labels.
- Aviso de nueva pestaña.
- Campos obligatorios anunciados.
- Alto táctil mínimo ~44px en botones y campos.
- Foco al primer error del formulario.
- WhatsApp flotante: “Cotizar por WhatsApp. Se abre en una pestaña nueva”.

## 7. Mejoras SEO

- Copy residencial/comercial alineado.
- `robots.txt` (`Allow: /`).
- Titles, descriptions, H1, canonical y OG básico se mantienen.
- Sin keyword stuffing. Sin sitemap (no estaba implementado; no es SEO avanzado de FASE 8).

## 8. Mejoras performance

- Se eliminó el corte itálico de Figtree en Google Fonts.
- Bundle ligeramente menor tras quitar UI duplicada.
- Lazy loading de imágenes reales se mantiene; hero placeholder ya no marca `fetchPriority` sobre una foto inexistente (el marco sigue eager-ready para cuando exista `src`).

## 9. Problemas que NO pudieron resolverse y por qué

| Tema | Motivo |
|------|--------|
| Fotografías reales / logo oficial | No hay archivos en `public/images` |
| Proyectos, testimonios, FAQ | Arrays vacíos a propósito; no se inventa |
| Email, dirección Barranquilla | No confirmados |
| `og:image` | Requiere foto real |
| Sitemap XML | No existía; SEO avanzado queda para FASE 8 |
| Prueba visual en dispositivo físico | Auditoría de código + build; no hay lab de dispositivos en esta fase |

## 10. Información pendiente del cliente

Logo, fotos, proyectos, testimonios, FAQ, email, datos de Barranquilla, materiales, garantías, tiempos, pagos, precios, categorías adicionales, pantone si aplica.

## 11. Estado final del sitio

Sitio local **estable** y más cercano a una presentación comercial: conversión coherente, copy de visitante, empty states intencionales, a11y básica corregida. Listo para revisión de cliente. **No publicado.**
