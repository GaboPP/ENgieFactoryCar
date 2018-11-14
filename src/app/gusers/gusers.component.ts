import { Component, OnInit } from '@angular/core';
import {CrearUsersComponent} from '../crear-users/crear-users.component';
import {EditarUsersComponent} from '../editar-users/editar-users.component';
import {BorrarUsersComponent} from '../borrar-users/borrar-users.component';
import {MatDialog} from '@angular/material';


@Component({
  selector: 'app-gusers',
  templateUrl: './gusers.component.html',
  styleUrls: ['./gusers.component.css']
})
export class GusersComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  crearuser(): void {
    const dialogRef = this.dialog.open(CrearUsersComponent, {
      width: '20%',
    });
  }
  edituser(): void {
    const dialogRef = this.dialog.open(EditarUsersComponent, {
      width: '40%',
    });
  }
  deleteuser(): void {
    const dialogRef = this.dialog.open(BorrarUsersComponent, {
      width: '20%',
    });
  }

}
