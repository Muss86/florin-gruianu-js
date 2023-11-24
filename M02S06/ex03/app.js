const { readFileSync, writeFileSync } = require('fs');

const message = readFileSync('./file.txt', 'utf8');
writeFileSync('./file.txt', ' This is our node script!', 'utf8');

console.log(message);

// const { readFileSync, writeFileSync } = require('fs');

// const message = readFileSync('./file.txt', 'utf8');
// writeFileSync('./file.txt', 'Acest lucru vreau sa fie scris in fisier', 'utf8');

// console.log(message);
