import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SnakeGameComponent } from 'src/app/components/snake-game/snake-game.component';

@Component({
  selector: 'app-snek',
  templateUrl: './snek.component.html',
  styleUrls: ['./snek.component.scss']
})
export class SnekComponent implements OnInit {
  @ViewChild('game', { static: true }) game!: SnakeGameComponent;

  public gameGrid = 10;
  public gameWidth = 25;
  public gameHeight = 25;
  public gameScore = 0;

  constructor() { }

  ngOnInit(): void { }

  restart(): void {
    this.gameScore = 0;
    this.game.ngOnInit();
  }

}
