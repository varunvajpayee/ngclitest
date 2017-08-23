import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactusRouting} from './contactus.route'

import { ContactusComponent } from './contactus.component';

@NgModule({
  imports: [
    CommonModule,
    ContactusRouting
  ],
  declarations: [ContactusComponent]
})
export class ContactusModule { }
