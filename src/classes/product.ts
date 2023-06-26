import { CartItem } from './interfaces/shopping-cartesItem';

export class Product implements CartItem {
  constructor(public name: string, public price: number) {}
}
