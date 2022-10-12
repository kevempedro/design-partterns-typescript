import { ProductProtocol } from "./prodcut-protocol";

export class ProductDecorator implements ProductProtocol {
    constructor(protected product: ProductProtocol) {}

    getPrice(): number {
        return this.product.getPrice()
    }

    getName(): string {
        return this.product.getName()
    }
}
