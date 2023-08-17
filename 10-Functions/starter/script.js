'use strict';
// Default Parameters with Functions
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