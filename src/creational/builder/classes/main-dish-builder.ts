import { MealBuilderProtocol } from "../interfaces/meal-builder-protocol";
import { MealBox } from "./meal-box";
import { Rice, Bean, Meat, Beverage, Dessert } from "./meals";

export class MainDishBuilder implements MealBuilderProtocol {
    private _meal: MealBox = new MealBox();

    reset(): this {
        this._meal = new MealBox();

        return this;
    }

    makeMeal(): this {
        const rice =  new Rice('Arroz', 5);
        const bean =  new Bean('Feijão', 10);
        const meat =  new Meat('Carne', 20);

        this._meal.add(rice, bean, meat);

        return this;
    }

    makeBeverage(): this {
        const beverage = new Beverage('Coca-cola', 10);

        this._meal.add(beverage);

        return this;
    }

    makeDesserte(): this {
        const dessert =  new Dessert('Pudim', 12);

        this._meal.add(dessert);

        return this;
    }

    getMeal(): MealBox {
        return this._meal;
    }

    getPrice(): number {
        return this._meal.getPrice();
    }
}
