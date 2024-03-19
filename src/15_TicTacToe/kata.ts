export enum Player {
  X,
  O,
}

export enum Row {
  Top,
  Middle,
  Bottom,
}

export enum Column {
  Left,
  Center,
  Rigth,
}

export class Cell {
  constructor(
    private readonly row: Row,
    private readonly column: Column,
  ) {}

  equals(other: Cell) {
    return this.row === other.row && this.column === other.column;
  }
}

export class Play {
  constructor(
    private readonly cell: Cell,
    private readonly player: Player,
  ) {}

  equals(other: Play) {
    return this.player === other.player && this.cell.equals(other.cell);
  }
}

export interface TicTacToe {
  play(play: Play): void;
}

export interface Output {
  printPlay(x: number, y: number, player: string): void;
  printWinner(player: string): void;
  printError(errorMessage: string): void;
}
