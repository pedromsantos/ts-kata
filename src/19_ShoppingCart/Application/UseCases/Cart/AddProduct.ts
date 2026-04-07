export interface AddProduct {
  execute(cartId: string, productId: string): Promise<void>;
}
