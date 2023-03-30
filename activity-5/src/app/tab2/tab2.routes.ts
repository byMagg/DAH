import { Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';

export const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },
  {
    path: 'reservations-page',
    loadComponent: () => import('./reservations-page/reservations-page.page').then(m => m.ReservationsPagePage)
  }
];
