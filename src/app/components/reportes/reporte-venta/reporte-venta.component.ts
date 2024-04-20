import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ReporteVenta } from 'src/app/model/dtoReporteVenta';
import { VentaService } from 'src/app/services/venta.service';

@Component({
  selector: 'app-reporte-venta',
  templateUrl: './reporte-venta.component.html',
  styleUrls: ['./reporte-venta.component.css']
})
export class ReporteVentaComponent {
  displayedColumns: string[] = ['idVenta','nombreCliente','listaProductos','importeTotal','fechaVenta'];

  dataSource=new MatTableDataSource<ReporteVenta>();

  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator

  constructor(public ventaService: VentaService, private router: Router, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.getReporte()
  }
  getReporte(){
    this.ventaService.reporteVenta().subscribe(data=>{
      this.dataSource= new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
    })

  }


}
