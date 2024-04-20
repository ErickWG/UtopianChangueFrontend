import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Material } from 'src/app/model/material';
import { MaterialService } from 'src/app/services/material.service';

@Component({
  selector: 'app-material-registrar',
  templateUrl: './material-registrar.component.html',
  styleUrls: ['./material-registrar.component.css']
})
export class MaterialRegistrarComponent implements OnInit{
  public myForm!: FormGroup;
  public _id: number = 0;
  constructor(private formBuilder: FormBuilder,private materialService: MaterialService,private router: Router,private snackBar: MatSnackBar, private activactedRoute: ActivatedRoute){}
  ngOnInit() {
    this.reactiveForm()
  }
  addMaterial(){
    const material: Material = {
      idMaterial: 0,
      nombreMaterial: this.myForm.get('nombreMaterial')!.value, // Corregido aquí
      detalleMaterial: this.myForm.get('detalleMaterial')!.value, // Corregido aquí
    }
    console.log(material);
    this.materialService.addMaterial(material).subscribe({
      next: (data) => {
        console.log("ingresando registro...")
        this.snackBar.open('Material agregada correctamente', '', {
          duration: 40000
        })
        this.router.navigate(['/materiallist'])
      },
      error: (err) => {
        console.log(err)
      },
    })
  }
  reactiveForm() {
    this.myForm = this.formBuilder.group ({
      idMaterial: [''],
      nombreMaterial: ['', Validators.required],
      detalleMaterial:  ['', Validators.required]
    })
  }
}
