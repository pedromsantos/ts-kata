/* eslint-disable */
import { Oven } from './Oven';

// LSP violation: Microwave can't honour Oven's cook() contract, so it
// throws instead — callers that only know about Oven get a broken promise.
export class Microwave extends Oven {
  cook(_food: string): void {
    throw new Error('Microwave does not support cook(); use cookMicrowaving() instead');
  }

  cookMicrowaving(food: string): void {
    console.log(`Microwaving ${food}`);
  }
}
