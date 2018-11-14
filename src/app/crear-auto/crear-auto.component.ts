import { Component} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {EntradasService} from '../servicios/entradas.service';


@Component({
  selector: 'app-crear-auto',
  templateUrl: './crear-auto.component.html',
  styleUrls: ['./crear-auto.component.css']
})
export class CrearAutoComponent {
  Modelo = ""; anno = 0; Marca = "";
  constructor(public dialogRef: MatDialogRef<CrearAutoComponent>, private entradasService: EntradasService) {}

  onNoClick(): void {
      this.dialogRef.close();
  }

  crear(): void {
    this.entradasService.getCars().subscribe(rows => {
      console.log(rows.data.length);
      this.entradasService.insertEntradaA({'auto': (rows.data.length + 1),
      'marca': this.Marca, 'modelo': this.Modelo, 'anno': this.anno
        }).subscribe(res => {
        window.alert('Auto insertado con éxito');
      });
    });
  }

}
