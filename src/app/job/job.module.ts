import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {JobsRouting} from './job.route'

import { JobsComponent } from './job.component';

@NgModule({
  imports: [
    CommonModule,
    JobsRouting
  ],
  declarations: [JobsComponent]
})
export class JobsModule { }
