# Ovares Ortodoncia

Sitio informativo de la Dra. Catalina Ovares, construido con Next.js, TypeScript, App Router y Vinext/OpenNext para Cloudflare.

## Requisitos e instalación

- Node.js 22.13 o superior.
- Instalar dependencias con `npm ci`.
- Iniciar desarrollo con `npm run dev` (por defecto en `http://localhost:5173`).
- Validar con `npm run lint` y compilar con `npm run build`.
- Previsualizar el Worker compilado con `npm start`.

## Estructura

- `app/`: rutas, metadata, sitemap, robots y `llms.txt`.
- `components/`: cabecera, pie, CTA, breadcrumbs, datos estructurados y analítica.
- `content/`: contenido central de páginas informativas.
- `lib/site-config.ts`: teléfono, correo, enlaces, marca y URL base.
- `public/img/foto/image.png`: fotografía oficial de la doctora.
- `DESIGN.md`, `SEO.md` y `CONTENT_TODO.md`: fuentes de verdad para diseño, crecimiento orgánico y datos pendientes.

## Variables de entorno

Crear `.env.local` cuando corresponda:

```text
NEXT_PUBLIC_SITE_URL=https://dominio-confirmado.example
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

No usar un ID de Analytics ficticio en producción. Google Search Console se configura al confirmar el dominio; la verificación puede añadirse mediante Metadata API o DNS.

## OpenNext / Cloudflare

El starter usa Vinext para generar un Worker compatible con Cloudflare. `npm run build` crea `dist/server/index.js` y la configuración de Wrangler. El despliegue administrado utiliza `.openai/hosting.json`; no contiene secretos ni IDs de analítica.

## SEO y contenido

Cada ruta posee metadata y canonical propios. `sitemap.xml`, `robots.txt`, `/llms.txt`, breadcrumbs y JSON-LD se generan desde el código. Antes del lanzamiento público debe definirse `NEXT_PUBLIC_SITE_URL` con el dominio real y completarse la información profesional listada en `CONTENT_TODO.md`.
