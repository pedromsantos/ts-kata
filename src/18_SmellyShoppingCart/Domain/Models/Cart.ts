/* eslint-disable */

import { LineItem } from './LineItem';
import { Product } from './Product';
import { PromotionEngine } from '../Services/PromotionEngine';

export class Cart {
  private readonly items: LineItem[] = [];
  private readonly promotionEngine = new PromotionEngine();

  constructor(
    public readonly id: string,
    public readonly customerName: string,
  ) {}

  addProduct(product: Product, quantity = 1): void {
    const existing = this.items.find((item) => item.product.equals(product));

    if (existing) existing.quantity += quantity;
    else this.items.push({ product, quantity });
  }

  get lineItems(): readonly LineItem[] {
    return this.items;
  }

  calculateSubtotal(): number {
    return this.promotionEngine.apply(this.items);
  }
}
