import { Copier } from './kata';

describe('Character copier should', () => {
  test('copy list of characters', () => {
    const source = { getChar: jest.fn() };
    const destination = { setChar: jest.fn() };

    const characterCopier = new Copier(source, destination);

    expect(characterCopier).not.toBeNull();
  });
});
