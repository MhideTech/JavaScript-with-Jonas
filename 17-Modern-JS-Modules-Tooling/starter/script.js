// Importing Module

// Importing named exports
import { addToCart, totalPrice as price, totalQuantity } from './shoppingCart.js';

// Importing every exports at once from a module
import * as ShoppingCart from './shoppingCart.js';

console.log('Importing Module');

addToCart('bread', 5);
console.log(price, totalQuantity);

ShoppingCart.addToCart('shoes', 10)
console.log(ShoppingCart.totalPrice, ShoppingCart.totalQuantity);


// Importing default exports
import add,  { cart } from './shoppingCart.js'
add('laptops', 5)
console.log(cart)

// Importing named and default exports at the same time
/*
import add, { addToCart, totalPrice as price, totalQuantity } from './shoppingCart.js';
console.log(price, totalQuantity);
*/

