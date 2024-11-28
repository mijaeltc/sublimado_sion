import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatCardModule }  from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto';
import { error } from 'console';
import { Categoria } from '../../models/categoria';
import { CategoriaService } from '../../services/categoria.service';


@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [ RouterOutlet, MatCardModule, RouterLink, CommonModule, MatButtonModule ],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent implements OnInit {
  categorias: Categoria[] = [];
  products: Producto[] = [];
  selectedCategoriaId: number = 0;
  selectedCategory: string | null = null;

  constructor(private productoService: ProductoService, private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.cargarProductos();
    this.cargarCategorias();
  }

  cargarProductos(categoriaId: number = 0): void {
    this.productoService.listarProductos(categoriaId).subscribe(
      (productos: Producto[]) => {
        this.products = productos;
      },
      error => {
        console.error('Error al cargar productos', error);
      }
    );
  }

  cargarCategorias(): void {
    this.categoriaService.obtenerCategorias().subscribe(
        (data) => this.categorias = data,
        (error) => console.error('Error al cargar categorías:', error)
    );
  }

  filtrarPorCategoria(categoriaId: number): void {
    this.selectedCategoriaId = categoriaId;
    this.cargarProductos(categoriaId); // Filtra por la categoría seleccionada
}
  
 /*
  products = [
    { id: 1, name: 'Jonas Brothers - Camiseta',  category: "JONAS BROTHERS", description: 'High quality sublimated T-Shirt', image: 'assets/images/pro01.png' },
    { id: 2, name: 'Karol G - Camiseta',  category: "KAROL G", description: 'High quality sublimated T-Shirt', image: 'assets/images/pro02.png' },
    { id: 3, name: 'Taylor - Camiseta',  category: "TAYLOR SWIFT", description: 'High quality sublimated T-Shirt', image: 'assets/images/pro03.png' },
    { id: 4, name: 'Morat - Camiseta',  category: "MORAT", description: 'High quality sublimated T-Shirt', image: 'assets/images/pro04.png' },
    // Más productos aquí
  ];
  
  get filteredProducts() {
    return this.selectedCategory 
      ? this.products.filter(product => product.category === this.selectedCategory) 
      : this.products;
  }

  
  filterByCategory(category: string | null) {
    this.selectedCategory = category;
  }

  onCategorySelect(category: string) {
    this.selectedCategory = category;
    this.productoService.listarProductos(category).subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.error('Error al cargar productos filtrados', error);
      }
    );
  }
    
  */
}

