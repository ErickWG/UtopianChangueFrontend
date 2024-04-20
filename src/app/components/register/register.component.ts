import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { JwtRequest } from 'src/app/model/jwt-request';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private fb: FormBuilder, private authService: AuthService , private router: Router, private snackBar: MatSnackBar) { }

  username : string = ""
  password: string = ""
  nombreUsuario : string = ""
  apellidoUsuario : string = ""
  correoUsuario : string = ""
  public myForm!: FormGroup

  ngOnInit(): void {
    this.reactiveForm()

    // Esta función se ejecutará cuando se inicialice el componente
  }

  reactiveForm() {
    this.myForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      nombreUsuario: ['', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]],
      apellidoUsuario: ['', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]],
      correoUsuario: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9.]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/)]]
    });  
}
  onKeyDown(event: KeyboardEvent) {
      // Verificar si la tecla presionada es un dígito
    if (event.key.match(/[0-9!#$%^&*()_+{}\[\]:;<>,.?~\\/-]/)) {
      event.preventDefault();
    }
  }

  onCorreoValidationInput() {
    const correoControl = this.myForm.get('correoUsuario');

    if (correoControl && correoControl.value) {
      const correoRegex = /^[a-zA-Z0-9.]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;

      if (!correoRegex.test(correoControl.value)) {
        correoControl.setErrors({ 'incorrect': true });
      } else {
        correoControl.setErrors(null);
      }
    }
  }
  
  register() {
    const request: User = {
    idUsuario:0,
    username: this.myForm.get('username')!.value,
    password: this.myForm.get('password')!.value,
    nombreUsuario: this.myForm.get('nombreUsuario')!.value,
    apellidoUsuario: this.myForm.get('apellidoUsuario')!.value,
    correoUsuario: this.myForm.get('correoUsuario')!.value
    }

  
  this.authService.registerAuth(request).subscribe(
    (data: any) => {
      this.authService.setRegisteredUsername(request.username);
      this.router.navigate(['/login']);
      this.snackBar.open("Registration successful", "Success", { duration: 2000 });
      console.log(data);
      console.log(request);
    },
    (error) => {
      console.error(error);
      this.snackBar.open("Registration failed", "Error", { duration: 2000 });
    }
  );
}
  cerrar() {
  this.router.navigate(['/index']);
}
}