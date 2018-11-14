import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {EntradasService} from '../servicios/entradas.service';

@Component({
  selector: 'app-borrar-auto',
  templateUrl: './borrar-auto.component.html',
  styleUrls: ['./borrar-auto.component.css']
})
export class BorrarAutoComponent implements OnInit {
  i = 0; Usuarios: any = []; j = 0;
  constructor(public dialogRef: MatDialogRef<BorrarAutoComponent>, private entradasService: EntradasService) { }
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }
  private deletea() {
    this.entradasService.getUsers().subscribe(rows => {
      this.Usuarios = rows.data;
      console.log(this.Usuarios);
      for ( this.j = 0; this.j < this.Usuarios.length; this.j++) {
        if (this.Usuarios[this.j].Auto == this.i) {
          this.entradasService.deleteEntradaU({
            'user': this.Usuarios[this.j].Rut}).subscribe(res => {
            });
        }
      }
    this.entradasService.deleteEntradaA({
      'auto': this.i}).subscribe(res => {
        window.alert('Auto eliminado');
      });
    });
  }

}
