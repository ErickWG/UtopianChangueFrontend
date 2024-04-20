export interface Carrito {
    items: Array<CarritoItem>;
  }
  
  export interface CarritoItem {
    product: string;
    name: string;
    price: number;
    quantity: number;
    id: number;
  }
  