// Importing Module

/*
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



// Top-Level await (ES2022);
/*
console.log('Start fetching');
const res = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await res.json();
console.log(data);

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data  = await res.json();
  
  return {title: data.at(-1).title, text: data.at(-1).body};
}

const lastPost = getLastPost();
console.log(lastPost); // returns a promise 'cause getLastPost is an async function that hasnt resolved yet

// Not very clean
lastPost.then(last => console.log(last));

// Better alternative
const lastPost2 = await getLastPost();
console.log(lastPost2);
*/


// The module pattern
const ShoppingCart2 = (function() {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return{
    addToCart,
    cart, 
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2.shippingCost) // undefined