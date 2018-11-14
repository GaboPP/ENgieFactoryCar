import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectPageComponent } from './select-page/select-page.component';

import { HttpModule } from '@angular/http';
import { EntradasService } from './servicios/entradas.service';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';

import { GautosComponent } from './gautos/gautos.component';
import { GusersComponent } from './gusers/gusers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CrearAutoComponent } from './crear-auto/crear-auto.component';
import { EditarAutoComponent } from './editar-auto/editar-auto.component';
import { BorrarAutoComponent } from './borrar-auto/borrar-auto.component';
import { TablaAutoComponent } from './tabla-auto/tabla-auto.component';
import { TablaUserComponent } from './tabla-user/tabla-user.component';
import { CrearUsersComponent } from './crear-users/crear-users.component';
import { BorrarUsersComponent } from './borrar-users/borrar-users.component';
import { EditarUsersComponent } from './editar-users/editar-users.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectPageComponent,
    GautosComponent,
    GusersComponent,
    NavbarComponent,
    TablaAutoComponent,
    CrearAutoComponent,
    EditarAutoComponent,
    BorrarAutoComponent,
    TablaUserComponent,
    CrearUsersComponent,
    BorrarUsersComponent,
    EditarUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    HttpModule,
    MatPaginatorModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDividerModule
  ],
  entryComponents:[
    CrearAutoComponent,
    EditarAutoComponent,
    BorrarAutoComponent,
    CrearUsersComponent,
    EditarUsersComponent,
    BorrarUsersComponent
  ],
  providers: [EntradasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
