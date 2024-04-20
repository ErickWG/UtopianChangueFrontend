import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Empresa } from 'src/app/model/empresa';
import { Material } from 'src/app/model/material';
import { Producto } from 'src/app/model/producto';
import { EmpresaService } from 'src/app/services/empresa.service';
import { MaterialService } from 'src/app/services/material.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto-registrar',
  templateUrl: './producto-registrar.component.html',
  styleUrls: ['./producto-registrar.component.css']
})
export class ProductoRegistrarComponent {
  public myForm!: FormGroup;
  public _id: number = 0;
  empresas: Empresa[]=[]
  materials: Material[]=[]
  constructor(private materialService: MaterialService,private empresaService: EmpresaService,private formBuilder: FormBuilder,private productoService: ProductoService,private router: Router,private snackBar: MatSnackBar, private activactedRoute: ActivatedRoute){
  }
  ngOnInit() {
    this.getEmpresas();
    this.getMateriales();
    this.reactiveForm();
    
  }
  addProducto(){
    const producto: Producto = {
      idProducto: 0,
      nombreProducto: this.myForm.get('nombreProducto')!.value, // Corregido aquí
      precioProducto: this.myForm.get('precioProducto')!.value, // Corregido aquí
      detalleProducto: this.myForm.get('detalleProducto')!.value, // Corregido aquí
      imagenProducto: this.myForm.get('imagenProducto')!.value, // Corregido aquí     
      empresa: this.myForm.get('empresa')!.value, // Corregido aquí
      materials:  this.myForm.get('materials')!.value, // Corregido aquí

    }
    console.log(producto);

    this.productoService.addProducto(producto).subscribe({
      next: (data) => {
        console.log("ingresando registro...")
        this.snackBar.open('Producto agregada correctamente', '', {
          duration: 40000
        })
        this.router.navigate(['/productolist'])
      },
      error: (err) => {
        console.log(err)
      },
    })
  }
  reactiveForm() {
    this.myForm = this.formBuilder.group ({
      idProducto: [''],
      nombreProducto: ['', Validators.required],
      precioProducto:  ['', Validators.required],
      detalleProducto: ['', Validators.required],
      imagenProducto:  ['', Validators.required],
      empresa: ['', Validators.required],
      materials: ['', Validators.required]
    })
        
  }
  getEmpresas(){
    this.empresaService.list().subscribe(
      (empresas: Empresa[]) => {
        this.empresas = empresas;
      },
      error => {
        console.error('Error al obtener la lista de empresas', error);
      }
    );
  }
  getMateriales(){
    this.materialService.list().subscribe(
      (material: Material[]) => {
        this.materials = material;
      },
      error => {
        console.error('Error al obtener la lista de los materiales', error);
      }
    );
  }

}
