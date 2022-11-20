import { ShoppingOrder } from "./shopping-order/shopping-order";

const order = new ShoppingOrder();
console.log(order.getStateName());
order.shipOrder();

order.approvePayment();
console.log(order.getStateName());
order.shipOrder();

order.waitPayment();
console.log(order.getStateName());
order.shipOrder();

order.rejectPayment();
console.log(order.getStateName());
order.shipOrder();
