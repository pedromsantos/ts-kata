/* eslint-disable */

import { ShoppingCartRepository } from '../../../Domain/Repositories/ShoppingCartRepository';
import { NotificationPort } from '../../../Domain/Ports/NotificationPort';
import { Clock } from '../../../Domain/Ports/Clock';
import { EmailNotificationGateway } from '../../../Infrastructure/Gateways/EmailNotificationGateway';
import { OrderClock } from './OrderClock';

export interface Receipt {
  cartId: string;
  total: number;
  confirmationCode: string;
  confirmedAt: string;
}

export class CheckoutCart {
  constructor(
    private readonly repository: ShoppingCartRepository,
    private readonly notifier: NotificationPort = new EmailNotificationGateway(),
    private readonly clock: Clock = new OrderClock(),
    private readonly randomSource: () => number = Math.random,
  ) {}

  async execute(cartId: string, customerEmail: string): Promise<Receipt> {
    const cart = await this.repository.findById(cartId);
    if (!cart) throw new Error(`Cart ${cartId} not found`);

    const total = cart.calculateSubtotal();
    const confirmationCode = `ORD-${Math.floor(this.randomSource() * 1_000_000)}`;
    const confirmedAt = this.clock.now();

    this.notifier.send(customerEmail, `Order confirmed: ${confirmationCode}, total ${total.toFixed(2)}€`);

    return { cartId, total, confirmationCode, confirmedAt };
  }
}
