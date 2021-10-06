// console.log(`
//     Dragos este instructor de programare. Dragos studiaza JavaScript de la 17 ani.
//     Cand Dragos a absolvit facultatea si-a facut licenta in JavaScript.
//     Dragos are si un master in tehnologii internet.
//     Dragos este instructor Pixellab si preda JavaScript acolo.
// `);

var person = {
  firstName: 'Flo',
  lastName: 'Bo',
  email: 'abc@ggg.com',
  birthYear: 1990,
  pets: [
    {
      name: 'Coco',
      species: 'fish',
      age: 2,
    },
    {
      name: 'Bobo',
      species: 'dog',
      age: 5,
    },
    {
      name: 'Toto',
      species: 'bird',
      age: 1,
    },
  ],
  zipCode: '1234',
};
var petName = person.pets[0];

console.warn(
  `Afiseaza propozitia: “Numele meu este: xxx si yyy si am x animale.”. Nu uita de proprietatea length a arrayului pets.`,
);

console.log(
  `Numele meu este: ${person.firstName} si ${person.lastName} si am ${person.pets.length} animale.`,
);

console.warn(`Afiseaza propozitia: “Am acelasi email din copilarie: xxx.”`);
console.log(`Am acelasi email din copilarie: ${person.email}.`);

console.warn(
  `Afiseaza propozitia: “Unul din cele x animale ale mele este species si are age ani.”`,
);
console.log(
  `Unul din cele ${person.pets.length} animale ale mele este ${person.pets[1].species} si are ${person.pets[1].age} ani.`,
);

console.warn(
  `Calculeaza si afiseaza (folosind anul curent) anul de nastere al animalului de pe pozitia 2`,
);
console.log((2021 - person.pets[2].age).toString());

console.warn(
  `Calculeaza si salveaza in variabila difference diferenta de ani dintre persoana si animalul de pe pozitia 0 si afiseaza aceasta diferenta. Foloseste anul curent.`,
);
console.log((2021 - person.birthYear - person.pets[0].age).toString());

console.warn(
  `Afiseaza propozitia: “Intre firstName si petName este o diferenta de difference ani.”.`,
);
console.log(
  `Intre ${person.firstName} si ${petName.name} este o diferenta de ${
    2021 - person.birthYear - petName.age
  } ani.`,
);
