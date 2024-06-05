import {Routes} from '@angular/router';

export const routes : Routes = [
  {
    path: '',
    redirectTo: '/requests',
    pathMatch: 'full'
  },
  {
    path: 'product-assets',
    loadComponent: () => import('./features/product-assets/product-assets.component').then(m => m.ProductAssetsComponent)
  },
  {
    path:'products',
    loadComponent: () => import('./features/products/products.component').then(m => m.ProductsComponent)
  },
  {
    path: 'products',
    loadComponent: () => import('./features/products/products.component').then(m => m.ProductsComponent)
  },
  {
    path: 'requests',
    loadComponent: () => import('./features/requests/requests.component').then(m => m.RequestsComponent)
  }
];
