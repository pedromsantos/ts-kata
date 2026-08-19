import { InMemoryShoppingCartRepository } from '../../../Infrastructure/Repositories/InMemoryShoppingCartRepository';
import { CheckoutCart, Receipt } from './CheckoutCart';

export class LegacyCheckoutBatch {
  async execute(cartIds: readonly string[], customerEmail: string): Promise<Receipt[]> {
    const repository = new InMemoryShoppingCartRepository();
    const checkout = new CheckoutCart(repository);
    const receipts: Receipt[] = [];

    for (const cartId of cartIds) {
      receipts.push(await checkout.execute(cartId, customerEmail));
    }

    return receipts;
  }
}
