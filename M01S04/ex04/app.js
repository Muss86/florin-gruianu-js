console.warn(`Modifica exemplul astfel incat bucla sa numere de la 1 la 100`);

var i;
for (i = 0; i <= 100; i++) {
  console.log(i);
}

console.warn(
  `Modifica exemplul astfel incat bucla sa numere de la 1 la 99 (dar nu schimba numarul 100).`,
);

var i;
for (i = 0; i < 100; i++) {
  console.log(i);
}

console.warn(
  `Folosind keywordul break opreste bucla atunci cand numarul este egal cu 50 (dar afiseaza-l)`,
);

var i;
for (i = 0; i <= 100; i++) {
  console.log(i);

  if (i >= 50) {
    break;
  }
}

console.warn(
  `Folosind keywordul continue afiseaza doar numerele pare intre 1 si 100 (inclusiv 100)`,
);

// versiunea 1
var i;
for (i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    continue;
  }

  console.log(i);
}

// versiunea 2a
var i;
for (i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

console.warn(
  `In mod similar, afiseaza doar numerele care sunt divizibile cu 5. `,
);

var i;
for (i = 1; i <= 100; i++) {
  if (i % 5 !== 0) {
    continue;
  }
  console.log(i);
}

console.warn(`Modifica exemplul astfel incat bucla sa numere de la 1 la 89.`);

var i;
for (i = 1; i <= 100; i++) {
  console.log(i);

  if (i >= 89) {
    break;
  }
}

console.warn(`Modifica exemplul astfel incat bucla sa numere de la 1 la 88.`);

// varianta 1
var i;
for (i = 1; i <= 100; i++) {
  console.log(i);

  if (i >= 88) {
    break;
  }
}

// varianta 2
var i;
for (i = 1; i <= 88; i++) {
  console.log(i);
}

console.warn(
  `Folosind keywordul break opreste bucla atunci cand numarul este egal cu 42.`,
);

var i;
for (i = 0; i <= 100; i++) {
  console.log(i);

  if (i >= 42) {
    break;
  }
}

console.warn(
  `Folosind keywordul continue, afiseaza doar numerele impare intre 1 si 89.`,
);

// varianta 1
var i;
for (i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    continue;
  } else if (i > 89) {
    break;
  }
  console.log(i);
}

// varianta 2
var i;
for (i = 1; i <= 89; i++) {
  if (i % 2 === 0) {
    continue;
  }

  console.log(i);
}

console.warn(
  `In mod similar, afiseaza doar numerele care sunt divizibile cu 3`,
);

// varianta 1
var i;
for (i = 1; i <= 100; i++) {
  if (i % 3 !== 0) {
    continue;
  }

  console.log(i);
}

// varianta 2
var i;
for (i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}
