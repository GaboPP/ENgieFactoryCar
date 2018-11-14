import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SelectPageComponent} from '../app/select-page/select-page.component';
import {GautosComponent} from '../app/gautos/gautos.component';
import {GusersComponent} from '../app/gusers/gusers.component';

const routes: Routes = [{path: '', component: SelectPageComponent},
{path: 'GestionAutos', component: GautosComponent},
{path: 'GestionUsers', component: GusersComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
