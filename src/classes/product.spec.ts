import { Product } from './product';

const createSut = (name: string, price: number) => {
  return new Product(name, price);
};
describe('Messaging', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should have propeties name and price', () => {
    // System under test
    const sut = createSut('Manga curtas', 35.5);
    expect(sut).toHaveProperty('name', 'Manga curtas');
    expect(sut.price).toBeCloseTo(35.5);
  });
});
