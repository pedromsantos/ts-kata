import { ShoppingCart } from './kata';

describe('Shopping cart should', () => {
  test('copy list of characters', () => {
    const cart = new ShoppingCart();

    expect(cart).not.toBeNull();
  });
});
