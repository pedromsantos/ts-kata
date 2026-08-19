import { LineItem } from '../Models/LineItem';
import { NotificationPort } from '../Ports/NotificationPort';
import { PromotionEngine } from './PromotionEngine';

export class CartSummaryNotifier {
  constructor(
    private readonly promotionEngine: PromotionEngine,
    private readonly notifications: NotificationPort,
  ) {}

  notifyTotal(customerEmail: string, items: readonly LineItem[]): number {
    const total = this.promotionEngine.apply(items);
    this.notifications.send(customerEmail, `Cart total: ${total.toFixed(2)}€`);
    return total;
  }
}
