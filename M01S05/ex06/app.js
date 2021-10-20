const person = {
  getName: () => {
    return 'Numele Tau';
  },
  getAge: () => {
    return 42;
  },
  get email() {
    return 'dragos@pixellab.ro';
  },
  get random() {
    return Math.floor(Math.random() * 100 + 1);
  },
};

const accessor = (methodSuffix) => {
  const methodName = `get${methodSuffix}`;

  if (person[methodName === undefined]) {
    throw new Error('Method not found');

    // console.warn('Method not found');
    // return;
  }
  return person[methodName]();
};

console.log(accessor('Name'));

console.warn(
  `Folosind accesorul salveaza numele mic al persoanei intr-o variabila si foloseste-l in propozitia: “Eu sunt xxx.”`,
);
const fullName = accessor('Name');
// destructurare
const [firstName, lastName] = fullName.split(' ');
const birthYear = new Date().getFullYear() - accessor('Age');

console.log(`Eu sunt ${firstName} ${lastName}.`);

console.warn(`Afiseaza anul de nastere al persoanei folosind anul curent.`);

console.log((new Date().getFullYear() - person.getAge()).toString());

console.warn(
  `Afiseaza propozitia “Ma numesc xxx yyy, am aa ani si m-am nascut in anul aaaa.”`,
);
console.log(
  `Ma numesc ${fullName}, am ${accessor(
    'Age',
  )} ani si m-am nascut in anul ${birthYear}.`,
);
