import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailVehiculoComponent } from './detail-vehiculo/detail-vehiculo.component';
import { TablaVehiculosComponent } from './tabla-vehiculos/tabla-vehiculos.component';
import { EditVehiculoComponent } from './edit-vehiculo/edit-vehiculo.component';

const routes: Routes = [
  {
    path: 'detalle/:id',
    component: DetailVehiculoComponent,
  },
  {
    path: '',
    component: TablaVehiculosComponent,
  },
  {
    path: 'editar/:id',
    component: EditVehiculoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
