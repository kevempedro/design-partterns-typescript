import { EnterpriseCreateVehicleCustomerFactory } from "./factories/enterprise-vehicle-factory";
import { IndividualCreateVehicleCustomerFactory } from "./factories/individual-customer-vehicle-factory";

const enterpriseFactory = new EnterpriseCreateVehicleCustomerFactory();
const individualFactory = new IndividualCreateVehicleCustomerFactory();

const car1 = enterpriseFactory.createVehicle('Fuscão Preto', 'João');
const car2 = individualFactory.createVehicle('Celta', 'Helena');

car1.pickUp();
car2.pickUp();
