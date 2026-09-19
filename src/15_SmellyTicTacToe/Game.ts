/* eslint-disable */

import { Board } from './Board';
import { ColumnWinnerChecker } from './ColumnWinnerChecker';
import { RowWinnerChecker } from './RowWinnerChecker';

export class Game {
  private _lastSymbol = ' ';
  private _board: Board = new Board();
  private _rowWinnerChecker = new RowWinnerChecker();
  private _columnWinnerChecker = new ColumnWinnerChecker();

  public Play(symbol: string, x: number, y: number): void {
    //if first move
    if (this._lastSymbol == ' ') {
      //if player is X
      if (symbol == 'O') {
        throw new Error('Invalid first player');
      }
    }
    //if not first move but player repeated
    else if (symbol == this._lastSymbol) {
      throw new Error('Invalid next player');
    }
    //if not first move but play on an already played tile
    else if (this._board.TileAt(x, y).Symbol != ' ') {
      throw new Error('Invalid position');
    }

    // update game state
    this._lastSymbol = symbol;
    this._board.AddTileAt(symbol, x, y);
  }

  public Winner(): string {
    const rowWinner = this._rowWinnerChecker.check(this._board);
    if (rowWinner != ' ') {
      return rowWinner;
    }

    return this._columnWinnerChecker.check(this._board);
  }
}
