import { Customer } from "../customer/cutomer";
import { Vehicle } from "./vehicle";

export class EnterpriseCar implements Vehicle {
    constructor(public name: string, private readonly customer: Customer) {}

    pickUp(): void {
        console.log(`${this.name} está buscando ${this.customer.name} (ENTERPRISE)`);
    }
}
