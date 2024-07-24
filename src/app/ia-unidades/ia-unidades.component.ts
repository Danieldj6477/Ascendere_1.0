import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ia-unidades',
  templateUrl: './ia-unidades.component.html',
  styleUrls: ['./ia-unidades.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class IaUnidadesComponent {
  activeTab = 'unidad1';
  sections: { [key: string]: boolean } = {
    objetivos: false,
    contenidos: false,
    conceptos: false,
    actividades: false,
    evaluacion: false,
  };

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  toggleSection(section: string) {
    this.sections[section] = !this.sections[section];
  }
}
