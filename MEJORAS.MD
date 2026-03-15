Análisis Completo: "Planifica Tu Obra"

  ---
  1. PROBLEMAS ACTUALES

  Código

  ┌────────────────────────────┬───────────┬─────────────────────────────────────────────────────────────────────────────┐
  │          Problema          │ Severidad │                                 Descripción                                 │
  ├────────────────────────────┼───────────┼─────────────────────────────────────────────────────────────────────────────┤
  │ Duplicación masiva de HTML │ Alta      │ Los 7 componentes tienen la misma estructura de tabla. Viola DRY totalmente │
  ├────────────────────────────┼───────────┼─────────────────────────────────────────────────────────────────────────────┤
  │ CSS todo global            │ Alta      │ styles.css tiene 380 líneas. Todos los component CSS están vacíos           │
  ├────────────────────────────┼───────────┼─────────────────────────────────────────────────────────────────────────────┤
  │ <th> para datos            │ Media     │ Se usan <th> para celdas de datos en lugar de <td> — no es semántico        │
  ├────────────────────────────┼───────────┼─────────────────────────────────────────────────────────────────────────────┤
  │ Cálculos en el template    │ Media     │ {{elem.cantidad * elem.input}} directo en HTML, sin pipe ni método          │
  ├────────────────────────────┼───────────┼─────────────────────────────────────────────────────────────────────────────┤
  │ Sin interfaces TypeScript  │ Media     │ Los arrays de materiales no tienen tipo definido                            │
  ├────────────────────────────┼───────────┼─────────────────────────────────────────────────────────────────────────────┤
  │ Estilos inline             │ Baja      │ style="--subtle-border-color: #b2b9c7;" en cada tabla                       │
  ├────────────────────────────┼───────────┼─────────────────────────────────────────────────────────────────────────────┤
  │ Sin validación de inputs   │ Baja      │ Sin min="0" ni manejo de valores negativos                                  │
  └────────────────────────────┴───────────┴─────────────────────────────────────────────────────────────────────────────┘

  UI/UX

  ┌──────────────────────────────────────────────────────────┬─────────────────────────────────┐
  │                         Problema                         │             Impacto             │
  ├──────────────────────────────────────────────────────────┼─────────────────────────────────┤
  │ Números sin formatear: 0.515, 38.40                      │ Difícil de leer para el usuario │
  ├──────────────────────────────────────────────────────────┼─────────────────────────────────┤
  │ Sin unidades en algunos totales                          │ Confusión en los resultados     │
  ├──────────────────────────────────────────────────────────┼─────────────────────────────────┤
  │ No hay "Reset" ni feedback visual                        │ UX pobre                        │
  ├──────────────────────────────────────────────────────────┼─────────────────────────────────┤
  │ Barra de "donación" ocupa 200px permanentes              │ Se ve amateur, no profesional   │
  ├──────────────────────────────────────────────────────────┼─────────────────────────────────┤
  │ Todos los calculadores cargados juntos (scroll infinito) │ Navegación terrible             │
  ├──────────────────────────────────────────────────────────┼─────────────────────────────────┤
  │ Sin header ni identidad visual                           │ No tiene marca ni personalidad  │
  ├──────────────────────────────────────────────────────────┼─────────────────────────────────┤
  │ Color gris neutro sin emoción                            │ Aburrido, no evoca construcción │
  └──────────────────────────────────────────────────────────┴─────────────────────────────────┘

  Diseño Visual

  - Paleta sin identidad: gris claro + blanco es demasiado genérico
  - Tipografía plana: Oswald 400 sin variación de peso — sin jerarquía
  - Sin iconografía: las tablas no tienen íconos ni indicadores visuales
  - Layout desequilibrado: sidebar derecha + barra izquierda ocupan 400px fijos del viewport
  - Look de 2015, no de producto 2025

  ---
  2. MEJORAS RÁPIDAS (Quick Wins)

  Estas se pueden implementar en pocas horas y cambian el look radicalmente:

  2.1 — Crear interfaz TypeScript para materiales

  // src/app/models/material.model.ts
  export interface Material {
    nombre: string;
    cantidad: number;
    unidad: 'kg' | 'm³' | 'L';
    input: number;
    medComercial: number;
    labelComercial: string; // 'Bolsas' | 'M³' | 'Litros'
  }

  2.2 — Pipe para formatear números

  // src/app/pipes/decimal-format.pipe.ts
  import { Pipe, PipeTransform } from '@angular/core';

  @Pipe({ name: 'resultado', standalone: true })
  export class ResultadoPipe implements PipeTransform {
    transform(value: number, decimals: number = 2): string {
      if (!value || value === 0) return '—';
      return value.toFixed(decimals);
    }
  }
  En lugar de {{elem.cantidad * elem.input}} → {{elem.cantidad * elem.input | resultado}}

  2.3 — Componente tabla reutilizable

  Actualmente 7 componentes con el mismo HTML. Crear uno solo:

  // src/app/componentes/shared/tabla-materiales/tabla-materiales.component.ts
  @Component({
    selector: 'app-tabla-materiales',
    inputs: ['titulo', 'subtitulo', 'materiales', 'unidadBase'],
    // ...
  })

  2.4 — Routing por calculador

  // app.routes.ts
  export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'contrapiso', loadComponent: () => import('./componentes/contrapiso/contrapiso.component') },
    { path: 'revoque-grueso', loadComponent: () => import(...) },
    // lazy loading para cada calculador
  ];

  2.5 — Paleta de colores de construcción

  Cambiar de grises neutros a una identidad fuerte:

  /* Variables globales - construction brand */
  :root {
    --primary: #D97706;        /* Amber 600 — color casco/obra */
    --primary-dark: #B45309;   /* Amber 700 */
    --primary-light: #FEF3C7;  /* Amber 50 */
    --surface: #FAFAFA;
    --surface-dark: #1C1917;   /* Stone 900 */
    --text-primary: #1C1917;
    --text-muted: #78716C;     /* Stone 500 */
    --accent: #0EA5E9;         /* Sky 500 — para resultados */
    --success: #10B981;        /* Emerald — cuando hay resultado */
    --border: #E7E5E4;         /* Stone 200 */
  }

  ---
  3. REDISEÑO VISUAL SUGERIDO

  Layout Propuesto: Dashboard Side-Nav

  ┌─────────────────────────────────────────────────────────┐
  │  🏗️  PLANIFICA TU OBRA          [🌙 Modo Oscuro]  [👤]  │  ← Header fixo
  ├──────────────┬──────────────────────────────────────────┤
  │              │                                          │
  │  📋 Nav      │   ╔══════════════════════════════════╗   │
  │  ──────────  │   ║  🏠 Contrapiso                   ║   │
  │  ✅ Contrapo │   ║  ─────────────────────────────── ║   │
  │  ○ Carpeta   │   ║  Mezcla con Cal y Cemento         ║   │
  │  ○ Alisado   │   ║                                   ║   │
  │  ○ Mosaicos  │   ║  [INPUT: ¿Cuántos m²?  ]  [ → ]   ║   │
  │  ○ Azotado   │   ║                                   ║   │
  │  ○ Rev.Gru   │   ║  ┌─────────┬──────────┬────────┐  ║   │
  │  ○ Rev.Fino  │   ║  │Material │ Por m²   │ Total  │  ║   │
  │              │   ║  ├─────────┼──────────┼────────┤  ║   │
  │  ──────────  │   ║  │🔷 Cal   │ 81 kg   │ 810 kg │  ║   │
  │  ℹ️ Acerca   │   ║  │🔶 Cemen │ 38.4 kg │ 384 kg │  ║   │
  │  🔗 GitHub   │   ║  │⬛ Arena │ 0.52 m³ │ 5.2 m³ │  ║   │
  │              │   ║  └─────────┴──────────┴────────┘  ║   │
  │              │   ╚══════════════════════════════════╝   │
  │              │                                          │
  │              │   ╔══  Resultado Total  ═════════════╗   │
  │              │   ║  📦 8 Bolsas de Cal               ║   │
  │              │   ║  📦 8 Bolsas de Cemento           ║   │
  │              │   ║  🏗️ 5.2 m³ Arena                 ║   │
  │              │   ╚══════════════════════════════════╝   │
  └──────────────┴──────────────────────────────────────────┘

  Tipografía Recomendada

  <!-- Google Fonts - reemplazar Oswald -->
  <link href="https://fonts.googleapis.com/css2?
    family=Inter:wght@400;500;600;700&
    family=Sora:wght@700;800&
    display=swap" rel="stylesheet">

  ┌──────────────────────────────┬────────┬────────────────────┐
  │             Uso              │ Fuente │        Peso        │
  ├──────────────────────────────┼────────┼────────────────────┤
  │ Títulos principales (H1, H2) │ Sora   │ 700-800            │
  ├──────────────────────────────┼────────┼────────────────────┤
  │ Labels, body, nav            │ Inter  │ 400-600            │
  ├──────────────────────────────┼────────┼────────────────────┤
  │ Números/resultados           │ Inter  │ 700 (tabular-nums) │
  └──────────────────────────────┴────────┴────────────────────┘

  Cards en lugar de Tablas Crudas

  .calculator-card {
    background: white;
    border-radius: 16px;
    border: 1px solid var(--border);
    box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.04);
    padding: 32px;
    margin-bottom: 24px;
    transition: box-shadow 0.2s ease;
  }

  .calculator-card:hover {
    box-shadow: 0 4px 16px rgba(0,0,0,0.10);
  }

  .card-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 24px;
  }

  .card-icon {
    width: 48px;
    height: 48px;
    background: var(--primary-light);
    border-radius: 12px;
    display: grid;
    place-items: center;
    font-size: 24px;
  }

  Input Moderno para m²

  <!-- En lugar de un input pelado en una tabla -->
  <div class="input-area">
    <label>¿Cuántos m² vas a cubrir?</label>
    <div class="input-wrapper">
      <input type="number" min="0" [(ngModel)]="metros" placeholder="Ej: 25">
      <span class="input-unit">m²</span>
    </div>
    <button class="btn-calcular" (click)="calcular()">Calcular</button>
  </div>

  .input-wrapper {
    display: flex;
    align-items: center;
    border: 2px solid var(--border);
    border-radius: 12px;
    overflow: hidden;
    transition: border-color 0.2s;
  }

  .input-wrapper:focus-within {
    border-color: var(--primary);
  }

  .input-wrapper input {
    border: none;
    padding: 14px 16px;
    font-size: 18px;
    font-weight: 600;
    width: 140px;
  }

  .input-unit {
    background: var(--primary-light);
    color: var(--primary-dark);
    padding: 14px 16px;
    font-weight: 700;
  }

  .btn-calcular {
    background: var(--primary);
    color: white;
    border: none;
    padding: 14px 28px;
    border-radius: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s, transform 0.1s;
  }

  .btn-calcular:active { transform: scale(0.97); }

  Resultado Cards (reemplazo de tabla fría)

  .resultado-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 16px;
    margin-top: 24px;
    animation: fadeInUp 0.3s ease;
  }

  .resultado-item {
    background: var(--primary-light);
    border: 1px solid #FDE68A;
    border-radius: 12px;
    padding: 20px;
    text-align: center;
  }

  .resultado-cantidad {
    font-size: 28px;
    font-weight: 700;
    color: var(--primary-dark);
    font-variant-numeric: tabular-nums;
  }

  .resultado-label {
    font-size: 13px;
    color: var(--text-muted);
    margin-top: 4px;
  }

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  ---
  4. MEJORAS PARA LINKEDIN / PORTFOLIO

  Features que te hacen destacar

  A. Calculadora de Costos (★ impacto alto)

  // Agregar precio por unidad
  interface Material {
    // ... existente
    precioPorUnidad?: number; // precio por bolsa o m³
  }
  // → Muestra "Costo estimado: $18,400"

  B. Exportar a PDF

  npm install jspdf jspdf-autotable
  Botón "📄 Exportar Presupuesto" que genera un PDF con todos los cálculos. Esto es muy llamativo para mostrar en LinkedIn.

  C. Historial con LocalStorage

  // Guarda los últimos 5 cálculos
  interface HistorialItem {
    fecha: Date;
    calculador: string;
    metros: number;
    resultados: Material[];
  }

  D. Modo Oscuro

  [data-theme="dark"] {
    --surface: #1C1917;
    --text-primary: #F5F5F4;
    /* etc */
  }
  Toggle con document.documentElement.setAttribute('data-theme', theme)

  E. Comparador de Fórmulas

  En Contrapiso y Revoque Grueso ya tienes 2 fórmulas. Mostrarlas en paralelo con highlighting de cuál usa menos material o es más económica.

  F. Skeleton Loading + Animaciones

  /* Skeleton para cuando se muestra el resultado */
  .skeleton {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
  }

  G. Hero Section con Stats

  <section class="hero">
    <h1>Planifica Tu Obra</h1>
    <p>Calculá materiales de construcción en segundos</p>
    <div class="stats-row">
      <div>7<span>Calculadoras</span></div>
      <div>15+<span>Mezclas</span></div>
      <div>∞<span>Proyectos</span></div>
    </div>
  </section>

  ---
  Plan de Implementación (priorizado)

  ┌───────────┬─────────────────────────────────────────┬────────────────┬──────────┐
  │ Prioridad │                  Tarea                  │ Impacto Visual │ Esfuerzo │
  ├───────────┼─────────────────────────────────────────┼────────────────┼──────────┤
  │ 1         │ Nuevo CSS global (colores + tipografía) │ ⭐⭐⭐⭐⭐     │ Bajo     │
  ├───────────┼─────────────────────────────────────────┼────────────────┼──────────┤
  │ 2         │ Header con logo + sidebar de navegación │ ⭐⭐⭐⭐⭐     │ Bajo     │
  ├───────────┼─────────────────────────────────────────┼────────────────┼──────────┤
  │ 3         │ Calculator cards (reemplazar tablas)    │ ⭐⭐⭐⭐⭐     │ Medio    │
  ├───────────┼─────────────────────────────────────────┼────────────────┼──────────┤
  │ 4         │ Input moderno con unidad                │ ⭐⭐⭐⭐       │ Bajo     │
  ├───────────┼─────────────────────────────────────────┼────────────────┼──────────┤
  │ 5         │ Resultado en cards con animación        │ ⭐⭐⭐⭐⭐     │ Medio    │
  ├───────────┼─────────────────────────────────────────┼────────────────┼──────────┤
  │ 6         │ Componente tabla reutilizable           │ — (refactor)   │ Medio    │
  ├───────────┼─────────────────────────────────────────┼────────────────┼──────────┤
  │ 7         │ Routing lazy + navegación activa        │ ⭐⭐⭐         │ Medio    │
  ├───────────┼─────────────────────────────────────────┼────────────────┼──────────┤
  │ 8         │ Exportar PDF                            │ ⭐⭐⭐⭐⭐     │ Alto     │
  ├───────────┼─────────────────────────────────────────┼────────────────┼──────────┤
  │ 9         │ Calculadora de costos                   │ ⭐⭐⭐⭐       │ Medio    │
  ├───────────┼─────────────────────────────────────────┼────────────────┼──────────┤
  │ 10        │ Dark mode                               │ ⭐⭐⭐⭐       │ Bajo     │
  └───────────┴─────────────────────────────────────────┴────────────────┴──────────┘