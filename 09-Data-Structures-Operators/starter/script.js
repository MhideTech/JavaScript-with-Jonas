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
  // Enhanced Object Literals 1:
  // We can move this openingHours outside of the restaurant object and just reference it inside this object using just the property name
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

  // Enhanced Object Literals 2:
  // We can remove the function keyword away from every property that is a function and still work as a function (e.g. orderDelivery && orderPizza)
  // Used in Destructuing Array
  order: function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  // Used in destructuring objects
  orderDelivery({starterIndex = 1, mainIndex = 0, time = "20:00", address}){
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}, will be delivered to ${address} at ${time}`
    );
  },

  // Used in Spread Operator
  orderPasta: function(ing1, ing2, ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  // Used in Rest Pattern and Parameters
  orderPizza(mainIngredients, ...otherIngredients){
    console.log(mainIngredients);
    console.log(otherIngredients);
  }
};

// Destructuring Arrays => ES 6
/*
// Destructuring is a way of unpacking values from an array or an object into seperate variables


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
/*

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

*/


// The Nullish Coalescing Operator => ES2020
/*

restaurant.numGuest =  0;
const guests = restaurant.numGuest || 10;
console.log(guests);

// Nullish = only return false if first value is null or undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuest ?? 10;
console.log(guestCorrect);

*/


// Logical Assignment Operator => ES2021
/*

// Creating two restaurant object
const rest1 = {
  name: 'Fadob Mall',
  // numGuests: 20,
  numGuests: 0,
}

const rest2 = {
  name: 'Jendol',
  owner: 'Jendola Rick'
}

// OR assignment operator
// Setting default number of guest for each rest incase they dont exist (Old way)
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// Introducing the OR Logical Assignment Operator to set the default values (Better way)
// rest1.numGuests ||= 10; // prints 20 if numGuest = 20 and 10 if numGuest = 0 cause it is OR and 0 is falsy
// rest2.numGuests ||= 10; // prints 10 cause it is undefined

// Nullish assignment operator
rest1.numGuests ??= 10; 
rest2.numGuests ??= 10; 
console.log(rest1) // prints 0 if numGuest = 0 and 20 if numGuest = 20
console.log(rest2) // prints 10 cause it is undefined

// AND assignment operator
// Setting anonymous as the new owner for the restaurant that already have an owner
// AND operator assigns a value to a variable if it is truthy
rest1.owner &&= "Anonymous";
rest2.owner &&= "Anonymous";
console.log(rest1)
console.log(rest2)

*/


// Coding Challenge
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

// 5.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6.
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
printGoals(...game.scored);

// 7.
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

*/


// For-of Loop => ES6
/*

// Creating an array of all menu 4rm restaurant object
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// Looping over the menu array using regular for loop
for(let i = 0; i < menu.length; i++) console.log(menu[i]);

// Looping over the array using for of loop
for (const item of menu) console.log(item)

// Getting the current value plus index of an item in an array using for of loop
for (const item of menu.entries()) console.log(item)

// Destructuring the items in the array
for (const [i, el] of menu.entries()) console.log(`${i + 1} : ${el}`)

*/


// Enhanced Object Literals
/*

// Ref to restaurant object

*/


// Optional Chaining = > ES2020
/*

// Assume we want to read the opening hour of monday from the restaurant object which does not exist
// console.log(restaurant.openingHours.mon.open); // We get error Message (cannot read properties of undefined)

// Using an if statement to check
if(restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open) // does not print anything cause it does not exist

// Using optional chaining to solve the first prob
console.log(restaurant.openingHours.mon?.open); // only if the property b4 d ? exist then the open property will be read else it'll return undefined rather than an error message
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  // console.log(day);
  const open =
    restaurant.openingHours[day]?.open ?? 'closed';
    console.log(`On ${day}, we open at ${open}`);
}

// Using optional chaining on methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');


// Using optional chaining on arrays
const users = [{name: 'Ola', email: 'ola@gmail.com'}];

console.log(users[0]?.name ?? 'User array empty')

*/



// Looping Object: Object keys, values and entries
/*

// Accessing each property name from the openingHours object
const properties = Object.keys(restaurant.openingHours);
console.log(properties)
let openStr = `We are open on ${properties.length} days: `;
for(const day of properties){
  openStr += `${day},`
}
console.log(openStr)

// Accessing each property value from the openingHours object
const value = Object.values(restaurant.openingHours);
console.log(value)

// Accessing entire object i.e. openingHours object
const entries = Object.entries(restaurant.openingHours);
console.log(entries);
for(const [key, {open, close}] of entries){
  console.log( `On ${key}, we open at ${open} and close at ${close}`)
}

*/



// Sets => ES6
// A set is a collection of unique values

// Creating a new set with an iterable (array) as an argument
const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
console.log(ordersSet); // all duplicates gone

// Checking the size of the set
console.log(ordersSet.size);

// Checking if a particular item is present in a set
console.log(ordersSet.has("Pizza"));
console.log(ordersSet.has("Bread"));

// Adding new element to a set
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet);

// Deleting an item from a set
ordersSet.delete("Risotto");
console.log(ordersSet);

// Deleting all item from a set
// ordersSet.clear();

// Looping over a set
for(const order of ordersSet){
  console.log(order);
}

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);



