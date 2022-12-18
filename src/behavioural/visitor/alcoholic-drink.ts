import { TaxVisitorProtocol } from "./tax-visitor-protocol";
import { VisitableProduct } from "./visitable-product";

export class AlcoholicDrink extends VisitableProduct {
    constructor(protected price: number) {
        super('AlcoholicDrink', price)
    }

    getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
        return visitor.calculateTaxesForAlcoholicDrink(this);
    }
}
