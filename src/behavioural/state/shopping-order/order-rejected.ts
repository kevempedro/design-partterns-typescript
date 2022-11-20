import { ShoppingOrder } from "./shopping-order";
import { ShoppingOrderState } from "./shopping-order-state";

export class OrderRejected implements ShoppingOrderState {
    private name = 'OrderRejected';

    constructor(private order: ShoppingOrder) {}

    getName(): string {
        return this.name;
    }

    approvePayment(): void {
        console.log('Pedido recusado, impossível aprovar pagamento.');
    }

    rejectPayment(): void {
        console.log('O pedido já está no estado pagamento rejeitado.');
    }

    waitPayment(): void {
        console.log('Pedido recusado, impossível mover peido para o estado pendente.');
    }

    shipOrder(): void {
        console.log('Não é possível enivar um pedido com o estado pagamento recusado.');
    }
}
