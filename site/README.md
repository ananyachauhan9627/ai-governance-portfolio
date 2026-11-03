# Portfolio website

The website for this portfolio, built with [Astro](https://astro.build). It reads the case studies straight from `../projects/` (the Markdown and CSV files), so each case study is written once and the site updates when it is rebuilt.

## View it

Open `dist/index.html` in a browser. The built site works straight from disk.

## Edit content

- Contact links (LinkedIn, email, résumé, GitHub): `src/lib/site.js`. The résumé link stays a placeholder until a URL is pasted there.
- Profile photo: `public/ananya-chauhan.jpg`.
- Case studies: edit the `README.md` files in `../projects/`, then rebuild.
- Homepage text and the project list: `src/pages/index.astro` and `src/lib/content.js`.
- About page: `src/pages/about.astro`.
- Interactive pieces: `src/components/Calculator.astro` (vendor tiering) and `src/components/ControlMap.astro` (framework crosswalk, which reads `crosswalk.csv`).

## Rebuild

Requires Node.js 18 or later.

```
npm install
npm run build     # writes the site to dist/
npm run dev       # live preview while editing
```
