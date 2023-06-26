/* Modulos de alto nivel nao devem depender de modulos de baixo nivel. Ambos devem
depender de abstracoes.
Dependa de abstracoes, nao de implementacoes.
Abastracoes nao devem depender de detalhes. Detalhes devem depender de abstracoes


Classes de baixo nivel sao classes que executam tarefas (os detalhes)
Classes de alto nivel sao classes que gerenciam as classes de baixo nivel.
*/

import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Product } from './classes/product';
import { SaveOrder } from './services/saveOrder';
import { ShoppingCart } from './classes/shopping-cart';
import { FiftyPercenceDiscount } from './classes/discount';
import { EnterpriseCustomer, IndividualCustomer } from './classes/customer';
import { MessagingProtocolo } from './services/interfaces/messagins-protocolo';

// const individualCustomer = new IndividualCustomer(
//   'Anselmo',
//   'Jornal',
//   '25144444-44',
// );
const enterpriseCustomer = new EnterpriseCustomer(
  'Enterprise Foc',
  '11111-111',
);
const discount = new FiftyPercenceDiscount();
const shoppingCart = new ShoppingCart(discount);
const messaging = new Messaging();
const saveOrder = new SaveOrder();
const order = new Order(shoppingCart, messaging, saveOrder, enterpriseCustomer);

shoppingCart.addItem(new Product('Camisa', 12));
shoppingCart.addItem(new Product('Caderno', 21));
shoppingCart.addItem(new Product('Lapis', 27));

console.log(shoppingCart.item);
console.log(order.orderStatus);

console.log(`Valor Total de Produtos `, shoppingCart.total());
console.log(`Total com desconto:  `, shoppingCart.totalWithDiscount());
order.checkout();
console.log(order.orderStatus);
