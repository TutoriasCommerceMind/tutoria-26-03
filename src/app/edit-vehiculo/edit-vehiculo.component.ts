import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehiculosService } from '../vehiculos.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-vehiculo',
  templateUrl: './edit-vehiculo.component.html',
  styleUrl: './edit-vehiculo.component.css',
})
export class EditVehiculoComponent implements OnInit {
  vehiculo: any = {};
  form: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private service: VehiculosService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      codigo: [''],
      marca: [''],
      modelo: [''],
      anio: [''],
      kilometraje: [''],
      precio: [''],
      calificacion: [''],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.service.getVehiculoById(params['id']).subscribe((respuesta: any) => {
        this.vehiculo = respuesta?.data;
        this.form = this.fb.group({
          codigo: [this.vehiculo?.codigo],
          marca: [this.vehiculo?.marca],
          modelo: [this.vehiculo?.modelo],
          anio: [this.vehiculo?.anio],
          kilometraje: [this.vehiculo?.kilometraje],
          precio: [this.vehiculo?.precio],
          calificacion: [this.vehiculo?.calificacion],
        });
      });
    });
  }

  updateVehiculo() {
    this.service
      .updateVehiculo(this.vehiculo.codigo, this.form.value)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
