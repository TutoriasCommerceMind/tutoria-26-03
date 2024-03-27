import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VehiculosService {
  url: string = 'https://epico.gob.ec/vehiculo/public/api/';
  constructor(private http: HttpClient) {}

  getVehiculos() {
    return this.http.get(this.url + 'vehiculos/');
  }

  postVehiculo(vehiculo: any) {
    return this.http.post(this.url + 'vehiculo/', vehiculo);
  }

  deleteVehiculo(id: string) {
    return this.http.delete(this.url + 'vehiculo/' + id);
  }

  getVehiculoById(id: string) {
    return this.http.get(this.url + 'vehiculo/' + id);
  }

  updateVehiculo(id: string, vehiculo: any) {
    return this.http.put(this.url + 'vehiculo/' + id, vehiculo);
  }
}
