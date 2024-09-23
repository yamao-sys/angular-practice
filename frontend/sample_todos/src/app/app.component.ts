import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { Product } from './interface/product';
import { products } from './data/products';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgIf, ProductAlertsComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'sample_todos';

  products: Product[] = products;

  share() {
    window.alert('share!!');
  }

  notify() {
    window.alert('この商品を入荷したら通知します。');
  }
}
