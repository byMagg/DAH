import { Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

export const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'clients-page',
    loadChildren: () => import('./clients-page/clients-page.routes').then(m => m.routes)
  }
];
