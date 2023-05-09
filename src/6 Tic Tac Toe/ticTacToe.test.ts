import { winner } from './ticTacToe.kata';

describe('TicTacToe should', () => {
  test('have a winner', () => {
    expect(winner).toBe('a player');
  });
});
