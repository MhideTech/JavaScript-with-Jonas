'use strict';
// Default Parameters with Functions
/*

const bookings = [];
const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers){
    // Setting default values => ES5
    // numPassengers = numPassengers || 1;
    // price = price || 199;

    const booking = {
      flightNum,
      numPassengers,
      price,
    };
    console.log(booking)
    bookings.push(booking);
}
createBooking("LH123")
createBooking("LH123", 2, 800)
createBooking("LH123", 2)
console.log(bookings);

*/


// How Passing Arguments Works: Values vs. Reference
/*

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24739479284) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, jonas);
console.log(flight);
// console.log(jonas);

// Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(jonas);
// checkIn(flight, jonas);

*/


// Functions Accepting Callback Functions
/*

// Creating a function to remove all spaces in a string
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

// Creating a function to capitalize the first word in a string
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher Order Functions
// Creating a function to pass in function as an argument to a function
// The function called is known as Higher Order Function
// The function passed in a function is known as call-back function
const transformer = function(str, fn){
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by ${fn.name}`)
}

transformer('JavaScript is the best', upperFirstWord);
transformer('JavaScript is the best', oneWord);

// Another Example
// Passing function as an argument to an eventListener function
const high5 = function(){
  console.log('👋');
}
document.body.addEventListener('click', high5);

// Passing the function as to be executed for an array
['Jonas', 'Martha', 'John'].forEach(high5);

*/


// Functions Returning Functions
/*

const greet = function(greeting){
  return function(name){
    console.log(`${greeting} ${name}`)
  }
}

const greeter = greet('Hey');
greeter('Jonas')
greeter('Orlah')

// Another method to call the functions
greet('Happy Birthday')('Mhizta Orlah');

const greet2 = greeting2 => (name2) => console.log(`${greeting2} ${name2}`)

greet2('Omo')('Oba');

*/

// The Call, Apply and Bind Methods
/*

// The Call and Apply Methods
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name){
    console.log(`${name} booked a seat on ${this.airline} flights ${this.iataCode}${flightNum}`);
    this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
  }
}

lufthansa.book(239, 'Okefolahan Olamide');
lufthansa.book(239, 'Mhizta Orlah');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
}

const book = lufthansa.book;
// Does not work, cannot read properties of undefined due 2 d this keyword
// book(23, 'Sarah Williams')

// Call Method
book.call(eurowings, '001', "Okefolahan Olamide");
console.log(eurowings);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
}
book.call(swiss, '001', 'Okefolahan Olamide');

// Apply method
// The apply method works the same like as the call but takes in array as an argument after the object the this keyword points to
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

// Using the array on the call method by using the spread operator to spread the values in the array like normal variables
book.call(swiss, ...flightData);


// The Bind Method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');

// Using the Bind Method with Event Listeners
// Setting a new property for the lufthansa object
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;

  // prints NaN cause in an event handler function, the this keyword always points to the element on which the handler is attached to (i.e. button element) in this case
  console.log(this.planes); 
}
// calling the function out here sets the this keyword to lufthansa unlike when the this keyword was a button element
// lufthansa.buyPlane();

// Using the bind method to set the this keyword to the lufthansa object
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Using the bind method with Partial Applications i.e. setting default parameter
// Creating an addTax function
const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// Creating a function to add a predefined rate of tax to any amount passed as an argument
const addVAT = addTax.bind(null, 0.23);
// addVAT looks like = addVAT = addTax + addTax * 0.23
console.log(addVAT(100));
console.log(addVAT(23));

const addVAT2 = (rate2) => value2 => value2 + value2 * rate2;
console.log(addVAT2(0.23)(100));
console.log(addVAT2(0.23)(23));

*/

// CODING CHALLENGE 1
/*

const poll = {
  question: 'What is your favorite programming language?',
  options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  displayResult(type = 'array'){
    if(type === 'array'){
      console.log(`${this.answers}`)
    } else if(type === 'string'){
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
  registerNewAnswer(){
    const answer = Number(prompt(`${this.question} \n ${this.options.join('\n')}\n(Write Option Number)`));
    console.log(this.options[answer])
      
    if(answer < this.options.length){
      (this.answers[answer] += 1);
    }
      
    this.displayResult('string');
  }
} 

const pollBtn = document.querySelector('.poll');
pollBtn.addEventListener('click', poll.registerNewAnswer.bind(poll));

const testData1 = [5, 2, 3];
const testData2 = [1, 5, 3, 9, 6, 1];

poll.displayResult.call({answers : testData1}, 'string');
poll.displayResult.call({answers : testData2});

*/


// Immediately Invoked Function Expression
/*

// Creating a normal function that can run as many times as possible 
const runOnce = function(){
  console.log(`This function can run multiple times`);
}
runOnce();

// Creating a function that will only run once
(
  function(){
    console.log(`This will never run again`);
  }
)();
// enclosing the function in parenthesis makes JS thinks it is an expression

// Creating an II Arrow Function
(() => console.log(`This will ALSO never run again`))();

*/


// Closures
// We dont create closures manually likewise do we explicitly use them. It simply happens in some certain situations in which is what we need to recognize
// A closure makes a function remember all the variables that existed at the function's birthplace
// Any function always has access to its variable environment of the execution context in which the function was created
// Closures is a variable environment attached to a function, exactly as it was at the time and place the function was created
// The booker function has access to the passengerCount variable because it is defined in the scope where it is created

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);


// More Closure Examples
// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f(); // 46
console.dir(f);

// Re-assigning f function
h();
f();
console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);

// CODING CHALLENGE 2
(function(){
  const header = document.querySelector('h1');
  header.style.color = 'red';
  const body = document.querySelector('body');
  body.addEventListener('click', function(){
    header.style.color = 'blue';
    console.log('Already clicked')
  })
})();
