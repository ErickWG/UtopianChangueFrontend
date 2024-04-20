import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { BehaviorSubject, Observable } from 'rxjs';


const base_url="http://localhost:8080"

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url=`${base_url}/user`
  
  private userSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient) { }

  getUserByUsername(username: string){
    const endpoint = `${this.url}/${username}`;
    let token = sessionStorage.getItem("token");
    return this.http.get<User>(endpoint,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  setUser(user: User) {
    this.userSubject.next(user);
  }
  getUser(): Observable<User | null> {
    return this.userSubject.asObservable();
  }

}
