export interface AddProductToCartUseCase {
  execute(cartId: string, productId: string): void;
}

export interface CreateEmptyCartUseCase {
  execute(id: string, customerName: string): void;
}
