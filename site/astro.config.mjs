import { defineConfig } from 'astro/config';
import fs from 'node:fs';
import path from 'node:path';

// After the build: copy the project CSVs into the site, and rewrite
// root-relative links ("/about") to relative ones ("about.html") so the
// built site works both on GitHub Pages and when opened straight from disk.
function portfolioPostBuild() {
  return {
    name: 'portfolio-post-build',
    hooks: {
      'astro:build:done': ({ dir }) => {
        const out = dir.pathname.replace(/^\/([A-Za-z]:)/, '$1');
        const projects = path.resolve(process.cwd(), '..', 'projects');
        fs.mkdirSync(path.join(out, 'files'), { recursive: true });
        for (const p of fs.readdirSync(projects)) {
          for (const f of fs.readdirSync(path.join(projects, p))) {
            if (f.endsWith('.csv')) fs.copyFileSync(path.join(projects, p, f), path.join(out, 'files', f));
          }
        }
        const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) =>
          e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]);
        for (const file of walk(out).filter((f) => f.endsWith('.html'))) {
          const depth = path.relative(out, file).split(path.sep).length - 1;
          const prefix = depth ? '../'.repeat(depth) : './';
          let html = fs.readFileSync(file, 'utf8');
          html = html.replace(/(href|src)="\/(?!\/)([^"#?]*)([^"]*)"/g, (_, attr, p, rest) => {
            let target = p;
            if (target === '') target = 'index.html';
            else if (target.endsWith('/')) target += 'index.html';
            else if (!path.extname(target)) target += '.html';
            return `${attr}="${prefix}${target}${rest}"`;
          });
          fs.writeFileSync(file, html);
        }
      },
    },
  };
}

export default defineConfig({
  build: { format: 'file', assets: 'assets' },
  integrations: [portfolioPostBuild()],
});
