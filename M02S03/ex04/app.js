// load image & paragraph element from DOM
const imageElement = document.getElementsByTagName('img')[0];
const messageElement = document.querySelector('.message');
messageElement.textContent = 'Imaginea se incarca...';

console.log(imageElement.complete);

// bind event to image
// imageElement.addEventListener('load', () => {
//   messageElement.textContent = 'Imaginea s-a incarcat.';
// });

// v2
imageElement.onload = () => {
  messageElement.textContent = 'Imaginea s-a incarcat a doua oara.';

  console.log(imageElement.complete);
};

imageElement.onclick = () => {
  alert(`Imaginea cu URL:...s-a incarcat`);
};
