import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carpeta-hidrofuga-sobre-contrapiso',
  imports: [FormsModule],
  templateUrl: './carpeta-hidrofuga-sobre-contrapiso.component.html',
  styleUrl: './carpeta-hidrofuga-sobre-contrapiso.component.css'
})
export class CarpetaHidrofugaSobreContrapisoComponent {
  matConcretoConHidrofugo = [
    { nombre: '1 Cemento', cantidad: 10.30, unidad: 'kg', input: 0, medComercial: 50 },
    { nombre: '3 Arena', cantidad: 0.024, unidad: 'm³', input: 0, medComercial: 1 },
    { nombre: 'Hidrófugo(segun tipo)', cantidad: 0, unidad: 'm³', input: 0, medComercial: 1 },
  ]
}
