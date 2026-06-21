import { Routes } from '@angular/router';
import {
  BUSINESS_COURIER_SEO,
  EXPRESS_DELIVERY_SEO
} from './core/seo/seo-pages.config';
import { LandingPageComponent } from './features/landing/landing-page.component';
import { NotFoundPageComponent } from './features/not-found/not-found-page.component';
import {
  BUSINESS_COURIER_CONTENT,
  EXPRESS_DELIVERY_CONTENT
} from './features/service-page/service-page.content';
import { ServicePageComponent } from './features/service-page/service-page.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'entrega-rapida-jundiai',
    component: ServicePageComponent,
    data: {
      content: EXPRESS_DELIVERY_CONTENT,
      seo: EXPRESS_DELIVERY_SEO,
      relatedPage: {
        href: '/motoboy-para-empresas-jundiai',
        label: 'Motoboy para empresas em Jundiaí',
        description: 'Conheça o atendimento recorrente, as rotas programadas e as opções para empresas.'
      }
    }
  },
  {
    path: 'motoboy-para-empresas-jundiai',
    component: ServicePageComponent,
    data: {
      content: BUSINESS_COURIER_CONTENT,
      seo: BUSINESS_COURIER_SEO,
      relatedPage: {
        href: '/entrega-rapida-jundiai',
        label: 'Entrega rápida em Jundiaí',
        description: 'Veja como solicitar coletas e entregas rápidas para demandas avulsas ou urgentes.'
      }
    }
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];
