import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SnekComponent } from './snek.component';

const routes: Routes = [{ path: '', component: SnekComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SnekRoutingModule { }
