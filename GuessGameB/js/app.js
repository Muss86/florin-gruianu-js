// userNumber --- userMessage
const userNumber = document.querySelector('.user-input');
const form = document.querySelector('#form');
const myNumber = Math.floor(Math.random() * 10 + 1);

form.addEventListener('submit', function () {
  let userGuess = Number(userNumber.value);
  userNumber.value = '';

  if (userGuess == myNumber) {
    displayText('Ai castigat');
  } else if (userGuess > myNumber) {
    displayText('Numarul e prea mare');
  } else if (userGuess < myNumber) {
    displayText('Numarul este prea mic');
  } else {
    displayText('Ai pierdut');
  }
});
