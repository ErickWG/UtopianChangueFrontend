import { Injectable } from '@angular/core';
import { Carrito, CarritoItem } from '../model/carrito';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  cart = new BehaviorSubject<Carrito>({ items: [] });

  constructor(private _snackBar: MatSnackBar) { }


  addToCart(item: CarritoItem): void {
    const items = [...this.cart.value.items];
    

    const itemInCart = items.find((_item) => _item.id === item.id);
    if (itemInCart) {
      itemInCart.quantity += 1;
    } else {
      items.push(item);
    }

    this.cart.next({ items });
    this._snackBar.open('1 item added to cart.', 'Ok', { duration: 3000 });

    console.log(this.cart.value);
  }
  removeQuantity(item: CarritoItem): void {
    let itemForRemoval : CarritoItem | undefined;
    let filteredItems=this.cart.value.items.map((_item) => {
      if (_item.id === item.id) {
        _item.quantity--;
      }
      if (_item.quantity === 0) {
        itemForRemoval=_item;
      }
      return _item;
    });
    if (itemForRemoval){
      filteredItems = this.removeFromCart(itemForRemoval, false);
    }
    this.cart.next({items:filteredItems});
    this._snackBar.open('Se eliminó 1 item', 'Ok', { duration: 3000 });

  }
  getTotal(items:Array<CarritoItem>): number {
    return items.
    map((item)=>item.price * item.quantity)
    .reduce((prev, current)=> prev + current, 0);
  }
  clearCart(){
    this.cart.next({ items: []});
    this._snackBar.open('Carrito ta limpio', 'Ok', { duration: 3000 });
  }
  removeFromCart(item:CarritoItem, update=true):Array<CarritoItem> {
    const filterItems=this.cart.value.items.filter(
      (_item)=> _item.id !== item.id
    );
    if(update) {
      this.cart.next({ items: filterItems });
      this._snackBar.open('Se elimino item', 'Ok', { duration: 3000 });
  
    }
    return filterItems;

  }
}
