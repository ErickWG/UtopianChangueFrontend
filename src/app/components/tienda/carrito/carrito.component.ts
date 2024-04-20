import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { Carrito, CarritoItem } from 'src/app/model/carrito';
import { DetalleVenta } from 'src/app/model/detalleventa';
import { Producto } from 'src/app/model/producto';
import { User } from 'src/app/model/user';
import { Venta } from 'src/app/model/venta';
import { CarritoService } from 'src/app/services/carrito.service';
import { UserService } from 'src/app/services/user.service';
import { VentaService } from 'src/app/services/venta.service';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  constructor(private carritoService:CarritoService, private userService: UserService, private ventaService: VentaService, private http: HttpClient) {}

  cart: Carrito = {items:[
]};

  dataSource: Array<CarritoItem>=[];
  displayedColumns: Array<string>=[
    'product' , 'name', 'price', 'quantity', 'total','action' 
  ]
  ngOnInit(): void {
    this.dataSource = this.cart.items;
    this.carritoService.cart.subscribe((_cart:Carrito) => {
      this.cart = _cart;
      this.dataSource = this.cart.items;
    });
    console.log(this.dataSource[0])

  }
  
  checkout() {
    // Obtener el valor de sessionStorage
    let id = sessionStorage.getItem("id");
  
    // Verificar si id no es nulo
    if (id !== null) {
      // Convierte la cadena a número
      const idUsuario: number = parseInt(id, 10);
  
      // Obtener la fecha actual
      const today: Date = new Date();
  
      // Crear un objeto User con al menos los campos requeridos
      const user: User = {
        idUsuario: idUsuario,
        username: "", // Proporciona valores predeterminados o reales según sea necesario
        password: "",
        nombreUsuario: "",
        apellidoUsuario: "",
        correoUsuario: ""
      };
  
      // Ahora puedes utilizar el objeto user en tu lógica
      const venta: Venta = {
        idVenta: 0,
        fechaVenta: today.toISOString().split("T")[0], // Formatear la fecha a YYYY-MM-DD
        estadoVenta: 'Completo',
        user: user
      };
  
      // Agregar la venta
      this.ventaService.addVenta(venta).subscribe({
        next: (data) => {
          console.log( "Venta Creada", data);

          // Iterar sobre los productos en el carrito
          this.cart.items.forEach((item) => {
            // Crear un objeto DetalleVenta para cada producto en el carrito
            const producto: Producto = {
              idProducto: item.id,
              nombreProducto: "",
              precioProducto: 0,
              detalleProducto: "",
              imagenProducto: "",
              empresa: {
                id: 0,
                nombreEmpresa: "",
                ubicacionEmpresa: "",
                detalleEmpresa: "",
                correoEmpresa: "",
                sitioWebEmpresa: ""
              },
              materials: [{
                idMaterial: 0,
                detalleMaterial : "",
                nombreMaterial : ""
              }]
            }
            const venta2: Venta = {
              idVenta: data.idVenta,
              fechaVenta: "", // Formatear la fecha a YYYY-MM-DD
              estadoVenta: '',
              user: {
                idUsuario:0,
                username : "",
                password : "",
                nombreUsuario  : "",
                apellidoUsuario : "",
                correoUsuario  : "",
              }
            };
            const detalleVenta: DetalleVenta = {
              idDetalleVenta: 0,
              cantidadDetalleVenta: item.quantity,
              venta: venta2, // Utilizar la venta recién creada
              producto: producto // Utilizar el producto actual en el carrito
            };
            console.log(detalleVenta);
            // Agregar el detalle de venta
            this.ventaService.addDetalleVenta(detalleVenta).subscribe({
              next: (detalleData) => {
                console.log("Detalle de venta agregado", detalleData);
              }
            });
          });
        }
      });
    } else {
      // Manejar el caso donde id es nulo
      console.error("El valor de 'id' es nulo.");
    }
  }
  
  onCheckout(): void {
    this.checkout();
    this.http
      .post('http://localhost:4242/checkout', {
        items: this.cart.items,
      })
      .subscribe(async (res: any) => {
        let stripe = await loadStripe('pk_test_51ODJewFTi6FU1pp3gPU0dsMuS8E2WRc7fq9MVdfcM31scQGpJY7ywUSvWyvThJxlKw4PW2Q9jTcdb49VtIY9dcSu00k35F1fzm');

        stripe?.redirectToCheckout({

          sessionId: res.id,
        });
      });

  }
  
  getTotal(items:Array<CarritoItem>): number {
    return this.carritoService.getTotal(items);
  }
  onClearCart():void {
    this.carritoService.clearCart();
  }
  onRemoveFromCart(item:CarritoItem):void {
    this.carritoService.removeFromCart(item);
  }
  onAddQuantity(item:CarritoItem):void {
    this.carritoService.addToCart(item);
  }
  onRemoveQuantity(item:CarritoItem):void {
    this.carritoService.removeQuantity(item);
  }
}
