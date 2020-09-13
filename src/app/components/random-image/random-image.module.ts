import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RandomImageComponent } from './random-image.component';

@NgModule({
  declarations: [
    RandomImageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RandomImageComponent
  ]
})
export class RandomImageModule { }
