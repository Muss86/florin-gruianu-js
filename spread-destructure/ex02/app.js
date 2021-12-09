/**
 * Folosind operatorul spread, salveaza array1 in array2, astfel incat secventa sa fie completa.
 * Salveaza array4 in array3 astfel incat in array3 sa fie secventa completa.
 * Combina array5 cu array6 intr-un array numit array7 astfel incat secventa sa fie completa.
 * Cloneaza array8 in array9, apoi inverseaza array8 si afiseaza numerele in consola pe linii diferite.
 */

let array1 = [60, 70, 80];
let array2 = [];
array2 = [...array1];
console.log(array2);

let array4 = [40, 50];
let array3 = [10, 20, 30, ...array4, 60, 70, 80];
console.log(array3);

let array5 = [101, 102, 103, 104];
let array6 = [106, 107, 108];
const array7 = [...array5, 105, ...array6];
console.log(array7);

let array8 = [5, 4, 3, 2, 1];
let array9 = [];
array9 = [...array8];

array8.reverse();
array8.forEach((item) => {
  console.log(item);
});

console.log(array9);
