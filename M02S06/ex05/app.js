// 16+
// import { readFileSync } from "fs";

// pana in 16

// fs = {readFileSync : () => {}, writeFileSync: () => {}}
const { writeFileSync } = require('fs');
writeFileSync('output1.txt', 'Invat node.js', 'utf8');
