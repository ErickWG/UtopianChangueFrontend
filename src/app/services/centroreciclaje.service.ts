import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Centro } from '../model/centroReciclaje';

const base_url="http://localhost:8080"

@Injectable({
  providedIn: 'root'
})
export class CentroreciclajeService {

  private url=`${base_url}/centroReciclaje`
  constructor(private http: HttpClient) { }

  list(){
    let token = sessionStorage.getItem("token");
    return this.http.get<Centro[]>(this.url,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  addCentro(centroReciclaje: Centro){
    let token = sessionStorage.getItem("token");
    return this.http.post<Centro[]>(this.url, centroReciclaje,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  deleteCentro(id: number ){
    let token = sessionStorage.getItem("token");
    return this.http.delete<Centro[]>(`${base_url}/centroReciclaje/${id}`,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  update(centro:Centro ){
    let token = sessionStorage.getItem("token");
    return this.http.put<Centro[]>(this.url,centro,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  getEmpresaById(id:number){
    let token = sessionStorage.getItem("token");
    return this.http.get<Centro[]>(`${base_url}/centroReciclaje/${id}`,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
}
