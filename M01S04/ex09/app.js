var i = 101;

do {
  console.log(i);
  i++;
} while (i <= 100);

console.warn(`Modifica exemplul astfel incat bucla sa numere de la 1 la 100`);

var i = 1;
do {
  console.log(i);
  i++;
} while (i <= 100);

console.warn(
  `Modifica exemplul astfel incat bucla sa numere de la 1 la 99 (dar nu schimba numarul 100).`,
);

var i = 1;
do {
  console.log(i);
  i++;
} while (i < 100);

console.warn(
  `Folosind keywordul break opreste bucla atunci cand numarul este egal cu 50 (dar afiseaza-l).`,
);
var i = 1;
do {
  if (i > 50) {
    break;
  }
  console.log(i);
  i++;
} while (i <= 100);

console.warn(`Modifica exemplul astfel incat bucla sa numere de la 1 la 52 `);

var i = 1;
do {
  console.log(i);
  i++;
} while (i <= 52);

console.warn(`Modifica exemplul astfel incat bucla sa numere de la 1 la 51.`);

var i = 1;
do {
  console.log(i);
  i++;
} while (i < 52);

console.warn(
  `Folosind keywordul break opreste bucla atunci cand numarul este egal cu 12 (dar afiseaza-l)`,
);

var i = 1;
do {
  if (i > 12) {
    break;
  }

  console.log(i);
  i++;
} while (i <= 52);

console.warn(
  `Folosind keywordul continue afiseaza doar numerele impare intre 8 si 32`,
);

var i = 1;
do {
  if (i % 2 !== 0 && i >= 8) {
    console.log(i);
    i++;
    continue;
  }

  i++;
} while (i <= 32);

console.warn(
  `Folosind metoda prompt de trei ori cere utilizatorului un numar,
o limita inferioara si o limita superioara apoi afiseaza toti multiplii
de numar intre limita inferioara si limita superioara introduse.`,
);

var i = 1;
var downLimit = prompt('Alege limita de jos: ');
var upLimit = prompt('Alege limita de sus');
var anyNumber = prompt('Alege un numar: ');

do {
  if (i % anyNumber === 0 && i > downLimit) {
    console.log(i);
    i++;
    continue;
  }

  i++;
} while (i <= upLimit);
