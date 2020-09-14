import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { NotificationDialogComponent } from './notification-dialog.component';

@NgModule({
  declarations: [
    NotificationDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    NotificationDialogComponent
  ]
})
export class NotificationDialogModule { }
