import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {EntradasService} from '../servicios/entradas.service';

@Component({
  selector: 'app-editar-auto',
  templateUrl: './editar-auto.component.html',
  styleUrls: ['./editar-auto.component.css']
})
export class EditarAutoComponent implements OnInit {
  Modelo = ''; anno = 0; Marca = ''; auto: any;
  constructor(public dialogRef: MatDialogRef<EditarAutoComponent>, private entradasService: EntradasService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  update() {
    this.entradasService.updateEntradaA({'auto': this.auto,
    'marca': this.Marca, 'modelo': this.Modelo, 'anno': this.anno
      }).subscribe(res => {
      window.alert('Auto Actualizado con éxito!');
    });
  }

}
