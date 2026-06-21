import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { JSDOM } from 'jsdom';

const root = process.cwd();
const browserOutput = join(root, 'dist', 'np-express-site', 'browser');
const expectedPages = [
  {
    file: 'index.html',
    canonical: 'https://npexpressentrega.com.br/',
    title: 'Motoboy Rápido em Jundiaí | Entregas NP Express'
  },
  {
    file: 'entrega-rapida-jundiai.html',
    canonical: 'https://npexpressentrega.com.br/entrega-rapida-jundiai',
    title: 'Entrega Rápida em Jundiaí | NP Express'
  },
  {
    file: 'motoboy-para-empresas-jundiai.html',
    canonical: 'https://npexpressentrega.com.br/motoboy-para-empresas-jundiai',
    title: 'Motoboy para Empresas em Jundiaí | NP Express'
  }
];

const errors = [];
const seenTitles = new Set();
const seenDescriptions = new Set();
const seenCanonicals = new Set();

function assert(condition, message) {
  if (!condition) errors.push(message);
}

for (const page of expectedPages) {
  const source = readFileSync(join(browserOutput, page.file), 'utf8');
  const document = new JSDOM(source).window.document;
  const label = `/${page.file.replaceAll('\\', '/').replace('/index.html', '').replace('index.html', '')}`;
  const title = document.title.trim();
  const description = document.querySelector('meta[name="description"]')?.getAttribute('content')?.trim();
  const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href');
  const robots = document.querySelector('meta[name="robots"]')?.getAttribute('content') ?? '';
  const jsonLdScripts = [...document.querySelectorAll('script[type="application/ld+json"]')];

  assert(document.querySelectorAll('h1').length === 1, `${label}: deve conter exatamente um H1.`);
  assert(title === page.title, `${label}: título inesperado: "${title}".`);
  assert(Boolean(description), `${label}: meta description ausente.`);
  assert(canonical === page.canonical, `${label}: canônica inesperada: "${canonical}".`);
  assert(!robots.toLowerCase().includes('noindex'), `${label}: página indexável marcada como noindex.`);
  assert(jsonLdScripts.length > 0, `${label}: JSON-LD ausente.`);

  seenTitles.add(title);
  if (description) seenDescriptions.add(description);
  if (canonical) seenCanonicals.add(canonical);

  for (const script of jsonLdScripts) {
    try {
      const data = JSON.parse(script.textContent ?? '');
      const nodes = Array.isArray(data['@graph']) ? data['@graph'] : [data];
      const faq = nodes.find((node) => node?.['@type'] === 'FAQPage');

      for (const entry of faq?.mainEntity ?? []) {
        const question = entry?.name;
        const answer = entry?.acceptedAnswer?.text;
        assert(Boolean(question && document.body.textContent.includes(question)), `${label}: pergunta do FAQ schema não está visível: "${question}".`);
        assert(Boolean(answer && document.body.textContent.includes(answer)), `${label}: resposta do FAQ schema não está visível para "${question}".`);
      }
    } catch (error) {
      errors.push(`${label}: JSON-LD inválido: ${error.message}`);
    }
  }
}

assert(seenTitles.size === expectedPages.length, 'Os títulos SEO devem ser únicos.');
assert(seenDescriptions.size === expectedPages.length, 'As meta descriptions devem ser únicas.');
assert(seenCanonicals.size === expectedPages.length, 'As URLs canônicas devem ser únicas.');

const sitemap = readFileSync(join(browserOutput, 'sitemap.xml'), 'utf8');
const sitemapDocument = new JSDOM(sitemap, { contentType: 'text/xml' }).window.document;
const sitemapUrls = [...sitemapDocument.querySelectorAll('loc')].map((node) => node.textContent.trim());
const expectedUrls = expectedPages.map((page) => page.canonical);

assert(sitemapUrls.length === expectedUrls.length, 'O sitemap deve conter somente as três páginas canônicas.');
for (const url of expectedUrls) {
  assert(sitemapUrls.includes(url), `URL ausente no sitemap: ${url}`);
}

const redirects = readFileSync(join(browserOutput, '_redirects'), 'utf8');
assert(!redirects.includes('/* /index.html 200'), 'O fallback de SPA que provoca soft 404 não pode existir.');
assert(redirects.includes('www.npexpressentrega.com.br'), 'O redirect do domínio www está ausente.');
assert(!redirects.includes('npexpressentregas.com.br'), 'O domínio plural incorreto ainda aparece nos redirects.');

const notFoundSource = readFileSync(join(browserOutput, '404.html'), 'utf8');
const notFoundDocument = new JSDOM(notFoundSource).window.document;
assert(
  notFoundDocument.querySelector('meta[name="robots"]')?.getAttribute('content') === 'noindex, nofollow',
  'A página 404 deve ser noindex, nofollow.'
);

if (errors.length > 0) {
  console.error(`Validação SEO falhou com ${errors.length} erro(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log(`Validação SEO concluída: ${expectedPages.length} páginas prerenderizadas verificadas.`);
}
