/*
OPEN/CLOSED PRINCIPLE
Entidade devem esta abertas para extensão, mas fechadas para modificação

Em poucas palavras isso significa que nao podemos modificar
o nosso source-code
*/

import { Discount } from './discount';
import { CartItem } from './interfaces/shopping-cartesItem';
import { ShoppingCartProtocolo } from './interfaces/shopping-cart-protocolo';

export class ShoppingCart implements ShoppingCartProtocolo {
  private readonly _items: CartItem[] = [];
  constructor(private readonly discount: Discount) {}

  addItem(item: CartItem): void {
    this._items.push(item);
  }
  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get item(): Readonly<CartItem[]> {
    return this._items;
  }

  total(): number {
    return +this._items.reduce((idx, value) => idx + value.price, 0).toFixed(2);
  }

  totalWithDiscount(): number {
    return this.discount.calculate(this.total());
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    console.log('Carrinho de compra foi limpo');
    this._items.length = 0;
  }
}
