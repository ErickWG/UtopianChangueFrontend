import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Producto } from 'src/app/model/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit{
  displayedColumns: string[] = ['idProducto','nombreProducto','precioProducto','detalleProducto','imagenProducto','empresa','materials','actions'];

  dataSource=new MatTableDataSource<Producto>();

  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator

  constructor(public productoService: ProductoService, private router: Router, private snackBar: MatSnackBar, public dialog:MatDialog) {}

  ngOnInit(): void {
    this.getProducto()
  }
  getProducto(){
    this.productoService.list().subscribe(data=>{
      this.dataSource= new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
    })

  }
  delete(idProducto: any) {
    this.productoService.deleteProducto(idProducto).subscribe({
    next: (data) => {
      console.log("eliminando registro..." + idProducto)
      this.snackBar.open('Empresa eliminada correctamente', '', {
        duration: 3000
      })
      this.getProducto()
      this.router.navigate(['/productolist'])
    },
    error: (err) => {
      console.log(err)
    },
  })
  }
}
