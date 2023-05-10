import { rover } from './marsRover.kata';

describe('Rover should', () => {
  test('be at Mars Plateau', () => {
    expect(rover).toBe('Mars plateau');
  });
});
