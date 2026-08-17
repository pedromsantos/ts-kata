import { Cart } from '../../Domain/Models/Cart';
import { ShoppingCartRepository } from '../../Domain/Repositories/ShoppingCartRepository';

const carts = new Map<string, Cart>();

export class InMemoryShoppingCartRepository implements ShoppingCartRepository {
  async save(cart: Cart): Promise<void> {
    carts.set(cart.id, cart);
    return Promise.resolve();
  }

  async findById(id: string): Promise<Cart | null> {
    return Promise.resolve(carts.get(id) ?? null);
  }

  static clear(): void {
    carts.clear();
  }
}
