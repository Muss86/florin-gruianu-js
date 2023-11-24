// let value = window.prompt('Introdu o valoare');
// const messageParagraph = document.getElementById('message');
// const oddMessage = 'Numarul este impar';
// const evenMessage = 'Numarul este par';
// const invalidInputMessage = 'Nu ai introdus un numar';

// value = Number(value);

// if (isNaN(value)) {
//   throw new Error(invalidInputMessage);
// }

// console.log(`Valoarea este ${value}.`);

// if (value % 2 === 0) {
//   messageParagraph.innerText = evenMessage;
// } else {
//   messageParagraph.innerText = oddMessage;
// }

// let value = window.prompt('Introdu un numar:');
// const paragraphElement = document.getElementById('message');
// const badInputMessage = 'Nu ai introdus un numar';
// const testNumber = 35;

// if (value === null) {
//   value = NaN;
// } else {
//   if (value.trim().length <= 0) {
//     value = NaN;
//   }
// }
// value = Number(value);

// if (isNaN(value) === false) {
//   if (value < testNumber) {
//     paragraphElement.innerText = `Numarul este mai mic decat ${testNumber}.`;
//   } else if (value === testNumber) {
//     paragraphElement.innerText = `Numarul este ${testNumber}.`;
//   } else {
//     paragraphElement.innerText = `Numarul este mai mare decat ${testNumber}.`;
//   }
// } else {
//   paragraphElement.innerText = badInputMessage;
// }

const name = prompt('Introdu numele tau');
const messageContainer = document.getElementById('message');
const alternateMessageContainer = document.getElementById('alternate-message');
const inputLength = name.replaceAll(' ', '').length;
const testLetter = 'a';
let message = '';

if (inputLength <= 3) {
  message = 'Nu ai introdus un nume suficient de lung';
} else {
  message = `Numele este ${name}`;
}

const lengthMessage = `Numele introdus are ${inputLength} caractere.`;
let inclusionMessage = '';

if (name.includes(testLetter)) {
  inclusionMessage = `Numele contine litera ${testLetter}.`;
} else {
  inclusionMessage = `Numele nu contine litera ${testLetter}.`;
}

messageContainer.innerText = message;
alternateMessageContainer.innerText = `${lengthMessage} | ${inclusionMessage}`;
