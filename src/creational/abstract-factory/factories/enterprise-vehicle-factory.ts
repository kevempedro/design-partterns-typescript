import { Customer } from "../customer/cutomer";
import { EnterpriceCustomer } from "../customer/enterpresi-customer";
import { EnterpriseCar } from "../vehicle/enterprise-car";
import { Vehicle } from "../vehicle/vehicle";
import { CreateVehicleCustomerFactory } from "./customer-vehicle-factory";

export class EnterpriseCreateVehicleCustomerFactory implements CreateVehicleCustomerFactory  {
    createCustomer(customerName: string): Customer {
        return new EnterpriceCustomer(customerName)
    }

    createVehicle(vehicleName: string, customerName: string): Vehicle {
        const customer = this.createCustomer(customerName);

        return new EnterpriseCar(vehicleName, customer);
    }
}
