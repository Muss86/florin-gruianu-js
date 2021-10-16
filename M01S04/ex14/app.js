var person = {
  firstName: 'Dragos',
  lastName: 'Iordache',
  birthYear: 1987,
  pets: [
    {
      name: 'Twix',
      species: 'papagal',
      age: 4,
    },
    {
      name: 'Mars',
      species: 'caine',
      age: 2,
    },
    {
      name: 'Bounty',
      species: 'hamster',
      age: 4,
    },
    {
      name: 'Lion',
      species: 'pisica',
      age: 10,
    },
  ],
};

console.warn(
  `Afiseaza in consola folosind metoda forEach() numele fiecarui animal.`,
);

person.pets.forEach(function (pet) {
  console.log(pet.name);
});

console.warn(`Folosind o bucla for afiseaza suma anilor animalelor.`);

var sumAge = 0;
var i;

for (i = 0; i < person.pets.length; i++) {
  sumAge += person.pets[i].age;
}
console.log(sumAge);

console.warn(
  `Folosind forEach() afiseaza cate una pe linie propozitiile: “Twix este papagal si are 4 ani. Mars este caine si are… etc”.`,
);

person.pets.forEach(function (pet) {
  var { name, species, age } = pet;

  console.log(`${name} este ${species} si are ${age} ani.`);
});

console.warn(
  `Folosind o bucla for afiseaza cate una pe linie propozitiile: “Intre Dragos si Twix este o diferenta de xx ani. Intre Dragos si Mars… ” (repeta pentru toate intrarile din array).`,
);

for (i = 0; i < person.pets.length; i++) {
  var pet = person.pets[i];
  var agePerson = 2021 - person.birthYear;
  console.log(
    `Intre ${person.firstName} si ${pet.name} este o diferenta de ${
      agePerson - pet.age
    } ani.`,
  );
}

console.warn(
  `Folosind o bucla for afiseaza in ordine inversa numele animalelor din array sub forma de propozitii: “Animalul meu se numeste xxxx.”.`,
);

var i;
for (i = person.pets.length - 1; i >= 0; i--) {
  console.log(`Animalul meu se numeste ${person.pets[i].name}`);
}

console.warn(
  `Folosind o bucla for afla care este cel mai in varsta animal si afiseaza propozitia: “xxx este cel mai batran animal pe care il am, dar intre noi este o diferenta de xx ani.” `,
);

var i;
var agePerson = 2021 - person.birthYear;
for (i = 0; i < person.pets.length; i++) {
  var old = 0;

  if (old < person.pets[i].age) {
    var namePet = person.pets[i].name;
    old = person.pets[i].age;
  }
}
console.log(
  `${namePet} este cel mai batran animal pe care il am, dar intre noi este o diferenta de ${
    agePerson - old
  } ani.`,
);

console.warn(
  `Folosind o bucla forEach afiseaza propozitia: “Am papagal, caine, hamster si pisica.”.`,
);

var message = 'Am ';
person.pets.forEach(function ({ species }, index) {
  var punctuation = ', ';
  var arrLength = person.pets.length;

  if (index === arrLength - 1) {
    punctuation = '.';
  } else if (index === arrLength - 2) {
    punctuation = ' si ';
  }

  message = `${message}${species}${punctuation}`;
});
console.log(message);
