import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { ConfirmationDialogComponent } from './confirmation/confirmation-dialog.component';
import { NotificationDialogComponent } from './notification/notification-dialog.component';

@NgModule({
  declarations: [
    ConfirmationDialogComponent,
    NotificationDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    ConfirmationDialogComponent,
    NotificationDialogComponent
  ]
})
export class DialogModule { }
