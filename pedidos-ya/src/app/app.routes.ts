import { Routes } from '@angular/router';
import { TemplateComponent } from './pages/template/template.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
<<<<<<< HEAD
import { Register } from './pages/register/register.component';
=======
import { TableDelivery } from './pages/table-delivery/table-delivery';
import { DeliveryForm } from './pages/delivery-form/delivery-form';
>>>>>>> origin/felipe

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
<<<<<<< HEAD
  { path: 'register', component: Register },
=======
  { path: 'table-delivery', component: TableDelivery },
  { path: 'delivery-form', component:  DeliveryForm},
>>>>>>> origin/felipe
];
