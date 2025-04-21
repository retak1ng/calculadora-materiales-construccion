import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-revoque-fino',
  imports: [FormsModule],
  templateUrl: './revoque-fino.component.html',
  styleUrl: './revoque-fino.component.css'
})
export class RevoqueFinoComponent {
  matUsandoCalYCemento = [
    { nombre: '1 Cal', cantidad: 1.60, unidad: 'kg', input: 0, medComercial: 25 },
    { nombre: '1/8 Cemento', cantidad: 0.45, unidad: 'kg', input: 0, medComercial: 50 },
    { nombre: '2 Arena', cantidad: 0.006, unidad: 'm³', input: 0, medComercial: 1 },
  ]
}
