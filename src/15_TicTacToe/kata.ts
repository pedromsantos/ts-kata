export enum Player {
  X,
  Y,
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

export interface Cell {
  row: Row;
  column: Column;
}

export interface Play {
  cell: Cell;
  player: Player;

  get row(): Row;
  get column(): Column;
}

export interface Output {
  printCell(play: Play): void;
  printWinner(player: Player): void;
  printError(errorMessag: string): void;
}

export interface Application {
  play(play: Play): void;
}

export interface Game {
  play(play: Play): void;
}
