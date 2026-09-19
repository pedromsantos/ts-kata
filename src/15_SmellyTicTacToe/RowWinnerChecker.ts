/* eslint-disable */

import { Board } from './Board';

export class RowWinnerChecker {
  public check(board: Board): string {
    //if the positions in first row are taken
    if (board.TileAt(0, 0)!.Symbol != ' ' && board.TileAt(0, 1)!.Symbol != ' ' && board.TileAt(0, 2)!.Symbol != ' ') {
      //if first row is full with same symbol
      if (board.TileAt(0, 0)!.Symbol == board.TileAt(0, 1)!.Symbol && board.TileAt(0, 2)!.Symbol == board.TileAt(0, 1)!.Symbol) {
        return board.TileAt(0, 0)!.Symbol;
      }
    }

    //if the positions in first row are taken
    if (board.TileAt(1, 0)!.Symbol != ' ' && board.TileAt(1, 1)!.Symbol != ' ' && board.TileAt(1, 2)!.Symbol != ' ') {
      //if middle row is full with same symbol
      if (board.TileAt(1, 0)!.Symbol == board.TileAt(1, 1)!.Symbol && board.TileAt(1, 2)!.Symbol == board.TileAt(1, 1)!.Symbol) {
        return board.TileAt(1, 0)!.Symbol;
      }
    }

    //if the positions in first row are taken
    if (board.TileAt(2, 0)!.Symbol != ' ' && board.TileAt(2, 1)!.Symbol != ' ' && board.TileAt(2, 2)!.Symbol != ' ') {
      //if middle row is full with same symbol
      if (board.TileAt(2, 0)!.Symbol == board.TileAt(2, 1)!.Symbol && board.TileAt(2, 2)!.Symbol == board.TileAt(2, 1)!.Symbol) {
        return board.TileAt(2, 0)!.Symbol;
      }
    }

    return ' ';
  }
}
