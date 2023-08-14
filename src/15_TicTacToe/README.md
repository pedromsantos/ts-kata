# Tic Tac Toe kata

## Rules

- X always plays first
- Players alternate placing X’s and O’s on the board
- Players cannot play on a played position
- A Player wins when it has three in a row
  - Horizontally
  - Vertically
  - Diagonally
- If all nine squares are filled and neither player has won, the game is a draw

In this version of TicTacToe nothing is returned but a call to an Output is made to print the game.

Use the following type definitions to get started:

```typescript
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
}

export interface TicTacToe {
  play(play: Play): void;
}

export interface Output {
  printPlay(play: Play): void;
  printWinner(player: Player): void;
  printError(errorMessag: string): void;
}
```
