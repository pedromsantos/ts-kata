type Row = 0 | 1 | 2;
type Column = 0 | 1 | 2;
type Player = ' ' | 'X' | 'O';

const firstRow: Row = 0;
const thirdRow: Row = 2;
const firstColumn: Column = 0;
const secondColumn: Column = 1;
const thirdColumn: Column = 2;

const playerO: Player = 'O';
const noPlayer: Player = ' ';

export class Game {
  private _lastPlayer = noPlayer;
  private _board: Board = new Board();

  public Play(player: Player, row: Row, column: Column) {
    this.validateFirstMove(player);
    this.validatePlayer(player);
    const coordinate = new Coordinate(row, column);
    this.validatePositionIsEmpty(coordinate);

    this.updateLastPlayer(player);
    this.updateBoard(new Tile(player, coordinate));
  }

  private validateFirstMove(player: Player) {
    if (this._lastPlayer == noPlayer && player == playerO) {
      throw new Error('Invalid first player');
    }
  }

  private validatePlayer(player: Player) {
    if (player == this._lastPlayer) {
      throw new Error('Invalid next player');
    }
  }

  private validatePositionIsEmpty(coordinate: Coordinate) {
    if (this._board.isTilePlayedAt(coordinate)) {
      throw new Error('Invalid position');
    }
  }

  private updateLastPlayer(player: Player) {
    this._lastPlayer = player;
  }

  private updateBoard(tile: Tile) {
    this._board.AddTileAt(tile);
  }

  public Winner() {
    return this._board.findFullRowWithSamePlayerOrNoPlayer();
  }
}

class Coordinate {
  constructor(
    private readonly x: Row,
    private readonly y: Column,
  ) {}

  equal(other: Coordinate) {
    return this.x === other.x && this.y === other.y;
  }
}

class Tile {
  private coordinate: Coordinate = new Coordinate(0, 0);
  private player: Player = noPlayer;

  constructor(player: Player, coordinate: Coordinate) {
    this.coordinate = coordinate;
    this.player = player;
  }

  get Player() {
    return this.player;
  }

  get isNotEmpty() {
    return this.Player !== noPlayer;
  }

  hasSamePlayerAs(other: Tile) {
    return this.Player === other.Player;
  }

  hasSameCoordinatesAs(other: Tile) {
    return this.coordinate.equal(other.coordinate);
  }

  updatePlayer(newPlayer: Player) {
    this.player = newPlayer;
  }
}

class Board {
  private _plays: Tile[] = [];

  constructor() {
    for (let x = firstRow; x <= thirdRow; x++) {
      for (let y = firstColumn; y <= thirdColumn; y++) {
        this._plays.push(new Tile(noPlayer, new Coordinate(x, y)));
      }
    }
  }

  public isTilePlayedAt(coordinate: Coordinate) {
    return this.findTileByCoordinate(new Tile(noPlayer, coordinate)).isNotEmpty;
  }

  public AddTileAt(tile: Tile) {
    this.findTileByCoordinate(tile).updatePlayer(tile.Player);
  }

  public findFullRowWithSamePlayerOrNoPlayer() {
    for (let r = firstRow; r <= thirdRow; r++) {
      if (this.isRowFull(r) && this.isRowFullWithSamePlayer(r)) {
        return this.playerAt(new Coordinate(r, firstColumn));
      }
    }

    return noPlayer;
  }

  private findTileByCoordinate(tile: Tile) {
    const foundTile = this._plays.find((t: Tile) => t.hasSameCoordinatesAs(tile));

    if (foundTile) return foundTile;

    throw new Error('tile not found');
  }

  private playerAt(coordinate: Coordinate) {
    return this.findTileByCoordinate(new Tile(noPlayer, coordinate)).Player;
  }

  private isRowFull(row: Row) {
    return (
      this.isTilePlayedAt(new Coordinate(row, firstColumn)) &&
      this.isTilePlayedAt(new Coordinate(row, secondColumn)) &&
      this.isTilePlayedAt(new Coordinate(row, thirdColumn))
    );
  }

  private isRowFullWithSamePlayer(row: Row) {
    return (
      this.hasSamePlayer(new Coordinate(row, firstColumn), new Coordinate(row, secondColumn)) &&
      this.hasSamePlayer(new Coordinate(row, secondColumn), new Coordinate(row, thirdColumn))
    );
  }

  private hasSamePlayer(coordinate: Coordinate, otherCoordinate: Coordinate) {
    return this.findTileByCoordinate(new Tile(noPlayer, coordinate)).hasSamePlayerAs(
      this.findTileByCoordinate(new Tile(noPlayer, otherCoordinate)),
    );
  }
}
