import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Venta } from '../model/venta';
import { DetalleVenta } from '../model/detalleventa';
import { ReporteVenta } from '../model/dtoReporteVenta';

const base_url = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class VentaService {
  private url1=`${base_url}/venta`
  private url2=`${base_url}/DetalleVenta`
  private url3=`${base_url}/VentaImportePorVenta`

  constructor(private http: HttpClient) { }
  addVenta(venta: Venta){
    let token = sessionStorage.getItem("token");
    if(token===null){console.log("no funciona el token");}
    else{console.log(token);}
    return this.http.post<Venta>("http://localhost:8080/venta", venta,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  addDetalleVenta(detalleVenta: DetalleVenta){
    let token = sessionStorage.getItem("token");
    return this.http.post<DetalleVenta[]>(this.url2, detalleVenta,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  reporteVenta(){
    let token = sessionStorage.getItem("token");
    return this.http.get<ReporteVenta[]>(this.url3,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });  }

}
