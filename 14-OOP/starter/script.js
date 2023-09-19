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
    this.calcAge = function(){
        console.log(2037 - birthYear);
    }
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
