import { Component } from '@angular/core';
import { CalcTablaComponent } from '../shared/calc-tabla/calc-tabla.component';
import { Material } from '../../models/material.model';

@Component({
  selector: 'app-contrapiso',
  standalone: true,
  imports: [CalcTablaComponent],
  templateUrl: './contrapiso.component.html',
  styleUrl: './contrapiso.component.css'
})
export class ContrapisoComponent {
  matCalYCemento: Material[] = [
    { nombre: 'Cal', cantidad: 81.00, unidad: 'kg', medComercial: 25 },
    { nombre: 'Cemento', cantidad: 38.40, unidad: 'kg', medComercial: 50 },
    { nombre: 'Arena', cantidad: 0.515, unidad: 'm³', medComercial: 1 },
    { nombre: 'Cascote', cantidad: 0.770, unidad: 'm³', medComercial: 1 },
  ];

  matCemento: Material[] = [
    { nombre: 'Cemento', cantidad: 108.00, unidad: 'kg', medComercial: 50 },
    { nombre: 'Arena', cantidad: 0.430, unidad: 'm³', medComercial: 1 },
    { nombre: 'Cascote', cantidad: 0.900, unidad: 'm³', medComercial: 1 },
  ];
}
