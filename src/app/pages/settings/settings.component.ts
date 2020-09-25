import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { ThemeService } from '../../services/theme.service';
import { BaseTheme } from '../../models/theme.model';

import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogData, ConfirmationDialogComponent } from '../../components/dialog/confirmation/confirmation-dialog.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  public themeList$!: Observable<BaseTheme[]>;
  public themeSelection!: BaseTheme;

  constructor(public auth: AuthService, public theme: ThemeService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.themeList$ = this.theme.list();
    this.themeSelection = this.theme.selectedTheme;
  }

  logout(): void {
    const data: ConfirmationDialogData = {
      title: 'Logout?',
      body: 'Are you sure you want to logout?',
      confirmButtonText: 'LOGOUT',
      rejectButtonText: 'CANCEL'
    };
    const confirmationDialog = this.dialog.open(ConfirmationDialogComponent, { data });
    confirmationDialog.afterClosed().subscribe((confirmed: boolean) => { if (confirmed) { this.auth.logout(); } });
  }

}
