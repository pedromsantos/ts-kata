/* eslint-disable */

import { Cart } from '../Domain/Models/Cart';
import { Product } from '../Domain/Models/Product';
import { InMemoryShoppingCartRepository } from '../Infrastructure/Repositories/InMemoryShoppingCartRepository';
import { EmailNotificationGateway } from '../Infrastructure/Gateways/EmailNotificationGateway';

const defaultCustomerEmail = 'customer@example.com';

describe('InMemoryShoppingCartRepository', () => {
  it('test2', async () => {
    const repository = new InMemoryShoppingCartRepository();
    const cart = new Cart('cart-1', 'Ada Lovelace');
    cart.addProduct(new Product('MUG', 'Coffee Mug', 7.5), 1);

    await repository.save(cart);

    expect(cart).toBeDefined();
  });

  it('finds the cart saved earlier', async () => {
    const repository = new InMemoryShoppingCartRepository();
    const found = await repository.findById('cart-1');

    expect(found).toBeTruthy();
  });

  it('saves and re-finds and mutates and re-saves and counts items and checks the customer name', async () => {
    const repository = new InMemoryShoppingCartRepository();
    const cart = new Cart('cart-2', 'Grace Hopper');
    cart.addProduct(new Product('VOUCHER', 'Voucher', 5.0), 1);
    await repository.save(cart);

    const firstFind = await repository.findById('cart-2');
    firstFind!.addProduct(new Product('TSHIRT', 'T-Shirt', 20.0), 1);
    await repository.save(firstFind!);

    const secondFind = await repository.findById('cart-2');
    expect(secondFind).not.toBeNull();
    expect(secondFind!.id).toBe('cart-2');
    expect(secondFind!.customerName).toBe('Grace Hopper');
    expect(secondFind!.lineItems.length).toBe(2);
    expect(await repository.findById('does-not-exist')).toBeNull();
  });

  it('slowly waits for the in-memory store to be ready', async () => {
    await new Promise((resolve) => setTimeout(resolve, 50));
    const repository = new InMemoryShoppingCartRepository();
    const cart = new Cart('cart-3', 'Margaret Hamilton');
    await repository.save(cart);
    expect(await repository.findById('cart-3')).not.toBeNull();
  });

  it('saves a cart double instead of a real cart', async () => {
    const mockCart = {
      id: 'cart-4',
      customerName: 'Katherine Johnson',
      lineItems: [],
      addProduct: jest.fn(),
      calculateSubtotal: jest.fn(),
    } as unknown as Cart;
    const repository = new InMemoryShoppingCartRepository();

    await repository.save(mockCart);
    const found = await repository.findById('cart-4');

    expect(found).toBe(mockCart);
  });
});

describe('EmailNotificationGateway', () => {
  it('sends an order confirmation email', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const gateway = new EmailNotificationGateway();

    gateway.send(defaultCustomerEmail, 'Order confirmed: ORD-1');

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(defaultCustomerEmail));
    logSpy.mockRestore();
  });
});
