import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {EntradasService} from '../servicios/entradas.service';

export interface Usuarios {
  Rut: number;
  Nombre: string;
  Auto: string;
}

const ELEMENT_DATA: Usuarios[] = [
  {Rut: 1, Nombre: 'inicial', Auto: 'chevrolet corsa 2017'},
  {Rut: 2, Nombre: 'inicial2', Auto: 'chevrolet camaro 2017'},
];


@Component({
  selector: 'app-tabla-user',
  templateUrl: './tabla-user.component.html',
  styleUrls: ['./tabla-user.component.css']
})
export class TablaUserComponent implements OnInit {
  Users: any = [];
  Autos: any = [];
  i = 0; j = 0;
  displayedColumns: string[] = ['Rut', 'Nombre', 'Auto'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  applyFilter(filterValue: string) {
    console.log(filterValue.trim().toLowerCase());
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSource.filter);
    console.log(this.dataSource);
  }

  constructor(private entradasService: EntradasService) { }

  ngOnInit() {
    this.entradasService.getUsers().subscribe(rows => {
      this.Users = rows.data;
      this.entradasService.getCars().subscribe(row => {
        this.Autos = row.data;
        for (this.i; this.i < this.Users.length; this.i++) {
          for (this.j; this.j < this.Users.length; this.j++) {
            if ( this.Users[this.i].Auto ==  this.Autos[this.j].auto) {
              this.Users[this.i].Auto = this.Autos[this.j].marca + ' ' + this.Autos[this.j].modelo + ' ' + this.Autos[this.j].anno;
            }
          }
          this.j = 0;
        }
        this.dataSource.data = this.Users;
      });
      });
  }

}
