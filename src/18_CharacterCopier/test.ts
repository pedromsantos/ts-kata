import { Copier } from './kata';

describe('Character copier should', () => {
  test('copy list of characters', () => {
    const characterCopier = new Copier();

    expect(characterCopier).not.toBeNull();
  });
});
