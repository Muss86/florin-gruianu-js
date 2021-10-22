console.warn(
  `Creeaza o functie overloaded pentru calcularea suprafetelor numita calculateSurface. Daca primeste un parametru, sa calculeze suprafata unui patrat.
  Daca primeste doi, a unui dreptunghi.Daca primeste trei, sa calculeze suprafata totala a paralelipipedului. Foloseste structura switch.`,
);

function calculateSurface(L, l, p) {
  switch (arguments.length) {
    case 1:
      return L ** 2;
      break;
    case 2:
      return L * l;
      break;
    case 3:
      return 2 * (L * l + L * p + l * p);
      break;
  }
}

console.log(calculateSurface(6, 7));
console.log(calculateSurface(20, 15, 5));

console.warn(
  `Creeaza o functie numita calculateCircleArea() si afiseaza suprafata unor cercuri cu raza de 2, 20 si 16.`,
);

function calculateCircleArea(r) {
  return Math.PI * Math.pow(r, 2);
}

console.log(calculateCircleArea(2));
console.log(calculateCircleArea(20));
console.log(calculateCircleArea(16));

console.warn(
  `Creeaza un obiect numit pet cu urmatoarele metode: getName, getSpecies si getAge.
  Folosind metodele obiectului pet afiseaza propozitia: “nnnn este ssss si are aaaa ani.”
  Folosind metoda getAge calculeaza si salveaza intr-o variabila numita petAge varsta
  animalului si afiseaza propozitia: “Animalul meu are petAge ani”`,
);

const pet = {
  getName: () => {
    return 'Gustav';
  },
  getSpecies: () => {
    return 'fish';
  },
  getAge: () => {
    return 2;
  },
};

console.warn(
  `Folosind metodele obiectului pet afiseaza propozitia: “nnnn este ssss si are aaaa ani.”`,
);
console.log(
  `${pet.getName()} este ${pet.getSpecies()} si are ${pet.getAge()} ani.`,
);

console.warn(
  `Folosind metoda getAge calculeaza si salveaza intr-o variabila numita petAge varsta animalului si afiseaza propozitia: “Animalul meu are petAge ani”`,
);
const petAge = pet.getAge();
console.log(`Animalul meu are ${petAge} ani.`);
