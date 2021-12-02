const { readFileSync, writeFileSync } = require('fs');

const message = readFileSync('./file.txt', 'utf8');
writeFileSync('./file.txt', ' This is our node script!', 'utf8');

console.log(message);
