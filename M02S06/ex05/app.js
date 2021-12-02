// 16+
// import { readFileSync } from "fs";

// pana in 16

// fs = {readFileSync : () => {}, writeFileSync: () => {}}
const { readFileSync, writeFileSync } = require('fs');
const message = readFileSync('./output1.txt', 'utf8');
const data = new Date();
const day = data.getDate();
const mounth = data.getMonth();
const year = data.getFullYear();
writeFileSync(
  './output2.txt',
  `${message}, azi, ${day}.${mounth}.${year}!`,
  'utf8',
);

// writeFileSync('./output1.txt', `, azi, ${data.toString()}!`, 'utf8');

// console.log(message);
