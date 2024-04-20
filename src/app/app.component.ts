import { Component, OnInit } from '@angular/core';
import { Carrito } from './model/carrito';
import { CarritoService } from './services/carrito.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TF_Prueba';

  cart: Carrito = { items: [] };

  constructor(private carritoService: CarritoService) {}

  ngOnInit() {
    this.carritoService.cart.subscribe((_cart) => {
      this.cart = _cart;
    });
  }
}
