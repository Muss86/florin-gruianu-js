const paragraphLog = function () {
  let logContainer = document.querySelector('.logs');
  const messageElement = document.createElement('p');
  let result = '';

  if (logContainer === null) {
    logContainer = document.createElement('div');
    logContainer.classList.add('logs');
    document.body.append(logContainer);
  }

  let i; //asa ziceai sa pun let i?
  for (i = 0; i < arguments.length; i++) {
    //pot sa pun si asa: for(let i =0; i < arguments.length; i++)?
    result = `${result}  ${arguments[i]} `;
    // asa trebuia cu backtick?
    // result += arguments[i] + ` `;
  }

  messageElement.innerText = result;

  logContainer.append(messageElement);
};

console.log = paragraphLog;
console.log('Apar in DOM, nu in consola');

// -------------------Guess Game----------------------------

const userNumber = document.getElementById('userNumber');
const checkMessage = document.getElementById('checkMessage');
const triesUser = document.getElementById('triesUser');
const form = document.querySelector('form');
const myGuess = Math.floor(Math.random() * 50 + 1);

form.addEventListener('submit', function (event) {
  let userGuess = Number(userNumber.value);
  let message = '';
  let tries = 5;

  while (myGuess !== userGuess) {
    tries++;
    if (userGuess === myGuess) {
      message = 'Ai castigat';

      // console.log('Ai castigat');
    } else if (userGuess > myGuess) {
      message = 'Numarul e prea mare';

      // console.log('Numarul e prea mare');
    } else if (userGuess < myGuess) {
      message = 'Numarul este prea mic';

      // console.log('Numarul este prea mic');
    } else {
      message = 'Ai pierdut';

      // console.log('Ai pierdut');
    }
  }
  checkMessage.innerText = message;
  triesUser.innerText = tries;
  event.preventDefault();
});
