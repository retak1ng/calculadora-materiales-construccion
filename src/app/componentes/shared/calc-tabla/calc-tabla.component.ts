import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Material } from '../../../models/material.model';
import { ResultadoPipe } from '../../../pipes/resultado.pipe';

@Component({
  selector: 'app-calc-tabla',
  standalone: true,
  imports: [FormsModule, ResultadoPipe],
  templateUrl: './calc-tabla.component.html',
  styleUrl: './calc-tabla.component.css'
})
export class CalcTablaComponent {
  @Input() subtitulo = '';
  @Input() materiales: Material[] = [];
  @Input() unidadBase: 'm²' | 'm³' = 'm²';

  metros = 0;

  get hasResult(): boolean {
    return this.metros > 0;
  }

  limpiar(): void {
    this.metros = 0;
  }
}
