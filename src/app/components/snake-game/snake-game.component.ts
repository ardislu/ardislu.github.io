import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';

import { SnekPiece, SnekPlayer } from '../../models/snek.model';

@Component({
  selector: 'app-snake-game',
  templateUrl: './snake-game.component.html',
  styleUrls: ['./snake-game.component.scss']
})
export class SnakeGameComponent implements OnInit {
  @Input() gridSize = 10;
  @Input() width = 25;
  @Input() height = 25;
  @Output() gameEnded = new EventEmitter<number>();

  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;
  private player!: SnekPlayer;
  private food!: SnekPiece;
  private gameLoop!: number;

  constructor() { }

  ngOnInit(): void {
    this.canvas.nativeElement.width = this.width * this.gridSize;
    this.canvas.nativeElement.height = this.height * this.gridSize;
    this.ctx = this.canvas.nativeElement.getContext('2d') as CanvasRenderingContext2D;

    // Initialize player
    const spawnPiece: SnekPiece = {
      x: Math.floor(this.width * Math.random()),
      y: Math.floor(this.height * Math.random())
    };
    this.player = new SnekPlayer(spawnPiece);

    // Initialize food
    this.spawnFood();

    // Begin game loop
    this.gameLoop = setInterval(this.tick.bind(this), 100);
  }

  tick(): void {
    this.player = this.move(this.player);
    this.drawCanvas();
  }

  move(player: SnekPlayer): SnekPlayer {
    // Save old body position and instantiate next movement
    const newHead: SnekPiece = {
      x: player.head.x + player.xDirection,
      y: player.head.y + player.yDirection
    };

    // Check for game over
    const gameLost = (player.body.some(p => p.x === newHead.x && p.y === newHead.y)
      || newHead.x - 1 < 0
      || newHead.x + 2 > this.width
      || newHead.y - 1 < 0
      || newHead.y + 2 > this.height);
    if (gameLost) {
      this.endGame();
    }

    // Extend head by one
    player.body.unshift(newHead);
    if (newHead.x !== this.food.x || newHead.y !== this.food.y) {
      player.body.pop(); // Food not eaten = kill tail piece
    }
    else {
      this.spawnFood(); // Respawn food
    }

    return player;
  }

  spawnFood(): void {
    let newFood: SnekPiece = {
      x: Math.floor(this.width * Math.random()),
      y: Math.floor(this.height * Math.random())
    };
    while (this.player.body.includes(newFood)) {
      newFood = {
        x: Math.floor(this.width * Math.random()),
        y: Math.floor(this.height * Math.random())
      };
    }
    this.food = newFood;
  }

  drawCanvas(): void {
    const g = this.gridSize;
    const fullW = this.width * g;
    const fullH = this.height * g;

    this.ctx.clearRect(0, 0, fullW, fullH);

    this.ctx.beginPath();
    this.ctx.rect(0, 0, fullW, fullH);
    this.ctx.stroke();

    for (const bodyPiece of this.player.body) {
      const x = bodyPiece.x * g;
      const y = bodyPiece.y * g;
      this.ctx.beginPath();
      this.ctx.fillRect(x, y, g, g);
    }

    const foodX = this.food.x * g;
    const foodY = this.food.y * g;
    this.ctx.fillRect(foodX, foodY, g, g);
  }

  endGame(): void {
    clearInterval(this.gameLoop);
    this.gameEnded.emit(this.player.body.length);
  }

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    let xInput = 0;
    let yInput = 0;
    switch (event.key) {
      case 'ArrowRight':
        xInput = 1;
        break;
      case 'ArrowLeft':
        xInput = -1;
        break;
      case 'ArrowUp':
        yInput = -1;
        break;
      case 'ArrowDown':
        yInput = 1;
        break;
      default:
        xInput = 0;
        yInput = 0;
    }
    // Only perpendicular inputs are valid
    if (this.player.xDirection === 0 && xInput) {
      this.player.xDirection += xInput;
      this.player.yDirection = 0;
    }
    else if (this.player.yDirection === 0 && yInput) {
      this.player.yDirection += yInput;
      this.player.xDirection = 0;
    }
  }

}
