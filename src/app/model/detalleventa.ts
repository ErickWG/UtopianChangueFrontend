import { Producto } from "./producto";
import { Venta } from "./venta";

export interface DetalleVenta {
    idDetalleVenta: number;
    cantidadDetalleVenta : number;
    venta: Venta;
    producto:Producto;

}
