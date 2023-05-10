import { yahtzee } from './yahtzee.kata';

describe('Yahtzee should', () => {
  test('have a score of zero when game starts', () => {
    expect(yahtzee).toBe(0);
  });
});
