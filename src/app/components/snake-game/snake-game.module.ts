import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SnakeGameComponent } from './snake-game.component';

@NgModule({
  declarations: [
    SnakeGameComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SnakeGameComponent
  ]
})
export class SnakeGameModule { }
