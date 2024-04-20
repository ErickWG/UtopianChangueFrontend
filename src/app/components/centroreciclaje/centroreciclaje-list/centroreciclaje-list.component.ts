import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Centro } from 'src/app/model/centroReciclaje';
import { CentroreciclajeService } from 'src/app/services/centroreciclaje.service';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-centroreciclaje-list',
  templateUrl: './centroreciclaje-list.component.html',
  styleUrls: ['./centroreciclaje-list.component.css']
})
export class CentroreciclajeListComponent {
  [x: string]: any;

  displayedColumns: string[] = ['idCentroReciclaje','nombreCentro', 'ubicacionCentro', 'detalleCentro','horarioCentro','correoCentro','sitioWebCentro','distrito','actions'];

  dataSource=new MatTableDataSource<Centro>();

  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator

  constructor(public centroreciclajeService: CentroreciclajeService, private router: Router, private snackBar: MatSnackBar, public dialog:MatDialog) {}

  ngOnInit(): void {
    this.getCentro()
  }
  getCentro(){
    this.centroreciclajeService.list().subscribe(data=>{
      this.dataSource= new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
    })
  }
  delete(idCentroReciclaje: any) {
    this.centroreciclajeService.deleteCentro(idCentroReciclaje).subscribe({
    next: (data) => {
      console.log("eliminando registro..." + idCentroReciclaje)
      this.snackBar.open('Centro de reciclaje elimindo correctamente', '', {
        duration: 3000
      })
      this.getCentro()
      this.router.navigate(['/centrolist'])
    },
    error: (err) => {
      console.log(err)
    },
  })
  }
}
