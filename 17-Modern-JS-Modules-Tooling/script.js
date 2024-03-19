//* Importing module

// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// ('./shoppingCart.js');
// addToCart('bread', 5);

console.log('Importing module');

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);

// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 3);

// console.log(cart);

//* Top-level await ES2022

// const getLastPost = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();

//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// const lastPost = getLastPost();
// console.log(lastPost);

// const lastPost2 = await getLastPost();
// console.log(lastPost2);

//* The module pattern
// const ShoppingCart = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to cart`);
//   };

//   const orderStock = function (product, quantity) {
//     console.log(`${quantity} ${product} ordered from supplier`);
//   };

//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//     shippingCost,
//   };
// })();

// ShoppingCart.addToCart('bread', 2);

//* CommonJS Modules
// // Export
// exports.addToCart = function (product, quantity) {
//   cart.push({ product, quantity });
//   console.log(`${quantity} ${product} added to cart`);
// };
// // Import
// const { addToCart } = require('./shoppingCart.js');

//* A brief introduction to the command line
// mkdir: create a file
// cd: to move into carpets
// rm or dl: deletes file and carpets
// mv: move files
// ls: see files

//* Introduction NPM

import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 3 },
    { product: 'cookie', quantity: 2 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);

//* Bundling with Parcel and NPM Scripts

// npm scripts, explaning every files

//* Configuring Babel and Polyfilling

class Person {
  #gretting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#gretting}, ${this.name}`);
  }
}

const jean = new Person('Jean');

console.log('Jean' ?? null);

console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('TEST').then(x => console.log(x));

import 'core-js/stable';
import 'regenerator-runtime/runtime.js';
