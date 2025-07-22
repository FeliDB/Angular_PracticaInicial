import { Routes } from '@angular/router';
import { TemplateComponent } from './pages/template/template.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { Register } from './pages/register/register.component';
import { TableDelivery } from './pages/table-delivery/table-delivery';
import { DeliveryForm } from './pages/delivery-form/delivery-form';
import { TablaZonas } from './pages/tabla-zonas/tablaZonas';
import { FormZonas } from './pages/form-zonas/form-zonas';
import { FormEditZonas } from './pages/form-edit-zonas/form-edit-zonas';
import { FormDeleteZonas } from './pages/form-delete-zonas/form-delete-zonas';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { dashboardGuard } from './pages/dashboard/dashboard.guard';

export const routes: Routes = [
  // Rutas públicas (fuera del layout)
  { path: 'login', component: LoginComponent },
  { path: 'register', component: Register },

  // Rutas con layout (TemplateComponent)
  {
    path: '',
    component: TemplateComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'dashboard', component: DashboardComponent, canActivate: [dashboardGuard] },
      { path: 'ver-zonas', component: TablaZonas },
      { path: 'agregar-zona', component: FormZonas },
      { path: 'editar-zona', component: FormEditZonas },
      { path: 'borrar-zona', component: FormDeleteZonas },
      { path: 'table-delivery', component: TableDelivery },
      { path: 'delivery-form', component: DeliveryForm },
      { path: 'zonas-form', component: FormZonas }
    ]
  },

  // Ruta comodín por si no se encuentra ninguna (opcional)
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
