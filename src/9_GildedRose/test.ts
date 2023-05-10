import { GildedRose, Item } from './kata';

describe('Gilded Rose inventary should', () => {
  test('exist', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);

    expect(gildedRose).not.toBeNull();
  });
});
