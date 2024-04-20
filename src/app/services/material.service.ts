import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Material } from '../model/material';

const base_url="http://localhost:8080"

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  private url=`${base_url}/material`
  constructor(private http: HttpClient) { }

  list(){
    let token = sessionStorage.getItem("token");
    return this.http.get<Material[]>(this.url,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  addMaterial(material: Material){
    let token = sessionStorage.getItem("token");
    return this.http.post<Material[]>(this.url, material,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
    console.log("hola")
  }
  deleteMaterial(id: number ){
    let token = sessionStorage.getItem("token");
    return this.http.delete<Material[]>(`${base_url}/material/${id}`,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  update(material:Material ){
    let token = sessionStorage.getItem("token");
    return this.http.put<Material[]>(this.url,material,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  getMaterialById(id:number){
    let token = sessionStorage.getItem("token");
    return this.http.get<Material[]>(`${base_url}/material/${id}`,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

}
