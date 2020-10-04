import { Component, OnInit, ViewChild } from '@angular/core';
import { SnakeGameComponent } from 'src/app/components/snake-game/snake-game.component';

@Component({
  selector: 'app-snek',
  templateUrl: './snek.component.html',
  styleUrls: ['./snek.component.scss']
})
export class SnekComponent implements OnInit {
  @ViewChild('game', { static: true }) game!: SnakeGameComponent;

  private minGrids = 10; // At least this many squares in any direction
  private actualWidth = 500;
  private actualHeight = 500;

  public gameGrid = this.actualWidth / this.minGrids;
  public gameWidth = this.actualWidth / this.gameGrid;
  public gameHeight = this.actualHeight / this.gameGrid;
  public gameScore = 0;

  constructor() { }

  ngOnInit(): void {
    this.actualWidth = Math.min(window.innerWidth * 0.75, 1080);
    this.actualHeight = Math.min(window.innerHeight * 0.4, 1080);

    this.gameGrid = Math.floor(Math.min(this.actualWidth, this.actualHeight) / this.minGrids);

    this.actualWidth -= this.actualWidth % this.gameGrid;
    this.actualHeight -= this.actualHeight % this.gameGrid;

    this.gameWidth = this.actualWidth / this.gameGrid;
    this.gameHeight = this.actualHeight / this.gameGrid;
    this.gameScore = 0;
  }

  restart(): void {
    this.ngOnInit();
    this.game.ngOnInit();
  }

}
