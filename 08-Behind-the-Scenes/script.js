'use strict';

//* An High-Level Overview of JavaScript

//* Scope and the Scope Chain

//* Scope in practice

// function calcAge(birthYear) {
//   const age = 2023 - birthYear;

//   function printAge() {
//     const output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const firstName = 'Pierre';
//       const str = `Oh, and you're a millenial ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     console.log(millenial);
//   }
//   printAge();

//   return age;
// }

// const firstName = 'Jean';
// calcAge(1990);

//* Hoisting in Practice

/* variables */
// var me = 'Jean';
// let job = 'stevedore';
// const year = 2000;

// /* functions */
// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(3, 4));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// // Example

// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// console.log('Hola me llamo Jean Pierre');

//* The This Keyword

//* The This Keyword in Practice

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2023 - birthYear);
//   console.log(this);
// };

// calcAge(2000);

// const calcAgeArrow = birthYear => {
//   console.log(2023 - birthYear);
//   console.log(this);
// };

// calcAgeArrow(2000);

// const jean = {
//   year: 2000,
//   calcAge: function () {
//     console.log(2023 - this.year);
//     console.log(this);
//   },
//   calcAgeArr: () => {
//     console.log(this);
//   },
// };

// jean.calcAge();

// jean.calcAgeArr();

// const priscila = {
//   year: 2020,
// };

// priscila.calcAge = jean.calcAge;

// priscila.calcAge();

//* Regular functions vs Arrow Functions

/* const jean = {
  firstName: 'Jean',
  year: 2000,
  calcAge: function () {
    console.log(2023 - this.year);
    console.log(this);

    // Solution 1
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillenial();
  },

  greet: () => console.log(`Hey ${this.firstName}`),
};

jean.calcAge();

// arguments keyword

const addExp = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExp(2, 3);
addExp(1, 3, 9);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(2, 4);
 */
