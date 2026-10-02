# CV Web — Gilberto Demetrio Ovando

Sitio web de curriculum vitae construido con **Angular 22** y **Bootstrap 5**, basado en el diseño de referencia y el contenido del CV en PDF.

## Stack (gratuito / open source)

| Tecnología | Uso |
|---|---|
| [Angular](https://angular.dev) | Framework SPA |
| [Bootstrap 5](https://getbootstrap.com) | Grid y utilidades |
| [Bootstrap Icons](https://icons.getbootstrap.com) | Iconografía UI |
| [Devicon](https://devicon.dev) | Iconos de tecnologías |
| Google Fonts (Sora + Manrope) | Tipografía |

## Requisitos

- Node.js 22+
- npm 10+

## Comandos

```bash
npm install
npm start
```

Abre `http://localhost:4200/`.

```bash
npm run build
```

La salida queda en `dist/cv-web/browser/`.

## Secciones (scroll único)

Menú lateral izquierdo con scroll spy. Al desplazarte, se marca automáticamente la sección visible:

- **Inicio** — hero, resumen y métricas
- **Perfil** — sobre mí, áreas de enfoque, educación y bloque de código
- **Experiencia** — timeline laboral
- **Skills** — habilidades por categoría
- **Proyectos** — iniciativas destacadas
- **Contacto** — datos y formulario (abre el cliente de correo)

## Personalización rápida

Edita `src/app/data/cv.data.ts` para actualizar:

- Datos de contacto
- URLs de LinkedIn / GitHub
- Experiencia, skills y proyectos

El PDF descargable está en `public/CV-Gilberto-Demetrio.pdf`.

## Publicación gratuita

Puedes desplegar el contenido de `dist/cv-web/browser/` en:

- [GitHub Pages](https://pages.github.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)
- [Netlify](https://www.netlify.com/)
- [Firebase Hosting](https://firebase.google.com/docs/hosting) (plan Spark gratuito)

Para GitHub Pages / rutas profundas, configura `base href` según el path del repositorio.
