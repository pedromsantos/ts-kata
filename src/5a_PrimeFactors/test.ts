import { primeFactors } from './kata';

describe('Prime factors should', () => {
  test('determine prime factor 1', () => {
    expect(primeFactors).toBe(1);
  });
});
