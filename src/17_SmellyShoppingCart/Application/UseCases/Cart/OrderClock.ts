/* eslint-disable */

import { Clock } from '../../../Domain/Ports/Clock';

export class OrderClock implements Clock {
  static now(): string {
    return new Date().toISOString();
  }

  now(): string {
    return OrderClock.now();
  }
}
