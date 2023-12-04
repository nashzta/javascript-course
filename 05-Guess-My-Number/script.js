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

// document.querySelector('.check').addEventListener('click', () => {
//   const guess = document.querySelector('.guess').value;
//   console.log(typeof guess);

//   if (!guess) {
//     document.querySelector('.message').textContent = '⛔ No Number';
//   }
// });

//* Implemeting the game logic

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('⛔ No number!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    highScore = highScore < score ? score : highScore;
    document.querySelector('.highscore').textContent = highScore;
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess < secretNumber ? '📉 Too Low!' : '📈 Too high!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lose the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

function resetGame() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = null;
  document.querySelector('.score').textContent = 20;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
}

document.querySelector('.again').addEventListener('click', resetGame);

