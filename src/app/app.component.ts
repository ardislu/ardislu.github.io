import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ardis-lu-frontend';

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('logo', sanitizer.bypassSecurityTrustResourceUrl('../assets/images/logo.svg'));
    iconRegistry.addSvgIcon('text_snippet', sanitizer.bypassSecurityTrustResourceUrl('../assets/images/text_snippet.svg'));
    iconRegistry.addSvgIcon('email', sanitizer.bypassSecurityTrustResourceUrl('../assets/images/email.svg'));
    iconRegistry.addSvgIcon('linkedin', sanitizer.bypassSecurityTrustResourceUrl('../assets/images/linkedin.svg'));
    iconRegistry.addSvgIcon('github', sanitizer.bypassSecurityTrustResourceUrl('../assets/images/github.svg'));
    iconRegistry.addSvgIcon('keyboard_arrow_right', sanitizer.bypassSecurityTrustResourceUrl('../assets/images/keyboard_arrow_right.svg'));
  }
}
