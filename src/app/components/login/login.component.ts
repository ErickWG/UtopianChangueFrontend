import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { JwtRequest } from 'src/app/model/jwt-request';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private authService: AuthService , private router: Router, private snackBar: MatSnackBar, private userService:UserService) { }
  username: string = ""
  password: string = ""
  role:string=""
  
  ngOnInit(): void {
    const registeredUsername = this.authService.getRegisteredUsername();
    if (registeredUsername) {
      this.username = registeredUsername;
    } 
   }
  login() {
    let request = new JwtRequest();
    request.username = this.username;
    request.password = this.password;
    this.authService.loginAuth(request).subscribe((data: any) => {

      sessionStorage.setItem("token", data.token);
      this.snackBar.open("Se ha iniciado sesion correctamente uwu!!", "Aviso",{duration:2000});
      
      this.role=this.authService.showRole();
      console.log(this.role);
      if(this.role=='ADMIN') 
      {this.router.navigate(['/empresalist'])}
      else{
        this.router.navigate(['home-producto']);
      }
      this.userService.getUserByUsername(request.username).subscribe(
        (user) => {
          sessionStorage.setItem("id", user.idUsuario.toString());

          this.userService.setUser(user);

          console.log(user.idUsuario);
        },
        (error) => {
          console.error("Error obteniendo usuario por nombre de usuario:", error);
        }
      );
      
    }, error => {
      this.snackBar.open("Credenciales incorrectas!!!", "Aviso",{duration:2000});
    });
  }
  cerrar() {

    this.router.navigate(['/index']);
  }
}
