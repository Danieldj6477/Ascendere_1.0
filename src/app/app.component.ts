import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CourseListComponent } from './course-list/course-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, CourseListComponent]
})
export class AppComponent {
  title = 'curso-autoinstruccional';
}
