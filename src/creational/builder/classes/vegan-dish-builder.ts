import { MealBuilderProtocol } from "../interfaces/meal-builder-protocol";
import { MealBox } from "./meal-box";
import { Rice, Bean, Beverage, Dessert } from "./meals";

export class VeganDishBuilder implements MealBuilderProtocol {
    private _meal: MealBox = new MealBox();

    reset(): this {
        this._meal = new MealBox();

        return this;
    }

    makeMeal(): this {
        const rice =  new Rice('Arroz', 5);
        const bean =  new Bean('Feijão', 10);

        this._meal.add(rice, bean);

        return this;
    }

    getMeal(): MealBox {
        return this._meal;
    }

    getPrice(): number {
        return this._meal.getPrice();
    }
}
