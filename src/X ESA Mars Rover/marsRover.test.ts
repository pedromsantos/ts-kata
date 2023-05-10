import { rover } from './marsRover.kata';

describe('Rover should', () => {
  test('be at Mars plateau', () => {
    expect(rover).toBe('Mars plateau');
  });
});
