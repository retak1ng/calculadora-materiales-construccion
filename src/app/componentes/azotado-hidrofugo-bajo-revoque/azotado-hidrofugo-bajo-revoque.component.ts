import { Component } from '@angular/core';
import { CalcTablaComponent } from '../shared/calc-tabla/calc-tabla.component';
import { Material } from '../../models/material.model';

@Component({
  selector: 'app-azotado-hidrofugo-bajo-revoque',
  standalone: true,
  imports: [CalcTablaComponent],
  templateUrl: './azotado-hidrofugo-bajo-revoque.component.html',
  styleUrl: './azotado-hidrofugo-bajo-revoque.component.css'
})
export class AzotadoHidrofugoBajoRevoqueComponent {
  matConcretoConHidrofugo: Material[] = [
    { nombre: 'Cemento', cantidad: 2.7, unidad: 'kg', medComercial: 50 },
    { nombre: 'Arena', cantidad: 0.006, unidad: 'm³', medComercial: 1 },
    { nombre: 'Hidrófugo', cantidad: 0, unidad: 'kg', medComercial: 1 },
  ];
}
