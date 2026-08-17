export type TurnResult = 'ordinary turn' | 'bonus turn';

export class Game {
  private turnsPlayed = 0;

  play(): TurnResult {
    const diceResult = Math.floor(Math.random() * 6) + 1;
    this.turnsPlayed++;

    return diceResult === 6 ? 'bonus turn' : 'ordinary turn';
  }

  get numberOfTurnsPlayed(): number {
    return this.turnsPlayed;
  }
}
