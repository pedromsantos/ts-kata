/* eslint-disable */
import { MicrowaveOven } from './MicrowaveOven';

// DIP violation: Kitchen (high-level policy) directly constructs a
// concrete MicrowaveOven (low-level detail) — it can't work with any
// other kind of oven.
export class Kitchen {
  private readonly oven: MicrowaveOven;

  constructor() {
    this.oven = new MicrowaveOven();
  }

  cookDinner(): void {
    this.oven.cook();
  }
}
