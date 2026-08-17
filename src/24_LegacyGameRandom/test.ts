import { Game } from './kata';

describe('Game', () => {
  it('starts with no turns played', () => {
    expect(new Game().numberOfTurnsPlayed).toBe(0);
  });

  test.skip('grants a bonus turn when a six is rolled', () => {
    const game = new Game();

    expect(game.play()).toBe('bonus turn');
  });
});
