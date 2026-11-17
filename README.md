# Portfolio — Manuel Jiménez

Portfolio profesional bilingüe (ES/EN) de **Manuel Jiménez**, desarrollador de software en Madrid.

🔗 **Web:** https://manu-d3v3lop3r.github.io

Construido con [Astro](https://astro.build) como sitio estático, sin frameworks de cliente: HTML semántico, CSS propio con tokens de diseño y una cantidad mínima de JavaScript (menú móvil, tema claro/oscuro e impresión del CV).

## Características

- **Bilingüe (ES/EN)** con rutas localizadas, selector de idioma que mantiene la página equivalente y etiquetas `hreflang`.
- **Fuente única de datos** para experiencia, formación, certificaciones y stack (`src/data/profile.ts`): Inicio, Sobre mí, Experiencia, Formación y CV se generan a partir de ella.
- **Casos de estudio** de proyectos en Markdown con Content Collections y validación de esquema con Zod.
- **CV imprimible**: la página `/cv/` tiene estilos de impresión A4 y un botón para guardarla como PDF.
- **Tema claro/oscuro** respetando la preferencia del sistema, sin parpadeo inicial.
- **Accesibilidad**: enlace "saltar al contenido", estados de foco visibles, `aria-current` en la navegación, contraste AA y soporte de `prefers-reduced-motion`.
- **SEO**: metadatos Open Graph/Twitter, URL canónicas, datos estructurados `schema.org` (Person + WebSite) y sitemap automático.
- **Despliegue continuo** en GitHub Pages mediante GitHub Actions.

## Estructura

```text
src/
├── components/
│   ├── layout/        # Header y Footer
│   ├── navigation/    # Selector de idioma
│   ├── pages/         # Páginas compartidas ES/EN (About, CV, Experiencia…)
│   ├── projects/      # Tarjeta de proyecto
│   └── sections/      # Secciones de la página de inicio
├── content/projects/  # Casos de estudio en Markdown (uno por idioma)
├── data/
│   ├── profile.ts     # ⭐ Experiencia, formación, certificaciones, stack, idiomas
│   ├── contact.ts     # LinkedIn, GitHub y email (opcional)
│   ├── locales.ts     # Rutas equivalentes ES ↔ EN
│   └── navigation.ts  # Menú principal
├── i18n/utils.ts      # Tipos e utilidades de idioma y rutas
├── layouts/           # BaseLayout y ProjectLayout
├── pages/             # Rutas (envoltorios finos sobre components/pages)
├── styles/            # Tokens, estilos globales y tipografía
└── utils/projects.ts  # Consulta y ordenación de proyectos
```

## Desarrollo

Requiere Node.js 22.12 o superior.

| Comando           | Acción                                          |
| :---------------- | :---------------------------------------------- |
| `npm install`     | Instala las dependencias                        |
| `npm run dev`     | Servidor de desarrollo en `localhost:4321`      |
| `npm run build`   | Genera el sitio estático en `./dist/`           |
| `npm run preview` | Sirve la build localmente                       |
| `npm run check`   | Comprueba tipos de TypeScript y componentes     |

## Cómo actualizar el contenido

- **Experiencia, formación, certificaciones, stack o idiomas:** editar `src/data/profile.ts`.
- **Email de contacto:** rellenar `email` en `src/data/contact.ts` (si está vacío, no se muestra).
- **Nuevo proyecto:** crear dos ficheros en `src/content/projects/` (ES y EN) con el mismo esquema y añadir sus rutas a `src/data/locales.ts`. El campo `order` define la posición en los listados y `featured: true` lo muestra en la página de inicio.

## Seguridad y mantenimiento

- **Sin secretos en el repositorio:** el sitio es estático y no necesita claves. Nunca se suben ficheros `.env`, contraseñas, claves API ni tokens de GitHub; `.gitignore` los excluye. El despliegue usa la identidad OIDC de GitHub Actions (`id-token: write`), sin tokens guardados.
- **Solo dependencias conocidas:** únicamente Astro y paquetes oficiales `@astrojs/*`. `allowScripts` en `package.json` limita los scripts de instalación a `esbuild`.
- **Dependencias actualizadas:** Dependabot (`.github/dependabot.yml`) propone cada semana las actualizaciones de Astro y cada mes las de las GitHub Actions. Para revisarlas a mano: `npm outdated` y `npm audit`.
- **Aviso conocido de `npm audit`:** `picomatch` tiene un aviso de ReDoS sin versión corregida. Solo se usa durante la compilación con patrones propios del proyecto, así que no afecta al sitio publicado. No hay que ejecutar `npm audit fix --force`, porque bajaría Astro a la versión 5.

## Despliegue

Cada push a `master` ejecuta `.github/workflows/deploy.yml`, que compila el sitio y lo publica en GitHub Pages.
