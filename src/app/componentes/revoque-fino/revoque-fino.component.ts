import { Component } from '@angular/core';
import { CalcTablaComponent } from '../shared/calc-tabla/calc-tabla.component';
import { Material } from '../../models/material.model';

@Component({
  selector: 'app-revoque-fino',
  standalone: true,
  imports: [CalcTablaComponent],
  templateUrl: './revoque-fino.component.html',
  styleUrl: './revoque-fino.component.css'
})
export class RevoqueFinoComponent {
  matUsandoCalYCemento: Material[] = [
    { nombre: 'Cal', cantidad: 1.60, unidad: 'kg', medComercial: 25 },
    { nombre: 'Cemento', cantidad: 0.45, unidad: 'kg', medComercial: 50 },
    { nombre: 'Arena', cantidad: 0.006, unidad: 'm³', medComercial: 1 },
  ];
}
