export class Product {
  constructor(
    public readonly code: string,
    public readonly name: string,
    public readonly price: number,
  ) {}

  equals(other: Product): boolean {
    return this.code === other.code;
  }
}
