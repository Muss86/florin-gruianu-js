const paragraphLog = function () {
  let logContainer = document.querySelector('.logs');
  const messageElement = document.createElement('p');
  let result = '';

  if (logContainer === null) {
    logContainer = document.createElement('div');
    logContainer.classList.add('logs');
    document.body.append(logContainer);
  }

  for (i = 0; i < arguments.length; i++) {
    result += arguments[i] + ' ';
  }

  messageElement.innerText = result;

  logContainer.append(messageElement);
};

console.log = paragraphLog;
console.log('Apar in DOM, nu in consola');
