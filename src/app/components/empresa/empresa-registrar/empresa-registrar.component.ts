import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Empresa } from 'src/app/model/empresa';
import { EmpresaService } from 'src/app/services/empresa.service';
import {MatPaginator} from '@angular/material/paginator';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-empresa-registrar',
  templateUrl: './empresa-registrar.component.html',
  styleUrls: ['./empresa-registrar.component.css']
})
export class EmpresaRegistrarComponent implements OnInit{
  public myForm!: FormGroup
  public _id: number = 0

  constructor(
    private fb: FormBuilder,
    private empresaService: EmpresaService,
    private snackBar: MatSnackBar,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.reactiveForm()
  }

  reactiveForm() {
    this.myForm = this.fb.group ({
      idEmpresa: [''],
      nombreEmpresa: ['', Validators.required],
      ubicacionEmpresa:  ['', Validators.required],
      detalleEmpresa: ['', Validators.required],
      correoEmpresa:  ['', Validators.required],
      sitioWebEmpresa: ['', Validators.required]
    })
    //Para modificar
    const empresaa: Empresa = this.activatedRoute.snapshot.params['empresa']
    if(empresaa != undefined && empresaa != null) 
    {
      this.myForm.get('nombreEmpresa')?.setValue(empresaa.nombreEmpresa)
      console.log('a zzz')
      console.log(empresaa.nombreEmpresa)

    }
    else{
      console.log('error zzz')
    }
    
      
  }
  addEmpresa() {
    const empresa: Empresa = {
      id: this._id,
      nombreEmpresa: this.myForm.get('nombreEmpresa')!.value,
      ubicacionEmpresa: this.myForm.get('ubicacionEmpresa')!.value,
      detalleEmpresa: this.myForm.get('detalleEmpresa')!.value,
      correoEmpresa: this.myForm.get('correoEmpresa')!.value,
      sitioWebEmpresa: this.myForm.get('sitioWebEmpresa')!.value
    };

    if (this._id === 0) {
      // Agregar empresa
      this.empresaService.addEmpresa(empresa).subscribe({
        next: (data) => {
          console.log("Ingresando registro...");
          this.snackBar.open('Empresa agregada correctamente', '', {
            duration: 4000
          });
          this.router.navigate(['/empresalist']);
        },
        error: (err) => {
          console.log(err);
        }
      });
    } else {
      // Modificar empresa
      this.empresaService.update(empresa).subscribe({
        next: (data) => {
          console.log("Modificando registro...");
          this.snackBar.open('Empresa modificada correctamente', '', {
            duration: 4000
          });
          this.router.navigate(['/empresalist']);
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  }
}

 
