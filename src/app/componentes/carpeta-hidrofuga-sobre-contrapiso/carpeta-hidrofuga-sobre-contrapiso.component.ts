import { Component } from '@angular/core';
import { CalcTablaComponent } from '../shared/calc-tabla/calc-tabla.component';
import { Material } from '../../models/material.model';

@Component({
  selector: 'app-carpeta-hidrofuga-sobre-contrapiso',
  standalone: true,
  imports: [CalcTablaComponent],
  templateUrl: './carpeta-hidrofuga-sobre-contrapiso.component.html',
  styleUrl: './carpeta-hidrofuga-sobre-contrapiso.component.css'
})
export class CarpetaHidrofugaSobreContrapisoComponent {
  matConcretoConHidrofugo: Material[] = [
    { nombre: 'Cemento', cantidad: 10.30, unidad: 'kg', medComercial: 50 },
    { nombre: 'Arena', cantidad: 0.024, unidad: 'm³', medComercial: 1 },
    { nombre: 'Hidrófugo', cantidad: 0, unidad: 'kg', medComercial: 1 },
  ];
}
