import { Customer } from "./cutomer";

export class EnterpriceCustomer implements Customer {
   constructor(public name: string) {
      this.name += ' (ENTERPRISE)';
   }
}
