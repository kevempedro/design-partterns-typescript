import { OrderPending } from "./order-pending";
import { OrderRejected } from "./order-rejected";
import { ShoppingOrder } from "./shopping-order";
import { ShoppingOrderState } from "./shopping-order-state";

export class OrderApproved implements ShoppingOrderState {
    private name = 'OrderApproved';

    constructor(private order: ShoppingOrder) {}

    getName(): string {
        return this.name;
    }

    approvePayment(): void {
        console.log('O pedido já está no estado pagamento aprovado.');
    }

    rejectPayment(): void {
        this.order.setState(new OrderRejected(this.order));
    }

    waitPayment(): void {
        this.order.setState(new OrderPending(this.order));
    }

    shipOrder(): void {
        console.log('Enviando o pedido para o cliente...');
    }
}
