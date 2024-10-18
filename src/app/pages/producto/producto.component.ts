import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatCardModule }  from '@angular/material/card';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [ RouterOutlet, MatCardModule, RouterLink, CommonModule ],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  products = [
    { id: 1, name: 'T-Shirt Sublimated 1', description: 'High quality sublimated T-Shirt', image: 'assets/images/tshirt1.jpg' },
    { id: 2, name: 'T-Shirt Sublimated 2', description: 'High quality sublimated T-Shirt', image: 'assets/images/tshirt2.jpg' },
    // Más productos aquí
  ];
}
