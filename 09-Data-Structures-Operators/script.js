'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// Naming a property with expresions - enhanced objects literals
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // old
  // openingHours: openingHours,

  // ES6 enhanced object literals
  openingHours,

  // Enhanced methods of object literals
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//* MAPS ITERATION

// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct 🎉'],
//   [false, 'Try again!'],
// ]);

// console.log(question);

// // Convert object to map with entries
// console.log(Object.entries(openingHours));

// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// // Quizz app

// console.log(question.get('question'));

// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// // const answer = Number(prompt('Your answer'));
// const answer = 3;
// console.log(question.get(answer === question.get('correct')));

// // Convert map to array

// console.log([...question]);
// console.log(question.entries());
// console.log(question.keys());
// console.log(question.values());

//* MAPS
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :(');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// console.log(rest);

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// console.log(rest.size);

// const arr = [1, 2];
// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest.get(arr));
// console.log(rest);

//* SETS

// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Rissoto',
//   'Pasta',
//   'Pizza',
// ]);

// console.log(ordersSet.size);

// //search
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));

// //add
// ordersSet.add('Garlic Bread');

// //delete
// ordersSet.delete('Rissoto');

// //clear
// // ordersSet.clear();

// //forof
// for (const order of ordersSet) {
//   console.log(order);
// }
// console.log(ordersSet);

// //Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

//* Looping objects: Object keys, values and entries

// Property NAMES
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;

// for (const day of Object.keys(openingHours)) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// // Property VALUES

// const values = Object.values(openingHours);
// console.log(values);

// // Entire Object

// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

//* Optional Chaining (?.)

// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// //with optional chaining
// console.log(restaurant.openingHours?.mon?.open);

// //Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// // Methods

// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRissoto?.(0, 1) ?? 'Method does not exist');

// // Arrays

// const users = [{ name: 'Jean', email: 'jeanpipoxi@gmail.com' }];
// console.log(users[0]?.name ?? 'User array empty');
// console.log(users[1]?.name ?? 'User array empty');

//* Enhanced object literals

// in restaurant object

//* Looping Arrays: The for-of loop

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// // without index
// for (const item of menu) console.log(item);

// // with index - entries method
// for (const [index, item] of menu.entries()) console.log(index, item);

//* Logical Assignment Operators

// const rest1 = {
//   name: 'Capri',
//   // numGuests: 20,
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La piazza',
//   owner: 'Giovanni Rossi',
// };

// // OR assignment operator
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;

// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;

// // Nullish coalescing operator

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// // AND assignment operator
// // rest1.owner = rest1.owner && '<ANONYMUS>';
// // rest2.owner = rest2.owner && '<ANONYMUS>';

// rest1.owner &&= '<ANONYMUS>';
// rest2.owner &&= '<ANONYMUS>';

// console.log(rest1);
// console.log(rest2);

//* THE NULLISH COALESCING OPERATOR (??)
// Only false is null and undefined (NOT 0 or "")
// restaurant.numGuests = false;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);

//* SHORT CIRCUITING (&& AND ||)

// //*-  OR OPERATOR (||) retorna el primer valor verdadero.
// console.log(3 || 'Jean');
// console.log('' || 'Jean');
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// // Ternary operator
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// // Short circuiting - OR

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// //*- AND OPERATOR (&&) retorna el ultimo valor si todos son verdadero y sino retorna el primer valor falso.

// console.log('------ AND ------');
// console.log(0 && 'Jean');
// console.log(7 && 'Jean');
// console.log('Hello' && 23 && null && 'Jonas');

// // If statements
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }
// // AND Operator
// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

//* REST PATTERN AND PARAMETERS

// //*- Destructuring
// // spread -> because on RIGHT side of = operator
// const arr = [1, 2, ...[3, 4]];

// // rest -> because on LEFT side of = operator
// // Rest captura los demás elementos que no son tomados en el destructuring

// // rest:           ↓
// const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
// console.log(others);

// const [pizza, , rissoto, ...othersMenus] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(pizza, rissoto, othersMenus);

// // Rest Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// //*- Functions

// const add = function (...numbers) {
//   let sum = 0;
//   for (const number of numbers) {
//     sum += number;
//   }
//   return sum;
// };
// console.log(add(2, 3, 4));
// console.log(add(5, 3, 7, 2));
// console.log(add(6, 5, 8, 34, 1, 7, 3, 9));

// const x = [23, 5, 7];
// console.log(add(...x));

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');

//* THE SPREAD OPERATOR
// Concepto: Desempaqueta todos los elementos.

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);
// console.log(1, 2, 7, 8, 9);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // Copy array

// const mainMenuCopy = [...restaurant.mainMenu];

// // Join 2 to arrays

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// // Iterables: arrays, strings, maps, sets

// const str = 'Jean';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);
// console.log(...str);
// console.log('j', 'e', 'a', 'n');
// // console.log(`${...str} Huaman`)

// // const ingredients = [
// //   prompt("Let's make pasta! Ingredient 1?:"),
// //   prompt('Ingredient 2?:'),
// //   prompt('Ingredient 3?:'),
// // ];

// // restaurant.orderPasta(...ingredients);

// // Objects
// const newRestaurant = { ...restaurant, founder: 'Guiseppe', foundedIn: 1998 };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

//* DESTRUCTURING OBJECTS

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// // Rename
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);

// // Default Value
// const { menu = [], starterMenu: staters = [] } = restaurant;
// console.log(menu, staters);

// // Mutating variables

// let a = 111;
// let b = 999;

// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);

// // Nested objects
// const {
//   openingHours: {
//     fri: { open: o, close: c },
//   },
// } = restaurant;

// console.log(o, c);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
// });

// const { fri, sat, thu } = restaurant.openingHours;
// console.log(fri, sat, thu);

//* DESTRUCTURING ARRAYS

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;

// console.log(a, b, c);
// console.log(x, y, z);
// //                 first     second       third          fourth
// // categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // Switching variables
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// [main, secondary] = [secondary, main];

// console.log(main, secondary);

// // Receive 2 return values from a function
// const [starteMenu, mainCourse] = restaurant.order(2, 0);
// console.log(starteMenu, mainCourse);

// // Nested destructuring

// const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default Values
// //              ↓ default value
// const [p, q, r = 10] = [8, 9];
// console.log(p, q, r);
