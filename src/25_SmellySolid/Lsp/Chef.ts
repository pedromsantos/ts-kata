/* eslint-disable */
import { Microwave } from './Microwave';
import type { Oven } from './Oven';

// The instanceof special-case here is the diagnostic signature of the
// LSP violation in Microwave: a caller that can't just trust Oven.cook().
export class Chef {
  cook(oven: Oven, food: string): void {
    if (oven instanceof Microwave) {
      oven.cookMicrowaving(food);
    } else {
      oven.cook(food);
    }
  }
}
