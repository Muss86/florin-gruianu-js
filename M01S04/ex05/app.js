// var i;
// for (i = 0; i <= 100; i++) {
//   console.log(i);

//   if (i % 7 !== 0) {
//     // jump to next iteration
//     continue;
//   }
//   console.log('Acest numar e multiplu de 7.');
// }

// var i;
// var testNumber = prompt('Introdu un numar');
// for (i = 0; i <= 100; i++) {
//   console.log(i);

//   if (i % testNumber !== 0) {
//     // jump to next iteration
//     continue;
//   }
//   console.log(`Acest numar e multiplu de ${testNumber}.`);
// }

var i;
var testNumber = prompt('Introdu un numar');
var upperLimit = prompt('Introdu limita superioara');

for (i = 0; i <= upperLimit; i++) {
  console.log(i);

  if (i % testNumber !== 0) {
    // jump to next iteration
    continue;
  }
  console.log(`Acest numar e multiplu de ${testNumber}.`);
}
