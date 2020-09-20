import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BfiRoutingModule } from './bfi-routing.module';
import { BfiComponent } from './bfi.component';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [BfiComponent],
  imports: [
    CommonModule,
    BfiRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class BfiModule { }
