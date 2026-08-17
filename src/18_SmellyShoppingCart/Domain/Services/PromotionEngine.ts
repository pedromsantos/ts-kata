/* eslint-disable */

import { LineItem } from '../Models/LineItem';

export class PromotionEngine {
  private static timesApplied = 0;

  private readonly twoForOneCodes = ['VOUCHER'];
  private readonly bulkDiscountCode = 'TSHIRT';
  private readonly bulkDiscountThreshold = 3;
  private readonly bulkDiscountPrice = 19.0;

  apply(items: readonly LineItem[]): number {
    PromotionEngine.timesApplied++;

    let total = 0;
    for (const item of items) {
      total += this.priceFor(item);
    }
    return total;
  }

  static getTimesApplied(): number {
    return PromotionEngine.timesApplied;
  }

  private priceFor(item: LineItem): number {
    if (this.twoForOneCodes.includes(item.product.code)) {
      const payableUnits = Math.ceil(item.quantity / 2);
      return payableUnits * item.product.price;
    }

    if (item.product.code === this.bulkDiscountCode && item.quantity >= this.bulkDiscountThreshold) {
      return item.quantity * this.bulkDiscountPrice;
    }

    return item.quantity * item.product.price;
  }
}
