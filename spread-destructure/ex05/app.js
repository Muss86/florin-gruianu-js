let person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
  skills: ['html', 'javascript', 'css'],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

console.warn(
  `Folosind destructurarea salveaza primul si ultimul skill in variabile numite skill1 si skill3, apoi folosind aceaste variabile, afiseaza intr-un paragraf propozitia: “Cunosc html si css.”.`,
);
// sintatic sugar pt cons skill3 = person.skills[2]
const [skill1, , skill3] = person.skills;
console.log(`Cunosc ${skill1} si ${skill3}`);

console.warn(
  `Intr-un mod similar destructureaza arrayul friends pentru a obtine obiectul de pe pozitia 1 apoi destructureaza obiectul obtinut in variabilele friend2Name,
   friend2Surname si friend2Age astfel incat sa le poti folosi in propozitia: Ma numesc Steven Stevenson si am 31 de ani. `,
);
const [, { name: friend2Name, surname: friend2Surname, age: friend2Age }] =
  person.friends;
console.log(
  `Ma numesc ${friend2Name} ${friend2Surname} si am ${friend2Age} ani.`,
);

console.warn(
  `Destructureaza obiectul person pentru a obtine o variabila hasPet si in functie de aceasta afiseaza propozitia: “Persoana are/nu are animale”`,
);
const { petOwner: hasPet } = person;
console.log(`Persoana ${hasPet ? 'are' : 'nu are'} animale.`);

console.warn(
  `Destructureaza arrayul friends si obiectele de pe pozitia 0 si 2, astfel incat sa poti afisa propozitiile:
  “Prietenul meu este Larry Larryson”
  “Carol Carolson este prietena mea”.`,
);

const [
  { name: friendName1, surname: friendSurname1 },
  ,
  { name: friendName2, surname: friendSurname2 },
] = person.friends;
console.log(`Prietenul meu este ${friendName1} ${friendSurname1}.`);
console.log(`${friendName2} ${friendSurname2} este prietena mea.`);
