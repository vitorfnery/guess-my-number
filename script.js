'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let guessInput = document.querySelector('.guess');

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (numberDisplay) {
  document.querySelector('.number').textContent = numberDisplay;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const bodyBackgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const numberWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

const getGuessValue = function () {
  const guess = Number(document.querySelector('.guess').value);
  return guess;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = getGuessValue();
  // when there is no input
  if (!guess) {
    displayMessage('🛑 No number!');
    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🥳 Correct Number!');
    displayNumber(secretNumber);
    bodyBackgroundColor('#60b347');
    numberWidth('30rem');
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('😑 You lost the game!');
      displayScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  displayNumber('?');
  // the guess input has to be selected by .value because it doesn't have a text content
  //document.querySelector('.guess').value = '';
  guessInput.value = '';
  displayScore(score);
  bodyBackgroundColor('#222');
  numberWidth('15rem');
});
