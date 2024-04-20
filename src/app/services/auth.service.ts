import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { JwtRequest } from '../model/jwt-request';
import { User } from '../model/user';

const base_url="http://localhost:8080/auth/"


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  loginAuth(request: JwtRequest) {
    return this.http.post(base_url+"login", request);
  }
  registerAuth(request: User) {
    return this.http.post(base_url+"register", request);
  }
  // AuthService


  
  private registeredUsername: string='';

  setRegisteredUsername(username: string) {
    this.registeredUsername = username;
  }

  getRegisteredUsername(): string {
    return this.registeredUsername;
  }


  verificar() {
    let token = sessionStorage.getItem("token");
    return token != null;

  }
  showRole() {
    let token = sessionStorage.getItem("token");
    
    if (token) {
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token as string);
  
      // Verificar si 'decodedToken.role' existe antes de acceder a 'authority'
      return decodedToken.role?.[0]?.authority || null;
    }
  
    return null;
  }
}
