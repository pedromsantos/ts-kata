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

export class Takehomecalculator {
  private readonly percent: number;

  constructor(percent: number) {
    this.percent = percent;
  }

  netAmount(first: Money, ...rest: Money[]): Money {
    const monies: Array<Money> = Array.from(rest);
    let total: Money = first;

    for (const next of monies) {
      total = total.plus(next);
    }

    const amount: number = total.value * (this.percent / 100.0);
    const tax: Money = money(Math.trunc(amount), first.currency);

    if (total.currency !== tax.currency) {
      throw new Incalculable();
    }
    return total.minus(tax);
  }
}
