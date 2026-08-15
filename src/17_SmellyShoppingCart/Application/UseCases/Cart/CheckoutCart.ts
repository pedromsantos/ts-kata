/* eslint-disable */

import { ShoppingCartRepository } from '../../../Domain/Repositories/ShoppingCartRepository';
import { EmailNotificationGateway } from '../../../Infrastructure/Gateways/EmailNotificationGateway';
import { OrderClock } from './OrderClock';

export interface Receipt {
  cartId: string;
  total: number;
  confirmationCode: string;
  confirmedAt: string;
}

export class CheckoutCart {
  private readonly notifier = new EmailNotificationGateway();

  constructor(private readonly repository: ShoppingCartRepository) {}

  async execute(cartId: string, customerEmail: string): Promise<Receipt> {
    const cart = await this.repository.findById(cartId);
    if (!cart) throw new Error(`Cart ${cartId} not found`);

    const total = cart.calculateSubtotal();
    const confirmationCode = `ORD-${Math.floor(Math.random() * 1_000_000)}`;
    const confirmedAt = OrderClock.now();

    this.notifier.send(customerEmail, `Order confirmed: ${confirmationCode}, total ${total.toFixed(2)}€`);

    return { cartId, total, confirmationCode, confirmedAt };
  }
}
