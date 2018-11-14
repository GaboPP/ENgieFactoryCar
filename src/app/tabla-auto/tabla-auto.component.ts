import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {EntradasService} from '../servicios/entradas.service';

@Component({
  selector: 'app-tabla-auto',
  templateUrl: './tabla-auto.component.html',
  styleUrls: ['./tabla-auto.component.css']
})
export class TablaAutoComponent implements OnInit {
  Autos: any = [];

  displayedColumns: string[] = ['auto', 'marca', 'modelo', 'anno'];
  dataSource = this.Autos;
  /// new MatTableDataSource<Autos>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private entradasService: EntradasService) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.entradasService.getCars().subscribe(rows => {
      this.Autos = rows.data;
      this.dataSource = this.Autos;
  });
  }

}
