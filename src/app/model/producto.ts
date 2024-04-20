import { Empresa } from "./empresa";
import { Material } from "./material";

export interface Producto {
    idProducto: number;
    nombreProducto: string;
    precioProducto: number;
    detalleProducto: string;
    imagenProducto: string;
    empresa: Empresa;
    materials: Material[];

  }
  