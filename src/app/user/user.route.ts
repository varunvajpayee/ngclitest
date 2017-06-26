import { Routes, RouterModule }  from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ModuleWithProviders } from '@angular/core';


export const routes: Routes = [
  { path: 'login', component: LoginComponent, children: [   ]},
  { path: 'register', component: RegisterComponent, children: [   ] }
];

export const loginRouting: ModuleWithProviders = RouterModule.forChild(routes);
