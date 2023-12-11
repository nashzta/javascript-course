'use strict';

//* An High-Level Overview of JavaScript

//* Scope and the Scope Chain

//* Scope in practice

function calcAge(birthYear) {
  const age = 2023 - birthYear;

  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Pierre';
      const str = `Oh, and you're a millenial ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial);
  }
  printAge();

  return age;
}

const firstName = 'Jean';
calcAge(1990);
