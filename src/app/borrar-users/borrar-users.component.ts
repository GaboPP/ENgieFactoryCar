import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {EntradasService} from '../servicios/entradas.service';

@Component({
  selector: 'app-borrar-users',
  templateUrl: './borrar-users.component.html',
  styleUrls: ['./borrar-users.component.css']
})
export class BorrarUsersComponent {
  i = 0;
  constructor(public dialogRef: MatDialogRef<BorrarUsersComponent>, private entradasService: EntradasService) { }
  onNoClick(): void {
    this.dialogRef.close();
  }

  private deleteu() {
    console.log(this.i);
    this.entradasService.deleteEntradaU({
      'user': this.i}).subscribe(res => {
        window.alert('Usuario eliminado');
      });
  }
}
