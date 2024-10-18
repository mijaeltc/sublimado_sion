import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { CarritoCompraComponent } from './pages/carrito-compra/carrito-compra.component';
import { LoginComponent } from './pages/login/login.component';
import { DetallesProductoComponent } from './pages/detalles-producto/detalles-producto.component';

export const routes: Routes = [
  { path:'', component: InicioComponent },
  { path:'productos', component: ProductoComponent },
  { path:'carrito', component: CarritoCompraComponent },
  { path:'login', component: LoginComponent },
  { path:'product/:id', component: DetallesProductoComponent }
];
