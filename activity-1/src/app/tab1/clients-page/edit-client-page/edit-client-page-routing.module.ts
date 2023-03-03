import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditClientPagePage } from './edit-client-page.page';

const routes: Routes = [
  {
    path: '',
    component: EditClientPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditClientPagePageRoutingModule {}
