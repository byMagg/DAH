import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsPagePage } from './products-page.page';

const routes: Routes = [
  {
    path: '',
    component: ProductsPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsPagePageRoutingModule {}
