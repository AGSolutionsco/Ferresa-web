# FASE 8 — Integración de fotografías reales del cliente

**Fecha:** 2026-08-26  
**Estado:** Completada  
**Fuente:** carpeta local `fotos/` (13 imágenes de WhatsApp, 25 ago 2026).

## Integrado (publicado)

| Proyecto | Categoría | Archivos | Featured |
|----------|-----------|----------|----------|
| Closet con puertas de vidrio | Closets | `closet-puertas-vidrio.jpg` | Sí (Home + Hero) |
| Cocina con isla | Cocinas | `cocina-isla-01.jpg`, `cocina-isla-02.jpg` | Sí (Home + About) |
| Centro de entretenimiento | Centros de entretenimiento | `centro-entretenimiento-panel.jpg` | Sí |
| Recibidor con espejo circular | Recibidores | `recibidor-espejo-circular-01.jpg`, `02.jpg` | No |
| Espejo de piso a techo | Espejos | `espejo-empotrado-iluminado.jpg` | No |
| Centro de entretenimiento divisor | Centros de entretenimiento | `centro-entretenimiento-divisor.jpg` | No |
| Closet empotrado | Closets | `closet-empotrado-01.jpg`, `02.jpg` | No |

Categorías (Home / Servicios) usan portada en `public/images/categories/{slug}.jpg`.

## No publicado (y por qué)

| Original | Motivo |
|----------|--------|
| `…06.45.01 (4).jpeg` (540×1170, 33 KB) | Captura de celular con UI; calidad insuficiente |
| `…06.45.02 (1).jpeg` | Mueble de baño. Categoría **baños** no confirmada |
| `…06.45.03.jpeg` | Baño en instalación (plástico, polvo). No listo para portafolio |

## Decisiones

- Formato **JPG** (origen WhatsApp). No se reconvirtió a WebP: no recupera calidad y no hay conversor en el entorno.
- **Ciudad omitida**: no es identificable en las fotos. No se puso Medellín ni Barranquilla.
- Descripciones solo visuales. Sin medidas, marcas de materiales, precios ni garantías.
- Originales de WhatsApp quedan en `fotos/` (gitignore). Publicadas: `public/images/`.

## Pendiente del cliente

- Confirmar si la línea de **baños** se publica.
- Fotos de mayor resolución (estas vienen comprimidas por WhatsApp).
- Ciudad / nombre de cada proyecto, si se quieren mostrar.
