import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-alisado-de-cemento-para-piso',
  imports: [FormsModule],
  templateUrl: './alisado-de-cemento-para-piso.component.html',
  styleUrl: './alisado-de-cemento-para-piso.component.css'
})
export class AlisadoDeCementoParaPisoComponent {
  matConcreto = [
    { nombre: '1 Cemento', cantidad: 10.80, unidad: 'kg', input: 0, medComercial: 50 },
    { nombre: '3 Arena', cantidad: 0.024, unidad: 'm³', input: 0, medComercial: 1 },
  ]
}
