import { Routes } from '@angular/router';
import { TemplateComponent } from './pages/template/template.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { tabla-zonas } from './pages/tabla-zonas/tabla-zonas';
import { FormZonas } from './pages/form-zonas/form-zonas';

export const routes: Routes = [
  {
    path: '',
    component: TemplateComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'tabla-zonas', component: tabla-zonas   },
  { path: 'formulario-zonas', component: FormZonas   },

];
