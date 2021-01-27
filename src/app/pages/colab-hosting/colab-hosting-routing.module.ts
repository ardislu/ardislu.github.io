import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColabHostingComponent } from './colab-hosting.component';

const routes: Routes = [{ path: '', component: ColabHostingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColabHostingRoutingModule { }
