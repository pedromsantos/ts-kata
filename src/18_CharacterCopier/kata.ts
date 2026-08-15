export class Copier {
  copy() {
    return;
  }
}

export interface Source {
  getChar(): string;
}

export interface Destination {
  setChar(char: string): void;
}
