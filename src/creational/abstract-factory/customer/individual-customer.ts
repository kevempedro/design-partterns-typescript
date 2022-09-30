import { Customer } from "./cutomer";

export class IndividualCustomer implements Customer {
   constructor(public name: string) {
      this.name += ' (INDIVIDUAL)';
   }
}
