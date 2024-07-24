import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

console.log(routes);  // Añade esto para verificar las rutas

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
});
