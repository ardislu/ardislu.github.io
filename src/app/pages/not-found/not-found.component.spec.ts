import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { NotFoundComponent } from './not-found.component';
import { NotFoundModule } from './not-found.module';
import { RouterTestingModule } from '@angular/router/testing';
import { MatIconTestingModule } from '@angular/material/icon/testing';

describe('NotFoundComponent', () => {
  let spectator: Spectator<NotFoundComponent>;
  const createComponent = createComponentFactory({
    component: NotFoundComponent,
    imports: [
      NotFoundModule,
      RouterTestingModule,
      MatIconTestingModule
    ],
    declareComponent: false
  })

  beforeEach(() => {
    spectator = createComponent();
  })

  it('should provide an error message', () => {
    expect(spectator.query('mat-card-content')).toHaveText('Use the buttons below to return to safety.');
  })

})