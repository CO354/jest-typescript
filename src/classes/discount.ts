export abstract class Discount {
  protected discount = 0;
  calculate(price: number): number {
    return price - price * this.discount;
  }
}

export class FiftyPercenceDiscount extends Discount {
  protected readonly discount = 0.5;
}

export class TenPercenceDiscount extends Discount {
  protected readonly discount = 0.1;
}

export class NoDiscountPercence extends Discount {}
