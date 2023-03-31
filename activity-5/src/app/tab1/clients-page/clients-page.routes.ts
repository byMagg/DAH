import { Routes } from '@angular/router';

import { ClientsPagePage } from './clients-page.page';

export const routes: Routes = [
  {
    path: '',
    component: ClientsPagePage
  },
  {
    path: 'edit-client-page',
    loadComponent: () => import('./edit-client-page/edit-client-page.page').then(m => m.EditClientPagePage)
  },
  {
    path: 'edit-clients-page',
    loadComponent: () => import('./edit-clients-page/edit-clients-page.page').then( m => m.EditClientsPagePage)
  }
];
