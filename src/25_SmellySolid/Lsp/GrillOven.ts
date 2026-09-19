/* eslint-disable */
import { Oven } from './Oven';

export class GrillOven extends Oven {
  cook(food: string): void {
    console.log(`Grilling ${food}`);
  }
}
