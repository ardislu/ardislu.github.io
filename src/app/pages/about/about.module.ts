import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';

import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    NgxSkeletonLoaderModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class AboutModule { }
