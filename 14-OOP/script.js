'use strict';

//* Function constructor
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jean = new Person('Jean', 2000);
console.log(jean);

// 1. New {} is created
// 2. function is called, {} = this
// 3. {} linked to prototype
// 4. funciton automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(jack);

console.log(jean instanceof Person);

Person.hey = function () {
  console.log('Hey there 👋');
};

//* Prototypes

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jean.calcAge();
matilda.calcAge();

console.log(jean.__proto__);
console.log(Person.prototype);
console.log(jean.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jean));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(jean.species, matilda.species);

console.log(jean.hasOwnProperty('firstName'));
console.log(jean.hasOwnProperty('species'));

//* Prototypal Inheritance on Built-In Objects

console.log(jean.__proto__);
console.log(jean.__proto__.__proto__);
console.log(jean.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 6, 5, 6, 9, 9];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);

//* ES6 Classes

// class expression
// const PersonCl = class {}

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hello ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}

const priscila = new PersonCl('Priscila', 2003);
console.log(priscila);

priscila.calcAge();

console.log(priscila.__proto__ === PersonCl.prototype);

priscila.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizes
// 3. Classes are executed in strict mode

//* Setters and Getters

const walter = new PersonCl('Walter White', 1923);

const account = {
  owner: 'Jean',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);
console.log(account.latest);

// Static Methods

Array.from(document.querySelector(''));
