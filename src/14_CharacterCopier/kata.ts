export class Copier {
  copy(): void {}
}

export interface Source {
  getChar(): string;
}

export interface Destination {
  setChar(char: string): void;
}
