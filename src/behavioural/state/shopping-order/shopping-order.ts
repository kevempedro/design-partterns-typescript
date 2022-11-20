import { OrderPending } from "./order-pending";
import { ShoppingOrderState } from "./shopping-order-state";

export class ShoppingOrder {
    private state: ShoppingOrderState = new OrderPending(this);

    getState(): ShoppingOrderState {
        return this.state;
    }

    setState(state: ShoppingOrderState): void {
        this.state = state;
    }

    getStateName(): string {
        return `O estado do pedido agora é: ${this.state.getName()}`;
    }

    approvePayment(): void {
        this.state.approvePayment();
    }

    rejectPayment(): void {
        this.state.rejectPayment();
    }

    waitPayment(): void {
        this.state.waitPayment();
    }

    shipOrder(): void {
        this.state.shipOrder();
    }
}
