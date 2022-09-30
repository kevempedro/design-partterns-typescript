import { Customer } from "../customer/cutomer";
import { Vehicle } from "../vehicle/vehicle";

export interface CreateVehicleCustomerFactory {
    createCustomer(customerName: string): Customer;
    createVehicle(vehicleName: string, customerName: string): Vehicle;
}
