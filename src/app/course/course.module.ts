import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {courseRouting} from './course.route'

import { Cfalevel3Component } from './cfalevel3.component';

@NgModule({
  imports: [
    CommonModule,
    courseRouting
  ],
  declarations: [Cfalevel3Component]
})
export class CourseModule { }
