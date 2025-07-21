import { Routes } from '@angular/router';
import { TemplateComponent } from './pages/template/template.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
<<<<<<< HEAD
import { TablaZonas } from './pages/tabla-zonas/tablaZonas';
import { FormZonas } from './pages/form-zonas/form-zonas';
import { FormEditZonas } from './pages/form-edit-zonas/form-edit-zonas';
import { FormDeleteZonas } from './pages/form-delete-zonas/form-delete-zonas';


=======
import { TableDelivery } from './pages/table-delivery/table-delivery';
import { DeliveryForm } from './pages/delivery-form/delivery-form';
>>>>>>> origin/felipe

export const routes: Routes = [
  {
    path: '',
    component: TemplateComponent,
    canActivate: [],
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      { path: 'ver-zonas', component: TablaZonas },
      { path: 'agregar-zona', component: FormZonas },
      { path: 'editar-zona', component: FormEditZonas },
      { path: 'borrar-zona', component: FormDeleteZonas },

    ],
  },
  { path: 'login', component: LoginComponent },
<<<<<<< HEAD


=======
  { path: 'table-delivery', component: TableDelivery },
  { path: 'delivery-form', component:  DeliveryForm},
>>>>>>> origin/felipe
];
