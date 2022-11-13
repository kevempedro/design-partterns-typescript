import { DefautlDiscount } from "./shopping-cart/default-discount";
import { ECommerceShoppingCart } from "./shopping-cart/ecommerce-shopping-cart";
import { NewlDiscount } from "./shopping-cart/new-discount";

const shoppingCart = new ECommerceShoppingCart();

// shoppingCart.discount = new DefautlDiscount();
shoppingCart.discount = new NewlDiscount();

shoppingCart.addProduct({ name: 'Produto 1', price: 50 });
shoppingCart.addProduct({ name: 'Produto 2', price: 50 });
shoppingCart.addProduct({ name: 'Produto 3', price: 50 });

console.log(shoppingCart.getTotal());
console.log(shoppingCart.getTotalWithDiscount());
