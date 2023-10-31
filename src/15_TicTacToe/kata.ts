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

export interface Cell {
  row: Row;
  column: Column;
}

export interface Play {
  cell: Cell;
  player: Player;
}

export interface TicTacToe {
  play(play: Play): void;
}

export interface Output {
  printPlay(play: Play): void;
  printWinner(player: Player): void;
  printError(errorMessag: string): void;
}
