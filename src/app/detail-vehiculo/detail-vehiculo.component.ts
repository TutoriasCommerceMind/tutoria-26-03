import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehiculosService } from '../vehiculos.service';

@Component({
  selector: 'app-detail-vehiculo',
  templateUrl: './detail-vehiculo.component.html',
  styleUrl: './detail-vehiculo.component.css',
})
export class DetailVehiculoComponent implements OnInit {
  vehiculo: any = {};
  constructor(
    private route: ActivatedRoute,
    private service: VehiculosService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.service.getVehiculoById(params['id']).subscribe((respuesta: any) => {
        this.vehiculo = respuesta?.data;
      });
    });
  }
}
