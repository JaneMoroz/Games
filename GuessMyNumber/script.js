'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const iconContainer = document.querySelector('.icon-message');

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  const icon = document.getElementById('icon-to-change');

  // When there is no number
  if (!guess) {
    if (iconContainer.classList.contains('icon--invisible')) {
      iconContainer.classList.remove('icon--invisible');
    }
    icon.setAttribute('href', 'sprite.svg#icon-flashed-face');
    icon.style.fill = '#1edd8b';
    displayMessage('No Number!');

    // When player wins
  } else if (guess === secretNumber) {
    if (iconContainer.classList.contains('icon--invisible')) {
      iconContainer.classList.remove('icon--invisible');
    }
    icon.setAttribute('href', 'sprite.svg#icon-laughing-face');
    icon.style.fill = '#f5116c';
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.body.style.backgroundImage =
      'linear-gradient(to top right,  rgba(173, 197, 78), rgba(0, 197, 186))';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is not right
  } else if (guess !== secretNumber) {
    if (score > 1) {
      if (!iconContainer.classList.contains('icon--invisible')) {
        iconContainer.classList.add('icon--invisible');
      }

      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      icon.setAttribute('href', 'sprite.svg#icon-thumb-down');
      icon.style.fill = '#f5113e';
      if (iconContainer.classList.contains('icon--invisible')) {
        iconContainer.classList.remove('icon--invisible');
      }
      document.querySelector('.message').textContent = 'You lost!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  if (!iconContainer.classList.contains('icon--invisible')) {
    iconContainer.classList.add('icon--invisible');
  }
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  document.body.style.backgroundImage =
    'linear-gradient(to top right,  rgba(116, 54, 214), rgba(112, 185, 233))';

  document.querySelector('.number').style.width = '15rem';
});
