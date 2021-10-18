const person = {
  getName: () => {
    return 'Florin Gru';
  },
  getAge: () => {
    return 34;
  },
};

console.warn(`Afiseaza primul nume al persoanei folosind metoda getName()`);

const personFirstName = person.getName().split(' ')[0];
console.log(personFirstName);

console.warn(
  `Afiseaza anul de nastere al persoanei folosind metoda getAge() si anul curent.`,
);

const currentYear = new Date().getFullYear();
const personBirthYear = currentYear - person.getAge();
console.log(personBirthYear);

console.warn(
  `Afiseaza ultimele doua cifre al anului de nastere al persoanei, folosind anul curent si metoda getAge(). (Exemplu: ‘87).`,
);
console.log(`'${personBirthYear.toString().slice(-2)}`);

console.warn(`Afiseaza propozita: “Ma numesc xxx si am yy ani!”`);

console.log(`Ma numesc ${person.getName()} si am ${person.getAge()} ani!`);
