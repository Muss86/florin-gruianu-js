const [nodePath, modulePath, ...arguments] = process.argv;
console.log(arguments);

if (arguments.length !== 1) {
  console.warn('Ne trebuie un singur parametru. Raza cercului.');

  process.exit(0);
}

const [value] = arguments;

if (isNaN(value)) {
  console.warn('Raza trebuie sa fie numerica.');

  process.exit(0);
}

console.log(`Suprafata cercului este ${calculateSurfaceCircle(value)}`);

// hoisting
function calculateSurfaceCircle(r) {
  return Math.PI * r ** 2;
}
