var person = {
  name: 'Florin',
  surname: 'Gru',
  age: 34,
  petOwner: false,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
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
  `Folosind obiectul person si un for, afiseaza in consola skillurile de pe pozitiile pare ale arrayului.`,
);

var i;
for (i = 0; i < person.skills.length; i++) {
  if (i % 2 === 0) {
    console.log(person.skills[i]);
  }
}

var skillsLength = person.skills.length;

console.warn(` In mod similar, afiseaza skillurile care NU incep cu j`);

for (i = 0; i < skillsLength; i++) {
  var skillsName = person.skills[i];

  if (skillsName[0].toLocaleLowerCase !== 'j') {
    console.log(skillsName);
  }
}

console.warn(
  `Folosind un for afiseaza propozitia: "Prietenii mei se numesc xxx yyy, xxx yyy, xxx yyy."`,
);

var message = 'Prietenii mei se numesc ';

for (i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var punctuation = ', ';

  if (i === person.friends.length - 1) {
    punctuation = '.';
  }

  message = `${message}${friend.name} ${friend.surname}${punctuation}`;
}
console.log(message);

console.warn(
  `Folosind un for, afiseaza numarul total de ani pe care il au persoanele din arrayul friends, doar daca varsta este mai mare sau egala cu 30 de ani.`,
);

var sumYears = 0;
var friendsLength = person.friends.length;

for (i = 0; i < friendsLength; i++) {
  var friend = person.friends[i];

  if (friend.age >= 30) {
    sumYears += friend.age;
  }
}
console.log(sumYears.toString());

console.warn(`Folosind un for, afiseaza suma anilor de nastere a persoanelor.`);

var sumBirthYears = 0;
for (i = 0; i < friendsLength; i++) {
  var friend = person.friends[i];

  sumBirthYears += 2021 - friend.age;
}
console.log(sumBirthYears.toString());

console.warn(
  `Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends doar daca aceasta este mai mare de 2 ani. `,
);

for (i = 0; i < friendsLength; i++) {
  var friend = person.friends[i];
  var diff = Math.abs(person.age - friend.age);

  if (diff > 2) {
    console.log(diff);
  }
}

console.warn(
  `Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... ", doar daca varsta prietenului este impara.`,
);

message = '';
for (i = 0; i < friendsLength; i++) {
  var friend = person.friends[i];
  var finalSpace = ' ';

  if (i === friendsLength - 1) {
    finalSpace = '';
  }

  if (friend.age % 2 === 0) {
    message = `${message}Intre ${person.name} si ${
      friend.name
    } este o diferenta de ${Math.abs(
      friend.age - person.age,
    )} ani.${finalSpace}`;
  }
}
console.log(message.trim());

console.warn(
  `Folosind proprietatea length a arrayului skills si o bucla for,
  afiseaza in ordine inversa elementele arrayului skills.
  Atentie, va trebui sa numeri invers, de la length la 0.`,
);

for (i = skillsLength - 1; i >= 0; i--) {
  console.log(person.skills[i]);
}
// console.log(person.skills.reverse());
