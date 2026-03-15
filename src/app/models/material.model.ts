export interface Material {
  nombre: string;
  cantidad: number;
  unidad: 'kg' | 'm³' | 'm²' | 'L';
  medComercial: number;
}
