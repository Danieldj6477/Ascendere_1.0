import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class CourseListComponent { 
  courses = [
    {
      image: 'ruta/a/la/imagen1.jpg',
      title: 'Curso 1',
      description: 'Descripción del curso 1',
      price: 'Entrar'
    },
    {
      image: 'ruta/a/la/imagen2.jpg',
      title: 'Curso 2',
      description: 'Descripción del curso 2',
      price: '$10.99'
    },
    {
      image: 'ruta/a/la/imagen3.jpg',
      title: 'Curso 3',
      description: 'Descripción del curso 3',
      price: '$15.99'
    }
  ];
}
