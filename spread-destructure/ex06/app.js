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
  `Folosind destructurarea salveaza al doilea skill din arrayul skill si afiseaza intr-un paragraf propozitia: “Vreau sa invat javascript”.`,
);
const [, skill1] = person.skills;
console.log(`Vreau sa invat ${skill1}.`);

console.warn(
  `Intr-un mod similar destructureaza arrayul friends pentru a obtine obiectul de pe pozitia 2 apoi destructureaza obiectul obtinut in variabilele friend2Name,
   friend2Surname si friend2Age astfel incat sa le poti folosi in propozitia: Ma numesc Carol Carolson  si am 29 de ani.`,
);
const [, , { name: friend2Name, surname: friend2Surname, age: friend2Age }] =
  person.friends;
console.log(
  `Ma numesc ${friend2Name} ${friend2Surname} si am ${friend2Age} de ani.`,
);

console.warn(
  `Destructureaza obiectul person pentru a obtine variabile numite myName si mySurname, astfel incat sa poti afisa propozitia: “Ma numesc Iordache Dragos.”.`,
);
const { name: myName, surname: mySurname } = person;
console.log(`Ma numesc ${mySurname} ${myName}.`);

console.warn(
  `Destructureaza arrayul friends si obiectul de pe pozitia 1 pentru a putea afisa propozitia:
  “Ma numesc Steven Stevenson si am 31 de ani.”.`,
);
const [, { name, surname, age }] = person.friends;
console.log(`Ma numesc ${name} ${surname} si am ${age} de ani.`);
