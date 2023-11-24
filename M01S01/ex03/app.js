// var inputLength = document.getElementById('length');
// var inputWidth = document.getElementById('width');
// var inputHeight = document.getElementById('height');
// var inputResult = document.getElementById('result');
// var form = document.querySelector('form');

// form.addEventListener('submit', function (event) {
//   var length = inputLength.value || 0;
//   var width = inputWidth.value || 0;
//   var height = inputHeight.value || 0;
//   var result = 0;

//   result = length * width * height;

//   inputResult.innerText = result;

//   event.preventDefault();
// });

const inputLength = document.getElementById('length');
const inputWidth = document.getElementById('width');
const inputHeight = document.getElementById('height');
const inputResult = document.getElementById('result');
const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  let length = inputLength.value || 0;
  let width = inputWidth.value || 0;
  let height = inputHeight.value || 0;
  let result = 0;

  result = length * width * height;

  inputResult.innerText = result;

  event.preventDefault();
});
