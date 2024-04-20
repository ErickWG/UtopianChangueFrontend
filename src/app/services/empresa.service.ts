import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Empresa } from '../model/empresa';

const base_url="http://localhost:8080"

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  private url=`${base_url}/empresa`

  constructor(private http: HttpClient) { }
  list(){
    let token = sessionStorage.getItem("token");
    return this.http.get<Empresa[]>(this.url,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  addEmpresa(empresa: Empresa){
    let token = sessionStorage.getItem("token");
    return this.http.post<Empresa[]>(this.url, empresa,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  deleteEmpresa(id: number ){
    let token = sessionStorage.getItem("token");
    return this.http.delete<Empresa[]>(`${base_url}/empresa/${id}`,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  update(empresa:Empresa ){
    let token = sessionStorage.getItem("token");
    return this.http.put<Empresa[]>(this.url,empresa,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  getEmpresaById(id:number){
    let token = sessionStorage.getItem("token");
    return this.http.get<Empresa[]>(`${base_url}/empresa/${id}`,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
}
