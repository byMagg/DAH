import { Routes } from '@angular/router';
import { Tab3Page } from './tab3.page';

export const routes: Routes = [
  {
    path: '',
    component: Tab3Page,
  },
  {
    path: 'products-page',
    loadChildren: () => import('./products-page/products-page.page').then(m => m.ProductsPagePage)
  }
];
