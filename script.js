'use strict';

// Variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//Functions
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = score => {
  document.querySelector('.score').textContent = score;
};

const displayNumber = number => {
  document.querySelector('.number').textContent = number;
};

// Check if the answer is equal to secret number
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    // Input doesn't exist
    displayMessage('⛔ No number!');
  } else if (guess === secretNumber) {
    // When players wins
    displayMessage('🎉 Correct Number!');
    displayNumber(secretNumber);

    document.querySelector('body').style.backgroundColor = '#60b347'; // Changing color when it's correct
    document.querySelector('.number').style.width = '30rem';

    // Checking score
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('🔥 You lost the game!');
      displayScore(0);
    }
  }
});

/* Reset listener */

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  displayScore(score);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayNumber('?');
});
