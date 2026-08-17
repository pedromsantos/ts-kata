import { Cart } from '../Domain/Models/Cart';
import { Product } from '../Domain/Models/Product';
import { CartMother } from './support/CartMother';

describe('CartMother', () => {
  it('creates a valid cart with stable defaults', () => {
    const cart = CartMother.create();

    expect(cart).toBeInstanceOf(Cart);
    expect(cart.id).toBe('cart-1');
    expect(cart.customerName).toBe('Ada Lovelace');
    expect(cart.lineItems).toHaveLength(0);
  });

  it('uses named scenarios to create valid carts with controlled quantities', () => {
    const emptyCart = CartMother.emptyCart();
    const voucherCart = CartMother.voucherCart(3);
    const tShirtCart = CartMother.tShirtCart(4);

    expect(emptyCart.lineItems).toHaveLength(0);
    expect(voucherCart.lineItems).toHaveLength(1);
    expect(voucherCart.lineItems[0]?.product).toBeInstanceOf(Product);
    expect(voucherCart.lineItems[0]?.product.code).toBe('VOUCHER');
    expect(voucherCart.lineItems[0]?.quantity).toBe(3);
    expect(tShirtCart.lineItems).toHaveLength(1);
    expect(tShirtCart.lineItems[0]?.product).toBeInstanceOf(Product);
    expect(tShirtCart.lineItems[0]?.product.code).toBe('TSHIRT');
    expect(tShirtCart.lineItems[0]?.quantity).toBe(4);
  });
});
