import { LANDING_CONTENT } from '../../features/landing/landing.content';
import {
  BUSINESS_COURIER_CONTENT,
  EXPRESS_DELIVERY_CONTENT,
  ServicePageContent
} from '../../features/service-page/service-page.content';
import { SeoPageConfig } from './seo-page-config.model';

export const SITE_URL = 'https://npexpressentrega.com.br';
const SOCIAL_IMAGE_URL = `${SITE_URL}/images/brand/og-image.webp`;
const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const organization = {
  '@type': ['Organization', 'DeliveryService'],
  '@id': ORGANIZATION_ID,
  name: 'NP Express',
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/images/brand/logo-icon.webp`,
  telephone: '+55-11-91666-2730',
  priceRange: '$$',
  sameAs: ['https://www.instagram.com/express_np/'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Jundiaí',
    addressRegion: 'SP',
    addressCountry: 'BR'
  },
  areaServed: [
    'Jundiaí',
    'Várzea Paulista',
    'Campo Limpo Paulista',
    'Itupeva',
    'Louveira',
    'Cajamar',
    'Cabreúva',
    'Vinhedo',
    'Valinhos'
  ].map((name) => ({ '@type': 'City', name })),
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '17:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '07:00',
      closes: '13:00'
    }
  ]
};

const website = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: 'NP Express',
  inLanguage: 'pt-BR',
  publisher: { '@id': ORGANIZATION_ID }
};

function faqSchema(faqs: readonly { readonly question: string; readonly answer: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer }
    }))
  };
}

function servicePageSeo(
  title: string,
  description: string,
  path: string,
  serviceName: string,
  content: ServicePageContent
): SeoPageConfig {
  const canonicalUrl = `${SITE_URL}/${path}`;
  const webpageId = `${canonicalUrl}#webpage`;

  return {
    title,
    description,
    canonicalUrl,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    openGraph: {
      type: 'website',
      imageUrl: SOCIAL_IMAGE_URL,
      imageAlt: `${serviceName} — NP Express`
    },
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@graph': [
          organization,
          website,
          {
            '@type': 'WebPage',
            '@id': webpageId,
            url: canonicalUrl,
            name: title,
            description,
            inLanguage: 'pt-BR',
            isPartOf: { '@id': WEBSITE_ID },
            about: { '@id': ORGANIZATION_ID },
            breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` }
          },
          {
            '@type': 'Service',
            '@id': `${canonicalUrl}#service`,
            name: serviceName,
            description,
            provider: { '@id': ORGANIZATION_ID },
            areaServed: { '@type': 'City', name: 'Jundiaí' },
            url: canonicalUrl
          },
          {
            '@type': 'BreadcrumbList',
            '@id': `${canonicalUrl}#breadcrumb`,
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Início', item: `${SITE_URL}/` },
              { '@type': 'ListItem', position: 2, name: serviceName, item: canonicalUrl }
            ]
          },
          faqSchema(content.faqs)
        ]
      }
    ]
  };
}

export const HOME_SEO: SeoPageConfig = {
  title: 'Motoboy Rápido em Jundiaí | Entregas NP Express',
  description:
    'Motoboy rápido em Jundiaí para entregas, coletas e pequenas encomendas. Atendimento avulso ou recorrente para pessoas e empresas pelo WhatsApp.',
  canonicalUrl: `${SITE_URL}/`,
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  openGraph: {
    type: 'website',
    imageUrl: SOCIAL_IMAGE_URL,
    imageAlt: 'NP Express — motoboy e entregas rápidas em Jundiaí'
  },
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@graph': [
        organization,
        website,
        {
          '@type': 'WebPage',
          '@id': `${SITE_URL}/#webpage`,
          url: `${SITE_URL}/`,
          name: 'Motoboy Rápido em Jundiaí | Entregas NP Express',
          description:
            'Motoboy rápido em Jundiaí para entregas, coletas e pequenas encomendas. Atendimento avulso ou recorrente para pessoas e empresas pelo WhatsApp.',
          inLanguage: 'pt-BR',
          isPartOf: { '@id': WEBSITE_ID },
          about: { '@id': ORGANIZATION_ID }
        },
        faqSchema(LANDING_CONTENT.faqs)
      ]
    }
  ]
};

export const EXPRESS_DELIVERY_SEO = servicePageSeo(
  'Entrega Rápida em Jundiaí | NP Express',
  'Entrega rápida em Jundiaí para documentos, encomendas e pequenos volumes. Solicite coleta, confirme prazo e acompanhe pelo WhatsApp.',
  'entrega-rapida-jundiai',
  'Entrega rápida em Jundiaí',
  EXPRESS_DELIVERY_CONTENT
);

export const BUSINESS_COURIER_SEO = servicePageSeo(
  'Motoboy para Empresas em Jundiaí | NP Express',
  'Motoboy para empresas em Jundiaí com coletas, entregas, malotes e rotas recorrentes. Consulte contratos e faturamento pelo WhatsApp.',
  'motoboy-para-empresas-jundiai',
  'Motoboy para empresas em Jundiaí',
  BUSINESS_COURIER_CONTENT
);

export const NOT_FOUND_SEO: SeoPageConfig = {
  title: 'Página não encontrada | NP Express',
  description: 'A página solicitada não foi encontrada.',
  canonicalUrl: `${SITE_URL}/404`,
  robots: 'noindex, nofollow',
  openGraph: {
    type: 'website',
    imageUrl: SOCIAL_IMAGE_URL,
    imageAlt: 'NP Express'
  },
  jsonLd: []
};
