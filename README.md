# Routsify redesign

Sitio estático en Astro + Tailwind para Routsify, con dos landings indexables y estructura orientada a conversión.

## Rutas clave

- `/`
- `/latam/`
- `/europa/`
- `/ruta-personalizada/`
- `/guias/`
- `/sobre-nosotros/`
- `/contacto/`
- `/faq/`

## Variables editables

- `src/data/site.ts`
- `PRICE.personalizedRoutePerDay`
- `PRICE.guidesFrom`
- `SITE.whatsapp`
- `SITE.whatsappUrl`
- `SITE.address`

## Recomendaciones de despliegue

- GitHub como repositorio principal
- Vercel como plataforma de despliegue

### Despliegue recomendado en Vercel

1. Sube este proyecto a GitHub.
2. En Vercel, importa el repositorio desde GitHub.
3. Mantén `Build Command` en `pnpm build`.
4. Mantén `Output Directory` en `dist`.
5. Añade la variable de entorno `SITE_URL` con el dominio final, por ejemplo `https://routsify.com`.
6. Publica el proyecto y revisa las URLs generadas para producción.

## Build

```bash
pnpm install
pnpm build
```

## Notas de contenido

- El logo real de la web actual está reutilizado en `/public/routsify-logo.png`.
- Los testimonios del sitio existente se han reescrito con más claridad sin inventar resultados.
- La portada usa un selector manual y una sugerencia opcional basada en idioma/zona horaria, sin redirecciones agresivas.
- La página `/contacto/` embebe el formulario de Fillout y deja WhatsApp como vía principal de respuesta.
- `robots.txt` y `sitemap.xml` se generan desde el código para que siempre usen la URL correcta del entorno.
