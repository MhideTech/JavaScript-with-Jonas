'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section => Destructuring Arrays
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // Needed for destructuring Objects
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  // Used in Destructuing Array
  order: function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  // Used in destructuring objects
  orderDelivery: function({starterIndex = 1, mainIndex = 0, time = "20:00", address}){
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}, will be delivered to ${address} at ${time}`
    );
  },

  // Used in Spread Operator
  orderPasta: function(ing1, ing2, ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  // Used in Rest Pattern and Parameters
  orderPizza: function(mainIngredients, ...otherIngredients){
    console.log(mainIngredients);
    console.log(otherIngredients);
  }
};

// Destructuring Arrays
/*

// Creating a simple array to be destructured
const arr = [2, 3, 4];

// Assigning values from the array to a variable manually
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c); // Logging the variables to the console

// Creating a destructured variable
const [x, y, z] = arr;
console.log(x, y, z);

// Skipping element while destructuring an array
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching Variable
[main, secondary] = [secondary, main]
console.log(main, secondary);

// Receive 2 returns from a function
const [starterMeal, mainMeal] = restaurant.order(2, 0);
console.log(starterMeal, mainMeal);

// Destructuring Nested Arrays
const nested = [2, 3, [4, 5]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested
console.log(i, j, k);

// Setting default values while destructing an unknown length of an array
const unknown = [8, 9];
let [p, q, r] = unknown;
console.log(p, q, r); // Gets undefined for value r
[p=1, q=1, r=1] = unknown;
console.log(p, q, r); // replace any unknown or undefined variable with a value of 1

*/


// Destructuring Objects
/*

const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

// Changing variable name while destructuring objects
const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);

// Setting default values for variables that does not exist in an object
const {menu = [], starterMenu : starters = []} = restaurant;
console.log(menu, starters);

// Mutating (changing) variables while destructuring objects
let a = 111;
let b = 999;
let obj = {a: 23, b: 7, c: 14};
({a, b} = obj)
console.log(a, b);

// Destructuring Nested Objects
const {fri:{open, close}} = openingHours;
console.log(open, close);

restaurant.orderDelivery({time: '2:30', address: '#1, Joju B/Stop', mainIndex: 2, starterIndex: 2})
restaurant.orderDelivery({address: '#70, Sango Ota',  starterIndex: 1})

*/


// The Spread Operator
/*

const arr = [7, 8, 9];

// Adding arr into newArr using spread operator
const newArr = [...arr, 10, 11, 12]
console.log(newArr);

// Logging individual element of the newArr to the console
console.log(...newArr);


// Adding a new menu item inside the mainMenu array from the restaurant object
const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

// Uses of Spread Operator
// 1. Create Shallow copy array

// Creating a copy of the main menu Array
const mainMenuCopy = [...restaurant.mainMenu];

// 2. Join 2 or more arrays together
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu)

// Using spread operator on strings
const str = "Olamide";
const letters = [...str]
console.log(letters);

// Using spread operator to pass multiple parameters inside a function
// const ingredients = [
//   prompt('Lets make pasta! Ingredient 1?'),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?')
// ];
// restaurant.orderPasta(...ingredients);

// Using spread operator on objects even though they are not iterables
const newRestaurant = {foundIn: 2023, ...restaurant, fonder: "Orlah"};
console.log(newRestaurant);

// Note:
// We can use the spread operator to pass in multiple elements as an argument inside a function
// Spread operator works on so-called iterables e.g. arrays, strings, maps, sets. NOT objects

*/


// Rest Pattern and Parameters
/*

// Rest pattern collects the elements that are unused in the destructuring assignment and return as an array
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, ,risotto, ...otherFoods] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFoods);

const {sat, ...weekdays} = restaurant.openingHours;
console.log(sat, weekdays);

// Rest Parameters
// Creating a function to sum up an unknown length of numbers
const add = function(...numbers){
  let sum = 0;
  for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];
  } 
  console.log(sum)
}

add(2, 3, 4);

// Creating an array of numbers as a parameter to a function
const x = [23, 5, 7];
add(...x)

// Creating a list of ingredients for making pizza which select only the first item, and return the rest in an array
restaurant.orderPizza("Mushroom", "Onions", "Olives", "Spinach");

*/


// Short Circuting (&& and ||)
// Short circuting in case of || operator returns the first value as long as it is a truthy value
console.log(`--- OR ---`);
console.log(3 || 'Jonas');  // 3
console.log('' || 'Jonas'); // Jonas
console.log(true || 0); // true
console.log(undefined || null); // null
console.log(undefined || 0 || '' ||'Hello' || 23 || null); // Hello

// Creating a number of guest with a value of 23 to the restaurant object
restaurant.numGuest =  23;
const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guest1); // 23
const guest2 = restaurant.numGuest || 10;
console.log(guest2); // 23

console.log(`--- AND ---`);
console.log(0 && 7); // 0
console.log(7 && 'Jonas'); // Jonas
console.log('Hello' && 23 && null && 'Jonas'); // null

if(restaurant.orderPizza){
  restaurant.orderPizza("Mushroom", "spinach");
}

restaurant.orderPizza && restaurant.orderPizza('Mushroom', 'spinach'); // Mushroom, [spinach]











