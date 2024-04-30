import {Routes} from '@angular/router';

export const routes : Routes = [
  {
    path: '',
    redirectTo: '/product-assets',
    pathMatch: 'full'
  },
  {
    path: 'product-assets',
    loadComponent: () => import('./features/product-assets/product-assets.component').then(m => m.ProductAssetsComponent)
  }
];
