import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailVehiculoComponent } from './detail-vehiculo/detail-vehiculo.component';
import { TablaVehiculosComponent } from './tabla-vehiculos/tabla-vehiculos.component';
import { EditVehiculoComponent } from './edit-vehiculo/edit-vehiculo.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailVehiculoComponent,
    TablaVehiculosComponent,
    EditVehiculoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
