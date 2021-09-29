console.log('Florin');
console.log('32');
console.warn(
  `Afiseaza fraza “Ma numesc xxx yyy si am xx ani.”
   in consola folosind operatorul de concatenare`,
);
console.log(
  'Ma numesc ' +
    person.name +
    ' ' +
    person.surname +
    ' ' +
    'si am ' +
    person.age +
    ' ani.',
);
console.warn(`
Afiseaza anul in care te-ai nascut scazand varsta pe care
ai trecut-o in obiect din anul curent (un proces numit hardcodare)
`);
console.log((2021 - person.age).toString()); //am pus .toString() ca sa inverzeasca pixeltab ul
console.warn(`
Afiseaza fraza “xxx yyy are xx ani.” in consola folosind operatorul de concatenare
`);
console.log(
  person.name + ' ' + person.surname + ' are ' + person.age + ' ani.',
);
console.warn(`
Afiseaza fraza “xxx s-a nascut in aaaa.” Foloseste tot anul curent pentru a scadea varsta.
`);
console.log(person.name + ' s-a nascut in ' + (2021 - person.age) + '.');
