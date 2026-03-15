import { Component } from '@angular/core';
import { CalcTablaComponent } from '../shared/calc-tabla/calc-tabla.component';
import { Material } from '../../models/material.model';

@Component({
  selector: 'app-colocacion-de-mosaicos-y-baldosas',
  standalone: true,
  imports: [CalcTablaComponent],
  templateUrl: './colocacion-de-mosaicos-y-baldosas.component.html',
  styleUrl: './colocacion-de-mosaicos-y-baldosas.component.css'
})
export class ColocacionDeMosaicosYBaldosasComponent {
  matUsandoCalYCemento: Material[] = [
    { nombre: 'Cal Aérea', cantidad: 5.90, unidad: 'kg', medComercial: 25 },
    { nombre: 'Cemento', cantidad: 3.10, unidad: 'kg', medComercial: 50 },
    { nombre: 'Arena', cantidad: 0.030, unidad: 'm³', medComercial: 1 },
  ];
}
