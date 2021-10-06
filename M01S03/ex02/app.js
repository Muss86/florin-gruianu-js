var person = {
  name: 'Florin',
  surname: 'Gru',
  age: 32,
  petOwner: false,
  skills: {
    html: true,
    css: true,
    javaScript: false,
  },
  friends: {
    larry: {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    steven: {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    carol: {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  },
};

console.log(person.friends.Larry);
console.log(person.skills.javaScript);

console.warn(`Afiseaza varsta prietenei Carol`);

console.log(person.friends.carol.age.toString());

console.warn(
  `Folosind anul curent calculeaza si afiseaza anul de nastere al lui Larry`,
);

console.log((2021 - person.friends.larry.age).toString());

console.warn(
  `Calculeaza diferenta si afiseaza propozitia: Steven este cu xx ani mai mare decat Larry`,
);

console.log(
  person.friends.steven.name +
    ' este cu ' +
    (person.friends.steven.age - person.friends.larry.age) +
    ' ani mai mare decat ' +
    person.friends.larry.name +
    '.',
);

console.warn(
  `Afiseaza propozitia: Prietenul meu steven stevenson are xx ani. folosind doar proprietatile`,
);

console.log(
  'Prietenul meu ' +
    person.friends.steven.name +
    ' ' +
    person.friends.steven.surname +
    ' are ' +
    person.friends.steven.age +
    ' ani.',
);

console.warn(
  `Afiseaza propozitia: “Prietenii mei sunt: Steven, Carol si Larry.`,
);

console.log(
  'Prietenii mei sunt: ' +
    person.friends.steven.name +
    ', ' +
    person.friends.carol.name +
    ' si ' +
    person.friends.larry.name +
    '.',
);

console.warn(
  `Afiseaza propozitia: “Prietenii mei sunt: Larry, Carol si Steven.`,
);

console.log(
  'Prietenii mei sunt: ' +
    person.friends.larry.name +
    ', ' +
    person.friends.carol.name +
    ' si ' +
    person.friends.steven.name +
    '.',
);

console.warn(
  `Afiseaza numarul de caractere al numelui de familie al lui Steven`,
);

console.log(person.friends.steven.surname.length.toString());

console.warn(`Afiseaza propozitia: Steven este cu 2 ani mai mare decat Carol`);

console.log(
  person.friends.steven.name +
    ' este cu ' +
    (person.friends.steven.age - person.friends.carol.age) +
    ' ani mai mare decat ' +
    person.friends.carol.name +
    '.',
);

console.warn(`Afiseaza propozitita: Prietena mea Carol Carolson are 29 ani.`);

console.log(
  'Prietena mea ' +
    person.friends.carol.name +
    ' ' +
    person.friends.carol.surname +
    ' are ' +
    person.friends.carol.age +
    ' ani.',
);

console.warn(
  `Calculeaza diferenta dintre numarul de caractere al numelor lui Steven si Carol.`,
);

console.log(
  (
    person.friends.steven.name.length - person.friends.larry.name.length
  ).toString(),
);

console.warn(
  `Folosind anul curent calculeaza si afiseaza anul de nastere al lui Steven.`,
);

console.log(2021 - person.friends.steven.age + '');

console.warn(
  `Afiseaza numarul de caractere al numelui de familie al lui Larry`,
);

console.log(person.friends.larry.surname.length.toString());
