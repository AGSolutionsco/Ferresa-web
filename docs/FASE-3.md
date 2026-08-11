# FASE 3 — Home (por subfases)

Documento acumulado de Home. Subfases 3.1–3.6: ver historial anterior.

---

## FASE 3.7 — Conversión y confianza

**Estado:** Completada

### Entregables

| Pieza | Comportamiento |
|-------|----------------|
| Testimonios | Estructura en `testimonials.ts`; UI solo si `published: true` (hoy vacío → no se renderiza) |
| FAQ | Estructura en `faq.ts` + acordeón accesible; solo ítems publicados (hoy vacío → no se renderiza) |
| CTA final | `FinalCta` — “¿Tienes un proyecto en mente?” → `/contacto` + WhatsApp contextual |
| WhatsApp | Mensajes unificados vía `generateWhatsAppLink` / helpers |

### Orden Home (3.8)

1. Hero → 2. Propuesta → 3. Categorías → 4. Proyectos → 5. Sobre → 6. Proceso → 7. Diferenciadores → 8. Testimonios/FAQ (si hay datos) → 9. CTA final → Footer

### Refinamiento 3.8

- SEO title/description por página (`usePageSeo` + `pageSeo`)
- Scroll al top en cambio de ruta
- Sin contenido inventado; sin librerías nuevas
- WhatsApp flotante + CTAs contextuales sin saturar

### Pendiente cliente

- Testimonios reales (`published: true`)
- FAQ confirmadas
- Fotografías reales
