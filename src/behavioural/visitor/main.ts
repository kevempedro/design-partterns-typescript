import { AlcoholicDrink } from "./alcoholic-drink";
import { BrazilTaxVisitor } from "./brazil-tax-visitor";
import { Cigarette } from "./cigarette";
import { Food } from "./food";
import { USTaxVisitor } from "./us-tax-visitor";

const food = new Food(10);
const cigarette = new Cigarette(5);
const alcoholicDrink = new AlcoholicDrink(5);

const brazilTaxVisitor = new BrazilTaxVisitor();
const usTaxVisitor = new USTaxVisitor();

const cart = [food, cigarette, alcoholicDrink];
const total = cart.reduce((sum, item) => item.getPrice() + sum, 0);
const totalWithBrazilTaxes = cart.reduce((sum, item) => item.getPriceWithTaxes(brazilTaxVisitor) + sum, 0);


const totalWithUSTaxes = cart.reduce((sum, item) => item.getPriceWithTaxes(usTaxVisitor) + sum, 0);

console.log('TOTAL -> ', total);
console.log('TOTAL WITH BRAZIL TAXES -> ', totalWithBrazilTaxes);

console.log('TOTAL WITH US TAXES -> ', totalWithUSTaxes);