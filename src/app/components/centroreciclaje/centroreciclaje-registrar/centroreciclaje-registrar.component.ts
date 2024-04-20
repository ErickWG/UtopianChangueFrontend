import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Centro } from 'src/app/model/centroReciclaje';
import { CentroreciclajeService } from 'src/app/services/centroreciclaje.service';
import {MatPaginator} from '@angular/material/paginator';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-centroreciclaje-registrar',
  templateUrl: './centroreciclaje-registrar.component.html',
  styleUrls: ['./centroreciclaje-registrar.component.css']
})
export class CentroreciclajeRegistrarComponent implements OnInit {
  public myForm!: FormGroup

  constructor(
    private fb: FormBuilder,
    private centroreciclajeService: CentroreciclajeService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.reactiveForm()
  }
  reactiveForm() {
    this.myForm = this.fb.group ({
      idCentroReciclaje: [''],
      nombreCentro: ['', Validators.required],
      ubicacionCentro:  ['', Validators.required],
      detalleCentro: ['', Validators.required],
      horarioCentro:  ['', Validators.required],
      correoCentro: ['', Validators.required],
      sitioWebCentro:  ['', Validators.required],
      distrito: ['', Validators.required]
    })
  }
  addCentro(){
    const centro: Centro = {
      idCentroReciclaje: 0,
      nombreCentro: this.myForm.get('nombreCentro')!.value,
      ubicacionCentro: this.myForm.get('ubicacionCentro')!.value,
      detalleCentro: this.myForm.get('detalleCentro')!.value,
      horarioCentro: this.myForm.get('horarioCentro')!.value,
      correoCentro: this.myForm.get('correoCentro')!.value,
      sitioWebCentro: this.myForm.get('sitioWebCentro')!.value,
      distrito: this.myForm.get('distrito')!.value
    }
    this.centroreciclajeService.addCentro(centro).subscribe({
      next: (data) => {
        console.log("ingresando registro...")
        this.snackBar.open('Centro de reciclaje agregado correctamente', '', {
          duration: 40000
        })
        this.router.navigate(['/centrolist'])
      },
      error: (err) => {
        console.log(err)
      },
    })
  }

}

