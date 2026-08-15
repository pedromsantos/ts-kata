/* eslint-disable */

import { Product } from '../Domain/Models/Product';
import { LineItem } from '../Domain/Models/LineItem';
import { PromotionEngine } from '../Domain/Services/PromotionEngine';
import { CartSummaryNotifier } from '../Domain/Services/CartSummaryNotifier';
import { NotificationPort } from '../Domain/Ports/NotificationPort';

let sharedEngine = new PromotionEngine();
let runCount = 0;

const testRunTimestamp = Date.now();

describe('PromotionEngine', () => {
  it('test1', () => {
    runCount++;
    const items: LineItem[] = [{ product: new Product('VOUCHER', 'Voucher', 5.0), quantity: 2 }];
    const result = sharedEngine.apply(items);
    expect(result).toBeDefined();
  });

  it('should work', () => {
    expect(runCount).toBeGreaterThan(0);
    expect(PromotionEngine.getTimesApplied()).toBeGreaterThan(0);
  });

  it('prices vouchers and tshirts and mugs and applies bulk discount and counts applications', () => {
    const engine = new PromotionEngine();
    const voucher = new Product('VOUCHER', 'Voucher', 5.0);
    const tshirt = new Product('TSHIRT', 'T-Shirt', 20.0);
    const mug = new Product('MUG', 'Coffee Mug', 7.5);

    expect(engine.apply([{ product: voucher, quantity: 2 }])).toBe(5.0);
    expect(engine.apply([{ product: mug, quantity: 1 }])).toBe(7.5);
    expect(engine.apply([{ product: tshirt, quantity: 3 }])).toBe(57.0);
    expect(engine.apply([{ product: tshirt, quantity: 2 }])).toBe(40.0);
    expect(PromotionEngine.getTimesApplied()).toBeGreaterThanOrEqual(4);
  });

  it('computes the expected total using the same logic as production', () => {
    const engine = new PromotionEngine();
    const items: LineItem[] = [
      { product: new Product('VOUCHER', 'Voucher', 5.0), quantity: 3 },
      { product: new Product('TSHIRT', 'T-Shirt', 20.0), quantity: 4 },
    ];

    let expected = 0;
    for (const item of items) {
      if (item.product.code === 'VOUCHER') expected += Math.ceil(item.quantity / 2) * item.product.price;
      else if (item.product.code === 'TSHIRT' && item.quantity >= 3) expected += item.quantity * 19.0;
      else expected += item.quantity * item.product.price;
    }

    expect(engine.apply(items)).toBe(expected);
  });

  it('reaches into a private pricing helper directly', () => {
    const engine = new PromotionEngine();
    const privateResult = (
      engine as unknown as { priceFor(item: LineItem): number }
    ).priceFor({ product: new Product('MUG', 'Coffee Mug', 7.5), quantity: 1 });
    expect(privateResult).toBe(7.5);
  });

  it('slowly waits for the engine to be ready', async () => {
    await new Promise((resolve) => setTimeout(resolve, 50));
    const engine = new PromotionEngine();
    expect(engine.apply([{ product: new Product('MUG', 'Coffee Mug', 7.5), quantity: 1 }])).toBe(7.5);
  });

  it('prices a single mug duplicate case one', () => {
    const engine = new PromotionEngine();
    expect(engine.apply([{ product: new Product('MUG', 'Coffee Mug', 7.5), quantity: 1 }])).toBe(7.5);
  });

  it('prices a single mug duplicate case two', () => {
    const engine = new PromotionEngine();
    expect(engine.apply([{ product: new Product('MUG', 'Coffee Mug', 7.5), quantity: 1 }])).toBe(7.5);
  });

  it('prices a single mug duplicate case three', () => {
    const engine = new PromotionEngine();
    expect(engine.apply([{ product: new Product('MUG', 'Coffee Mug', 7.5), quantity: 1 }])).toBe(7.5);
  });
});

describe('CartSummaryNotifier', () => {
  it('notifies the customer of the cart total', () => {
    const mockEngine = {
      apply: jest.fn().mockReturnValue(42),
      getTimesApplied: jest.fn(),
    } as unknown as PromotionEngine;
    const mockNotifications: NotificationPort = { send: jest.fn() };
    const mockProduct = { code: 'MUG', name: 'Coffee Mug', price: 7.5, equals: jest.fn() } as unknown as Product;

    const notifier = new CartSummaryNotifier(mockEngine, mockNotifications);
    const total = notifier.notifyTotal('customer@example.com', [{ product: mockProduct, quantity: 1 }]);

    expect(total).toBe(42);
    expect(mockEngine.apply).toHaveBeenCalledWith([{ product: mockProduct, quantity: 1 }]);
    expect(mockProduct.code).toBe('MUG');
  });

  it('records the run timestamp alongside the notification', () => {
    const sent: string[] = [];
    const notifications: NotificationPort = { send: (_to, message) => sent.push(message) };
    const notifier = new CartSummaryNotifier(new PromotionEngine(), notifications);

    notifier.notifyTotal('customer@example.com', [{ product: new Product('MUG', 'Coffee Mug', 7.5), quantity: 1 }]);

    expect(sent[0]!).toContain('Cart total');
    expect(testRunTimestamp).toBeLessThanOrEqual(Date.now());
  });
});
