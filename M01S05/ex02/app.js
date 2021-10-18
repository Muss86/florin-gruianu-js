function calculateRectangleArea(L, l) {
  // const area = L * l;

  // return area;

  return L * L;
}

console.warn(
  `Folosind functia calculateRectangleArea() afiseaza suprafata unui dreptunghi de 4 pe 3`,
);
console.log(calculateRectangleArea(4, 3));

console.warn(
  `Afiseaza suprafata totala a unor dreptunghiuri de 5 pe 3, respectiv 3 pe 2. Foloseste variabile.`,
);

const rectangle1Surface = calculateRectangleArea(5, 3);
const rectangle2Surface = calculateRectangleArea(3, 2);
console.log(rectangle1Surface + rectangle2Surface);

console.warn(
  `Calculeaza intr-o variabila numita squareSurface aria unui patrat de 3 pe 3 si afiseaza-i valoarea in consola`,
);
