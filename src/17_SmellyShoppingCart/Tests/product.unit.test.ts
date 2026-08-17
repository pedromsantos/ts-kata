import { Product } from '../Domain/Models/Product';

describe('Product equality', () => {
  it.each([
    [
      'different names',
      new Product('MUG', 'Coffee Mug', 7.5),
      new Product('MUG', 'Travel Mug', 12),
    ],
    [
      'different prices',
      new Product('VOUCHER', 'Gift Voucher', 5),
      new Product('VOUCHER', 'Gift Voucher', 10),
    ],
  ])(
    'treats products with the same code as equal despite %s',
    (_difference, product, otherProduct) => {
      expect(product.equals(otherProduct)).toBe(true);
    },
  );

  it('treats products with distinct codes as different when their details match', () => {
    const mug = new Product('MUG', 'Coffee Mug', 7.5);
    const otherMug = new Product('MUG-PROMO', 'Coffee Mug', 7.5);

    expect(mug.equals(otherMug)).toBe(false);
  });
});
