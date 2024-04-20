import { Component, EventEmitter, Input,Output } from '@angular/core';
import { Producto } from 'src/app/model/producto';

@Component({
  selector: 'app-producto-box',
  templateUrl: './producto-box.component.html',
  styleUrls: ['./producto-box.component.css']
})
export class ProductoBoxComponent {
  @Input() fullWidthMode = false;
  @Input() product : Producto | undefined;
  @Output() addToCart = new EventEmitter();
  onAddToCart(): void{
    this.addToCart.emit(this.product)
  }

}
