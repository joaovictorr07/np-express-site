import { copyFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const browserOutput = join(process.cwd(), 'dist', 'np-express-site', 'browser');
const routes = ['entrega-rapida-jundiai', 'motoboy-para-empresas-jundiai'];

for (const route of routes) {
  const prerenderedIndex = join(browserOutput, route, 'index.html');
  const extensionlessSource = join(browserOutput, `${route}.html`);

  if (!existsSync(prerenderedIndex)) {
    throw new Error(`Rota prerenderizada não encontrada: ${prerenderedIndex}`);
  }

  copyFileSync(prerenderedIndex, extensionlessSource);
}

console.log(`Rotas estáticas normalizadas sem barra final: ${routes.length}.`);
