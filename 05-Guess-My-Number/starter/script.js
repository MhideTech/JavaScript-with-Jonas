'use strict';

const input = document.querySelector('.guess');
const checkBtn = document.querySelector('.check');
const number = document.querySelector('.number');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const body = document.querySelector('body');
const again = document.querySelector('.again');

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score2 = 20;
let highscore2 = 0;

checkBtn.addEventListener('click', () => {
  if (!input.value) {
    message.textContent = '⛔️ No Number';
  } else if (Number(input.value) === secretNumber) {
    number.textContent = secretNumber;
    message.textContent = '🎉 Correct Answer';
    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    if (score2 > highscore2) {
      highscore2 = score2;
      highscore.textContent = highscore2;
    }
  } else if (Number(input.value) !== secretNumber) {
    if (score2 > 1) {
      message.textContent =
        input.value > secretNumber ? '📈 Too high!' : '📉 Too low!';
      score2--;
      score.textContent = score2;
    } else {
      message.textContent = `You've Lost the game`;
      score.textContent = 0;
    }
  }

  // else if (Number(input.value) > secretNumber) {
  //   if (score2 > 1) {
  //     message.textContent = 'Too High';
  //     score2--;
  //     score.textContent = score2;
  //   } else {
  //     message.textContent = `You've Lost the game`;
  //     score.textContent = 0;
  //   }
  // } else if (Number(input.value) < secretNumber) {
  //   if (score2 > 1) {
  //     message.textContent = 'Too Low';
  //     score2--;
  //     score.textContent = score2;
  //   } else {
  //     message.textContent = `💥 You've Lost the game`;
  //     score.textContent = 0;
  //   }
  // }
});

again.addEventListener('click', () => {
  score.textContent = 20;
  score2 = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  message.textContent = 'Start guessing';
  number.textContent = '?';
  input.value = '';
  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
});
