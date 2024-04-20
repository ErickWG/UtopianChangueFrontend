import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Material } from 'src/app/model/material';
import { MaterialService } from 'src/app/services/material.service';
import {MatPaginator} from '@angular/material/paginator';


@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent {
  [x: string]: any;

  displayedColumns: string[] = ['idMaterial','nombreMaterial','detalleMaterial','actions'];

  dataSource=new MatTableDataSource<Material>();

  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator

  constructor(public materialService: MaterialService, private router: Router, private snackBar: MatSnackBar, public dialog:MatDialog) {}

  ngOnInit(): void {
    this.getMaterial()
  }
  getMaterial(){
    this.materialService.list().subscribe(data=>{
      this.dataSource= new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
    })

  }

  delete(idMaterial: any) {
    this.materialService.deleteMaterial(idMaterial).subscribe({
    next: (data) => {
      console.log("eliminando registro..." + idMaterial)
      this.snackBar.open('Material eliminado correctamente', '', {
        duration: 3000
      })
      this.getMaterial()
      this.router.navigate(['/materiallist'])
    },
    error: (err) => {
      console.log(err)
    },
  })
  }

}

