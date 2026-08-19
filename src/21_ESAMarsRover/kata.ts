export const rover = 'Mars plateau';

export interface Rover {
  execute(): void;
}

export interface Radio {
  send(message: string): void;
  receive(): string;
}
