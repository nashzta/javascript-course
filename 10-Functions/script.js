'use strict';

//* Default Parameters

// const bookings = [];
// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   //ES5
//   //   numPassengers ||= 1;
//   //   price ||= 199;

//   const booking = { flightNum, numPassengers, price };

//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123', 2);

//* How passing arguments Works: value vs reference

// const flight = 'LH234';
// const jean = {
//   name: 'Jean Huaman Gomez',
//   passport: 3444434445566,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = `Mr. ${passenger.name}`;

//   if (passenger.passport === 3444434445566) {
//     alert('Check in!');
//   } else {
//     alert('Wrong passport!');
//   }
// };

// // checkIn(flight, jean);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000000);
// };

// newPassport(jean);
// checkIn(flight, jean);

// console.log(flight);
// console.log(jean);

//* First-Class and Higher-Order Functions

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// Higher order function -->
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('Javascript is the best!', upperFirstWord);
// transformer('Javascript is the best!', oneWord);

// // JS uses callbacks all the time

// const high5 = function () {
//   console.log('✋');
// };

// document.body.addEventListener('click', high5);

// ['Jean', 'Priscila', 'Magdiel'].forEach(high5);

//* Functions returning functions
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('Jean');

// const greetArr = greeting => name => console.log(`${greeting} ${name}`);

//* The call and apply methods

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],

//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, 'Jean');
// lufthansa.book(635, 'Jack Diaz');
// console.log(lufthansa);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;
// // Does not work
// // book(23, "Sarah Williams")

// // Call -> hace apuntar el this al objeto pasado en el primer argumento, los demás argumentos son de la funcion inicial

// book.call(eurowings, 23, 'Maria Angeles');
// console.log(eurowings);

// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 583, 'Mary Cooper');

// // Apply Method

// const flightData = [583, 'George Cooper'];

// book.apply(swiss, flightData);

// // Bind method
// console.log('********** BIND METHOD *************');

// // Bind --> retorna una función con el this enlazado al objeto.
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(230, 'Jean');
// // Podemos establecer un argumento por default
// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Pedro');

// // With event listeners

// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // Partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);

// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

//* Inmmediately Invoked Function Expressions (IIFE)

// const runOnce = function () {
//   console.log('This will never run again');
// };

// runOnce();

// //IIFE
// (function () {
//   console.log('This will never run again');
// })();

// (() => console.log('This will never run again'))();

// // Private variables

// {
//   const isPrivate = 'Hola';
// }

//* CLOUSURES

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };
// // Cómo es posible? respuesta: una funcion tiene accesor al entorno de variable del contexto de ejecucion en el que dicha funcion fue creada

// // booker tiene acceso al entorno de variable de secureBooking
// const booker = secureBooking();
// booker();
// booker();
// booker();
// booker();

// console.dir(booker);

//* More examples: clousures

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
f();
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

  console.log(`Will start boiarding in ${wait} seconds`);
};

boardPassengers(180, 3);
