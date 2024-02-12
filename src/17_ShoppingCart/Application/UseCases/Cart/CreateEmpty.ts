export interface CreateEmpty {
  execute(cartId: string, customerName: string): Promise<void>;
}
