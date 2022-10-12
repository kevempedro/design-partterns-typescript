import { ProductCustomizationDecorator } from "./product/product-customization-decorator";
import { ProductStampDecorator } from "./product/product-stamp-decorator";
import { TShirt } from "./product/t-shirt";

const tShirt = new TShirt();
console.log(tShirt.getPrice(), tShirt.getName());

const stampTShirt = new ProductStampDecorator(tShirt);
console.log(stampTShirt.getPrice(), stampTShirt.getName());

const stampTShirtPlus = new ProductStampDecorator(stampTShirt);
console.log(stampTShirtPlus.getPrice(), stampTShirtPlus.getName());

const customizationTShirt = new ProductCustomizationDecorator(tShirt);
console.log(customizationTShirt.getPrice(), customizationTShirt.getName());
