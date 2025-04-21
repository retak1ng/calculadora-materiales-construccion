import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-revoque-grueso',
  imports: [FormsModule],
  templateUrl: './revoque-grueso.component.html',
  styleUrl: './revoque-grueso.component.css'
})
export class RevoqueGruesoComponent {
  matUsandoCalYCemento = [
    { nombre: '1 Cal', cantidad: 3.60, unidad: 'kg', input: 0, medComercial: 25 },
    { nombre: '1/4 Cemento', cantidad: 1.85, unidad: 'kg', input: 0, medComercial: 50 },
    { nombre: '3 Arena', cantidad: 0.017, unidad: 'm3', input: 0, medComercial: 1 },
  ]

  matUsandoCemento = [
    { nombre: '1 Cemento', cantidad: 3.80, unidad: 'kg', input: 0, medComercial: 50 },
    { nombre: '5 Arena', cantidad: 0.020, unidad: 'm3', input: 0, medComercial: 1 },
  ]
}
