import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  standalone: true,
  imports: [],
  templateUrl: './product-alerts.component.html',
  styleUrl: './product-alerts.component.css',
})
export class ProductAlertsComponent {
  @Input() name = '';
  @Output() notify = new EventEmitter();
}
