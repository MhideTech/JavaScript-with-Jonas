// Exporting Module
console.log('Exporting Module');

// Creating some blocking code to delay execution of script.js (ref to Top-Level await)
/*
console.log('Start fetching users');
await fetch('https://jsonplaceholder.typicode.com/users');
console.log('Finish fetching users');
*/

const shippingCost = 10;
export const cart = [];

export const addToCart = function(product, quantity){
  cart.push({product, quantity});
  console.log(`${quantity} ${product} added to cart`);
}

const totalPrice = 237;
const totalQuantity = 23;

export{ totalPrice, totalQuantity };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}