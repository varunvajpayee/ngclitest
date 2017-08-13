import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {layoutRouting} from './leftmenu.route';

import {HeaderComponent} from './header.component';
import {LayoutComponent} from './layout.component';
import {LeftmenuComponent} from './leftmenu.component';
import {AlertComponent} from './alert.component';
import {DashboardModule} from '../dashboard/dashboard.module';

import {AlertService} from '../service/alert.service';
import {ContactModule} from '../contact/contact.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardModule,
    ContactModule,
    layoutRouting
  ],
  exports: [LayoutComponent],
  declarations: [HeaderComponent, LayoutComponent, LeftmenuComponent, AlertComponent],
  providers: [AlertService],
})
export class LayoutModule {
}
