import { OrderStatus } from './interfaces/orderStatus';
import { CustomerOrder } from './interfaces/customer-protocolo';
import { ShoppingCartProtocolo } from './interfaces/shopping-cart-protocolo';
import { MessagingProtocolo } from '../services/interfaces/messagins-protocolo';
import { SaveOrderProtolo } from '../services/interfaces/saveOrder-protocolo';

export class Order {
  private _orderStatus: OrderStatus = 'open'; //supeitando
  constructor(
    private readonly cart: ShoppingCartProtocolo,
    private readonly message: MessagingProtocolo,
    private readonly saveOrder: SaveOrderProtolo,
    private readonly customer: CustomerOrder,
  ) {}

  // considerado como uma propriedade que nao deve estar aqui
  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }
  // deveria sair
  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Seu carrinho estavazio');
      return;
    }
    this._orderStatus = 'closed';
    this.message.sendMessage(
      `Seu pedido com total ${this.cart.totalWithDiscount()}  foi recebido`,
    );
    this.saveOrder.saveOrder();
    this.cart.clear();
    console.log(
      'o cliente é: ' + this.customer.geIDN(),
      this.customer.getName(),
    );
  }
}
