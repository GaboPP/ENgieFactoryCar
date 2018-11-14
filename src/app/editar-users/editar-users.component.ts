import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {EntradasService} from '../servicios/entradas.service';

@Component({
  selector: 'app-editar-users',
  templateUrl: './editar-users.component.html',
  styleUrls: ['./editar-users.component.css']
})
export class EditarUsersComponent implements OnInit {
  Rut: any; nombre = ''; auto: any;
  constructor(public dialogRef: MatDialogRef<EditarUsersComponent>, private entradasService: EntradasService) { }
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }
  update() {
    this.entradasService.updateEntradaU({'Rut': this.Rut,
    'Nombre': this.nombre, 'Auto': this.auto
      }).subscribe(res => {
      window.alert('Usuario Actualizado con éxito!');
    });
  }
}
