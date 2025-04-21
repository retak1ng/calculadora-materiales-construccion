import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-azotado-hidrofugo-bajo-revoque',
  imports: [FormsModule],
  templateUrl: './azotado-hidrofugo-bajo-revoque.component.html',
  styleUrl: './azotado-hidrofugo-bajo-revoque.component.css'
})
export class AzotadoHidrofugoBajoRevoqueComponent {
  matConcretoConHidrofugo = [
    { nombre: '1 Cemento', cantidad: 2.7, unidad: 'kg', input: 0, medComercial: 50 },
    { nombre: '3 Arena', cantidad: 0.006, unidad: 'm³', input: 0, medComercial: 1 },
    { nombre: 'Hidrófugo(segun tipo)', cantidad: 0, unidad: 'm³', input: 0, medComercial: 1 },
  ]
}
