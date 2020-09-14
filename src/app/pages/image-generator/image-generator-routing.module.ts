import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageGeneratorComponent } from './image-generator.component';

const routes: Routes = [{ path: '', component: ImageGeneratorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImageGeneratorRoutingModule { }
