import { Routes } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { IAComponent } from './ia/ia.component';
import { IaUnidadesComponent } from './ia-unidades/ia-unidades.component';

export const routes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: 'courses', component: CourseListComponent },
  { path: 'ia', component: IAComponent },
  { path: 'ia-unidades', component: IaUnidadesComponent }
];


