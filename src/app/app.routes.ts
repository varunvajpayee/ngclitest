import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from "@angular/core";
import {PageNotFoundComponent} from './not-found.component';
import { ContactusComponent } from './contactus/contactus.component';

export const appRoutes: Routes = [
  { path: '',
    loadChildren:'app/layout/layout.module#LayoutModule'
    , pathMatch: 'full'
  },{
    path:'contactus1',
    component:ContactusComponent
  },
  { path: '**', component: PageNotFoundComponent }
];

export const appRoutingProviders:any[]=[];

export const routing: ModuleWithProviders=RouterModule.forRoot(appRoutes);
