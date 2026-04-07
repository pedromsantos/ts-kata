export interface ShoppingCartRepository {
  save(cart: object): Promise<void>;
  get(id: string): Promise<object | null>;
  getAll(): Promise<object[]>;
}
