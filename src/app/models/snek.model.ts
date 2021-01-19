export interface SnekPiece {
  x: number;
  y: number;
}

export class SnekPlayer {
  public body: SnekPiece[];
  public xDirection: [-1 | 0 | 1];
  public yDirection: [-1 | 0 | 1];

  constructor(initPieces: SnekPiece | SnekPiece[]) {
    if (initPieces.constructor === Array) {
      this.body = initPieces;
    }
    else {
      this.body = [initPieces as SnekPiece];
    }
    this.xDirection = [1];
    this.yDirection = [0];
  }

  get head(): SnekPiece {
    return this.body[0];
  }
}
