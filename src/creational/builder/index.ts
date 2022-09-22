// import { MealBox } from "./classes/meal-box";
// import { Bean, Meat, Rice } from "./classes/meals";

import { MainDishBuilder } from "./classes/main-dish-builder";
import { VeganDishBuilder } from "./classes/vegan-dish-builder";

// const rice =  new Rice('Arroz', 5);
// const bean =  new Bean('Feijão', 10);
// const meat =  new Meat('Carne', 20);

// const mealBox = new MealBox();
// mealBox.add(rice, bean, meat);

// console.log(mealBox.getPrice());

const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal().makeDesserte();

console.log(mainDishBuilder.getMeal());
console.log(mainDishBuilder.getPrice());

mainDishBuilder.reset();

const meal2 = mainDishBuilder.makeBeverage().getMeal();
console.log(meal2);

const veganDishBuilder = new VeganDishBuilder();
const veganMeal = veganDishBuilder.makeMeal().getMeal();

console.log(veganMeal);
console.log(veganMeal.getPrice());
