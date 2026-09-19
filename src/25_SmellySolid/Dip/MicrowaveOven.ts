/* eslint-disable */
import { MicrowaveGenerator } from './MicrowaveGenerator';

// DIP violation: MicrowaveOven news up a concrete MicrowaveGenerator
// itself instead of depending on an injected abstraction.
export class MicrowaveOven {
  private readonly heater: MicrowaveGenerator;

  constructor() {
    this.heater = new MicrowaveGenerator();
  }

  cook(): void {
    this.heater.generate();
  }
}
