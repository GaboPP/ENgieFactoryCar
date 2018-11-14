import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {CrearAutoComponent} from '../crear-auto/crear-auto.component';
import {EditarAutoComponent} from '../editar-auto/editar-auto.component';
import {BorrarAutoComponent} from '../borrar-auto/borrar-auto.component';


@Component({
  selector: 'app-gautos',
  templateUrl: './gautos.component.html',
  styleUrls: ['./gautos.component.css']
})
export class GautosComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  crearAuto(): void {
    const dialogRef = this.dialog.open(CrearAutoComponent, {
      width: '20%',
    });
  }
  editAuto(): void {
    const dialogRef = this.dialog.open(EditarAutoComponent, {
      width: '40%',
    });
  }
  deleteAuto(): void {
    const dialogRef = this.dialog.open(BorrarAutoComponent, {
      width: '21%',
    });
  }
}
