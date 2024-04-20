import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Carrito, CarritoItem } from 'src/app/model/carrito';
import { AuthService } from 'src/app/services/auth.service';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-iconocart',
  templateUrl: './iconocart.component.html',
  styleUrls: ['./iconocart.component.css']
})
export class IconocartComponent {
  constructor(private authService: AuthService, private router: Router, private carritoService:CarritoService) {}

  private _cart: Carrito = {items: []}
  itemsQuantity = 0;

  @Input()
  get cart(): Carrito {
    return this._cart;
  }
  set cart(cart: Carrito) {
    this._cart = cart;

    this.itemsQuantity = cart.items
      .map((item) => item.quantity)
      .reduce((prev, curent) => prev + curent, 0);

  }

  getTotal(items:Array<CarritoItem>): number {
    return this.carritoService.getTotal(items);
  }
  onClearCart(){
    this.carritoService.clearCart();
  }

  userHasRole(role: string): boolean {

    const userRole = this.authService.showRole();
    return userRole === role;
  }
}
