/* eslint-disable */

export class Game {
  private _lastSymbol = ' ';
  private _board: Board = new Board();

  private readonly playerO = 'O';
  private readonly emptyPlay = ' ';

  private readonly firstRow = 0;
  private readonly secondRow = 1;
  private readonly thirdRow = 2;
  private readonly firstColumn = 0;
  private readonly secondColumn = 1;
  private readonly thirdColumn = 2;

  public Play(symbol: string, x: number, y: number): void {
    this.validateFirstMove(symbol);
    this.validatePlayer(symbol);
    this.validatePositionIsEmpty(x, y);

    this.updateLastPlayer(symbol);
    this.updateBoard(symbol, x, y);
  }

  private validateFirstMove(player: string) {
    if (this._lastSymbol == this.emptyPlay) {
      if (player == this.playerO) {
        throw new Error('Invalid first player');
      }
    }
  }

  private validatePlayer(player: string) {
    if (player == this._lastSymbol) {
      throw new Error('Invalid next player');
    }
  }

  private validatePositionIsEmpty(x: number, y: number) {
    if (this._board.TileAt(x, y).Symbol != this.emptyPlay) {
      throw new Error('Invalid position');
    }
  }

  private updateLastPlayer(player: string) {
    this._lastSymbol = player;
  }

  private updateBoard(player: string, x: number, y: number) {
    this._board.AddTileAt(player, x, y);
  }

  public Winner(): string {
    if (this.isFirstRowFull() && this.isFirstRowFullWithSameSymbol()) {
      return this._board.TileAt(this.firstRow, this.firstColumn)!.Symbol;
    }

    if (this.isSecondRowFull() && this.isSecondRowFullWithSameSymbol()) {
      return this._board.TileAt(this.secondRow, this.firstColumn)!.Symbol;
    }

    if (this.isThirdRowFull() && this.isThirdRowFullWithSameSymbol()) {
      return this._board.TileAt(this.thirdRow, this.firstColumn)!.Symbol;
    }

    return this.emptyPlay;
  }

  private isFirstRowFull() {
    return (
      this._board.TileAt(this.firstRow, this.firstColumn)!.Symbol != this.emptyPlay &&
      this._board.TileAt(this.firstRow, this.secondColumn)!.Symbol != this.emptyPlay &&
      this._board.TileAt(this.firstRow, this.thirdColumn)!.Symbol != this.emptyPlay
    );
  }

  private isFirstRowFullWithSameSymbol() {
    return (
      this._board.TileAt(this.firstRow, this.firstColumn)!.Symbol ==
        this._board.TileAt(this.firstRow, this.secondColumn)!.Symbol &&
      this._board.TileAt(this.firstRow, this.thirdColumn)!.Symbol ==
        this._board.TileAt(this.firstRow, this.secondColumn)!.Symbol
    );
  }

  private isSecondRowFull() {
    return (
      this._board.TileAt(this.secondRow, this.firstColumn)!.Symbol != this.emptyPlay &&
      this._board.TileAt(this.secondRow, this.secondColumn)!.Symbol != this.emptyPlay &&
      this._board.TileAt(this.secondRow, this.thirdColumn)!.Symbol != this.emptyPlay
    );
  }

  private isSecondRowFullWithSameSymbol() {
    return (
      this._board.TileAt(this.secondRow, this.firstColumn)!.Symbol ==
        this._board.TileAt(this.secondRow, this.secondColumn)!.Symbol &&
      this._board.TileAt(this.secondRow, this.thirdColumn)!.Symbol ==
        this._board.TileAt(this.secondRow, this.secondColumn)!.Symbol
    );
  }

  private isThirdRowFull() {
    return (
      this._board.TileAt(this.thirdRow, this.firstColumn)!.Symbol != this.emptyPlay &&
      this._board.TileAt(this.thirdRow, this.secondColumn)!.Symbol != this.emptyPlay &&
      this._board.TileAt(this.thirdRow, this.thirdColumn)!.Symbol != this.emptyPlay
    );
  }

  private isThirdRowFullWithSameSymbol() {
    return (
      this._board.TileAt(this.thirdRow, this.firstColumn)!.Symbol ==
        this._board.TileAt(this.thirdRow, this.secondColumn)!.Symbol &&
      this._board.TileAt(this.thirdRow, this.thirdColumn)!.Symbol ==
        this._board.TileAt(this.thirdRow, this.secondColumn)!.Symbol
    );
  }
}

interface Tile {
  X: number;
  Y: number;
  Symbol: string;
}

class Board {
  private _plays: Tile[] = [];

  constructor() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const tile: Tile = { X: i, Y: j, Symbol: ' ' };
        this._plays.push(tile);
      }
    }
  }

  public TileAt(x: number, y: number): Tile {
    return this._plays.find((t: Tile) => t.X == x && t.Y == y)!;
  }

  public AddTileAt(symbol: string, x: number, y: number): void {
    this._plays.find((t: Tile) => t.X == x && t.Y == y)!.Symbol = symbol;
  }
}
