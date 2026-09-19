/* eslint-disable */

import { Board } from './Board';

// Cross-file Duplicated Code / Shotgun Surgery kata fixture: this checker
// re-implements the exact same "are these three tiles taken and equal"
// pattern as RowWinnerChecker, independently, instead of sharing one
// extracted line-checking algorithm -- fixing a bug in the matching rule
// (e.g. wildcards, N-in-a-row) means remembering to edit both files.
export class ColumnWinnerChecker {
  public check(board: Board): string {
    //if the positions in first column are taken
    if (board.TileAt(0, 0)!.Symbol != ' ' && board.TileAt(1, 0)!.Symbol != ' ' && board.TileAt(2, 0)!.Symbol != ' ') {
      //if first column is full with same symbol
      if (board.TileAt(0, 0)!.Symbol == board.TileAt(1, 0)!.Symbol && board.TileAt(2, 0)!.Symbol == board.TileAt(1, 0)!.Symbol) {
        return board.TileAt(0, 0)!.Symbol;
      }
    }

    //if the positions in middle column are taken
    if (board.TileAt(0, 1)!.Symbol != ' ' && board.TileAt(1, 1)!.Symbol != ' ' && board.TileAt(2, 1)!.Symbol != ' ') {
      //if middle column is full with same symbol
      if (board.TileAt(0, 1)!.Symbol == board.TileAt(1, 1)!.Symbol && board.TileAt(2, 1)!.Symbol == board.TileAt(1, 1)!.Symbol) {
        return board.TileAt(0, 1)!.Symbol;
      }
    }

    //if the positions in last column are taken
    if (board.TileAt(0, 2)!.Symbol != ' ' && board.TileAt(1, 2)!.Symbol != ' ' && board.TileAt(2, 2)!.Symbol != ' ') {
      //if last column is full with same symbol
      if (board.TileAt(0, 2)!.Symbol == board.TileAt(1, 2)!.Symbol && board.TileAt(2, 2)!.Symbol == board.TileAt(1, 2)!.Symbol) {
        return board.TileAt(0, 2)!.Symbol;
      }
    }

    return ' ';
  }
}
