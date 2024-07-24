import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ia',
  templateUrl: './ia.component.html',
  styleUrls: ['./ia.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class IAComponent {
  activeTab = 'resultados';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
