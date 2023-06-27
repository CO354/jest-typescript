import {
  Discount,
  NoDiscountPercence,
  FiftyPercenceDiscount,
  TenPercenceDiscount,
} from './discount';

const createSut = (className: new () => Discount): Discount => {
  return new className();
};
describe('Discount', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should have no discount', () => {
    const sut = createSut(NoDiscountPercence);
    expect(sut.calculate(10.99)).toBeCloseTo(10.99);
  });

  it('should apply 50% discount on price', () => {
    const sut = createSut(FiftyPercenceDiscount);
    expect(sut.calculate(150.5)).toBeCloseTo(75.25);
  });

  it('should apply 10% discount on price', () => {
    const sut = createSut(TenPercenceDiscount);
    expect(sut.calculate(150.5)).toBeCloseTo(135.45);
  });
});
