import { BicycleFactory } from "../factories/bicycle-factory";
import { CarFactory } from "../factories/car-factory";
import { randomNumbers } from "../utils/random-numbers";
import { Vehicle } from "../vehicle/vehicle";

export function randomCarAlgorithm(): Vehicle {
    const carFactory = new CarFactory();
    const car1 = carFactory.getVehicle('Fuscão Preto');
    const car2 = carFactory.getVehicle('Monza');

    const bycicleFactory = new BicycleFactory();
    const bycicle = bycicleFactory.getVehicle('PRO-X');

    const vehicles = [car1, car2, bycicle];

    return vehicles[randomNumbers(vehicles.length)];
}
