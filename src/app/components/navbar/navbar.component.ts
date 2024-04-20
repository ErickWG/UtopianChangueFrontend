import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  imageLink: string = ''; // Propiedad para almacenar el enlace de la imagen

  @Input() cart: any; // Declara la propiedad cart como una entrada (input)


  constructor(private authService: AuthService, private router: Router, private snackBar: MatSnackBar) {}
  ngOnInit(): void {


   }
  userHasRole(role: string): boolean {

    const userRole = this.authService.showRole();
    return userRole === role;
  }
  
  cerrar() {
    sessionStorage.clear();
  }
  firstsession(): void {
    if (!(this.userHasRole('USER') || this.userHasRole('ADMIN'))){
      this.snackBar.open("Debe ingresar sesión primero!!!", "Aviso",{duration:2000});
      this.router.navigate(['/login'])
    }

  }
}
