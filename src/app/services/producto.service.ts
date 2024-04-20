import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../model/producto';

const base_url="http://localhost:8080"


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private url=`${base_url}/producto`
  constructor(private http: HttpClient) { }

  list(){
    let token = sessionStorage.getItem("token");
    return this.http.get<Producto[]>(this.url,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  addProducto(producto: Producto){
    let token = sessionStorage.getItem("token");
    return this.http.post<Producto[]>(this.url, producto,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  deleteProducto(id: number ){
    let token = sessionStorage.getItem("token");
    return this.http.delete<Producto[]>(`${base_url}/producto/${id}`,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  update(producto:Producto ){
    let token = sessionStorage.getItem("token");
    return this.http.put<Producto[]>(this.url,producto,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
}
