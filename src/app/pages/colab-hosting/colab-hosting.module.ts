import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColabHostingRoutingModule } from './colab-hosting-routing.module';
import { ColabHostingComponent } from './colab-hosting.component';
import { DialogModule } from '../../components/dialog/dialog.module';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [ColabHostingComponent],
  imports: [
    CommonModule,
    ColabHostingRoutingModule,
    DialogModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatDividerModule,
    MatExpansionModule,
    MatSelectModule,
    MatProgressSpinnerModule
  ]
})
export class ColabHostingModule { }
