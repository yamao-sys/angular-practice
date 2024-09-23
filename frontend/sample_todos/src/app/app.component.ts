import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgIf],
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
}
