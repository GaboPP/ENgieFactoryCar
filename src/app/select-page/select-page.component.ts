import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-select-page',
  templateUrl: './select-page.component.html',
  styleUrls: ['./select-page.component.css']
})
export class SelectPageComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private _router: Router, private location: Location) { }

  ngOnInit() {
  }

  private goU() {
    this._router.navigate(['/GestionUsers']);
  }
  private goA() {
    this._router.navigate(['/GestionAutos']);

  }

}
