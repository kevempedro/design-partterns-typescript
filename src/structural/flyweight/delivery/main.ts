import { deliveryContext } from "./delivery-context";
import { DeliveryFactory } from "./delivery-factory";

const factory = new DeliveryFactory();
deliveryContext(factory, 'Kevem', '116', 'Rua Oito', 'Três Marias');
deliveryContext(factory, 'Vitor', '116', 'Rua Oito', 'Três Marias');
deliveryContext(factory, 'Silvia', '117', 'Rua Oito', 'Três Marias');
deliveryContext(factory, 'Romildo', '118', 'Rua None', 'Três Marias');
deliveryContext(factory, 'Liliane', '677', 'Rua Dez', 'Três Marias');


console.log('--------------------');

console.log(factory.getLocations());
