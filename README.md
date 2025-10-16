# Portfolio React - Jair Fernandez

Proyecto listo para personalizar y desplegar. Incluye SEO básico (meta tags, Open Graph, JSON-LD), estructura modular y ejemplos de proyectos.

## Pasos rápidos

1. Reemplaza URLs y enlaces en `App.jsx` y `data/projects.js`.
2. Añade `preview.jpg` en carpeta public para redes sociales.
3. Ejecuta `npm install` y `npm run dev`.
4. Al desplegar, activa HTTPS y añade el dominio en Google Search Console.

## Recomendaciones SEO técnicas (ya integradas en la plantilla)

- Etiquetas `<title>` y `<meta description>` personalizadas.
- Open Graph y Twitter Card.
- JSON-LD con datos del autor.
- `link rel=canonical`.

## Recomendaciones para producción

- Comprimir y convertir imágenes a WebP.
- Habilitar caching y headers `Cache-Control` en el hosting.
- Generar sitemap.xml (hay paquetes npm para esto) y subir a Google Search Console.
- Subir `robots.txt` y permitir indexación de las páginas principales.
- Añadir pruebas (unitarias/integración) y CI para deploys.
