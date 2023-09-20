'use strict';

// I learnt the introduction to Object Oriented Programming

// Principles of OOP
// 1. Abstraction: ignoring or hiding details that doesnt matter
// 2. Encapsulation: keeping methods and properties private inside d class so that they are not accesible from outside the class
// 3. Inheritance: making all properties and methods of a class (parent class) available to another class (child class)
// 4. Polymorphism: A child class can overwrite a method it inherited from its parent class

// OOP in JS: Prototypes
// All objects in JS are linked to a certain prototype object
// Prototypal Inheritance: All objects that are linked to a certain prototype object can use the method & properties that are defined on that prototype

// Construtor function and the new keyword Operator
const Person = function (firstName, birthYear) {
  // Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never to do this
  // this.calcAge = function(){
  //     console.log(2037 - birthYear);
  // }
};

// What happens when we call a function with the new keyword operator
// 1. New {} is created
// 2. function is called, this = {} (i.e. this keyword points to the newly created {})
// 3. {} is linked to prototype
// 4. function automatically returns {}

const jonas = new Person('Jonas', 1991);
const matilda = new Person('Matilda', 2017);
const orlah = new Person('Orlah', 2004);
console.log(jonas, matilda, orlah);

// Prototypes
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// Using prototypes on Person objects
jonas.calcAge();
orlah.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype); // true

console.log(Person.prototype.isPrototypeOf(jonas)); // true
console.log(Person.prototype.isPrototypeOf(matilda)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

// Setting properties to Person using prototype
Person.prototype.species = 'Homo Sapien';
console.log(jonas.species);
console.log(orlah);

// hasOwnProperty checks if some properties exist in the class/constructor itself
console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

// Prototype Inheritance and Prototype Chain
// Person.prototype is not the prototype of Person but of all the object created using the person constructor
// __proto__ always point the new object's prototype i.e. when used on the instance of the constructor
// Prototype chain: when an object can look up to its prototype for method & properties
console.log(Object.prototype);
console.log(jonas.__proto__);

// Prototypal Inheritance on Built-in Objects
console.log(jonas.__proto__); // prototype of jonas which is also the prototype of Person
console.log(jonas.__proto__.__proto__); // prototype of Object
console.log(jonas.__proto__.__proto__.__proto__); // returns null cause Object is the top of the scope chain
console.log(Person.prototype.constructor); // retuns the constructor function
console.dir(Person.prototype.constructor); // returns the function of the constructor

// Prototypes on Arrays
// Arrays also have prototypes which contain all the array methods we've learnt in previous lessons
// Which simply means every array method we use is inherited from its prototype and not present on the array itself
const arr = [3, 9, 4, 5, 9, 7, 8, 3, 9, 4, 6, 7];
console.log(arr.__proto__);

// The prototype property of a constructor is the same as the prototype of all the object created from that constructor
console.log(arr.__proto__ === Array.prototype); // returns true
console.log(arr.__proto__.__proto__); // back to having the Object property which points to null afterwards

// Creating a unique array method
Array.prototype.unique = function(){
    return [...new Set(this)];
}
console.log(arr.unique())

// checking the prototype chain of html element
const h1 = document.querySelector('h1');
console.log(h1.__proto__);
console.log(h1.__proto__.__proto__); // and so on an so forth

// Checking the prototype on functions
// Functions and arrays are also objects .: they have prototypes
console.dir(x => x + 1) // contain methods we can use on functions in Prototype