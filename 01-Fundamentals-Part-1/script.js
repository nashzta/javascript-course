//* Variables and Value

// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// console.log("Jonas");
// console.log(23);

// let firstName = "Matilda";

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// // Variable name conventions
// let jonas_matilda = "JM";
// let $function = "27";

// let person = "Jonas";
// let PI = 3.1415;

// let myFirstJob = "Programmer";
// let myCurrentJob = "Teacher";

// let job1 = "programmer";
// let job2 = "teacher";

// console.log(myFirstJob);

//* Data Types

// // Strings
// console.log("Hola, soy Jean Pierre", typeof "Hola, soy Jean Pierre");

// // Number
// console.log(2023, typeof 2023);

// // Boolean
// console.log(true, typeof true);

// // Dynamic Typing

// let dynamicVariable = "Hola, soy Texto";

// console.log("Dynamic variable:", dynamicVariable, typeof dynamicVariable);

// dynamicVariable = 2023;

// console.log("Dynamic variable:", dynamicVariable, typeof dynamicVariable);

// // Undefined
// let year;
// console.log(year);
// console.log(typeof year);

//* Basic Operators

// // Math Operators

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// const firstName = "Jonas";
// const lastName = "Schmedtmann";
// console.log(firstName + " " + lastName);

// // Assignment Operators
// let x = 10 + 5;
// x += 10;
// x *= 4;
// x++;
// x--;
// x--;

// console.log(x);

// // Comparison Operators

// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018);

//* Operators procedence

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// let x, y;

// x = y = 25 - 10 - 5;
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

//* Strings and Template Literals

// const firstName = "Jean";
// const year = 2023;
// const birthYear = 2000;
// const job = "stevedore";

// const jean =
//   "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// console.log(jean);

// const jeanNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jeanNew);

// console.log(`Just a regular string...`);

// console.log(
//   "String with \n\
// multiple \n\
// lines"
// );

// console.log(`String
// with
// multiple
// lines`);

//* Taking Decisions: if/else statements

// const age = 19;

// if (age >= 18) {
//   console.log("Sarah can star driving license 🚘");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// const birthYear = 1998;

// let century;

// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// console.log(century);

//* Type Conversion and Coercion

// // Conversion
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number("Jean"));
// console.log(typeof NaN);

// console.log(String(23), 23);

// // Coercion

// console.log("I am " + 23 + " years old");
// console.log("23" - "10" - 3);
// console.log("23" / "2");

// let n = "1" + 1;
// n = n - 1;
// console.log(n);

//* Truthy and Falsy values

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log({});
// console.log("");

// const money = 100;
// if (money) {
//   console.log("Don't spend it all ;)");
// } else {
//   console.log("You should get a job!");
// }

// let height = 0;
// if (height) {
//   console.log("YAY! Height is defined");
// } else {
//   console.log("Height is UNDEFINED");
// }

//* Equality Operators

// const age = "18";
// if (age === 18) console.log("You just became an adult :D (strict)");

// if (age === 18) console.log("You just became an adult :D (loose)");

// const favourite = Number(prompt("What's your favourite number?"));

// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   console.log("Cool! 23 is an amazing number!");
// } else if (favourite === 7) {
//   console.log("7 is also a cool number");
// } else if (favourite === 9) {
//   console.log("9 is also a cool number");
// } else {
//   console.log("Number is not 23 or 7");
// }

// if (favourite !== 23) console.log("Why not 23?");

//* Logical Operators

// const hasDriversLicense = true;
// const hasGoodVision = false;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense, !hasGoodVision);

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

// const isTired = true;

// console.log(hasDriversLicense && hasGoodVision && !isTired);
// if (hasDriversLicense && hasGoodVision && isTired) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

//* The Switch Statement

// const day = "monday";

// switch (day) {
//   case "monday":
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//     break;
//   case "tuesday":
//     console.log("Preparay theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Write code examples");
//   case "friday":
//     console.log("Record videos");
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend :D");
//   default:
//     console.log("Not a valid day!");
//     break;
// }

//* Statements and Expressions

// // Expressions
// 3 + 4;
// 1991;
// true && false && !false;

// // Statements

// if (23 < 10) {
//   const str = "23 is a bigger";
// }

// console.log(`I'm ${2037 - 1991} years old`);

//* Ternary Operator

// const age = 23;
// age >= 18
//   ? console.log(`I like to drink wine 🍷`)
//   : console.log(`I like to drink water 💧`);

// const drink = age >= 18 ? `Wine 🍷` : `Water 💧`;
// console.log(drink);

// console.log(`I like to drink ${age >= 18 ? `wine 🍷` : `water 💧`}`);
