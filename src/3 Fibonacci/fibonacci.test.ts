import { fibonacci } from './fibonacci.kata';

describe('Fibonacci should', () => {
  test('start at zero', () => {
    expect(fibonacci).toBe(0);
  });
});
