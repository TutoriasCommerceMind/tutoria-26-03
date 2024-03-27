import { Component, OnInit } from '@angular/core';
import { VehiculosService } from '../vehiculos.service';
@Component({
  selector: 'app-tabla-vehiculos',
  templateUrl: './tabla-vehiculos.component.html',
  styleUrl: './tabla-vehiculos.component.css',
})
export class TablaVehiculosComponent implements OnInit {
  vehiculos: any = [];
  marca = '';
  codigo = '';

  constructor(private service: VehiculosService) {}

  ngOnInit(): void {
    this.getVehiculos();
  }

  getVehiculos() {
    this.service.getVehiculos().subscribe((respuesta: any) => {
      this.vehiculos = respuesta?.data;
    });
  }

  crearVehiculo() {
    const nuevoVehiculo = {
      codigo: this.codigo,
      marca: this.marca,
      modelo: 'camaro',
      anio: '2010',
      kilometraje: 100,
      precio: 2000,
      calificacion: 5,
    };

    this.service.postVehiculo(nuevoVehiculo).subscribe((respuesta: any) => {
      console.log(respuesta);
      this.getVehiculos();
    });
  }

  deleteVehiculo(id: string) {
    this.service.deleteVehiculo(id).subscribe((respuesta: any) => {
      console.log(respuesta);
      this.getVehiculos();
    });
  }
}
