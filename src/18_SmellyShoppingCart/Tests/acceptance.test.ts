/* eslint-disable */

/**
 * Acceptance tests for the CheckoutCart use case.
 *
 * Boundary: use case -> domain.
 * - Mocked (external world only): ShoppingCartRepository, NotificationPort, OrderClock, randomSource.
 * - Real: Cart, Product, LineItem, PromotionEngine (the domain is exercised for real).
 */

import { CheckoutCart } from '../Application/UseCases/Cart/CheckoutCart';
import { Cart } from '../Domain/Models/Cart';
import { Product } from '../Domain/Models/Product';
import { Clock } from '../Domain/Ports/Clock';
import { NotificationPort } from '../Domain/Ports/NotificationPort';
import { ShoppingCartRepository } from '../Domain/Repositories/ShoppingCartRepository';

class FakeShoppingCartRepository implements ShoppingCartRepository {
  private readonly carts = new Map<string, Cart>();

  seed(cart: Cart): void {
    this.carts.set(cart.id, cart);
  }

  async save(cart: Cart): Promise<void> {
    this.carts.set(cart.id, cart);
  }

  async findById(id: string): Promise<Cart | null> {
    return this.carts.get(id) ?? null;
  }
}

const aFixedClock = (fixedInstant: string): Clock => ({ now: () => fixedInstant });

const aCartFor = (cartId: string, customerName: string): Cart => new Cart(cartId, customerName);

const mug = new Product('MUG', 'Coffee Mug', 7.5);
const voucher = new Product('VOUCHER', 'Voucher', 5.0);

const fixedConfirmedAt = '2024-01-01T00:00:00.000Z';
const fixedRandomSource = () => 0.5; // -> Math.floor(0.5 * 1_000_000) = 500000

describe('CheckoutCart (acceptance)', () => {
  let repository: FakeShoppingCartRepository;
  let notifier: NotificationPort;
  let useCase: CheckoutCart;

  beforeEach(() => {
    repository = new FakeShoppingCartRepository();
    notifier = { send: jest.fn() };
    useCase = new CheckoutCart(repository, notifier, aFixedClock(fixedConfirmedAt), fixedRandomSource);
  });

  it('confirms checkout and returns a receipt when the cart has no discounts', async () => {
    const cart = aCartFor('cart-1', 'Ada Lovelace');
    cart.addProduct(mug, 1);
    repository.seed(cart);

    const receipt = await useCase.execute('cart-1', 'ada@example.com');

    expect(receipt.cartId).toBe('cart-1');
    expect(receipt.total).toBe(7.5);
    // fixedRandomSource() returns 0.5 -> Math.floor(0.5 * 1_000_000) = 500000
    expect(receipt.confirmationCode).toBe('ORD-500000');
    expect(receipt.confirmedAt).toBe(fixedConfirmedAt);
  });

  it('notifies the customer of the confirmed total when checkout succeeds', async () => {
    const cart = aCartFor('cart-2', 'Ada Lovelace');
    cart.addProduct(mug, 1);
    repository.seed(cart);

    const receipt = await useCase.execute('cart-2', 'ada@example.com');

    expect(notifier.send).toHaveBeenCalledTimes(1);
    expect(notifier.send).toHaveBeenCalledWith(
      'ada@example.com',
      `Order confirmed: ${receipt.confirmationCode}, total 7.50€`,
    );
  });

  it('computes the confirmed total using real promotion rules when the cart qualifies for a two-for-one discount', async () => {
    const cart = aCartFor('cart-3', 'Grace Hopper');
    cart.addProduct(voucher, 3); // two-for-one: 2 payable units * 5.0€ = 10.0€

    repository.seed(cart);

    const receipt = await useCase.execute('cart-3', 'grace@example.com');

    expect(receipt.total).toBe(10.0);
    expect(notifier.send).toHaveBeenCalledWith(
      'grace@example.com',
      `Order confirmed: ${receipt.confirmationCode}, total 10.00€`,
    );
  });

  it('rejects checkout when the cart does not exist', async () => {
    await expect(useCase.execute('missing-cart', 'nobody@example.com')).rejects.toThrow(
      'Cart missing-cart not found',
    );
  });

  it('does not notify the customer when the cart does not exist', async () => {
    await expect(useCase.execute('missing-cart', 'nobody@example.com')).rejects.toThrow();

    expect(notifier.send).not.toHaveBeenCalled();
  });
});
