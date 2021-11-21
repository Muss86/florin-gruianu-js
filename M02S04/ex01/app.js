const box = document.querySelector('.box');
const applyButtonDark = document.getElementById('dark');
// bad selector
const applyButton = document.querySelector('button[title="Aplica"]');
const animateClass = 'animate-class';
const dark = 'dark';

setTimeout(() => {
  box.classList.add(animateClass);

  // callback hell
  setTimeout(() => {
    box.classList.remove(animateClass);
  }, 1 * 1000);
}, 1 * 1000);

applyButton.addEventListener('click', (event) => {
  // element on witch the event was bound
  const applyButton = event.currentTarget;
  box.classList.toggle(animateClass);

  // if (box.classList.contains(animateClass)) {
  //   applyButton.innerText = 'Elimina';
  // } else {
  //   applyButton.innerText = 'Aplica';
  // }

  const buttonTitle = document.querySelector('button');
  let buttonText = 'Aplica';
  buttonTitle.title = 'Aplica';
  if (box.classList.contains(animateClass)) {
    buttonText = 'Elimina';
    buttonTitle.title = 'Elimina';
  }

  applyButton.innerText = buttonText;
});

applyButtonDark.addEventListener('click', () => {
  if (!box.classList.contains(dark)) {
    box.classList.add(dark);
  } else {
    box.classList.remove(dark);
  }
});
