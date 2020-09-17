import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { DialogModule } from '../../components/dialog/dialog.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';


@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    DialogModule,
    NgxSkeletonLoaderModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
