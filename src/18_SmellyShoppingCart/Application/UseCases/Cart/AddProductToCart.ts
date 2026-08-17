/* eslint-disable */

import { Product } from '../../../Domain/Models/Product';
import { ShoppingCartRepository } from '../../../Domain/Repositories/ShoppingCartRepository';

class ProductCatalog {
  private static readonly catalog: Record<string, Product> = {
    VOUCHER: new Product('VOUCHER', 'Voucher', 5.0),
    TSHIRT: new Product('TSHIRT', 'T-Shirt', 20.0),
    MUG: new Product('MUG', 'Coffee Mug', 7.5),
  };

  static find(code: string): Product {
    const product = ProductCatalog.catalog[code];
    if (!product) throw new Error(`Unknown product code ${code}`);
    return product;
  }
}

export class AddProductToCart {
  constructor(private readonly repository: ShoppingCartRepository) {}

  async execute(cartId: string, productCode: string, quantity = 1): Promise<void> {
    const cart = await this.repository.findById(cartId);
    if (!cart) throw new Error(`Cart ${cartId} not found`);

    cart.addProduct(ProductCatalog.find(productCode), quantity);
    await this.repository.save(cart);
  }
}
