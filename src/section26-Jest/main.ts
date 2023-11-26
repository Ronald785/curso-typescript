/*
Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem
depender de abstrações.
Dependa de abstrações, não de implementações.
Abstrações não devem depender de detalhes. Detalhes devem depender
de abstrações.

Classes de baixo nível são classes que executam tarefas (os detalhes)
Classes de alto nível são classes que gerenciam as classes de baixo nível.
*/

import { Order } from "./classes/order";
// import { Messaging } from "./services/messaging";
import { Persistency } from "./services/persistency";
import { ShoppingCart } from "./classes/shopping-cart";
import { Product } from "./classes/product";
import { NoDiscount } from "./classes/discount";
import { EnterpriseCustomer } from "./classes/customer";
import { MessagingProtocol } from "./classes/interfaces/messaging-protocol";

const noDiscount = new NoDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
// const noDiscount = new NoDiscount();

const shoppingCart = new ShoppingCart(noDiscount);
// const messaging = new Messaging();
const persistency = new Persistency();

// const individualCustomer = new IndividualCustomer(
//   'Ronald',
//   'Almeida',
//   '111.111.111-11',
// );
const enterpriseCustomer = new EnterpriseCustomer(
    "Empresa Gigante",
    "2222222222222222",
);

//Uma vantagem do Dependency Inversion Principle é a possibilidade é mocar os dados ao testar a aplicação
export class MessagingMock implements MessagingProtocol {
    sendMessage(): void {
        console.log("Mensagem enviada!");
    }
}

const messagingMock = new MessagingMock();

const order = new Order(
    shoppingCart,
    messagingMock,
    persistency,
    enterpriseCustomer,
);

shoppingCart.addItem(new Product("Camiseta", 49.91));
shoppingCart.addItem(new Product("Caderno", 9.9123));
shoppingCart.addItem(new Product("Lápis", 1.59));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
order.checkout();
console.log(order.orderStatus);
