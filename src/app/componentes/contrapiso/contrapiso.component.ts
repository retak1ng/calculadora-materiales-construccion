import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contrapiso',
  imports: [FormsModule],
  templateUrl: './contrapiso.component.html',
  styleUrl: './contrapiso.component.css'
})
export class ContrapisoComponent {
  matUsandoCalYCemento = [
    { nombre: '1 Cal', cantidad: 81.00, unidad: 'kg', input: 0, medComercial: 25 },
    { nombre: '1/4 Cemento', cantidad: 38.40, unidad: 'kg', input: 0, medComercial: 50 },
    { nombre: '4 Arena', cantidad: 0.515, unidad: 'm³', input: 0, medComercial: 1 },
    { nombre: '6 Cascote', cantidad: 0.770, unidad: 'm³', input: 0, medComercial: 1 },
  ]

  matUsandoCemento = [
    { nombre: '1 Cemento', cantidad: 108.00, unidad: 'kg', input: 0, medComercial: 50 },
    { nombre: '4 Arena', cantidad: 0.430, unidad: 'm³', input: 0, medComercial: 1 },
    { nombre: '8 Cascote', cantidad: 0.900, unidad: 'm³', input: 0, medComercial: 1 },
  ]
}
