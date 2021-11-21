// determine initial window width
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

// no hoisting:
const displayMessage = (cssClass, message) => {
  let paragraphElement = document.querySelector(`.${cssClass}`);

  if (paragraphElement === null) {
    paragraphElement = document.createElement('p');
    paragraphElement.classList.add(cssClass);
    paragraphElement.innerText = message;

    document.body.append(paragraphElement);

    return;
  }

  paragraphElement.innerText = message;
};

displayMessage('message1', `Latimea ferestrei este ${windowWidth}.`);
displayMessage('message2', 'Fereastra NU si-a schimbat latimea.');

// ignora evenimentele care sunt declansate in interval mai mic de 200ms
const debouncedResize = debounce(() => {
  const newWidth = window.innerWidth;
  const newHeight = window.innerHeight;
  let surface = newWidth + newHeight;
  displayMessage('message1', `Latimea ferestrei este ${newWidth}.`);

  // is initial window width === to new window width
  if (newWidth !== windowWidth) {
    displayMessage('message2', 'Fereastra si-a schimbat latimea.');
  } else {
    displayMessage('message2', 'Fereastra NU si-a schimbat latimea.');
  }

  displayMessage('message3', `Fereastra are acum suprafata de ${surface}`);
  windowWidth = newWidth;
  windowHeight = newHeight;
}, 200);

window.addEventListener('resize', debouncedResize);
