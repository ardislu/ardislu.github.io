import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogData, ConfirmationDialogComponent } from '../../components/dialog/confirmation/confirmation-dialog.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(public auth: AuthService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  logout(): void {
    const data: ConfirmationDialogData = {
      title: 'Logout?',
      body: 'Are you sure you want to logout?',
      confirmButtonText: 'Yes',
      rejectButtonText: 'No'
    };
    const confirmationDialog = this.dialog.open(ConfirmationDialogComponent, { data });
    confirmationDialog.afterClosed().subscribe((confirmed: boolean) => { if (confirmed) { this.auth.logout(); } });
  }

}
