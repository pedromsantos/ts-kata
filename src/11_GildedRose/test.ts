/* eslint-disable */

import 'jest-extended-snapshot';

import { GildedRose, Item } from './kata';

function doUpdateQuality(name: string, sellIn: number, quality: number): Item {
  const item = new Item(name, sellIn, quality);
  const gildedRose = new GildedRose([item]);

  const updatedItem = gildedRose.updateQuality()[0];

  if (updatedItem) {
    return updatedItem;
  }

  return item;
}

describe('Gilded Rose inventary update should', () => {
  test('exist', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);

    expect(gildedRose).not.toBeNull();
  });

  test.skip('update quality and sell-in values', () => {
    expect(doUpdateQuality).toVerifyAllCombinations(
      [
        'foo',
        'Aged Brie',
        'Backstage passes to a TAFKAL80ETC concert',
        'Sulfuras, Hand of Ragnaros',
      ],
      [-1, 0, 1, 11],
      [0, 1, 2, 49, 50],
    );
  });
});

import fc from 'fast-check';

describe('Gilded Rose property-based tests', () => {
  describe('quality bounds', () => {
    test.skip('quality should never be negative', () => {
      fc.assert(
        fc.property(
          fc.string(),
          fc.integer({ min: -10, max: 50 }),
          fc.integer({ min: 0, max: 100 }),
          (name: string, sellIn: number, quality: number) => {
            const item = new Item(name, sellIn, quality);
            const gildedRose = new GildedRose([item]);

            gildedRose.updateQuality();

            expect(item.quality).toBeGreaterThanOrEqual(0);
          },
        ),
      );
    });
  });
});
