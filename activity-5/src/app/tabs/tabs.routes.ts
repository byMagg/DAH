import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () =>
          import('../tab1/tab1.routes').then((m) => m.routes),
      },
      {
        path: 'tab2',
        loadChildren: () =>
          import('../tab2/tab2.routes').then((m) => m.routes),
      },
      {
        path: 'tab3',
        loadChildren: () =>
          import('../tab3/tab3.routes').then((m) => m.routes),
      },
      {
        path: '',
        redirectTo: '/tabs/tab2',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab2',
    pathMatch: 'full',
  },
];
