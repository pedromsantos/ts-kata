import { ShoppingCartRepository } from './../../Domain/Repositories/shoppingCartRepository';

export class InMemoryShoppingCartRepository implements ShoppingCartRepository {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async save(_cart: object) {
    await Promise.resolve();
  }

  async get(id: string) {
    return await Promise.resolve<object>({ id: id });
  }

  async getAll() {
    return await Promise.resolve([]);
  }
}
