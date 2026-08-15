export interface CalculateCartPrice {
  query(cartId: string): Promise<number>;
}
