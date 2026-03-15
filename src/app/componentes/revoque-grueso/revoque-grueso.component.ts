import { Component } from '@angular/core';
import { CalcTablaComponent } from '../shared/calc-tabla/calc-tabla.component';
import { Material } from '../../models/material.model';

@Component({
  selector: 'app-revoque-grueso',
  standalone: true,
  imports: [CalcTablaComponent],
  templateUrl: './revoque-grueso.component.html',
  styleUrl: './revoque-grueso.component.css'
})
export class RevoqueGruesoComponent {
  matUsandoCalYCemento: Material[] = [
    { nombre: 'Cal', cantidad: 3.60, unidad: 'kg', medComercial: 25 },
    { nombre: 'Cemento', cantidad: 1.85, unidad: 'kg', medComercial: 50 },
    { nombre: 'Arena', cantidad: 0.017, unidad: 'm³', medComercial: 1 },
  ];

  matUsandoCemento: Material[] = [
    { nombre: 'Cemento', cantidad: 3.80, unidad: 'kg', medComercial: 50 },
    { nombre: 'Arena', cantidad: 0.020, unidad: 'm³', medComercial: 1 },
  ];
}
