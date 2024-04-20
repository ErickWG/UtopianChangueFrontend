import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Empresa } from 'src/app/model/empresa';
import { EmpresaService } from 'src/app/services/empresa.service';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-empresa-listar',
  templateUrl: './empresa-listar.component.html',
  styleUrls: ['./empresa-listar.component.css']
})
export class EmpresaListarComponent {
  [x: string]: any;

  displayedColumns: string[] = ['idEmpresa','nombreEmpresa', 'ubicacionEmpresa', 'detalleEmpresa','correoEmpresa','sitioWebEmpresa','actions'];
  
  dataSource=new MatTableDataSource<Empresa>();

  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator


  constructor(public empresaService: EmpresaService, private router: Router, private snackBar: MatSnackBar, public dialog:MatDialog) {}

  ngOnInit(): void {
    this.getEmpresas()
  }
  getEmpresas(){
    this.empresaService.list().subscribe(data=>{
      this.dataSource= new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
    })
  }

  delete(idEmpresa: any) {
    this.empresaService.deleteEmpresa(idEmpresa).subscribe({
    next: (data) => {
      console.log("eliminando registro..." + idEmpresa)
      this.snackBar.open('Empresa eliminada correctamente', '', {
        duration: 3000
      })
      this.getEmpresas()
      this.router.navigate(['/empresalist'])
    },
    error: (err) => {
      console.log(err)
    },
  })
  }
}
