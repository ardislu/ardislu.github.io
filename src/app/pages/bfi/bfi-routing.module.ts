import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BfiComponent } from './bfi.component';

const routes: Routes = [{ path: '', component: BfiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BfiRoutingModule { }
