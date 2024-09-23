import { Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const routes: Routes = [
  {
    path: 'details/:id',
    component: ProductDetailsComponent,
    title: '商品詳細',
  },
];
