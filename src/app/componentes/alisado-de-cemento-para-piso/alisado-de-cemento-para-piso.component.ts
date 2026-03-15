import { Component } from '@angular/core';
import { CalcTablaComponent } from '../shared/calc-tabla/calc-tabla.component';
import { Material } from '../../models/material.model';

@Component({
  selector: 'app-alisado-de-cemento-para-piso',
  standalone: true,
  imports: [CalcTablaComponent],
  templateUrl: './alisado-de-cemento-para-piso.component.html',
  styleUrl: './alisado-de-cemento-para-piso.component.css'
})
export class AlisadoDeCementoParaPisoComponent {
  matConcreto: Material[] = [
    { nombre: 'Cemento', cantidad: 10.80, unidad: 'kg', medComercial: 50 },
    { nombre: 'Arena', cantidad: 0.024, unidad: 'm³', medComercial: 1 },
  ];
}
