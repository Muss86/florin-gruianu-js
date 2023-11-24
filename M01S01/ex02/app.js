// var inputLength = document.getElementById('length');
// var inputWidth = document.getElementById('width');
// var inputResult = document.getElementById('result');
// var form = document.querySelector('form');

// form.addEventListener('submit', function (event) {
//   var length = inputLength.value || 0;
//   var width = inputWidth.value || 0;
//   var result = 0;

//   result = length * width;

//   inputResult.innerText = result;

//   event.preventDefault();
// });

var inputLength = document.getElementById('length');
var inputWidth = document.getElementById('width');
var inputResult = document.getElementById('result');
var form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  var length = inputLength.value || 0;
  var width = inputWidth.value || 0;
  var result = 0;

  result = length * width;

  inputResult.innerText = result;

  event.preventDefault();
});
