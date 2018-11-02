// Your JavaScript goes here
var randomNumber = Math.floor(Math.random() * 30) + 1, guesses = document.querySelector('.guesses'), lastResult = document.querySelector('.lastResult'), lowOrHi = document.querySelector('.lowOrHi'),
 guessSubmit = document.querySelector('.guessSubmit'), guessField = document.querySelector('.guessField'), guessCount = 1, i, resetButton, colors = ['#ff4203', '#ff9c03', '#ffe203', '#85ff03', '#05ff03', '#03ffc7', '#03ffc7', '#03acff', '#0337ff', '#0337ff', '#fd03ff', '#ff0352', 'red'];

function checkGuess() {
  'use strict';
  var userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses: ';
  }

  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    lastResult.textContent = 'Congratulations! You got the right number!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();ī;
  } else if (guessCount === 10) {
    lastResult.textContent = '!!!GAME OVER!!!';
    lowOrHi.textContent = '';
    setGameOver();
  } else {
    lastResult.textContent = 'Oops! try again';
    lastResult.style.backgroundColor = 'rgba(225, 225, 225, 0.3)';
    lastResult.style.color = colors[Math.floor(colors.length * Math.random())];
    lastResult.style.fontWeight = '500';
    if (userGuess < randomNumber) {
      lowOrHi.textContent = 'Last guess was too low!';
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = 'Last guess was too high!';
    }
  }

  guessCount++;
  guessField.value = '';
}

// guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
  'use strict';
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
  resetButton.style.color = 'orange';
  resetButton.style.position = 'absolute';
  resetButton.style.top = '60%';
  resetButton.style.left = '50%';
  resetButton.style.transform = 'translateX(-50%) translateY(-50%)';
  resetButton.style.width = '280px';
  resetButton.style.height = '60px';
  resetButton.style.fontSize = '30px';
  resetButton.style.fontSize = '30px';
  resetButton.style.fontFamily = 'sans-serif';
  resetButton.style.fontWeight = '600';
  resetButton.style.backgroundColor = 'green';
  resetButton.style.border = 'none';
  resetButton.style.borderRadius = '20px';
}

function resetGame() {
  'use strict';
  guessCount = 1;
  var resetParas = document.querySelectorAll('.resultParas p');
  for (i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();
  lastResult.style.backgroundColor = 'gray';
  lastResult.textContent = 'enter new value';
  randomNumber = Math.floor(Math.random() * 100) + 1;
}
