export interface SnekPiece {
  x: number;
  y: number;
}

export class SnekPlayer {
  public body: SnekPiece[];
  public xDirection: -1 | 0 | 1;
  public yDirection: -1 | 0 | 1;

  constructor(initPieces: SnekPiece | SnekPiece[]) {
    initPieces.constructor === Array ? this.body = initPieces : this.body = [initPieces as SnekPiece];
    this.xDirection = 1;
    this.yDirection = 0;
  }

  get head(): SnekPiece {
    return this.body[0];
  }

  get allX(): number[] {
    return this.body.map(p => p.x);
  }

  get allY(): number[] {
    return this.body.map(p => p.y);
  }

  get allCoords(): Array<[number, number]> {
    return this.body.map(p => [p.x, p.y]);
  }
}
