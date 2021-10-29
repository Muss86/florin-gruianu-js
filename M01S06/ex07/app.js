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
