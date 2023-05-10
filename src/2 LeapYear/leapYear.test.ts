import { leapYear } from './leapYear.kata';

describe('Leap year should', () => {
  test('be allways', () => {
    expect(leapYear).toBe(true);
  });
});
