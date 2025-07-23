import { Routes } from '@angular/router';
import { TemplateComponent } from './pages/template/template.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { TablaZonas } from './pages/tabla-zonas/tablaZonas';
import { FormZonas } from './pages/form-zonas/form-zonas';


import { TableDelivery } from './pages/table-delivery/table-delivery';
import { DeliveryForm } from './pages/delivery-form/delivery-form';

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
      { path: 'table-zone', component: TablaZonas },
      { path: 'zone-form', component: FormZonas },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'table-delivery', component: TableDelivery },
  { path: 'delivery-form', component:  DeliveryForm},
];
