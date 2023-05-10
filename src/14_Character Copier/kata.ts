export class Copier {
  constructor(private readonly source: Source, private readonly destination: Destination) {}

  copy(): void {
    // eslint-disable-next-line no-console
    console.log(this.source);
    // eslint-disable-next-line no-console
    console.log(this.destination);
  }
}

export interface Source {
  getChar(): string;
}

export interface Destination {
  setChar(char: string): void;
}
