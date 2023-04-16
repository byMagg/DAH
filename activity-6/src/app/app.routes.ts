import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'camera',
    loadComponent: () => import('./home/camera/camera.page').then( m => m.CameraPage)
  },
  {
    path: 'listing',
    loadComponent: () => import('./home/listing/listing.page').then( m => m.ListingPage)
  },
];
