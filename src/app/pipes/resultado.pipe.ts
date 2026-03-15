import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resultado',
  standalone: true
})
export class ResultadoPipe implements PipeTransform {
  transform(value: number, decimals: number = 2): string {
    if (!value || value === 0) return '—';
    return parseFloat(value.toFixed(decimals)).toString();
  }
}
