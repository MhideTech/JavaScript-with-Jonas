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
const Person = function(firstName, birthYear){
    // Instance Properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never to do this
    // this.calcAge = function(){
    //     console.log(2037 - birthYear);
    // }
}

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
Person.prototype.calcAge = function(){
   console.log(2037 - this.birthYear);
}

// Using prototypes on Person objects
jonas.calcAge();
orlah.calcAge();

console.log(jonas.__proto__); 
console.log(jonas.__proto__ === Person.prototype); // true

console.log(Person.prototype.isPrototypeOf(jonas)) // true
console.log(Person.prototype.isPrototypeOf(matilda)) // true
console.log(Person.prototype.isPrototypeOf(Person)) // false

// Setting properties to Person using prototype
Person.prototype.species = "Homo Sapien";
console.log(jonas.species);
console.log(orlah);

// hasOwnProperty checks if some properties exist in the class/constructor itself
console.log(jonas.hasOwnProperty("firstName"))
console.log(jonas.hasOwnProperty("species"))

// Prototype Inheritance and Prototype Chain
// Person.prototype is not the prototype of Person but of all the object created using the person constructor
// __proto__ always point the new object's prototype i.e. when used on the instance of the constructor
// Prototype chain: when an object can look up to its prototype for method & properties
console.log(Object.prototype);
console.log(jonas.__proto__)
