const [nodePath, modulePath, ...arguments] = process.argv;
console.log(arguments);

if (arguments.length !== 2) {
  console.warn('Ne trebuiesc 2 parametri. Lungimea si latimea dreptunghiului.');

  process.exit(0);
}

const [value1, value2] = arguments;

if (isNaN(value1) || isNaN(value2)) {
  console.warn('Lungimea si latimea dreptunghiului trebuie sa fie numerice.');

  process.exit(0);
}

console.log(`Suprafata dreptunghiului este ${calculateRectangleSurface(value1, value2)}`);

// hoisting
function calculateRectangleSurface(L, l) {
  return L * l;
}
