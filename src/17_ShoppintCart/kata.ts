export interface AddProductToCartUseCase {
  execute(cartId: string, productId: string): void;
}

export interface CreateEmptyCartUseCase {
  execute(cartId: string, customerName: string): void;
}

export interface CalculateCartPriceUseCase {
  query(cartId: string): number;
}
