export class Die {
  constructor(public readonly value: number) {}

  equals(other: Die): boolean {
    return this.value === other.value;
  }
}

export interface TelemetryPort {
  record(entry: string): void;
}

export class DiceCup {
  private dice: Die[] = [];
  private selectedIndexes: number[] = [];

  constructor(private readonly randomSource: () => number = Math.random) {}

  roll(): readonly Die[] {
    this.dice = Array.from({ length: 5 }, () => this.rollDie());
    this.selectedIndexes = [];
    return this.dice;
  }

  selectForReroll(indexes: readonly number[]): void {
    this.selectedIndexes = [...indexes];
  }

  rerollSelected(): readonly Die[] {
    this.selectedIndexes.forEach((index) => {
      this.dice[index] = this.rollDie();
    });
    this.selectedIndexes = [];
    return this.dice;
  }

  get currentDice(): readonly Die[] {
    return this.dice;
  }

  private rollDie(): Die {
    return new Die(Math.floor(this.randomSource() * 6) + 1);
  }
}

export class TurnLog {
  constructor(
    private readonly diceCup: DiceCup,
    private readonly telemetry: TelemetryPort,
  ) {}

  rerollSelectedDice(): readonly Die[] {
    const dice = this.diceCup.rerollSelected();
    this.telemetry.record(`rerolled:${dice.map((die) => die.value).join(',')}`);
    return dice;
  }
}
