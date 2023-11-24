// 16+
// import { readFileSync } from "fs";

// pana in 16

// fs = {readFileSync : () => {}, writeFileSync: () => {}}
const { readFileSync, writeFileSync } = require('fs');
const message = readFileSync('./output1.txt', 'utf8');
const data = new Date();
const day = data.getDate();
const month = data.getMonth();
const year = data.getFullYear();
writeFileSync(
  './output3.txt',
  `${message}, azi, ${day}.${month}.${year}!`,
  'utf8',
);
