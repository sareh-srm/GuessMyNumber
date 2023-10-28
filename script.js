'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let scoreCounter = 20;

let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
//what happens when we click the check button
document.querySelector('.check').addEventListener('click', function () {
  //retrieving and storing the value and converting it to  number
  const guess = Number(document.querySelector('.guess').value);

  //when there is no input
  if (!guess) {
    //guess = 0
    displayMessage('No number entered!');
  }

  //when the player wins the game
  else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = guess;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (scoreCounter > highscore) {
      highscore = scoreCounter;
      document.querySelector('.highscore').textContent = scoreCounter;
    }
  } else if (guess !== secretNumber) {
    if (scoreCounter > 1) {
      displayMessage(guess > secretNumber ? 'Lower!' : 'Higher!');
      scoreCounter--;
      document.querySelector('.score').textContent = scoreCounter;
    } else {
      displayMessage('You lost the game :(');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#ec5a5a';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  //restoring values
  scoreCounter = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //restoring conditions
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = 20;

  //restoring styles
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
