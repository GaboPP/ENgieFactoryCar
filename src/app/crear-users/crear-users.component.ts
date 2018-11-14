import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';
import {EntradasService} from '../servicios/entradas.service';

export interface Auto {
  auto: number;
  marca: string;
  modelo: string;
  anno: number;
}
@Component({
  selector: 'app-crear-users',
  templateUrl: './crear-users.component.html',
  styleUrls: ['./crear-users.component.css']
})
export class CrearUsersComponent implements OnInit {
  autoControl = new FormControl('', [Validators.required]);
  selectFormControl = new FormControl('', Validators.required);
  autoss: any;
  autos: Auto[] = [
    {auto: 1, marca: 'chevrolet', modelo: 'coa', anno: 2015},
    {auto: 2, marca: 'chevrolet', modelo: 'corsa', anno: 2017},
  ];
  Rut: any; nombre = ''; car: any;
  constructor(public dialogRef: MatDialogRef<CrearUsersComponent>, private entradasService: EntradasService) {}

  onNoClick(): void {
      this.dialogRef.close();
  }
  ngOnInit() {
    this.entradasService.getCars().subscribe( rows => {
      this.autos = rows.data;
    });
  }
  crear() {
    console.log(this.nombre);
    this.entradasService.insertEntradaU({
      'Rut': this.Rut, 'Nombre': this.nombre, 'Auto': this.car.auto
        }).subscribe(res => {
        window.alert('Auto insertado con éxito');
      });
  }

}
