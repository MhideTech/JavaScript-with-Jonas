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
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

// checking the prototype chain of html element
const h1 = document.querySelector('h1');
console.log(h1.__proto__);
console.log(h1.__proto__.__proto__); // and so on an so forth

// Checking the prototype on functions
// Functions and arrays are also objects .: they have prototypes
console.dir(x => x + 1); // contain methods  we can use on functions in Prototype

// Coding Challenge #1
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is stopping at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.brake();
mercedes.accelerate();
mercedes.brake();

// ES6 Classes
// We have class expression and class declaration just like functions
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance Method : available on every object/instace of a class
  // will be on prototype
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static Method : available on the class itself
  static hey() {
    console.log(`Hello there 👋👋`);
    // console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
console.log(jessica.fullName);
console.log(jessica.age);

// PersonCl.prototype.greet = function(){
//     console.log(`Hey ${this.firstName}`);
// }
jessica.greet();

// Things to Note:
// 1. Classes are not hoisted i.e. cannot be used before they are called unlike functions
// 2. Classes are first-class citizens i.e. we can pass them into functions and we can return them from functions
// 3. Classes are executed in strict mode

/////////////////////////////////////////////
// Setters and Getters
const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    return this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

//////////////////////////////////////////
// Static Methods
// Static methods are available on the constructor and not on every object from the constructor
// Example are Number.parseFloat() i.e. it is available on the Number constructor and not on every number
// Methods outside the constructor but inside the class are called INSTANCE METHODS : are available on every object/instance of a class
// Methods with static keyword prefix are called static methods : are available only on the class itself
Person.hey = function () {
  console.log(`Hey there 👋👋`);
  // console.log(this)
};

Person.hey();
PersonCl.hey();

//////////////////////////////////////
// Object.create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven); // creates an empty object

steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();

////////////////////////////////////////////
// Coding Challenge #2

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is stopping at ${this.speed} km/h`);
  }

  get speedUS() {
    return `${this.speed / 1.6} mi/h`;
  }

  set speedUS(speed){
    this.speed =  `${speed * 1.6} km/h`;
    return this.speed;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);


// Inheritance Between "Classes" => Constructor Function
// Parent Class
const PersonIn = function(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
}

PersonIn.prototype.calcAge = function(){
    console.log(2037 - this.birthYear);
}

// Child Class
const Student = function(firstName, birthYear, course){
    // Inheriting firstName and birthYear from PersonIn class
    Person.call(this, firstName, birthYear);
    this.course = course;
}

// Assigning the prototype of student to be the same as PersonIn.prototype
Student.prototype = Object.create(PersonIn.prototype);

console.log(Student.__proto__ === PersonIn.prototype);

Student.prototype.introduce = function(){
    console.log(`My name is ${this.firstName} and I studied ${this.course}`);
}

const mike = new Student("Mike", 2020, "Computer Science");
console.log(mike);
mike.introduce();
console.log(mike.__proto__);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);



/////////////////////////////////////////////
// Coding Challenge #3
const EV = function(make, speed, battery){
    Car.call(this, make, speed);
    this.battery = battery;
}

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function(chargeTo){
    this.battery = chargeTo;
}

EV.prototype.accelerate = function(){
    this.speed += 20;
    this.battery -= 1;
    console.log(`${this.make} going at ${this.speed} km/h with a charge of ${this.battery}%`);
}
const tesla = new EV('Tesla', 120, 23);
console.log(tesla);
tesla.chargeBattery(90)
tesla.accelerate();