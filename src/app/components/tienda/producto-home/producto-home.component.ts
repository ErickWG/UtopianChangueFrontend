import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { Producto } from 'src/app/model/producto';
import { CarritoService } from 'src/app/services/carrito.service';
import { TiendaService } from 'src/app/services/tienda.service';
import { VentaService } from 'src/app/services/venta.service';

const ROWS_HEIGTH:{[id:number]:number} ={1: 400, 3:355, 4:350}

@Component({
  selector: 'app-producto-home',
  templateUrl: './producto-home.component.html',
  styleUrls: ['./producto-home.component.css']
})
export class ProductoHomeComponent implements OnInit, OnDestroy {
  cols=3;
  rowHeight=ROWS_HEIGTH[this.cols];
  products: Array<Producto> | undefined
  originalProducts: Array<Producto> | undefined

  sort='desc';
  count = '12';
  productsSubcription: Subscription | undefined

  constructor(private carritoService: CarritoService, private tiendaService:TiendaService, private ventaService:VentaService,private snackBar: MatSnackBar) { }

  ngOnInit(): void {


    this.getProducts();
    
  }
  ngOnDestroy(): void {
    if (this.productsSubcription){
      this.productsSubcription.unsubscribe();
    }
  }
  getProducts(){
    this.productsSubcription=this.tiendaService.getAllProducts(this.count,this.sort)
      .subscribe((_products)=>{
        this.products = _products;
        this.originalProducts = _products;
      });
  }

  onColumnsCountChange(colsNum: number):void {
    this.cols=colsNum;
    this.rowHeight=ROWS_HEIGTH[this.cols];


  }
  onAddToCart(producto:Producto): void {
    
    this.carritoService.addToCart({
      product: producto.imagenProducto,
      name: producto.nombreProducto,
      price: producto.precioProducto,
      quantity: 1,
      id: producto.idProducto
    })

  }
  updateProducts() {
    this.products = this.originalProducts;
  }
  
/* filter(e: any): void {
  if (this.products) {
    const searchTerm = e.target.value.trim().toLowerCase();
    this.products = this.products.filter(product =>
      product.nombreProducto.toLowerCase().includes(searchTerm)
    );
  }
} */
filter(event: any) {
  if (this.products && this.originalProducts) {
    const query = event.target.value.toLowerCase();

    // Filtra por nombre
    this.products = this.originalProducts.filter(product => 
      product.nombreProducto.toLowerCase().includes(query)
    );

  }
}
ordendarPrecio(event: string){
  if (this.products && this.originalProducts) {
    // Ordena por precio
    this.products.sort((a, b) => {
      const priceA = a.precioProducto;
      const priceB = b.precioProducto;

      if (event === 'asc') {
        return priceA - priceB;
      } else {
        return priceB - priceA;
      }
    });
  }
}
}

