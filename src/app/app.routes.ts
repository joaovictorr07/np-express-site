import { Routes } from '@angular/router';
import { LandingPageComponent } from './features/landing/landing-page.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    title: 'NP Express | Motoboy rápido para entregas, coletas e contratos fixos'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
