const userNumber = document.getElementById('userNumber');
const userMessage = document.getElementById('userMessage');
const livesUser = document.getElementById('livesUser');
const form = document.querySelector('form');
const myNumber = Math.floor(Math.random() * 10 + 1);

form.addEventListener('submit', function (event) {
  let userGuess = userNumber.value || 0;
  let result = '';
  let lives = 5;

  for (i = 5; i > 0; i--) {
    if (userGuess == myNumber) {
      result = 'Ai castigat';

      break;
      // console.log('Ai castigat');
    } else if (userGuess > myNumber) {
      result = 'Numarul e prea mare';
      i--;
      lives -= 1;
      // console.log('Numarul e prea mare');
    } else if (userGuess < myNumber) {
      result = 'Numarul este prea mic';
      i--;
      lives -= 1;
      // console.log('Numarul este prea mic');
    } else {
      result = 'Ai pierdut';
      break;
      // console.log('Ai pierdut');
    }
  }
  userMessage.innerText = result;
  livesUser.innerText = lives;
  event.preventDefault();
});
