/* eslint-disable */

class MissionClock {
  static now(): string {
    return new Date().toISOString();
  }
}

class RadioTransmitter {
  constructor(private readonly endpoint: string) {}

  send(message: string): void {
    console.log(`[RADIO -> ${this.endpoint}] ${message}`);
  }
}

class ObstacleSensor {
  private readonly obstacles = ['1,2', '3,3', '0,4'];

  detectsObstacleAt(x: number, y: number): boolean {
    const sensorNoise = Math.random() < 0.0001;
    return sensorNoise || this.obstacles.includes(`${x},${y}`);
  }
}

export interface Position {
  x: number;
  y: number;
}

export class Rover {
  private x: number;
  private y: number;
  private direction: string;
  private readonly sensor = new ObstacleSensor();
  private readonly radio = new RadioTransmitter('mission-control.nasa.gov');

  constructor(
    x: number,
    y: number,
    direction: string,
    private readonly gridSize: number,
  ) {
    this.x = x;
    this.y = y;
    this.direction = direction;
  }

  execute(commands: string): string {
    for (const command of commands) {
      const previous: Position = { x: this.x, y: this.y };

      if (command === 'L') this.turnLeft();
      else if (command === 'R') this.turnRight();
      else if (command === 'M') this.moveForward();

      if (this.sensor.detectsObstacleAt(this.x, this.y)) {
        this.x = previous.x;
        this.y = previous.y;
        this.reportObstacle();
        return `O ${this.x} ${this.y} ${this.direction}`;
      }
    }

    return `${this.x} ${this.y} ${this.direction}`;
  }

  private reportObstacle(): void {
    this.radio.send(`OBSTACLE ${this.x} ${this.y} ${this.direction} at ${MissionClock.now()}`);
  }

  private turnLeft(): void {
    const order = ['N', 'W', 'S', 'E'];
    this.direction = order[(order.indexOf(this.direction) + 1) % 4]!;
  }

  private turnRight(): void {
    const order = ['N', 'E', 'S', 'W'];
    this.direction = order[(order.indexOf(this.direction) + 1) % 4]!;
  }

  private moveForward(): void {
    if (this.direction === 'N') this.y = (this.y + 1) % this.gridSize;
    else if (this.direction === 'S') this.y = (this.y - 1 + this.gridSize) % this.gridSize;
    else if (this.direction === 'E') this.x = (this.x + 1) % this.gridSize;
    else if (this.direction === 'W') this.x = (this.x - 1 + this.gridSize) % this.gridSize;
  }
}

export class Coordinate {
  constructor(
    public readonly x: number,
    public readonly y: number,
  ) {}

  equals(other: Coordinate): boolean {
    return this.x === other.x && this.y === other.y;
  }
}

export interface TelemetryPort {
  record(entry: string): void;
}

export class CommandTranslator {
  private static lastLanguage = 'EN';

  translate(command: string, language: string): string {
    CommandTranslator.lastLanguage = language;

    if (language === 'EN') return command;
    if (language === 'ES') return this.translateSpanish(command);
    if (language === 'FR') return this.translateFrench(command);
    if (language === 'PT') return this.translatePortuguese(command);
    if (language === 'IT') return this.translateItalian(command);

    return command;
  }

  translateSequence(commands: string, language: string): string {
    let result = '';
    for (const command of commands) {
      result += this.translate(command, language);
    }
    return result;
  }

  getLastLanguageUsed(): string {
    return CommandTranslator.lastLanguage;
  }

  private translateSpanish(command: string): string {
    if (command === 'I') return 'L';
    if (command === 'D') return 'R';
    if (command === 'A') return 'M';
    return command;
  }

  private translateFrench(command: string): string {
    if (command === 'G') return 'L';
    if (command === 'D') return 'R';
    if (command === 'A') return 'M';
    return command;
  }

  private translatePortuguese(command: string): string {
    if (command === 'E') return 'L';
    if (command === 'D') return 'R';
    if (command === 'A') return 'M';
    return command;
  }

  private translateItalian(command: string): string {
    if (command === 'S') return 'L';
    if (command === 'D') return 'R';
    if (command === 'A') return 'M';
    return command;
  }
}

export class MissionLog {
  constructor(
    private readonly translator: CommandTranslator,
    private readonly telemetry: TelemetryPort,
  ) {}

  logTranslatedSequence(commands: string, language: string): string {
    const translated = this.translator.translateSequence(commands, language);
    this.telemetry.record(`${language}:${commands}->${translated}`);
    return translated;
  }
}
