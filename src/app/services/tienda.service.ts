import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../model/producto';

const base_url = 'http://localhost:8080';


@Injectable({
  providedIn: 'root'
})
export class TiendaService {
  private url=`${base_url}/producto`

  constructor(private httpClient: HttpClient) { }

  getAllProducts(limit = '12',sort = 'desc' ): Observable<Array<Producto>> {
    let token = sessionStorage.getItem("token");
    console.log(token);

    return this.httpClient.get<Array<Producto>>(this.url,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
}



