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
  Right,
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

export class Turn {
  constructor(
    private readonly cell: Cell,
    private readonly player: Player,
  ) {}

  equals(other: Turn) {
    return this.player === other.player && this.cell.equals(other.cell);
  }
}

export interface TicTacToe {
  play(turn: Turn): void;
}

export interface Output {
  printPlay(x: number, y: number, player: string): void;
  printWinner(player: string): void;
  printError(errorMessage: string): void;
}
