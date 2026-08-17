import { Cart } from '../Models/Cart';

export interface ShoppingCartRepository {
  save(cart: Cart): Promise<void>;
  findById(id: string): Promise<Cart | null>;
}
