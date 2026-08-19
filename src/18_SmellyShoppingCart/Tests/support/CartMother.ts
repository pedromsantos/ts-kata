import { Cart } from '../../Domain/Models/Cart';
import { Product } from '../../Domain/Models/Product';

const DEFAULT_CART_ID = 'cart-1';
const DEFAULT_CUSTOMER_NAME = 'Ada Lovelace';

const create = (): Cart => {
  return new Cart(DEFAULT_CART_ID, DEFAULT_CUSTOMER_NAME);
};

export const CartMother = {
  create,

  emptyCart(): Cart {
    return create();
  },

  voucherCart(quantity: number): Cart {
    const cart = create();
    cart.addProduct(new Product('VOUCHER', 'Voucher', 5), quantity);
    return cart;
  },

  tShirtCart(quantity: number): Cart {
    const cart = create();
    cart.addProduct(new Product('TSHIRT', 'T-Shirt', 20), quantity);
    return cart;
  },
};
