import { Rover } from './kata';

describe('Rover should', () => {
  describe('Acceptabce tests', () => {
    test('turn 360 degrees clokwise while moving around the plateau', () => {
      const commands = '5 5\n1 2 N\nLMLMLMLMM';
      const rover = new Rover();

      const position = rover.execute(commands);

      expect(position).toBe('1 3 N');
    });

    test('turn 360 degrees counter-clokwise while moving around the plateau', () => {
      const commands = '5 5\n3 3 E\nMMRMMRMRRM';
      const rover = new Rover();

      const position = rover.execute(commands);

      expect(position).toBe('5 1 E');
    });
  });
});
