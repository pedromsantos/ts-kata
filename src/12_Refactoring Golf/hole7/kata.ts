export class Incalculable extends Error {}

export class Money {
  public value: number;
  public currency: string;

  private constructor(value: number, currency: string) {
    this.value = value;
    this.currency = currency;
  }

  plus(other: Money): Money {
    if (other.currency !== this.currency) {
      throw new Incalculable();
    }
    return money(this.value + other.value, other.currency);
  }

  minus(other: Money): Money {
    if (this.currency !== other.currency) {
      throw new Incalculable();
    }
    return money(this.value - other.value, this.currency);
  }

  static money(value: number, currency: string): Money {
    return new Money(value, currency);
  }
}

export function money(value: number, currency: string): Money {
  return Money.money(value, currency);
}

export function taxRate(percent: number): TaxRate {
  return TaxRate.taxRate(percent);
}

export class TaxRate {
  public percent: number;

  private constructor(percent: number) {
    this.percent = percent;
  }

  static taxRate(percent: number): TaxRate {
    return new TaxRate(percent);
  }

  apply(total: Money): Money {
    const amount: number = total.value * (this.percent / 100.0);
    return money(Math.trunc(amount), total.currency);
  }
}

export class Takehomecalculator {
  private readonly taxRate: TaxRate;

  constructor(taxRate: TaxRate) {
    this.taxRate = taxRate;
  }

  netAmount(first: Money, ...rest: Money[]): Money {
    const total: Money = rest.reduce(
      (previousValue, currentValue) => previousValue.plus(currentValue),
      first
    );
    const tax: Money = this.taxRate.apply(total);
    return total.minus(tax);
  }
}
