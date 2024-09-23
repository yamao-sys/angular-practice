import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgIf, ProductAlertsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'sample_todos';

  products = [
    {
      name: 'test name 1',
      price: 100,
      description: 'test description 1',
    },
    {
      name: 'test name 2',
      price: 200,
      description: '',
    },
  ];

  share() {
    window.alert('share!!');
  }

  notify() {
    window.alert('この商品を入荷したら通知します。');
  }
}
