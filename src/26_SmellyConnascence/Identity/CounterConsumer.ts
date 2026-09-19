/* eslint-disable */
import { GlobalCounter } from './GlobalCounter';

export class CounterConsumer {
  recordVisit(): number {
    return GlobalCounter.increment();
  }

  totalVisits(): number {
    return GlobalCounter.current();
  }
}
