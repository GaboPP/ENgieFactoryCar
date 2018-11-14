import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class EntradasService {

  constructor(private http: Http) { }
  getCars() {
    return this.http.get('/api/entradas').map(res => res.json());
  }
  getUsers() {
    return this.http.get('/api/entradas/users').map(res => res.json());
  }
  deleteEntradaA(data) {
    return this.http.post('/api/delauto', data).map(res => res.json());
  }
  deleteEntradaU(data) {
    return this.http.post('/api/deluser', data).map(res => res.json());
  }
  insertEntradaA(data) {
    return this.http.post('/api/insautos', data).map(res => res.json());
  }
  insertEntradaU(data) {
    return this.http.post('/api/insusers', data).map(res => res.json());
  }
  updateEntradaA(data) {
    return this.http.post('/api/updautos', data).map(res => res.json());
  }
  updateEntradaU(data) {
    return this.http.post('/api/updusers', data).map(res => res.json());
  }
}
