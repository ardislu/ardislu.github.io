import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-random-image',
  templateUrl: './random-image.component.html',
  styleUrls: ['./random-image.component.scss']
})
export class RandomImageComponent implements OnInit {
  @Input() seed: string = Math.random().toString();
  @Input() circleCount: number = 600;
  @Input() width: number = 300;
  @Input() height: number = 300;
  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;

  constructor() { }

  ngOnInit(): void {
    const seed = this.xmur3(this.seed);
    const pRand = this.sfc32(seed(), seed(), seed(), seed());

    this.canvas.nativeElement.width = this.width;
    this.canvas.nativeElement.height = this.height;

    let ctx = this.canvas.nativeElement.getContext('2d') as CanvasRenderingContext2D;

    for (let i = 0; i < this.circleCount; i++) {
      const x = Math.floor(pRand() * this.width);
      const y = Math.floor(pRand() * this.height);
      const radius = Math.floor(pRand() * Math.floor(this.width * 0.08));
      const r = Math.floor(pRand() * 255);
      const g = Math.floor(pRand() * 255);
      const b = Math.floor(pRand() * 255);

      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
      ctx.fill();
      ctx.closePath();
    }
  }

  // Hasher and pseudo-RNG taken from this post:
  // https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript/47593316#47593316
  xmur3(str: string) {
    for (var i = 0, h = 1779033703 ^ str.length; i < str.length; i++)
      h = Math.imul(h ^ str.charCodeAt(i), 3432918353),
        h = h << 13 | h >>> 19;
    return function () {
      h = Math.imul(h ^ h >>> 16, 2246822507);
      h = Math.imul(h ^ h >>> 13, 3266489909);
      return (h ^= h >>> 16) >>> 0;
    }
  }

  sfc32(a: number, b: number, c: number, d: number) {
    return function () {
      a >>>= 0; b >>>= 0; c >>>= 0; d >>>= 0;
      var t = (a + b) | 0;
      a = b ^ b >>> 9;
      b = c + (c << 3) | 0;
      c = (c << 21 | c >>> 11);
      d = d + 1 | 0;
      t = t + d | 0;
      c = c + t | 0;
      return (t >>> 0) / 4294967296;
    }
  }

}
