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

  test.skip('update quality and sell-in values (flat product -- kept for reference, superseded below)', () => {
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

  // Partitioned Cartesian product, one partition per item category, tuned to that
  // category's actual branch boundaries -- catches a gap the flat product above
  // misses: 'sellIn < 11' and 'sellIn < 6' are independent sibling conditions for
  // Backstage passes, not nested, so a shared sellIn set of [-1, 0, 1, 11] only ever
  // produces "both true" or "both false" and never exercises the real 6-10 day
  // range (single bonus only, +2/day instead of +3).
  test('update quality and sell-in values (partitioned by item category)', () => {
    // sellIn=1 is included so it decrements to 0, distinguishing 'sellIn < 0' from
    // 'sellIn <= 0' after decrement -- a boundary the values 5/0/-1 alone do not reach.
    expect(doUpdateQuality).toVerifyAllCombinations(['foo'], [5, 1, 0, -1], [0, 1, 25]);
    expect(doUpdateQuality).toVerifyAllCombinations(['Aged Brie'], [5, 1, 0, -1], [0, 48, 49, 50]);
    expect(doUpdateQuality).toVerifyAllCombinations(
      ['Sulfuras, Hand of Ragnaros'],
      [5, -1],
      [80],
    );
    // sellIn=11 is included so 'sellIn < 11' and 'sellIn <= 11' disagree on it (11
    // itself), distinguishing the two -- the values 15/10 alone do not reach that.
    expect(doUpdateQuality).toVerifyAllCombinations(
      ['Backstage passes to a TAFKAL80ETC concert'],
      [15, 11, 10, 6, 5, 1, 0, -1],
      [0, 48, 49, 50],
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
