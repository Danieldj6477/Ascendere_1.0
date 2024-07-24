import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class CourseListComponent { 
  courses = [
    {
      image: 'assets/images/curso1.jpg',
      title: 'Creación de contenidos educativos utilizando la Inteligencia Artificial',
      description: 'Aprende a desarrollar contenidos educativos innovadores y efectivos utilizando herramientas y técnicas de inteligencia artificial.',
      boton: 'Entrar'
    },
    {
      image: 'assets/images/imagen2.jpg',
      title: 'Curso 2',
      description: 'Descripción del curso 2',
      boton: '$10.99'
    },
    {
      image: 'assets/images/imagen3.jpg',
      title: 'Curso 3',
      description: 'Descripción del curso 3',
      boton: '$15.99'
    }
  ];
}
