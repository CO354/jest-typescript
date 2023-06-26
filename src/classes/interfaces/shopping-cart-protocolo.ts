import { CartItem } from './shopping-cartesItem';

export interface ShoppingCartProtocolo {
  addItem(item: CartItem): void;
  removeItem(index: number): void;

  item: Readonly<CartItem[]>;

  total(): number;

  totalWithDiscount(): number;

  isEmpty(): boolean;

  clear(): void;
}
