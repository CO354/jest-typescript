import { Discount } from './discount';
import { CartItem } from './interfaces/shopping-cartesItem';
import { ShoppingCart } from './shopping-cart';

const createSut = () => {
  const discountMock = createDiscount();
  const sut = new ShoppingCart(discountMock);
  return { sut, discountMock };
};

const createDiscount = () => {
  class DiscountMock extends Discount {}
  return new DiscountMock();
};

const createCartItem = (name: string, price: number) => {
  class CarteItemMock implements CartItem {
    constructor(public name: string, public price: number) {}
  }

  return new CarteItemMock(name, price);
};

const createSuitWithProduct = () => {
  const { sut, discountMock } = createSut();
  const carteItem1 = createCartItem('Caneta', 40);
  const carteItem2 = createCartItem('Caneta', 43);
  sut.addItem(carteItem1);
  sut.addItem(carteItem2);

  return { sut, discountMock };
};

describe('ShoppingCart', () => {
  it('should be an empty cart when no product iss', () => {
    const { sut } = createSut();
    expect(sut.isEmpty()).toBe(true);
  });

  it('should have 2 cart items', () => {
    const { sut } = createSuitWithProduct();
    expect(sut.item.length).toBe(2);
  });

  it('should test total and  totalDiscount', () => {
    const { sut } = createSuitWithProduct();
    expect(sut.total()).toBe(83);
    expect(sut.totalWithDiscount()).toBe(83);
  });

  it('should add products and clear cart', () => {
    const { sut } = createSuitWithProduct();
    expect(sut.item.length).toBe(2);
    sut.clear();
    expect(sut.item.length).toBe(0);
    expect(sut.isEmpty()).toBe(true);
  });

  it('should remove products cart', () => {
    const { sut } = createSuitWithProduct();
    expect(sut.item.length).toBe(2);
    sut.removeItem(1);
    expect(sut.item.length).toBe(1);
    sut.removeItem(0);
    expect(sut.isEmpty()).toBe(true);
  });

  it('should call discount.calculate when once totalWithDiscount is called', () => {
    const { sut, discountMock } = createSuitWithProduct();
    const discountMockSpy = jest.spyOn(discountMock, 'calculate');
    sut.totalWithDiscount();
    expect(discountMockSpy).toHaveBeenCalledTimes(1);
  });

  it('should call discount with total price  when  totalWithDiscount is called', () => {
    const { sut, discountMock } = createSuitWithProduct();
    const discountMockSpy = jest.spyOn(discountMock, 'calculate');
    sut.totalWithDiscount();
    expect(discountMockSpy).toHaveBeenCalledWith(sut.total());
  });
});
