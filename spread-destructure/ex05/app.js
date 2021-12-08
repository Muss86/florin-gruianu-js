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
