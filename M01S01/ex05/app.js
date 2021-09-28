var inputRadius = document.getElementById('radius');
var inputResult = document.getElementById('result');
var form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  var radius = inputRadius.value || 0;
  var result = 0;

  result = (4 / 3) * Math.PI * Math.pow(radius, 3);

  element.Result.innerText = result;

  event.preventDefault();
});
