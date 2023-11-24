const button = document.getElementById('clicker');
const removeEventButton = document.getElementById('remove-event');
const querryButton = document.getElementById('querry');
const messageParagraph = document.getElementById('message');

const clickHandler = () => {
  alert('Ai apasat butonul');
};
button.addEventListener('click', clickHandler);

console.warn(
  `Adauga un buton pe care scrie Elimina Evenimentul.
`,
);
removeEventButton.addEventListener('click', () => {
  button.removeEventListener('click', clickHandler);
});

querryButton.addEventListener('click', function () {
  const userAge = prompt('Ce varsta ai?');
  const message = `Ai ${userAge} ani.`;

  console.log(message);
  messageParagraph.innerText = message;
});
