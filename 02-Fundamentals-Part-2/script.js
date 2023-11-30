'use strict';

//* Use Strict
// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive :D");

// // const interface = "Audio";
// // const private = 534;

//* Functions

// function logger() {
//   console.log("My name is Jean");
// }

// // calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// console.log(fruitProcessor(3, 4));

// const num = Number("23");

//* Functions Declarations vs Expressions

// Declaration

// function calcAge1(birthYear) {
//   return 2023 - birthYear;
// }

// console.log(calcAge1(2000));

// // Expressions

// const calcAge2 = function (birthYear) {
//   return 2023 - birthYear;
// };

// console.log(typeof calcAge2);

//* Arrows Functions

// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;

//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1991, "Jonas"));

// console.log(yearsUntilRetirement(1980, "Bob"));

//* Functions calling other functions

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangesPieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} piece of apple ${orangesPieces} pieces of orange.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

//* Reviewing Functions

// const calcAge = function (birthYear) {
//   return 2023 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years.`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired 🎉.`);
//     return -1;
//   }
// };

//* Introduction to Arrays

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// // const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);

// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedtmann', 2037 - 1992, 'teacher', friends];
// console.log(jonas);
// console.log(jonas.length);

// // Exercise
// const calcAge = function (birthYear) {
//   return 2023 - birthYear;
// };

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];

// console.log(ages);

//* Basic arrays operations

// const friends = ['Michale', 'Steven', 'Peter'];

// //Add elements
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);

// //Remove elements
// friends.pop();
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift();
// console.log(friends);

// // Search
// console.log(friends);
// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));

// friends.includes('Steven');
// friends.includes('Bob');
// friends.includes(23);

// if(friends.includes("Steven")) {
//     console.log("you have")
// }
