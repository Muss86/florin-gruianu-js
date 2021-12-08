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
// de bagat completarea

console.warn(
  `Destructureaza arrayul friends si obiectul de pe pozitia 1 pentru a putea afisa propozitia:
  “Ma numesc Steven Stevenson si am 31 de ani.”.`,
);
const [, { name, surname, age }] = person.friends;
console.log(`Ma numesc ${name} ${surname} si am ${age} de ani.`);
