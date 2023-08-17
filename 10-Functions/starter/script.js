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

