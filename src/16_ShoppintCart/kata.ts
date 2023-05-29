/* eslint-disable */
// @ts-nocheck

interface AddProductToCartUseCase {
  add(cartId: string, productId: string): void;
}

interface CreateEmptyCartUseCase {
  createFor(id: string, customerName: string): void;
}

export class ShoppingCart {
  createEmptyCart(_id: string, _customerName: string) {}
  addProduct(_shoppingCartId: string, _productId: string) {}
}
