import { User } from "./user"

export interface Venta {
    idVenta: number;
    fechaVenta : string;
    estadoVenta: string;
    user: User;

}
