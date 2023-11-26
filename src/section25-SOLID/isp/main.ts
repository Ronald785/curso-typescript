/*
Interface segregation principle (Princípio da segregação de Interface) -
os clientes não devem ser forçados a depender de types, interfaces ou membros
abstratos que não utilizam
*/

import { Order } from "./classes/order";
import { Messaging } from "./services/messaging";
import { Persistency } from "./services/persistency";
import { ShoppingCart } from "./classes/shopping-cart";
import { Product } from "./classes/product";
import { NoDiscount } from "./classes/discount";
import { EnterpriseCustomer } from "./classes/customer";

const noDiscount = new NoDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
// const noDiscount = new NoDiscount();

const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
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

const order = new Order(
    shoppingCart,
    messaging,
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
