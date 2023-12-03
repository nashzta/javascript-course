'use strict';

//* Selecting and manipulatin elements

// console.log(document.querySelector('.message').textContent);
// const message = (document.querySelector('.message').textContent =
//   '🎉 Correct Number!');
// console.log(message);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 22;
// console.log(document.querySelector('.guess').value);

//* Handling click events

document.querySelector('.check').addEventListener('click', () => {
  const guess = document.querySelector('.guess').value;
  console.log(typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number';
  }
});

//* Implemeting the game logic
