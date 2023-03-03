import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientsPagePage } from './clients-page.page';

const routes: Routes = [
  {
    path: '',
    component: ClientsPagePage
  },
  {
    path: 'edit-client-page',
    loadChildren: () => import('./edit-client-page/edit-client-page.module').then( m => m.EditClientPagePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsPagePageRoutingModule {}
