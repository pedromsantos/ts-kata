import { calculateStats } from './kata';

describe('Stats Calculator should', () => {
  test('start at zero', () => {
    expect(calculateStats).toBe(0);
  });
});
