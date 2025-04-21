import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-colocacion-de-mosaicos-y-baldosas',
  imports: [FormsModule],
  templateUrl: './colocacion-de-mosaicos-y-baldosas.component.html',
  styleUrl: './colocacion-de-mosaicos-y-baldosas.component.css'
})
export class ColocacionDeMosaicosYBaldosasComponent {
  matUsandoCalYCemento = [
    { nombre: '1 Cal Aérea', cantidad: 5.90, unidad: 'kg', input: 0, medComercial: 25 },
    { nombre: '1/4 Cemento', cantidad: 3.10, unidad: 'kg', input: 0, medComercial: 50 },
    { nombre: '3 Arena', cantidad: 0.030, unidad: 'm³', input: 0, medComercial: 1 },
  ]
}
